import { notFound } from "next/navigation";
import { getNextProject, getProjectBySlug, projects } from "@/lib/projects";
import { ProjectDetail } from "@/components/sections/project-detail";
import { Footer } from "@/components/layout/footer";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug)!;

  return (
    <>
      <ProjectDetail project={project} nextProject={nextProject} />
      <Footer />
    </>
  );
}

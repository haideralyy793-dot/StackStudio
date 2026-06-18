export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  tech: string[];
  gradient: string;
  tags: string[];
  /** Placeholder — replace with your own project image later */
  image: string;
}

export const projects: Project[] = [
  {
    slug: "novapay-fintech",
    title: "NovaPay Fintech",
    category: "Fintech",
    year: "2025",
    description:
      "A modern payment platform enabling businesses to accept, manage, and reconcile transactions in real time with a seamless merchant dashboard.",
    challenge:
      "The client needed a secure, scalable payment infrastructure that could handle high transaction volumes while maintaining sub-second response times.",
    solution:
      "We built a Next.js frontend with a Node.js API layer, integrated Stripe for payments, and implemented real-time webhooks for instant reconciliation.",
    tech: ["Next.js", "Node.js", "Stripe"],
    tags: ["Next.js", "Node.js", "Stripe"],
    gradient: "from-[#1a1a1a] via-[#0d1a00] to-[#000000]",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop&q=80",
  },
  {
    slug: "pulse-health-app",
    title: "Pulse Health App",
    category: "Healthcare",
    year: "2025",
    description:
      "A cross-platform health tracking app that helps users monitor vitals, schedule appointments, and connect with care providers on the go.",
    challenge:
      "Delivering a consistent native experience on both iOS and Android while syncing health data reliably across devices.",
    solution:
      "We developed a React Native app with Firebase backend, offline-first architecture, and HIPAA-conscious data handling patterns.",
    tech: ["React Native", "Firebase"],
    tags: ["React Native", "Firebase"],
    gradient: "from-[#111111] via-[#1a1500] to-[#000000]",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop&q=80",
  },
  {
    slug: "vertex-ai-dashboard",
    title: "Vertex AI Dashboard",
    category: "AI / SaaS",
    year: "2024",
    description:
      "An intelligent analytics dashboard that surfaces AI-driven insights, automates reporting, and helps teams make data-backed decisions faster.",
    challenge:
      "Integrating multiple AI models into a unified interface without sacrificing performance or overwhelming non-technical users.",
    solution:
      "We designed a clean Next.js dashboard with OpenAI integrations, Python microservices for heavy processing, and progressive disclosure UX.",
    tech: ["Next.js", "OpenAI", "Python"],
    tags: ["Next.js", "OpenAI", "Python"],
    gradient: "from-[#0a0a0a] via-[#0f1a0a] to-[#000000]",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
  },
  {
    slug: "orbit-saas-platform",
    title: "Orbit SaaS Platform",
    category: "SaaS",
    year: "2024",
    description:
      "A full-stack SaaS platform for team collaboration, project management, and workflow automation built to scale from startup to enterprise.",
    challenge:
      "Creating a multi-tenant architecture that supports thousands of concurrent users with role-based access and real-time collaboration.",
    solution:
      "We engineered a Next.js app with PostgreSQL, AWS infrastructure, and granular permission systems with audit logging.",
    tech: ["Next.js", "PostgreSQL", "AWS"],
    tags: ["Next.js", "PostgreSQL", "AWS"],
    gradient: "from-[#111111] via-[#151500] to-[#000000]",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&q=80",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}

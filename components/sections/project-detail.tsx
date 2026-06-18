"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import type { Project } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

interface ProjectDetailProps {
  project: Project;
  nextProject: Project;
}

export function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const title = project.title;

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("preloader-complete"));
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 1.2, ease: "power2.out" },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      const targets = contentRef.current!.querySelectorAll("[data-animate]");
      gsap.fromTo(
        targets,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <div
        ref={heroRef}
        className="relative flex h-[60vh] items-end overflow-hidden"
        style={{ willChange: "transform" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16">
          <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl">
            {title.split("").map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                className="inline-block"
                style={{ willChange: "transform" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>

      <div ref={contentRef} className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <section data-animate style={{ willChange: "transform" }}>
              <h2 className="mb-4 text-xs uppercase tracking-widest text-[#888888]">Overview</h2>
              <p className="text-lg leading-relaxed text-white/80">{project.description}</p>
            </section>

            <section data-animate style={{ willChange: "transform" }}>
              <h2 className="mb-4 text-xs uppercase tracking-widest text-[#888888]">The Challenge</h2>
              <p className="leading-relaxed text-white/70">{project.challenge}</p>
            </section>

            <section data-animate style={{ willChange: "transform" }}>
              <h2 className="mb-4 text-xs uppercase tracking-widest text-[#888888]">The Solution</h2>
              <p className="leading-relaxed text-white/70">{project.solution}</p>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div
              data-animate
              className="sticky top-28 rounded-2xl border border-white/10 bg-[#111111] p-8"
              style={{ willChange: "transform" }}
            >
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-[#888888]">Category</p>
                <p className="mt-1 font-medium">{project.category}</p>
              </div>
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-[#888888]">Year</p>
                <p className="mt-1 font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#888888]">Tech Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div data-animate className="mt-24" style={{ willChange: "transform" }}>
          <p className="section-label mb-6">— NEXT PROJECT</p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group relative block overflow-hidden rounded-2xl p-12 transition-all hover-glow"
          >
            <Image
              src={nextProject.image}
              alt={nextProject.title}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${nextProject.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-80`} />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/60" />
            <div className="relative z-10">
              <p className="text-sm text-[#C8FF00]">Up Next →</p>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">{nextProject.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {nextProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

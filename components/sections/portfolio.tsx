"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function PortfolioSection() {
  return (
    <section id="work" className="bg-[#0a0a0a] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="section-label mb-4"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          — OUR WORK
        </motion.p>
        <motion.h2
          className="mb-16 text-4xl font-bold md:text-5xl lg:text-6xl"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Recent Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              layoutId={`project-${project.title}`}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 || i === 3 ? "md:row-span-1" : ""
              }`}
              style={{ minHeight: i % 2 === 0 ? 380 : 320, willChange: "transform" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-80`} />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/60" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold md:text-3xl">{project.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/work/${project.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-[#C8FF00] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

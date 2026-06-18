"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Pen, Code, Rocket } from "lucide-react";
import { processSteps } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const iconMap = { search: Search, pen: Pen, code: Code, rocket: Rocket };

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1.5,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-black px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="section-label mb-4"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          — OUR PROCESS
        </motion.p>
        <motion.h2
          className="mb-20 text-4xl font-bold md:text-5xl lg:text-6xl"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Simple. Fast. Effective.
        </motion.h2>

        <div className="relative">
          <svg
            className="absolute top-12 left-0 hidden h-1 w-full md:block"
            preserveAspectRatio="none"
            aria-hidden
          >
            <line
              ref={lineRef}
              x1="12.5%"
              y1="0"
              x2="87.5%"
              y2="0"
              stroke="#C8FF00"
              strokeWidth="1"
              strokeDasharray="1000"
              strokeOpacity="0.4"
            />
          </svg>

          <div className="grid gap-12 md:grid-cols-4 md:gap-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={step.step}
                  className="relative flex flex-col items-start md:items-center md:text-center"
                  style={{ willChange: "transform" }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: i * 0.12 }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#C8FF00]/30 bg-[#C8FF00]/10 text-[#C8FF00]">
                    <Icon size={20} />
                  </div>
                  <span className="mb-2 text-xs tracking-widest text-[#C8FF00]">{step.step}</span>
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-[#888888]">{step.description}</p>

                  {i < processSteps.length - 1 && (
                    <div className="absolute top-6 left-6 h-full w-px bg-white/10 md:hidden" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

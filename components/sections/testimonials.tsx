"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let frame: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
      el.scrollLeft = scrollPos;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const items = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-[#0a0a0a] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="section-label mb-4"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          — TESTIMONIALS
        </motion.p>
        <motion.h2
          className="mb-16 text-4xl font-bold md:text-5xl lg:text-6xl"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          What Our Clients Say
        </motion.h2>
      </div>

      <div
        ref={scrollRef}
        className="hide-scrollbar flex gap-6 overflow-x-auto px-6 pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item, i) => (
          <article
            key={`${item.name}-${i}`}
            className="w-[340px] shrink-0 snap-center rounded-2xl border border-white/10 bg-[#111111] p-8 md:w-[400px]"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C8FF00]/15 text-sm font-bold text-[#C8FF00]">
                {item.initials}
              </div>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-[#888888]">
                  {item.role}, {item.company}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/75">&ldquo;{item.quote}&rdquo;</p>
          </article>
        ))}
      </div>
    </section>
  );
}

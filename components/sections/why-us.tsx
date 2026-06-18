"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { whyUsPoints } from "@/lib/data";

export function WhyUsSection() {
  return (
    <section className="bg-black px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          style={{ willChange: "transform" }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Why Teams Choose{" "}
            <span className="text-[#C8FF00]">Stack Studio</span>
          </h2>
        </motion.div>

        <motion.ul
          className="space-y-5"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {whyUsPoints.map((point, i) => (
            <motion.li
              key={point}
              className="flex items-start gap-4"
              style={{ willChange: "transform" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1 + i * 0.06 }}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C8FF00]/15 text-[#C8FF00]">
                <Check size={14} strokeWidth={3} />
              </span>
              <span className="text-base text-white/80 md:text-lg">{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

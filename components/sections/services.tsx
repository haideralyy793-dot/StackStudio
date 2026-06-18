"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Brain, Layers, Palette, Server } from "lucide-react";
import { services } from "@/lib/data";

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  brain: Brain,
  layers: Layers,
  palette: Palette,
  server: Server,
};

export function ServicesSection() {
  return (
    <section id="services" className="bg-black px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="section-label mb-4"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          — WHAT WE DO
        </motion.p>
        <motion.h2
          className="mb-16 text-4xl font-bold md:text-5xl lg:text-6xl"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Our Core Services
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-[#111111] p-8 transition-all duration-300 hover:border-[#C8FF00]/30 hover-glow"
                style={{ willChange: "transform" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="mb-5 inline-flex rounded-xl bg-[#C8FF00]/10 p-3 text-[#C8FF00]">
                  <Icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-[#888888]">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

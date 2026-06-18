"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  const [display, setDisplay] = useState(0);
  const isRange = prefix === "3–";

  useEffect(() => {
    if (!inView) {
      setDisplay(0);
      return;
    }

    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  const text = isRange ? `${prefix}${display}` : `${prefix}${display}${suffix}`;

  return (
    <span ref={ref} className="text-5xl font-bold md:text-6xl lg:text-7xl" style={{ willChange: "transform" }}>
      {text}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-[#0a0a0a] px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="relative text-center md:px-8"
            style={{ willChange: "transform" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: i * 0.1 }}
          >
            {i > 0 && (
              <div className="absolute top-1/2 left-0 hidden h-16 w-px -translate-y-1/2 bg-white/10 md:block" />
            )}
            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            <p className="mt-3 text-sm text-[#888888]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

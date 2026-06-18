"use client";

import { marqueeItems } from "@/lib/data";

export function MarqueeSection() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#0a0a0a] py-5" aria-label="Services ticker">
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <span key={`${item.text}-${i}`} className="mx-6 flex items-center gap-6 text-sm font-medium tracking-widest uppercase whitespace-nowrap">
            <span className={item.accent ? "text-[#C8FF00]" : "text-white/60"}>{item.text}</span>
            <span className="text-white/20">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}

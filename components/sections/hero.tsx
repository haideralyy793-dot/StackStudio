"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const headlineLines = [
  ["We", "Build", "Digital"],
  ["Products", "That", "Scale"],
];

export function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onComplete = () => setReady(true);
    window.addEventListener("preloader-complete", onComplete);
    return () => window.removeEventListener("preloader-complete", onComplete);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      glowRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(200,255,0,0.06) 0%, transparent 50%)`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black bg-grid px-6"
    >
      <div ref={glowRef} className="pointer-events-none absolute inset-0 transition-[background] duration-300" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          {headlineLines.map((line, lineIdx) => (
            <span key={lineIdx} className="block">
              {line.map((word, wordIdx) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.25em] last:mr-0"
                  style={{ willChange: "transform" }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{
                    duration: 0.6,
                    delay: lineIdx * 0.15 + wordIdx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          className="mx-auto mt-8 max-w-xl text-base text-[#888888] md:text-lg"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Next-gen web, mobile &amp; AI solutions — delivered in days, not months.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <Link
            href="#contact"
            className="group rounded-full bg-[#C8FF00] px-8 py-3.5 text-sm font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]"
          >
            Get a Free Quote →
          </Link>
          <Link
            href="#work"
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white transition-all hover:border-[#C8FF00]/50 hover:text-[#C8FF00]"
          >
            See Our Work
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ willChange: "transform" }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        aria-hidden
      >
        <ChevronDown className="h-6 w-6 text-white/40" />
      </motion.div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineTrackRef = useRef<HTMLDivElement>(null);
  const lineOverlayRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const counterObj = useRef({ value: 0 });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        logoRef.current,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power3.out" },
      );

      tl.fromTo(
        lineTrackRef.current,
        { width: 0 },
        { width: 280, duration: 0.5, ease: "power2.out" },
        "-=0.2",
      );

      tl.to(
        counterObj.current,
        {
          value: 100,
          duration: 1.4,
          ease: "power2.inOut",
          onUpdate: () => {
            const val = Math.round(counterObj.current.value);
            if (counterRef.current) {
              counterRef.current.textContent = String(val);
            }
            if (lineOverlayRef.current) {
              lineOverlayRef.current.style.width = `${100 - val}%`;
            }
          },
        },
        "-=0.3",
      );

      tl.to({}, { duration: 0.2 });
      tl.to(counterRef.current, {
        opacity: 0.5,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });

      tl.to(contentRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });

      tl.to(
        topRef.current,
        { yPercent: -100, duration: 0.7, ease: "power4.inOut" },
        "-=0.05",
      ).to(
        bottomRef.current,
        { yPercent: 100, duration: 0.7, ease: "power4.inOut" },
        "<",
      );

      tl.eventCallback("onComplete", () => {
        document.body.style.overflow = "";
        window.dispatchEvent(new CustomEvent("preloader-complete"));
        setVisible(false);
      });
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[10000]">
      <div ref={topRef} className="absolute top-0 left-0 h-1/2 w-full bg-black" />
      <div ref={bottomRef} className="absolute bottom-0 left-0 h-1/2 w-full bg-black" />

      <div
        ref={contentRef}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center"
      >
        <div ref={logoRef} className="mb-10" style={{ willChange: "transform" }}>
          <Image
            src="/logo.png"
            alt="Stack Studio"
            width={200}
            height={120}
            className="h-28 w-auto object-contain invert"
            priority
          />
        </div>

        <div className="relative h-[2px] overflow-hidden" style={{ width: 280 }}>
          <div
            ref={lineTrackRef}
            className="absolute top-0 left-0 h-full w-0 overflow-hidden"
            style={{ willChange: "transform" }}
          >
            <div className="h-full w-[280px] bg-[#b4f400]" />
            <div
              ref={lineOverlayRef}
              className="absolute top-0 right-0 h-full bg-black"
              style={{ width: "100%", willChange: "transform" }}
            />
          </div>
        </div>

        <div className="mt-8 flex items-baseline" style={{ willChange: "transform" }}>
          <span
            ref={counterRef}
            className="text-[72px] font-bold leading-none text-white"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            0
          </span>
          <span className="ml-1 text-[32px] font-bold text-[#b4f400]">%</span>
        </div>
      </div>
    </div>
  );
}

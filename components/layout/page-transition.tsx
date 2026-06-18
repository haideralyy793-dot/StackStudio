"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setShowOverlay(true);
    const timer = setTimeout(() => setShowOverlay(false), 900);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={pathname}>{children}</motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-black"
            initial={{ y: "100%" }}
            animate={{ y: ["100%", "0%", "-100%"] }}
            transition={{ duration: 0.9, times: [0, 0.45, 1], ease: [0.76, 0, 0.24, 1] }}
            style={{ willChange: "transform" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 0.9, times: [0, 0.2, 0.7, 1] }}
            >
              <Image
                src="/logo.png"
                alt="Stack Studio"
                width={200}
                height={120}
                className="h-24 w-auto object-contain invert"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

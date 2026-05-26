"use client";

import { useEffect, useRef, useState } from "react";
import type { Easing, Transition, Variants } from "framer-motion";

export const easeOut: Transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export const revealVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: easeOut },
};

export const staggerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const hoverLift = {
  whileHover: {
    y: -6,
    transition: { duration: 0.25, ease: "easeOut" as Easing },
  },
};

export function useNumberCounter(target: number, duration = 1.2) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = (now - start) / (duration * 1000);
      const progress = Math.min(elapsed, 1);
      setCount(Math.round(progress * target));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [target, duration]);

  return count;
}

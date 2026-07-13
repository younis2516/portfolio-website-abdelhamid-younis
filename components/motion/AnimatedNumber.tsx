"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const NUM_RE = /(\d+(?:\.\d+)?)/g;

function CountUpToken({
  value,
  decimals,
  delay,
}: {
  value: number;
  decimals: number;
  delay: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!isInView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.1,
      delay,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, reduce, value, delay]);

  return <span ref={ref}>{display.toFixed(decimals)}</span>;
}

/**
 * Renders arbitrary text (e.g. "−18% failed searches", "4 weeks → 10 days")
 * with every embedded number counting up from 0 on scroll-into-view, while
 * the surrounding text (signs, units, arrows) stays static.
 */
export default function AnimatedNumber({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const parts = text.split(NUM_RE);

  return (
    <motion.span className={className}>
      {parts.map((part, i) => {
        if (i % 2 === 1) {
          const decimals = part.includes(".") ? part.split(".")[1].length : 0;
          return (
            <CountUpToken
              key={i}
              value={parseFloat(part)}
              decimals={decimals}
              delay={delay}
            />
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </motion.span>
  );
}

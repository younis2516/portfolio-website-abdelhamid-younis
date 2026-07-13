"use client";

import { motion, useReducedMotion } from "framer-motion";
import AnimatedNumber from "@/components/motion/AnimatedNumber";

const EASE = [0.22, 1, 0.36, 1] as const;

function ArrowGlyph({ reduce }: { reduce: boolean }) {
  return (
    <motion.svg
      width="44"
      height="14"
      viewBox="0 0 44 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
      viewport={{ once: true, margin: "-80px" }}
      whileInView={reduce ? undefined : { x: [0, 4, 0] }}
      transition={
        reduce
          ? undefined
          : {
              x: {
                delay: 0.9,
                duration: 1.1,
                repeat: Infinity,
                repeatDelay: 0.6,
                ease: EASE,
              },
            }
      }
    >
      <motion.line
        x1="1"
        y1="7"
        x2="34"
        y2="7"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
      />
      <motion.path
        d="M28 2L36 7L28 12"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: reduce ? 0 : 0.5, duration: 0.2 }}
      />
    </motion.svg>
  );
}

export default function TracedLine({
  decision,
  result,
  className = "",
}: {
  decision: string;
  result: string;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base ${className}`}
    >
      <span className="text-ink">{decision}</span>
      <ArrowGlyph reduce={!!reduce} />
      <AnimatedNumber
        text={result}
        delay={reduce ? 0 : 0.5}
        className="font-ss-mono text-sm text-accent"
      />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { usePortfolio } from "@/context/PortfolioContext";

const EASE = [0.22, 1, 0.36, 1] as const;

const DEFAULT_TEXT = (
  <>
    I started as an engineer — which means I design for systems, not just screens. After 7
    years spanning startups and enterprise at REWE Group, I bring an unusual range: from
    zero-to-one product work to UX that ships across 500+ locations. I care about decisions
    that are traceable — where you can draw a line from a design choice to a business result.
  </>
);

export default function SystemPositioning() {
  const { status, personalisation } = usePortfolio();

  const isLoading = status === "loading";
  const isDone = status === "done" && !!personalisation?.aboutText;

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6 pb-16 sm:pb-24">
        <div className="max-w-2xl lg:pl-[calc(30%+4rem)]">
          {isLoading ? (
            <div className="space-y-3 animate-pulse">
              <div className="h-4 bg-hairline w-full" />
              <div className="h-4 bg-hairline w-5/6" />
              <div className="h-4 bg-hairline w-4/5" />
            </div>
          ) : (
            <motion.p
              initial={isDone ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-sm sm:text-base leading-relaxed text-muted"
            >
              {isDone ? personalisation!.aboutText : DEFAULT_TEXT}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { usePortfolio } from "@/context/PortfolioContext";

const DEFAULT_TEXT = (
  <>
    I started as an engineer — which means I design for systems, not just screens.{" "}
    <span className="text-zinc-900 dark:text-white font-medium">
      After 7 years spanning startups and enterprise at REWE Group, I bring an unusual
      range: from zero-to-one product work to UX that ships across 500+ locations.
    </span>{" "}
    I care about decisions that are traceable — where you can draw a line from a design
    choice to a business result.
  </>
);

export default function SystemPositioning() {
  const { status, personalisation } = usePortfolio();

  const isLoading = status === "loading";
  const isDone = status === "done" && !!personalisation?.aboutText;

  return (
    <section className="w-full mt-4 sm:mt-4">
      <div className="w-full py-2 sm:py-4">
        <div className="max-w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
              relative
              rounded-3xl
              px-6 py-8 sm:px-12 sm:py-10
              bg-white/70 dark:bg-white/[0.03]
              backdrop-blur-xl
              border border-black/5 dark:border-white/10
              overflow-hidden
            "
          >
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#d7f3ef] blur-[120px]" />
              <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#f7e2c8] blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              {isLoading ? (
                <div className="space-y-3 animate-pulse">
                  <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-full mx-auto" />
                  <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-5/6 mx-auto" />
                  <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-4/5 mx-auto" />
                </div>
              ) : (
                <motion.div
                  initial={isDone ? { opacity: 0 } : false}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-sm sm:text-base lg:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {isDone ? personalisation!.aboutText : DEFAULT_TEXT}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

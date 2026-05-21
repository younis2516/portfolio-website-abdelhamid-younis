"use client";

import { useRef } from "react";
import { motion, useInView, Variants, AnimationProps } from "framer-motion";
import SectionHeading from "@/components/Section_heading";

type WorkflowColor = {
  badge: string;
  badgeBg: string;
  badgeBgDark: string;
  iconStroke: string;
  outcome: string;
  cardGradient: string;
  hoverBorder: string;
  hoverShadow: string;
};

type Workflow = {
  name: string;
  outcome: string;
  description: string;
  colors: WorkflowColor;
  iconPath: string;
  iconAnim: AnimationProps["animate"];
};

// Badge bg/text use the hero palette hex values (#d7f3ef → #f3efe5 → #f7e2c8)
const workflows: Workflow[] = [
  {
    name: "Figma Make → Claude → Figma Make",
    outcome: "Compressed 4-week design cycles into 10 days",
    description:
      "I prototype in Figma Make, export structured markdown docs (design.md, description.md, instructions.md), iterate conversationally in Claude Artifacts at 2–5 min per round, then re-implement refined designs back in Figma Make.",
    colors: {
      badge: "",
      badgeBg: "#d7f3ef",
      badgeBgDark: "rgba(15,47,44,0.6)",
      iconStroke: "#0f766e",
      outcome: "text-blue-600 dark:text-blue-400",
      cardGradient: "bg-gradient-to-br from-[#d7f3ef]/30 to-white dark:from-[#0f2f2c]/20 dark:to-transparent",
      hoverBorder: "hover:border-black/20 dark:hover:border-white/20",
      hoverShadow: "",
    },
    iconPath:
      "M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6",
    iconAnim: {
      rotate: [0, 15, -15, 0],
      scale: [1, 1.1, 1],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  },
  {
    name: "MCP Integrations — Figma, Notion, Mobbin",
    outcome: "Design research and documentation without context switching",
    description:
      "I connect Claude directly to Figma via MCP to generate quick screens, use Notion MCP to edit docs from Claude, and use Mobbin MCP to find UI inspiration without leaving the workflow.",
    colors: {
      badge: "",
      badgeBg: "#e8ede9",
      badgeBgDark: "rgba(30,40,35,0.6)",
      iconStroke: "#3d7a6a",
      outcome: "text-blue-600 dark:text-blue-400",
      cardGradient: "bg-gradient-to-br from-[#e8ede9]/40 to-white dark:from-[#1e2823]/20 dark:to-transparent",
      hoverBorder: "hover:border-black/20 dark:hover:border-white/20",
      hoverShadow: "",
    },
    iconPath:
      "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244",
    iconAnim: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.7, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  },
  {
    name: "Cursor + Manual Code",
    outcome: "Shipped full-stack apps solo — Event Masters, Lehr.app",
    description:
      "I use cursor to generate frontend scaffolding, then manually intervene in the code when v0 doesn't understand the backend structure. Delivered apps with Clerk auth, Stripe, Airtable, and OneSignal PWA notifications.",
    colors: {
      badge: "",
      badgeBg: "#f3efe5",
      badgeBgDark: "rgba(42,37,32,0.6)",
      iconStroke: "#8c6a3f",
      outcome: "text-blue-600 dark:text-blue-400",
      cardGradient: "bg-gradient-to-br from-[#f3efe5]/60 to-white dark:from-[#2a2520]/20 dark:to-transparent",
      hoverBorder: "hover:border-black/20 dark:hover:border-white/20",
      hoverShadow: "",
    },
    iconPath:
      "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
    iconAnim: {
      y: [0, -4, 0],
      transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
    },
  },
  {
    name: "AI-Assisted Design Critique",
    outcome: "Faster iteration before stakeholder reviews",
    description:
      "After every design, I attach the screen to Claude with business context and ask for 2–3 design variants or a critical review. This surfaces issues before they reach stakeholders and reduces revision rounds.",
    colors: {
      badge: "",
      badgeBg: "#f7e2c8",
      badgeBgDark: "rgba(58,47,34,0.6)",
      iconStroke: "#b05d1a",
      outcome: "text-blue-600 dark:text-blue-400",
      cardGradient: "bg-gradient-to-br from-[#f7e2c8]/40 to-white dark:from-[#3a2f22]/20 dark:to-transparent",
      hoverBorder: "hover:border-black/20 dark:hover:border-white/20",
      hoverShadow: "",
    },
    iconPath:
      "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z",
    iconAnim: {
      rotate: [-8, 8, -8],
      transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
    },
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function AIWorkflowSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full max-w-[90%] mx-auto py-16 sm:py-20 overflow-hidden"
    >
      {/* Decorative background blobs — hero palette */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px]" style={{ background: "#d7f3ef", opacity: 0.35 }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px]" style={{ background: "#f7e2c8", opacity: 0.35 }} />
      </div>

      <SectionHeading>How I Work With AI</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-5">
        {workflows.map((w, i) => (
          <motion.div
            key={w.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`
              group
              relative
              flex flex-col gap-4
              rounded-3xl
              border border-black/[0.07] dark:border-white/[0.08]
              ${w.colors.cardGradient}
              p-7 sm:p-8
              ${w.colors.hoverBorder}
              hover:shadow-lg ${w.colors.hoverShadow}
              transition-all duration-300
            `}
          >
            {/* Colored accent line at top */}
            <div
              className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(90deg, transparent, ${w.colors.iconStroke}80, transparent)`,
              }}
            />

            {/* Animated icon badge */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors"
              style={{ background: w.colors.badgeBg }}
            >
              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                style={{ stroke: w.colors.iconStroke }}
                animate={w.iconAnim}
              >
                <path d={w.iconPath} />
              </motion.svg>
            </div>

            {/* Workflow name */}
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white leading-snug">
              {w.name}
            </h3>

            {/* Outcome metric */}
            <p className={`text-sm font-semibold ${w.colors.outcome}`}>
              {w.outcome}
            </p>

            {/* Description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {w.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

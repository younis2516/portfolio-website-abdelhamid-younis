"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { FiLock } from "react-icons/fi";
import TracedLine from "@/components/motion/TracedLine";

type ProjectProps2 = (typeof projectsData)[number];

type FeaturedProjectProps = ProjectProps2 & {
  order?: "imageLeft" | "imageRight";
  showImage?: boolean;
  variant?: "default" | "small";
  isHighlighted?: boolean;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProjectFeaturedRL({
  id,
  title,
  description,
  imageUrl,
  project_type,
  year,
  traced,
  wash,
  order = "imageRight",
  showImage = true,
  variant = "default",
  isHighlighted = false,
}: FeaturedProjectProps) {
  /* =====================================================
     NAVIGATION
  ===================================================== */

  const titleToSlugMap: Record<string, string> = {
    "Large-Scale Quantitative & Qualitative UX Research": "billa-terminal",
    "App Radar — Growth & Analytics Platform Redesign": "app-radar-ui-redesign",
    "Forasna — Increasing Job Post Completion & Application Volume":
      "forasna-form",
    "Driving Product Adoption in an AI-Powered SaaS Platform":
      "tubics-video-optimization-tool",
    "Tubics — Scalable Design System & Engineering Alignment":
      "tubics-design-system-documentation",
    "Grocery Bot (Innovation Concept)": "grocery-shopping-bot",
    "Owning product vision and frontend architecture for an AI learning platform.":
      "lehr-app",
    "Designing & Scaling a Nationwide Self-Checkout System":
      "rewe-white-label-sco",
    "AI-Assisted POS Dashboard — Figma Make × Claude Pipeline":
      "ai-pos-dashboard",
  };

  const fallbackSlug = String(title)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  const isLehrApp = title.toLowerCase().includes("ai learning");

  const href = `/projects/${titleToSlugMap[String(title)] || fallbackSlug}`;

  const CTA_LABEL = project_type?.includes("Web Dev")
    ? "View project"
    : "View case study";

  const isSmall = variant === "small";
  const highlightClass = isHighlighted
    ? "border-l-2 border-accent pl-6 -ml-6"
    : "";

  /* =====================================================
     LEDGER ROW (no image — secondary / hidden projects)
  ===================================================== */

  if (isSmall || !showImage) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <Link
          href={href}
          id={id ? `project-${id}` : undefined}
          className={`group block py-8 border-b border-hairline ${highlightClass}`}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
            <div className="max-w-xl">
              <p className="font-ss-mono text-xs uppercase tracking-widest text-muted mb-2">
                {year} — {project_type?.[0]}
              </p>
              <h3 className="font-display text-xl sm:text-2xl text-ink mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{description}</p>
            </div>
            <span className="font-ss-mono text-xs uppercase tracking-widest text-accent underline decoration-accent/30 underline-offset-4 group-hover:decoration-accent whitespace-nowrap shrink-0">
              {CTA_LABEL} →
            </span>
          </div>
        </Link>
      </motion.div>
    );
  }

  /* =====================================================
     EDITORIAL ROW
  ===================================================== */

  const isImageLeft = order === "imageLeft";

  return (
    <motion.div
      id={id ? `project-${id}` : undefined}
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`py-12 sm:py-16 ${highlightClass}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <div className={isImageLeft ? "lg:order-1" : "lg:order-2"}>
          <Link
            href={href}
            className="project-media block p-6 sm:p-10"
            style={{
              background: wash
                ? `radial-gradient(120% 120% at 50% 20%, ${wash} 0%, transparent 70%)`
                : "var(--color-paper)",
            }}
          >
            <Image
              src={imageUrl}
              alt={title}
              className="h-auto w-full object-contain"
              quality={95}
            />
          </Link>
        </div>

        <div className={isImageLeft ? "lg:order-2" : "lg:order-1"}>
          <p className="font-ss-mono text-xs uppercase tracking-widest text-muted mb-3 flex flex-wrap items-center gap-3">
            <span>
              {year} — {project_type?.[0]}
            </span>
            {id === "ai-pos-dashboard" && (
              <span className="inline-flex items-center gap-1.5 border border-hairline px-2 py-1 normal-case tracking-normal">
                <FiLock className="w-3 h-3" /> Password protected
              </span>
            )}
          </p>

          <h3 className="font-display text-2xl sm:text-3xl text-ink mb-4">
            <Link href={href}>{title}</Link>
          </h3>

          <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
            {description}
          </p>

          {isLehrApp && (
            <a
              href="https://lehr.app"
              target="_blank"
              rel="noreferrer"
              className="inline-block mb-6 font-ss-mono text-xs uppercase tracking-widest text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
            >
              Visit lehr.app ↗
            </a>
          )}

          {traced && traced.length > 0 && (
            <div className="space-y-2 mb-6">
              {traced.map((t) => (
                <TracedLine
                  key={t.result}
                  decision={t.decision}
                  result={t.result}
                />
              ))}
            </div>
          )}

          <Link
            href={href}
            className="font-ss-mono text-xs uppercase tracking-widest text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            {CTA_LABEL} →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

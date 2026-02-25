"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps2 = (typeof projectsData)[number];

type FeaturedProjectProps = ProjectProps2 & {
  order?: "imageLeft" | "imageRight";
  showImage?: boolean;
  variant?: "default" | "small";
};

export default function ProjectFeaturedRL({
  title,
  description,
  tags,
  imageUrl,
  project_type,
  year,
  order = "imageRight",
  showImage = true,
  variant = "default",
}: FeaturedProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  /* =====================================================
     NAVIGATION
  ===================================================== */

  const titleToSlugMap: Record<string, string> = {
    "Large Scale Quantitive and Qualititve UX Research": "billa-terminal",
    "App Radar UI Redesign ": "app-radar-ui-redesign",
    "Driving PMF by designing Tubics’ highest engagement feature.":
      "tubics-video-optimization-tool",
    "Design system that ships: from UI to Development":
      "tubics-design-system-documentation",
    "Wuzzuf Hiring dashboard: Biggest job portal in MENA":
      "wuzzuf-hiring-dashboard",
    "Coming soon: POS dashboard Built with V0 by Vercel":
      "pos-dashboard-v0-vercel",
    "Grocery Bot (Innovation Concept)": "grocery-shopping-bot",
    "My portfolio website": "portfolio-website",
    "E-commerce admin portal": "ecommerce-admin-portal",
    "Owning product vision and frontend architecture for an AI learning platform.":
      "lehr-app",
    "Designing at System Scale to serve Millions in Retail":
      "rewe-white-label-sco",
    "Designing & Developing an AI-Native German Learning App — lehr.app":
      "lehr-app",
  };

  const fallbackSlug = String(title)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  const isLehrApp = title.toLowerCase().includes("ai learning");

  // const href = isLehrApp
  //   ? "https://lehr.app"
  //   : `/projects/${titleToSlugMap[String(title)] || fallbackSlug}`;
  const href = `/projects/${titleToSlugMap[String(title)] || fallbackSlug}`;

  const external = isLehrApp;

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {children}
      </a>
    ) : (
      <Link href={href} className="block h-full">
        {children}
      </Link>
    );

  const CTA_LABEL = project_type?.includes("Web Dev")
    ? "View project"
    : "View case study";

  const isImageLeft = order === "imageLeft";

  /* =====================================================
     VARIANT CONFIG
  ===================================================== */

  const isSmall = variant === "small";

  const gridCols = isSmall
    ? "grid-cols-1"
    : showImage
      ? "grid-cols-1 lg:grid-cols-2"
      : "grid-cols-1";

  const imageOrder = isImageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2";

  const contentOrder = isImageLeft
    ? "order-2 lg:order-2"
    : "order-2 lg:order-1";

  /* =====================================================
     COMPONENT
  ===================================================== */

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="mb-8 h-full group"
    >
      <Wrapper>
        <section className="relative h-full overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-slate-50/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer sm:max-h-[38rem]">
          {/* Floating arrow for SMALL variant */}
          {isSmall && (
            <div
              className={`absolute top-6 right-6 sm:top-6 sm-right-6 w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center`}
            >
              <RxArrowTopRight />
            </div>
          )}

          <div className={`grid h-full ${gridCols}`}>
            {/* IMAGE AREA */}
            {showImage && (
              <div
                className={`
                  ${imageOrder}
                  ${isSmall ? "order-last" : ""}
                  h-full
                   ${isSmall ? "" : "bg-slate-50 dark:bg-white/10"}
                  flex items-center justify-center
                  ${isSmall ? "mt-[-40px]" : ""}
                  p-10
                `}
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.15]"
                  quality={95}
                />
              </div>
            )}

            {/* CONTENT AREA */}
            <div
              className={`${contentOrder} flex flex-col ${isSmall ? "p-8 lg:p-8" : "p-8 lg:p-12"}   h-full`}
            >
              <p className="text-sm text-gray-500 dark:text-white/60 mb-3">
                {year} — {project_type?.[0]}
              </p>

              <h3
                className={`text-2xl ${isSmall ? "text-xl lg:text-2xl" : "text-2xl lg:text-3xl"} font-semibold mb-4`}
              >
                {title}
              </h3>

              <p className="text-gray-700 dark:text-white/70 mb-6">
                {description}
              </p>

              {isLehrApp && (
                <div
                  className={`dark:border-white/10  underline text-blue-500 dark:text-blue-300 mt-[-16px] flex flex-row gap-2 items-center`}
                >
                  <a
                    href="https://lehr.app"
                    target="_blank"
                    className="text-nowrap"
                  >
                    Visit lehr.app
                  </a>
                  <a
                    href="https://lehr.app"
                    target="_blank"
                    className="text-nowrap"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              )}

              {!isSmall && (
                <div className="flex flex-wrap gap-3 mb-8">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm border border-gray-200 dark:border-gray-200/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              {!isSmall && (
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:scale-105 transition">
                    {CTA_LABEL}
                    <RxArrowTopRight />
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>
      </Wrapper>
    </motion.div>
  );
}

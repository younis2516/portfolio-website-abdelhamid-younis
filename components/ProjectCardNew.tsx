"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiBookOpen, FiCalendar, FiClock } from "react-icons/fi";
import { useTheme } from "@/context/theme-context";
import { getThemedBg } from "@/lib/utils";
import { RxArrowTopRight } from "react-icons/rx";

type ProjectProps = {
  title: String;
  description: String;
  tags: [String];
  imageUrl?: String | undefined;
};

type ProjectProps2 = (typeof projectsData)[number];

function ProjectCardNew({
  title,
  description,
  tags,
  imageUrl,
  link,
  project_type,
  year,
  readingTime,
  bgColor,
}: ProjectProps2) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const titleToSlugMap: Record<string, string> = {
    "Billa Austria self-service terminal": "billa-terminal",
    "App Radar UI Redesign ": "app-radar-ui-redesign",
    "Tubics Video Optimization Tool ": "tubics-video-optimization-tool",
    "Tubics's Design System & documentation":
      "tubics-design-system-documentation",
    "Wuzzuf Hiring dashboard": "wuzzuf-hiring-dashboard",
    "Coming soon: POS dashboard Built with V0 by Vercel":
      "pos-dashboard-v0-vercel",
    "HCI Project: Grocery Shopping Bot ": "grocery-shopping-bot",
    "My portfolio website": "portfolio-website",
    "E-commerce admin portal": "ecommerce-admin-portal",
    "lehr.app: Learn German with AI": "lehr-app",
    "Rewe self checkout white label solution": "rewe-white-label-sco",
  };

  const fallbackSlug = String(title)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  const internalHref = `/projects/${titleToSlugMap[String(title)] || fallbackSlug}`;
  const isExternalProject =
    String(title) === "E-commerce admin portal" ||
    String(title) === "lehr.app: Practice German with AI-generated Exercises";
  const { theme } = useTheme();

  const bg = getThemedBg(bgColor, theme, {
    lightPercent: 5,
    darkPercent: 7,
  });
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" group mb-3 sm:mb-8 rounded rounded-2xl"
    >
      <section
        style={{
          backgroundColor: bg,
        }}
        className={`bg-[${bgColor}] py-4  w-full sm:max-w-[50rem] border border-black/5 rounded rounded-2xl overflow-hidden sm:pr-8 relative sm:h-[44rem] transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20`}
      >
        {/* {readingTime > 0 ? (
          <div className="absolute top-8 right-8 items-center flex flex-row justify-center gap-1  py-1 px-3 bg-gray-200/70 border border-gray-200  dark:bg-gray-600  rounded-full">
            <FiClock className="text-base text-gray-700 tracking-wider text-nowrap dark:text-white/70" />
            <p className="text-base text-gray-700 tracking-wider text-nowrap dark:text-white/70">
              {readingTime}
            </p>
          </div>
        ) : null} */}

        <div className="pt-4 pb-7  py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 w-full items-center  text-center flex flex-col h-full">
          <div className="flex  items-center justify-center inline-block  w-full rounded-md">
            <div className="flex flex-row items-center justify-center">
              {/* <FiCalendar className='text-base text-gray-700 tracking-wider text-nowrap dark:text-white/70'/> */}
              <p className=" text-sm sm:text-base text-gray-700 tracking-wider text-nowrap dark:text-white/70">
                {year} - {project_type[0]}
              </p>
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold mt-2 gap-2">
            {title}
          </h3>
          <p className=" line-clamp-2 lg:line-clamp-none mt-2 mb-2 sm:mb-0 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          {/* TAGS SECTION */}
          {/* <ul className="flex flex-wrap gap-2 mt-4 mb-6">
            {tags
              .sort((a, b) => a.length - b.length)
              .map((tag: String, index: number) => (
                <li
                  className=" border border-gray-300 text-sm text-gray-700 dark:bg-gray-600 dark:text-white/70 px-3 py-1 sm:mt-2 text-sm rounded-full tracking-wider"
                  key={index}
                >
                  {tag}
                </li>
              ))}
          </ul> */}
          <div className="  flex flex-row  items-center gap-2 mt-3 sm:mt-8 mb-2 px-6 py-4 transition hover:transition-transform bg-slate-950 text-white/90 hover:bg-slate-950/80 hover:text-white cursor-pointer rounded rounded-full text-gray-800 dark:text-white/70 dark:bg-white/15 dark:hover:bg-white/30 border border-gray-900/10">
            {isExternalProject ? (
              <a
                href={String(link)}
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed "
              >
                Go to project
              </a>
            ) : (
              <Link
                href={internalHref}
                className="leading-relaxed flex flex-row items-center justify-center gap-2"
              >
                {project_type.includes("Web Dev")
                  ? "Go to project"
                  : "View case study"}
                <RxArrowTopRight />
              </Link>
            )}
          </div>
          {readingTime > 0 ? (
            <p className="text-sm sm:text-base text-gray-700 tracking-wider text-nowrap dark:text-white/70">
              {readingTime} min read
            </p>
          ) : null}
          <div className="rounded rounded-2xl mt-8 transition hover:translate-y-[-70px] hover:scale-75">
            <Image
              className="rounded rounded-lg"
              src={imageUrl}
              alt={title}
              quality={95}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
export default ProjectCardNew;

"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiBookOpen, FiCalendar, FiClock } from "react-icons/fi";
import { RxArrowTopRight } from "react-icons/rx";

type ProjectProps = {
  title: String;
  description: String;
  tags: [String];
  imageUrl?: String | undefined;
};

type ProjectProps2 = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  project_type,
  year,
  readingTime,
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
    "Driving PMF by designing Tubics’ highest used feature.":
      "tubics-video-optimization-tool",
    "Design system that ships: from UI to Development":
      "tubics-design-system-documentation",
    "Wuzzuf Hiring dashboard: Biggest job portal in MENA":
      "wuzzuf-hiring-dashboard",
    "Coming soon: POS dashboard Built with V0 by Vercel":
      "pos-dashboard-v0-vercel",
    "HCI Project: Grocery Shopping Bot ": "grocery-shopping-bot",
    "My portfolio website": "portfolio-website",
    "E-commerce admin portal": "ecommerce-admin-portal",
    "lehr.app: Practice German with AI-generated Exercises": "lehr-app",
    "Rewe International Self checkout white label solution":
      "rewe-white-label-sco",
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

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" group mb-3 sm:mb-8"
    >
      <section className="bg-gray-100/50 w-full sm:max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[32rem] hover:bg-gray-100 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20 ">
        <div className="pt-4 pb-7  py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 w-full sm:max-w-[55%] flex flex-col h-full">
          <div className="flex gap-3 h-7 items-center inline-block  w-full rounded-md">
            <div className="h-7 w-2 bg-blue-500 rounded-full"></div>
            <p className="text-sm font-medium mr-auto gap-2 text-gray-500 dark:text-gray-400 justify-center items-center tracking-widest w-full">
              {
                // typeof (project_type) === "string" ? project_type.toUpperCase() : project_type.join(", ").toUpperCase()
              }
              {project_type?.[0]?.toUpperCase()}
            </p>

            {readingTime > 0 ? (
              <div className="flex flex-row items-center justify-center gap-1  py-1 px-3 bg-gray-200/70 border border-gray-200  dark:bg-gray-600  rounded-full">
                <FiClock className="text-base text-gray-700 tracking-wider text-nowrap dark:text-white/70" />
                <p className="text-base text-gray-700 tracking-wider text-nowrap dark:text-white/70">
                  {readingTime}
                </p>
              </div>
            ) : null}
            <div className="flex flex-row items-center justify-center gap-1  py-1 px-3 bg-gray-200/70 border border-gray-200 dark:bg-gray-600  rounded-full">
              {/* <FiCalendar className='text-base text-gray-700 tracking-wider text-nowrap dark:text-white/70'/> */}
              <p className="text-base text-gray-700 tracking-wider text-nowrap dark:text-white/70">
                {year}
              </p>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mt-6 gap-2">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="flex flex-wrap gap-2 mt-4 mb-6">
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
          </ul>
          <div className=" mt-auto flex flex-row  items-center gap-2">
            <div className="flex items-center cursor-pointer justify-center px-3 py-3 text-white dark bg-gray-800 hover:bg-gray-950 dark:bg-gray-500 hover:dark:bg-gray-600 rounded-xl">
              <FiArrowRight />
            </div>
            {isExternalProject ? (
              <a
                href={String(link)}
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed  text-gray-700 dark:text-white/70 hover:underline"
              >
                Go to project
                <RxArrowTopRight />
              </a>
            ) : (
              <Link
                href={internalHref}
                className="leading-relaxed  text-gray-700 dark:text-white/70 hover:underline"
              >
                <p>
                  {project_type?.includes("Web Dev")
                    ? "Go to project"
                    : "Read project documentation"}
                </p>
                <RxArrowTopRight />
              </Link>
            )}
          </div>
        </div>
        {title.includes("E-commerce admin portal") ? (
          <div className="absolute hidden sm:block p-6 py-24 h-[28rem]  top-8 sm:-right-40 w-0 sm:w-[28.25rem] justify-center items-center bg-indigo-100/40 shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-hover:scale-125 transition rounded rounded-2xl">
            <Image
              className="rounded rounded-lg"
              src={imageUrl}
              alt={title}
              quality={95}
            />
          </div>
        ) : title.includes("lehr.appp") ? (
          <div className="absolute hidden sm:block px-[-40px] py-24 h-[28rem]  top-8 sm:-right-40 w-0 sm:w-[28.25rem] justify-center items-center bg-[#F0F0EC] shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-hover:scale-125 transition rounded rounded-2xl">
            <Image
              className="rounded rounded-lg object-fit"
              src={imageUrl}
              alt={title}
              quality={95}
            />
          </div>
        ) : (
          <Image
            className="absolute hidden sm:block  top-8 sm:-right-40 w-0 sm:w-[28.25rem] rounded rounded-2xl shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-hover:scale-125 transition"
            src={imageUrl}
            alt={title}
            quality={95}
          />
        )}
      </section>
    </motion.div>
  );
}
export default Project;

"use client";
import { useScrollIntoView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./Section_heading";
import { usePortfolio } from "@/context/PortfolioContext";
import ExperienceSkeleton from "@/components/skeletons/ExperienceSkeleton";
import { motion } from "framer-motion";

type ExpEntry = (typeof experiencesData)[number];

const expById = Object.fromEntries(experiencesData.map((e) => [e.id, e]));

const Experience = () => {
  const threshold =
    typeof window !== "undefined" && window.innerWidth < 640 ? 0.1 : 0.3;
  const { ref } = useScrollIntoView("Experience", threshold);
  const { status, personalisation } = usePortfolio();

  // Build ordered list + highlighted set
  let orderedExperiences: ExpEntry[] = [...experiencesData];
  let highlightedIds = new Set<string>();

  if (status === "done" && personalisation) {
    const ordered: ExpEntry[] = [];
    const seen = new Set<string>();

    for (const id of personalisation.experienceOrder) {
      const entry = expById[id] as ExpEntry | undefined;
      if (entry) {
        ordered.push(entry);
        seen.add(id);
      }
    }
    // Append any entries not listed in the order (safety net)
    for (const entry of experiencesData) {
      if (!seen.has(entry.id)) ordered.push(entry);
    }

    orderedExperiences = ordered;
    highlightedIds = new Set(personalisation.highlightedExperience);
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mt-20 max-w-[90%] mx-auto py-20 sm:py-0"
    >
      <div className="flex flex-col lg:flex-row justify-center mb-16">
        <SectionHeading>From Engineering to Enterprise UX</SectionHeading>
      </div>

      {status === "loading" ? (
        <ExperienceSkeleton />
      ) : (
        <motion.div
          initial={status === "done" ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="divide-y divide-zinc-200 dark:divide-zinc-800"
        >
          {orderedExperiences.map((exp) => {
            const isHighlighted = highlightedIds.has(exp.id);
            return (
              <div
                key={exp.id}
                className={`
                  grid grid-cols-1 lg:grid-cols-[3fr_6fr_4fr] gap-8 py-10
                  transition-all duration-200
                  ${isHighlighted ? "pl-4 border-l-4 border-blue-500 dark:border-blue-400" : ""}
                `}
              >
                {/* LEFT — COMPANY / DATE */}
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1">{exp.location}</p>
                  <p className="text-sm text-zinc-400 mt-1">{exp.date}</p>
                </div>

                {/* MIDDLE — ROLE / DESCRIPTION */}
                <div className="max-w-full overflow-hidden">
                  <h4 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-2">
                    {exp.title}
                  </h4>
                  <ul className="space-y-2">
                    {exp.descriptions.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT — TAGS */}
                <div className="flex flex-wrap items-start lg:justify-end gap-x-3 gap-y-2">
                  {exp.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="
                        inline-flex items-center
                        px-3 py-1 text-xs rounded-full
                        border border-zinc-300 dark:border-zinc-700
                        text-zinc-600 dark:text-zinc-300
                        whitespace-nowrap
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      )}
    </section>
  );
};

export default Experience;

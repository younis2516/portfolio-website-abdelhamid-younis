"use client";
import React, { useState } from "react";
import SectionHeading from "./Section_heading";
import { projectsData } from "@/lib/data";
import { useScrollIntoView } from "@/lib/hooks";
import ProjectFeaturedRL from "./ProjectFeaturedRL";
import { usePortfolio } from "@/context/PortfolioContext";
import ProjectsSkeleton from "@/components/skeletons/ProjectsSkeleton";
import { motion } from "framer-motion";

const projectById = Object.fromEntries(projectsData.map((p) => [p.id, p]));

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const { status, personalisation } = usePortfolio();

  const threshold =
    typeof window !== "undefined" && window.innerWidth < 640 ? 0.15 : 0.3;
  const { ref } = useScrollIntoView("Projects", threshold);

  // ── PERSONALISED LAYOUT ──────────────────────────────────────────────────
  if (status === "loading") {
    return (
      <section
        ref={ref}
        id="projects"
        className="scroll-mt-28 py-20 sm:py-16 max-w-[90%] mx-auto"
      >
        <ProjectsSkeleton />
      </section>
    );
  }

  if (status === "done" && personalisation) {
    const visibleSet = new Set(personalisation.visibleProjects);
    const orderedProjects = personalisation.projectOrder
      .map((id) => projectById[id])
      .filter(Boolean);

    const hiddenProjects = projectsData.filter((p) => !visibleSet.has(p.id));

    const [featured, second, ...rest] = orderedProjects;

    return (
      <section
        ref={ref}
        id="projects"
        className="scroll-mt-28 py-20 sm:py-16 max-w-[90%] mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {/* Featured card */}
          {featured && (
            <div className="grid grid-cols-1 gap-6 mb-8 items-stretch sm:min-h-[40rem]">
              <ProjectFeaturedRL {...featured} order="imageLeft" />
            </div>
          )}

          {/* Second row: second + first of rest side-by-side */}
          {(second || rest.length > 0) && (
            <div className="grid grid-cols-3 gap-6 mb-20 items-stretch">
              {second && (
                <div className="col-span-3 sm:col-span-2">
                  <ProjectFeaturedRL {...second} />
                </div>
              )}
              {rest[0] && (
                <div className="grid col-span-3 sm:col-span-1">
                  <div className="block sm:hidden">
                    <ProjectFeaturedRL {...rest[0]} />
                  </div>
                  <div className="hidden sm:block">
                    <ProjectFeaturedRL {...rest[0]} variant="small" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Remaining personalised projects */}
          {rest.slice(1).length > 0 && (
            <>
              <SectionHeading>More Projects</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 mb-8">
                {rest.slice(1).map((project) => (
                  <ProjectFeaturedRL
                    key={project.id}
                    {...project}
                    variant="small"
                    showImage={false}
                  />
                ))}
              </div>
            </>
          )}

          {/* Show all hidden projects */}
          {hiddenProjects.length > 0 && (
            <div className="mt-2 text-center">
              {!showAll ? (
                <button
                  onClick={() => setShowAll(true)}
                  className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 underline underline-offset-4 transition-colors"
                >
                  Show all projects ({hiddenProjects.length} more)
                </button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                    {hiddenProjects.map((project) => (
                      <ProjectFeaturedRL
                        key={project.id}
                        {...project}
                        variant="small"
                        showImage={false}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </section>
    );
  }

  // ── DEFAULT LAYOUT (unchanged) ───────────────────────────────────────────
  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 py-20 sm:py-16 max-w-[90%] mx-auto justify-center items-center"
    >
      <div className="grid grid-cols-1 gap-6 mb-8 items-stretch sm:min-h-[40rem]">
        <ProjectFeaturedRL {...projectsData[0]} order="imageLeft" />
      </div>
      <div className="grid grid-cols-3 gap-6 mb-20 items-stretch">
        <div className="col-span-3 sm:col-span-2">
          <ProjectFeaturedRL {...projectsData[3]} />
        </div>
        <div className="grid col-span-3 sm:col-span-1">
          <div className="block sm:hidden">
            <ProjectFeaturedRL {...projectsData[2]} />
          </div>
          <div className="hidden sm:block">
            <ProjectFeaturedRL {...projectsData[2]} variant="small" />
          </div>
        </div>
      </div>

      <SectionHeading>Other Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {projectsData
          .filter((_, index) => index > 3 && index < 8)
          .map((project, index) => (
            <React.Fragment key={index}>
              <ProjectFeaturedRL {...project} variant="small" showImage={false} />
            </React.Fragment>
          ))}
      </div>
    </section>
  );
};

export default Projects;

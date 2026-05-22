"use client";
import { useState } from "react";
import SectionHeading from "./Section_heading";
import { projectsData } from "@/lib/data";
import { useScrollIntoView } from "@/lib/hooks";
import ProjectFeaturedRL from "./ProjectFeaturedRL";
import { usePortfolio } from "@/context/PortfolioContext";
import ProjectsSkeleton from "@/components/skeletons/ProjectsSkeleton";
import { motion, AnimatePresence } from "framer-motion";

const projectById = Object.fromEntries(projectsData.map((p) => [p.id, p]));

function projectMatchesFilters(project: (typeof projectsData)[number], filters: string[]) {
  if (filters.length === 0) return true;
  const projectTags = (project.tags ?? []).map((t) => t.toLowerCase());
  return filters.some((f) => projectTags.includes(f.toLowerCase()));
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const {
    status,
    personalisation,
    highlightedProjectId,
    activeTagFilters,
    agenticProjectOrder,
    setActiveTagFilters,
  } = usePortfolio();

  const threshold =
    typeof window !== "undefined" && window.innerWidth < 640 ? 0.15 : 0.3;
  const { ref } = useScrollIntoView("Projects", threshold);

  // ── LOADING ─────────────────────────────────────────────────────────────────
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

  // ── PERSONALISED LAYOUT ──────────────────────────────────────────────────
  if (status === "done" && personalisation) {
    // Agentic order overrides personalisation order when set
    const baseOrder = agenticProjectOrder ?? personalisation.projectOrder;
    const visibleSet = new Set(personalisation.visibleProjects);

    const orderedProjects = baseOrder
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
          {/* Tag filter banner */}
          <AnimatePresence>
            {activeTagFilters.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 mb-6 px-4 py-3 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800"
              >
                <span className="text-sm text-blue-700 dark:text-blue-300">
                  Filtering by: <strong>{activeTagFilters.join(", ")}</strong>
                </span>
                <button
                  onClick={() => setActiveTagFilters([])}
                  className="ml-auto text-xs text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-200 underline underline-offset-2 transition-colors"
                >
                  Clear filter
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Featured card */}
          {featured && (
            <div
              className={`grid grid-cols-1 gap-6 mb-8 items-stretch sm:min-h-[40rem] transition-opacity duration-300 ${
                !projectMatchesFilters(featured, activeTagFilters) ? "opacity-30" : ""
              }`}
            >
              <ProjectFeaturedRL
                {...featured}
                order="imageLeft"
                isHighlighted={highlightedProjectId === featured.id}
              />
            </div>
          )}

          {/* Second row: second + first of rest side-by-side */}
          {(second || rest.length > 0) && (
            <div className="grid grid-cols-3 gap-6 mb-20 items-stretch">
              {second && (
                <div
                  className={`col-span-3 sm:col-span-2 transition-opacity duration-300 ${
                    !projectMatchesFilters(second, activeTagFilters) ? "opacity-30" : ""
                  }`}
                >
                  <ProjectFeaturedRL
                    {...second}
                    isHighlighted={highlightedProjectId === second.id}
                  />
                </div>
              )}
              {rest[0] && (
                <div
                  className={`grid col-span-3 sm:col-span-1 transition-opacity duration-300 ${
                    !projectMatchesFilters(rest[0], activeTagFilters) ? "opacity-30" : ""
                  }`}
                >
                  <div className="block sm:hidden">
                    <ProjectFeaturedRL
                      {...rest[0]}
                      isHighlighted={highlightedProjectId === rest[0].id}
                    />
                  </div>
                  <div className="hidden sm:block">
                    <ProjectFeaturedRL
                      {...rest[0]}
                      variant="small"
                      isHighlighted={highlightedProjectId === rest[0].id}
                    />
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
                  <div
                    key={project.id}
                    className={`transition-opacity duration-300 ${
                      !projectMatchesFilters(project, activeTagFilters) ? "opacity-30" : ""
                    }`}
                  >
                    <ProjectFeaturedRL
                      {...project}
                      variant="small"
                      showImage={false}
                      isHighlighted={highlightedProjectId === project.id}
                    />
                  </div>
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
                      <div
                        key={project.id}
                        className={`transition-opacity duration-300 ${
                          !projectMatchesFilters(project, activeTagFilters) ? "opacity-30" : ""
                        }`}
                      >
                        <ProjectFeaturedRL
                          {...project}
                          variant="small"
                          showImage={false}
                          isHighlighted={highlightedProjectId === project.id}
                        />
                      </div>
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

  // ── DEFAULT LAYOUT (no personalisation) ─────────────────────────────────────
  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 py-20 sm:py-16 max-w-[90%] mx-auto justify-center items-center"
    >
      {/* Tag filter banner for default layout */}
      <AnimatePresence>
        {activeTagFilters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 mb-6 px-4 py-3 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800"
          >
            <span className="text-sm text-blue-700 dark:text-blue-300">
              Filtering by: <strong>{activeTagFilters.join(", ")}</strong>
            </span>
            <button
              onClick={() => setActiveTagFilters([])}
              className="ml-auto text-xs text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-200 underline underline-offset-2 transition-colors"
            >
              Clear filter
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`grid grid-cols-1 gap-6 mb-8 items-stretch sm:min-h-[40rem] transition-opacity duration-300 ${
          !projectMatchesFilters(projectsData[0], activeTagFilters) ? "opacity-30" : ""
        }`}
      >
        <ProjectFeaturedRL
          {...projectsData[0]}
          order="imageLeft"
          isHighlighted={highlightedProjectId === projectsData[0].id}
        />
      </div>
      <div className="grid grid-cols-3 gap-6 mb-20 items-stretch">
        <div
          className={`col-span-3 sm:col-span-2 transition-opacity duration-300 ${
            !projectMatchesFilters(projectsData[3], activeTagFilters) ? "opacity-30" : ""
          }`}
        >
          <ProjectFeaturedRL
            {...projectsData[3]}
            isHighlighted={highlightedProjectId === projectsData[3].id}
          />
        </div>
        <div
          className={`grid col-span-3 sm:col-span-1 transition-opacity duration-300 ${
            !projectMatchesFilters(projectsData[2], activeTagFilters) ? "opacity-30" : ""
          }`}
        >
          <div className="block sm:hidden">
            <ProjectFeaturedRL
              {...projectsData[2]}
              isHighlighted={highlightedProjectId === projectsData[2].id}
            />
          </div>
          <div className="hidden sm:block">
            <ProjectFeaturedRL
              {...projectsData[2]}
              variant="small"
              isHighlighted={highlightedProjectId === projectsData[2].id}
            />
          </div>
        </div>
      </div>

      <SectionHeading>Other Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {projectsData
          .filter((_, index) => index > 3 && index < 8)
          .map((project) => (
            <div
              key={project.id}
              className={`transition-opacity duration-300 ${
                !projectMatchesFilters(project, activeTagFilters) ? "opacity-30" : ""
              }`}
            >
              <ProjectFeaturedRL
                {...project}
                variant="small"
                showImage={false}
                isHighlighted={highlightedProjectId === project.id}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;

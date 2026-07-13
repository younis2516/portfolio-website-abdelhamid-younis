"use client";
import { useState } from "react";
import { projectsData } from "@/lib/data";
import { useScrollIntoView } from "@/lib/hooks";
import ProjectFeaturedRL from "./ProjectFeaturedRL";
import Section from "./Section";
import { usePortfolio } from "@/context/PortfolioContext";
import ProjectsSkeleton from "@/components/skeletons/ProjectsSkeleton";
import { motion, AnimatePresence } from "framer-motion";

const projectById = Object.fromEntries(projectsData.map((p) => [p.id, p]));

// Default (non-personalised) ordering, per the "Soft Structuralism" brief:
// REWE featured, then lehr.app / AI POS / Tubics video / Forasna as full
// editorial rows, with the remaining two projects folded into the ledger.
const DEFAULT_FEATURED_ID = "rewe-white-label-sco";
const DEFAULT_EDITORIAL_IDS = [
  "lehr-app",
  "ai-pos-dashboard",
  "tubics-video-optimization-tool",
  "forasna-form",
];
const DEFAULT_LEDGER_IDS = [
  "tubics-design-system-documentation",
  "app-radar-ui-redesign",
];

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

  const TagFilterBanner = activeTagFilters.length > 0 && (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-3 mb-10 px-5 py-3 border border-hairline"
      >
        <span className="font-ss-mono text-xs uppercase tracking-widest text-muted">
          Filtering by: <span className="text-ink">{activeTagFilters.join(", ")}</span>
        </span>
        <button
          onClick={() => setActiveTagFilters([])}
          className="ml-auto font-ss-mono text-xs uppercase tracking-widest text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
        >
          Clear filter
        </button>
      </motion.div>
    </AnimatePresence>
  );

  // ── LOADING ─────────────────────────────────────────────────────────────
  if (status === "loading") {
    return (
      <Section id="projects" index="01" title="Selected work">
        <ProjectsSkeleton />
      </Section>
    );
  }

  // ── PERSONALISED LAYOUT ──────────────────────────────────────────────────
  if (status === "done" && personalisation) {
    const baseOrder = agenticProjectOrder ?? personalisation.projectOrder;
    const visibleSet = new Set(personalisation.visibleProjects);

    const orderedProjects = baseOrder
      .map((id) => projectById[id])
      .filter(Boolean);

    const hiddenProjects = projectsData.filter((p) => !visibleSet.has(p.id));

    const [featured, ...restVisible] = orderedProjects;

    return (
      <Section
        ref={ref}
        id="projects"
        index="01"
        title="Selected work"
      >
        {TagFilterBanner}

        {featured && (
          <div
            className={`transition-opacity duration-300 ${
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

        {restVisible.map((project, i) => (
          <div
            key={project.id}
            className={`transition-opacity duration-300 ${
              !projectMatchesFilters(project, activeTagFilters) ? "opacity-30" : ""
            }`}
          >
            <ProjectFeaturedRL
              {...project}
              order={i % 2 === 0 ? "imageRight" : "imageLeft"}
              isHighlighted={highlightedProjectId === project.id}
            />
          </div>
        ))}

        {hiddenProjects.length > 0 && (
          <div className="mt-4 border-t border-hairline pt-2">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="font-ss-mono text-xs uppercase tracking-widest text-muted underline underline-offset-4 hover:text-ink transition-colors py-4"
              >
                Show all projects ({hiddenProjects.length} more)
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            )}
          </div>
        )}
      </Section>
    );
  }

  // ── DEFAULT LAYOUT (no personalisation) ─────────────────────────────────
  const featured = projectById[DEFAULT_FEATURED_ID];
  const editorialRows = DEFAULT_EDITORIAL_IDS.map((id) => projectById[id]).filter(Boolean);
  const ledgerRows = DEFAULT_LEDGER_IDS.map((id) => projectById[id]).filter(Boolean);

  return (
    <Section ref={ref} id="projects" index="01" title="Selected work">
      {TagFilterBanner}

      <div
        className={`transition-opacity duration-300 ${
          !projectMatchesFilters(featured, activeTagFilters) ? "opacity-30" : ""
        }`}
      >
        <ProjectFeaturedRL
          {...featured}
          order="imageLeft"
          isHighlighted={highlightedProjectId === featured.id}
        />
      </div>

      {editorialRows.map((project, i) => (
        <div
          key={project.id}
          className={`transition-opacity duration-300 ${
            !projectMatchesFilters(project, activeTagFilters) ? "opacity-30" : ""
          }`}
        >
          <ProjectFeaturedRL
            {...project}
            order={i % 2 === 0 ? "imageRight" : "imageLeft"}
            isHighlighted={highlightedProjectId === project.id}
          />
        </div>
      ))}

      {ledgerRows.length > 0 && (
        <div className="mt-4 border-t border-hairline pt-2">
          {ledgerRows.map((project) => (
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
      )}
    </Section>
  );
};

export default Projects;

"use client";
import { useScrollIntoView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import Section from "./Section";
import { usePortfolio } from "@/context/PortfolioContext";
import ExperienceSkeleton from "@/components/skeletons/ExperienceSkeleton";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

type ExpEntry = (typeof experiencesData)[number];

const expById = Object.fromEntries(experiencesData.map((e) => [e.id, e]));

const Experience = () => {
  const threshold =
    typeof window !== "undefined" && window.innerWidth < 640 ? 0.1 : 0.3;
  const { ref } = useScrollIntoView("Experience", threshold);
  const { status, personalisation, highlightedExperienceIds } = usePortfolio();

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
    for (const entry of experiencesData) {
      if (!seen.has(entry.id)) ordered.push(entry);
    }

    orderedExperiences = ordered;
    highlightedIds = new Set(
      highlightedExperienceIds.length > 0
        ? highlightedExperienceIds
        : personalisation.highlightedExperience
    );
  } else if (highlightedExperienceIds.length > 0) {
    highlightedIds = new Set(highlightedExperienceIds);
  }

  return (
    <Section ref={ref} id="experience" index="03" title="From Engineering to Enterprise UX">
      {status === "loading" ? (
        <ExperienceSkeleton />
      ) : (
        <Stagger className="divide-y divide-hairline border-t border-hairline">
          {orderedExperiences.map((exp) => {
            const isHighlighted = highlightedIds.has(exp.id);
            return (
              <StaggerItem key={exp.id}>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-[9rem_1fr_9rem] gap-3 sm:gap-8 py-8 transition-colors ${
                    isHighlighted ? "border-l-2 border-accent pl-6 -ml-6" : ""
                  }`}
                >
                  <p className="font-ss-mono text-xs uppercase tracking-widest text-muted">
                    {exp.date}
                  </p>

                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-ink mb-2">
                      {exp.title} — {exp.company}
                    </h3>
                    <ul className="space-y-1.5">
                      {exp.descriptions.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="font-ss-mono text-xs uppercase tracking-widest text-muted sm:text-right">
                    {exp.location}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      )}
    </Section>
  );
};

export default Experience;

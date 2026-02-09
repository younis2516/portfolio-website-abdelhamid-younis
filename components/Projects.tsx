"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "./Section_heading";
import { ProjectType, projectsData, ProjectTypes } from "@/lib/data";
import Project from "./Project";
import { useScrollIntoView } from "@/lib/hooks";
import ProjectCardNew from "./ProjectCardNew";
import ProjectFeaturedRL from "./ProjectFeaturedRL";
const Projects = () => {
  const [selectedType, setSelectedType] = useState<
    ProjectType | null | undefined
  >("All");
  const { ref } = useScrollIntoView("Projects", 0.3);
  const filteredProjects = projectsData.filter((project) => {
    if (
      selectedType === "All" ||
      selectedType === null ||
      selectedType === undefined
    ) {
      return true; // Show all projects
    }
    return Array.isArray(project.project_type)
      ? project?.project_type.includes(selectedType)
      : project?.project_type === selectedType;
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 py-20 sm:py-16 max-w-[90%] mx-auto justify-center items-center "
    >
      <div className="grid grid-cols-1 gap-6 mb-8 items-stretch">
        <ProjectFeaturedRL {...filteredProjects[0]} order="imageLeft" />
        {/* <ProjectFeaturedRL {...filteredProjects[1]} order="imageRight" /> */}
      </div>
      <div className="grid grid-cols-3 gap-6 mb-20 items-stretch">
        <div className="col-span-3 sm:col-span-2">
          <ProjectFeaturedRL {...filteredProjects[3]} />
        </div>
        <div className="grid col-span-3 sm:col-span-1 items-stretch">
          {/* MOBILE → DEFAULT variant */}
          <div className="block sm:hidden">
            <ProjectFeaturedRL {...filteredProjects[2]} />
          </div>

          {/* DESKTOP → SMALL variant */}
          <div className="hidden sm:block ">
            <ProjectFeaturedRL {...filteredProjects[2]} variant="small" />
          </div>
        </div>
      </div>

      {/* <SectionHeading>Projects</SectionHeading> */}
      {/* <p className="text-base text-center w-full sm:max-w-7xl sm:text-lg text-gray-700 mb-8 dark:text-white/70">
        {" "}
        <strong>Heads up!</strong> these case studies are a bit lengthy, the
        average reading time is 10 minutes. I added lots of visuals but I am
        also trying to explain my thinking process.
      </p> */}
      {/* <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-10">
        {ProjectTypes?.map((type) => (
          <button
            key={type}
            className={`px-5 py-3 border border-gray-400 text-base rounded-full transition ${
              selectedType === type
                ? "bg-blue-500 text-white border-none"
                : "bg-gray-100 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800"
            }`}
            onClick={() => setSelectedType(selectedType === type ? null : type)}
          >
            {type}
          </button>
        ))}
      </div> */}

      <SectionHeading>Other Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-8">
        {filteredProjects
          .filter((project, index) => index > 3)
          .map((project, index) => (
            <React.Fragment key={index}>
              <ProjectFeaturedRL {...project} variant={"small"} />
            </React.Fragment>
          ))}
      </div>
    </section>
  );
};

export default Projects;

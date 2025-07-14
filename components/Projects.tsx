"use client"
import React, { useEffect, useState } from 'react'
import SectionHeading from './Section_heading'
import { project_type, projectsData, ProjectTypes } from '@/lib/data'
import Project from './Project'
import { useScrollIntoView } from '@/lib/hooks'
const Projects = () => {
    const [selectedType, setSelectedType] = useState<project_type | null | undefined >('All');
    const { ref } = useScrollIntoView('Projects', 0.3)
  const filteredProjects = projectsData.filter((project) => {
      if (selectedType === "All" || selectedType === null || selectedType ===undefined) {
        return true; // Show all projects
    }
        return Array.isArray(project.project_type)
        ? project?.project_type.includes(selectedType)
        : project?.project_type === selectedType
      })
    
  return (
      <section
          ref={ref}
          id='projects'
          className='scroll-mt-28 ml-5 mr-5 sm:ml-20 sm:mr-20 justify-center items-center mt-20'      >
          <SectionHeading>Projects</SectionHeading>
          <p className='text-base text-center w-full sm:max-w-[50rem] sm:text-lg text-gray-700 mb-8 dark:text-white/70'> <strong>Heads up!</strong> these case studies are a bit lengthy, the average reading time is 10 minutes. I added lots of visuals but I am also trying to explain my thinking process.</p>
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-10">
        {ProjectTypes?.map((type) => (
          <button
            key={type}
            className={`px-5 py-3 border border-gray-400 text-base rounded-full transition ${
              selectedType === type ? "bg-blue-500 text-white border-none" : "bg-gray-100 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800"
                      }`}
            onClick={() => setSelectedType(selectedType === type ? null : type)}
          >
            {type}
          </button>
        ))}
      </div>
          <div>
              {filteredProjects.map((project, index) => (
                  <React.Fragment key={index}>
                      <Project {...project}  />
                  </React.Fragment>
              ))}
          </div>
    </section>
  )
}

export default Projects
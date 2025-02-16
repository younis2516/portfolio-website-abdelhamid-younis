"use client"
import React, { useEffect, useState } from 'react'
import SectionHeading from './Section_heading'
import { project_type, projectsData, ProjectTypes } from '@/lib/data'
import Project from './Project'
import { useScrollIntoView } from '@/lib/hooks'
const Projects = () => {
    const [selectedType, setSelectedType] = useState<string | null>('All');
    const { ref } = useScrollIntoView('Projects', 0.3)
    const filteredProjects = selectedType !="All"
    ? projectsData.filter((project) => project.project_type === selectedType)
        : projectsData;
    
  return (
      <section
          ref={ref}
          id='projects'
          className='scroll-mt-28 ml-5 mr-5 sm:ml-20 sm:mr-20 justify-center items-center mt-20'
      
      >
          <SectionHeading>Projects</SectionHeading>
          <div className="flex justify-center flex-wrap gap-4 mb-10">
        {ProjectTypes?.map((type) => (
          <button
            key={type}
            className={`px-5 py-3 text-base rounded-full transition ${
              selectedType === type ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 hover:dark:bg-gray-800"
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
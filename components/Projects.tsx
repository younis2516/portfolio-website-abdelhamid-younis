"use client"
import React, { useEffect, useState } from 'react'
import SectionHeading from './Section_heading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useScrollIntoView } from '@/lib/hooks'
const Projects = () => {
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const { ref } = useScrollIntoView('Projects', 0.3)
    const projectTypes = ["Self checkout", "Saas App", "Data heavy app", "Student project"];
    const filteredProjects = selectedType
    ? projectsData.filter((project) => project.project_type === selectedType)
        : projectsData;
    
  return (
      <section
          ref={ref}
          id='projects'
          className='scroll-mt-28 ml-10 mr-10 sm:ml-20 sm:mr-20 justify-center items-center mt-20'
      
      >
          <SectionHeading>Projects</SectionHeading>
          <div className="flex justify-center flex-wrap gap-4 mb-10">
        {projectTypes.map((type) => (
          <button
            key={type}
            className={`px-6 py-3 text-base rounded-full transition ${
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
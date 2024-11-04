"use client"
import React, { useEffect } from 'react'
import SectionHeading from './Section_heading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useScrollIntoView } from '@/lib/hooks'
const Projects = () => {
    const { ref}=useScrollIntoView('Projects',0.3)
  return (
      <section
          ref={ref}
          id='projects'
          className='scroll-mt-28 ml-10 mr-10 sm:ml-20 sm:mr-20 justify-center items-center mt-20'
      
      >
          <SectionHeading>Projects</SectionHeading>
          <div>
              {projectsData.map((project, index) => (
                  <React.Fragment key={index}>
                      <Project {...project}  />
                  </React.Fragment>
                  
              ))}
          </div>
    </section>
  )
}

export default Projects
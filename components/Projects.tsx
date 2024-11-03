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
          className='scroll-mt-28'
      
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
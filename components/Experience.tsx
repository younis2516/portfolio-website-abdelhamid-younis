"use client"
import { useScrollIntoView } from '@/lib/hooks'
import React from 'react'
import {experiencesData} from '@/lib/data'
import SectionHeading from './Section_heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '@/context/theme-context'

const Experience = () => {
    const { ref } = useScrollIntoView("Experience", 0.3)
    const {theme}= useTheme()
  return (
      <section id='experience' className="scroll-mt-28 mt-20 mr-5 ml-5 sm:mr-20 sm:ml-20" ref={ref}>
          <SectionHeading>Experience</SectionHeading>
          <VerticalTimeline lineColor={''}> 
              {experiencesData.map((experienceItem, index) => (
                  <React.Fragment key={index}>
                      <VerticalTimelineElement
                        contentStyle={{
                            background: theme==="light"?"#f3f4f6":"rgba(255,255,255,0.05)",
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                          }}
                          contentArrowStyle={{
                            borderRight: theme==='light'? "0.4rem solid #9ca3af":'0.4rem solid rgba(255,255,255,0.5)'
                          }}
                          date={experienceItem.date}
                          icon={experienceItem.icon}
                          iconStyle={{
                              background: theme === 'light' ? "white" : "rgba(255,255,255,0.15)",
                              borderColor: theme === 'light' ? "white" : "rgba(255,255,255,0.15)",
                              fontSize:"1.5rem"
                          }}
                      >
                          <h3 className="font-semibold text-lg capitalize">{experienceItem.title}</h3>
                          <p className="font-normal text-lg !mt-0 ">{experienceItem.location}</p>
                          <ol>
                            {experienceItem.descriptions.map((item,index) =>(
                                <li key={index} className=' text-wrap'>
                                    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item}</p>
                                </li>
                                 
                            ) )
                            }
                          </ol>
                      </VerticalTimelineElement>
                  </React.Fragment>
              ))}
          </VerticalTimeline>

    </section>
  ) 
}

export default Experience
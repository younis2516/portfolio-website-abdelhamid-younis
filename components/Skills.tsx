"use client"
import React, { useEffect } from 'react'
import { skillsData } from '@/lib/data'
import SectionHeading from './Section_heading'
import { useScrollIntoView } from '@/lib/hooks'
import { animate, motion } from 'framer-motion'
import { once } from 'events'
const fadeInAnimationVariance = {
    initial: { opacity: 0, y: 100 },
    animate: (index:number) => ({ opacity: 1, y: 0, transition: { delay: 0.05*index} } ), 
}
const Skills = () => {
    const { ref}=useScrollIntoView('Skills',0.8)
  return (
      <section className='flex flex-col justify-center items-center mr-40 ml-40 scroll-mt-28' ref={ref} id='skills'>
          <SectionHeading>Skills</SectionHeading>
          {
          <ul  className='flex justify-center items-center flex-wrap gap-4'>
              {skillsData.map((skill, index) => (
                  <motion.li
                      className='bg-gray-200 border borderBlack rounded-full text-lg text-gray-950 pl-4 pr-4 pt-2 pb-2 dark:bg-white/10 dark:text-white/80'
                      key={index}
                      variants={fadeInAnimationVariance}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={index}
                  >{skill}</motion.li>
              ))}
          </ul>
      }</section>
  )
}

export default Skills
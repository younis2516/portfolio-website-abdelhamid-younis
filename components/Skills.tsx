"use client"
import React, { useEffect, useState } from 'react'
import { Skill, skillsData, SkillType, SkillTypes } from '@/lib/data'
import SectionHeading from './Section_heading'
import { useScrollIntoView } from '@/lib/hooks'
import { animate, motion } from 'framer-motion'
import { once } from 'events'
const fadeInAnimationVariance = {
    initial: { opacity: 0, y: 100 },
    animate: (index:number) => ({ opacity: 1, y: 0, transition: { delay: 0.05*index} } ), 
}
const Skills = () => {
    const { ref } = useScrollIntoView('Skills', 0.8)
    const [selectedSkillType,setSelectedSkillType] = useState<SkillType | null | undefined>("All")
    const sortedSkills = [...skillsData].sort((a, b) => a.skill.length - b.skill.length);
    const filteredSkills = sortedSkills.filter((skill) => {
        if (selectedSkillType === "All") {
            return true 
        } else {
            return skill.skill_type===selectedSkillType
        }
        
    })
  return (
      <section className='flex flex-col justify-center items-center mr-10 ml-10 sm:mr-20 sm:ml-20 scroll-mt-28 mt-20' ref={ref} id='skills'>
          <SectionHeading>Skills</SectionHeading>
          <div className="flex justify-center w-[90%] sm:w-full sm:flex-nowrap flex-wrap gap-2 sm:gap-4 mb-10">
              {SkillTypes.map(skillType => (
              <button
                  key={skillType}
                  className={`px-5 py-3 border border-gray-400 text-base rounded-full transition ${
              selectedSkillType === skillType ? "bg-blue-500 text-white border-none" : "bg-gray-100 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800"
                      }`}
                  onClick={()=>setSelectedSkillType(selectedSkillType === skillType ? null : skillType)}
              >{skillType}</button>
          ))}
        </div>
          
          {
          <ul  className='flex justify-center items-center min-w-[90%] sm:w-full  flex-wrap gap-4'>
              {filteredSkills.map((skill:Skill, index:number) => (
                  <motion.li
                      className='bg-gray-200 rounded-full text-lg text-gray-950 pl-4 pr-4 pt-2 pb-2 dark:bg-white/10 dark:text-white/80'
                      key={index}
                      variants={fadeInAnimationVariance}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={index}
                  >{skill.skill}</motion.li>
              ))}
          </ul>
      }</section>
  )
}

export default Skills
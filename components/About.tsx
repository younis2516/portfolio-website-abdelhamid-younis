"use client"
import React, { useEffect } from 'react'
import SectionHeading from './Section_heading'
import { motion } from 'framer-motion'
import { useScrollIntoView } from '@/lib/hooks'
const About = () => {
  const { ref}=useScrollIntoView("About",0.75)
  
  return (
    <motion.section
      ref={ref}
           initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className='flex flex-col text-center items-center justify-center scroll-mt-28 mr-10 ml-10 sm:mr-20 sm:ml-20 mt-20'
      id='about'
    >
          <SectionHeading>About me</SectionHeading>
          <p className='mb-3 text-lg leading-8 sm:mb-40'>Beside <strong>6 years of experience</strong> as a UX/UI designer. I studied part time <strong>Masters in HCI</strong> at the University of Salzburg in Austria. I took challenging responsibilities from the begining of my career as a solo product designer in <strong>Hotelkit</strong>, and <strong>Tubics</strong>Tubics in Austria, which exposed me to unconventional ways of rapid prototyping, <strong>low code development</strong> , user testing, and jumping between a UX design and UX research role. Beside this I studied <strong>Engineering</strong> for my bachelor, which strengthed my problem solving skills. 

I am now working with an awesome team @ REWE Group <strong>the biggest retailer in Europe</strong> to design their self-checkout and point-of-sale devices. Beside product design, I am <strong>coding since 2 years</strong> and I did a <strong>part-time frontend developer internship</strong> at www.suplyd.com </p>
    </motion.section>
  )
}

export default About
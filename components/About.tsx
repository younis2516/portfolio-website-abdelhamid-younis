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
      className='flex flex-col text-center items-center justify-center scroll-mt-28'
      id='about'
    >
          <SectionHeading>About me</SectionHeading>
          <p className='mb-3 text-lg ml-40 mr-40 leading-8 sm:mb-40'>Based in 📍Vienna. Beside 6 years of experience as a UX/UI designer. Did master studies in HCI at University of Salzburg and took challenging responsibilities early on in my career as a solo product designer in Hotelkit, and Tubics in Austria, which exposed me to unconventional ways to prototyping, minimum viable user testing, low code development, and jumping between a UX design and research role. Beside this I studied engineering for my bachelor, that made me a problem solver by nature. 

Now working with an awesome team @ REWE International (the biggest retailer in Europe) to design their self-checkout and point-of-sale devices. Beside product design, I am coding since 2 years and now i am working as a part-time frontend developer intern at www.suplyd.com </p>
    </motion.section>
  )
}

export default About
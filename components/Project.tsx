"use client"
import React, { useRef } from 'react'
import {useScroll,motion, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi";


type ProjectProps = {
    title: String, 
    description: String,
    tags: [String],
    imageUrl?:String | undefined
}


type ProjectProps2 = (typeof projectsData)[number]


function Project({ title, description, tags, imageUrl, link }: ProjectProps2) {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress }=useScroll({
        target: ref,
        offset:["0 1","1.33 1"]
    }) 
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress =useTransform(scrollYProgress,[0,1],[0.6,1])
    return (
            <motion.div
            ref={ref}
            style={{
                    scale: scaleProgress,
                    opacity:opacityProgress
            }}
            className=' group mb-3 sm:mb-8'
            >
              <section
                
                 className="bg-gray-100 w-full sm:max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[32rem] hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20 ">
            <div className="pt-4 pb-7  py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 w-full sm:max-w-[55%] flex flex-col h-full">
                <h3 className='text-2xl font-semibold mt-4 gap-2'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                    <div className=' mt-2 flex flex-row items-center gap-2'>
                        <a href={link} className='leading-relaxed text-gray-700 dark:text-white/70 underline'> Go to documentation {" "}</a>
                        <FiExternalLink/>
                    </div>
                <ul className='flex flex-wrap gap-1 mt-auto'>
                    {tags.map((tag:String, index:number) => (
                         <li className='bg-black/[0.7] px-5 py-2 mt-2 text-[0.7rem] uppercase text-white rounded-full tracking-wider dark:text-white/70' key={index}>{tag}</li>
                    ))}
                    </ul>
                    
            </div>
            <Image className='absolute hidden sm:block  top-8 sm:-right-40 w-0 sm:w-[28.25rem] rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-hover:scale-125 transition' src={imageUrl} alt={ title} quality={95} />
        </section>  
            </motion.div>        
    ) 
}
export default Project
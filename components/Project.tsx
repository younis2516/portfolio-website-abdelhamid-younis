"use client"
import React, { useRef } from 'react'
import {useScroll,motion, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { FiArrowRight, FiExternalLink } from "react-icons/fi";


type ProjectProps = {
    title: String, 
    description: String,
    tags: [String],
    imageUrl?:String | undefined
}


type ProjectProps2 = (typeof projectsData)[number]


function Project({ title, description, tags, imageUrl, link ,project_type,year}: ProjectProps2) {
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
                
                 className= "bg-gray-100 w-full sm:max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[32rem] hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20 ">
                <div className="pt-4 pb-7  py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 w-full sm:max-w-[55%] flex flex-col h-full">
                    <div className='flex gap-3 h-7 items-center inline-block  w-full rounded-md'>
                        <div className='h-7 w-2 bg-blue-500 rounded-full'></div>
                        <p className='text-sm font-medium mt-4 mr-auto gap-2 text-gray-500 dark:text-gray-400 justify-center items-center mb-4 tracking-widest w-full'>{
                            // typeof (project_type) === "string" ? project_type.toUpperCase() : project_type.join(", ").toUpperCase()
                            project_type[0].toUpperCase()
                        }</p>
                        <p className=' w-16 flex justify-center mb-1 mt-2 sm:mb-2 sm:mt-4 py-1 px-3 mt-2 bg-gray-300 text-base text-gray-700 dark:bg-gray-600 dark:text-white/70 rounded-full tracking-wider '>{year}</p>

                    </div>
                    <h3 className='text-2xl font-semibold mt-6 gap-2'>{title}</h3> 
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                
                <ul className='flex flex-wrap gap-2 mt-4 mb-6'>
                    {tags.sort((a, b) => a.length - b.length).map((tag:String, index:number) => (
                         <li className=' bg-gray-300 text-base text-gray-700 dark:bg-gray-600 dark:text-white/70 px-3 py-2 sm:mt-2 text-sm rounded-full tracking-wider' key={index}>{tag}</li>
                    ))}
                    </ul>
                    {link&&link.length>0?(<div className=' mt-auto flex flex-row  items-center gap-2'>
                        <div className='flex items-center cursor-pointer justify-center px-3 py-3 text-white dark bg-gray-800 hover:bg-gray-950 dark:bg-gray-500 hover:dark:bg-gray-600 rounded-xl'><FiArrowRight/></div>
                        <a href={link} className='leading-relaxed  text-gray-700 dark:text-white/70 hover:underline'> {project_type.includes("Web Dev")?"Go to project":"Read project documentation"}</a>
                    </div>):""}
                    
            </div>
            {project_type.includes("AI")?
            (<div className='absolute hidden sm:block p-12 h-[28rem] top-8 sm:-right-40 w-0 sm:w-[28.25rem] justify-center items-center bg-purple-100 rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-hover:scale-125 transition'><Image className='' src={imageUrl} alt={ title} quality={95} /></div>):
            project_type.includes("Web Dev")?(<div className='w-[0px]'></div>):(<Image className='absolute hidden sm:block  top-8 sm:-right-40 w-0 sm:w-[28.25rem] rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-hover:scale-125 transition' src={imageUrl} alt={ title} quality={95} />)
            }
        </section>  
            </motion.div>        
    ) 
}
export default Project
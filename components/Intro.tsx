"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import avatar from '../public/avatar.jpg'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload} from 'react-icons/hi'
import { useScrollIntoView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active_section_context'
import { FaGithubSquare } from 'react-icons/fa'

const paragraphs = [
  "Creative and tech-savvy designer with 7+ years of experience in UX/UI",
  "product design, and frontend implementation",
  "Currently designing the next-gen self-checkout systems for REWE Group",
  "Skilled in Figma, React, and prototyping",
  "— bridging the gap between user needs and production-ready code.",
  "I am based in Vienna ",
  "I have worked on both B2B and B2C projects.",
  "My latest Project was released in 65 Billa Suppermarkets in Austria.",
];

export const TypingParagraph = () => {
  const [text, setText] = useState('');
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const currentParagraph = paragraphs[paragraphIndex];
    const baseTypingSpeed = 55;
    const baseDeletingSpeed = 20;
    const randomOffset = Math.floor(Math.random() * 5);

    const delay = isDeleting
      ? baseDeletingSpeed + randomOffset
      : baseTypingSpeed + randomOffset;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentParagraph.slice(0, text.length + 1));
        if (text === currentParagraph) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentParagraph.slice(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setParagraphIndex((prev) => (prev + 1) % paragraphs.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, paragraphIndex, isVisible]);

  return (
    <div
      ref={containerRef}
      className="text-md sm:text-lg items-center justify-center font-medium text-zinc-900 dark:text-zinc-100 text-center min-h-[4.5rem] md:min-h-[3rem] w-full sm:max-w-[100%] text-wrap"
    >
      <span className=' text-gray-700 px-2 py-1 bg-indigo-200 dark:text-white dark:bg-indigo-600'>{text}</span>
      <span className="animate-pulse">|</span>
    </div>
  );
};

function Intro() {
    const { ref } = useScrollIntoView("Home", 0.5)
    const {setActiveSection,setTimeOfLastClick} = useActiveSectionContext()
  return (
      <section id='home' className='text-center mr-4 ml-4 sm:mr-20 sm:ml-20 mb-10 sm:mb-0 scroll-mt-[100rem]' >
          <div className='flex items-center justify-center'>
              <div className='relative'>
                  <motion.div
                      initial={{opacity:0,scale:0}}
                      animate={{ opacity: 100, scale: 1 }}
                      transition={{
                          type: 'tween',
                          duration:0.2
                      }}
                  >
                     <Image width={200} height={200} quality={95} className='h-32 w-32 border-[0.35rem] border-white object-cover shadow-xl rounded-full' src={avatar} alt={"My profile image"} />
                  </motion.div>
                  <motion.span
                      // initial={{ opacity: 0, scale: 0 }}
                      // animate={{ opacity: 1, scale: 1 }}
                      // transition={{
                      //     type: 'spring',
                      //     stiffness: 125,
                      //     delay:0.5,
                      //     duration:0.7 
                      // }}
                      initial={{ rotate: 0 }}
      animate={{
        rotate: [
          0, 20, -10, 20, -10, 20, -10, 20, -10, 0 // 4 full shakes
        ],
      }}
      transition={{
        duration: 3.3, // 4 shakes × (0.3s delay + ~0.5s move)
        ease: "easeInOut",
        times: [ // Spread out to include 0.3s pause between each keyframe
          0.0, 0.1, 0.2, 0.4, 0.5, 0.7, 0.8, 1.0, 1.1, 1.3
        ],
        delay: 0.3, // Wait before starting
      }}
                      className='absolute text-5xl bottom-0 right-0'>👋</motion.span>
              </div>
             
          </div>
          
          {/* <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity:1,y:0}}
              className='mr-2 ml-2 sm:mr-20 sm:ml-20 mb-10 sm:mb-0 text-center mt-10 px-4 text-lg font-medium !leading-[1.5] sm:text-xl'
          > <span className='font-bold text-3xl mb-6'><strong> Hello I'm Abdelhamid</strong><br/> </span>  Just call me younis. I made this website to tell my story. I am a Product Designer 📍 Based in Vienna. But originally I am from Cairo. I didnt study design, but it was my passion to design things people interact with in their daily life. And thankfully I turned this passion to a lucrative job. I studied engineering for my bachelor and since 2018 I have been working as a UX.UI designer.
             I have worked on both B2B and B2C projects. My latest Project was <strong>released in 65 Billa Suppermarkets in Austria</strong> <br/> I can design and code and in my free time i am building products with AI using real APIs.
             
             </motion.p> */}
             <p className='mr-2 ml-2 sm:mr-20 sm:ml-20 sm:mb-0 text-center mt-10 px-4 text-lg font-bold !leading-[1.5] text-xl sm:text-3xl'> UX.UI Product Designer</p>
             <div className='flex justify-center items-center flex-row mb-2 text-center text-lg sm:text-xl text-zinc-600 dark:text-zinc-300'> 
              <p className='px-2 py-1 rounded rounded-md hover:bg-purple-300 hover:text-gray-900 dark:hover:bg-purple-700 dark:hover:text-white/50'>🎨 Design</p>
              <p>,</p>
              <p className='px-2 py-1 rounded rounded-md hover:bg-teal-200 hover:text-gray-900 dark:hover:bg-teal-700 dark:hover:text-white/50'>👨🏻‍💻 Code</p>
              <p className='mr-1'>, </p>
              <p className='px-2 py-1 rounded rounded-md hover:bg-indigo-300 hover:text-gray-900 dark:hover:bg-indigo-700 dark:hover:text-white/50'>🔍 Research</p>

             </div>
           
             <TypingParagraph/>

          <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                  delay:0.1
              }}
              className='flex text-lg font-medium flex-col sm:flex-row items-center pt-4 gap-4 justify-center'>
              <Link href={'#contact'}
                  className='group bg-gray-900 dark:bg-gray-600 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full w-full sm:w-auto'
                  onClick={() => {
                      setActiveSection("Contact")
                      setTimeOfLastClick(Date.now())
                  }}
              >Contact me <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /></Link>
              <a download={true} href='/abdelhamid_cv_2025_final.pdf' className='group w-full sm:w-auto bg-white text-gray-900 outline-none transition px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer borderBlack dark:bg-white/5 dark:text-white/60 justify-center items-center focus:scale-110 hover:scale-110'>Download CV <HiDownload className='opacity-70 group-hover:translate-y-1 transition' /> </a>
              <a href='https://www.linkedin.com/in/abdelhamid-younis-17168086/' className='bg-white w-full sm:w-auto text-gray-700 p-4 flex focus:scale-110 hover:scale-110 active:scale-105 hover:text-gray950 transition items-center gap-2 rounded-full cursor-pointer border borderBlack dark:text-white/60 dark:bg-white/5 justify-center items-center block' target='_blank'> <BsLinkedin /> </a>
            <a href='https://github.com/aaayounis94?tab=repositories' className='bg-white w-full sm:w-auto text-gray-700 p-4 flex focus:scale-110 hover:scale-110 active:scale-105 hover:text-gray950 transition items-center gap-2 rounded-full cursor-pointer border borderBlack dark:text-white/60 dark:bg-white/5 justify-center items-center block' target='_blank'> <FaGithubSquare /> </a>

              {/* <a className='bg-white text-gray-700 p-4 focus:scale-110 hover:scale-110 active:scale-105 hover:text-gray950 transition flex items-center gap-2 rounded-full cursor-pointer border border-black/10' target='_blank'> <FaGithubSquare/> </a>   */}
          </motion.div>
    </section>
  )
}

export default Intro 
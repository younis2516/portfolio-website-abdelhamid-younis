"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import avatar from "../public/avatar.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

import { BsLinkedin } from "react-icons/bs";
import { useScrollIntoView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active_section_context";
import { FaDownload, FaGithubSquare } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

//   const [text, setText] = useState('');
//   const [paragraphIndex, setParagraphIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.1 }
//     );

//     if (containerRef.current) observer.observe(containerRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;

//     const currentParagraph = paragraphs[paragraphIndex];
//     const baseTypingSpeed = 55;
//     const baseDeletingSpeed = 20;
//     const randomOffset = Math.floor(Math.random() * 5);

//     const delay = isDeleting
//       ? baseDeletingSpeed + randomOffset
//       : baseTypingSpeed + randomOffset;

//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         setText(currentParagraph.slice(0, text.length + 1));
//         if (text === currentParagraph) {
//           setTimeout(() => setIsDeleting(true), 1000);
//         }
//       } else {
//         setText(currentParagraph.slice(0, text.length - 1));
//         if (text === '') {
//           setIsDeleting(false);
//           setParagraphIndex((prev) => (prev + 1) % paragraphs.length);
//         }
//       }
//     }, delay);

//     return () => clearTimeout(timeout);
//   }, [text, isDeleting, paragraphIndex, isVisible]);

//   return (
//     <div
//       ref={containerRef}
//       className="text-md sm:text-lg items-center justify-center font-medium text-zinc-900 dark:text-zinc-100 text-center min-h-[4.5rem] md:min-h-[3rem] w-full sm:max-w-[100%] text-wrap"
//     >
//       <span className=' text-gray-700 px-2 py-1 bg-indigo-200 dark:text-white dark:bg-indigo-600'>{text}</span>
//       <span className="animate-pulse">|</span>
//     </div>
//   );
// };

function Intro() {
  const { ref } = useScrollIntoView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[60rem] max-w-full mx-auto  py-0 px-6 sm:px-8 sm:py-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-4 items-center relative z-0">
        {/* RIGHT — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="
  order-2 lg:order-1
  sm:h-[35.3rem]
  rounded-3xl
  px-6 py-8 sm:px-12 sm:py-12
  bg-gradient-to-br
  from-[#d7f3ef]
  via-[#f3efe5]
  to-[#f7e2c8]
  dark:from-[#0f2f2c]
  dark:via-[#2a2520]
  dark:to-[#3a2f22]
  flex flex-col
  items-center text-center
  lg:items-start lg:text-left
"
        >
          <span className="inline-block mb-4 px-4 py-1 text-md rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300">
            Hi! I am Younis 👋
          </span>

          <h1 className="text-lg sm:text-xl lg:text-4xl mt-0 sm:mt-0 mb-4 font-semibold sm:font-semibold leading-[1.15] tracking-tight max-w-2xl mx-auto lg:mx-0">
            Senior Product Designer, building things on the web with React
          </h1>

          <h2 className="text-md sm:text-md lg:text-lg mt-0 sm:mt-0 sm:font-medium leading-[1.15] tracking-tight max-w-2xl mx-auto lg:mx-0">
            <span className="text-zinc-900 dark:text-white"></span>{" "}
            <span className="text-zinc-900 dark:text-white">
              Designed Retail solutions
            </span>
            <span className="text-zinc-500 dark:text-zinc-400">
              {" "}
              Used by Millions of Customers at BILLA and other REWE brands in 7
              different countries,
            </span>
            <span className="text-zinc-900 dark:text-white">
              {" "}
              and co-founded an AI German Learning web app.
            </span>{" "}
          </h2>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8 sm:mt-auto justify-center lg:justify-start w-full">
            <Link
              href="#contact"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
              className="flex flex-row gap-2 items-center justify-center px-4 sm:px-6 sm:py-3 rounded-full bg-black text-white hover:bg-zinc-800 hover:scale-110 transition shadow-lg"
            >
              <p className="hidden sm:block">Contact me</p>
              <MdEmail />
            </Link>

            <a
              download
              href="/abdelhamid_cv_2025_final.pdf"
              className="flex flex-row gap-2 items-center justify-center px-4 sm:px-6 sm:py-3  bg-white/80 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md border border-white/20 dark:border-white/0 rounded-full  hover:scale-110  transition"
            >
              <p className="hidden sm:block">Download Resume</p>
              <FaDownload />
            </a>
            <a
              href="https://www.linkedin.com/in/a-hamid-younis-17168086/"
              target="_blank"
              className="bg-white/80 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md border border-white/20 dark:border-none  p-4 rounded-full hover:scale-110 transition"
            >
              <BsLinkedin />
            </a>

            <a
              href="https://github.com/aaayounis94?tab=repositories"
              target="_blank"
              className="bg-white/80 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md border border-white/20 dark:border-none   p-4 rounded-full hover:scale-110 transition"
            >
              <FaGithubSquare />
            </a>
          </div>
        </motion.div>

        {/* LEFT — IMAGE + ICONS */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                width={500}
                height={650}
                quality={95}
                className="h-[18rem]  sm:h-[35.3rem] sm:w-[26rem] object-cover rounded-3xl border border-white/20"
                src={avatar}
                alt="My profile image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;

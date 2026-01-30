"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import avatar from "../public/avatar.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TiDownload } from "react-icons/ti";
import { useScrollIntoView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active_section_context";
import { FaGithubSquare } from "react-icons/fa";

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
      className="scroll-mt-[100rem] max-w-7xl mx-auto px-6 py-4 sm:px-12 sm:py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* RIGHT — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <span className="inline-block mb-4 px-4 py-1 mt-12 text-md rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
            Hi! I am Younis 👋
          </span>
          <h2 className="text-lg sm:text-2xl lg:text-5xl mt-0 sm:mt-0 font-medium sm:font-semibold leading-[1.15] tracking-tight max-w-2xl mx-auto lg:mx-0">
            <span className="text-zinc-900 dark:text-white">
              Senior Product Designer,
            </span>{" "}
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
              and co-founded an AI German Learning web app
            </span>{" "}
          </h2>
          <div className="grid grid-cols-3 gap 8 mt-6 mb-6">
            <div className="flex flex-col gap2">
              <h2 className="text-lg sm:text-2xl text-indigo-500 dark:text-indigo-400 lg:text-5xl mt-0 sm:mt-0 font-medium sm:font-semibold leading-[1.15] tracking-tight max-w-2xl mx-auto lg:mx-0">
                7+
              </h2>
              <span className="text-md rounded-full  text-zinc-600 dark:text-zinc-300">
                Years of Experience
              </span>
            </div>
            <div className="flex flex-col gap2">
              <h2 className="text-lg sm:text-2xl text-indigo-500 dark:text-indigo-400 lg:text-5xl mt-0 sm:mt-0 font-medium sm:font-semibold leading-[1.15] tracking-tight max-w-2xl mx-auto lg:mx-0">
                100M +
              </h2>
              <span className="text-md rounded-full  text-zinc-600 dark:text-zinc-300">
                User interactions
              </span>
            </div>
            <div className="flex flex-col gap2">
              <h2 className="text-lg sm:text-2xl text-indigo-500 dark:text-indigo-400 lg:text-5xl mt-0 sm:mt-0 font-medium sm:font-semibold leading-[1.15] tracking-tight max-w-2xl mx-auto lg:mx-0">
                100+
              </h2>
              <span className="text-md rounded-full  text-zinc-600 dark:text-zinc-300">
                Customer interviews
              </span>
            </div>
          </div>
          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Link
              href="#contact"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
              className="px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition shadow-lg"
            >
              Contact Me →
            </Link>

            <a
              download
              href="/abdelhamid_cv_2025_final.pdf"
              className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              Download Resume
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
                className="h-[18rem] w-[16rem] sm:h-[30rem] sm:w-[26rem] object-cover rounded-3xl border border-white/20"
                src={avatar}
                alt="My profile image"
              />
            </motion.div>

            {/* ICONS — BOTTOM CENTER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 left-[70px] sm:left-[160px]   -translate-x-1/2 flex gap-4 z-10"
            >
              {/* <Link
                href={"#contact"}
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
                className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md border border-white/20 p-4 rounded-full hover:scale-110 transition"
              >
                <MdEmail />
              </Link> */}

              {/* <a
                download
                href="/abdelhamid_cv_2025_final.pdf"
                className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md border border-white/20 p-4 rounded-full hover:scale-110 transition"
              >
                <TiDownload />
              </a> */}

              <a
                href="https://www.linkedin.com/in/abdelhamid-younis-17168086/"
                target="_blank"
                className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md border border-white/20 p-4 rounded-full hover:scale-110 transition"
              >
                <BsLinkedin />
              </a>

              <a
                href="https://github.com/aaayounis94?tab=repositories"
                target="_blank"
                className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md border border-white/20 p-4 rounded-full hover:scale-110 transition"
              >
                <FaGithubSquare />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;

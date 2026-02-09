"use client";

import Image from "next/image";
import React from "react";
import avatar from "../public/avatar.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useScrollIntoView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active_section_context";
import { FaDownload, FaGithubSquare } from "react-icons/fa";

function Intro() {
  const { ref } = useScrollIntoView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="scroll-mt-[60rem] w-full">
      {/* SAME WIDTH AS NAVBAR */}
      <div className="max-w-[90%] mx-auto py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-0 sm:gap-4 items-center relative z-0">
          {/* RIGHT — TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="
              order-2 lg:order-1
              sm:h-[35.3rem]
              rounded-3xl
              mt-4 sm:mt-0
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

            <h1 className="text-lg sm:text-xl lg:text-4xl mb-4 font-semibold leading-[1.15] tracking-tight max-w-2xl mx-auto lg:mx-0">
              Senior Product Designer shaping enterprise systems — from research
              to production using design + code.
            </h1>

            <h2 className="text-md sm:text-md lg:text-lg  leading-[1.15] tracking-tight max-w-2xl mx-auto lg:mx-0">
              <span className="text-zinc-900 dark:text-white">
                Designed Retail solutions
              </span>
              <span className="text-zinc-500 dark:text-zinc-400">
                {" "}
                Used by Millions of Customers at BILLA and other REWE brands in
                7 different countries,
              </span>
              <span className="text-zinc-900 dark:text-white">
                {" "}
                and co-founded an AI German Learning web app.
                <br></br>
              </span>
            </h2>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8 sm:mt-auto justify-center lg:justify-start w-full">
              <Link
                href="#contact"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
                className="flex gap-2 items-center px-4 sm:px-6 sm:py-3 rounded-full bg-black text-white hover:bg-zinc-800 hover:scale-110 transition shadow-lg"
              >
                <p className="hidden sm:block">Contact me</p>
                <MdEmail />
              </Link>

              <a
                download
                href="/abdelhamid_cv_2025_final.pdf"
                className="flex gap-2 items-center px-4 sm:px-6 sm:py-3 bg-white/80 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md border border-white/20 dark:border-white/0 rounded-full hover:scale-110 transition"
              >
                <p className="hidden sm:block">Download Resume</p>
                <FaDownload />
              </a>

              <a
                href="https://www.linkedin.com/in/a-hamid-younis-17168086/"
                target="_blank"
                className="bg-white/80 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md border border-white/20 dark:border-none p-4 rounded-full hover:scale-110 transition"
              >
                <BsLinkedin />
              </a>

              <a
                href="https://github.com/aaayounis94?tab=repositories"
                target="_blank"
                className="bg-white/80 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md border border-white/20 dark:border-none p-4 rounded-full hover:scale-110 transition"
              >
                <FaGithubSquare />
              </a>
            </div>
          </motion.div>

          {/* LEFT — IMAGE */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                width={500}
                height={650}
                quality={95}
                className="h-[18rem] sm:h-[35.3rem] sm:w-[28rem] object-cover rounded-3xl border border-white/20"
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

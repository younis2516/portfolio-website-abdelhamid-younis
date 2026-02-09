"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active_section_context";

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header
      className="fixed top-0 inset-x-0 z-[99999] pointer-events-none  bg-white/70 dark:bg-white/0
      min-w-screen
      backdrop-blur-xl"
    >
      {/* FULL WIDTH BLUR BACKDROP */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="
      absolute 
      h-[4.5rem]
     
      border-b border-white/20
      dark:bg-zinc-950/70
    "
      />

      {/* CENTERED CONTENT */}
      <nav className="relative h-[6.25rem] sm:h-[5rem] pointer-events-auto">
        <div className="max-w-[90%] mx-auto h-full px-8 sm:px-6 pt-2 flex items-center justify-between">
          {/* BRAND */}
          <div className="hidden sm:flex items-center gap-3 font-semibold text-zinc-900 dark:text-white">
            <span className="h-8 w-8 text-gray-900 text-[10px] items-center flex justify-center text-center rounded-full bg-gradient-to-br from-teal-400/50 to-amber-300/50">
              AY
            </span>
            <span className="hidden sm:block tracking-wide">YOUNIS</span>
          </div>

          {/* LINKS */}
          <ul
            className="
    flex
    flex-wrap
    justify-center
    items-center
    gap-x-6
    gap-y-4
    text-sm
    font-medium
    text-zinc-600
    dark:text-zinc-400
  "
          >
            {links.map((link) => (
              <li key={link.hash} className="relative">
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(
                    "px-1 py-2 transition hover:text-zinc-900 dark:hover:text-white",
                    {
                      "text-zinc-900 dark:text-white":
                        activeSection === link.name,
                    },
                  )}
                >
                  {link.name}

                  {activeSection === link.name && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="
  absolute
  -inset-x-3
  -inset-y-2
  rounded-full
  bg-zinc-900/10
  dark:bg-white/10
  -z-10
"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

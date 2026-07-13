"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active_section_context";

const EASE = [0.22, 1, 0.36, 1] as const;

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-[99999] pointer-events-none bg-transparent">
      <motion.div
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className={clsx(
          "pointer-events-auto border-b transition-all duration-300",
          scrolled
            ? "bg-paper/60 backdrop-blur-xl backdrop-saturate-150 border-hairline"
            : "bg-transparent backdrop-blur-0 border-transparent"
        )}
      >
        <nav className="mx-auto max-w-6xl h-16 px-6 flex items-center justify-end sm:justify-between">
          <span className="hidden sm:block font-ss-mono text-xs uppercase tracking-widest text-ink">
            Younis Portfolio
          </span>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-ss-mono text-xs uppercase tracking-widest">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx("transition-colors", {
                    "text-accent": activeSection === link.name,
                    "text-muted hover:text-ink": activeSection !== link.name,
                  })}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}

export default Header;

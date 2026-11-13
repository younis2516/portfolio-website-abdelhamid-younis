"use client";

import React from "react";
import Image from "next/image";
import avatar from "../public/avatar.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useScrollIntoView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active_section_context";
import { usePortfolio } from "@/context/PortfolioContext";
import type { VisitorProfile } from "@/context/PortfolioContext";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import TracedLine from "@/components/motion/TracedLine";

const EASE = [0.22, 1, 0.36, 1] as const;

function inferCvFocus(profile: VisitorProfile): string {
  const { role, companySize, companyTypes } = profile;
  if (companySize === "1000+ employees (large / enterprise)" || companyTypes.includes("Enterprise"))
    return "enterprise";
  if (role === "Engineer / CTO")
    return "engineering";
  if (role === "Design Lead")
    return "design";
  if (
    companySize === "1–50 employees (early stage)" ||
    role === "Founder / Co-Founder" ||
    companyTypes.includes("Startup / Scale-up")
  )
    return "startup";
  return "default";
}

function Intro() {
  const { ref } = useScrollIntoView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { status, personalisation, visitorProfile, setPageActionToast } =
    usePortfolio();
  const [isGenerating, setIsGenerating] = React.useState(false);

  const toast = (message: string) =>
    setPageActionToast({ message, id: Date.now() });

  async function handleGenerateCV() {
    if (!visitorProfile || isGenerating) return;
    setIsGenerating(true);
    toast("✦ Generating your tailored CV...");

    const controller = new AbortController();
    const warnTimer = setTimeout(
      () => toast("✦ Taking longer than expected..."),
      8_000,
    );
    const failTimer = setTimeout(() => {
      controller.abort();
      toast("✦ Download failed — reach out via the contact form");
      setIsGenerating(false);
    }, 60_000);

    try {
      const res = await fetch("/api/generate-cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          focus: inferCvFocus(visitorProfile),
          visitorProfile,
        }),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Abdelhamid-Younis-CV.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast("✦ CV downloaded");
    } catch (err) {
      if (err instanceof Error && err.name !== "AbortError") {
        toast("✦ Download failed — reach out via the contact form");
      }
    } finally {
      clearTimeout(warnTimer);
      clearTimeout(failTimer);
      setIsGenerating(false);
    }
  }

  return (
    <section ref={ref} id="home" className="scroll-mt-28 w-full relative overflow-hidden">
      <div
        className="hero-glow hero-glow--amber w-[34rem] h-[34rem] -top-40 -right-40 sm:-top-52 sm:-right-52"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 sm:pt-28 sm:pb-28">
        <div className="grid grid-cols-1 gap-10 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="font-ss-mono text-xs uppercase tracking-widest text-muted mb-6"
            >
              {status === "done" && personalisation?.greeting
                ? personalisation.greeting
                : "Senior Product Designer & UX Engineer — Vienna"}
            </motion.p>

            {status === "loading" ? (
              <HeroSkeleton />
            ) : (
              <>
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                  className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-ink mb-6 max-w-3xl"
                >
                  {status === "done" && personalisation?.heroTagline
                    ? personalisation.heroTagline
                    : "Every design decision should trace to a business result."}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
                  className="text-base sm:text-lg leading-relaxed text-muted max-w-2xl mb-8"
                >
                  {status === "done" && personalisation?.aboutText
                    ? personalisation.aboutText
                    : "I started as an engineer, which means I design for systems, not just screens. Seven years, twenty million customers, sixty stores, two design systems — from zero-to-one AI products to enterprise UX that ships across 500+ locations."}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                  className="mb-10"
                >
                  <TracedLine
                    decision="Built a nationwide self-checkout system"
                    result="20M+ customers reached"
                  />
                </motion.div>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <Link
                href="#projects"
                onClick={() => {
                  setActiveSection("Projects");
                  setTimeOfLastClick(Date.now());
                }}
                className="font-ss-mono text-sm uppercase tracking-widest text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent transition-colors"
              >
                See the work →
              </Link>

              {status === "done" ? (
                <button
                  onClick={handleGenerateCV}
                  disabled={isGenerating}
                  className="font-ss-mono text-sm uppercase tracking-widest text-ink underline underline-offset-4 disabled:opacity-50 disabled:cursor-wait"
                >
                  {isGenerating ? "Generating…" : "Download résumé"}
                </button>
              ) : (
                <a
                  download
                  href="/Abdelhamid_Younis_CV_ProductDesigner.pdf"
                  className="font-ss-mono text-sm uppercase tracking-widest text-ink underline underline-offset-4"
                >
                  Download résumé
                </a>
              )}

              <a
                href="https://www.linkedin.com/in/a-hamid-younis-17168086/"
                target="_blank"
                rel="noreferrer"
                className="font-ss-mono text-sm uppercase tracking-widest text-muted underline underline-offset-4"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Portrait — removed from the hero per request, kept here in case it's wanted back.
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="justify-self-center lg:justify-self-end"
          >
            <div
              className="project-media w-36 sm:w-44"
              style={{ background: "var(--color-paper)" }}
            >
              <Image
                width={300}
                height={390}
                quality={95}
                className="h-auto w-full object-cover"
                src={avatar}
                alt="Younis Abdelhamid"
              />
            </div>
          </motion.div>
          */}
        </div>
      </div>
    </section>
  );
}

export default Intro;

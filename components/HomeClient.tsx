"use client";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import OnboardingModal from "@/components/OnboardingModal";
import Projects from "@/components/Projects";
import ResetButton from "@/components/ResetButton";
import SystemPositioning from "@/components/SystemPositioning";
import { Testimonials } from "@/components/Testimonials";
import AIWorkflowSection from "@/components/sections/AIWorkflowSection";
import ChatWidget from "@/components/ChatWidget";
import { usePortfolio } from "@/context/PortfolioContext";
import { AnimatePresence } from "framer-motion";

export default function HomeClient() {
  const { status } = usePortfolio();

  return (
    <>
      <AnimatePresence>
        {status === "idle" && <OnboardingModal key="onboarding" />}
      </AnimatePresence>

      <main className="flex flex-col items-center px-4">
        <Intro />
        <SystemPositioning />
        <Projects />
        <AIWorkflowSection />
        <Experience />
        <Testimonials />
        <Contact />
        <ChatWidget />
      </main>

      <ResetButton />
    </>
  );
}

"use client";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import OnboardingModal from "@/components/OnboardingModal";
import Projects from "@/components/Projects";
import ResetButton from "@/components/ResetButton";
import { Testimonials } from "@/components/Testimonials";
import AIWorkflowSection from "@/components/sections/AIWorkflowSection";
import PageActionToast from "@/components/PageActionToast";
import { usePortfolio } from "@/context/PortfolioContext";
import { AnimatePresence } from "framer-motion";

export default function HomeClient() {
  const { status } = usePortfolio();

  return (
    <div className="ss-page">
      <AnimatePresence>
        {status === "idle" && <OnboardingModal key="onboarding" />}
      </AnimatePresence>

      <main className="flex flex-col items-center">
        <Intro />
        <Projects />
        <AIWorkflowSection />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <ResetButton />
      <PageActionToast />
    </div>
  );
}

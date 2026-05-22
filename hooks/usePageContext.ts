"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { usePageSections } from "@/context/PageSectionsContext";
import { usePortfolio } from "@/context/PortfolioContext";
import { useChat } from "@/context/ChatContext";
import { projectsData } from "@/lib/data";
import type { PageContext } from "@/app/api/chat/route";

export function usePageContext(): PageContext {
  const pathname = usePathname();
  const { sections } = usePageSections();
  const { activeTagFilters, highlightedProjectId } = usePortfolio();
  const { messages } = useChat();
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);

  // Reset and restart timer whenever the page changes
  useEffect(() => {
    setTimeOnPage(0);
    const interval = setInterval(() => {
      setTimeOnPage((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [pathname]);

  // Track max scroll depth, reset on page change
  useEffect(() => {
    setScrollDepth(0);
    function handleScroll() {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      if (total > 0) {
        setScrollDepth((prev) =>
          Math.max(prev, Math.round((scrolled / total) * 100))
        );
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isProject = pathname.startsWith("/projects/");
  const projectId = isProject
    ? pathname.replace("/projects/", "").split("?")[0]
    : null;
  const project = projectId
    ? projectsData.find((p) => p.id === projectId)
    : null;
  const messageCount = messages.filter((m) => m.role !== "system").length;

  return {
    currentPage: isProject ? "project" : pathname === "/" ? "home" : "other",
    projectId: projectId ?? null,
    projectTitle: project?.title ?? null,
    availableSections: sections.map((s) => ({ id: s.id, label: s.label })),
    activeFilters: activeTagFilters,
    highlightedProjectId: highlightedProjectId ?? null,
    visitorBehaviour: {
      timeOnPageSeconds: timeOnPage,
      scrollDepthPercent: scrollDepth,
      messageCount,
    },
  };
}

"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useChat } from "@/context/ChatContext";
import { usePortfolio } from "@/context/PortfolioContext";
import { projectsData } from "@/lib/data";

export function resolvePageInfo(pathname: string): {
  title: string;
  label: string;
  projectId: string | null;
} {
  if (pathname === "/") return { title: "the home page", label: "Home page", projectId: null };
  if (pathname.startsWith("/projects/")) {
    const slug = pathname.replace("/projects/", "").split("?")[0];
    const project = projectsData.find((p) => p.id === slug);
    const name = project ? project.title : slug.replace(/-/g, " ");
    return { title: `project page: ${name}`, label: name, projectId: slug };
  }
  return { title: pathname, label: pathname, projectId: null };
}

export function usePageTracking() {
  const pathname = usePathname();
  const { addMessage, addPageVisit } = useChat();
  const { setPageActionToast } = usePortfolio();
  const prevPathname = useRef<string | null>(null);

  useEffect(() => {
    if (prevPathname.current === pathname) return;
    const { title, label, projectId } = resolvePageInfo(pathname);
    addPageVisit(title, projectId);

    // Skip the toast/system message on first load — only announce real navigation
    if (prevPathname.current !== null) {
      addMessage({ role: "system", content: `Visitor navigated to: ${title}` });
      setPageActionToast({ message: `Now viewing: ${label}`, id: Date.now() });
    }
    prevPathname.current = pathname;
  }, [pathname, addMessage, addPageVisit, setPageActionToast]);
}

"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useChat } from "@/context/ChatContext";
import { projectsData } from "@/lib/data";

function resolvePageInfo(pathname: string): { title: string; projectId: string | null } {
  if (pathname === "/") return { title: "the home page", projectId: null };
  if (pathname.startsWith("/projects/")) {
    const slug = pathname.replace("/projects/", "").split("?")[0];
    const project = projectsData.find((p) => p.id === slug);
    const title = project ? project.title : slug.replace(/-/g, " ");
    return { title: `project page: ${title}`, projectId: slug };
  }
  return { title: pathname, projectId: null };
}

export function usePageTracking() {
  const pathname = usePathname();
  const { addMessage, addPageVisit } = useChat();
  const prevPathname = useRef<string | null>(null);

  useEffect(() => {
    if (prevPathname.current !== null && prevPathname.current !== pathname) {
      const { title, projectId } = resolvePageInfo(pathname);
      addPageVisit(title, projectId);
      addMessage({ role: "system", content: `Visitor navigated to: ${title}` });
    }
    prevPathname.current = pathname;
  }, [pathname, addMessage, addPageVisit]);
}

"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { usePageSections } from "@/context/PageSectionsContext";

function HighlightEffect() {
  const params = useSearchParams();
  const { highlightSection } = usePageSections();

  useEffect(() => {
    const target = params.get("highlight");
    if (!target) return;
    // Small delay to allow useSectionRegistration effects to run first
    const t = setTimeout(() => highlightSection(target), 350);
    return () => clearTimeout(t);
  }, [params, highlightSection]);

  return null;
}

export function ProjectHighlighter() {
  return (
    <Suspense fallback={null}>
      <HighlightEffect />
    </Suspense>
  );
}

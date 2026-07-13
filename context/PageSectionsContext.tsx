"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
  type RefObject,
} from "react";

export type SectionEntry = {
  id: string;
  label: string;
  ref: RefObject<HTMLElement>;
};

type PageSectionsContextType = {
  sections: SectionEntry[];
  registerSection: (id: string, label: string, ref: RefObject<HTMLElement>) => void;
  unregisterSection: (id: string) => void;
  highlightSection: (id: string) => void;
};

const PageSectionsContext = createContext<PageSectionsContextType | null>(null);

export function PageSectionsProvider({ children }: { children: ReactNode }) {
  const [sections, setSections] = useState<SectionEntry[]>([]);

  const registerSection = useCallback(
    (id: string, label: string, ref: RefObject<HTMLElement>) => {
      setSections((prev) => {
        if (prev.find((s) => s.id === id)) return prev;
        return [...prev, { id, label, ref }];
      });
    },
    []
  );

  const unregisterSection = useCallback((id: string) => {
    setSections((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const highlightSection = useCallback(
    (id: string) => {
      const entry = sections.find((s) => s.id === id);
      if (!entry) {
        console.warn(`[PageSections] HIGHLIGHT_SECTION: unknown section "${id}"`);
        return;
      }
      const el = entry.ref.current;
      if (!el) return;

      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // Soft Structuralism highlight: 2px accent outline, 0 radius, 2s duration
      el.style.transition = "outline 0.25s ease";
      el.style.outline = "2px solid #B45309";
      el.style.outlineOffset = "6px";
      el.style.borderRadius = "0";

      setTimeout(() => {
        el.style.outline = "";
        el.style.outlineOffset = "";
        el.style.borderRadius = "";
      }, 2000);
    },
    [sections]
  );

  return (
    <PageSectionsContext.Provider
      value={{ sections, registerSection, unregisterSection, highlightSection }}
    >
      {children}
    </PageSectionsContext.Provider>
  );
}

export function usePageSections() {
  const ctx = useContext(PageSectionsContext);
  if (!ctx) throw new Error("usePageSections must be used within PageSectionsProvider");
  return ctx;
}

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

      // ring-2 ring-blue-500 equivalent, 2s duration
      el.style.transition = "box-shadow 0.25s ease, outline 0.25s ease";
      el.style.outline = "2px solid rgb(59 130 246)";
      el.style.outlineOffset = "6px";
      el.style.borderRadius = "8px";

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

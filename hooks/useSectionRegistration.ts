import { useEffect, useRef } from "react";
import { usePageSections } from "@/context/PageSectionsContext";

export function useSectionRegistration(id: string, label: string) {
  const ref = useRef<HTMLElement>(null);
  const { registerSection, unregisterSection } = usePageSections();

  useEffect(() => {
    registerSection(id, label, ref);
    return () => unregisterSection(id);
  }, [id, label, registerSection, unregisterSection]);

  return ref;
}

"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

export type VisitorProfile = {
  role: string;
  companyTypes: string[];
  companySize: string;
};

export type PersonalisationResult = {
  heroTagline: string;
  aboutText: string;
  greeting: string;
  visibleProjects: string[];
  projectOrder: string[];
  experienceOrder: string[];
  highlightedExperience: string[];
  highlightTags: string[];
};

export type PageActionToast = { message: string; id: number };

// "checking" = initial SSR state; "idle" = no prior visit, show modal
export type PortfolioStatus = "checking" | "idle" | "loading" | "done" | "skipped";

type PortfolioContextType = {
  status: PortfolioStatus;
  personalisation: PersonalisationResult | null;
  visitorProfile: VisitorProfile | null;
  startPersonalisation: (profile: VisitorProfile) => Promise<void>;
  skipPersonalisation: () => void;
  resetPersonalisation: () => void;

  // Agentic page state
  highlightedProjectId: string | null;
  activeTagFilters: string[];
  agenticProjectOrder: string[] | null;
  highlightedExperienceIds: string[];
  contactNudgeMessage: string | null;
  pageActionToast: PageActionToast | null;
  setHighlightedProjectId: (id: string | null) => void;
  setActiveTagFilters: (tags: string[]) => void;
  setAgenticProjectOrder: (order: string[] | null) => void;
  setHighlightedExperienceIds: (ids: string[]) => void;
  setContactNudgeMessage: (msg: string | null) => void;
  setPageActionToast: (toast: PageActionToast | null) => void;
  resetPageState: () => void;
};

const PortfolioContext = createContext<PortfolioContextType | null>(null);

const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const ONBOARDING_KEY = "portfolio_personalisation";
const VISITOR_KEY = "portfolio_visitor";

function getCacheKey(role: string, companyTypes: string[], companySize: string) {
  return `portfolio_cache_${role}_${[...companyTypes].sort().join("_")}_${companySize}`;
}

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<PortfolioStatus>("checking");
  const [personalisation, setPersonalisation] = useState<PersonalisationResult | null>(null);
  const [visitorProfile, setVisitorProfile] = useState<VisitorProfile | null>(null);

  // Agentic page state
  const [highlightedProjectId, setHighlightedProjectId] = useState<string | null>(null);
  const [activeTagFilters, setActiveTagFilters] = useState<string[]>([]);
  const [agenticProjectOrder, setAgenticProjectOrder] = useState<string[] | null>(null);
  const [highlightedExperienceIds, setHighlightedExperienceIds] = useState<string[]>([]);
  const [contactNudgeMessage, setContactNudgeMessage] = useState<string | null>(null);
  const [pageActionToast, setPageActionToast] = useState<PageActionToast | null>(null);

  // On mount: restore from cache if available, otherwise show modal
  useEffect(() => {
    try {
      const onboardingRaw = localStorage.getItem(ONBOARDING_KEY);
      if (!onboardingRaw) {
        setStatus("idle");
        return;
      }
      const onboarding = JSON.parse(onboardingRaw) as { skipped?: boolean; completedAt: number };
      if (Date.now() - onboarding.completedAt > CACHE_TTL_MS) {
        localStorage.removeItem(ONBOARDING_KEY);
        setStatus("idle");
        return;
      }
      if (onboarding.skipped) {
        setStatus("skipped");
        return;
      }
      // Try to restore cached personalisation
      const visitorRaw = localStorage.getItem(VISITOR_KEY);
      if (!visitorRaw) {
        setStatus("skipped");
        return;
      }
      const profile = JSON.parse(visitorRaw) as VisitorProfile;
      const cacheKey = getCacheKey(profile.role, profile.companyTypes, profile.companySize);
      const cacheRaw = localStorage.getItem(cacheKey);
      if (!cacheRaw) {
        setStatus("skipped");
        return;
      }
      const { result, cachedAt } = JSON.parse(cacheRaw) as {
        result: PersonalisationResult;
        cachedAt: number;
      };
      if (Date.now() - cachedAt > CACHE_TTL_MS) {
        setStatus("idle");
        return;
      }
      setPersonalisation(result);
      setVisitorProfile(profile);
      setStatus("done");
    } catch {
      setStatus("idle");
    }
  }, []);

  const startPersonalisation = useCallback(async (profile: VisitorProfile) => {
    setVisitorProfile(profile);
    setStatus("loading");

    const { role, companyTypes, companySize } = profile;
    const cacheKey = getCacheKey(role, companyTypes, companySize);

    // Check cache first
    try {
      const cacheRaw = localStorage.getItem(cacheKey);
      if (cacheRaw) {
        const { result, cachedAt } = JSON.parse(cacheRaw) as {
          result: PersonalisationResult;
          cachedAt: number;
        };
        if (Date.now() - cachedAt < CACHE_TTL_MS) {
          setPersonalisation(result);
          setStatus("done");
          localStorage.setItem(VISITOR_KEY, JSON.stringify(profile));
          localStorage.setItem(
            ONBOARDING_KEY,
            JSON.stringify({ completedAt: Date.now() })
          );
          return;
        }
      }
    } catch {}

    // Call API
    try {
      const res = await fetch("/api/personalise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });
      if (!res.ok) throw new Error(`API error ${res.status}`);
      const result = (await res.json()) as PersonalisationResult;
      setPersonalisation(result);
      setStatus("done");
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ result, cachedAt: Date.now() })
      );
      localStorage.setItem(VISITOR_KEY, JSON.stringify(profile));
      localStorage.setItem(
        ONBOARDING_KEY,
        JSON.stringify({ completedAt: Date.now() })
      );
    } catch {
      // API failed — show everything gracefully
      setStatus("skipped");
    }
  }, []);

  const skipPersonalisation = useCallback(() => {
    localStorage.setItem(
      ONBOARDING_KEY,
      JSON.stringify({ skipped: true, completedAt: Date.now() })
    );
    setStatus("skipped");
  }, []);

  const resetPersonalisation = useCallback(() => {
    const keys = Object.keys(localStorage).filter((k) =>
      k.startsWith("portfolio_")
    );
    keys.forEach((k) => localStorage.removeItem(k));
    setPersonalisation(null);
    setVisitorProfile(null);
    setStatus("idle");
  }, []);

  const resetPageState = useCallback(() => {
    setHighlightedProjectId(null);
    setActiveTagFilters([]);
    setAgenticProjectOrder(null);
    setHighlightedExperienceIds([]);
    setContactNudgeMessage(null);
    setPageActionToast(null);
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        status,
        personalisation,
        visitorProfile,
        startPersonalisation,
        skipPersonalisation,
        resetPersonalisation,
        highlightedProjectId,
        activeTagFilters,
        agenticProjectOrder,
        highlightedExperienceIds,
        contactNudgeMessage,
        pageActionToast,
        setHighlightedProjectId,
        setActiveTagFilters,
        setAgenticProjectOrder,
        setHighlightedExperienceIds,
        setContactNudgeMessage,
        setPageActionToast,
        resetPageState,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used within PortfolioProvider");
  return ctx;
}

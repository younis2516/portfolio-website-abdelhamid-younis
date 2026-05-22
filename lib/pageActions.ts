import type { PageActionToast } from "@/context/PortfolioContext";

export type PageAction =
  | { type: "SCROLL_TO"; section: string }
  | { type: "HIGHLIGHT_PROJECT"; projectId: string }
  | { type: "HIGHLIGHT_EXPERIENCE"; ids: string[] }
  | { type: "FILTER_BY_TAG"; tags: string[] }
  | { type: "REORDER_PROJECTS"; projectIds: string[] }
  | { type: "NUDGE_CONTACT"; message: string }
  | { type: "RESET_PAGE" };

type ActionContext = {
  setHighlightedProjectId: (id: string | null) => void;
  setActiveTagFilters: (tags: string[]) => void;
  setAgenticProjectOrder: (order: string[] | null) => void;
  setHighlightedExperienceIds: (ids: string[]) => void;
  setContactNudgeMessage: (msg: string | null) => void;
  setPageActionToast: (toast: PageActionToast | null) => void;
  resetPageState: () => void;
};

function scrollTo(sectionId: string) {
  const el = document.getElementById(sectionId.toLowerCase());
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function executePageAction(action: PageAction, ctx: ActionContext) {
  const toast = (message: string) =>
    ctx.setPageActionToast({ message, id: Date.now() });

  switch (action.type) {
    case "SCROLL_TO": {
      scrollTo(action.section);
      toast(`Scrolled to ${action.section}`);
      break;
    }
    case "HIGHLIGHT_PROJECT": {
      ctx.setHighlightedProjectId(action.projectId);
      const el = document.getElementById(`project-${action.projectId}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      toast("Highlighted project");
      break;
    }
    case "HIGHLIGHT_EXPERIENCE": {
      ctx.setHighlightedExperienceIds(action.ids);
      scrollTo("experience");
      toast(`Highlighted ${action.ids.length} experience${action.ids.length !== 1 ? "s" : ""}`);
      break;
    }
    case "FILTER_BY_TAG": {
      ctx.setActiveTagFilters(action.tags);
      scrollTo("projects");
      toast(`Filtering by: ${action.tags.join(", ")}`);
      break;
    }
    case "REORDER_PROJECTS": {
      ctx.setAgenticProjectOrder(action.projectIds);
      scrollTo("projects");
      toast("Projects reordered");
      break;
    }
    case "NUDGE_CONTACT": {
      ctx.setContactNudgeMessage(action.message);
      scrollTo("contact");
      break;
    }
    case "RESET_PAGE": {
      ctx.resetPageState();
      break;
    }
  }
}

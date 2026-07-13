"use client";

import { usePortfolio } from "@/context/PortfolioContext";

export default function ResetButton() {
  const { status, resetPersonalisation } = usePortfolio();
  if (status !== "done") return null;

  return (
    <button
      onClick={resetPersonalisation}
      className="
        ss-page
        fixed bottom-5 left-5 z-50
        flex items-center gap-2
        px-4 py-2
        bg-paper/90 backdrop-blur-md
        border border-hairline
        font-ss-mono text-xs uppercase tracking-widest text-muted
        hover:text-ink hover:border-ink
        transition-colors duration-200
      "
    >
      Reset personalisation
    </button>
  );
}

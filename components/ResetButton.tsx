"use client";

import { usePortfolio } from "@/context/PortfolioContext";

export default function ResetButton() {
  const { status, resetPersonalisation } = usePortfolio();
  if (status !== "done") return null;

  return (
    <button
      onClick={resetPersonalisation}
      className="
        fixed bottom-5 left-5 z-50
        flex items-center gap-2
        px-4 py-2 rounded-full
        bg-white/90 dark:bg-zinc-900/90
        border border-black/10 dark:border-white/10
        text-xs text-zinc-500 dark:text-zinc-400
        shadow-md backdrop-blur-md
        hover:shadow-lg hover:text-zinc-800 dark:hover:text-zinc-200
        transition-all duration-200
      "
    >
      🔄 Reset personalisation
    </button>
  );
}

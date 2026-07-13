"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "@/context/PortfolioContext";

export default function PageActionToast() {
  const { pageActionToast, setPageActionToast } = usePortfolio();

  useEffect(() => {
    if (!pageActionToast) return;
    const t = setTimeout(() => setPageActionToast(null), 2500);
    return () => clearTimeout(t);
  }, [pageActionToast, setPageActionToast]);

  return (
    <AnimatePresence>
      {pageActionToast && (
        <motion.div
          key={pageActionToast.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18 }}
          className="ss-page fixed bottom-24 left-1/2 -translate-x-1/2 z-[200] px-5 py-2.5 bg-ink text-paper font-ss-mono text-xs uppercase tracking-widest pointer-events-none whitespace-nowrap"
        >
          {pageActionToast.message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "@/context/PortfolioContext";

const ROLES = [
  { label: "Recruiter / Talent Acquisition", icon: "🔍" },
  { label: "Hiring Manager", icon: "🤝" },
  { label: "Founder / Co-Founder", icon: "🚀" },
  { label: "Product Lead", icon: "📊" },
  { label: "Design Lead", icon: "🎨" },
  { label: "Engineer / CTO", icon: "⚙️" },
  { label: "Other", icon: "💬" },
];

const COMPANY_TYPES = [
  { label: "B2C (consumer-facing products)", icon: "🛍️" },
  { label: "B2B / SaaS", icon: "💼" },
  { label: "Enterprise", icon: "🏢" },
  { label: "Startup / Scale-up", icon: "⚡" },
  { label: "Agency", icon: "🎯" },
  { label: "Retail / E-commerce", icon: "🏪" },
];

const COMPANY_SIZES = [
  { label: "1–50 employees (early stage)", icon: "🌱" },
  { label: "51–200 employees (growth stage)", icon: "🌿" },
  { label: "201–1000 employees (mid-market)", icon: "🌳" },
  { label: "1000+ employees (large / enterprise)", icon: "🏗️" },
];

const STEP_META = [
  { question: "What's your role?", icon: "👤" },
  { question: "What type of company?", icon: "🏢" },
  { question: "How big is the team?", icon: "📏" },
];

function OptionButton({
  icon,
  label,
  selected,
  onClick,
}: {
  icon: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      animate={
        selected
          ? { scale: [1, 1.04, 1], transition: { duration: 0.25, ease: "easeOut" } }
          : { scale: 1 }
      }
      className={`
        relative text-left text-sm px-3 py-2.5 rounded-xl border transition-colors duration-150
        flex items-center gap-2.5
        ${
          selected
            ? "border-zinc-900 dark:border-white bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium shadow-sm"
            : "border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
        }
      `}
    >
      <span className="text-base leading-none shrink-0">{icon}</span>
      <span className="leading-snug">{label}</span>
      {selected && (
        <motion.span
          className="ml-auto shrink-0 text-xs"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          ✓
        </motion.span>
      )}
    </motion.button>
  );
}

export default function OnboardingModal() {
  const { startPersonalisation, skipPersonalisation } = usePortfolio();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [companyTypes, setCompanyTypes] = useState<string[]>([]);
  const [companySize, setCompanySize] = useState("");

  function toggleCompanyType(type: string) {
    setCompanyTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  function canAdvance() {
    if (step === 1) return role !== "";
    if (step === 2) return companyTypes.length > 0;
    if (step === 3) return companySize !== "";
    return false;
  }

  async function handleSubmit() {
    if (!canAdvance()) return;
    await startPersonalisation({ role, companyTypes, companySize });
  }

  const meta = STEP_META[step - 1];

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 pt-[5rem] sm:pt-4">
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={skipPersonalisation}
      />

      {/* Modal */}
      <motion.div
        className="
          relative z-10 w-full max-w-lg
          bg-white dark:bg-zinc-900
          rounded-3xl shadow-2xl
          border border-black/[0.08] dark:border-white/[0.08]
          overflow-hidden
          flex flex-col
        "
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-0">
          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-5">
            {[1, 2, 3].map((s) => (
              <motion.div
                key={s}
                className="h-1 flex-1 rounded-full"
                animate={{
                  backgroundColor:
                    s <= step
                      ? "rgb(24,24,27)"
                      : "rgb(228,228,231)",
                }}
                transition={{ duration: 0.3 }}
                style={{ backgroundColor: "rgb(228,228,231)" }}
              />
            ))}
          </div>

          <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 mb-2">
            Step {step} of 3
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white leading-snug">
            Let me tailor this to you
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">
            Three quick questions so I surface exactly what's most relevant for you.
          </p>
        </div>

        {/* Step content */}
        <div className="px-8 py-6 min-h-[240px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3 flex items-center gap-2">
                  <span>{meta.icon}</span>
                  {meta.question}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ROLES.map((r) => (
                    <OptionButton
                      key={r.label}
                      icon={r.icon}
                      label={r.label}
                      selected={role === r.label}
                      onClick={() => setRole(r.label)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1 flex items-center gap-2">
                  <span>{meta.icon}</span>
                  {meta.question}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-3 pl-6">
                  Pick all that apply
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {COMPANY_TYPES.map((t) => (
                    <OptionButton
                      key={t.label}
                      icon={t.icon}
                      label={t.label}
                      selected={companyTypes.includes(t.label)}
                      onClick={() => toggleCompanyType(t.label)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3 flex items-center gap-2">
                  <span>{meta.icon}</span>
                  {meta.question}
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {COMPANY_SIZES.map((s) => (
                    <OptionButton
                      key={s.label}
                      icon={s.icon}
                      label={s.label}
                      selected={companySize === s.label}
                      onClick={() => setCompanySize(s.label)}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-8 pb-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {step > 1 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                ← Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canAdvance()}
                className="
                  ml-auto px-6 py-2.5 rounded-full text-sm font-semibold
                  bg-zinc-900 dark:bg-white text-white dark:text-zinc-900
                  hover:bg-zinc-700 dark:hover:bg-zinc-100
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-all
                "
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canAdvance()}
                className="
                  ml-auto px-6 py-2.5 rounded-full text-sm font-semibold
                  bg-zinc-900 dark:bg-white text-white dark:text-zinc-900
                  hover:bg-zinc-700 dark:hover:bg-zinc-100
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-all
                "
              >
                Personalise my view →
              </button>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={skipPersonalisation}
              className="
                text-sm font-medium
                text-zinc-500 dark:text-zinc-400
                hover:text-zinc-800 dark:hover:text-zinc-100
                border border-zinc-200 dark:border-zinc-700
                hover:border-zinc-400 dark:hover:border-zinc-500
                px-4 py-1.5 rounded-full
                transition-all duration-150
              "
            >
              Skip — show everything
            </button>
          </div>
        </div>

        {/* Powered by Claude */}
        <div className="px-8 pb-6 pt-4 flex flex-col items-center gap-1 border-t border-zinc-100 dark:border-zinc-800">
          <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center leading-relaxed">
            Powered by{" "}
            <span className="font-medium text-zinc-500 dark:text-zinc-400">
              Claude Sonnet 4.6
            </span>
          </p>
          <p className="text-[10px] text-zinc-400/70 dark:text-zinc-600 text-center max-w-xs leading-relaxed">
            This portfolio uses a personalisation agent to surface the most relevant work and experience for you.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

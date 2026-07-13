"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePortfolio } from "@/context/PortfolioContext";

const EASE = [0.22, 1, 0.36, 1] as const;

const ROLES = [
  "Recruiter / Talent Acquisition",
  "Hiring Manager",
  "Founder / Co-Founder",
  "Product Lead",
  "Design Lead",
  "Engineer / CTO",
  "Other",
];

const COMPANY_TYPES = [
  "B2C (consumer-facing products)",
  "B2B / SaaS",
  "Enterprise",
  "Startup / Scale-up",
  "Agency",
  "Retail / E-commerce",
];

const STEP_META = ["What's your role?", "What type of company?"];

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative text-left text-sm px-3 py-2.5 border transition-colors duration-150
        flex items-center gap-2.5
        ${
          selected
            ? "border-ink bg-ink text-paper font-medium"
            : "border-hairline text-ink hover:border-ink"
        }
      `}
    >
      <span className="leading-snug">{label}</span>
      {selected && (
        <span className="ml-auto shrink-0 font-ss-mono text-xs">✓</span>
      )}
    </button>
  );
}

export default function OnboardingModal() {
  const { startPersonalisation, skipPersonalisation } = usePortfolio();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [companyTypes, setCompanyTypes] = useState<string[]>([]);
  const reduce = useReducedMotion();

  function toggleCompanyType(type: string) {
    setCompanyTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  function canAdvance() {
    if (step === 1) return role !== "";
    if (step === 2) return companyTypes.length > 0;
    return false;
  }

  async function handleSubmit() {
    if (!canAdvance()) return;
    // companySize is no longer collected in the (now 2-step) wizard; the
    // personalisation pipeline still expects the field, so pass it empty.
    await startPersonalisation({ role, companyTypes, companySize: "" });
  }

  const question = STEP_META[step - 1];

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
      {/* Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ background: "rgba(20,20,18,0.55)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={skipPersonalisation}
      />

      {/* Modal */}
      <motion.div
        className="relative z-10 w-full max-w-lg bg-paper border border-hairline overflow-hidden flex flex-col"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: reduce ? 0.15 : 0.3, ease: EASE }}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-0">
          {/* Progress */}
          <div className="flex items-center gap-3 mb-5 font-ss-mono text-xs text-muted">
            {[1, 2].map((s) => (
              <span key={s} className={s <= step ? "text-ink" : "text-muted"}>
                0{s}
              </span>
            ))}
          </div>

          <p className="font-ss-mono text-xs uppercase tracking-widest text-muted mb-2">
            Step {step} of 2
          </p>

          <h2 className="font-display text-xl sm:text-2xl text-ink leading-snug">
            Let me tailor this to you
          </h2>
          <p className="text-sm text-muted mt-1.5">
            Two quick questions so I surface exactly what&apos;s most relevant for you.
          </p>
        </div>

        {/* Step content */}
        <div className="px-8 py-6 min-h-[240px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-ss-mono text-xs uppercase tracking-widest text-muted mb-3">
                  {question}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ROLES.map((r) => (
                    <OptionButton
                      key={r}
                      label={r}
                      selected={role === r}
                      onClick={() => setRole(r)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-ss-mono text-xs uppercase tracking-widest text-muted mb-1">
                  {question}
                </p>
                <p className="text-xs text-muted mb-3">Pick all that apply</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {COMPANY_TYPES.map((t) => (
                    <OptionButton
                      key={t}
                      label={t}
                      selected={companyTypes.includes(t)}
                      onClick={() => toggleCompanyType(t)}
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
                className="font-ss-mono text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors"
              >
                ← Back
              </button>
            )}
            {step < 2 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canAdvance()}
                className="ml-auto px-6 py-2.5 font-ss-mono text-xs uppercase tracking-widest bg-ink text-paper disabled:opacity-30 disabled:cursor-not-allowed transition-opacity hover:opacity-80"
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canAdvance()}
                className="ml-auto px-6 py-2.5 font-ss-mono text-xs uppercase tracking-widest bg-ink text-paper disabled:opacity-30 disabled:cursor-not-allowed transition-opacity hover:opacity-80"
              >
                Personalise my view →
              </button>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={skipPersonalisation}
              className="font-ss-mono text-xs uppercase tracking-widest text-muted hover:text-ink border border-hairline hover:border-ink px-4 py-1.5 transition-colors duration-150"
            >
              Skip — show everything
            </button>
          </div>
        </div>

        {/* Powered by Claude */}
        <div className="px-8 pb-6 pt-4 flex flex-col items-center gap-1 border-t border-hairline">
          <p className="font-ss-mono text-xs text-muted text-center leading-relaxed">
            Powered by <span className="text-ink">Claude Sonnet 4.6</span>
          </p>
          <p className="text-[10px] text-muted/70 text-center max-w-xs leading-relaxed">
            This portfolio uses a personalisation agent to surface the most relevant work and experience for you.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

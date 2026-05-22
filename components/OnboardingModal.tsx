"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "@/context/PortfolioContext";

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

const COMPANY_SIZES = [
  "1–50 employees (early stage)",
  "51–200 employees (growth stage)",
  "201–1000 employees (mid-market)",
  "1000+ employees (large / enterprise)",
];

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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
        "
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-0">
          <div className="flex items-center gap-2 mb-5">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  s <= step
                    ? "bg-zinc-900 dark:bg-white"
                    : "bg-zinc-200 dark:bg-zinc-700"
                }`}
              />
            ))}
          </div>
          <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 mb-2">
            Step {step} of 3
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white leading-snug">
            Welcome to my Agentic Portfolio
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">
            Answer 3 quick questions and I&apos;ll show you exactly what&apos;s relevant to you.
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
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3">
                  What&apos;s your role?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ROLES.map((r) => (
                    <button
                      key={r}
                      onClick={() => setRole(r)}
                      className={`
                        text-left text-sm px-4 py-2.5 rounded-xl border transition-all duration-150
                        ${
                          role === r
                            ? "border-zinc-900 dark:border-white bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium"
                            : "border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                        }
                      `}
                    >
                      {r}
                    </button>
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
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Company type
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-3">
                  Pick all that apply
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {COMPANY_TYPES.map((t) => (
                    <button
                      key={t}
                      onClick={() => toggleCompanyType(t)}
                      className={`
                        text-left text-sm px-4 py-2.5 rounded-xl border transition-all duration-150
                        ${
                          companyTypes.includes(t)
                            ? "border-zinc-900 dark:border-white bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium"
                            : "border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                        }
                      `}
                    >
                      {t}
                    </button>
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
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3">
                  Company size
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {COMPANY_SIZES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setCompanySize(s)}
                      className={`
                        text-left text-sm px-4 py-2.5 rounded-xl border transition-all duration-150
                        ${
                          companySize === s
                            ? "border-zinc-900 dark:border-white bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium"
                            : "border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                        }
                      `}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8 flex flex-col gap-3">
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

          <p className="text-center">
            <button
              onClick={skipPersonalisation}
              className="text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 underline underline-offset-2 transition-colors"
            >
              Skip, show everything
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

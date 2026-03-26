"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const items = [
  {
    label: "Enterprise systems at scale",
    gradient:
      "from-[#d7f3ef]/30 via-[#f3efe5]/30 to-[#f7e2c8]/30 dark:from-[#0f2f2c]/20 dark:via-[#2a2520]/20 dark:to-[#3a2f22]/20",
  },
  {
    label: "Data-heavy UX & analytics",
    gradient:
      "from-[#e0ecff]/30 via-[#f3e8ff]/30 to-[#ffe4e6]/30 dark:from-[#1e293b]/20 dark:via-[#2e1065]/20 dark:to-[#3f1d2e]/20",
  },
  {
    label: "Design systems & architecture",
    gradient:
      "from-[#e6fffa]/30 via-[#ecfeff]/30 to-[#f0fdf4]/30 dark:from-[#022c22]/20 dark:via-[#083344]/20 dark:to-[#052e16]/20",
  },
  {
    label: "Frontend engineering (React / Next.js)",
    gradient:
      "from-[#fef3c7]/30 via-[#ffe4e6]/30 to-[#e0f2fe]/30 dark:from-[#3f2f00]/20 dark:via-[#3f1d2e]/20 dark:to-[#082f49]/20",
  },
];

export default function SystemPositioning() {
  return (
    <section className="w-full mt-4 sm:mt-4">
      {/* 🔥 Section background wrapper */}
      <div className="w-full py-2 sm:py-4 ">
        <div className="max-w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
              relative
              rounded-3xl
              px-6 py-8 sm:px-12 sm:py-10
              bg-white/70 dark:bg-white/[0.03]
              backdrop-blur-xl
              border border-black/5 dark:border-white/10
              overflow-hidden
            "
          >
            {/* 🌈 subtle ambient gradient (premium touch) */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#d7f3ef] blur-[120px]" />
              <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#f7e2c8] blur-[120px]" />
            </div>

            {/* content */}
            <div className="relative z-10">
              {/* 🔥 Hook */}
              <p className="text-sm sm:text-base lg:text-lg text-zinc-700 dark:text-zinc-300 text-center max-w-3xl mx-auto leading-relaxed mb-8">
                From self-checkout systems in supermarkets to AI-powered
                products —
                <span className="text-zinc-900 dark:text-white font-medium">
                  {" "}
                  I design systems that need to work reliably at scale.
                </span>
              </p>

              {/* ⚡ Chips */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      flex items-center gap-2
                      px-4 py-2
                      rounded-full
                      text-xs sm:text-sm
                      font-medium
                      text-zinc-800 dark:text-zinc-200
                      border border-black/5 dark:border-white/10
                      backdrop-blur-sm
                      bg-gradient-to-br ${item.gradient}
                      transition-all duration-300
                      hover:scale-[1.03]
                    `}
                  >
                    <FiCheck className="text-zinc-500 dark:text-zinc-400 text-sm" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

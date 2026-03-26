"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

export default function TubicsDesignSystemPage() {
  return (
    <main className="flex flex-col items-center pb-16">
      {/* HERO */}
      <div className="relative w-full overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <img
          src="/tubics-design-system-banner.png"
          alt="Tubics banner"
          className="w-full object-contain"
        />

        <div className="absolute inset-0 flex justify-center">
          <div className="relative w-full sm:max-w-[73rem] px-4">
            <Link
              href="/"
              className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border shadow-sm"
            >
              <FiArrowLeft /> Back
            </Link>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-[73rem] -mt-12 px-4 z-10">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border p-8">
          {/* HEADER */}
          <header className="mb-16">
            <h1 className="text-3xl font-bold mb-6">
              Tubics — Scalable Design System & Engineering Alignment
            </h1>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl">
              As the sole product designer, I led the creation of a scalable
              design system to reduce technical debt, align design with
              engineering, and accelerate feature delivery across a B2B SaaS
              analytics platform.
            </p>

            <div className="mt-6 space-y-2 text-gray-700 dark:text-white/70">
              <p>
                <strong>Role:</strong> Lead Product Designer
              </p>
              <p>
                <strong>Scope:</strong> System architecture, tokens, components,
                dev docs
              </p>
              <p>
                <strong>Duration:</strong> 3 months
              </p>
              <p>
                <strong>Stack:</strong> Figma, React (MUI), Confluence, HTML/CSS
              </p>
            </div>

            {/* HERO PRODUCT VISUAL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="mt-10 relative w-full aspect-[1/1] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-hero-dashboard.png"
                  alt="Tubics dashboard overview"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-10 relative w-full aspect-[1/1] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-hero-dashboard-1.png"
                  alt="Tubics dashboard overview"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </header>

          {/* IMPACT */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">Impact</h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70 max-w-3xl">
              <li>
                <strong>+55% increase</strong> in development velocity
              </li>
              <li>
                <strong>~80% reduction</strong> in UI inconsistencies
              </li>
              <li>Reduced handoff time from days → hours</li>
              <li>Enabled 5+ new features without system rework</li>
            </ul>
          </section>

          {/* PROBLEM */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">
              The Challenge — Technical Debt at Scale
            </h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-4">
              The UI had evolved into a fragmented system with duplicated
              components, inconsistent styles, and hard-coded values.
            </p>

            <ul className="list-disc list-inside text-gray-700 dark:text-white/70 max-w-3xl space-y-2">
              <li>Developers rebuilt UI patterns from scratch</li>
              <li>Multiple variations of components</li>
              <li>No shared source of truth</li>
              <li>High QA overhead</li>
            </ul>
          </section>

          {/* STRATEGY */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">
              Strategy — Minimum Viable Design System
            </h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              I focused on a{" "}
              <strong>minimum viable system aligned with engineering</strong>.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70 max-w-3xl">
              <li>Selected Material UI (React)</li>
              <li>Audited key components</li>
              <li>Prioritized analytics-heavy UI</li>
              <li>Defined semantic tokens</li>
            </ul>
          </section>

          {/* UX DECISIONS */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">
              UX Decisions & Product Thinking
            </h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              Focused on guiding users toward better decisions instead of
              showing raw data.
            </p>

            <ul className="list-disc list-inside text-gray-700 dark:text-white/70 max-w-3xl space-y-2">
              <li>Prioritized actionable insights</li>
              <li>Progressive disclosure</li>
              <li>Error & edge case handling</li>
              <li>Reduced cognitive load</li>
            </ul>

            <div className="mt-10 grid gap-6">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-ux-things-to-fix.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* EXECUTION */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">Execution</h2>

            <h3 className="font-semibold mb-2">1. Token System</h3>
            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              Introduced semantic tokens to replace hard-coded values.
            </p>

            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-10">
              <Image
                src="/tubics-tokens.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <h3 className="font-semibold mb-2">2. Component Architecture</h3>
            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              Built reusable components aligned with MUI.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden mb-10">
                <Image
                  src="/tubics-components.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden mb-10">
                <Image
                  src="/tubics-components-2.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden mb-10">
                <Image
                  src="/tubics-components-3.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden mb-10">
                <Image
                  src="/tubics-components-4.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h3 className="font-semibold mb-2">2b. Data-Heavy Interfaces</h3>
            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              Focused on clarity in complex dashboards and tables.
            </p>

            <div className="grid sm:grid-cols-1 gap-6 mb-10">
              <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden mb-10">
                <Image
                  src="/tubics-ideas.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h3 className="font-semibold mb-2">3. Documentation</h3>
            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              Built a developer-facing documentation system.
            </p>

            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/tubics-documentation.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* VALIDATION */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">Validation</h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              Developer rebuilt a page in under 24 hours using only the system.
            </p>

            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/tubics-validation.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* VIDEO */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-4">
              Full Process Walkthrough
            </h2>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/4reO_JY3v48"
                allowFullScreen
              />
            </div>
          </section>

          {/* ENGINEERING */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">
              Engineering Thinking
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70 max-w-3xl">
              <li>Token system compatible with CSS variables</li>
              <li>Figma ↔ React alignment</li>
              <li>Edge case handling</li>
              <li>Reusable architecture</li>
            </ul>
          </section>

          {/* OUTCOME */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Outcome</h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl">
              Transformed a fragmented UI into a scalable system that
              accelerated development and reduced long-term complexity.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

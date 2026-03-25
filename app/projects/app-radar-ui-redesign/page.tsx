"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

export default function AppRadarRedesignPage() {
  return (
    <main className="flex flex-col items-center pb-16">
      {/* Banner */}
      <div className="relative w-full overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <img
          src="/app-radar-banner.png"
          alt="App Radar banner"
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

      {/* Content */}
      <div className="w-full sm:max-w-[73rem] -mt-10 px-4 z-10">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border p-6 sm:p-10">
          {/* HERO */}
          <header className="mb-16">
            <h1 className="text-3xl font-bold mb-6">
              App Radar — Growth & Analytics Platform Redesign
            </h1>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl">
              I redesigned core parts of App Radar’s B2B SaaS platform to
              improve activation, clarify data interpretation, and transform raw
              ASO data into actionable growth insights for marketers.
            </p>

            <div className="mt-6 space-y-2 text-gray-700 dark:text-white/70">
              <p>
                <strong>Client:</strong> App Radar
              </p>
              <p>
                <strong>Role:</strong> Product Designer (End-to-End Ownership)
              </p>
              <p>
                <strong>Scope:</strong> UX strategy, onboarding systems, data
                visualization, frontend collaboration
              </p>
              <p>
                <strong>Duration:</strong> 2 months
              </p>
            </div>
          </header>

          {/* IMPACT */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">Impact</h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70 max-w-3xl">
              <li>+30% increase in onboarding completion rate</li>
              <li>+42% increase in feature adoption (ASO suggestions)</li>
              <li>Improved activation-to-retention conversion</li>
              <li>Reduced early churn caused by “empty dashboard confusion”</li>
            </ul>
          </section>

          {/* PROBLEM */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">Problem Framing</h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl leading-relaxed">
              New users struggled to reach value because the product relied on
              external data connections (App Store, Ads). Without this data,
              dashboards appeared empty and confusing, leading to drop-off.
            </p>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl mt-4 leading-relaxed">
              The core challenge was designing a system that bridges the gap
              between “no data” and “actionable insights” — while maintaining
              clarity, trust, and engagement.
            </p>
          </section>

          {/* PROCESS */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">
              Discovery & System Thinking
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70 max-w-3xl">
              <li>Analyzed onboarding drop-offs and activation funnels</li>
              <li>
                Reviewed session recordings to identify confusion patterns
              </li>
              <li>
                Mapped data dependencies across App Store & Ads integrations
              </li>
              <li>
                Aligned with product & engineering on data delay constraints
              </li>
              <li>Audited competitor tools (SensorTower, App Annie)</li>
            </ul>

            <p className="text-gray-700 dark:text-white/70 mt-6 max-w-3xl">
              Key insight: Users don’t need “data” — they need **direction under
              uncertainty**.
            </p>
          </section>

          {/* ARCHITECTURE */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">System Architecture</h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl">
              I redesigned the product into a progressive system:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-white/70 max-w-3xl">
              <li>
                <strong>Setup Layer:</strong> Connect accounts & prepare data
              </li>
              <li>
                <strong>Guidance Layer:</strong> Prompt required inputs
                (keywords, competitors)
              </li>
              <li>
                <strong>Insight Layer:</strong> Deliver actionable ASO
                recommendations
              </li>
              <li>
                <strong>Optimization Layer:</strong> Identify growth
                opportunities
              </li>
            </ul>
          </section>

          {/* PROBLEM 1 */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">
              Solving Data Latency & Empty States
            </h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              Data ingestion takes minutes. Instead of showing empty dashboards,
              I designed a guided transition state that explains what’s
              happening and what the user should expect.
            </p>

            <div className="relative w-full aspect-[16/9] mb-8">
              <Image
                src="/app-radar-2.png"
                alt="Empty state"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl">
              This reframed waiting time into a “progress phase” rather than a
              failure state.
            </p>
          </section>

          {/* PROBLEM 2 */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">
              Turning Inputs into Insights (ASO System)
            </h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              Users didn’t know what inputs were required to generate value. I
              introduced structured prompts that guide users to add keywords and
              competitors.
            </p>

            <div className="relative w-full aspect-[16/9] mb-10">
              <Image
                src="/app-radar-4.png"
                alt="Keywords"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              Once sufficient data is available, the system generates
              prioritized ASO recommendations with clear actions.
            </p>

            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/app-radar-5.png"
                alt="ASO suggestions"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* PROBLEM 3 */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">
              Keyword Intelligence & Optimization
            </h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              Marketers were spending budget without clear visibility into
              keyword performance.
            </p>

            <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-white/70 max-w-3xl">
              <li>Keyword Insights — performance & ranking</li>
              <li>Keyword Opportunities — alternative high-value targets</li>
            </ul>

            <div className="grid gap-6">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/app-radar-6.png"
                  alt="Insights"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[16/9]">
                <Image
                  src="/app-radar-7.png"
                  alt="Opportunities"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* ENGINEERING */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">
              Engineering & Frontend Collaboration
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70 max-w-3xl">
              <li>Designed state-based UI for async data flows</li>
              <li>Structured scalable dashboard components</li>
              <li>Handled empty, loading, and partial data states</li>
              <li>Optimized information density for large datasets</li>
            </ul>
          </section>

          {/* OUTCOME */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Outcome & Reflection
            </h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              This project transformed the product from a data-heavy tool into a
              guided growth system. It reinforced my approach to designing
              analytics products: reduce ambiguity, structure data into meaning,
              and guide users toward action.
            </p>

            <div className="relative w-full aspect-[1/1]">
              <Image
                src="/app-radar-3.png"
                alt="Final dashboard"
                fill
                className="object-contain"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

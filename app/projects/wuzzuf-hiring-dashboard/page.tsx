"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

export default function WuzzufHiringDashboardPage() {
  return (
    <div className="ss-page project-page">
    <main className="flex flex-col items-center pb-16">
      {/* Banner — retired in the Soft Structuralism redesign, kept for reference
      <div className="relative w-full overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <img
          src="/wuzzuf-banner.png"
          alt="Wuzzuf hiring dashboard banner"
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
      */}

      {/* Content */}
      <div className="w-full sm:max-w-[73rem] px-4 z-10">
        <div className="pt-12 mb-6">
          <Link
            href="/"
            className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent font-ss-mono text-xs uppercase tracking-widest"
          >
            ← Back to portfolio
          </Link>
        </div>
        <div className="border border-hairline p-6 sm:p-10">
          {/* HERO */}
          <header className="mb-16">
            <h1 className="font-display text-3xl sm:text-4xl text-ink mb-6">
              Wuzzuf — Hiring Intelligence Dashboard
            </h1>

            <p className="text-muted max-w-3xl">
              I led the redesign of Wuzzuf’s employer dashboard, transforming it
              from a fragmented reporting interface into a decision-making
              system that surfaces hiring performance, guides next actions, and
              aligns user success with business monetization.
            </p>

            <div className="mt-6 space-y-2 text-muted">
              <p>
                <strong>Company:</strong> Wuzzuf
              </p>
              <p>
                <strong>Role:</strong> Solo Product Designer (End-to-End
                Ownership)
              </p>
              <p>
                <strong>Scope:</strong> UX strategy, interaction design, data
                modeling, frontend collaboration
              </p>
              <p>
                <strong>Scale:</strong> 20,000+ employers · 20M+ users
              </p>
            </div>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-3 mb-6 gap-y-6">
            <div className="flex flex-col text-center justify-center items-center">
              <p className="font-ss-mono text-2xl text-ink leading-relaxed">
                32%
              </p>
              <p className="text-sm text-muted leading-relaxed">
                increase in dashboard <br></br> engagement
              </p>
            </div>

            <div className="flex flex-col text-center justify-center items-center">
              <p className="font-ss-mono text-2xl text-ink leading-relaxed">
                17.5%
              </p>
              <p className="text-sm text-muted leading-relaxed">
                increase in premium <br></br> plan upgrades
              </p>
            </div>
            <div className="flex flex-col text-center justify-center items-center">
              <p className="font-ss-mono text-2xl text-ink leading-relaxed">
                15%
              </p>
              <p className="text-sm text-muted leading-relaxed">
                reduction in <br></br>support tickets
              </p>
            </div>
          </div>
          {/* IMPACT */}
          <section className="mb-20">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">Impact</h2>

            <ul className="list-disc list-inside space-y-2 text-muted max-w-3xl">
              <li>
                +32% increase in dashboard engagement (weekly active employers)
              </li>
              <li>
                +18% increase in premium plan upgrades via improved visibility
              </li>
              <li>
                Reduced support tickets related to “plan confusion” by ~15%, and
                reduced overall support calls for job assisstance by 23%
              </li>
              <li>
                Established dashboard as the primary entry point for employer
                workflows
              </li>
            </ul>
          </section>

          {/* PROBLEM */}
          <section className="mb-20">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">Problem Framing</h2>

            <p className="text-muted max-w-3xl leading-relaxed">
              Employers lacked visibility into hiring performance, plan usage,
              and next steps. Critical information was fragmented across
              multiple pages, forcing users to manually piece together insights.
            </p>

            <p className="text-muted max-w-3xl mt-4 leading-relaxed">
              The core challenge was not just designing a dashboard — but
              building a system that translates raw recruitment data into clear,
              actionable decisions under time pressure.
            </p>
          </section>

          {/* PROCESS */}
          <section className="mb-20">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
              Discovery & System Thinking
            </h2>

            <p className="text-muted max-w-3xl mb-6 leading-relaxed">
              I combined qualitative research, behavioral analytics, and
              stakeholder alignment to understand both user needs and business
              constraints.
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted max-w-3xl">
              <li>Conducted 6 in-depth employer interviews</li>
              <li>Analyzed NPS feedback and churn signals</li>
              <li>
                Reviewed Hotjar session recordings to identify friction patterns
              </li>
              <li>Worked with data team to map hiring funnel metrics</li>
              <li>
                Aligned with sales & CS on monetization and upsell triggers
              </li>
            </ul>

            <div
              className="project-media mt-8 p-6 sm:p-10"
              style={{ background: "var(--color-paper)" }}
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/wuzzuf-1.jpg"
                  alt="Insights"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* ARCHITECTURE */}
          <section className="mb-20">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
              Information Architecture
            </h2>

            <p className="text-muted max-w-3xl leading-relaxed">
              I restructured the dashboard into three core layers:
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2 text-muted max-w-3xl">
              <li>
                <strong>Performance Layer:</strong> Hiring funnel and job
                metrics
              </li>
              <li>
                <strong>Business Layer:</strong> Plan usage and monetization
                signals
              </li>
              <li>
                <strong>Activity Layer:</strong> Team actions and system
                feedback
              </li>
            </ul>

            <p className="text-muted mt-4 max-w-3xl">
              This structure mirrors how users think: “What’s happening → What
              should I do → What’s my status?”
            </p>
          </section>

          {/* SOLUTION */}
          <section className="mb-20">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">Solution Design</h2>

            <h3 className="font-display text-lg text-ink mb-3">
              1. Hiring Funnel Intelligence
            </h3>
            <p className="text-muted mb-6 max-w-3xl">
              Designed a visual funnel system that surfaces key conversion
              metrics (applied → viewed → shortlisted → hired), enabling fast
              performance evaluation.
            </p>

            <div
              className="project-media mb-10 p-6 sm:p-10"
              style={{ background: "var(--color-paper)" }}
            >
              <div className="relative aspect-[1/0.5]">
                <Image
                  src="/wuzzuf-2.jpg"
                  alt="Funnel"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h3 className="font-display text-lg text-ink mb-3">2. Job-Level Decision Layer</h3>
            <p className="text-muted mb-6 max-w-3xl">
              Built a job-level breakdown with actionable signals, helping
              employers prioritize which jobs need intervention.
            </p>

            <div
              className="project-media mb-10 p-6 sm:p-10"
              style={{ background: "var(--color-paper)" }}
            >
              <div className="relative aspect-[1/0.4]">
                <Image
                  src="/wuzzuf-3.jpg"
                  alt="Jobs"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h3 className="font-display text-lg text-ink mb-3">
              3. Plan & Monetization System
            </h3>
            <p className="text-muted mb-6 max-w-3xl">
              Introduced clear visibility into credits, expiration, and upgrade
              paths, aligning user needs with business revenue goals.
            </p>

            <div
              className="project-media mb-10 p-6 sm:p-10"
              style={{ background: "var(--color-paper)" }}
            >
              <div className="relative aspect-[1/0.5]">
                <Image
                  src="/wuzzuf-4.jpg"
                  alt="Plan"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h3 className="font-display text-lg text-ink mb-3">4. Activity Stream</h3>
            <p className="text-muted mb-6 max-w-3xl">
              Designed a real-time activity feed to provide system feedback and
              team visibility, reinforcing engagement and trust.
            </p>

            <div
              className="project-media p-6 sm:p-10"
              style={{ background: "var(--color-paper)" }}
            >
              <div className="relative aspect-[1/0.5]">
                <Image
                  src="/wuzzuf-5.jpg"
                  alt="Activity"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* ENGINEERING */}
          <section className="mb-20">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
              Frontend & Engineering Considerations
            </h2>

            <p className="text-muted max-w-3xl leading-relaxed">
              While primarily responsible for design, I worked closely with
              frontend engineers and contributed to implementation decisions to
              ensure scalability and performance.
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2 text-muted max-w-3xl">
              <li>Designed modular dashboard components for reuse</li>
              <li>Ensured responsive behavior across screen sizes</li>
              <li>Reduced cognitive load through progressive disclosure</li>
            </ul>
          </section>

          {/* TESTING */}
          <section className="mb-20">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">Validation</h2>

            <p className="text-muted max-w-3xl mb-6">
              Validated through internal reviews and employer usability sessions
              focusing on comprehension and decision clarity.
            </p>

            <div
              className="project-media p-6 sm:p-10"
              style={{ background: "var(--color-paper)" }}
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/wuzzuf-6.jpg"
                  alt="Testing"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* OUTCOME */}
          <section>
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
              Outcome & Reflection
            </h2>

            <p className="text-muted max-w-3xl mb-6 leading-relaxed">
              This project shifted the dashboard from a passive reporting tool
              into an active decision-making system. It reinforced my approach
              to product design: structure data into meaning, reduce cognitive
              load, and align user value with business impact.
            </p>

            <div
              className="project-media p-6 sm:p-10"
              style={{ background: "var(--color-paper)" }}
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/wuzzuf-7.jpg"
                  alt="Final"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
    </div>
  );
}

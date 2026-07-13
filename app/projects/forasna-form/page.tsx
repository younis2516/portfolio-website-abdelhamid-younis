"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import { useSectionRegistration } from "@/hooks/useSectionRegistration";
import { ProjectHighlighter } from "@/components/ProjectHighlighter";
import TracedLine from "@/components/motion/TracedLine";

export default function ForasnaCaseStudy() {
  const overviewRef = useSectionRegistration("overview", "Overview");
  const challengeRef = useSectionRegistration("challenge", "Challenge");
  const processRef = useSectionRegistration("process", "Discovery & Research");
  const designRef = useSectionRegistration("design-decisions", "Design Decisions");
  const outcomesRef = useSectionRegistration("outcomes", "Outcomes");

  return (
    <div className="ss-page project-page">
      <main className="flex flex-col items-center pb-16">
        {/* HERO */}
        {/* <div className="relative w-full overflow-hidden bg-neutral-100 -mt-28 sm:-mt-36">
          <img
            src="/forasna-banner.png"
            alt="Forasna banner"
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
        </div> */}

        {/* CONTENT */}
        <div className="w-full max-w-[73rem] pt-16 px-4 z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-10 text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent font-ss-mono text-xs uppercase tracking-widest"
          >
            <FiArrowLeft className="w-3 h-3" /> Back to portfolio
          </Link>

          <ProjectHighlighter />
          <div className="project-media p-6 sm:p-10 mb-16" style={{ background: "radial-gradient(120% 120% at 50% 20%, #F5CBC5 0%, transparent 70%)" }}>
            <img
              src="/forasna-banner.png"
              alt="Forasna banner"
              className="w-full object-contain"
            />
          </div>

          <div className="border border-hairline p-8">
            {/* HEADER */}
            <header id="overview" ref={overviewRef as React.Ref<HTMLElement>} className="mb-16">
              <h1 className="font-display text-3xl text-ink mb-6">
                Forasna — Increasing Job Post Completion & Application Volume
              </h1>

              <p className="text-muted max-w-3xl">
                At Wuzzuf, I worked on Forasna — Egypt’s largest blue-collar
                hiring platform — where employers struggled to complete job
                postings, directly impacting revenue and job supply.
              </p>

              <p className="text-muted max-w-3xl mt-4">
                Employers paid per job post. Every form abandonment was a lost
                transaction — at a 27% drop-off rate, a significant share of
                posting revenue never reached confirmation.
              </p>

              <div className="mt-6 space-y-2 text-muted">
                <p>
                  <strong className="text-ink">Role:</strong> Product Designer
                </p>
                <p>
                  <strong className="text-ink">Scope:</strong> Research, UX strategy, end-to-end
                  redesign
                </p>
                <p>
                  <strong className="text-ink">Duration:</strong> 4 weeks
                </p>
                <p>
                  <strong className="text-ink">Users:</strong> 2M+ job seekers, 12K companies
                </p>
              </div>
            </header>

            {/* IMPACT */}
            <section id="outcomes" ref={outcomesRef as React.Ref<HTMLElement>} className="mb-20 border-t border-hairline pt-12">
              <h2 className="font-display text-2xl text-ink mb-6">Impact</h2>

              <div className="mb-6">
                <TracedLine
                  decision="Redesigned the job-posting flow end to end"
                  result="+12% job creation"
                />
              </div>

              <ul className="list-disc list-inside space-y-2 text-muted max-w-3xl">
                <li>
                  <strong className="text-ink">-15% drop</strong> in form exit rate (27% → 12%)
                </li>
                <li>
                  <strong className="text-ink">+70%</strong> of users added structured job benefits
                </li>
                <li>
                  <strong className="text-ink">-65 seconds</strong> average form completion time
                </li>
                <li>
                  Reduced support tickets related to job posting errors
                </li>
              </ul>
            </section>

            {/* PROBLEM */}
            <section id="challenge" ref={challengeRef as React.Ref<HTMLElement>} className="mb-20 border-t border-hairline pt-12">
              <h2 className="font-display text-2xl text-ink mb-6">
                The Challenge — Broken Job Posting Funnel
              </h2>

              <p className="text-muted max-w-3xl mb-6">
                The job posting form was the core revenue driver, yet users were
                abandoning it at a high rate. The problem wasn’t just UI — it was
                unclear structure, poor data quality, and lack of guidance.
              </p>

              <ul className="list-disc list-inside text-muted max-w-3xl space-y-2">
                <li>27% form exit rate</li>
                <li>
                  Users misusing fields (job title, salary, benefits)
                </li>
                <li>
                  Low-quality job posts affecting applicant trust
                </li>
                <li>High dependency on customer support</li>
              </ul>
            </section>

            {/* DISCOVERY */}
            <section id="process" ref={processRef as React.Ref<HTMLElement>} className="mb-20 border-t border-hairline pt-12">
              <h2 className="font-display text-2xl text-ink mb-6">
                Discovery — Understanding Behavior at Scale
              </h2>

              <p className="text-muted max-w-3xl mb-6">
                I combined quantitative and qualitative research to uncover where
                users struggle and why.
              </p>

              <ul className="list-disc list-inside text-muted max-w-3xl space-y-2 mb-10">
                <li>
                  Analyzed funnel drop-offs via Google Analytics
                </li>
                <li>
                  Reviewed session recordings (Inspectlet)
                </li>
                <li>
                  Audited real input data from Tableau
                </li>
                <li>
                  Interviewed employers & customer support team
                </li>
                <li>Benchmarked competing job platforms</li>
              </ul>

              <div className="relative w-full aspect-[5/1]">
                <Image
                  src="/forasna-1.png"
                  alt="discovery insights"
                  fill
                  className="object-contain"
                />
              </div>
            </section>

            {/* KEY PROBLEMS */}
            <section className="mb-20 border-t border-hairline pt-12">
              <h2 className="font-display text-2xl text-ink mb-6">Key UX Problems</h2>

              <ul className="list-disc list-inside text-muted max-w-3xl space-y-2">
                <li>
                  Job title field abused for SEO & marketing
                </li>
                <li>
                  Salary field lacked trust & transparency
                </li>
                <li>
                  {" "}
                  Job Benefits-section ignored due to poor UX
                </li>
                <li>Form length discouraged completion</li>
              </ul>
            </section>

            {/* SOLUTIONS */}
            <section id="design-decisions" ref={designRef as React.Ref<HTMLElement>} className="mb-20 border-t border-hairline pt-12">
              <h2 className="font-display text-2xl text-ink mb-6">Solutions</h2>

              <h3 className="font-display text-lg text-ink mb-2">
                1. Structured Input & Constraints
              </h3>
              <p className="text-muted mb-6 max-w-3xl">
                Introduced character limits and autocomplete for job titles to
                improve data quality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative w-full aspect-[16/9] mb-10">
                  <Image
                    src="/forasna-2.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full aspect-[16/9] mb-10">
                  <Image
                    src="/forasna-eng-1.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="font-display text-lg text-ink mb-2">2. Salary Transparency</h3>
              <p className="text-muted mb-6 max-w-3xl">
                Made salary visible by default and introduced guidance ranges to
                increase trust.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative w-full aspect-[16/9] mb-10">
                  <Image
                    src="/forasna-salary.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full aspect-[16/9] mb-10">
                  <Image
                    src="/forasna-eng-2.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="font-display text-lg text-ink mb-2">3. Structured Benefits</h3>
              <p className="text-muted mb-6 max-w-3xl">
                Replaced free text with selectable options to increase completion
                and consistency.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative w-full aspect-[16/9] mb-10">
                  <Image
                    src="/forasna-benefits.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full aspect-[16/9] mb-10">
                  <Image
                    src="/forasna-eng-3.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="font-display text-lg text-ink mb-2">4. Reduce Cognitive Load</h3>
              <p className="text-muted max-w-3xl">
                Enabled cloning previous jobs and simplified form flow to reduce
                effort.
              </p>
              <div className="grid sm-grid-gols-2">
                <div className="relative w-full aspect-[2/1]">
                  <Image
                    src="/forasna-3.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </section>

            {/* OUTCOME */}
            <section className="border-t border-hairline pt-12">
              <h2 className="font-display text-2xl text-ink mb-6">
                Outcome & Reflection
              </h2>

              <p className="text-muted max-w-3xl">
                This project reinforced that UX problems at scale are rarely just
                UI issues. By combining behavioral data with product thinking, I
                improved both user experience and business performance.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

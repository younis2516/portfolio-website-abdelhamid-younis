"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

export default function ForasnaCaseStudy() {
  return (
    <main className="flex flex-col items-center pb-16">
      {/* HERO */}
      <div className="relative w-full overflow-hidden bg-neutral-100 -mt-28 sm:-mt-36">
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
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-[73rem] -mt-12 px-4 z-10">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border p-8">
          {/* HEADER */}
          <header className="mb-16">
            <h1 className="text-3xl font-bold mb-6">
              Forasna — Increasing Job Post Completion & Application Volume
            </h1>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl">
              At Wuzzuf, I worked on Forasna — Egypt’s largest blue-collar
              hiring platform — where employers struggled to complete job
              postings, directly impacting revenue and job supply.
            </p>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl mt-4">
              Employers paid per job post. Every form abandonment was a lost
              transaction — at a 27% drop-off rate, a significant share of
              posting revenue never reached confirmation.
            </p>

            <div className="mt-6 space-y-2 text-gray-700 dark:text-white/70">
              <p>
                <strong>Role:</strong> Product Designer
              </p>
              <p>
                <strong>Scope:</strong> Research, UX strategy, end-to-end
                redesign
              </p>
              <p>
                <strong>Duration:</strong> 4 weeks
              </p>
              <p>
                <strong>Users:</strong> 2M+ job seekers, 12K companies
              </p>
            </div>
          </header>

          {/* IMPACT */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">Impact</h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70 max-w-3xl">
              <li>
                <strong>+12% increase</strong> in job postings (direct revenue
                impact)
              </li>
              <li>
                <strong>-15% drop</strong> in form exit rate (27% → 12%)
              </li>
              <li>
                <strong>+70%</strong> of users added structured job benefits
              </li>
              <li>
                <strong>-65 seconds</strong> average form completion time
              </li>
              <li>
                Reduced support tickets related to job posting errors
              </li>
            </ul>
          </section>

          {/* PROBLEM */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">
              The Challenge — Broken Job Posting Funnel
            </h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              The job posting form was the core revenue driver, yet users were
              abandoning it at a high rate. The problem wasn’t just UI — it was
              unclear structure, poor data quality, and lack of guidance.
            </p>

            <ul className="list-disc list-inside text-gray-700 dark:text-white/70 max-w-3xl space-y-2">
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
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">
              Discovery — Understanding Behavior at Scale
            </h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl mb-6">
              I combined quantitative and qualitative research to uncover where
              users struggle and why.
            </p>

            <ul className="list-disc list-inside text-gray-700 dark:text-white/70 max-w-3xl space-y-2 mb-10">
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
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">Key UX Problems</h2>

            <ul className="list-disc list-inside text-gray-700 dark:text-white/70 max-w-3xl space-y-2">
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
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">Solutions</h2>

            <h3 className="font-semibold mb-2">
              1. Structured Input & Constraints
            </h3>
            <p className="text-gray-700 dark:text-white/70 mb-6 max-w-3xl">
              Introduced character limits and autocomplete for job titles to
              improve data quality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2">
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

            <h3 className="font-semibold mb-2">2. Salary Transparency</h3>
            <p className="text-gray-700 dark:text-white/70 mb-6 max-w-3xl">
              Made salary visible by default and introduced guidance ranges to
              increase trust.
            </p>
            <div className="grid sm:grid-cols-2">
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

            <h3 className="font-semibold mb-2">3. Structured Benefits</h3>
            <p className="text-gray-700 dark:text-white/70 mb-6 max-w-3xl">
              Replaced free text with selectable options to increase completion
              and consistency.
            </p>
            <div className="grid sm:grid-cols-2">
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

            <h3 className="font-semibold mb-2">4. Reduce Cognitive Load</h3>
            <p className="text-gray-700 dark:text-white/70 max-w-3xl">
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
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Outcome & Reflection
            </h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl">
              This project reinforced that UX problems at scale are rarely just
              UI issues. By combining behavioral data with product thinking, I
              improved both user experience and business performance.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

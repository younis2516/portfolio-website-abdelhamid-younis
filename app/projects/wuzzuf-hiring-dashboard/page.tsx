"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

function ImagePlaceholder({
  label,
  ratio = "aspect-[16/9]",
}: {
  label: string;
  ratio?: string;
}) {
  return (
    <div
      className={`${ratio} w-full rounded-xl border border-dashed grid place-items-center text-sm text-gray-500 dark:text-white/70`}
      aria-label={`${label} (placeholder)`}
      role="img"
    >
      <div className="p-4 text-center">
        <div className="font-medium mb-1">Image placeholder</div>
        <div className="opacity-80">{label}</div>
      </div>
    </div>
  );
}

export default function WuzzufHiringDashboardPage() {
  return (
    <main className="flex flex-col items-center px-0 sm:px-0 pb-16">
      {/* Banner */}
      <div className="relative z-0 w-[100%] mx-auto overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source media="(max-width: 640px)" srcSet="/wuzzuf-banner-mobile.png" />
          <img
            src="/wuzzuf-banner.png"
            alt="Wuzzuf hiring dashboard banner"
            className="w-full h-auto object-contain"
          />
        </picture>
        {/* Back button overlay */}
        <div className="pointer-events-none absolute inset-0 flex justify-center z-10">
          <div className="relative w-full sm:max-w-[73rem] px-4">
            <Link href="/" className="pointer-events-auto absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition dark:bg-gray-900 dark:border-gray-700 dark:text-white/80 dark:hover:bg-gray-800">
              <FiArrowLeft />
              <span>Back to home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content container overlapping banner */}
      <div className="w-full sm:max-w-[73rem] -mt-10 sm:-mt-14 px-4 relative z-10">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">
          {/* Hero */}
          <header className="mb-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12">Wuzzuf — Hiring Dashboard (2019)</h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70"><strong>Company:</strong><br></br> Wuzzuf<br></br><br></br></p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70"><strong>Duration:</strong><br></br> 2 months<br></br><br></br> </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70"><strong>Role:</strong><br></br> UX/UI Designer & Researcher<br></br></p>
          </header>


          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Project Overview</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
              Hiring teams needed a clear overview of funnel performance. Employers wanted
              faster time-to-hire and smarter use of their plan credits. The business targeted
              upselling plan features (CV Unlocks, job boosts) and lower support load by suggesting “next best actions” to hiring managers directly in
              the dashboard. <br></br>
            </p>
          </section>

          {/* Role & Tasks */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Role & Tasks</h2>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
              <li>Designing the hiring dashboard for the B2B product</li>
              <li>Discovery: competitor research; stakeholder interviews</li>
              <li>Analyzing quantitative usage & NPS feedback</li>
              <li>Watching Hotjar recordings of the old dashboard</li>
              <li>Prototyping, internal testing, and usability testing</li>
            </ul>
            
          </section>

          {/* Process */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Process</h2>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Discovery</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Met sales, customer support, and data scientists; reviewed NPS comments and
              competitor dashboards; audited Hotjar recordings for behavioral insights.
            </p>
            <h3 className="text-base sm:text-lg font-semibold mt-8 mb-2">Ideation</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Sketched multiple layouts and validated feasibility with engineering and the PM.
              Early paper sketches informed the first interactive prototype.
            </p>
           
            <h3 className="text-base sm:text-lg font-semibold mt-8 mb-2">Internal & Usability Testing</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Tested internally with Customer Success, then conducted in-house sessions with
              employers to validate comprehension and next-step clarity.
            </p>

            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
             <strong> <br></br> <br></br>User Feedback and Pain Points</strong>
            </p>
            <div className="mb-12 relative w-full aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src="/wuzzuf-1.jpg"
              alt="Hero — Hiring Dashboard overview"
              fill
              className="object-contain rounded-xl"
            />
          </div>

          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
             <strong> <br></br> <br></br>When we asked customers what metrics they wanted to track, this was their answer.</strong>
            </p>

            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
              <li>How many people applied {'->'} interviewed {'->'} shortlisted</li>
              <li>Which job had the most applicants</li>
              <li>How many jobs resulted in hires and how many applicants per job</li>
              <li>How many CVs I unlocked in total and how many CVs I can still unlock</li>
              <li>I want to get suggested candidates and tips to improve or boost the job posting</li>
            </ul>

          </section>

          

          {/* Solutions: Job Performance Widgets */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Solution — Job Performance Widgets</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Introduced a funnel chart and per-job table to show applied, viewed, shortlisted,
              and hired counts, plus period-over-period change. Highlighted suggested candidates
              to reduce support time and prompt decisive hiring actions.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative w-full aspect-[16/9] sm:aspect-[5/4] rounded-xl overflow-hidden">
                <Image
                  src="/wuzzuf-2.jpg"
                  alt="Overall funnel performance (all jobs)"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[16/9] sm:aspect-[5/4] rounded-xl overflow-hidden">
                <Image
                  src="/wuzzuf-3.jpg"
                  alt="Per-job performance table (last 4 jobs)"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              
            </div>
          </section>

          {/* Plan & Consumption */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Solution — Plan & Consumption</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Exposed plan benefits, remaining credits, and expiry; added a quick path to
              upgrade credits so employers can unlock more CVs when activity is high.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden">
                <Image
                  src="/wuzzuf-4.jpg"
                  alt="Plan widget — usage & expiry"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Activity Stream */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Solution — Activity Stream</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              A timeline of team actions to justify value and provide quick access to recent
              work (e.g., unlocked CVs, shortlisted candidates, posted jobs).
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden">
              <Image
                src="/wuzzuf-5.jpg"
                alt="Activity stream — latest team actions"
                fill
                className="object-contain rounded-xl"
              />
            </div>
            </div>
          </section>

          

          {/* User Testing Scenarios */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">User Testing & Scenarios</h2>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
              <li>
                <strong>Scenario 1:</strong> Manager review of last quarter’s acquisition efforts;
                assess job “X” and propose improvements.
              </li>
              <li>
                <strong>Scenario 2:</strong> Hard-to-hire Engineering Manager — what actions would
                you take?
              </li>
              <li>
                <strong>Scenario 3:</strong> After a week’s vacation, see what your team did.
              </li>
            </ul>
            <div className="grid gap-6 sm:grid-cols-1 mt-6">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src="/wuzzuf-6.jpg"
                  alt="Scenario 1 — evaluate job performance"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            
            </div>
          </section>

          {/* Outcomes / Notes */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">User Feedback After Testing</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
              The redesigned dashboard foregrounded funnel visibility, plan usage, and
              next-step actions, aiming to shorten time-to-hire and reduce support load
              by guiding employers to suggested candidates and upgrade paths.
            </p>
            <div className="grid gap-6 sm:grid-cols-1 mt-6">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src="/wuzzuf-7.jpg"
                  alt="Scenario 1 — evaluate job performance"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            
            </div>
          </section>

         
        </div>
      </div>
    </main>
  );
}



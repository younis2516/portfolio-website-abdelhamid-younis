// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { FiArrowLeft } from "react-icons/fi";

// export default function WuzzufHiringDashboardPage() {
//   return (
//     <main className="flex flex-col items-center px-0 sm:px-0 pb-16">
//
//       {/* Content container overlapping banner */}
//       <div className="w-full sm:max-w-[73rem] -mt-10 sm:-mt-14 px-4 relative z-10">
//         <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">

//           {/* Outcomes / Notes */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-3">User Feedback After Testing</h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
//               The redesigned dashboard foregrounded funnel visibility, plan usage, and
//               next-step actions, aiming to shorten time-to-hire and reduce support load
//               by guiding employers to suggested candidates and upgrade paths.
//             </p>
//             <div className="grid gap-6 sm:grid-cols-1 mt-6">
//               <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
//                 <Image
//                   src="/wuzzuf-7.jpg"
//                   alt="Scenario 1 — evaluate job performance"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>

//             </div>
//           </section>

//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

export default function WuzzufHiringDashboardPage() {
  return (
    <main className="flex flex-col items-center pb-16">
      {/* Banner */}
      <div className="relative w-full -z-10 overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source
            media="(max-width:640px)"
            srcSet="/wuzzuf-banner-mobile.png"
          />
          <img
            src="/wuzzuf-banner.png"
            alt="Wuzzuf hiring dashboard banner"
            className="w-full h-auto object-contain"
          />
        </picture>

        <div className="absolute inset-0 flex justify-center">
          <div className="relative w-full sm:max-w-[73rem] px-4">
            <Link
              href="/"
              className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
            >
              <FiArrowLeft />
              Back to home
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[73rem] -mt-10 px-4">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border p-6 sm:p-10">
          {/* HERO */}
          <header className="mb-12">
            <h1 className="text-3xl font-bold mb-6">
              Wuzzuf — Hiring Dashboard (2019)
            </h1>

            <p className="text-gray-700 dark:text-white/70">
              <strong>Company:</strong> Wuzzuf (Dubizzle Labs)
              <br />
              <br />
              <strong>Role:</strong> UX/UI Designer — B2B Growth Squad (Solo
              Designer)
              <br />
              <br />
              <strong>Context:</strong> Wuzzuf is used by 20,000+ employers and
              over 20 million job seekers across the MENA region.
            </p>
          </header>

          {/* OVERVIEW */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
            <p className="text-gray-700 dark:text-white/70">
              Hiring teams lacked visibility into hiring funnel performance and
              plan usage. The goal was to design a dashboard helping employers
              understand hiring progress, reduce time-to-hire, and guide next
              actions while supporting business goals like upselling premium
              features.
            </p>
          </section>

          {/* ROLE */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">My Role</h2>

            <ul className="list-disc list-inside text-gray-700 dark:text-white/70 space-y-2">
              <li className="text-wrap">
                Owned end-to-end UX design for the hiring dashboard
              </li>
              <li className="text-wrap">
                Conducted 6 user interviews with employers
              </li>
              <li className="text-wrap">
                Analyzed NPS feedback and behavioral analytics
              </li>
              <li className="text-wrap">
                Reviewed Hotjar recordings of real usage
              </li>
              <li className="text-wrap">
                Designed prototypes and validated with stakeholders
              </li>
            </ul>
          </section>

          {/* DISCOVERY */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">
              Discovery & Insights
            </h2>

            <p className="mb-6 text-gray-700 dark:text-white/70">
              Employers needed quick answers without digging through multiple
              pages. Interviews revealed a need for clear funnel visualization,
              hiring activity, and plan consumption transparency.
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              I met with sales, customer support, and data scientists; reviewed
              NPS comments and competitor dashboards; audited Hotjar recordings
              for behavioral insights.
            </p>

            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
              <strong>
                {" "}
                <br></br> <br></br>User Feedback and Pain Points
              </strong>
            </p>

            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/wuzzuf-1.jpg"
                alt="User pain points"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* SOLUTION WIDGETS */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">
              Solution — Job Performance Widgets
            </h2>

            <p className="mb-6 text-gray-700 dark:text-white/70">
              Introduced funnel visualization and job-level metrics to help
              employers quickly evaluate performance and decide next steps.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="relative aspect-[1/0.5]">
                <Image
                  src="/wuzzuf-2.jpg"
                  alt="Funnel chart"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative aspect-[1/0.4]">
                <Image
                  src="/wuzzuf-3.jpg"
                  alt="Job table"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* PLAN */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">
              Solution — Plan & Consumption
            </h2>

            <p className="mb-6 text-gray-700 dark:text-white/70">
              Added visibility into credits, expiry, and upgrade actions to
              support both employer needs and business monetization goals.
            </p>

            <div className="relative aspect-[1/0.5] max-w-full">
              <Image
                src="/wuzzuf-4.jpg"
                alt="Plan widget"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* ACTIVITY */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">
              Solution — Activity Stream
            </h2>

            <p className="mb-6 text-gray-700 dark:text-white/70">
              Designed a team activity timeline providing visibility into recent
              actions and reinforcing product value.
            </p>

            <div className="relative aspect-[1/0.5] max-w-full">
              <Image
                src="/wuzzuf-5.jpg"
                alt="Activity stream"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* TESTING */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">User Testing</h2>

            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Tested internally with Customer Success, then conducted in-house
              sessions with employers to validate comprehension and next-step
              clarity.
            </p>

            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
              <li className="text-wrap">
                <strong>Scenario 1:</strong> Manager review of last quarter’s
                acquisition efforts; assess job “X” and propose improvements.
              </li>
              <li className="text-wrap">
                <strong>Scenario 2:</strong> Hard-to-hire Engineering Manager —
                what actions would you take?
              </li>
              <li className="text-wrap">
                <strong>Scenario 3:</strong> After a week’s vacation, see what
                your team did.
              </li>
            </ul>

            <div className="mt-6 relative w-full aspect-[16/9]">
              <Image
                src="/wuzzuf-6.jpg"
                alt="Testing scenarios"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* FINAL OUTCOME */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Outcome</h2>

            <p className="text-gray-700 dark:text-white/70 mb-6">
              The redesigned dashboard improved visibility of hiring funnel
              performance, clarified next actions, and aligned employer success
              with business goals through better plan transparency and guided
              decision making.
            </p>

            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/wuzzuf-7.jpg"
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

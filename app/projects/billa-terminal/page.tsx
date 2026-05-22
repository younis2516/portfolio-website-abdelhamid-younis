// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { FiArrowLeft } from "react-icons/fi";

// export default function BillaTerminalPage() {
//   return (
//     <main className="flex flex-col items-center px-0 sm:px-0 pb-16">
//
//       {/* Content container overlapping lower 20% of banner */}
//       <div className="w-full sm:max-w-[73rem] -mt-10 sm:-mt-14 px-4 relative z-10">
//         <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">

//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import { useSectionRegistration } from "@/hooks/useSectionRegistration";
import { ProjectHighlighter } from "@/components/ProjectHighlighter";

export default function BillaTerminalPage() {
  const overviewRef = useSectionRegistration("overview", "Overview");
  const challengeRef = useSectionRegistration("challenge", "Challenge");
  const processRef = useSectionRegistration("process", "Process & Research");
  const designRef = useSectionRegistration("design-decisions", "Design Decisions");
  const outcomesRef = useSectionRegistration("outcomes", "Outcomes");

  return (
    <main className="flex flex-col items-center pb-16">
      {/* Banner */}
      <div className="relative w-full -z-10 overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/billa-terminal-banner-mobile.png"
          />
          <img
            src="/billa-terminal-banner.png"
            alt="Billa terminal banner"
            className="w-full h-auto object-contain"
          />
        </picture>

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

      <div className="w-full sm:max-w-[73rem] -mt-12 px-4">
        <ProjectHighlighter />
        <div className="bg-white rounded-[40px] shadow-xl border p-6 sm:p-10">
          {/* HERO */}
          <header id="overview" ref={overviewRef as React.Ref<HTMLElement>} className="mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              BILLA Marktküche Self-Service Terminal
            </h1>

            <p className="text-gray-700 max-w-3xl">
              Enterprise self-service ordering system designed for BILLA Market
              Kitchen restaurants. The platform is now live across 60
              supermarkets in Austria, enabling faster ordering, reduced queue
              times, and scalable digital ordering experiences.
            </p>

            <div className="mt-6 space-y-2 text-gray-700">
              <p>
                <strong>Company:</strong> REWE International
              </p>
              <p>
                <strong>Role:</strong> Lead Product Designer (Primary Designer &
                Research Owner)
              </p>
              <p>
                <strong>Ownership:</strong> ~90% design execution, 100% research
              </p>
              <p>
                <strong>Duration:</strong> 4 months
              </p>
            </div>
          </header>

          {/* IMPACT */}
          <section id="outcomes" ref={outcomesRef as React.Ref<HTMLElement>} className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Impact</h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Live rollout across 60+ supermarkets in Austria
              </li>
              <li>
                Reduced ordering friction in high-traffic environments
              </li>
              <li>
                Validated via qualitative and quantitative research
              </li>
              <li>
                Enabled scalable digital ordering infrastructure
              </li>
              <li>
                Improved learnability for first-time kiosk users
              </li>
            </ul>
          </section>

          {/* OVERVIEW */}
          <section id="challenge" ref={challengeRef as React.Ref<HTMLElement>} className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Project Overview
            </h2>

            <p className="text-gray-700 max-w-3xl">
              BILLA Market Kitchen needed a scalable ordering solution for
              restaurant environments with high throughput and diverse customer
              demographics. I led end-to-end UX, from research strategy and
              competitor benchmarking to final interface design and usability
              validation under real-world constraints.
            </p>
          </section>

          {/* PROCESS HERO IMAGE */}
          <div className="relative w-full aspect-[16/6] mb-16 rounded-xl overflow-hidden">
            <Image
              src="/pos-terminal-1.jpg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* RESEARCH */}
          <section id="process" ref={processRef as React.Ref<HTMLElement>} className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Research Strategy & Validation
            </h2>

            <p className="text-gray-700 mb-6 max-w-3xl">
              I owned the full research process, combining stakeholder
              workshops, competitive analysis, moderated usability tests, and a
              large-scale quantitative survey to validate product decisions
              before rollout.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Analysis of 11 competing kiosk systems
              </li>
              <li>Design sprint with 8 stakeholders</li>
              <li>Moderated usability tests</li>
              <li>
                Survey with 390 employees to validate priorities
              </li>
              <li>
                Behavioral insights translated into product decisions
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-base sm:text-lg font-semibold mt-2 mb-2">
              1. Design Briefing
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              In this step, I, the PO, and the UX lead gathered the stakeholders
              to find answers about the goal of the project, target group, which
              features the minimum viable product (MVP) would include, and what
              resources and timeline we were constrained by.
            </p>
            {/* <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-2.jpg"
                  alt="Stakeholder workshop photo"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-3.jpg"
                  alt="Team roles / RACI diagram"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div> */}

            <h3 className="text-base sm:text-lg font-semibold mt-16 mb-2">
              2. Competitor Analysis
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              We analyzed 11 self-service terminals to benchmark flows, scanning
              patterns, and menu structures; insights seeded sprint ideation.
            </p>
            <div className="grid gap-6 sm:grid-cols-1">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-4.jpg"
                  alt="Competitive landscape matrix"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-semibold mt-20 mb-2">
              3. Design Sprint
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              We planned 4 days for the design sprint with 8 stakeholders.
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 mb-2 space-y-1 sm:space-y-2">
              <li>
                Day 1 — Problem framing & success metrics
              </li>
              <li>
                Day 2 — Crazy-8s, voting, journey mapping, low-fi sketch
              </li>
              <li>Day 3 — First prototype in Figma</li>
              <li>
                Day 4 — Usability testing with 5 users
              </li>
            </ul>

            <div className="flex flex-col  sm:grid-cols-1">
              {/* <div className="relative w-full aspect-[16/9] sm:aspect-[3.5/2] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-5.jpg"
                  alt="Crazy-8 sketches"
                  fill
                  className="object-contain rounded-xl"
                />
              </div> */}
              <hr className="border-t border-gray-200 dark:border-gray-800 my-8" />
              <p className="text-sm sm:text-base font-semibold text-gray-700 dark:text-white/70 mt-4">
                User journey
              </p>
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/1.5] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-6.png"
                  alt="Low-fi wireframe"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <hr className="border-t border-gray-200 dark:border-gray-800 my-8" />
              <p className="text-sm sm:text-base font-semibold text-gray-700 dark:text-white/70 mt-4 mb-8">
                Lo-fi sketches
              </p>
              <div className="relative w-full aspect-[16/9] sm:aspect-[3.5/2] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-7.png"
                  alt="Prototype v1 screens"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <hr className="border-t border-gray-200 dark:border-gray-800 my-8" />
              <p className="text-sm sm:text-base font-semibold text-gray-700 dark:text-white/70  mt-8 mb-4">
                First lo-fi prototype in Figma
              </p>
              <div className="relative w-full aspect-[16/9] sm:aspect-[3/1.25] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-10.jpg"
                  alt="Prototype v1 screens"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <hr className="border-t border-gray-200 dark:border-gray-800 my-8" />
              <p className="text-sm sm:text-base font-semibold text-gray-700 dark:text-white/70  mt-8 mb-4">
                Feedback from first usability testing with 5 users
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative w-full aspect-[16/9] sm:aspect-[2/1.25] rounded-xl overflow-hidden">
                  <Image
                    src="/pos-terminal-11.jpg"
                    alt="Prototype v1 screens"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <div className="relative w-full aspect-[16/9] sm:aspect-[2/1.25] rounded-xl overflow-hidden">
                  <Image
                    src="/pos-terminal-12.jpg"
                    alt="Prototype v1 screens"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>
              <hr className="border-t border-gray-200 dark:border-gray-800 my-8" />
              <h3 className="text-base sm:text-lg font-semibold mt-8 mb-2">
                4. Iterating on the prototype
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
                I translated findings into user stories, iterated wireframes,
                and delivered high-fidelity UI per story before a second test
                round. Then I worked on the wireframes and translated them to
                the final design
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative w-full aspect-[16/9] sm:aspect-[16/6] rounded-xl overflow-hidden">
                  <Image
                    src="/pos-terminal-13.jpg"
                    alt="User stories → wireframes"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] rounded-xl overflow-hidden">
                  <Image
                    src="/pos-terminal-14.jpg"
                    alt="High-fidelity UI examples"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative w-full aspect-[3/4] sm:aspect-[2/4] rounded-xl overflow-hidden">
                  <Image
                    src="/pos-terminal-15.jpg"
                    alt="User stories → wireframes"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <div className="relative w-full aspect-[3/4] sm:aspect-[2/4] rounded-xl overflow-hidden">
                  <Image
                    src="/pos-terminal-16.png"
                    alt="User stories → wireframes"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>
              <hr className="border-t border-gray-200 dark:border-gray-800 my-8" />

              <h3 className="text-base sm:text-lg font-semibold mt-8 mb-2">
                5. Final User Testing
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
                We planned and ran interviews with 5 internal participants ages
                35–55, using a 27” touch frame, a mock scanner, and recorded
                sessions. Scenarios covered ordering a meal, redeeming a coffee
                voucher, and adding a convenience product.
              </p>

              <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    ✅ What Worked
                  </h3>
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
                    <li>Scanning customer cards from the start page</li>
                    <li>Clear product overview with large images</li>
                    <li>Smooth navigation between menu and cart</li>
                    <li>
                      All users could search, add to cart, and pay by card
                    </li>
                  </ul>
                  <h3 className="text-base sm:text-lg font-semibold mt-4 mb-2">
                    💡 Improvements
                  </h3>
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
                    <li>Make the “scan customer card” affordance clearer</li>
                    <li>Add visual/haptic feedback after scanning</li>
                    <li>Show dish origin & ingredient details</li>
                    <li>Clarify loyalty points and payment options</li>
                  </ul>
                </div>
                <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden">
                  <Image
                    src="/pos-terminal-19.jpg"
                    alt='27" touch frame setup'
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* DESIGN SOLUTION */}
          <section id="design-decisions" ref={designRef as React.Ref<HTMLElement>} className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Design Solution
            </h2>

            <p className="text-gray-700 max-w-3xl mb-6">
              Designed a streamlined ordering flow optimized for speed, clarity,
              and accessibility in busy supermarket environments. Decisions
              balanced business requirements, physical hardware constraints, and
              user mental models.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-15.jpg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-16.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* Quantitative Research */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              Quantitative Survey
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              We surveyed 390 internal employees (from ~2000) to validate menu
              prioritization and payment preferences before handover. We also
              asked them what they liked and disliked from their past
              experiences with other order terminals.
            </p>
            <div className="grid gap-6 sm:grid-cols-3 mt-6">
              <div className="flex flex-col gap-4 relative w-full aspect-[1/1] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-20.png"
                  alt="Terminal placement — in-store photo"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-4 relative w-full aspect-[1/1] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-21.jpg"
                  alt="Receipt pickup reminder UI"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-4 relative w-full aspect-[1/1] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-22.jpg"
                  alt="Customer card prompt UI"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
            <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden mt-6">
              <Image
                src="/pos-terminal-23.jpg"
                alt="Customer card prompt UI"
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </section>

          {/* FINAL UI */}
          <section className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Final Interface
            </h2>

            <div className="grid gap-6">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-17.jpg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src="/pos-terminal-18.jpg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* OUTCOME */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Outcome & Reflection
            </h2>

            <p className="text-gray-700 max-w-3xl">
              The terminal is now live across Austria and demonstrates how
              research-driven design can improve both customer experience and
              operational efficiency. Leading this project strengthened my
              approach to enterprise design: balancing business complexity,
              technical constraints, and user needs to create scalable systems.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

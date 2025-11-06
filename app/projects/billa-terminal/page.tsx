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

export default function BillaTerminalPage() {
  return (
    <main className="flex flex-col items-center px-0 sm:px-0 pb-16">
      {/* Banner */}
      <div className="relative z-0 w-[100%] mx-auto overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source media="(max-width: 640px)" srcSet="/billa-terminal-banner-mobile.png" />
          <img
            src="/billa-terminal-banner.png"
            alt="Billa terminal banner"
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

      {/* Content container overlapping lower 20% of banner */}
      <div className="w-full sm:max-w-[73rem] -mt-10 sm:-mt-14 px-4 relative z-10">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">
        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12">
            Billa Self-Service Terminal (2022–2023)
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-2"><strong>Client:</strong> <br/> REWE Group</p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-2"><strong>Duration:</strong> <br/> 4 months</p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-2"><strong>Role:</strong> <br/> UX/UI Designer & Researcher</p>
        </header>
          {/* Overview */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Project Overview</h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
            Billa Market Kitchen wanted to offer a self-checkout experience in
            restaurants across Austria. I led UX and UI from stakeholder alignment
            through competitor analysis, a 4-day design sprint, prototyping, and
            multiple test rounds, delivering high-fidelity designs for handover.
          </p>
        </section>

          {/* Team & Tasks */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Team & Responsibilities</h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
            <li>
              Product Designer (me): competitor analysis, wireframes, UI, prototyping,
              testing, and co-organizing workshops
            </li>
            <li>UX Lead: design sprint facilitation, stakeholder workshops, user stories</li>
            <li>Product Owner: deliverables, user stories, agency coordination</li>
            <li>Design System Lead: UI consulting</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">Process</h2>
          <div className="mb-12 relative w-full aspect-[16/9] sm:aspect-[16/4] rounded-xl overflow-hidden">
          <Image
            src="/pos-terminal-1.jpg"
            alt="Hero — terminal UI composite or in-store photo"
            fill
            className="object-contain rounded-xl"
          />
        </div>
        </section>

        <section className="mb-12">
          <h3 className="text-base sm:text-lg font-semibold mt-2 mb-2">1.Design Briefing</h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
          In this step me, the PO & the UX lead gathered the stakeholders to find answers about, goal of the project, target group, which features would the minimum acceptable go to market product include and which resources and timeline we’re constrained by. 
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
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
          </div>

          <h3 className="text-base sm:text-lg font-semibold mt-8 mb-2">2.Competitor Analysis</h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            We analyzed 11 self-service terminals to benchmark flows, scanning patterns,
            and menu structures; insights seeded sprint ideation.
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

          <h3 className="text-base sm:text-lg font-semibold mt-8 mb-2">3.Design Sprint (4 days)</h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
          We planned 4 days for the design sprint with 8 stakeholders. 
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4 space-y-1 sm:space-y-2">
            <li>Day 1 — Problem framing & success metrics</li>
            <li>Day 2 — Crazy-8s, voting, journey mapping, low-fi sketch</li>
            <li>Day 3 — First prototype in Figma</li>
            <li>Day 4 — Usability testing with 5 users</li>
          </ul>
          <h3 className="text-lg font-semibold mt-8 mb-4 text-gray-200">____</h3>
          <div className="grid gap-6 sm:grid-cols-1">
          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
          Day 1 — Problem framing & success metrics
          </p>
            <div className="relative w-full aspect-[16/9] sm:aspect-[3.5/2] rounded-xl overflow-hidden">
              <Image
                src="/pos-terminal-5.jpg"
                alt="Crazy-8 sketches"
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <h3 className="text-lg font-semibold mt-8 mb-4 text-gray-200">____</h3>

            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
            Day 2 — Crazy-8s, voting, journey mapping, low-fi sketch
          </p>
            <div className="relative w-full aspect-[16/9] sm:aspect-[4/1.5] rounded-xl overflow-hidden">
              <Image
                src="/pos-terminal-6.jpg"
                alt="Low-fi wireframe"
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <div className="relative w-full aspect-[16/9] sm:aspect-[3.5/2] rounded-xl overflow-hidden">
              <Image
                src="/pos-terminal-7.jpg"
                alt="Prototype v1 screens"
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <h3 className="text-lg font-semibold mt-8 mb-4 text-gray-200">____</h3>

            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
            Day 3 — First prototype in Figma
          </p>
          <div className="relative w-full aspect-[16/9] sm:aspect-[3/1.25] rounded-xl overflow-hidden">
              <Image
                src="/pos-terminal-10.jpg"
                alt="Prototype v1 screens"
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <h3 className="text-lg font-semibold mt-8 mb-4 text-gray-200">____</h3>

            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
            Day 4 — Usability testing with 5 users
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
            <h3 className="text-lg font-semibold mt-8 mb-4 text-gray-200">____</h3>

            <h3 className="text-base sm:text-lg font-semibold mt-8 mb-2">
            What went well
          </h3>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4 space-y-1 sm:space-y-2">
            <li>People found it good with the nutrion circular labels and the info button</li>
            <li>People knew how to scan a customer card and edit the cart </li>
            <li>Users liked the allergy details and noticed the combo benefits and liked that all products are displayed with large images </li>
            <li>most users managed to make an order </li>
          </ul>


          </div>

          <h3 className="text-base sm:text-lg font-semibold mt-8 mb-2">4.Iterating on the prototype
          </h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            We translated findings into user stories, iterated wireframes, and delivered
            high-fidelity UI per story before a second test round.
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
           User stories
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
          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mt-8 mb-4">
           Then i worked on the wireframes and translated the wireframes to final design
          </p>
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
          <h3 className="text-base sm:text-lg font-semibold mt-8 mb-2"> Final Design
          </h3>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-1">
            <div className="relative w-full aspect-[16/9] sm:aspect-[1/0.6] rounded-xl overflow-hidden">
              <Image
                src="/pos-terminal-17.jpg"
                alt="User stories → wireframes"
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <div className="relative w-full aspect-[16/9] sm:aspect-[1/0.6] rounded-xl overflow-hidden">
              <Image
                src="/pos-terminal-18.jpg"
                alt="User stories → wireframes"
                fill
                className="object-contain rounded-xl"
              />
            </div>
  
          </div>
        </section>

          {/* User Testing */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">User Testing</h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            We planned and ran interviews with 5 internal participants (ages 35–55),
            using a 27” touch frame, a mock scanner, and recorded sessions. Scenarios
            covered ordering a meal, redeeming a coffee voucher, and adding a
            convenience product.
          </p>
          <div className="grid gap-6 sm:grid-cols-1 mb-6">
            <div className="relative w-full aspect-[16/9] sm:aspect-[1/0.5] rounded-xl overflow-hidden">
              <Image
                src="/pos-terminal-19.jpg"
                alt='27" touch frame setup'
                fill
                className="object-contain rounded-xl"
              />
            </div>
            
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">✅ What Worked</h3>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
                <li>Scanning customer cards from the start page</li>
                <li>Clear product overview with large images</li>
                <li>Smooth navigation between menu and cart</li>
                <li>All users could search, add to cart, and pay by card</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">💡 Improvements</h3>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
                <li>Make the “scan customer card” affordance clearer</li>
                <li>Add visual/haptic feedback after scanning</li>
                <li>Show dish origin & ingredient details</li>
                <li>Clarify loyalty points and payment options</li>
              </ul>
            </div>
          </div>
        </section>

          {/* Quantitative Research */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Quantitative Survey</h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            We surveyed 390 internal employees (from ~2000) to validate menu
            prioritization and payment preferences before handover.
          </p>
          <div className="grid gap-6 sm:grid-cols-3 mt-6">
            <div className="flex flex-col gap-4 relative w-full aspect-[16/9] sm:aspect-[4/4] rounded-xl overflow-hidden">
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-2 sm:mb-4">Which menu categories we should show first?</p>
              <Image
                src="/pos-terminal-20.jpg"
                alt="Terminal placement — in-store photo"
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-4 relative w-full aspect-[16/9] sm:aspect-[3/4] rounded-xl overflow-hidden">
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-2 sm:mb-4">Which dish infomration customers care about </p>
              <Image
                src="/pos-terminal-21.jpg"
                alt="Receipt pickup reminder UI"
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-4 relative w-full aspect-[16/9] sm:aspect-[4/4] rounded-xl overflow-hidden">
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-2 sm:mb-4">Which payment methods customers like to use the most?</p>
              <Image
                src="/pos-terminal-22.jpg"
                alt="Customer card prompt UI"
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </div>
          <div className="relative w-full aspect-[16/9] sm:aspect-[1/0.8] rounded-xl overflow-hidden mt-6">
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-2 sm:mb-4">What should we avoid from other order terminals? </p>
              <Image
                src="/pos-terminal-23.jpg"
                alt="Customer card prompt UI"
                fill
                className="object-contain rounded-xl"
              />
            </div>
        </section>

          {/* Lessons Learned */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Lessons we learned</h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
            <li>Less is more — focus on top-selling dishes</li>
            <li>Prompt users early to scan customer cards</li>
            <li>Place terminals visibly with free space for comfort</li>
            <li>Cash should be the second payment option after card</li>
            <li>Update menu daily; emphasize freshness and local sourcing</li>
            <li>Users often ignore the top of the screen — design accordingly</li>
          </ul>
        </section>
        </div>
      </div>
    </main>
  );
}



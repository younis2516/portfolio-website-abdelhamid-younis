"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

export default function GroceryBot2020Page() {
  return (
    <main className="flex flex-col items-center pb-16">
      {/* Banner */}
      <div className="relative w-full overflow-hidden -z-10 bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source media="(max-width: 640px)" srcSet="/hci-banner-mobile.png" />
          <img
            src="/hci-banner.png"
            alt="HCI grocery bot banner"
            className="w-full h-auto object-contain"
          />
        </picture>

        {/* Back button overlay */}
        <div className="pointer-events-none absolute inset-0 flex justify-center z-10">
          <div className="relative w-full sm:max-w-[73rem] px-4">
            <Link
              href="/"
              className="pointer-events-auto absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition dark:bg-gray-900 dark:border-gray-700 dark:text-white/80 dark:hover:bg-gray-800"
            >
              <FiArrowLeft />
              <span>Back</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full sm:max-w-[73rem] -mt-12 px-4">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">
          {/* HERO */}
          <header className="mb-12">
            <h1 className="text-3xl font-bold mb-6">
              Conversational Grocery Assistant — Research-led Concept
              Exploration
            </h1>

            <p className="text-gray-700 dark:text-white/70 leading-relaxed">
              Master's project (6 ECTS) during my Human Computer Interaction
              studies at University of Salzburg. Built during COVID lockdown to
              explore how conversational interfaces could simplify grocery
              shopping for rural users.
            </p>

            <p className="mt-6 text-sm text-gray-600 dark:text-white/60">
              🏆 Salzburg Startup Weekend — 1st place prototype · 2nd place
              pitch
            </p>
          </header>

          {/* OVERVIEW */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Problem Context</h2>

            <p className="text-gray-700 dark:text-white/70 leading-relaxed">
              Problem During COVID, rural Salzburg users avoided supermarkets.
              Existing online grocery flows were complex and slow. <br></br>
              <br></br>
              <strong>Key insight:</strong> <br /> Users already coordinated
              shopping via WhatsApp.
              <br />
              <strong>Decision:</strong> <br /> Instead of building a new
              shopping interface, we explored conversational UX to reduce
              cognitive load.<br></br>
              <strong>Tradeoffs:</strong> <br />
              ❌ VR supermarket exploration (high complexity) <br />❌ community
              runner model (logistical challenges)
              <br></br>✅ conversational assistant aligned with real behaviour.
              <br></br>
              <strong>Outcome:</strong> <br /> Prototype validated internally.
              <br></br>
              <strong>Later industry validation:</strong>
              <br /> WhatsApp commerce rollout (Meta 2022).
            </p>

            <p className="mt-4 text-gray-700 dark:text-white/70">
              Core research question:
              <br></br>
              <strong>
                {" "}
                How could technology help rural households shop safely with
                minimal friction?
              </strong>
            </p>
          </section>

          {/* RESEARCH */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Step 1 — User Research
            </h2>

            <p className="text-gray-700 dark:text-white/70 mb-6">
              Conducted qualitative interviews with 6 participants recruited
              from rural areas around Salzburg. Focused on shopping behaviour,
              barriers to online grocery usage, and decision-making workflows.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative w-full aspect-[5/4]">
                <Image
                  src="/hci-1.jpg"
                  alt="Research board"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>

              <div className="relative w-full aspect-[5/4]">
                <Image
                  src="/hci-2.jpg"
                  alt="Needs mapping"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-10 mt-10">
              <div>
                <h3 className="font-semibold mb-2">Key Insights</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70">
                  <li>
                    Online grocery flows felt complex and overwhelming
                  </li>
                  <li>
                    Users wanted "just send a list and done" simplicity
                  </li>
                  <li>
                    Trust in substitutions and produce quality was low
                  </li>
                  <li>
                    Safety concerns during pandemic influenced behaviour
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">User Needs</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70">
                  <li>
                    Conversational interface similar to messaging apps
                  </li>
                  <li>Clear price transparency</li>
                  <li>Flexible delivery windows</li>
                  <li>Ability to approve substitutes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* IDEATION */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Step 2 — Ideation</h2>

            <p className="text-gray-700 dark:text-white/70 mb-6">
              Generated multiple concepts and evaluated feasibility, usability
              and technical constraints.
            </p>

            <div className="grid gap-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <p className="text-gray-700 dark:text-white/70">
                  <strong>Idea 1:</strong> Local neighbour delivery app within
                  1km radius.
                </p>
                <Image
                  src="/hci-3.jpg"
                  alt="Idea sketches"
                  width={600}
                  height={400}
                  className="rounded-xl object-contain"
                />
                <Image
                  src="/hci-4.jpg"
                  alt="Idea sketches"
                  width={600}
                  height={400}
                  className="rounded-xl object-contain"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <p className="text-gray-700 dark:text-white/70">
                  <strong>Idea 2:</strong> VR supermarket experience (rejected
                  due to complexity).
                </p>
                <Image
                  src="/hci-5.jpg"
                  alt="VR concept"
                  width={600}
                  height={400}
                  className="rounded-xl object-contain"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <p className="text-gray-700 dark:text-white/70">
                  <strong>Final concept:</strong> Conversational shopping
                  assistant similar to WhatsApp.
                </p>
                <Image
                  src="/hci-6.jpg"
                  alt="Sketches"
                  width={600}
                  height={400}
                  className="rounded-xl object-contain"
                />
                <Image
                  src="/hci-7.jpg"
                  alt="Sketches"
                  width={600}
                  height={400}
                  className="rounded-xl object-contain"
                />
                <Image
                  src="/hci-8.jpg"
                  alt="Sketches"
                  width={600}
                  height={400}
                  className="rounded-xl object-contain"
                />
              </div>
            </div>
          </section>

          {/* DESIGN */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Step 3 — UI Design & Prototyping
            </h2>

            <p className="text-gray-700 dark:text-white/70 mb-6">
              Designed a conversational flow: upload list → confirm quantities →
              accept substitutes → choose provider → select delivery window →
              payment.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {["9", "10", "11", "12", "13", "14", "15", "16", "17"].map(
                (img) => (
                  <div key={img} className="relative w-full aspect-[4/9]">
                    <Image
                      src={`/hci-${img}.jpg`}
                      alt="UI screen"
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                ),
              )}
            </div>
          </section>

          {/* RESULTS */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Results & Reflection
            </h2>

            <p className="text-gray-700 dark:text-white/70 leading-relaxed">
              The prototype won <strong>1st place prototype</strong> and{" "}
              <strong>2nd place pitch</strong>
              at Salzburg Startup Weekend.
            </p>

            <p className="mt-4 text-gray-700 dark:text-white/70">
              Judges suggested focusing on one supermarket instead of
              aggregating multiple providers due to data integration complexity
              — feedback that shaped future thinking.
            </p>
          </section>

          {/* RESULTS */}
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              What I would do differently today
            </h2>

            <p className="text-gray-700 dark:text-white/70 leading-relaxed">
              If revisiting this today:
              <br></br> - Narrow scope to one retailer earlier.
              <br></br>- Validate with real delivery constraints sooner.
              <br></br>- Test conversational friction vs traditional checkout
              flows.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

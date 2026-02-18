// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { FiArrowLeft } from "react-icons/fi";

// function ImagePlaceholder({
//   label,
//   ratio = "aspect-[16/9]",
// }: {
//   label: string;
//   ratio?: string;
// }) {
//   return (
//     <div
//       className={`${ratio} w-full rounded-xl border border-dashed grid place-items-center text-sm text-gray-500 dark:text-white/70`}
//       aria-label={`${label} (placeholder)`}
//       role="img"
//     >
//       <div className="p-4 text-center">
//         <div className="font-medium mb-1">Image placeholder</div>
//         <div className="opacity-80">{label}</div>
//       </div>
//     </div>
//   );
// }

// export default function BillaSelfCheckoutPage() {
//   return (
//     <main className="flex flex-col items-center px-0 pb-16">
//
//       {/* Content */}
//       <div className="w-full sm:max-w-[73rem] -mt-10 sm:-mt-14 px-4 relative z-10">
//         <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">

//

//
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

export default function BillaSelfCheckoutPage() {
  return (
    <main className="flex flex-col items-center px-0 pb-16">
      {/* Banner */}
      <div className="relative z-0 w-full mx-auto overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source media="(max-width: 640px)" srcSet="/rewe-hero.png" />
          <img
            src="/rewe-hero.png"
            alt="BILLA Self Checkout banner"
            className="w-full h-auto object-contain"
          />
        </picture>

        <div className="pointer-events-none absolute inset-0 flex justify-center z-10">
          <div className="relative w-full sm:max-w-[73rem] px-4">
            <Link
              href="/"
              className="pointer-events-auto absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 transition dark:bg-gray-900 dark:border-gray-700 dark:text-white/80 dark:hover:bg-gray-800"
            >
              <FiArrowLeft />
              <span>Back</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full sm:max-w-[73rem] -mt-10 sm:-mt-14 px-4 relative z-10">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">
          {/* HERO */}
          <header className="mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              REWE Group — BILLA Self-Checkout Platform Redesign
            </h1>

            <p className="text-gray-700 dark:text-white/70 leading-relaxed">
              Enterprise-scale redesign of a nationwide self-service checkout
              platform used daily by millions of customers across Austria.
              Designed as a scalable multi-brand system supporting REWE Group
              retail operations.
            </p>

            <div className="mt-6 space-y-2 text-gray-700 dark:text-white/70">
              <p>
                <strong>Company:</strong> REWE International
              </p>
              <p>
                <strong>Role:</strong> Senior UX/UI Designer (Solo Designer)
              </p>
              <p>
                <strong>Scope:</strong> End-to-end UX, UI, motion design,
                research, usability testing, system design
              </p>
            </div>
          </header>

          {/* IMPACT */}
          <section className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Impact at Scale
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70">
              <li>Live across all BILLA Austria stores with self-checkout</li>
              <li>Used daily by millions of real customers</li>
              <li>10–15 seconds faster average transaction time</li>
              <li>Reduced staff intervention and improved learnability</li>
              <li>
                Estimated operational efficiency improvement worth millions
                annually at scale
              </li>
            </ul>
          </section>

          {/* OVERVIEW */}
          <section className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Problem Overview
            </h2>

            <p className="text-gray-700 dark:text-white/70 leading-relaxed">
              Legacy checkout interfaces from multiple vendors created
              inconsistent UX, slower transactions, and increased operational
              friction. I redesigned the entire interaction layer to create a
              unified, scalable white-label platform optimized for speed,
              clarity, and real-world retail environments.
            </p>

            <ul className="list-disc list-inside text-sm mt-2 sm:text-base text-gray-700 dark:text-white/70 space-y-2">
              <li>Frequent staff intervention</li>
              <li>Unclear cart state</li>
              <li>Complex search experience</li>
              <li>Old inconsistent UI from different providers</li>
              <li>Hard to use for first-time users</li>{" "}
            </ul>

            <div className="grid gap-6 sm:grid-cols-3 mt-8">
              {["/rewe-1.png", "/rewe-2.png", "/rewe-3.png"].map((src, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-[4/3] rounded-xl overflow-hidden"
                >
                  <Image
                    src={src}
                    alt="Old UI"
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </section>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Project timeline:
          </h2>
          <br />
          <div className="grid gap-6 sm:grid-cols-1">
            <div className="relative w-full aspect-[3/1.5] rounded-xl overflow-hidden">
              <Image
                src="/rewe-4.png"
                alt="Old UI"
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </div>

          {/* RESEARCH */}
          <section className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Research & Discovery
            </h2>

            <p className="text-gray-700 dark:text-white/70 mb-6">
              As the solo designer, I conducted 80+ usability tests across
              different countries and user groups. Combined competitor analysis
              of 20+ European systems, stakeholder workshops, and in-store
              observations.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70">
                <li>Cart visibility is critical to user confidence</li>
                <li>Hardware guidance reduces errors</li>
                <li>Payment stage should dominate visual hierarchy</li>
                <li>Delayed staff intervention improves autonomy</li>
                <li>Animations guide interaction intuitively</li>
              </ul>

              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/rewe-5.png"
                  alt="Research"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* Research */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              User pains
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              I interviewed over 80 users and these are the biggest user pains
              with current self checkout, not just in Billa but in general.
            </p>

            <div className="grid gap-6 sm:grid-cols-1">
              <div className="relative w-full aspect-[8/3] sm:aspect-[8/3] rounded-xl overflow-hidden">
                <Image
                  src="/rewe-6.png"
                  alt="Old UI"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </section>
          {/* DESIGN */}
          <section className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              First Design Iteration
            </h2>

            <p className="text-gray-700 dark:text-white/70 mb-6">
              {" "}
              I made a first design for the full self-checkout flow and we
              tested it internally with supermarket staff, help desk, and other
              internal teams fro. different age groups.
            </p>

            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mt-4 mb-2">
              <strong>User feedback :</strong>
              <br />
            </p>
            <ul className="list-disc list-none list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-2 mb-8">
              <li>✅ Better cart visibility</li>
              <li>✅ Clear way to remove items</li>
              <li>✅ Less cluttered payment page and good contrast</li>
              <li>✅ Delayed staff interventions until payment</li>
              <li>💡 Users want to type, when they open the picklist</li>
              <li>💡 Business wanted to display ADs on the start screen</li>
              <li>💡 Users want to see the cart summary before they pay</li>
              <li>
                💡 Users want to see available loyaloty points to redeemn in
                checkout
              </li>
            </ul>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Design Solution
            </h2>

            <p className="text-gray-700 dark:text-white/70 mb-6">
              Designed a full end-to-end checkout flow balancing user clarity
              with operational constraints such as hardware limitations, store
              workflows, and scalability across brands.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "/rewe-18.png",
                "/rewe-8.png",
                "/rewe-9.png",
                "/rewe10.png",
                "/rewe-15.png",
                "/rewe-16.png",
                "/rewe-17.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-[3/2] rounded-xl overflow-hidden"
                >
                  <Image
                    src={src}
                    alt="Design UI"
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Solution */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Final user testing before release
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-6">
              <strong>Testing focus:</strong>
              <br></br>Do they have past experience with SCOs ,Is iteasy to
              navigate, Can they recognize of GUI elements, Can they delete
              items, Do they need staff assistance, Whether there are issues
              with item search, How many Abandoned purchases{" "}
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mt-4">
              <strong>Key findings :</strong>
              <br />
            </p>
            <br />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative w-full aspect-[3/2.5] sm:aspect-[3/2.5] rounded-xl overflow-hidden">
                <Image
                  src="/rewe-11.png"
                  alt="Old UI"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* SYSTEM */}
          <section className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              White-Label Component System
            </h2>

            <p className="text-gray-700 dark:text-white/70 mb-6">
              Built a reusable component architecture enabling brand
              customization while maintaining consistent UX patterns.
            </p>

            <div className="grid gap-6">
              {["/rewe-12.png", "/rewe-13.png", "/rewe-14.png"].map(
                (src, i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-[5/2] rounded-xl overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt="Design System"
                      fill
                      className="object-contain"
                    />
                  </div>
                ),
              )}
            </div>
          </section>

          {/* OUTCOME */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Outcome</h2>

            <p className="text-gray-700 dark:text-white/70 leading-relaxed">
              The redesigned system is now deployed nationwide across BILLA
              Austria. Transaction time improved by approximately 10–15 seconds
              per customer, translating into significant operational efficiency
              gains at scale. Retail staff reported faster onboarding and
              reduced assistance needs, validating the design decisions in
              real-world usage.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

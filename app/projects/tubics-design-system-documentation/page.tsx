// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { FiArrowLeft } from "react-icons/fi";

// export default function TubicsDesignSystemPage() {
//   return (
//     <main className="flex flex-col items-center px-0 sm:px-0 pb-16">
//       {/* Content container overlapping banner */}
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

export default function TubicsDesignSystemPage() {
  return (
    <main className="flex flex-col items-center pb-16">
      {/* HERO BANNER */}
      <div className="relative w-full -z-10 overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source
            media="(max-width:640px)"
            srcSet="/tubics-design-system-banner-mobile.png"
          />
          <img
            src="/tubics-design-system-banner.png"
            alt="Tubics design system banner"
            className="w-full h-auto object-contain"
          />
        </picture>

        <div className="absolute inset-0 flex justify-center">
          <div className="relative w-full max-w-[73rem] px-4">
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
      <div className="w-full max-w-[73rem] -mt-12 px-4">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border p-8">
          {/* HEADER */}
          <header className="mb-14">
            <h1 className="text-4xl font-bold mb-8">
              Tubics — Design System & Developer Documentation
            </h1>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl">
              As the sole designer at Tubics, I created a scalable design system
              from scratch to unify UI across the product, accelerate
              development, and reduce design inconsistencies. The system
              included tokens, reusable components, developer documentation, and
              an HTML reference library used by engineers.
            </p>
          </header>

          {/* VIDEO SECTION */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Process Walkthrough Video
            </h2>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/4reO_JY3v48"
                title="Design system walkthrough"
                allowFullScreen
              />
            </div>
          </section>

          {/* CONTEXT */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Context</h2>

            <p className="text-gray-700 dark:text-white/70 max-w-3xl">
              Tubics migrated to a new brand and technical stack. The product
              contained duplicated components, inconsistent colors, and
              undocumented UI patterns. Development velocity slowed because
              designers and engineers lacked a shared source of truth.
            </p>
          </section>

          {/* STRATEGY */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Strategy & Approach</h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70">
              <li className="text-wrap">
                Audit existing UI and create component inventory
              </li>
              <li className="text-wrap">
                Define tokens (colors, typography, spacing)
              </li>
              <li className="text-wrap">
                Adopt Material-based React system for dev alignment
              </li>
              <li className="text-wrap">Design scalable reusable components</li>
              <li className="text-wrap">Create developer documentation</li>
              <li className="text-wrap">
                Build HTML component reference for engineers
              </li>
              <li className="text-wrap">
                Validate system adoption through workshops
              </li>
            </ul>

            <div className="mt-6 relative w-full aspect-[1/1] sm:aspect-[2.2/1] rounded-xl overflow-hidden">
              <Image
                src="/tubics-design-system-0.png"
                alt="Team & RACI / roles at-a-glance"
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </section>

          {/* EXECUTION */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Execution</h2>

            {/* Step 1 */}
            <section className="mb-12">
              <h2 className="text-md sm:text-lg font-semibold mb-2">
                Step 1 — Design system research
              </h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
                I researched different design systems for inspiration. Then,
                with the frontend developer, we chose which React library we
                would use in the code to import the components from.
              </p>
            </section>

            {/* Step 2 */}
            <section className="mb-12">
              <h2 className="text-md sm:text-lg font-semibold mb-2">
                Step 2 — Replacing colors
              </h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
                There were many old, unused, and duplicate colors in the
                codebase, so we had to get rid of the hard-coded colors and
                replace them with color variables.
              </p>
              <div className="grid gap-6 sm:grid-cols-1">
                <div className="relative w-full aspect-[16/9] sm:aspect-[9/3] rounded-xl overflow-hidden">
                  <Image
                    src="/tubics-design-system-7.png"
                    alt="Inventory — old components & states (table)"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>
            </section>

            {/* Step 3 */}
            <section className="mb-12">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Step 3 — Designing and documenting the components
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
                I created the design system in Figma — starting with tokens
                (colors/typography), then core components.
              </p>
              <div className="grid gap-6 grid-cols-1">
                {/* <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden">
                  <Image
                    src="/tubics-design-system-3.png"
                    alt="Tokens — colors & text styles"
                    fill
                    className="object-fit rounded-xl"
                  />
                </div> */}
                {/* <div className="relative w-full aspect-[1/0.3] rounded-xl overflow-hidden">
                  <Image
                    src="/tubics-design-system-5.png"
                    alt="Components — app bars & buttons"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div> */}
              </div>
              <div className="grid gap-6 grid-cols-1">
                <div className="relative w-full aspect-[1/0.7] rounded-xl overflow-hidden">
                  <Image
                    src="/tubics-design-system-10.png"
                    alt="Tokens — colors & text styles"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <div className="relative w-full aspect-[1/0.4] rounded-xl overflow-hidden">
                  <Image
                    src="/tubics-design-system-15.png"
                    alt="Tokens — colors & text styles"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <div className="relative w-full aspect-[1/0.7] rounded-xl overflow-hidden">
                  <Image
                    src="/tubics-design-system-16.png"
                    alt="Tokens — colors & text styles"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                {/* <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden">
                  <Image
                    src="/tubics-design-system-17.png"
                    alt="Tokens — colors & text styles"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div> */}
                <div className="relative w-full aspect-[1/0.7] rounded-xl overflow-hidden">
                  <Image
                    src="/tubics-design-system-18.png"
                    alt="Tokens — colors & text styles"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                {/* <div className="relative w-full aspect-[1/0.5] rounded-xl overflow-hidden">
                  <Image
                    src="/tubics-design-system-11.png"
                    alt="Components — app bars & buttons"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div> */}
              </div>

              {/* Step 4 */}
              <section className="mt-20">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Step 4 — Mocking the main pages to get approval for the new
                  design system
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
                  I mocked the 3 main pages using the new components for
                  stakeholder approval.
                </p>
                <div className="grid gap-6 grid-cols-1">
                  <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden">
                    <Image
                      src="/tubics-design-system-13.png"
                      alt="Tokens — colors & text styles"
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </div>
              </section>
            </section>
          </section>

          {/* DEV VALIDATION */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">
              Developer Adoption & Validation
            </h2>

            <p className="text-gray-700 dark:text-white/70 mb-6 max-w-3xl">
              Developers rebuilt a full page using only documentation —
              completed in one day. This validated clarity, scalability, and
              engineering readiness of the system.
            </p>

            <div className="relative w-full aspect-video">
              <Image
                src="/tubics-design-system-8.png"
                alt="validation"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* Delivery */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Delivery</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Using a low-code tool called Harmony, I created an HTML web page
              for developers to reference the design system.
            </p>
            <div className="grid gap-6 sm:grid-cols-1 mt-4">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-design-system-9.png"
                  alt="Delivery — new colors & fonts applied"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* OUTCOME */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Outcome & Impact</h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/70">
              <li className="text-wrap">
                Unified visual language across product
              </li>
              <li className="text-wrap">Reduced design inconsistencies</li>
              <li className="text-wrap">
                Accelerated development through reusable components
              </li>
              <li className="text-wrap">Enabled scalable UI evolution</li>
              <li className="text-wrap">
                Improved collaboration between design and engineering
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

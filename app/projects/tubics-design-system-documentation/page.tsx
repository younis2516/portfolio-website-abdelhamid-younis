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

export default function TubicsDesignSystemPage() {
  return (
    <main className="flex flex-col items-center px-0 sm:px-0 pb-16">
      {/* Banner */}
      <div className="relative z-0 w-[100%] mx-auto overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source media="(max-width: 640px)" srcSet="/tubics-design-system-banner-mobile.png" />
          <img
            src="/tubics-design-system-banner.png"
            alt="Tubics design system banner"
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
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12">
              Tubics — Design System & Documentation (2021)
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70"><strong>Company:</strong> <br></br> Tubics GmbH <br></br> <br></br> <strong>Duration:</strong> <br></br> 2 months<br></br></p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70"><br></br><strong>Role:</strong> <br></br> UX/UI Designer</p>
          </header>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Project Overview</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
              Tubics migrated from an old color palette to a new brand palette while adopting
              a React Material component library. I led the design system creation in Figma,
              documented usage, and supported handover to developers to ensure consistent,
              scalable UI across the product.
            </p>
          </section>

           {/* Plan and timeline */}
           <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Project Plan & Timeline</h2>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
              <li>Step 1: Design system research</li>
              <li>Step 2: Migrating old colors to new colors </li>
              <li>Step 3: Creating an inventory of all app components</li>
              <li>Step 4: Designing and documenting the components</li>
              <li>Step 5: Mock the main pages for stakeholders to get approval for the new design system</li>
              <li>Step 6: Validating that Developers can use the design system</li>
              <li>Step 7: building an HTML web page for the components </li>
            </ul>
            <div className="mt-6 relative w-full aspect-[16/9] sm:aspect-[2.2/1] rounded-xl overflow-hidden">
              <Image
                src="/tubics-design-system-0.png"
                alt="Team & RACI / roles at-a-glance"
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </section>

          {/* Step 1 */}
          <section className="mb-12">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Step 1 — Design system research and selecting UI Framework</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            We researched different design systems for inspiration. Then, together with the frontend developer, we chose which React library we would use in the code to import the components from.
            </p>
            <div className="grid gap-6 sm:grid-cols-1">
              <div className="relative w-full aspect-[16/9] sm:aspect-[9/3] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-design-system-1.png"
                  alt="Inventory — old components & states (table)"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </section>
          {/* Step 2 */}
          <section className="mb-12">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Step 2 — Migrating old colors to new colors</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            There were many old, unused, and duplicate colors in the codebase, so we had to get rid of the hard-coded colors and replace them with color variables.
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
          {/* Step 2 */}
          <section className="mb-12">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Step 3 — Creating an inventory of all app components</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            I collected all the current app components in one Figma file.
            </p>
            
          </section>

          {/* Step 4 */}
          <section className="mb-12">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Step 4 — Designing and documenting the components</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Using the inventory and the material react library as inputs, I created the design system in
              Figma — starting with tokens (colors/typography), then core components.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-design-system-3.png"
                  alt="Tokens — colors & text styles"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-design-system-5.png"
                  alt="Components — app bars & buttons"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-design-system-10.png"
                  alt="Tokens — colors & text styles"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-design-system-11.png"
                  alt="Components — app bars & buttons"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
            <div className="relative w-full aspect-[16/9] sm:aspect-[2/0.8] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-design-system-4.png"
                  alt="Components — app bars & buttons"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
          </section>

          {/* Step 5 */}
          <section className="mb-12">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Step 5 — Mocking the main pages to get approval for the new design system
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              I mocked the 3 main pages using the new components for stakeholder approval.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-design-system-13.png"
                  alt="Tokens — colors & text styles"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-design-system-14.png"
                  alt="Components — app bars & buttons"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
            
          </section>

          {/* Validation workshop */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Step 6 — Validating that Developers can use the design system</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              In a workshop, developers were asked to design a “Top Ranking Keywords” page
              using only the documentation. They completed it in a single day — a strong
              signal of clarity and completeness of the design system guidelines.
            </p>
            <div className="grid gap-6 sm:grid-cols-1">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-design-system-8.png"
                  alt="Developer workshop — instructions & setup"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Delivery */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Step 7 - Building an HTML web page for the components</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Using a low-code tool called Harmony, I created an HTML web page for developers to reference the design system. They used this page and created the components in Storybook.
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
        </div>
      </div>
    </main>
  );
}



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

export default function AppRadarRedesignPage() {
  return (
    <main className="flex flex-col items-center px-0 sm:px-0 pb-16">
      {/* Banner */}
      <div className="relative z-0 w-[100%] mx-auto overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/app-radar-banner-mobile.png"
          />
          <img
            src="/app-radar-banner.png"
            alt="App Radar banner"
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

      {/* Content container overlapping banner */}
      <div className="w-full sm:max-w-[73rem] -mt-10 sm:-mt-14 px-4 relative z-10">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12">
              App Radar — UI Redesign (2022)
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-2">
              <strong>Client:</strong> <br></br> App Radar
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-2">
              <strong>Duration:</strong> <br></br> 2 months
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-2">
              <strong>Role:</strong> <br></br> UX/UI Designer
            </p>
          </header>

          {/* Summary */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              Project Overview
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-white/70">
              Freelance redesign of App Radar’s B2B application with a focus on
              helping new signups reach product value faster through clearer
              onboarding, empty states, and actionable insights in the
              dashboard.
            </p>
          </section>

          {/* Problem 1 */}
          <section className="mb-12 space-y-4 gap-5">
            <h3 className="text-lg sm:text-xl font-semibold">
              Problem 1 — First-time setup friction
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
              When a new user signs up for the product for the first time, they
              need to connect their App Store account and their Apple Ads
              account if they run ads. This is how we show them their current
              app performance and suggest ways to improve their ASO score (App
              Store Optimization).
            </p>
            <h4 className="font-semibold">Solution</h4>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
              When the user signs up for the first time, they see this screen
              that prompts them to connect their App Store account and their
              Google Ads account.Once the user connects their App Store
              accounts, it will take a few minutes to see your app analysis.
              That's why we show them this empty state until the data is loaded.
            </p>
            {/* Images */}
            {/* <div className="grid gap-6 sm:grid-cols-1">
            <div className="relative w-full aspect-[16/9] sm:aspect-[9/9] rounded-xl overflow-hidden">
              <Image
                src="/app-radar-1.png"
                alt="Onboarding — connect accounts screen"
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </div> */}

            <div className="grid gap-6 sm:grid-cols-1">
              <h4 className="font-semibold text-gray-200 mt-8">__</h4>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
                Once the user connects their App Store accounts, it will take a
                few minutes to see your app analysis. That's why we show them
                this empty state until the data is loaded.
              </p>
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src="/app-radar-2.png"
                  alt="Onboarding — connect accounts screen"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-1">
              <h4 className="font-semibold text-gray-200 mt-8">__</h4>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
                Once the data is loaded, the user will see the following reports
                in the app dashboard.
              </p>
              <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden">
                <Image
                  src="/app-radar-3.png"
                  alt="Onboarding — connect accounts screen"
                  fill
                  className="object-fit rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Problem 2 */}
          <section className="mb-12 space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">
              Problem 2 — Users lacked guidance for ASO
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
              Users needed direction to add main keywords and competitors;
              without this, the product couldn’t generate meaningful ASO
              recommendations.
            </p>
            <h4 className="font-semibold">Solution</h4>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
              Added dashboard widgets prompting users to add keywords and
              competitors, which unlock context-aware ASO suggestions inside the
              app.
            </p>
            {/* Images */}
            <div className="grid gap-6 sm:grid-cols-1">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src="/app-radar-4.png"
                  alt="Dashboard widgets — add keywords"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
            <h4 className="font-semibold text-gray-200 mt-8">___</h4>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
              Once we know enough information about the app we can give our
              customers ASO suggestions in the app. This is how the ASO
              suggestions looks like.
            </p>
            <div className="grid gap-6 sm:grid-cols-1">
              <div className="relative w-full aspect-[16/9] sm:aspect-[9/7] rounded-xl overflow-hidden">
                <Image
                  src="/app-radar-5.png"
                  alt="Dashboard widgets — add keywords"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Problem 3 */}
          <section className="mb-12 space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">
              Problem 3 — Spending on low-value keywords in Apple Ads
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70">
              Marketers needed visibility into keyword performance and better
              opportunities to avoid wasting budget.
            </p>
            <h4 className="text-base sm:text-lg font-semibold">Solutions</h4>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-1 sm:space-y-2 break-words">
              <li className="text-wrap">
                Keyword Insights — understand current ranking & traffic
                potential
              </li>
              <li className="text-wrap">
                Keyword Opportunities — discover higher-value alternatives
              </li>
            </ul>
            {/* Images */}
            <div className="grid gap-6 sm:grid-cols-1">
              <div className="relative w-full aspect-[16/9] sm:aspect-[9/6] rounded-xl overflow-hidden">
                <Image
                  src="/app-radar-6.png"
                  alt="Keyword Insights page"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[16/9] sm:aspect-[9/6] rounded-xl overflow-hidden">
                <Image
                  src="/app-radar-7.png"
                  alt="Keyword Opportunities page"
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

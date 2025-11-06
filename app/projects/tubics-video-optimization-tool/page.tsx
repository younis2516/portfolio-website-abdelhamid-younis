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

export default function TubicsVideoOptimizationPage() {
  return (
    <main className="flex flex-col items-center px-0 sm:px-0 pb-16">
      {/* Banner */}
      <div className="relative z-0 w-[100%] mx-auto overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source media="(max-width: 640px)" srcSet="/tubics-video-optimization-banner-mobile.png" />
          <img
            src="/tubics-video-optimization-banner.png"
            alt="Tubics video optimization banner"
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
              Tubics — Video Optimization Tool (2021)
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70"><strong>Company: </strong><br></br> Tubics GmbH <br></br> <br></br> <strong> Duration: </strong><br></br> 4 months <br></br> <br></br></p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70"><strong>Role:</strong><br></br> UX/UI Designer & Researcher</p>
          </header>
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Project Overview</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
              The Video Optimization page is Tubics’ most-used feature. The goal of this
              project was to improve usability and outcomes, introduce richer AI-driven
              recommendations (titles, descriptions, tags, thumbnails), encourage users
              to set a search term up front, and enable collaboration via sharable
              drafts.
            </p>
          </section>
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Pains</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
              The current video optimization tool was problematic. It was buggy, didn't give rich recommendations, and nobody wanted to use it.
            </p>
            <div className="relative w-full aspect-[16/9] sm:aspect-[9/4] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-video-1.png"
                  alt="Old Video Optimization page — before"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
          </section>

          {/* Problem framing */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Problem Framing</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Users wanted “quick wins” in under 5 minutes, but high-quality AI
              recommendations require a selected search term. Many users skipped this
              step, resulting in weaker suggestions from our AI.
            </p>
          </section>

          {/* Thought process & 1st release */}
          <section className="mb-12">
            <h3 className="text-base sm:text-lg font-semibold mb-2">Solution 1: Require a Search Term First</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Step one was a clear, justified search-term selection screen (manual or
              suggested). This primes the AI to generate accurate recommendations. So, first select a search term → then optimize title/description/tags/thumbnail,
              emphasizing quality over volume in the first release.
            </p>
            <div className="grid gap-6 sm:grid-cols-1">
              <div className="relative w-full aspect-[16/9] sm:aspect-[9/4] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-video-2.png"
                  alt="Old Video Optimization page — before"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-8 mb-2">
              Solution 2: Guided, Rich Recommendations 
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
              Provide explanations and examples for each recommendation, organized like a
              left-panel checklist with the editable video fields on the right (similar to
              Grammarly's interface).
            </p>
            <div className="grid gap-6 sm:grid-cols-1">
              <div className="relative w-full aspect-[16/9] sm:aspect-[9/4] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-video-3.png"
                  alt="SEO recommendations — left panel"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </section>
           {/* 1st release */}
           <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">First Release</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            We created a Figma prototype and tested it with 5 customers in an unstructured user interview. We showed them the prototype and asked them to think aloud. We put them in a scenario and asked them to optimize a video about "Winter holidays in Austria" and the feedback was as follows.
            </p>
            <div className="grid gap-6 sm:grid-cols-1">
              <div className="relative w-full aspect-[16/9] sm:aspect-[9/4] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-video-5.png"
                  alt="Feedback quotes — summary"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </section>
          {/* Research & testing */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Adopting User Feedback from First Release into Second Release</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            In this release, we included 3 other features based on the feedback we got from the first release.

            <br></br> <br></br>

Feature 1: Sharing a draft with a colleague before publishing. Users can click on this link icon to copy the draft link to the clipboard. The icon itself might not be very obvious, so we created an onboarding tour with Intercom to highlight it once the user lands on this page.
            </p>
            <div className="grid gap-6 sm:grid-cols-1">
              <div className="relative w-full aspect-[16/9] sm:aspect-[9/2] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-video-4.png"
                  alt="Prototype — Figma"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">Feature 2: Search for keywords while working on your video, so users don't need to go to any other keyword tracking tool to search for keywords and leave the app. We also released saved templates because most videos use duplicate content in the header and the footer of the video description.</p>
             <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative w-full aspect-[16/9] sm:aspect-[9/8] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-video-6.png"
                  alt="Prototype — Figma"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="relative w-full aspect-[16/9] sm:aspect-[10/8] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-video-7.png"
                  alt="Prototype — Figma"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </section>


          {/* Outcomes & next steps */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Outcomes & Next Steps</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
            Now that the video optimization page is getting bigger and has more features, it's important to offer a different experience for novice users compared to expert users. We learned that only expert users use the templates, the keyword search feature, and the draft feature. But our regular users didn't really use these features, and based on a survey we launched to 200 users through our app, those users didn't use these features because they didn't actually need them. So the next step we took was to ask users 4 questions during onboarding to classify them as expert or novice users, and based on this, we show them 2 different views of the video optimization page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}



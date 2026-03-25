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

// export default function TubicsVideoOptimizationPage() {
//   return (
//     <main className="flex flex-col items-center px-0 sm:px-0 pb-16">
//       {/* Banner */}
//       <div className="relative z-0 w-[100%] mx-auto overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
//         <picture>
//           <source media="(max-width: 640px)" srcSet="/tubics-video-optimization-banner-mobile.png" />
//           <img
//             src="/tubics-video-optimization-banner.png"
//             alt="Tubics video optimization banner"
//             className="w-full h-auto object-contain"
//           />
//         </picture>
//       </div>

//       {/* Content container overlapping banner */}
//       <div className="w-full sm:max-w-[73rem] -mt-10 sm:-mt-14 px-4 relative z-10">
//         <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">
//           {/* Hero */}
//           <header className="mb-10">
//             <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12">
//               Tubics — Video Optimization Tool (2021)
//             </h1>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70"><strong>Company: </strong><br></br> Tubics GmbH <br></br> <br></br> <strong> Duration: </strong><br></br> 4 months <br></br> <br></br></p>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70"><strong>Role:</strong><br></br> UX/UI Designer & Researcher</p>
//           </header>
//           {/* Overview */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-3">Project Overview</h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
//               The Video Optimization page is Tubics’ most-used feature. The goal of this
//               project was to improve usability and outcomes, introduce richer AI-driven
//               recommendations (titles, descriptions, tags, thumbnails), encourage users
//               to set a search term up front, and enable collaboration via sharable
//               drafts.
//             </p>
//           </section>
//           {/* Overview */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-3">Pains</h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
//               The current video optimization tool was problematic. It was buggy, didn't give rich recommendations, and nobody wanted to use it.
//             </p>
//             <div className="relative w-full aspect-[16/9] sm:aspect-[9/4] rounded-xl overflow-hidden">
//                 <Image
//                   src="/tubics-video-1.png"
//                   alt="Old Video Optimization page — before"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//           </section>

//           {/* Problem framing */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-3">Problem Framing</h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//               Users wanted “quick wins” in under 5 minutes, but high-quality AI
//               recommendations require a selected search term. Many users skipped this
//               step, resulting in weaker suggestions from our AI.
//             </p>
//           </section>

//           {/* Thought process & 1st release */}
//           <section className="mb-12">
//             <h3 className="text-base sm:text-lg font-semibold mb-2">Solution 1: Require a Search Term First</h3>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//               Step one was a clear, justified search-term selection screen (manual or
//               suggested). This primes the AI to generate accurate recommendations. So, first select a search term → then optimize title/description/tags/thumbnail,
//               emphasizing quality over volume in the first release.
//             </p>
//             <div className="grid gap-6 sm:grid-cols-1">
//               <div className="relative w-full aspect-[16/9] sm:aspect-[9/4] rounded-xl overflow-hidden">
//                 <Image
//                   src="/tubics-video-2.png"
//                   alt="Old Video Optimization page — before"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//             </div>
//             <h3 className="text-lg font-semibold mt-8 mb-2">
//               Solution 2: Guided, Rich Recommendations
//             </h3>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//               Provide explanations and examples for each recommendation, organized like a
//               left-panel checklist with the editable video fields on the right (similar to
//               Grammarly's interface).
//             </p>
//             <div className="grid gap-6 sm:grid-cols-1">
//               <div className="relative w-full aspect-[16/9] sm:aspect-[9/4] rounded-xl overflow-hidden">
//                 <Image
//                   src="/tubics-video-3.png"
//                   alt="SEO recommendations — left panel"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//             </div>
//           </section>
//            {/* 1st release */}
//            <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-3">First Release</h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//             We created a Figma prototype and tested it with 5 customers in an unstructured user interview. We showed them the prototype and asked them to think aloud. We put them in a scenario and asked them to optimize a video about "Winter holidays in Austria" and the feedback was as follows.
//             </p>
//             <div className="grid gap-6 sm:grid-cols-1">
//               <div className="relative w-full aspect-[16/9] sm:aspect-[9/4] rounded-xl overflow-hidden">
//                 <Image
//                   src="/tubics-video-5.png"
//                   alt="Feedback quotes — summary"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//             </div>
//           </section>
//           {/* Research & testing */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-3">Adopting User Feedback from First Release into Second Release</h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//             In this release, we included 3 other features based on the feedback we got from the first release.

//             <br></br> <br></br>

// Feature 1: Sharing a draft with a colleague before publishing. Users can click on this link icon to copy the draft link to the clipboard. The icon itself might not be very obvious, so we created an onboarding tour with Intercom to highlight it once the user lands on this page.
//             </p>
//             <div className="grid gap-6 sm:grid-cols-1">
//               <div className="relative w-full aspect-[16/9] sm:aspect-[9/2] rounded-xl overflow-hidden">
//                 <Image
//                   src="/tubics-video-4.png"
//                   alt="Prototype — Figma"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//             </div>

//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">Feature 2: Search for keywords while working on your video, so users don't need to go to any other keyword tracking tool to search for keywords and leave the app. We also released saved templates because most videos use duplicate content in the header and the footer of the video description.</p>
//              <div className="grid gap-6 sm:grid-cols-2">
//               <div className="relative w-full aspect-[16/9] sm:aspect-[9/8] rounded-xl overflow-hidden">
//                 <Image
//                   src="/tubics-video-6.png"
//                   alt="Prototype — Figma"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//               <div className="relative w-full aspect-[16/9] sm:aspect-[10/8] rounded-xl overflow-hidden">
//                 <Image
//                   src="/tubics-video-7.png"
//                   alt="Prototype — Figma"
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Outcomes & next steps */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold mb-3">Outcomes & Next Steps</h2>
//             <p className="text-sm sm:text-base text-gray-700 dark:text-white/70 mb-4">
//             Now that the video optimization page is getting bigger and has more features, it's important to offer a different experience for novice users compared to expert users. We learned that only expert users use the templates, the keyword search feature, and the draft feature. But our regular users didn't really use these features, and based on a survey we launched to 200 users through our app, those users didn't use these features because they didn't actually need them. So the next step we took was to ask users 4 questions during onboarding to classify them as expert or novice users, and based on this, we show them 2 different views of the video optimization page.
//             </p>
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

export default function TubicsVideoOptimizationPage() {
  return (
    <main className="flex flex-col items-center pb-16">
      {/* HERO */}
      <div className="relative w-full overflow-hidden -mt-28 sm:-mt-36">
        <img
          src="/tubics-video-optimization-banner.png"
          alt="Tubics banner"
          className="w-full object-contain"
        />

        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow border"
        >
          <FiArrowLeft />
          Back
        </Link>
      </div>

      <div className="w-full sm:max-w-[900px] -mt-12 px-4 z-10">
        <div className="bg-white rounded-[32px] shadow-xl p-8 sm:p-12 space-y-20">
          {/* CONTEXT */}
          <section>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Driving Product Adoption in an AI-Powered SaaS Platform
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Tubics provides AI-powered SEO optimization tools for enterprise
              YouTube teams. I redesigned the core workflow to improve adoption,
              trust in AI recommendations, and overall product engagement.
            </p>

            <div className="mt-6 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Company:</strong> Tubics
              </p>
              <p>
                <strong>Role:</strong> Solo Product Designer
              </p>
              <p>
                <strong>Scope:</strong> UX strategy, research, interaction
                design, delivery
              </p>
            </div>
          </section>

          {/* IMPACT FIRST */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Impact</h2>

            <ul className="space-y-2 text-gray-700">
              <li className="text-wrap">
                • Became the most-used workflow in the platform
              </li>
              <li className="text-wrap">
                • Increased <strong>session time to from 20% to 70%</strong>
              </li>
              <li className="text-wrap">
                • Reduced <strong>completion time by 54%</strong>
              </li>

              <li className="text-wrap">
                • NPS score <strong>increased from 3 to 7/10</strong>
              </li>
              <li className="text-wrap">
                • Improved perceived quality of AI recommendations
              </li>
              <li className="text-wrap">
                • Reduced reliance on external SEO tools
              </li>
              <li className="text-wrap">
                • Enabled collaboration for enterprise teams
              </li>
            </ul>
          </section>

          {/* SYSTEM PROBLEM */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Problem</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The issue wasn’t just UI — it was a mismatch between how the AI
              system worked and how users expected to interact with it.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>
                • AI required structured input → users wanted quick results
              </li>
              <li>• Recommendations felt generic → low trust</li>
              <li>• Workflow required too many manual steps</li>
              <li>• No clear guidance → users skipped critical steps</li>
            </ul>

            <div className="relative w-full aspect-[16/9] mt-6">
              <Image
                src="/tubics-video-1.png"
                alt=""
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </section>

          {/* INSIGHTS */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Insight</h2>

            <p className="text-gray-700 leading-relaxed">
              Users didn’t trust the AI because they didn’t understand how to
              get good results. The problem wasn’t the algorithm — it was the
              lack of structured guidance in the UX.
            </p>
          </section>

          {/* DECISIONS */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Key Product Decisions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-2">
                  1. Force structured input before AI execution
                </h3>

                <p className="text-gray-700 mb-3">
                  Introduced a mandatory search-term selection step to guide
                  users toward high-quality inputs instead of free-form
                  interaction.
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  → Result: Improved AI output quality and reduced failed
                  optimization attempts.
                  <br></br>→ Result: Customers can now see the highest ranking
                  relevant keywords to optimize their video metadata for
                </p>

                <div className="relative aspect-[16/9]">
                  <Image
                    src="/tubics-video-2.png"
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  2. Turn AI output into actionable guidance
                </h3>

                <p className="text-gray-700 mb-3">
                  Replaced generic recommendations with contextual, explainable
                  feedback inspired by Grammarly-style interaction patterns.
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  → Result: Increased trust and clarity in AI recommendations
                  <br></br>→ Result: they dont need to think about the content
                  of the metadata
                  <br></br>→ Result: they can see examples from other successful
                  YouTube videos
                </p>

                <div className="relative aspect-[16/9]">
                  <Image
                    src="/tubics-video-3.png"
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ITERATION */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Iteration & Expansion
            </h2>

            <p className="text-gray-700 mb-6">
              Based on user feedback, I expanded the workflow to support real
              enterprise use cases.
            </p>

            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="text-wrap">
                • Added draft sharing for team collaboration
              </li>
              <li className="text-wrap">
                • Integrated keyword research directly into workflow, so users
                dont need to leave the product and search for keywords on an
                external keyword research tool
              </li>
              <li className="text-wrap">
                • Introduced reusable templates to reduce repetitive work, so
                users can save time
              </li>
            </ul>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative aspect-square">
                <Image
                  src="/tubics-video-6.png"
                  alt=""
                  fill
                  className="object-contain rounded-lg"
                />
              </div>

              <div className="relative aspect-square">
                <Image
                  src="/tubics-video-7.png"
                  alt=""
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* PRODUCT THINKING */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Product Thinking</h2>

            <ul className="space-y-2 text-gray-700">
              <li>• Balanced flexibility vs guidance in AI workflows</li>
              <li>• Designed for both novice and expert users</li>
              <li>• Reduced cognitive load while increasing output quality</li>
              <li>• Shifted product from tool → guided system</li>
            </ul>
          </section>

          {/* OUTCOME */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Outcome</h2>

            <p className="text-gray-700 leading-relaxed">
              The redesigned workflow became the central experience of the
              product, significantly increasing engagement and improving how
              users interacted with AI recommendations. It transformed Tubics
              from a tool with features into a guided system delivering
              consistent value.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

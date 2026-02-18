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
    <main className="flex flex-col items-center px-0 sm:px-0 pb-16">
      {/* Banner */}
      <div className="relative z-0 w-[100%] mx-auto overflow-hidden bg-yellow-200 -mt-28 sm:-mt-36">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/tubics-video-optimization-banner-mobile.png"
          />
          <img
            src="/tubics-video-optimization-banner.png"
            alt="Tubics video optimization banner"
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

      {/* Content container */}
      <div className="w-full sm:max-w-[73rem] -mt-10 sm:-mt-14 px-4 relative z-10">
        <div className="bg-white dark:bg-gray-950 rounded-[40px] shadow-xl border border-black/5 p-6 sm:p-10">
          {/* HERO */}
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">
              Tubics — AI Video Optimization Platform (2021)
            </h1>

            <p className="text-gray-700 dark:text-white/70">
              <strong>Company:</strong> Tubics GmbH
            </p>

            <p className="text-gray-700 dark:text-white/70 mt-4">
              <strong>Role:</strong> Solo Product Designer (UX/UI & Research)
            </p>

            <p className="text-gray-700 dark:text-white/70 mt-4">
              <strong>Impact:</strong> Redesigned core optimization workflow
              which became the most-used feature of the platform and
              significantly improved perceived quality of SEO recommendations
              for enterprise YouTube teams.
            </p>
          </header>

          {/* CONTEXT */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Context & Challenge</h2>

            <p className="text-gray-700 dark:text-white/70 leading-relaxed">
              Tubics provided AI-powered tools to help enterprise YouTube teams
              optimize video SEO. The existing optimization workflow suffered
              from low adoption because recommendations felt generic, users
              lacked guidance, and the workflow required too many manual steps.
              I was responsible for redesigning the experience end-to-end — from
              research to delivery — with the goal of increasing adoption and
              improving SEO decision quality.
            </p>
          </section>

          {/* ROLE */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">My Role & Ownership</h2>

            <ul className="list-disc list-inside text-gray-700 dark:text-white/70 space-y-2">
              <li className="text-wrap">
                Sole UX/UI designer responsible for discovery and delivery
              </li>
              <li className="text-wrap">
                Conducted 8 usability tests with enterprise customers and
                YouTube marketing agencies
              </li>
              <li className="text-wrap">
                Defined product UX strategy with stakeholders
              </li>
              <li className="text-wrap">
                Designed AI recommendation interaction model
              </li>
              <li className="text-wrap">
                Delivered validated high-fidelity UI
              </li>
            </ul>
          </section>

          {/* PROBLEM */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Key User Insights</h2>

            <p className="text-gray-700 dark:text-white/70">
              Users wanted quick wins without deep SEO expertise. However, the
              AI required structured inputs to generate quality recommendations.
              Without guidance, users skipped critical steps resulting in weak
              outcomes and low trust in the tool.
            </p>

            <div className="relative w-full aspect-[16/9] mt-6 rounded-xl overflow-hidden">
              <Image
                src="/tubics-video-1.png"
                alt="Old UI"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* DECISION 1 */}
          <section className="mb-12">
            <h3 className="text-lg font-semibold mb-2">
              Design Decision 1 — Guide Users Through Intent First
            </h3>

            <p className="text-gray-700 dark:text-white/70 mb-4">
              Research showed structured intent dramatically improved AI output
              quality. I introduced a mandatory search-term selection step to
              frame optimization as a guided workflow rather than an open form.
            </p>

            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/tubics-video-2.png"
                alt="Search term flow"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* DECISION 2 */}
          <section className="mb-12">
            <h3 className="text-lg font-semibold mb-2">
              Design Decision 2 — Turn Recommendations into Actionable Guidance
            </h3>

            <p className="text-gray-700 dark:text-white/70 mb-4">
              Instead of generic suggestions, recommendations were transformed
              into contextual guidance with explanations and examples inspired
              by Grammarly-style feedback systems.
            </p>

            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/tubics-video-3.png"
                alt="Guided recommendations"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* ITERATION */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">
              Iteration Based on User Feedback
            </h2>

            <p className="text-gray-700 dark:text-white/70 mb-4">
              After testing with enterprise users, I introduced collaborative
              draft sharing, integrated keyword research directly into the
              workflow, and added reusable templates to reduce repetitive work.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-video-6.png"
                  alt="Feature UI"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden">
                <Image
                  src="/tubics-video-7.png"
                  alt="Feature UI"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              Product Impact
            </h2>

            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-white/70 space-y-2">
              <li className="text-wrap">
                Feature became the most-used workflow in the Tubics platform
                after release
              </li>
              <li className="text-wrap">
                Improved perceived quality of AI SEO recommendations
              </li>
              <li className="text-wrap">
                Reduced need for external keyword tools by integrating search
                into workflow
              </li>
              <li className="text-wrap">
                Enabled collaboration via draft sharing — requested by
                enterprise teams
              </li>
            </ul>

            <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-white/70">
              Although Tubics later pivoted toward agency services, this
              redesign significantly increased engagement and became central to
              the product experience during its active lifecycle.
            </p>
          </section>

          {/* LEARNINGS
          <section>
            <h2 className="text-2xl font-semibold mb-3">Strategic Learnings</h2>

            <ul className="list-disc list-inside text-gray-700 dark:text-white/70 space-y-2">
              <li>AI tools require structured UX scaffolding to build trust</li>
              <li>
                Guided workflows outperform flexible interfaces for novice users
              </li>
              <li>Expert vs beginner segmentation improves adoption</li>
              <li>Rapid research loops accelerate PMF iteration</li>
            </ul>
          </section> */}
        </div>
      </div>
    </main>
  );
}

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

          <div className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6">
            <div className="flex flex-col text-center justify-center items-center">
              <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                +15%
              </p>
              <p className="text-gray-900 leading-relaxed dark:text-white/70">
                average views <br></br> per video
              </p>
            </div>

            <div className="flex flex-col text-center justify-center items-center">
              <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                +50%
              </p>
              <p className="text-gray-900 leading-relaxed dark:text-white/70">
                increase in session time <br></br> (engagement)
              </p>
            </div>
            <div className="flex flex-col text-center justify-center items-center">
              <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                +40%
              </p>
              <p className="text-gray-900 leading-relaxed dark:text-white/70">
                increase in customer <br></br> satisfaction
              </p>
            </div>
            <div className="flex flex-col text-center justify-center items-center">
              <p className="text-gray-900 text-4xl font-bold leading-relaxed dark:text-white">
                -34%
              </p>
              <p className="text-gray-900 leading-relaxed dark:text-white/70">
                Reduced Completion <br></br> time
              </p>
            </div>
          </div>

          {/* IMPACT FIRST */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Impact</h2>

            <ul className="space-y-2 text-gray-700">
              <li className="text-wrap">
                • Became the most-used workflow in the platform
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
              <li className="text-wrap">
                • Recommendations felt generic → low trust
              </li>
              <li className="text-wrap">
                • Workflow required too many manual steps
              </li>
              <li className="text-wrap">
                • No clear guidance → users skipped critical steps
              </li>
              <li className="text-wrap font-bold">
                • The 3-step process overwhelmed the users
              </li>
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
              Key Product Decisions (Before & After)
            </h2>
            <h3 className="font-semibold mb-2">
              1. Replaced the 3-step process with a one-page-document
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Before:</strong> 3 Step wizard (overwhelming)
              <br></br>
              <strong>After:</strong> one-page-free-form gibing the user full
              control over the optimization Process
            </p>

            <p className="text-sm text-gray-600 mb-3">
              → Result: Reduced the percieved length and complexity of the form
              <br></br>
              <br></br>
              <strong>
                {" "}
                80% of the interviewed customers preferred the 1-page approach
                over the steps wizard
              </strong>
            </p>
            <div className="grid sm:grid-cols-3 mb-10">
              <div className="relative w-full aspect-[16/9] mt-6">
                <Image
                  src="/tubics-before-0.png"
                  alt=""
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="relative w-full aspect-[16/9] mt-6">
                <Image
                  src="/tubics-before-1.png"
                  alt=""
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="relative w-full aspect-[16/9] mt-6">
                <Image
                  src="/tubics-before-2.png"
                  alt=""
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="relative w-full aspect-[16/9] mt-6">
              <Image
                src="/tubics-video-optimization-banner.png"
                alt=""
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-2">
                  2. Force structured input before AI recommendations
                </h3>

                <p className="text-gray-700 mb-3">
                  <strong>Before:</strong> Search term step was part of the
                  process not a prerequisite
                  <br></br>
                  <strong>After:</strong> Search terms is a prerequisite to get
                  AI recommendations. By providing a search term, the AI can
                  understand the intent and give the customers better
                  recommendation.
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  → Result: Improved AI output quality and reduced failed
                  optimization attempts.
                  <br></br>→ Result: Customers can now see the highest ranking
                  relevant keywords to optimize their video metadata for.
                  <br></br>→ Result: +15% average views per video
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
                  3. Turn AI recommendations into actionable steps
                </h3>

                <p className="text-gray-700 mb-3">
                  <strong>Before:</strong> generic recommendations
                  <br></br>
                  <strong>After:</strong> contextual, explainable and actionable
                  recommendation cards feedback inspired by Grammarly-style
                  interaction patterns.
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  → Result: Increased trust and clarity in AI recommendations
                  <br></br>→ Result: customers dont need to think about the
                  content of the metadata
                  <br></br>→ Result: Reduced Completion time by 34%
                </p>
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/tubics-before-1.png"
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/tubics-video-3.png"
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/tubics-8.png"
                    alt=""
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  4. Better thumbnail recommendation to improve click-though
                  rate
                </h3>

                <p className="text-gray-700 mb-3">
                  <strong>Before:</strong> generic thumbnail step with a button
                  to upload a new thumbnail (no recommendation provided)
                  <br></br>
                  <strong>After:</strong> color-coded recommendations to improve
                  thumbnail. and a button to design a Thumbnail on Canva.
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  → Result: 10% more users uploaded thumbnails through tubics
                </p>

                <div className="grid sm:grid-cols-2">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/tubics-before-2.png"
                      alt=""
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/tubics-7.png"
                      alt=""
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
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

            <p className="text-sm text-gray-600 mb-3">
              → Result: I watched session recordings on Hotjar, noticed that 20%
              of the customers are using the keywords research and 10% of the
              users are using the templates feature.
            </p>

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

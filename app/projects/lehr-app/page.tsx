"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

export default function LehrAppPage() {
  return (
    <main className="flex flex-col items-center pb-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Banner */}
      <div className="relative w-full overflow-hidden -mt-28 sm:-mt-36">
        <img
          src="/hero-image-lehr.app-desktop.jpg"
          alt="lehr.app banner"
          className="w-full hidden sm:block object-contain"
        />
        <img
          src="/hero-image-lehr.app-mobile.png"
          alt="lehr.app banner"
          className="w-full block sm:hidden object-contain"
        />

        <div className="absolute inset-0 flex justify-center">
          <div className="relative w-full sm:max-w-[73rem] px-4">
            <Link
              href="/"
              className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <FiArrowLeft /> Back
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full sm:max-w-[73rem] -mt-12 px-4 z-10">
        <div className="bg-white dark:bg-gray-900 rounded-[40px] shadow-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-10">
          {/* HERO */}
          <header className="mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Designing & Building an AI-Native Learning System — lehr.app
            </h1>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              lehr.app is a mobile-first German learning platform powered by
              LLMs. The core challenge was not just generating exercises, but
              designing and engineering a system that makes probabilistic AI
              outputs reliable, understandable, and engaging for users.
            </p>

            <div className="mt-8 space-y-2 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Role:</strong> Co-founder — Product, UX, and Frontend
                Architecture
              </p>
              <p>
                <strong>Ownership:</strong> Led product strategy, designed AI
                interaction patterns, and built the full frontend system
                including real-time feedback, async state handling, and UI
                architecture.
              </p>
              <p>
                <strong>Collaboration:</strong> AI backend, LLM pipelines, and
                model logic developed by ML co-founder.
              </p>
              <p>
                <strong>Duration:</strong> 3 months (0 → production)
              </p>
              <p>
                <strong>Status:</strong> Live — early adopters{" "}
                <a className="underline" href="https://lehr.app">
                  visit the website {"->"}
                </a>
              </p>
            </div>
          </header>

          {/* IMPACT */}
          <section className="mb-20">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Product Impact
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 max-w-3xl">
              <li className="text-wrap">
                Designed and shipped a full AI-native product from 0 →
                production
              </li>
              <li className="text-wrap">
                <strong>Reduced perceived latency</strong> of 1–2 min AI
                operations through UX and streaming design
              </li>
              <li className="text-wrap">
                Implemented real-time AI feedback/agent-expereience using{" "}
                <strong>WebSocket-based architecture</strong>
              </li>
              <li className="text-wrap">
                Transformed raw LLM outputs into{" "}
                <strong> structured learning and analytics systems</strong>
              </li>
              <li className="text-wrap">
                Validated core UX through rapid testing loops, shaping final
                interaction model
              </li>
            </ul>
          </section>

          {/* PROBLEM */}
          <section className="mb-20">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Framing the Core Problem
            </h2>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              Traditional learning platforms rely on static content trees. AI
              enables infinite generation — but introduces uncertainty, latency,
              and inconsistency. The challenge was designing a system where
              users still feel control, clarity, and progression within a
              probabilistic architecture.
            </p>
          </section>

          {/* TEMPLATE SYSTEM */}
          <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Intent-Driven Template System
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I designed a structured input system where users define learning
                intent through templates (level, grammar, topic, etc.), enabling
                more reliable AI outputs.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To prevent invalid generations, I implemented a real-time
                validation loop: every template change triggers a lightweight
                LLM check, ensuring viable outputs before submission and
                eliminating dead-end flows.
              </p>
            </div>

            <div className="relative w-full aspect-square">
              <Image
                src="/lehr-template-4.png"
                alt="Template"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* LATENCY */}
          <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Designing for AI Latency
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                AI generation takes 1–2 minutes. I designed and implemented a
                generation-state UI system where words streams progressively
                instead of blocking the user. So users can see the words they
                gonnna practice before initiating the exercise.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This required coordinating async backend responses with frontend
                state management to maintain responsiveness and transform
                waiting time into perceived learning value.
              </p>
            </div>

            <div className="relative w-full aspect-[9/16]">
              <Image
                src="/lehr-video-1.gif"
                alt="Latency UX"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* STREAMING */}
          <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Streaming AI Feedback System
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I implemented a WebSocket-based streaming architecture for AI
                evaluation. Instead of waiting for full responses, feedback is
                delivered incrementally and rendered progressively.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This required handling partial updates, synchronizing UI state,
                and designing progressive disclosure of AI reasoning.
              </p>

              <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-6 text-gray-900 dark:text-white">
                Percieved ease of use
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I implemented a swipe based interaction in the exercise page so
                users can navigate easily between questions. And i added a
                button reveal answer, so users can complete the exercise, learn
                without being blocked.
              </p>
            </div>

            <div className="relative w-full aspect-[9/16]">
              <Image
                src="/lehr-video-2.gif"
                alt="Streaming UX"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* ANALYTICS */}
          <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Analytics & Intelligence Layer
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I designed a performance system that aggregates AI outputs into
                structured signals across level, grammar, and topic — turning
                raw model outputs into actionable insights.
              </p>
            </div>

            <div className="relative w-full aspect-square">
              <Image
                src="/lehr-stats-1.png"
                alt="Analytics"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* ARCHITECTURE */}
          <section className="mb-20">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              System Architecture
            </h2>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-6 leading-relaxed">
              I designed and implemented a frontend architecture that
              orchestrates multiple asynchronous AI processes — validation,
              generation, streaming feedback, and analytics — into a cohesive
              user experience.
            </p>

            <div className="relative w-full aspect-[16/8]">
              <Image
                src="/lehr-system-1.png"
                alt="System"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* VALIDATION */}
          <section className="mb-20">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Validation
            </h2>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              Conducted rapid usability testing to validate latency tolerance,
              streaming feedback comprehension, and interaction clarity.
            </p>
          </section>

          {/* REFLECTION */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Reflection
            </h2>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              This project reflects my approach to building AI products: not
              just designing interfaces, but engineering systems that make
              probabilistic outputs usable, reliable, and valuable.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

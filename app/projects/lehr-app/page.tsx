"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

export default function LehrAppPage() {
  return (
    <main className="flex flex-col items-center pb-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Banner */}
      <div className="relative w-full overflow-hidden -mt-28 sm:-mt-36 transition-colors duration-300">
        <picture>
          {/* <source
            media="(max-width: 640px)"
            srcSet="/hero-image-lehr.app-desktop.jpg"
          /> */}
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
        </picture>

        <div className="absolute inset-0 z-100 flex justify-center">
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
        <div className="bg-white dark:bg-gray-900 rounded-[40px] shadow-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-10 transition-colors duration-300">
          {/* HERO */}
          <header className="mb-20">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Designing & Developing an AI-Native German Learning App — lehr.app
            </h1>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              lehr.app is a mobile-first German learning platform that generates
              personalized exercises using the OpenAI API. Beyond interface
              design, this project required architecting a reliable learning
              experience on top of probabilistic AI systems — balancing user
              trust, latency, pedagogical integrity, and retention mechanics.
            </p>

            <div className="mt-8 space-y-2 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Role:</strong> Co-founder · UX Strategist · UI Designer
                · Frontend Engineer
              </p>
              <p>
                <strong>Duration:</strong> 3 months (design → production)
              </p>
              <p>
                <strong>Status:</strong> Live — serving early adopters
              </p>
              <p>
                <strong>Platform:</strong> Mobile-first web application
              </p>
            </div>
          </header>

          {/* STRATEGIC PROBLEM */}
          <section className="mb-20">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Framing the Core Problem
            </h2>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              Traditional language platforms rely on static content trees. AI
              enables infinite content generation — but introduces uncertainty,
              latency, and inconsistency. The challenge was not simply
              generating exercises, but designing a system where users feel
              control, clarity, and progression within an AI-driven
              architecture.
            </p>
          </section>

          {/* TEMPLATE SYSTEM */}
          <section className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Intelligent Template Architecture
                </h2>

                <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-6 leading-relaxed">
                  Users define structured learning intent through exercise
                  templates: level, dialect, grammar rules, topic, word types,
                  question formats, and a free-text thematic focus.
                </p>

                <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
                  AI systems can return zero valid expressions when constraints
                  are too strict. Instead of surfacing an error state, I
                  designed a real-time validation loop: every template change
                  triggers an LLM recalculation to ensure viable expression
                  generation — eliminating dead-end flows before submission.
                </p>
              </div>
              <div className="relative w-full aspect-[1/1]  overflow-hidden rounded-2xl">
                <Image
                  src="/lehr-template-4.png"
                  alt="Template system"
                  fill
                  className="object-contain rounded-lg overflow-hidden"
                />
              </div>
            </div>
          </section>

          {/* LATENCY STRATEGY */}
          <section className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Designing Around AI Latency
                </h2>

                <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-6 leading-relaxed">
                  Exercise generation requires 1–2 minutes. Without
                  intervention, this wait time risks abandonment.
                </p>

                <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
                  I introduced a vocabulary animation system during generation:
                  20 AI-generated words appear sequentially with a typing
                  effect, reframing waiting time as learning time. This
                  transforms system latency into perceived value creation.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="relative w-full aspect-[9/16] rounded rounded-xl overflow-hidden">
                  <Image
                    src="/lehr-video-1.gif"
                    alt="Loading vocabulary animation"
                    fill
                    className="object-contain rounded rounded-xl"
                  />
                </div>
                <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
                  <Image
                    src="/lehr-templates-6.png"
                    alt="Loading vocabulary animation"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* REAL-TIME FEEDBACK SYSTEM */}
          <section className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Streaming AI Feedback Architecture
                </h2>

                <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-6 leading-relaxed">
                  Each question submission triggers evaluation via WebSocket.
                  Feedback streams in chunks and animates progressively — making
                  AI reasoning visible instead of opaque.
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                  <li>Overall performance score</li>
                  <li>Grammar accuracy score</li>
                  <li>Precision score</li>
                  <li>LLM explanation with improvement guidance</li>
                </ul>

                <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-6 leading-relaxed">
                  Sound cues and motion feedback reinforce performance loops,
                  while swipe gestures preserve mobile-native fluidity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* <div className="relative w-full aspect-[9/16] rounded rounded-xl overflow-hidden">
                  <Image
                    src="/lehr-question-1.png"
                    alt="Loading vocabulary animation"
                    fill
                    className="object-contain rounded rounded-xl"
                  />
                </div> */}
                <div className="relative w-full aspect-[9/16] rounded rounded-xl overflow-hidden">
                  <Image
                    src="/lehr-video-2.gif"
                    alt="Loading vocabulary animation"
                    fill
                    className="object-contain rounded rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ANALYTICS SYSTEM */}
          <section className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Performance Intelligence Layer
                </h2>

                <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-6 leading-relaxed">
                  The analytics dashboard surfaces performance by timeframe,
                  level, grammar rule, and topic — converting AI outputs into
                  structured learning signals.
                </p>

                <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
                  Future roadmap includes personalized improvement modeling per
                  CEFR level — moving from reactive scoring toward predictive
                  learning guidance.
                </p>
              </div>
              <div className="relative w-full aspect-[9/9] rounded-xl overflow-hidden">
                <Image
                  src="/lehr-stats-1.png"
                  alt="Performance analytics"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* SYSTEM ARCHITECTURE */}
          <section className="mb-20">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              System Architecture & AI Orchestration
            </h2>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-6 leading-relaxed">
              Designing lehr.app required building a product layer on top of a
              probabilistic AI system. Instead of treating AI as a single API
              call, the architecture orchestrates multiple asynchronous
              processes to maintain user trust, performance, and learning
              continuity.
            </p>

            <div className="space-y-6 text-gray-700 dark:text-gray-300 max-w-3xl">
              <div>
                <h3 className="font-semibold mb-2">
                  1. Template Validation Loop
                </h3>
                <p>
                  Exercise templates define structured constraints for
                  generation. Every template change triggers a lightweight LLM
                  calculation to ensure valid expression availability. This
                  prevents dead-end states where generation would otherwise fail
                  due to overly strict criteria.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  2. Asynchronous Exercise Generation Pipeline
                </h3>
                <p>
                  Exercise creation runs as a background process (1–2 minutes).
                  Rather than blocking the user, a vocabulary animation system
                  converts latency into perceived learning value, maintaining
                  engagement during long-running AI operations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  3. Streaming Feedback via WebSocket
                </h3>
                <p>
                  Answer evaluation streams progressively through a WebSocket
                  connection. Feedback arrives in chunks and is rendered with a
                  typing animation, making AI reasoning transparent while
                  reducing perceived wait time.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">4. Feedback Data Model</h3>
                <p>
                  Each evaluation returns structured scoring layers including
                  overall performance, grammar accuracy, and explanatory
                  comments. This structure enables both real-time guidance and
                  long-term analytics aggregation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  5. Analytics Intelligence Layer
                </h3>
                <p>
                  User performance data is aggregated across level, topic, and
                  grammar dimensions. This transforms raw AI outputs into
                  actionable learning insights and forms the foundation for
                  future personalized recommendations.
                </p>
              </div>
            </div>

            {/* OPTIONAL architecture visual */}
            <div className="relative w-full aspect-[16/8] rounded-xl overflow-hidden mt-10">
              <Image
                src="/lehr-system-1.png"
                alt="System architecture overview"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* RESEARCH */}
          <section className="mb-20">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Rapid Validation
            </h2>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              Conducted 5 guerrilla usability sessions in one day to validate:
              clarity, tolerance for AI latency, streaming feedback
              comprehension, and gesture discoverability. Insights directly
              shaped microinteractions and generation-state UX.
            </p>
          </section>

          {/* REFLECTION */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Outcome & Strategic Reflection
            </h2>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              lehr.app represents a shift from designing static interfaces to
              designing adaptive AI systems. The core challenge was not visual
              polish — but orchestrating probabilistic outputs, asynchronous
              feedback, retention mechanics, and user trust into a coherent
              pedagogical system.
            </p>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mt-6 leading-relaxed">
              This project deepened my approach to AI product design: build
              guardrails around uncertainty, design for latency, expose
              reasoning transparently, and structure feedback into meaningful
              user progress.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

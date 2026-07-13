"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import { useSectionRegistration } from "@/hooks/useSectionRegistration";
import { ProjectHighlighter } from "@/components/ProjectHighlighter";
import GrammarSkillsSection from "@/components/GrammarSkillsSection";
import TracedLine from "@/components/motion/TracedLine";

export default function LehrAppPage() {
  const overviewRef = useSectionRegistration("overview", "Overview");
  const challengeRef = useSectionRegistration("challenge", "Challenge");
  const processRef = useSectionRegistration("process", "Design Process");
  const designRef = useSectionRegistration(
    "design-decisions",
    "Design Decisions",
  );
  const aiStackRef = useSectionRegistration("ai-stack", "AI Architecture");
  const outcomesRef = useSectionRegistration("outcomes", "Outcomes");

  return (
    <div className="ss-page project-page">
      <main className="flex flex-col items-center pb-16">
        {/* Banner */}
        {/* <div className="relative w-full overflow-hidden -mt-28 sm:-mt-36">
          <img
            src="/lehr-app-banner.png"
            alt="lehr.app banner"
            className="w-full object-contain"
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
        </div> */}

        <div className="w-full sm:max-w-[73rem] pt-16 px-4 z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-10 text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent font-ss-mono text-xs uppercase tracking-widest"
          >
            <FiArrowLeft className="w-3 h-3" /> Back to portfolio
          </Link>

          <ProjectHighlighter />
          <div className="project-media p-6 sm:p-10 mb-16" style={{ background: "radial-gradient(120% 120% at 50% 20%, #CDE9D0 0%, transparent 70%)" }}>
            <img
              src="/lehr-app-banner.png"
              alt="lehr.app banner"
              className="w-full object-contain"
            />
          </div>

          <div className="border border-hairline p-6 sm:p-10">
            {/* HERO */}
            <header
              id="overview"
              ref={overviewRef as React.Ref<HTMLElement>}
              className="mb-16"
            >
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-6">
                Designing & Building an AI-Native Learning System — lehr.app
              </h1>

              <p className="text-muted max-w-3xl leading-relaxed">
                lehr.app is a mobile-first German learning platform powered by
                LLMs. The core challenge was not just generating exercises, but
                designing and engineering a system that makes probabilistic AI
                outputs reliable, understandable, and engaging for users.
              </p>

              <div className="mt-8 space-y-2 text-muted">
                <p>
                  <strong className="text-ink">Role:</strong> Co-founder — Product, UX, and Frontend
                  Architecture
                </p>
                <p>
                  <strong className="text-ink">Ownership:</strong> Led the UX strategy, designed AI
                  interaction patterns, and built the app frontend including
                  real-time feedback, async state handling, and websockets.
                </p>
                <p>
                  <strong className="text-ink">Frontend Stack:</strong> React, typescript, Tanstack
                  react query, Next, Redux, framer motion, and AI assisted
                  development (Claude)
                </p>
                <p>
                  <strong className="text-ink">Collaboration:</strong> AI backend, LLM pipelines, and
                  model logic developed by ML co-founder.
                </p>
                <p>
                  <strong className="text-ink">Duration:</strong> 3 months (0 → production)
                </p>
                <p>
                  <strong className="text-ink">Status:</strong> Live — early adopters{" "}
                  <a className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent" href="https://lehr.app">
                    visit the website {"->"}
                  </a>
                </p>
              </div>
            </header>

            <div className="grid w-full grid-cols-2 sm:grid-cols-3 gap-6 mb-10 border-t border-hairline pt-10">
              <div className="flex flex-col text-center justify-center items-center">
                <p className="font-ss-mono text-2xl text-ink leading-relaxed">
                  6-8 Sec
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  decrease in AI feedback <br></br> waiting time
                </p>
              </div>

              <div className="flex flex-col text-center justify-center items-center">
                <p className="font-ss-mono text-2xl text-ink leading-relaxed">
                  2 Min
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  decrease in time to <br></br> first exercise
                </p>
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <p className="font-ss-mono text-2xl text-ink leading-relaxed">
                  19%
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  decrease in drop-off rate <br></br> during exercise generation
                </p>
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <p className="font-ss-mono text-2xl text-ink leading-relaxed">
                  1 Min
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  reduction in perceived <br></br> latency
                </p>
              </div>

              <div className="flex flex-col text-center justify-center items-center">
                <p className="font-ss-mono text-2xl text-ink leading-relaxed">
                  +20%
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  increase in answered <br></br> questions
                </p>
              </div>
            </div>

            {/* IMPACT */}
            <section
              id="outcomes"
              ref={outcomesRef as React.Ref<HTMLElement>}
              className="mb-20 border-t border-hairline pt-12"
            >
              <h2 className="font-display text-xl sm:text-2xl text-ink mb-6">
                Product Impact
              </h2>

              <ul className="list-disc list-inside space-y-2 text-muted max-w-3xl">
                <li>
                  Cut time-to-first-exercise from{" "}
                  <strong className="text-ink">~3 min to under 1 min</strong>
                </li>
                <li>
                  <strong className="text-ink">Reduced perceived latency</strong> of 1–2 min AI
                  operations through streaming AI response
                </li>
                <li>
                  Reduced AI feedback waiting time{" "}
                  <strong className="text-ink">from 15 s to 5-9seconds</strong> through implementing a
                  real-time AI feedback using{" "}
                  <strong className="text-ink">WebSocket-based architecture</strong>
                </li>
                <li>
                  Cut drop-off rate during generation step{" "}
                  <strong className="text-ink"> by 19%</strong>
                </li>
                <li>
                  Transformed raw LLM feedback into{" "}
                  <strong className="text-ink"> structured analytics data</strong>
                </li>
              </ul>
            </section>

            {/* PROBLEM */}
            <section
              id="challenge"
              ref={challengeRef as React.Ref<HTMLElement>}
              className="mb-20 border-t border-hairline pt-12"
            >
              <h2 className="font-display text-xl sm:text-2xl text-ink mb-6">
                Framing the Core Problem
              </h2>

              <p className="text-muted max-w-3xl leading-relaxed">
                Traditional learning platforms rely on static content trees. AI
                enables infinite generation — but introduces uncertainty, latency,
                and inconsistency. The challenge was designing a system where
                users still feel control, clarity, and progression within a
                probabilistic architecture.
              </p>
            </section>

            {/* TEMPLATE SYSTEM */}
            <section
              id="process"
              ref={processRef as React.Ref<HTMLElement>}
              className="mb-20 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-hairline pt-12"
            >
              <div className="">
                <h2 className="font-display text-xl sm:text-2xl text-ink mb-6">
                  Intent-Driven Template System
                </h2>

                <p className="text-muted mb-6 leading-relaxed">
                  I designed a structured input system where users define learning
                  intent through templates (level, grammar, topic, etc.), enabling
                  more reliable AI outputs.
                </p>

                <p className="text-muted leading-relaxed">
                  To prevent invalid generations, I implemented a real-time
                  validation loop: every template change triggers a lightweight
                  LLM check, ensuring viable outputs before submission and
                  eliminating dead-end flows.
                </p>
                <p className="font-display text-ink text-xl mt-4 leading-relaxed">
                  Impact
                </p>
                <p className="text-muted leading-relaxed">
                  Cut time-to-first-exercise from ~3 min to under 1 min by giving
                  the AI better criteria to generate the exercise.
                </p>
              </div>
              <div className="">
                <div className="grid grid-cols-2">
                  <div className="relative w-full aspect-[9/16]">
                    <Image
                      src="/lehr-app-new-1.png"
                      alt="Template"
                      fill
                      className="object-contain "
                    />
                  </div>
                  <div className="relative w-full aspect-[9/16]">
                    <Image
                      src="/lehr-app-new-0.png"
                      alt="Template"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* LATENCY */}
            <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-hairline pt-12">
              <div>
                <h2 className="font-display text-xl sm:text-2xl text-ink mb-6">
                  Designing for AI Latency
                </h2>

                <p className="text-muted mb-6 leading-relaxed">
                  AI generation takes 1–1.5 minutes. I designed and implemented a
                  generation-state UI state where words streams progressively
                  instead of blocking the user. So users can see the words they
                  going to practice before starting the exercise.
                </p>

                <p className="text-muted leading-relaxed">
                  This required coordinating async backend responses with frontend
                  state management to maintain responsiveness and transform
                  waiting time into perceived learning value.
                </p>

                <p className="font-display text-ink text-xl mt-4 leading-relaxed">
                  Impact
                </p>
                <p className="text-muted leading-relaxed">
                  Cut drop-off rate during generation step by 19%
                </p>
              </div>

              <div className="relative w-full aspect-[1/1]">
                <video
                  src="/lehr-app-new-video-1.mp4"
                  controls
                  className="w-full h-[500px] object-contain"
                />
              </div>
            </section>

            {/* STREAMING */}
            <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-hairline pt-12">
              <div>
                <h2 className="font-display text-xl sm:text-2xl text-ink mb-6">
                  Streaming AI Feedback System
                </h2>

                <p className="text-muted mb-6 leading-relaxed">
                  I implemented a WebSocket-based streaming architecture for AI
                  evaluation. Instead of waiting for full responses, feedback is
                  delivered incrementally and rendered progressively.
                </p>

                <p className="text-muted leading-relaxed">
                  This required handling partial updates, synchronizing UI state,
                  and designing progressive disclosure of AI reasoning.
                </p>

                <p className="font-display text-ink text-xl mt-4 leading-relaxed">
                  Impact
                </p>
                <div className="mt-2">
                  <TracedLine
                    decision="Streaming AI responses over websockets"
                    result="−1–2 min perceived latency"
                  />
                </div>

                <h2 className="font-display text-lg sm:text-xl text-ink mt-6 mb-6">
                  Perceived ease of use
                </h2>

                <p className="text-muted mb-6 leading-relaxed">
                  I implemented a swipe based interaction in the exercise page so
                  users can navigate easily between questions. And i added a
                  button reveal answer, so users can complete the exercise, learn
                  without being blocked.
                </p>
              </div>

              <div className="relative w-full aspect-[1/1]">
                <video
                  src="/lehr-app-vew-video-2.mp4"
                  controls
                  className="w-full h-[500px] object-contain"
                />
              </div>
            </section>

            {/* ANALYTICS */}
            <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-hairline pt-12">
              <div>
                <h2 className="font-display text-xl sm:text-2xl text-ink mb-6">
                  Analytics & Intelligence Layer
                </h2>

                <p className="text-muted leading-relaxed">
                  I designed a performance system that aggregates AI outputs into
                  structured signals across level, grammar, and topic — turning
                  raw model outputs into actionable insights.
                </p>

                <p className="font-display text-ink text-xl mt-4 leading-relaxed">
                  Example
                </p>

                <p className="text-muted leading-relaxed">
                  A learner struggling with dative cases sees that pattern in
                  their stats and can request more targeted exercises.
                </p>
              </div>

              <div className="relative w-full aspect-[1/1]">
                <video
                  src="/lehr-app-new-video-3.mp4"
                  controls
                  className="w-full h-[500px] object-contain"
                />
              </div>
            </section>

            {/* ANALYTICS */}
            <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-hairline pt-12">
              <div>
                <h2 className="font-display text-xl sm:text-2xl text-ink mb-6">
                  Word Deck
                </h2>

                <p className="text-muted leading-relaxed">
                  Every word encountered during an exercise is automatically
                  collected into the user's Word Deck — no manual saving required.
                  Each word is tracked with attempt count and average score,
                  giving learners a live mastery signal rather than a static list.
                </p>

                <p className="font-display text-ink text-xl mt-4 leading-relaxed">
                  Design decisions
                </p>

                <p className="text-muted leading-relaxed">
                  I introduced a mastery ring per word — an SVG progress ring
                  colored by score band (green above 85, gold 70–84, pink below
                  70) — so learners can scan their weak spots at a glance without
                  reading numbers. Words with no attempts show an empty ring,
                  making the "not yet practiced" state visually distinct from a
                  low score.
                </p>

                <p className="font-display text-ink text-xl mt-4 leading-relaxed">
                  Template-scoped view
                </p>

                <p className="text-muted leading-relaxed">
                  The deck is also accessible directly from any template card,
                  filtered to show only the words collected from that template's
                  exercises. This connects learning intent — the topic and theme a
                  user chose — to the vocabulary it produced, making review feel
                  purposeful rather than random.
                </p>
              </div>

              <div className="relative w-full aspect-[1/1]">
                <video
                  src="/lehr-app-words-video.mp4"
                  controls
                  className="w-full h-[500px] object-contain"
                />
              </div>
            </section>

            {/* Grammar Cration Skill */}
            <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-hairline pt-12">
              <div>
                <GrammarSkillsSection />
              </div>

              <div className="relative w-full aspect-[1/1]">
                <video
                  src="/lehr-app-skills-video.mp4"
                  controls
                  className="w-full h-[500px] object-contain"
                />
              </div>
            </section>

            <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-hairline pt-12">
              <div>
                <h2 className="font-display text-xl sm:text-2xl text-ink mb-6">
                  Personalised Theming
                </h2>

                <p className="text-muted leading-relaxed">
                  The app's accent color is not a static design decision — it is a
                  user-controlled preference stored in the backend profile object
                  and applied at runtime. On every app load, the frontend reads
                  the accent_color field from the profile API response, maps it to
                  a hex value, and writes it directly to the CSS custom property{" "}
                  <code className="font-ss-mono text-sm text-ink">
                    --accent
                  </code>{" "}
                  on the document root. Every button, badge, progress bar, active
                  tab, selected chip, and mastery ring across the entire app
                  instantly reflects the user's choice — with no page reload.
                </p>

                <p className="font-display text-ink text-xl mt-4 leading-relaxed">
                  Design decisions
                </p>

                <p className="text-muted leading-relaxed">
                  I chose 8 accent colors that each carry a personality — indigo
                  as the default, teal and emerald green for calm focus, sky blue
                  for familiarity, orange for energy, pink and coral for
                  expressiveness. In light mode, each accent is darkened by 20%
                  using{" "}
                  <code className="font-ss-mono text-sm text-ink">
                    color-mix
                  </code>{" "}
                  to maintain WCAG AA contrast on white surfaces, so the theming
                  works across both dark and light modes without separate color
                  definitions.
                </p>

                <p className="font-display text-ink text-xl mt-4 leading-relaxed">
                  Instant preview
                </p>

                <p className="text-muted leading-relaxed">
                  Tapping a color swatch in the Profile page applies the new
                  accent immediately as a live preview, then persists it to the
                  backend via a debounced PUT request 600ms later. The result is a
                  snappy, tactile interaction — the app recolors in real time as
                  the user taps through options, with no loading state or
                  confirmation step needed.
                </p>
              </div>

              <div className="relative w-full aspect-[1/1]">
                <video
                  src="/lehr-app-themeing-video.mp4"
                  controls
                  className="w-full h-[500px] object-contain"
                />
              </div>
            </section>

            {/* ARCHITECTURE */}
            <section
              id="ai-stack"
              ref={aiStackRef as React.Ref<HTMLElement>}
              className="mb-20 border-t border-hairline pt-12"
            >
              <h2 className="font-display text-xl sm:text-2xl text-ink mb-6">
                System Architecture
              </h2>

              <p className="text-muted max-w-3xl mb-6 leading-relaxed">
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
            <section
              id="design-decisions"
              ref={designRef as React.Ref<HTMLElement>}
              className="mb-20 border-t border-hairline pt-12"
            >
              <h2 className="font-display text-xl sm:text-2xl text-ink mb-6">
                Validation
              </h2>

              <p className="text-muted max-w-3xl leading-relaxed">
                Conducted rapid usability testing to validate latency tolerance,
                streaming feedback comprehension, exercise quality, questions
                quality, usefulness and interaction clarity.
              </p>

              <p className="font-display text-ink text-xl mt-4 leading-relaxed">
                Most user requested features
              </p>
              <ul>
                <li className="text-muted max-w-3xl leading-relaxed">
                  - Users wanted to practice for B1/B2 writing exam, which made us
                  create a writing exercise type based on users selected theme
                </li>

                <li className="text-muted max-w-3xl leading-relaxed">
                  - Users wanted to save the new words they learned, so we will
                  add a flash cards feature for new words, and send them daily
                  notifications for new words they learn so they can remember it
                </li>
                <li className="text-muted max-w-3xl leading-relaxed">
                  - Users wanted to practice speaking, in the future we will add
                  voice prompts
                </li>
              </ul>
            </section>

            {/* REFLECTION */}
            <section className="border-t border-hairline pt-12">
              <h2 className="font-display text-xl sm:text-2xl text-ink mb-6">
                Reflection
              </h2>

              <p className="text-muted max-w-3xl leading-relaxed">
                This project reflects my approach to building AI products: not
                just designing interfaces, but engineering systems that make
                probabilistic outputs usable, reliable, and valuable.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

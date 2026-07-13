"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import { useSectionRegistration } from "@/hooks/useSectionRegistration";
import { ProjectHighlighter } from "@/components/ProjectHighlighter";
import TracedLine from "@/components/motion/TracedLine";

export default function TubicsVideoOptimizationPage() {
  const overviewRef = useSectionRegistration("overview", "Overview");
  const challengeRef = useSectionRegistration("challenge", "Challenge");
  const processRef = useSectionRegistration("process", "Research & Insight");
  const designRef = useSectionRegistration("design-decisions", "Design Decisions");
  const outcomesRef = useSectionRegistration("outcomes", "Outcomes");

  // Radial wash used on this project's media frames (matches lib/data.ts wash for tubics-video-optimization-tool)
  const mediaWash =
    "radial-gradient(120% 120% at 50% 20%, #DAD1F4 0%, transparent 70%)";

  return (
    <main className="ss-page project-page flex flex-col items-center pb-16">
      {/* HERO */}
      {/*
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
      */}

      <div className="w-full sm:max-w-[900px] px-4 pt-10 sm:pt-14">
        <Link
          href="/"
          className="inline-block mb-10 font-ss-mono text-xs uppercase tracking-widest text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
        >
          ← Back to portfolio
        </Link>

        <ProjectHighlighter />
        <div className="space-y-16 sm:space-y-20">
          {/* CONTEXT */}
          <section id="overview" ref={overviewRef as React.Ref<HTMLElement>}>
            <h1 className="font-display text-3xl sm:text-4xl text-ink mb-4">
              Driving Product Adoption in an AI-Powered SaaS Platform
            </h1>

            <p className="text-muted leading-relaxed">
              Tubics provides AI-powered SEO optimization tools for enterprise
              YouTube teams. I redesigned the core workflow to improve adoption,
              trust in AI recommendations, and overall product engagement.
            </p>

            <div className="mt-6 space-y-3 text-sm text-muted">
              <p>
                <strong className="font-ss-mono text-xs uppercase tracking-widest text-ink">
                  Company
                </strong>
                <br /> Tubics
              </p>
              <p>
                <strong className="font-ss-mono text-xs uppercase tracking-widest text-ink">
                  Role
                </strong>
                <br /> Solo Product Designer
              </p>
              <p>
                <strong className="font-ss-mono text-xs uppercase tracking-widest text-ink">
                  Scope
                </strong>
                <br /> UX strategy, research, interaction design, delivery
              </p>
            </div>
          </section>

          <div className="border-t border-hairline pt-16 grid w-full grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col text-center justify-center items-center gap-1">
              <p className="font-ss-mono text-2xl sm:text-3xl text-ink">
                +15%
              </p>
              <p className="text-sm text-muted leading-relaxed">
                average views <br /> per video
              </p>
            </div>

            <div className="flex flex-col text-center justify-center items-center gap-1">
              <p className="font-ss-mono text-2xl sm:text-3xl text-ink">
                +50%
              </p>
              <p className="text-sm text-muted leading-relaxed">
                increase in session time <br /> (engagement)
              </p>
            </div>
            <div className="flex flex-col text-center justify-center items-center gap-1">
              <p className="font-ss-mono text-2xl sm:text-3xl text-ink">
                +40%
              </p>
              <p className="text-sm text-muted leading-relaxed">
                increase in customer <br /> satisfaction
              </p>
            </div>
            <div className="flex flex-col text-center justify-center items-center gap-1">
              <p className="font-ss-mono text-2xl sm:text-3xl text-ink">
                -34%
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Reduced Completion <br /> time
              </p>
            </div>
          </div>

          {/* IMPACT FIRST */}
          <section
            id="outcomes"
            ref={outcomesRef as React.Ref<HTMLElement>}
            className="border-t border-hairline pt-16"
          >
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-4">
              Impact
            </h2>

            <div className="space-y-3 mb-8">
              <TracedLine
                decision="Redesigned the video optimization workflow"
                result="+50% session time"
              />
              <TracedLine
                decision="Streamlined multi-step completion flow"
                result="−34% completion time"
              />
              <TracedLine
                decision="Iterated on feedback across releases"
                result="CSAT 4 → 8/10"
              />
            </div>

            <ul className="space-y-2 text-muted">
              <li>• Became the most-used workflow in the platform</li>
              <li>• Improved perceived quality of AI recommendations</li>
              <li>• Reduced reliance on external SEO tools</li>
              <li>• Enabled collaboration for enterprise teams</li>
            </ul>
          </section>

          {/* SYSTEM PROBLEM */}
          <section
            id="challenge"
            ref={challengeRef as React.Ref<HTMLElement>}
            className="border-t border-hairline pt-16"
          >
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-4">
              Problem
            </h2>

            <p className="text-muted leading-relaxed mb-4">
              The issue wasn't just UI — it was a mismatch between how the AI
              system worked and how users expected to interact with it.
            </p>

            <ul className="space-y-2 text-muted">
              <li>• Recommendations felt generic → low trust</li>
              <li>• Workflow required too many manual steps</li>
              <li>• No clear guidance → users skipped critical steps</li>
              <li className="text-ink font-medium">
                • The 3-step process overwhelmed the users
              </li>
            </ul>
            <div
              className="project-media relative w-full aspect-[16/9] mt-6 p-4 sm:p-6"
              style={{ background: mediaWash }}
            >
              <Image
                src="/tubics-video-1.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* INSIGHTS */}
          <section
            id="process"
            ref={processRef as React.Ref<HTMLElement>}
            className="border-t border-hairline pt-16"
          >
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-4">
              Key Insight
            </h2>

            <p className="text-muted leading-relaxed">
              Users didn't trust the AI because they didn't understand how to
              get good results. The problem wasn't the algorithm — it was the
              lack of structured guidance in the UX.
            </p>
          </section>

          {/* DECISIONS */}
          <section
            id="design-decisions"
            ref={designRef as React.Ref<HTMLElement>}
            className="border-t border-hairline pt-16"
          >
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-4">
              Key Product Decisions (Before & After)
            </h2>
            <h3 className="font-display text-lg sm:text-xl text-ink mb-2">
              1. Replaced the 3-step process with a one-page-document
            </h3>
            <p className="text-muted mb-3">
              <strong className="text-ink">Before:</strong> 3 Step wizard
              (overwhelming)
              <br />
              <strong className="text-ink">After:</strong> one-page free-form
              giving the user full control over the optimization Process
            </p>

            <p className="text-sm text-muted mb-3">
              → Result: Reduced the perceived length and complexity of the form
              <br />
              <br />
              <strong className="text-ink">
                80% of the interviewed customers preferred the 1-page approach
                over the steps wizard
              </strong>
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <div
                className="project-media relative w-full aspect-[16/9] p-3 sm:p-4"
                style={{ background: mediaWash }}
              >
                <Image
                  src="/tubics-before-0.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div
                className="project-media relative w-full aspect-[16/9] p-3 sm:p-4"
                style={{ background: mediaWash }}
              >
                <Image
                  src="/tubics-before-1.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div
                className="project-media relative w-full aspect-[16/9] p-3 sm:p-4"
                style={{ background: mediaWash }}
              >
                <Image
                  src="/tubics-before-2.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div
              className="project-media relative w-full aspect-[16/9] p-4 sm:p-6"
              style={{ background: mediaWash }}
            >
              <Image
                src="/tubics-video-optimization-banner.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-8 mt-8">
              <div>
                <h3 className="font-display text-lg sm:text-xl text-ink mb-2">
                  2. Force structured input before AI recommendations
                </h3>

                <p className="text-muted mb-3">
                  <strong className="text-ink">Before:</strong> Search term
                  step was part of the process not a prerequisite
                  <br />
                  <strong className="text-ink">After:</strong> Search terms is
                  a prerequisite to get AI recommendations. By providing a
                  search term, the AI can understand the intent and give the
                  customers better recommendation.
                </p>

                <p className="text-sm text-muted mb-3">
                  → Result: Improved AI output quality and reduced failed
                  optimization attempts.
                  <br />→ Result: Customers can now see the highest ranking
                  relevant keywords to optimize their video metadata for.
                  <br />→ Result: +15% average views per video
                </p>

                <div
                  className="project-media relative aspect-[16/9] p-4 sm:p-6"
                  style={{ background: mediaWash }}
                >
                  <Image
                    src="/tubics-video-2.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg sm:text-xl text-ink mb-2">
                  3. Turn AI recommendations into actionable steps
                </h3>

                <p className="text-muted mb-3">
                  <strong className="text-ink">Before:</strong> generic
                  recommendations
                  <br />
                  <strong className="text-ink">After:</strong> contextual,
                  explainable and actionable recommendation cards feedback
                  inspired by Grammarly-style interaction patterns.
                </p>

                <p className="text-sm text-muted mb-3">
                  → Result: Increased trust and clarity in AI recommendations
                  <br />→ Result: customers don't need to think about the
                  content of the metadata
                  <br />→ Result: Reduced Completion time by 34%
                </p>
                <div className="grid gap-4">
                  <div
                    className="project-media relative aspect-[16/9] p-4 sm:p-6"
                    style={{ background: mediaWash }}
                  >
                    <Image
                      src="/tubics-before-1.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div
                    className="project-media relative aspect-[16/9] p-4 sm:p-6"
                    style={{ background: mediaWash }}
                  >
                    <Image
                      src="/tubics-video-3.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div
                    className="project-media relative aspect-[16/9] p-4 sm:p-6"
                    style={{ background: mediaWash }}
                  >
                    <Image
                      src="/tubics-8.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl text-ink mb-2">
                  4. Better thumbnail recommendation to improve click-though
                  rate
                </h3>

                <p className="text-muted mb-3">
                  <strong className="text-ink">Before:</strong> generic
                  thumbnail step with a button to upload a new thumbnail (no
                  recommendation provided)
                  <br />
                  <strong className="text-ink">After:</strong> color-coded
                  recommendations to improve thumbnail. and a button to design
                  a Thumbnail on Canva.
                </p>

                <p className="text-sm text-muted mb-3">
                  → Result: 10% more users uploaded thumbnails through tubics
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div
                    className="project-media relative aspect-[16/9] p-4 sm:p-6"
                    style={{ background: mediaWash }}
                  >
                    <Image
                      src="/tubics-before-2.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div
                    className="project-media relative aspect-[16/9] p-4 sm:p-6"
                    style={{ background: mediaWash }}
                  >
                    <Image
                      src="/tubics-7.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ITERATION */}
          <section className="border-t border-hairline pt-16">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-4">
              Iteration & Expansion
            </h2>

            <p className="text-muted mb-6 leading-relaxed">
              Based on user feedback, I expanded the workflow to support real
              enterprise use cases.
            </p>

            <ul className="space-y-2 text-muted mb-6">
              <li>• Added draft sharing for team collaboration</li>
              <li>
                • Integrated keyword research directly into workflow, so users
                dont need to leave the product and search for keywords on an
                external keyword research tool
              </li>
              <li>
                • Introduced reusable templates to reduce repetitive work, so
                users can save time
              </li>
            </ul>

            <p className="text-sm text-muted mb-3">
              → Result: I watched session recordings on Hotjar, noticed that
              20% of the customers are using the keywords research and 10% of
              the users are using the templates feature.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div
                className="project-media relative aspect-square p-4 sm:p-6"
                style={{ background: mediaWash }}
              >
                <Image
                  src="/tubics-video-6.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              <div
                className="project-media relative aspect-square p-4 sm:p-6"
                style={{ background: mediaWash }}
              >
                <Image
                  src="/tubics-video-7.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* PRODUCT THINKING */}
          <section className="border-t border-hairline pt-16">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-4">
              Product Thinking
            </h2>

            <ul className="space-y-2 text-muted">
              <li>• Balanced flexibility vs guidance in AI workflows</li>
              <li>• Designed for both novice and expert users</li>
              <li>• Reduced cognitive load while increasing output quality</li>
              <li>• Shifted product from tool → guided system</li>
            </ul>
          </section>

          {/* OUTCOME */}
          <section className="border-t border-hairline pt-16">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-4">
              Outcome
            </h2>

            <p className="text-muted leading-relaxed">
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

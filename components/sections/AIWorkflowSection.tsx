"use client";

import { useRef } from "react";

export default function AIWorkflowSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id="ai-workflow"
      className="relative w-full max-w-[90%] mx-auto py-16 sm:py-20"
    >
      <style>{`
        @keyframes rise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes spin6 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .rise-1 { animation: rise 0.55s ease forwards 0.1s;  opacity: 0; }
        .rise-2 { animation: rise 0.55s ease forwards 0.25s; opacity: 0; }
        .rise-3 { animation: rise 0.55s ease forwards 0.3s;  opacity: 0; }
        .rise-4 { animation: rise 0.55s ease forwards 0.35s; opacity: 0; }
        .cursor-blink { animation: blink 1s step-end infinite; }
        .spin-icon { animation: spin6 8s linear infinite; display: inline-block; }
      `}</style>

      {/* ── Header ── */}
      <div className="mb-10 items-center text-center rise-1">
        {/* <p className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-400 dark:text-zinc-500 mb-2">
          How I work with AI
        </p> */}
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">
          How I work with AI.{" "}
          {/* <span className="text-zinc-500 dark:text-zinc-400">
            Every step intentional.
          </span> */}
        </h2>
      </div>

      {/* ── 1. Loop Card (full width) ── */}
      <div
        className="rise-2 rounded-3xl overflow-hidden mb-5"
        style={{ background: "#EEEDFE" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* SVG side */}
          <div className="flex items-center justify-center p-8">
            <svg
              viewBox="0 0 430 258"
              className="w-full max-w-[420px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Path A→B bottom */}
                <path
                  id="pathAB"
                  d="M 90 200 C 140 230, 290 230, 340 200"
                  fill="none"
                />
                {/* Path B→C right */}
                <path
                  id="pathBC"
                  d="M 340 200 C 370 170, 300 100, 215 55"
                  fill="none"
                />
                {/* Path C→A left */}
                <path
                  id="pathCA"
                  d="M 215 55 C 130 100, 60 170, 90 200"
                  fill="none"
                />
              </defs>

              {/* Decorative concentric rings behind center */}
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 215 129"
                  to="-360 215 129"
                  dur="18s"
                  repeatCount="indefinite"
                />
                <circle
                  cx="215"
                  cy="129"
                  r="58"
                  fill="none"
                  stroke="#AFA9EC"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  opacity="0.5"
                />
              </g>
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 215 129"
                  to="360 215 129"
                  dur="26s"
                  repeatCount="indefinite"
                />
                <circle
                  cx="215"
                  cy="129"
                  r="74"
                  fill="none"
                  stroke="#AFA9EC"
                  strokeWidth="1"
                  strokeDasharray="3 8"
                  opacity="0.35"
                />
              </g>

              {/* Center metric circle */}
              <circle
                cx="215"
                cy="129"
                r="44"
                fill="white"
                stroke="#AFA9EC"
                strokeWidth="1.5"
              />
              <text
                x="215"
                y="125"
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fill="#534AB7"
              >
                4 weeks ↓
              </text>
              <text
                x="215"
                y="141"
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fill="#534AB7"
              >
                10 days
              </text>

              {/* Arrows A→B */}
              <path
                d="M 90 200 C 140 230, 290 230, 340 200"
                fill="none"
                stroke="#7F77DD"
                strokeWidth="1.8"
                strokeDasharray="7 5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-60"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </path>
              {/* Arrow B→C */}
              <path
                d="M 340 200 C 370 170, 300 100, 215 55"
                fill="none"
                stroke="#7F77DD"
                strokeWidth="1.8"
                strokeDasharray="7 5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-60"
                  dur="1.8s"
                  begin="0.6s"
                  repeatCount="indefinite"
                />
              </path>
              {/* Arrow C→A */}
              <path
                d="M 215 55 C 130 100, 60 170, 90 200"
                fill="none"
                stroke="#7F77DD"
                strokeWidth="1.8"
                strokeDasharray="7 5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-60"
                  dur="1.8s"
                  begin="1.2s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Travelling dot A→B */}
              <circle r="5" fill="#534AB7">
                <animateMotion dur="1.8s" repeatCount="indefinite" begin="0s">
                  <mpath href="#pathAB" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.9;1"
                  dur="1.8s"
                  repeatCount="indefinite"
                  begin="0s"
                />
              </circle>
              {/* Travelling dot B→C */}
              <circle r="5" fill="#534AB7">
                <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.6s">
                  <mpath href="#pathBC" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.9;1"
                  dur="1.8s"
                  repeatCount="indefinite"
                  begin="0.6s"
                />
              </circle>
              {/* Travelling dot C→A */}
              <circle r="5" fill="#534AB7">
                <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.2s">
                  <mpath href="#pathCA" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.9;1"
                  dur="1.8s"
                  repeatCount="indefinite"
                  begin="1.2s"
                />
              </circle>

              {/* Node A — bottom-left "Figma Make" PROTOTYPE */}
              <rect
                x="30"
                y="172"
                width="112"
                height="52"
                rx="8"
                fill="white"
                stroke="#7F77DD"
                strokeWidth="1.5"
              />
              <text
                x="86"
                y="193"
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                fill="#534AB7"
                letterSpacing="1"
              >
                PROTOTYPE
              </text>
              <text
                x="86"
                y="207"
                textAnchor="middle"
                fontSize="8.5"
                fill="#7F77DD"
              >
                Figma Make
              </text>
              <text
                x="86"
                y="219"
                textAnchor="middle"
                fontSize="7.5"
                fill="#9896C8"
              >
                export → .md
              </text>

              {/* Node B — bottom-right "Figma Make" RE-IMPLEMENT */}
              <rect
                x="286"
                y="172"
                width="116"
                height="52"
                rx="8"
                fill="white"
                stroke="#7F77DD"
                strokeWidth="1.5"
              />
              <text
                x="344"
                y="193"
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                fill="#534AB7"
                letterSpacing="1"
              >
                RE-IMPLEMENT
              </text>
              <text
                x="344"
                y="207"
                textAnchor="middle"
                fontSize="8.5"
                fill="#7F77DD"
              >
                Figma Make
              </text>
              <text
                x="344"
                y="219"
                textAnchor="middle"
                fontSize="7.5"
                fill="#9896C8"
              >
                refined design
              </text>

              {/* Node C — top-center "Claude Artifacts" ITERATE */}
              <rect
                x="158"
                y="14"
                width="114"
                height="52"
                rx="8"
                fill="#7F77DD"
                stroke="#534AB7"
                strokeWidth="1.5"
              />
              <text
                x="215"
                y="35"
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                fill="white"
                letterSpacing="1"
              >
                ITERATE
              </text>
              <text
                x="215"
                y="49"
                textAnchor="middle"
                fontSize="8.5"
                fill="#E0DEFF"
              >
                Claude Artifacts
              </text>
              <text
                x="215"
                y="61"
                textAnchor="middle"
                fontSize="7.5"
                fill="#C4BFFF"
              >
                2–5 min rounds
              </text>
            </svg>
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center gap-5 p-8 md:pl-4">
            <p
              className="text-xs font-bold tracking-[0.15em] uppercase"
              style={{ color: "#534AB7" }}
            >
              The design loop
            </p>
            <p
              className="text-sm text-zinc-600 leading-relaxed"
              style={{ color: "#3d3a6b" }}
            >
              Prototype in Figma Make → export structured markdown docs →
              iterate conversationally in Claude Artifacts → re-implement the
              refined design back in Figma Make.
            </p>
            {/* Pill card */}
            <div className="inline-flex flex-col gap-0.5 bg-white rounded-2xl px-5 py-4 self-start shadow-sm border border-[#D4D0F7]">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                Cycle compression
              </span>
              <span className="text-xl font-bold" style={{ color: "#534AB7" }}>
                4w → 10d
              </span>
              <span className="text-xs text-zinc-500">
                without losing fidelity
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Middle Row ── */}
      <div className="rise-3 grid grid-cols-1 md:grid-cols-5 gap-5 mb-5">
        {/* Tool Ecosystem — 3 cols */}
        <div
          className="md:col-span-3 rounded-3xl overflow-hidden p-7 flex flex-col gap-5"
          style={{ background: "#E1F5EE" }}
        >
          <svg
            viewBox="0 0 300 195"
            className="w-full max-w-[280px] mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path id="lineN" d="M 150 97 L 150 28" fill="none" />
              <path id="lineE" d="M 150 97 L 248 97" fill="none" />
              <path id="lineS" d="M 150 97 L 150 168" fill="none" />
              <path id="lineW" d="M 150 97 L 52 97" fill="none" />
            </defs>

            {/* Lines */}
            {["lineN", "lineE", "lineS", "lineW"].map((id) => (
              <path
                key={id}
                d={
                  id === "lineN"
                    ? "M150 97 L150 28"
                    : id === "lineE"
                      ? "M150 97 L248 97"
                      : id === "lineS"
                        ? "M150 97 L150 168"
                        : "M150 97 L52 97"
                }
                fill="none"
                stroke="#5DCAA5"
                strokeWidth="1.5"
                strokeDasharray="5 4"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-36"
                  dur="1.4s"
                  repeatCount="indefinite"
                />
              </path>
            ))}

            {/* Traveling dots */}
            <circle r="4" fill="#1D9E75">
              <animateMotion dur="1.4s" repeatCount="indefinite" begin="0s">
                <mpath href="#lineN" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0s"
              />
            </circle>
            <circle r="4" fill="#1D9E75">
              <animateMotion dur="1.4s" repeatCount="indefinite" begin="0.35s">
                <mpath href="#lineE" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0.35s"
              />
            </circle>
            <circle r="4" fill="#1D9E75">
              <animateMotion dur="1.4s" repeatCount="indefinite" begin="0.7s">
                <mpath href="#lineS" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0.7s"
              />
            </circle>
            <circle r="4" fill="#1D9E75">
              <animateMotion dur="1.4s" repeatCount="indefinite" begin="1.05s">
                <mpath href="#lineW" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
                dur="1.4s"
                repeatCount="indefinite"
                begin="1.05s"
              />
            </circle>

            {/* Center Claude ellipse */}
            <ellipse cx="150" cy="97" rx="32" ry="22" fill="#1D9E75" />
            <text
              x="150"
              y="101"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="white"
            >
              Claude
            </text>

            {/* Satellite nodes */}
            <rect
              x="116"
              y="10"
              width="68"
              height="26"
              rx="7"
              fill="white"
              stroke="#5DCAA5"
              strokeWidth="1.2"
            />
            <text
              x="150"
              y="27"
              textAnchor="middle"
              fontSize="9.5"
              fontWeight="600"
              fill="#1D6B53"
            >
              Figma
            </text>

            <rect
              x="210"
              y="83"
              width="68"
              height="26"
              rx="7"
              fill="white"
              stroke="#5DCAA5"
              strokeWidth="1.2"
            />
            <text
              x="244"
              y="100"
              textAnchor="middle"
              fontSize="9.5"
              fontWeight="600"
              fill="#1D6B53"
            >
              Notion
            </text>

            <rect
              x="116"
              y="158"
              width="68"
              height="26"
              rx="7"
              fill="white"
              stroke="#5DCAA5"
              strokeWidth="1.2"
            />
            <text
              x="150"
              y="175"
              textAnchor="middle"
              fontSize="9.5"
              fontWeight="600"
              fill="#1D6B53"
            >
              Mobbin
            </text>

            <rect
              x="22"
              y="83"
              width="78"
              height="26"
              rx="7"
              fill="white"
              stroke="#5DCAA5"
              strokeWidth="1.2"
            />
            <text
              x="61"
              y="100"
              textAnchor="middle"
              fontSize="8.5"
              fontWeight="600"
              fill="#1D6B53"
            >
              zero switching
            </text>
          </svg>

          <div>
            <h3 className="text-base font-semibold text-zinc-800 mb-1">
              MCP integrations — Figma, Notion, Mobbin
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Connect Claude directly to Figma to generate screens, use Notion
              MCP to edit docs, and Mobbin for UI inspiration — without leaving
              the workflow.
            </p>
          </div>
        </div>

        {/* Outcomes — 2 cols */}
        <div className="md:col-span-2 rounded-3xl p-7 flex flex-col justify-center gap-4 bg-zinc-50 dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08]">
          <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
            Outcomes
          </h3>
          {[
            { value: "3", label: "tools connected via MCP" },
            { value: "0", label: "context switches" },
            { value: "2–5", label: "min per iteration round" },
          ].map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-4 bg-white dark:bg-zinc-800 rounded-2xl px-5 py-4 border border-black/[0.05] dark:border-white/[0.07]"
            >
              <span className="text-2xl font-bold text-zinc-900 dark:text-white min-w-[3rem]">
                {m.value}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. Bottom Row ── */}
      <div className="rise-4 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Cursor + Code card */}
        <div className="rounded-3xl overflow-hidden p-7 flex flex-col gap-5 bg-zinc-50 dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08]">
          {/* Terminal window */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ background: "#1e1e2e" }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: "#ff5f57" }}
              />
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: "#febc2e" }}
              />
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: "#28c840" }}
              />
              <span className="ml-3 text-xs" style={{ color: "#6c6c8a" }}>
                event-masters/api/stripe.ts
              </span>
            </div>
            <pre className="p-5 text-xs leading-6 overflow-x-auto font-mono">
              <span style={{ color: "#7F77DD" }}>import</span>
              <span style={{ color: "#cdd6f4" }}> {"{ stripe }"} </span>
              <span style={{ color: "#7F77DD" }}>from</span>
              <span style={{ color: "#FAC775" }}>
                {" "}
                &apos;@/lib/stripe&apos;
              </span>
              <span style={{ color: "#cdd6f4" }}>{";"}</span>
              {"\n"}
              <span style={{ color: "#7F77DD" }}>import</span>
              <span style={{ color: "#cdd6f4" }}> {"{ auth }"} </span>
              <span style={{ color: "#7F77DD" }}>from</span>
              <span style={{ color: "#FAC775" }}>
                {" "}
                &apos;@clerk/nextjs/server&apos;
              </span>
              <span style={{ color: "#cdd6f4" }}>{";"}</span>
              {"\n"}
              <span style={{ color: "#6c6c8a" }}>
                {"//"} ↑ cursor scaffolded · I wrote below ↓
              </span>
              {"\n"}
              <span style={{ color: "#7F77DD" }}>export async function</span>
              <span style={{ color: "#FAC775" }}> createCheckout</span>
              <span style={{ color: "#cdd6f4" }}>(</span>
              <span style={{ color: "#5DCAA5" }}>priceId</span>
              <span style={{ color: "#cdd6f4" }}>: </span>
              <span style={{ color: "#7F77DD" }}>string</span>
              <span style={{ color: "#cdd6f4" }}>) {"{"}</span>
              {"\n"}
              <span style={{ color: "#cdd6f4" }}>{"  "}</span>
              <span style={{ color: "#7F77DD" }}>const</span>
              <span style={{ color: "#cdd6f4" }}> {"{ userId } = "}</span>
              <span style={{ color: "#7F77DD" }}>await</span>
              <span style={{ color: "#5DCAA5" }}> auth</span>
              <span style={{ color: "#cdd6f4" }}>();</span>
              {"\n"}
              <span style={{ color: "#cdd6f4" }}>{"  "}</span>
              <span style={{ color: "#7F77DD" }}>if </span>
              <span style={{ color: "#cdd6f4" }}>(!userId) </span>
              <span style={{ color: "#7F77DD" }}>throw new </span>
              <span style={{ color: "#5DCAA5" }}>Error</span>
              <span style={{ color: "#FAC775" }}>(</span>
              <span style={{ color: "#FAC775" }}>&apos;Unauthorized&apos;</span>
              <span style={{ color: "#cdd6f4" }}>);</span>
              {"\n"}
              <span style={{ color: "#cdd6f4" }}>{"  "}</span>
              <span style={{ color: "#7F77DD" }}>return</span>
              <span style={{ color: "#5DCAA5" }}> stripe</span>
              <span style={{ color: "#cdd6f4" }}>.checkout.sessions.</span>
              <span style={{ color: "#FAC775" }}>create</span>
              <span style={{ color: "#cdd6f4" }}>{"({ priceId })"}</span>
              <span className="cursor-blink" style={{ color: "#7F77DD" }}>
                ▋
              </span>
            </pre>
          </div>
          <div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-1">
              Cursor + manual code
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Scaffold with Cursor, intervene where v0 doesn&apos;t understand
              the backend. Shipped Event Masters and Lehr.app solo — Clerk auth,
              Stripe, Airtable, OneSignal PWA.
            </p>
          </div>
        </div>

        {/* AI Critique card */}
        <div className="rounded-3xl overflow-hidden p-7 flex flex-col gap-5 bg-zinc-50 dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08]">
          {/* Wireframe mockup */}
          <div className="flex items-center justify-center gap-4">
            {/* Screen A */}
            <div
              className="flex-1 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700"
              style={{ background: "#f4f4f6" }}
            >
              <div className="h-2.5 bg-zinc-300/60 m-3 rounded" />
              <div className="mx-3 mb-3 space-y-1.5">
                <div className="h-1.5 bg-zinc-300/80 rounded w-4/5" />
                <div className="h-1.5 bg-zinc-300/60 rounded w-3/5" />
                <div className="h-6 bg-zinc-300/50 rounded mt-2" />
                <div className="h-1.5 bg-zinc-300/60 rounded w-2/3" />
                <div className="h-1.5 bg-zinc-300/50 rounded w-1/2" />
              </div>
            </div>

            {/* Spinning ✦ divider */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#EEEDFE" }}
            >
              <span className="spin-icon text-sm" style={{ color: "#7F77DD" }}>
                ✦
              </span>
            </div>

            {/* Screen B */}
            <div
              className="flex-1 rounded-xl overflow-hidden border border-[#5DCAA5]/40"
              style={{ background: "#edfaf5" }}
            >
              <div
                className="h-2.5 rounded m-3"
                style={{ background: "#5DCAA5", opacity: 0.6 }}
              />
              <div className="mx-3 mb-3 space-y-1.5">
                <div
                  className="h-1.5 rounded w-4/5"
                  style={{ background: "#5DCAA5", opacity: 0.5 }}
                />
                <div
                  className="h-1.5 rounded w-3/5"
                  style={{ background: "#5DCAA5", opacity: 0.35 }}
                />
                <div
                  className="h-6 rounded mt-2"
                  style={{ background: "#5DCAA5", opacity: 0.25 }}
                />
                <div
                  className="h-1.5 rounded w-2/3"
                  style={{ background: "#5DCAA5", opacity: 0.35 }}
                />
                <div
                  className="h-1.5 rounded w-1/2"
                  style={{ background: "#5DCAA5", opacity: 0.25 }}
                />
              </div>
            </div>
          </div>

          {/* Variant tags */}
          <div className="flex gap-2 flex-wrap">
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "#EEEDFE", color: "#534AB7" }}
            >
              variant A
            </span>
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "#E1F5EE", color: "#1D6B53" }}
            >
              variant B
            </span>
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "#FEF3E2", color: "#92510B" }}
            >
              variant C
            </span>
          </div>

          <div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-1">
              AI-assisted design critique
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Attach the screen + business context, ask for 2–3 variants or a
              critical review. Issues surface before they reach stakeholders —
              fewer revision rounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

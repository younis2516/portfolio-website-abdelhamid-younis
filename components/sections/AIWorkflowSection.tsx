"use client";

import Section from "@/components/Section";
import TracedLine from "@/components/motion/TracedLine";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const OUTCOMES = [
  { value: "3", label: "tools connected via MCP" },
  { value: "0", label: "context switches" },
  { value: "2–5 min", label: "per iteration round" },
];

export default function AIWorkflowSection() {
  return (
    <Section id="ai-workflow" index="02" title="How I work with AI">
      <Stagger className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-12">
        <StaggerItem>
          <p className="font-ss-mono text-xs uppercase tracking-widest text-muted mb-4">
            The design loop
          </p>
          <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
            Prototype in Figma Make → export structured markdown docs → iterate
            conversationally in Claude Artifacts → re-implement the refined
            design back in Figma Make.
          </p>
          <TracedLine
            decision="Moved iteration from handoff cycles to conversational rounds"
            result="4 weeks → 10 days"
          />
        </StaggerItem>

        <StaggerItem>
          <p className="font-ss-mono text-xs uppercase tracking-widest text-muted mb-4">
            MCP integrations — Figma, Notion, Mobbin
          </p>
          <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
            Connect Claude directly to Figma to generate screens, use Notion
            MCP to edit docs, and Mobbin for UI inspiration — without leaving
            the workflow.
          </p>
          <ul className="divide-y divide-hairline border-t border-hairline">
            {OUTCOMES.map((o) => (
              <li key={o.label} className="flex items-baseline gap-4 py-3">
                <span className="font-ss-mono text-lg text-ink min-w-[4rem]">
                  {o.value}
                </span>
                <span className="text-sm text-muted">{o.label}</span>
              </li>
            ))}
          </ul>
        </StaggerItem>

        <StaggerItem className="border-t border-hairline pt-10">
          <h3 className="font-display text-xl text-ink mb-3">
            Cursor + manual code
          </h3>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Scaffold with Cursor, intervene where v0 doesn&apos;t understand
            the backend. Shipped Event Masters and Lehr.app solo — Clerk auth,
            Stripe, Airtable, OneSignal PWA.
          </p>
        </StaggerItem>

        <StaggerItem className="border-t border-hairline pt-10">
          <h3 className="font-display text-xl text-ink mb-3">
            AI-assisted design critique
          </h3>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Attach the screen + business context, ask for 2–3 variants or a
            critical review. Issues surface before they reach stakeholders —
            fewer revision rounds.
          </p>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}

import Anthropic from "@anthropic-ai/sdk";
import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { CVDocument } from "@/components/cv/CVDocument";
import { cvData } from "@/lib/cvData";
import type { CvData } from "@/lib/cvData";
import { isRateLimited, rateLimitResponse } from "@/lib/rateLimit";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const VALID_FOCUS = new Set([
  "enterprise",
  "startup",
  "engineering",
  "design",
  "default",
]);

type VisitorProfile = {
  role: string;
  companyTypes: string[];
  companySize: string;
};

// ─── Tailoring rules per focus ─────────────────────────────────────────────

function getTailoringRules(focus: string): string {
  const rules: Record<string, string> = {
    enterprise: `
- Rewrite tagline to emphasise scale, stakeholder management, millions of users, operating across markets.
- Experience order: rewe, tubics, hotelkit, wuzzuf.
- REWE: include 4 bullets (emphasised role).
- Tubics: include 2 bullets.
- Hotelkit: include 1 bullet only (the one about 1200 hotels globally).
- WUZZUF: include 1 bullet only.
- Projects: include lehr-app only, with 2 bullets.
- Skills: list design skills first, then engineering.`,

    startup: `
- Rewrite tagline to emphasise speed, full ownership, shipping without a big team, and full-stack capability.
- Experience order: tubics, rewe, wuzzuf, hotelkit.
- Tubics: include all 3 bullets (emphasised role — max allowed is 4).
- REWE: include 2 bullets.
- Hotelkit: include 1 bullet only.
- WUZZUF: include 1 bullet only.
- Projects: include lehr-app with all 3 bullets, and suplyd with 1 bullet. Show both.
- Skills: list engineering skills first, then design.`,

    engineering: `
- Rewrite tagline to lead with engineering depth, React/TypeScript, AI workflow, and shipped production code.
- Experience order: rewe, tubics, hotelkit, wuzzuf.
- REWE: include 2 bullets (the ones most relevant to technical delivery).
- Tubics: include 2 bullets (the design-system-in-production one and the engagement metric).
- Hotelkit: include 1 bullet.
- WUZZUF: include 1 bullet.
- Projects: include lehr-app with all 3 bullets (emphasised), and suplyd with 1 bullet.
- Skills: list engineering skills first, then design.`,

    design: `
- Rewrite tagline to emphasise craft, research methodology, systems thinking, and cross-functional collaboration.
- Experience order: rewe, tubics, hotelkit, wuzzuf.
- REWE: include 4 bullets (emphasised role).
- Tubics: include 3 bullets (all three — max is 4 for emphasised).
- Hotelkit: include 1 bullet only.
- WUZZUF: include 1 bullet only.
- Projects: include lehr-app with 1 bullet only (the co-founder ownership one).
- Skills: list design skills first, then engineering.`,

    default: `
- Keep tagline balanced, covering both design and engineering depth.
- Use the standard order from the cvData: rewe, tubics, hotelkit, wuzzuf.
- REWE: include 3 bullets (most impactful).
- Tubics: include 2 bullets.
- Hotelkit: include 1 bullet.
- WUZZUF: include 1 bullet.
- Projects: include lehr-app with 2 bullets only.
- Skills: keep existing order (design first, then engineering).`,
  };

  return rules[focus] ?? rules["default"];
}

// ─── API Route ─────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  if (await isRateLimited(req)) return rateLimitResponse();

  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response("API key not configured", { status: 500 });
  }

  let body: { focus?: string; visitorProfile?: VisitorProfile };
  try {
    body = (await req.json()) as { focus?: string; visitorProfile?: VisitorProfile };
  } catch {
    return new Response("Invalid request body", { status: 400 });
  }

  const focus = VALID_FOCUS.has(body.focus ?? "") ? (body.focus as string) : "default";
  const visitorProfile = body.visitorProfile ?? null;

  // ── Call Claude to produce tailored CV JSON ───────────────────────────
  let tailoredData: CvData;
  try {
    const tailoringResponse = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      temperature: 0.2 as never, // the SDK types don't expose temperature but it is a valid param
      system: `You are a CV tailoring assistant. Given CV data and tailoring instructions, return a tailored version of the CV as valid JSON.

OUTPUT RULES:
- Return ONLY valid JSON. No markdown, no code fences, no explanation.
- Your entire response must be a single JSON object starting with { and ending with }.
- The JSON must match exactly the same TypeScript structure as the input CV data.
- Never add new bullets or new entries. Only select from existing bullets, reorder arrays, and rewrite the tagline field.
- The "boldTerms" array on each entry must remain unchanged — never modify it.

PAGE FIT CONSTRAINTS:
- Emphasised roles: max 4 bullets
- Standard roles: max 2 bullets
- Projects: max 2 bullets each, show max 2 projects total (unless engineering focus allows lehr-app + suplyd)
- Follow the bullet count rules in the tailoring instructions precisely.`,
      messages: [
        {
          role: "user",
          content: `FOCUS: ${focus}
VISITOR PROFILE: ${JSON.stringify(visitorProfile ?? "not available")}

TAILORING RULES FOR "${focus}":
${getTailoringRules(focus)}

CV DATA TO TAILOR (return the same structure with your changes applied):
${JSON.stringify(cvData, null, 2)}`,
        },
      ],
    });

    const raw = tailoringResponse.content[0];
    if (raw.type !== "text") {
      throw new Error("Unexpected response type from Claude");
    }

    // Strip any accidental markdown fences Claude might have added
    const jsonText = raw.text
      .trim()
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/, "")
      .trim();

    tailoredData = JSON.parse(jsonText) as CvData;
  } catch (err) {
    console.error("[generate-cv] Tailoring failed:", err);
    // Fall back to the base cvData so we always return a PDF
    tailoredData = cvData;
  }

  // ── Render PDF ───────────────────────────────────────────────────────
  try {
    const pdfBuffer = await renderToBuffer(
      <CVDocument data={tailoredData} />
    );

    return new Response(pdfBuffer as unknown as BodyInit, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Abdelhamid-Younis-CV.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[generate-cv] PDF rendering failed:", err);
    return new Response("PDF generation failed", { status: 500 });
  }
}

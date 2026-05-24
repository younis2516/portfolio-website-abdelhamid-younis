import Anthropic from "@anthropic-ai/sdk";
import { isRateLimited, rateLimitResponse } from "@/lib/rateLimit";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Allowlist — exact strings from OnboardingModal.tsx ROLES / COMPANY_TYPES / COMPANY_SIZES
const ALLOWED_ROLES = new Set([
  "Recruiter / Talent Acquisition",
  "Hiring Manager",
  "Founder / Co-Founder",
  "Product Lead",
  "Design Lead",
  "Engineer / CTO",
  "Other",
]);

const ALLOWED_COMPANY_TYPES = new Set([
  "B2C (consumer-facing products)",
  "B2B / SaaS",
  "Enterprise",
  "Startup / Scale-up",
  "Agency",
  "Retail / E-commerce",
]);

const ALLOWED_COMPANY_SIZES = new Set([
  "1–50 employees (early stage)",
  "51–200 employees (growth stage)",
  "201–1000 employees (mid-market)",
  "1000+ employees (large / enterprise)",
]);

const PROJECTS = [
  {
    id: "rewe-white-label-sco",
    title: "Designing & Scaling a Nationwide Self-Checkout System",
    tags: ["Enterprise", "Design System", "B2C", "UX Research"],
    description: "600+ stores, millions of daily users. Reduced employee interventions by 14%, failed searches by 18%.",
  },
  {
    id: "billa-terminal",
    title: "Large-Scale Quantitative & Qualitative UX Research",
    tags: ["Enterprise", "UX Research", "B2C"],
    description: "Full-stack design ownership of self-service terminal shipped to Austrian supermarkets.",
  },
  {
    id: "lehr-app",
    title: "AI Learning Platform — Product Vision & Frontend Architecture",
    tags: ["Startup", "AI", "Fullstack", "Web Dev"],
    description: "Co-founded and built solo. Streaming AI, websocket architecture, Next.js + Clerk + Stripe.",
  },
  {
    id: "tubics-video-optimization-tool",
    title: "Driving Product Adoption in an AI-Powered SaaS Platform",
    tags: ["SaaS", "B2B", "UX Research", "Data-heavy"],
    description: "Most-used Tubics feature. +50% session time, -34% completion time, CSAT 4→8/10.",
  },
  {
    id: "tubics-design-system-documentation",
    title: "Tubics — Scalable Design System & Engineering Alignment",
    tags: ["Design System", "SaaS", "Migration"],
    description: "Full design system rebuild supporting rebranding and scalable UI patterns.",
  },
  {
    id: "app-radar-ui-redesign",
    title: "App Radar — Growth & Analytics Platform Redesign",
    tags: ["Analytics", "SaaS", "B2B", "Freelance"],
    description: "Complex analytics platform used by enterprise teams. Simplified multi-step data workflows.",
  },
  {
    id: "forasna-form",
    title: "Forasna — Increasing Job Post Completion & Application Volume",
    tags: ["UX Research", "Conversion", "B2B", "SaaS"],
    description: "Redesigned broken job posting flow. +12% job creation, reduced drop-offs.",
  },
];

const EXPERIENCES = [
  { id: "rewe", company: "REWE International", title: "Senior Product Designer", date: "April 2022 — Present", tags: ["Enterprise UX", "Design Systems"] },
  { id: "lehr-cofounder", company: "Lehr.app", title: "Frontend & Product Design Cofounder", date: "May 2024 — Present", tags: ["Startup", "Frontend", "React", "AI"] },
  { id: "suplyd", company: "Suplyd", title: "Frontend Intern (Part-Time)", date: "May 2024 — Present", tags: ["Frontend", "React"] },
  { id: "tubics", company: "Tubics", title: "Product Designer & Low-Code Developer", date: "October 2020 — January 2022", tags: ["Design Systems", "SaaS", "Low-Code"] },
  { id: "hotelkit", company: "Hotelkit", title: "UX/UI Designer (Part-Time)", date: "November 2019 — October 2020", tags: ["SaaS", "Cross Platform"] },
  { id: "msc-salzburg", company: "University of Salzburg", title: "M.Sc. Human-Computer Interaction", date: "September 2019 — January 2021", tags: ["Msc", "UX Research"] },
  { id: "wuzzuf", company: "Wuzzuf", title: "Junior UX Designer, Growth Squad", date: "October 2018 — October 2019", tags: ["UX", "Growth", "SaaS"] },
  { id: "bsc-guc", company: "The German University in Cairo", title: "B.Sc. Material Engineering", date: "October 2012 — October 2018", tags: ["Bachelor", "STEM"] },
];

function buildPrompt(role: string, companyTypes: string[], companySize: string): string {
  return `You are a portfolio personalisation engine for Younis Abdelhamid, a Senior Product Designer & UX Engineer with 7+ years of experience.

VISITOR CONTEXT:
- Role: ${role}
- Company Type: ${companyTypes.join(", ")}
- Company Size: ${companySize}

AVAILABLE PROJECTS:
${PROJECTS.map((p) => `- ${p.id}: "${p.title}" [${p.tags.join(", ")}] — ${p.description}`).join("\n")}

AVAILABLE EXPERIENCES:
${EXPERIENCES.map((e) => `- ${e.id}: "${e.company}" — ${e.title} (${e.date}) [${e.tags.join(", ")}]`).join("\n")}

PERSONALISATION RULES:

PROJECTS — show 3–5 maximum. Be aggressive. Remove irrelevant ones.
- Enterprise + large company (1000+): prioritise rewe-white-label-sco, billa-terminal, tubics-design-system-documentation. Hide startup-only projects.
- Startup / small company (1–200): prioritise lehr-app, tubics-video-optimization-tool, app-radar-ui-redesign. Deprioritise heavy enterprise work.
- B2C: prioritise rewe-white-label-sco, lehr-app.
- B2B / SaaS: prioritise tubics-video-optimization-tool, app-radar-ui-redesign, tubics-design-system-documentation, forasna-form.
- Founder / CTO / Engineer: lead with lehr-app. Emphasise full-stack and AI credentials.
- Design Lead / Design-focused: prioritise tubics-video-optimization-tool, app-radar-ui-redesign, tubics-design-system-documentation. Emphasise craft and process.
- Recruiter / Hiring Manager: show breadth — 1 enterprise (rewe-white-label-sco), 1 startup (lehr-app), 1 SaaS (tubics-video-optimization-tool).

EXPERIENCE — never hide any entry. Reorder by relevance. Highlight 1–2 most relevant.
- Large company (1000+): put rewe first, highlight it.
- Startup / small: put lehr-cofounder first, highlight it and tubics.
- Engineering-focused (Founder/CTO/Engineer): put lehr-cofounder and suplyd first, highlight them.
- Design Lead / Design-focused: put rewe first, highlight rewe and tubics.
- Always include all 8 experience IDs in experienceOrder.

HERO TAGLINE — one sharp sentence replacing "Designing enterprise systems that ship to millions":
- Enterprise + large: emphasise scale and reliability.
- Startup: emphasise speed, ownership, AI-native.
- Founder/CTO: emphasise full-stack depth and shipping speed.
- Design Lead: emphasise craft, systems thinking, design-to-engineering bridge.
- Max 12 words. Strong verb. No buzzwords.

ABOUT TEXT — 3–4 sentences, first person. Reframe existing facts — never invent new ones.
- Enterprise + large: scale (600+ stores, millions of users), design systems, stakeholder management, process rigour.
- Startup + small: speed, solo ownership, full-stack capability, AI tools, shipping without a team.
- Design Lead: craft, research methodology, systems thinking, cross-functional collaboration.
- Founder/CTO: engineering depth, AI workflow (Figma Make → Claude pipeline), shipped products, technical co-founder capable.

GREETING — 1 warm personalised line acknowledging who they are. E.g. "Hi — looks like you're evaluating design talent for a startup. Here's what matters most for you."

Return ONLY valid JSON. No markdown fences. No explanation. No preamble. Exactly this shape:
{
  "heroTagline": "string",
  "aboutText": "string",
  "greeting": "string",
  "visibleProjects": ["id1", "id2"],
  "projectOrder": ["id1", "id2"],
  "experienceOrder": ["id1", "id2", "id3", "id4", "id5", "id6", "id7", "id8"],
  "highlightedExperience": ["id1"],
  "highlightTags": ["tag1", "tag2", "tag3"]
}`;
}

export async function POST(req: Request) {
  if (await isRateLimited(req)) return rateLimitResponse();

  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response("API key not configured", { status: 500 });
  }

  let role: string, companyTypes: string[], companySize: string;
  try {
    const body = await req.json();
    role = String(body.role ?? "").slice(0, 100);
    companyTypes = Array.isArray(body.companyTypes)
      ? (body.companyTypes as unknown[]).map((t) => String(t).slice(0, 100))
      : [];
    companySize = String(body.companySize ?? "").slice(0, 50);
  } catch {
    return new Response("Invalid request body", { status: 400 });
  }

  if (!role || !companySize) {
    return new Response("Missing required fields", { status: 400 });
  }

  // Reject values not from the onboarding allowlist to block prompt injection
  if (!ALLOWED_ROLES.has(role)) {
    return new Response("Invalid role", { status: 400 });
  }
  if (companyTypes.some((t) => !ALLOWED_COMPANY_TYPES.has(t))) {
    return new Response("Invalid company type", { status: 400 });
  }
  if (companySize && !ALLOWED_COMPANY_SIZES.has(companySize)) {
    return new Response("Invalid company size", { status: 400 });
  }

  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: buildPrompt(role, companyTypes, companySize),
        },
      ],
    });

    const raw = message.content[0].type === "text" ? message.content[0].text : "";

    // Strip any accidental markdown fences
    const clean = raw.replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/i, "").trim();

    const parsed = JSON.parse(clean);

    // Validate required fields and provide safe fallbacks
    const result = {
      heroTagline:
        typeof parsed.heroTagline === "string"
          ? parsed.heroTagline
          : "Designing systems that bridge design and engineering",
      aboutText:
        typeof parsed.aboutText === "string"
          ? parsed.aboutText
          : "I design products that ship at scale.",
      greeting:
        typeof parsed.greeting === "string" ? parsed.greeting : "Welcome to my portfolio.",
      visibleProjects: Array.isArray(parsed.visibleProjects)
        ? parsed.visibleProjects
        : PROJECTS.slice(0, 4).map((p) => p.id),
      projectOrder: Array.isArray(parsed.projectOrder)
        ? parsed.projectOrder
        : PROJECTS.slice(0, 4).map((p) => p.id),
      experienceOrder: Array.isArray(parsed.experienceOrder)
        ? parsed.experienceOrder
        : EXPERIENCES.map((e) => e.id),
      highlightedExperience: Array.isArray(parsed.highlightedExperience)
        ? parsed.highlightedExperience
        : ["rewe"],
      highlightTags: Array.isArray(parsed.highlightTags) ? parsed.highlightTags : [],
    };

    return Response.json(result);
  } catch (err) {
    console.error("Personalise API error:", err);
    return new Response("Failed to generate personalisation", { status: 500 });
  }
}

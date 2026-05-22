import Anthropic from "@anthropic-ai/sdk";
import { systemPrompt } from "@/lib/systemPrompt";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// In-memory rate limiter: max 20 requests per IP per hour
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = (rateLimitMap.get(ip) ?? []).filter((t) => t > windowStart);
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

export type PageContext = {
  currentPage: "home" | "project" | "other";
  projectId: string | null;
  projectTitle: string | null;
  availableSections: Array<{ id: string; label: string }>;
  activeFilters: string[];
  highlightedProjectId: string | null;
  visitorBehaviour: {
    timeOnPageSeconds: number;
    scrollDepthPercent: number;
    messageCount: number;
  };
};

export async function POST(req: Request) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({
        error: "You've sent a lot of messages! Take a short break and try again in an hour.",
      }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  const body = await req.json() as {
    messages?: unknown[];
    pageContext?: PageContext;
  };

  const { messages, pageContext } = body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response("Invalid messages", { status: 400 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response("API key not configured", { status: 500 });
  }

  // Filter to only user/assistant messages (strip silent system messages)
  type ApiMessage = { role: "user" | "assistant"; content: string };
  const validMessages: ApiMessage[] = (messages as Array<{ role: string; content: string }>)
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => ({ role: m.role as "user" | "assistant", content: String(m.content) }));

  if (validMessages.length === 0) {
    return new Response("No valid messages", { status: 400 });
  }

  // Build page-context system addition
  let pageSystemAddition = "";
  if (pageContext) {
    const sectionList =
      pageContext.availableSections.length > 0
        ? pageContext.availableSections
            .map((s) => `${s.id} (${s.label})`)
            .join(", ")
        : "none";
    const filterList =
      pageContext.activeFilters.length > 0
        ? pageContext.activeFilters.join(", ")
        : "none";
    const { timeOnPageSeconds, scrollDepthPercent, messageCount } =
      pageContext.visitorBehaviour;

    pageSystemAddition = `

CURRENT VISITOR CONTEXT (live, updated each message):
- Current page: ${pageContext.currentPage}
- Project ID: ${pageContext.projectId ?? "none"}
- Project title: ${pageContext.projectTitle ?? "none"}
- Available sections on this page: ${sectionList}
- Active tag filters: ${filterList}
- Highlighted project: ${pageContext.highlightedProjectId ?? "none"}
- Time on page: ${timeOnPageSeconds}s
- Scroll depth: ${scrollDepthPercent}%
- Messages exchanged: ${messageCount}

Use this context to decide which page actions are appropriate. If the visitor is on a project page, prefer HIGHLIGHT_SECTION over SCROLL_TO. If they ask to "go deeper" on a different project, use NAVIGATE_TO_PROJECT. If the visitor has been on the page a while (60s+) and hasn't asked much, consider a NUDGE_CONTACT if the conversation ends positively.`;
  }

  const fullSystemPrompt = systemPrompt + pageSystemAddition;

  // Start the Anthropic stream
  let anthropicStream: ReturnType<typeof client.messages.stream>;
  try {
    anthropicStream = client.messages.stream({
      model: "claude-sonnet-4-6",
      max_tokens: 512,
      system: fullSystemPrompt,
      messages: validMessages,
    });
  } catch (err) {
    console.error("Failed to start Anthropic stream:", err);
    return new Response("Failed to start stream", { status: 500 });
  }

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    start(controller) {
      anthropicStream.on("text", (text: string) => {
        controller.enqueue(encoder.encode(text));
      });
      anthropicStream.on("end", () => {
        controller.close();
      });
      anthropicStream.on("error", (err: Error) => {
        console.error("Anthropic stream error:", err);
        controller.close();
      });
    },
    cancel() {
      anthropicStream.abort();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Sliding-window: 20 requests per IP per hour across all Claude-backed routes.
// Uses Upstash Redis in production (persistent across serverless instances).
// Falls back to in-memory in local dev when Upstash env vars are absent.

let ratelimit: Ratelimit | null = null;

if (
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN
) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(20, "1 h"),
    prefix: "portfolio_rl",
  });
}

// In-memory fallback — only used locally; not reliable in serverless production.
const inMemoryMap = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 20;

function inMemoryCheck(ip: string): boolean {
  const now = Date.now();
  const timestamps = (inMemoryMap.get(ip) ?? []).filter(
    (t) => t > now - WINDOW_MS
  );
  if (timestamps.length >= MAX_REQUESTS) return true;
  timestamps.push(now);
  inMemoryMap.set(ip, timestamps);
  return false;
}

/**
 * Returns true if the request should be blocked (rate limit exceeded).
 * Reads the real client IP from standard proxy headers.
 */
export async function isRateLimited(req: Request): Promise<boolean> {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "anonymous";

  if (ratelimit) {
    const { success } = await ratelimit.limit(ip);
    return !success;
  }

  return inMemoryCheck(ip);
}

export function rateLimitResponse(): Response {
  return new Response(
    JSON.stringify({
      error:
        "You've sent a lot of messages — take a short break and try again in an hour.",
    }),
    { status: 429, headers: { "Content-Type": "application/json" } }
  );
}

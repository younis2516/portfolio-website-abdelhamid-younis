import Anthropic from "@anthropic-ai/sdk";
import { systemPrompt } from "@/lib/systemPrompt";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response("Invalid messages", { status: 400 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response("API key not configured", { status: 500 });
  }

  // Start the Anthropic stream before opening the ReadableStream so we can
  // return a proper 500 if the API rejects the request upfront.
  let anthropicStream: ReturnType<typeof client.messages.stream>;
  try {
    anthropicStream = client.messages.stream({
      model: "claude-sonnet-4-6",
      max_tokens: 512,
      system: systemPrompt,
      messages,
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

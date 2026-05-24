// Server-side proxy — keeps the CONTACT_FORM URL out of the client bundle.
export async function POST(req: Request) {
  const url = process.env.CONTACT_FORM;
  if (!url) return new Response("Contact form not configured", { status: 500 });

  let body: { email?: unknown; message?: unknown };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid request body", { status: 400 });
  }

  const email = String(body.email ?? "").slice(0, 500);
  const message = String(body.message ?? "").slice(0, 5000);

  if (!email || !message) {
    return new Response("Missing required fields", { status: 400 });
  }

  const upstream = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, message, createdAt: new Date().toISOString() }),
  });

  return new Response(null, { status: upstream.ok ? 200 : 502 });
}

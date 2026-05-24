// Server-side proxy — keeps the FORM_URL out of the client bundle.
export async function POST(req: Request) {
  const url = process.env.FORM_URL;
  if (!url) return new Response("Visitor form not configured", { status: 500 });

  let body: { name?: unknown; email?: unknown };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid request body", { status: 400 });
  }

  const name = String(body.name ?? "").slice(0, 200);
  const email = String(body.email ?? "").slice(0, 500);

  if (!name) {
    return new Response("Name is required", { status: 400 });
  }

  const upstream = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, createdAt: new Date().toISOString() }),
  });

  return new Response(null, { status: upstream.ok ? 200 : 502 });
}

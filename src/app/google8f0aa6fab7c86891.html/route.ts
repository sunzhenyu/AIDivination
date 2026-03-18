export async function GET() {
  return new Response("google-site-verification: google8f0aa6fab7c86891.html", {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate"
    }
  });
}

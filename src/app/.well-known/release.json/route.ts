// Public build provenance only; never include credentials or private configuration.
export const dynamic = "force-static";

export function GET() {
  const sourceDigest = process.env.NEXT_PUBLIC_RELEASE_SOURCE_DIGEST ?? null;
  return Response.json({ sourceDigest }, {
    headers: { "Cache-Control": "public, max-age=0, must-revalidate" },
  });
}

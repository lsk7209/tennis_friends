export const dynamic = "force-static";
export const revalidate = false;

/**
 * 구글 Search Console HTML 인증 파일 (파일명에 .html 포함)
 */
// Embedded brackets in this folder name are literal, not a dynamic segment.
export async function GET() {
  const envCode = process.env.GOOGLE_SITE_VERIFICATION;

  const code = envCode || "";

  if (!code) {
    return new Response("Google verification code is not configured.", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }
  const html = `google-site-verification: ${code}.html`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}


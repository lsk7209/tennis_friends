import { NextRequest } from 'next/server';

export const dynamic = "force-static";
export const revalidate = false;

/**
 * 구글 Search Console HTML 인증 파일 (파일명에 .html 포함)
 */
export async function GET(
  request: NextRequest,
  context?: { params?: Promise<{ verification?: string }> }
) {
  void request;
  const params = context?.params ? await context.params : {};
  const verification = params?.verification;
  const envCode = process.env.GOOGLE_SITE_VERIFICATION;
  
  const code = envCode || verification || "";

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


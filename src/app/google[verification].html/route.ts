import { NextRequest } from 'next/server';

/**
 * 구글 Search Console HTML 인증 파일 (파일명에 .html 포함)
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ verification: string }> }
) {
  const { verification } = await params;
  const envCode = process.env.GOOGLE_SITE_VERIFICATION;
  
  const code = envCode || verification;
  const html = `google-site-verification: ${code}.html`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}


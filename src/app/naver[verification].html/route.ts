import { NextRequest } from 'next/server';

export const dynamic = "force-static";
export const revalidate = false;

/**
 * 네이버 서치어드바이저 HTML 인증 파일
 * 
 * 사용 방법:
 * 1. 네이버 서치어드바이저에서 HTML 파일 인증 방식 선택
 * 2. 제공된 파일명을 복사 (예: naver1234567890.html)
 * 3. 환경 변수에 NAVER_SITE_VERIFICATION 설정
 * 4. URL: https://www.tennisfrens.com/naver[verification-code].html
 */
export async function GET(
  request: NextRequest,
  context?: { params?: Promise<{ verification?: string }> }
) {
  void request;
  const params = context?.params ? await context.params : {};
  const verification = params?.verification;
  const envCode = process.env.NAVER_SITE_VERIFICATION;

  const code = envCode || verification || "";

  if (!code) {
    return new Response("Naver verification code is not configured.", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }
  const html = `naver-site-verification: ${code}`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}


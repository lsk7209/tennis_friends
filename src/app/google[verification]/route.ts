import { NextRequest } from 'next/server';

export const dynamic = "force-static";
export const revalidate = false;

/**
 * 구글 Search Console HTML 인증 파일
 * 
 * 사용 방법:
 * 1. Google Search Console에서 HTML 파일 인증 방식 선택
 * 2. 제공된 파일명을 복사 (예: google1234567890.html)
 * 3. 환경 변수에 GOOGLE_SITE_VERIFICATION 설정
 * 4. URL: https://www.tennisfrens.com/google[verification-code]
 * 
 * 예시:
 * - 파일명: google1234567890.html
 * - URL: https://www.tennisfrens.com/google1234567890
 * - 환경 변수: GOOGLE_SITE_VERIFICATION=1234567890
 */
export async function GET(
  request: NextRequest,
  context?: { params?: Promise<{ verification?: string }> }
) {
  const params = context?.params ? await context.params : {};
  const verification = params?.verification;
  const envCode = process.env.GOOGLE_SITE_VERIFICATION;
  
  // 환경 변수에 설정된 코드와 일치하는지 확인
  const code = envCode || verification || '';
  
  // 구글 인증 HTML 파일 내용
  const html = `google-site-verification: ${code}.html`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}


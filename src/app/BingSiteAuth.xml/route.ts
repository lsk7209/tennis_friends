import { NextRequest } from "next/server";

/**
 * Bing 웹마스터 도구 인증 파일
 *
 * 사용 방법:
 * 1. Bing Webmaster Tools에서 XML 파일 인증 방식 선택
 * 2. 파일명: BingSiteAuth.xml
 * 3. 환경 변수에 BING_SITE_VERIFICATION 설정
 * 4. URL: https://tennisfrens.com/BingSiteAuth.xml
 */
export async function GET(_request: NextRequest) {
  const verificationCode =
    process.env.BING_SITE_VERIFICATION || "your-bing-verification-code";

  const xml = `<?xml version="1.0"?>
<users>
  <user>${verificationCode}</user>
</users>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

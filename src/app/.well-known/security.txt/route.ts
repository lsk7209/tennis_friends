import { NextRequest } from "next/server";

/**
 * security.txt
 * 보안 정책 및 연락처 정보 제공
 * 크롤러가 사이트의 신뢰성을 평가하는 데 도움
 */
export async function GET(_request: NextRequest) {
  const securityTxt = `Contact: mailto:tennisfriends@tennisfrens.com
Expires: 2026-12-31T23:59:59.000Z
Preferred-Languages: ko, en
Canonical: https://www.tennisfrens.com/.well-known/security.txt
`;

  return new Response(securityTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

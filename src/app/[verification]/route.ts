const GOOGLE_PREFIX = 'google';
const NAVER_PREFIX = 'naver';

function stripHtmlExtension(value: string): string {
  return value.trim().replace(/\.html$/i, '');
}

function normalizeGoogleToken(value: string): string {
  const withoutExt = stripHtmlExtension(value);
  return withoutExt.startsWith(GOOGLE_PREFIX)
    ? withoutExt
    : `${GOOGLE_PREFIX}${withoutExt}`;
}

function normalizeNaverToken(value: string): string {
  const withoutExt = stripHtmlExtension(value);
  return withoutExt.startsWith(NAVER_PREFIX)
    ? withoutExt.slice(NAVER_PREFIX.length)
    : withoutExt;
}

function getExpectedGoogleToken(): string | null {
  const envRaw = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  if (!envRaw) return null;
  return normalizeGoogleToken(envRaw);
}

function getExpectedNaverCode(): string | null {
  const envRaw = process.env.NAVER_SITE_VERIFICATION?.trim();
  if (!envRaw) return null;
  return normalizeNaverToken(envRaw);
}

function extractGoogleTokenFromPath(verification: string): string | null {
  if (!/^google[\w-]+\.html$/i.test(verification)) {
    return null;
  }

  return stripHtmlExtension(verification);
}

function extractNaverCodeFromPath(verification: string): string | null {
  if (!/^naver[\w-]+\.html$/i.test(verification)) {
    return null;
  }

  return normalizeNaverToken(verification);
}

function createVerificationResponse(body: string) {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ verification: string }> }
) {
  const { verification } = await context.params;

  const requestedGoogleToken = extractGoogleTokenFromPath(verification);
  if (requestedGoogleToken) {
    const expectedGoogleToken = getExpectedGoogleToken();

    // Env가 설정된 경우에는 정확한 파일명만 허용하고,
    // 설정이 없는 경우에는 요청된 파일명을 그대로 응답해 검증 진행을 돕습니다.
    if (!expectedGoogleToken || expectedGoogleToken === requestedGoogleToken) {
      return createVerificationResponse(`google-site-verification: ${requestedGoogleToken}.html`);
    }

    return new Response('Not Found', { status: 404 });
  }

  const requestedNaverCode = extractNaverCodeFromPath(verification);
  if (requestedNaverCode) {
    const expectedNaverCode = getExpectedNaverCode();

    if (!expectedNaverCode || expectedNaverCode === requestedNaverCode) {
      return createVerificationResponse(`naver-site-verification: ${requestedNaverCode}`);
    }

    return new Response('Not Found', { status: 404 });
  }

  return new Response('Not Found', { status: 404 });
}

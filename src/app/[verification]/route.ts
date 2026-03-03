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

function getExpectedGoogleFilename(): string | null {
  const envRaw = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  if (!envRaw) return null;
  return `${normalizeGoogleToken(envRaw)}.html`;
}

function getExpectedNaverFilename(): string | null {
  const envRaw = process.env.NAVER_SITE_VERIFICATION?.trim();
  if (!envRaw) return null;
  return `${NAVER_PREFIX}${normalizeNaverToken(envRaw)}.html`;
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

  const expectedGoogleFilename = getExpectedGoogleFilename();
  if (expectedGoogleFilename && verification === expectedGoogleFilename) {
    const token = stripHtmlExtension(expectedGoogleFilename);
    return createVerificationResponse(`google-site-verification: ${token}.html`);
  }

  const expectedNaverFilename = getExpectedNaverFilename();
  if (expectedNaverFilename && verification === expectedNaverFilename) {
    const code = normalizeNaverToken(expectedNaverFilename);
    return createVerificationResponse(`naver-site-verification: ${code}`);
  }

  return new Response('Not Found', { status: 404 });
}

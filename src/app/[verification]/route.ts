function normalizeGoogleToken(value: string): string {
  const withoutExt = value.replace(/\.html$/i, '');
  if (withoutExt.startsWith('google')) return withoutExt;
  return `google${withoutExt}`;
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ verification: string }> }
) {
  const { verification } = await context.params;

  // Google Search Console file verification: /googleXXXXXXXX.html
  if (/^google[\w-]+\.html$/i.test(verification)) {
    const envRaw = process.env.GOOGLE_SITE_VERIFICATION?.trim();
    const token = envRaw ? normalizeGoogleToken(envRaw) : verification.replace(/\.html$/i, '');
    const body = `google-site-verification: ${token}.html`;

    return new Response(body, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  // Naver file verification: /naverXXXXXXXX.html
  if (/^naver[\w-]+\.html$/i.test(verification)) {
    const envCode = process.env.NAVER_SITE_VERIFICATION?.trim();
    const code = envCode || verification.replace(/^naver/i, '').replace(/\.html$/i, '');
    const body = `naver-site-verification: ${code}`;

    return new Response(body, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  return new Response('Not Found', { status: 404 });
}

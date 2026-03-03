const DEFAULT_SITE_URL = 'https://tennisfrens.com';

function normalizeSiteUrl(value?: string): string {
  const raw = value?.trim();
  if (!raw) return DEFAULT_SITE_URL;

  try {
    const parsed = new URL(raw);
    return parsed.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const CONTACT_EMAIL = 'contact@tennisfrens.com';
export const RSS_EDITOR_EMAIL = 'tennisfriends@tennisfrens.com';

export function toAbsoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

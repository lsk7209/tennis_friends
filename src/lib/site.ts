export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com';

export const CONTACT_EMAIL = 'contact@tennisfrens.com';

export function toAbsoluteUrl(path: string): string {
  const base = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

export const RSS_EDITOR_EMAIL = 'tennisfriends@tennisfrens.com';

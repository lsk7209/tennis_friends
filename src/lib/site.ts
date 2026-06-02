export const SITE_NAME = "TennisFriends";
export const DEFAULT_SITE_URL = "https://www.tennisfrens.com";
export const DEFAULT_SITE_DESCRIPTION =
  "테니스 동호인과 입문자를 위한 기술, 전술, 장비, 훈련 정보를 실전 기준으로 정리하는 테니스 콘텐츠와 도구 플랫폼입니다.";
export const DEFAULT_SITE_LOCALE = "ko_KR";
export const DEFAULT_SITE_LANGUAGE = "ko-KR";
export const DEFAULT_CONTACT_EMAIL = "contact@tennisfrens.com";
export const SITE_AUTHOR = "TennisFriends 편집팀";
export const SITE_AUTHOR_BIO =
  "테니스 실력 향상과 경기 분석 자료를 출처 기반으로 정리하는 편집팀입니다.";
export const SITE_AUTHOR_URL = "/about";
export const DEFAULT_COUNTRY_NAME = "South Korea";
export const DEFAULT_REGION = "KR-11";
export const DEFAULT_PLACENAME = "Seoul";

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(
    /\/$/,
    "",
  );
}

export function getAbsoluteUrl(path: string = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function getSiteIconUrl() {
  return getAbsoluteUrl("/icon");
}

export function getSiteSearchUrlTemplate() {
  return `${getSiteUrl()}/search?q={search_term_string}`;
}

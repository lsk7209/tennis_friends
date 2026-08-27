import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CAFE_URL = "https://cafe.naver.com/homecookie";
const findings = [];

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function requireText(relativePath, values) {
  const source = read(relativePath);
  for (const value of values) {
    if (!source.includes(value)) {
      findings.push({ file: relativePath, issue: `missing ${value}` });
    }
  }
  return source;
}

const cafeLink = requireText("src/components/NaverCafeLink.tsx", [
  CAFE_URL,
  "NAVER_CAFE_VISIT",
  "cta_location",
  "link_text",
  "destination_url",
  "page_path",
  'target="_blank"',
  'rel="noopener noreferrer"',
]);

requireText("src/lib/analytics.ts", ['NAVER_CAFE_VISIT: "naver_cafe_visit"']);
requireText("src/app/_components/home/hero.tsx", [
  'ctaLocation="home_hero"',
  "네이버 카페 방문하기",
]);
requireText("src/components/layout/Header.tsx", [
  'ctaLocation="desktop_header"',
  'ctaLocation="mobile_menu"',
]);
requireText("src/components/layout/MobileNav.tsx", [
  'ctaLocation="mobile_bottom_nav"',
]);
requireText("src/components/layout/Footer.tsx", ['ctaLocation="footer_links"']);
const cafeBanner = requireText("src/components/blog/CafeBanner.tsx", [
  'ctaLocation = "sitewide_bottom"',
  "네이버 카페 방문하기",
  '"/admin", "/privacy", "/terms"',
  "normalizedPathname.endsWith(excludedPath)",
  "if (!isHydrated || isExcludedPath(pathname)) return null",
]);
const layout = requireText("src/app/layout.tsx", [
  "<CafeBanner />",
  "<CoupangAffiliateBanner />",
]);

if ((layout.match(/<CafeBanner \/>/g) || []).length !== 1) {
  findings.push({ file: "src/app/layout.tsx", issue: "sitewide CafeBanner must render once" });
}

if (layout.indexOf("<CafeBanner />") > layout.indexOf("<CoupangAffiliateBanner />")) {
  findings.push({
    file: "src/app/layout.tsx",
    issue: "primary cafe CTA appears after the secondary affiliate banner",
  });
}

if (cafeBanner.includes("No.1") || cafeBanner.includes("naver-cafe-tennisfriends-banner")) {
  findings.push({
    file: "src/components/blog/CafeBanner.tsx",
    issue: "unverified No.1 image claim remains active",
  });
}

for (const file of [
  "src/components/blog/Article.tsx",
  "src/app/blog/[slug]/page.tsx",
  "src/app/players/[slug]/page.tsx",
]) {
  if (read(file).includes("<CafeBanner")) {
    findings.push({ file, issue: "duplicate page-level CafeBanner remains" });
  }
}

if (!cafeLink.includes("onClick={handleClick}")) {
  findings.push({ file: "src/components/NaverCafeLink.tsx", issue: "click handler is not attached" });
}

if (findings.length > 0) {
  console.error(JSON.stringify({ findings }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify({
    status: "ok",
    primaryConversion: "naver_cafe_visit",
    destination: CAFE_URL,
    trackedLocations: [
      "home_hero",
      "desktop_header",
      "mobile_menu",
      "mobile_bottom_nav",
      "footer_links",
      "sitewide_bottom",
    ],
  }),
);

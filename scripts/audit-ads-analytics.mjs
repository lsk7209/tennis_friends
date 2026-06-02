import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const DEFAULT_BASE_URL = "https://www.tennisfrens.com";
const ADSENSE_PUB_ID = "ca-pub-3050601904412736";
const ADSENSE_PUB_NUMERIC_ID = "pub-3050601904412736";
const ADSENSE_LINE =
  "google.com, pub-3050601904412736, DIRECT, f08c47fec0942fa0";
const GA_MEASUREMENT_ID = "G-W1K51D8SBX";
const BLOG_SAMPLE_PATH = "/blog/tennis-hybrid-string-setup";
const REQUIRED_AD_SLOTS = ["5442683582", "4809500982", "8552062650"];

const baseUrl = (
  readArg("--base-url") ||
  process.env.PUBLIC_AUDIT_BASE_URL ||
  DEFAULT_BASE_URL
).replace(/\/$/, "");
const isLocalAuditBase = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(
  baseUrl,
);
const sourceOnly = hasArg("--source-only");

const findings = [];
const results = [];

function readArg(flag) {
  const args = process.argv.slice(2);
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : "";
}

function hasArg(flag) {
  return process.argv.slice(2).includes(flag);
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function getAttrs(tag) {
  const attrs = {};
  for (const match of tag.matchAll(/\s([a-zA-Z_:.-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) {
    attrs[match[1].toLowerCase()] = match[3] ?? match[4] ?? "";
  }
  return attrs;
}

function getMeta(html, key, value) {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const attrs = getAttrs(match[0]);
    if (attrs[key] === value) return attrs.content || "";
  }
  return "";
}

function getHeader(response, name) {
  return response.headers.get(name) || "";
}

async function fetchText(pathname) {
  const url = `${baseUrl}${pathname}`;
  const response = await fetch(url, { redirect: "manual" });
  const text = await response.text();
  assert(response.status === 200, {
    path: pathname,
    issue: "unexpected status",
    status: response.status,
    location: response.headers.get("location"),
  });
  return {
    path: pathname,
    url,
    status: response.status,
    contentType: getHeader(response, "content-type"),
    csp: getHeader(response, "content-security-policy"),
    text,
    bytes: Buffer.byteLength(text),
  };
}

function validateSourceIntegration() {
  const layout = readProjectFile("src/app/layout.tsx");
  const adsense = readProjectFile("src/components/AdSense.tsx");
  const gaProvider = readProjectFile("src/components/analytics/GAProvider.tsx");
  const blogPage = readProjectFile("src/app/blog/[slug]/page.tsx");
  const globals = readProjectFile("src/app/globals.css");
  const nextConfig = readProjectFile("next.config.ts");
  const envLocal = fs.existsSync(path.join(ROOT, ".env.local"))
    ? readProjectFile(".env.local")
    : "";
  const adsTxt = readProjectFile("public/ads.txt").trim();

  assert(layout.includes(`google-adsense-account`) && layout.includes(ADSENSE_PUB_ID), {
    scope: "source",
    issue: "layout AdSense account meta missing",
  });
  assert(layout.includes(`PROD_GA_MEASUREMENT_ID = "${GA_MEASUREMENT_ID}"`), {
    scope: "source",
    issue: "production GA4 measurement ID missing",
  });
  assert(layout.includes("<GAProvider") && layout.includes("<Tracking") && layout.includes("<AdSense"), {
    scope: "source",
    issue: "layout analytics/ads providers missing",
  });
  assert(adsense.includes(`const DEFAULT_ADSENSE_ID = "${ADSENSE_PUB_ID}"`), {
    scope: "source",
    issue: "AdSense default publisher ID missing",
  });
  assert(
    adsense.includes("pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="),
    {
      scope: "source",
      issue: "AdSense loader source missing",
    },
  );
  assert(adsense.includes("ADSENSE_LOAD_DELAY_MS") && adsense.includes("window.addEventListener(\"load\""), {
    scope: "source",
    issue: "AdSense delayed loader guard missing",
  });
  assert(adsense.includes('document.getElementById("adsense-script")'), {
    scope: "source",
    issue: "AdSense duplicate script guard missing",
  });
  assert(adsense.includes("LOCAL_HOSTS.has(window.location.hostname)"), {
    scope: "source",
    issue: "AdSense local host guard missing",
  });
  assert(adsense.includes("DEFAULT_AD_HEIGHT = 280"), {
    scope: "source",
    issue: "AdSense default reserved height missing",
  });
  assert(adsense.includes("minHeightMobile = 220"), {
    scope: "source",
    issue: "AdSense mobile reserved height missing",
  });
  assert(adsense.includes("--adsense-mobile-min-height"), {
    scope: "source",
    issue: "AdSense mobile min-height CSS variable missing",
  });
  assert(
    globals.includes(".adsense-slot") &&
      globals.includes("contain: layout paint style") &&
      globals.includes("min-height: var(--adsense-mobile-min-height"),
    {
      scope: "source",
      issue: "AdSense CLS CSS guard missing",
    },
  );
  assert(globals.includes('[id^="aswift_"][id$="_host"]'), {
    scope: "source",
    issue: "AdSense iframe width containment guard missing",
  });
  assert(gaProvider.includes("https://www.googletagmanager.com/gtag/js?id="), {
    scope: "source",
    issue: "GA4 gtag loader missing",
  });
  assert(gaProvider.includes("send_page_view: false") && gaProvider.includes("anonymize_ip: true"), {
    scope: "source",
    issue: "GA4 config guardrails missing",
  });
  assert(
    gaProvider.includes("trackPageView(pathname, measurementId)") &&
      gaProvider.includes("pathname.startsWith(\"/admin\")"),
    {
      scope: "source",
      issue: "GA4 SPA page_view/admin guard missing",
    },
  );
  for (const envName of [
    "NEXT_PUBLIC_ADSENSE_ARTICLE_TOP_SLOT",
    "NEXT_PUBLIC_ADSENSE_ARTICLE_MIDDLE_SLOT",
    "NEXT_PUBLIC_ADSENSE_ARTICLE_BOTTOM_SLOT",
  ]) {
    assert(blogPage.includes(envName), {
      scope: "source",
      issue: "article AdSense slot environment binding missing",
      envName,
    });
  }
  for (const slot of REQUIRED_AD_SLOTS) {
    assert(blogPage.includes(`|| "${slot}"`), {
      scope: "source",
      issue: "article AdSense slot fallback missing",
      slot,
    });
  }
  assert((blogPage.match(/<AdSenseSlot/g) || []).length >= REQUIRED_AD_SLOTS.length, {
    scope: "source",
    issue: "article AdSense placement count below required slots",
    expectedAtLeast: REQUIRED_AD_SLOTS.length,
  });
  assert(
    blogPage.includes("minHeight={260}") && blogPage.includes("minHeightMobile={200}"),
    {
      scope: "source",
      issue: "article middle ad reserved height missing",
    },
  );
  for (const slot of REQUIRED_AD_SLOTS) {
    assert(envLocal.includes(slot), {
      scope: "source",
      issue: ".env.local article AdSense slot value missing",
      slot,
    });
  }
  assert(adsTxt === ADSENSE_LINE, {
    scope: "source",
    issue: "local ads.txt mismatch",
    actual: adsTxt,
  });

  for (const domain of [
    "pagead2.googlesyndication.com",
    "tpc.googlesyndication.com",
    "googleads.g.doubleclick.net",
    "www.googletagmanager.com",
    "www.google-analytics.com",
    "analytics.google.com",
    "www.googletagservices.com",
    "www.googleadservices.com",
    "adservice.google.com",
    "csi.gstatic.com",
  ]) {
    assert(nextConfig.includes(domain), {
      scope: "source",
      issue: "CSP domain missing",
      domain,
    });
  }

  results.push({
    scope: "source",
    adsensePubId: ADSENSE_PUB_ID,
    gaMeasurementId: GA_MEASUREMENT_ID,
    requiredAdSlots: REQUIRED_AD_SLOTS.length,
  });
}

function validateHomeHtml(endpoint) {
  const adsenseAccount = getMeta(endpoint.text, "name", "google-adsense-account");
  assert(adsenseAccount === ADSENSE_PUB_ID, {
    path: endpoint.path,
    issue: "AdSense account meta mismatch",
    expected: ADSENSE_PUB_ID,
    actual: adsenseAccount,
  });
  if (!isLocalAuditBase) {
    assert(endpoint.text.includes(`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`), {
      path: endpoint.path,
      issue: "GA4 gtag script missing from live HTML",
    });
  }
  assert(endpoint.text.includes("https://pagead2.googlesyndication.com"), {
    path: endpoint.path,
    issue: "AdSense preconnect missing from live HTML",
  });
  assert(endpoint.text.includes("https://www.googletagmanager.com"), {
    path: endpoint.path,
    issue: "GTM preconnect/script hint missing from live HTML",
  });
}

function validateBlogAdSlots(endpoint) {
  const clientOccurrences = [...endpoint.text.matchAll(new RegExp(`data-ad-client="${ADSENSE_PUB_ID}"`, "g"))]
    .length;
  assert(clientOccurrences >= REQUIRED_AD_SLOTS.length, {
    path: endpoint.path,
    issue: "not enough AdSense ad clients in article HTML",
    expectedAtLeast: REQUIRED_AD_SLOTS.length,
    actual: clientOccurrences,
  });

  for (const slot of REQUIRED_AD_SLOTS) {
    assert(endpoint.text.includes(`data-ad-slot="${slot}"`), {
      path: endpoint.path,
      issue: "live article ad slot missing",
      slot,
    });
  }
}

function validateCsp(endpoint) {
  assert(endpoint.csp.includes("pagead2.googlesyndication.com"), {
    path: endpoint.path,
    issue: "live CSP missing AdSense script domain",
  });
  assert(endpoint.csp.includes("www.googletagmanager.com"), {
    path: endpoint.path,
    issue: "live CSP missing GTM domain",
  });
  assert(endpoint.csp.includes("www.google-analytics.com"), {
    path: endpoint.path,
    issue: "live CSP missing GA domain",
  });
  assert(endpoint.csp.includes("googleads.g.doubleclick.net"), {
    path: endpoint.path,
    issue: "live CSP missing DoubleClick domain",
  });
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

validateSourceIntegration();

if (!sourceOnly) {
  const home = await fetchText("/");
  const blog = await fetchText(BLOG_SAMPLE_PATH);
  const adsTxt = await fetchText("/ads.txt");

  validateHomeHtml(home);
  validateBlogAdSlots(blog);
  validateCsp(home);

  assert(adsTxt.text.trim() === ADSENSE_LINE, {
    path: adsTxt.path,
    issue: "live ads.txt mismatch",
    actual: adsTxt.text.trim(),
  });

  results.push(
    {
      scope: "live",
      path: home.path,
      status: home.status,
      bytes: home.bytes,
      hasAdsenseAccountMeta: getMeta(home.text, "name", "google-adsense-account") === ADSENSE_PUB_ID,
      hasGa4Script: home.text.includes(GA_MEASUREMENT_ID),
      ga4ScriptRequired: !isLocalAuditBase,
      hasCsp: Boolean(home.csp),
    },
    {
      scope: "live",
      path: blog.path,
      status: blog.status,
      bytes: blog.bytes,
      adSlotCount: REQUIRED_AD_SLOTS.filter((slot) => blog.text.includes(`data-ad-slot="${slot}"`)).length,
    },
    {
      scope: "live",
      path: adsTxt.path,
      status: adsTxt.status,
      bytes: adsTxt.bytes,
      hasAdsensePublisher: adsTxt.text.includes(ADSENSE_PUB_NUMERIC_ID),
    },
  );
}

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  mode: sourceOnly ? "source" : "live",
  generatedAt: new Date().toISOString(),
  baseUrl,
  adsensePubId: ADSENSE_PUB_ID,
  gaMeasurementId: GA_MEASUREMENT_ID,
  blogSamplePath: BLOG_SAMPLE_PATH,
  requiredAdSlots: REQUIRED_AD_SLOTS,
  findings,
  results,
};

fs.writeFileSync(
  path.join(
    REPORTS_DIR,
    sourceOnly
      ? "ads-analytics-source-audit-latest.json"
      : "ads-analytics-audit-latest.json",
  ),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));

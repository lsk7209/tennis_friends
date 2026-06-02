const CANONICAL_BASE_URL = "https://www.tennisfrens.com";
const NON_WWW_BASE_URL = `https://${"tennisfrens.com"}`;

const args = process.argv.slice(2);
const canonicalBaseUrl = (
  readArg("--canonical-base-url") ||
  process.env.PUBLIC_CANONICAL_BASE_URL ||
  CANONICAL_BASE_URL
).replace(/\/$/, "");
const nonWwwBaseUrl = (
  readArg("--non-www-base-url") ||
  process.env.PUBLIC_NON_WWW_BASE_URL ||
  NON_WWW_BASE_URL
).replace(/\/$/, "");

const cases = [
  {
    label: "non-www home",
    url: nonWwwBaseUrl,
    expectedLocation: `${canonicalBaseUrl}/`,
  },
  {
    label: "non-www player",
    url: `${nonWwwBaseUrl}/players/jannik-sinner`,
    expectedLocation: `${canonicalBaseUrl}/players/jannik-sinner`,
  },
  {
    label: "non-www blog",
    url: `${nonWwwBaseUrl}/blog/tennis-hybrid-string-setup`,
    expectedLocation: `${canonicalBaseUrl}/blog/tennis-hybrid-string-setup`,
  },
  {
    label: "Arthur typo slug",
    url: `${canonicalBaseUrl}/players/arthur-landercknech`,
    expectedLocation: `${canonicalBaseUrl}/players/arthur-rinderknech`,
  },
  {
    label: "Arthur typo slug on non-www",
    url: `${nonWwwBaseUrl}/players/arthur-landercknech`,
    expectedFinalUrl: `${canonicalBaseUrl}/players/arthur-rinderknech`,
  },
];

const findings = [];
const results = [];

function readArg(flag) {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : "";
}

function normalizeLocation(location, sourceUrl) {
  if (!location) return "";
  return new URL(location, sourceUrl).toString();
}

function normalizeComparableUrl(url) {
  return url.replace(/\/$/, "");
}

function isRedirectStatus(status) {
  return [301, 307, 308].includes(status);
}

async function inspectRedirect(testCase) {
  const response = await fetch(testCase.url, { redirect: "manual" });
  const location = normalizeLocation(response.headers.get("location"), testCase.url);
  const redirectOk = isRedirectStatus(response.status);

  const result = {
    label: testCase.label,
    url: testCase.url,
    status: response.status,
    location,
  };

  if (testCase.expectedLocation) {
    const expected = normalizeComparableUrl(testCase.expectedLocation);
    const actual = normalizeComparableUrl(location);
    if (!redirectOk || actual !== expected) {
      findings.push({
        label: testCase.label,
        issue: "redirect target mismatch",
        expectedStatus: "301, 307, or 308",
        expectedLocation: testCase.expectedLocation,
        actualStatus: response.status,
        actualLocation: location,
      });
    }
  }

  if (testCase.expectedFinalUrl) {
    const followed = await fetch(testCase.url, { redirect: "follow" });
    result.finalUrl = followed.url;
    result.finalStatus = followed.status;
    if (
      followed.status !== 200 ||
      normalizeComparableUrl(followed.url) !==
        normalizeComparableUrl(testCase.expectedFinalUrl)
    ) {
      findings.push({
        label: testCase.label,
        issue: "redirect chain final URL mismatch",
        expectedFinalUrl: testCase.expectedFinalUrl,
        actualFinalUrl: followed.url,
        finalStatus: followed.status,
      });
    }
  }

  results.push(result);
}

for (const testCase of cases) {
  await inspectRedirect(testCase);
}

if (findings.length > 0) {
  console.error(JSON.stringify({ findings, results }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ status: "ok", cases: results.length, results }));

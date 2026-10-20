#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const analytics = fs.readFileSync(path.join(root, "src/lib/analytics.ts"), "utf8");
const search = fs.readFileSync(path.join(root, "src/app/search/SearchClient.tsx"), "utf8");
const provider = fs.readFileSync(path.join(root, "src/components/analytics/GAProvider.tsx"), "utf8");

assert.match(analytics, /EVENT_PARAMETER_ALLOWLIST/);
assert.match(analytics, /sanitizeAnalyticsEvent/);
assert.match(analytics, /if \(!allowedKeys\) return null/);
assert.match(analytics, /SENSITIVE_VALUE_PATTERN/);
assert.match(analytics, /slice\(0, 100\)/);
assert.doesNotMatch(search, /search_term\s*:/);
assert.match(search, /query_length:\s*query\.length/);

const declaredEvents = [...analytics.matchAll(/^\s*[A-Z_]+:\s*"([a-z_]+)"/gm)].map(
  (match) => match[1],
);
for (const eventName of declaredEvents) {
  assert.match(
    analytics,
    new RegExp(`\\n\\s*${eventName}: new Set\\(`),
    `Missing analytics parameter allowlist for ${eventName}`,
  );
}

// Execute the inline GA initialization against a private search URL. Its
// defaults must be safe before gtag can emit an automatic event.
const initialScript = provider.match(/window\.dataLayer[\s\S]*?gtag\('config', '\$\{measurementId\}'[\s\S]*?\);/)?.[0];
assert.ok(initialScript, "GA initialization script is present");
const parsedAnalytics = ts.createSourceFile("analytics.ts", analytics, ts.ScriptTarget.Latest, true);
const campaignFunction = parsedAnalytics.statements.find((node) => ts.isFunctionDeclaration(node) && node.name?.text === "getSafeCampaignParams");
assert.ok(campaignFunction, "campaign sanitizer is present");
const campaignScript = ts.transpileModule(campaignFunction.getText(parsedAnalytics).replace(/^export /, ""), {
  compilerOptions: { target: ts.ScriptTarget.ES2020 },
}).outputText;
const context = {
  URL,
  URLSearchParams,
  location: {
    origin: "https://tennisfrens.com",
    pathname: "/search",
    search: "?q=private-search-term&utm_source=naver&utm_medium=cafe&utm_campaign=spring&utm_term=private-search-term",
    hash: "#private-fragment",
  },
  document: {
    title: "private-search-term | TennisFriends",
    referrer: "https://example.com/search?q=private-search-term#private-fragment",
  },
};
context.window = context;
vm.runInNewContext(campaignScript, context);
vm.runInNewContext(initialScript.replace("${measurementId}", "G-TEST").replace("${getSafeCampaignParams.toString()}", context.getSafeCampaignParams.toString()), context);
const calls = context.dataLayer.map((args) => JSON.parse(JSON.stringify(Array.from(args))));
const pageDefaults = {
  page_location: "https://tennisfrens.com/search",
  page_referrer: "https://example.com/search",
  page_title: "사이트 검색",
};
assert.deepEqual(calls[1], ["set", pageDefaults]);
assert.deepEqual(calls[2], ["config", "G-TEST", {
  ...pageDefaults, campaign_source: "naver", campaign_medium: "cafe", campaign_name: "spring",
  send_page_view: false, anonymize_ip: true,
}]);
assert.equal(JSON.stringify(calls).includes("private-search-term"), false);
assert.equal(JSON.stringify(calls).includes("private-fragment"), false);

console.log("Analytics privacy audit passed.");

import assert from "node:assert/strict";
import fs from "node:fs";
import Module from "node:module";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const require = Module.createRequire(import.meta.url);
const originalLoad = Module._load;
const originalTsx = Module._extensions[".tsx"];
const originalTs = Module._extensions[".ts"];
const events = [];
const effects = [];
let currentPath = "/";

function transpile(module, filename) {
  const source = fs.readFileSync(filename, "utf8");
  module._compile(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true, jsx: ts.JsxEmit.ReactJSX },
    fileName: filename,
  }).outputText, filename);
}

Module._extensions[".tsx"] = transpile;
Module._extensions[".ts"] = transpile;
Module._load = function (request, parent, isMain) {
  if (request === "react") return { useEffect: (callback) => effects.push(callback) };
  if (request === "next/navigation") return { usePathname: () => currentPath };
  if (request === "@/lib/safe-json") return { safeJsonParse: () => [] };
  if (request === "@/lib/analytics") return {
    trackEvent: (name, params) => events.push({ name, params }),
    TRACKING_EVENTS: {
      TEST_COMPLETED: "test_completed",
      BLOG_POST_VIEWED: "blog_post_viewed",
      CONTENT_READ_COMPLETE: "content_read_complete",
    },
  };
  if (request === "@/lib/safe-storage") return originalLoad.call(this, path.join(root, "src/lib/safe-storage.ts"), parent, isMain);
  if (request === "@/lib/external-effects") return originalLoad.call(this, path.join(root, "src/lib/external-effects.ts"), parent, isMain);
  return originalLoad.call(this, request, parent, isMain);
};

let tracking;
let analytics;
try {
  tracking = require(path.join(root, "src/components/Tracking.tsx"));
  analytics = require(path.join(root, "src/lib/analytics.ts"));
} finally {
  Module._load = originalLoad;
  Module._extensions[".tsx"] = originalTsx;
  Module._extensions[".ts"] = originalTs;
}

assert.equal(tracking.isBlogArticlePath("/blog/page/2"), false);
assert.equal(tracking.isBlogArticlePath("/blog/example-post"), true);
assert.equal(tracking.isBlogArticlePath("/blog"), false);
assert.equal(tracking.hasReachedArticleThreshold({ top: 0, height: 1000 }, 600), false);
assert.equal(tracking.hasReachedArticleThreshold({ top: -300, height: 1000 }, 600), true);
assert.equal(tracking.hasReachedArticleThreshold({ top: 0, height: 300 }, 600), true);

globalThis.document = { referrer: "" };
Object.defineProperty(globalThis, "navigator", { configurable: true, value: { userAgent: "Test", language: "ko" } });
globalThis.screen = { width: 800, height: 600 };
globalThis.window = {
  location: { pathname: "/utility/example/result" },
  innerWidth: 800,
  sessionStorage: { getItem() { throw new Error("blocked"); }, setItem() { throw new Error("blocked"); } },
};
globalThis.localStorage = { getItem() { throw new Error("blocked"); }, setItem() { throw new Error("blocked"); } };
tracking.trackTestCompletionOnce("example", "blocked-storage");
assert.equal(events.length, 1, "blocked local storage must not suppress GA attempt");
assert.equal(events[0].name, "test_completed");

let now = 0;
const originalNow = Date.now;
Date.now = () => now;
let articleTop = -300;
const article = { getBoundingClientRect: () => ({ top: articleTop, height: 1000 }) };
const listeners = new Map();
let tick;
let cleared = false;
globalThis.document = {
  referrer: "",
  visibilityState: "visible",
  querySelector: () => article,
  addEventListener: (name, callback) => listeners.set(name, callback),
  removeEventListener: (name) => listeners.delete(name),
};
globalThis.window = {
  location: { pathname: "/blog/example-post" }, innerWidth: 800, innerHeight: 600,
  addEventListener: (name, callback) => listeners.set(name, callback),
  removeEventListener: (name) => listeners.delete(name),
  setInterval: (callback) => { tick = callback; return 1; },
  clearInterval: () => { cleared = true; },
  requestIdleCallback: (callback) => { tick = callback; return 1; },
  cancelIdleCallback() {},
};
try {
  currentPath = "/blog/page/2";
  effects.length = 0;
  tracking.default();
  assert.equal(effects[2](), undefined, "pagination must not start article reading observer");
  effects[1]();
  tick();
  assert.equal(events.filter((event) => event.name === "blog_post_viewed").length, 0);

  currentPath = "/blog/example-post";
  effects.length = 0;
  tracking.default();
  effects[1]();
  tick();
  assert.equal(events.filter((event) => event.name === "blog_post_viewed").length, 1,
    "article view must survive blocked local storage");

  const cleanup = effects[2]();
  now = 20_000;
  document.visibilityState = "hidden";
  listeners.get("visibilitychange")();
  now = 120_000;
  tick();
  assert.equal(events.filter((event) => event.name === "content_read_complete").length, 0,
    "background time must not count toward reading");
  document.visibilityState = "visible";
  listeners.get("visibilitychange")();
  now = 145_000;
  tick();
  assert.equal(events.filter((event) => event.name === "content_read_complete").length, 1,
    "reaching the article threshold before 45 visible seconds must complete without another scroll");
  assert.equal(events.find((event) => event.name === "content_read_complete").params.read_seconds, 45);
  cleanup();
  assert.equal(cleared, true, "route cleanup must clear the timer");
  assert.equal(listeners.has("visibilitychange"), false);
} finally {
  Date.now = originalNow;
}

assert.equal(analytics.TRACKING_EVENTS.ASSESSMENT_STARTED, "assessment_started");
assert.deepEqual(analytics.sanitizeAnalyticsEvent("assessment_started", {
  tool_slug: "ntrp-test", page_path: "/utility/ntrp-test/test",
  questionnaire_version: "v1", scoring_version: "v1", measurement_version: "v2",
  answer_text: "private", email: "someone@example.com",
}), {
  tool_slug: "ntrp-test", page_path: "/utility/ntrp-test/test",
  questionnaire_version: "v1", scoring_version: "v1", measurement_version: "v2",
});
assert.equal(analytics.sanitizeAnalyticsEvent("tool_started", { tool_slug: "ntrp-test" }).tool_slug, "ntrp-test");
assert.deepEqual(analytics.sanitizeAnalyticsEvent("content_read_complete", {
  page_path: "/blog/example-post", read_seconds: 45, measurement_version: "v2",
  search_term: "private", email: "someone@example.com",
}), {
  page_path: "/blog/example-post", read_seconds: 45, measurement_version: "v2",
});
assert.deepEqual(analytics.sanitizeAnalyticsEvent("test_completed", {
  test_type: "ntrp-test", page_path: "/utility/ntrp-test/result", measurement_version: "v2",
  answers: "private",
}), {
  test_type: "ntrp-test", page_path: "/utility/ntrp-test/result", measurement_version: "v2",
});

// --- D06/D08: the optional visitor log is written only when the server enabled
// production external effects, and never stores raw referrer/search/result data.
{
  const memory = new Map();
  const workingStorage = {
    getItem: (key) => memory.get(key) ?? null,
    setItem: (key, value) => memory.set(key, String(value)),
    removeItem: (key) => memory.delete(key),
  };
  const setDocument = (externalEffects) => {
    globalThis.document = {
      referrer: "https://www.google.com/search?q=someone%40example.com+tennis",
      documentElement: { dataset: externalEffects ? { externalEffects } : {} },
    };
  };
  globalThis.window = {
    location: { pathname: "/utility/ntrp-test/result" },
    innerWidth: 800,
    localStorage: workingStorage,
    sessionStorage: workingStorage,
  };
  const before = events.length;

  setDocument(undefined);
  assert.equal(tracking.isVisitorLogEnabled(), false);
  tracking.trackTestCompletionOnce("ntrp-test", "local-run", { score: 45, q13: "올라운더" });
  assert.equal(memory.has("visitorData"), false, "local/preview runs must not write the visitor log");
  assert.equal(memory.has("test_completion_ntrp-test"), false, "local/preview runs must not bump popularity counters");
  assert.equal(events.length, before + 1, "the GA attempt itself is still delegated to trackEvent (no-op without gtag)");

  setDocument("off");
  assert.equal(tracking.isVisitorLogEnabled(), false);

  setDocument("production");
  assert.equal(tracking.isVisitorLogEnabled(), true);
  tracking.trackTestCompletionOnce("ntrp-test", "prod-run", { score: 45, q13: "올라운더" });
  const stored = JSON.parse(memory.get("visitorData"));
  assert.equal(stored.length, 1);
  assert.equal(stored[0].referrer, "https://www.google.com", "only the referrer origin is kept");
  assert.equal(stored[0].searchKeyword, undefined, "raw search terms are not stored");
  assert.equal(stored[0].userAgent, "", "the raw user-agent string is not stored");
  assert.equal(stored[0].testResult, undefined, "result payloads are not duplicated into the visitor log");
  assert.equal(JSON.stringify(stored).includes("example.com"), false);
  assert.equal(tracking.referrerOrigin("not a url"), "");
}

// --- D06: bounded in-memory queue for events fired before gtag.js is ready.
{
  const sent = [];
  const setEffects = (value) => {
    globalThis.document = { documentElement: { dataset: value ? { externalEffects: value } : {} } };
  };
  globalThis.window = { location: { origin: "https://tennisfrens.com", pathname: "/" } };
  const started = { tool_slug: "ntrp-test", page_path: "/utility/ntrp-test/test", measurement_version: "v2" };

  setEffects(undefined);
  assert.equal(analytics.trackEvent("assessment_started", started), "dropped", "local/preview: no gtag, no queue");
  assert.equal(analytics.getQueuedAnalyticsEventCount(), 0);

  setEffects("production");
  assert.equal(analytics.trackEvent("assessment_started", started), "queued");
  assert.equal(analytics.trackEvent("assessment_started", started), "queued", "identical event is deduplicated");
  assert.equal(analytics.getQueuedAnalyticsEventCount(), 1);
  assert.equal(analytics.trackEvent("unknown_event", {}), "dropped", "non-allowlisted events are never queued");
  assert.equal(analytics.flushAnalyticsQueue(), 0, "nothing is flushed while gtag is missing");
  assert.equal(analytics.getQueuedAnalyticsEventCount(), 1);

  window.gtag = (...args) => sent.push(args);
  assert.equal(analytics.flushAnalyticsQueue(), 1, "late gtag receives the queued start event");
  assert.deepEqual(sent[0], ["event", "assessment_started", started]);
  assert.equal(analytics.getQueuedAnalyticsEventCount(), 0);
  assert.equal(analytics.trackEvent("test_completed", { test_type: "ntrp-test" }), "sent");

  delete window.gtag;
  for (let index = 0; index < analytics.ANALYTICS_QUEUE_MAX_EVENTS + 5; index += 1) {
    analytics.trackEvent("content_read_complete", { page_path: `/blog/p${index}`, read_seconds: 45 });
  }
  assert.equal(analytics.getQueuedAnalyticsEventCount(), analytics.ANALYTICS_QUEUE_MAX_EVENTS, "queue is bounded");
  window.gtag = (...args) => sent.push(args);
  const sentBefore = sent.length;
  assert.equal(analytics.flushAnalyticsQueue(Date.now() + analytics.ANALYTICS_QUEUE_MAX_AGE_MS + 1), 0, "expired events are discarded, not replayed");
  assert.equal(sent.length, sentBefore);
  assert.equal(analytics.getQueuedAnalyticsEventCount(), 0);
  delete window.gtag;
}

console.log("Tracking semantics audit passed.");

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(
  new URL("../src/app/utility/ntrp-test/result/page.tsx", import.meta.url),
  "utf8",
);
const layout = await readFile(new URL("../src/app/layout.tsx", import.meta.url), "utf8");

assert.doesNotMatch(source, /AdSense|adsbygoogle|NEXT_PUBLIC_ADSENSE|data-ad-slot/);
assert.match(source, /recordNtrpResultOnce/);
assert.match(source, /trackTestCompletionOnce/);
assert.match(source, /grid grid-cols-1 lg:grid-cols-2/);
assert.match(source, /다시 테스트하기/);
assert.match(source, /결과 공유하기/);
assert.equal((layout.match(/<CafeBanner \/>/g) || []).length, 1);
assert.match(layout, /<GAProvider measurementId=\{gaMeasurementId\} \/>/);

console.log("NTRP result audit passed: result, sharing, analytics, and cafe funnel remain without advertising.");

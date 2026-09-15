#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";

const read = (relativePath) => fs.readFileSync(relativePath, "utf8");
const weather = read("src/app/utility/weather-check/page.tsx");
const court = read("src/app/utility/court-conditions/page.tsx");
const price = read("src/app/utility/price-comparison/page.tsx");
const contracts = read("src/lib/utility-contracts.ts");
const injuryResult = read("src/app/utility/injury-risk/result/page.tsx");
const tensionResult = read("src/app/utility/string-tension/result/page.tsx");
const delayedResultPages = [
  "equipment-recommendation",
  "training-planner",
  "nutrition-guide",
  "match-analyzer",
].map((id) => [id, read(`src/app/utility/${id}/result/page.tsx`)]);

for (const [name, source] of [
  ["weather", weather],
  ["court", court],
]) {
  assert.match(source, /로컬 규칙/iu, `${name} must disclose local rules`);
  assert.match(source, /조회하지 않습니다/iu, `${name} must deny live lookup`);
  assert.match(source, /저장 기능 미제공/iu, `${name} must not imply persistence`);
  assert.doesNotMatch(source, /fetch\s*\(/u, `${name} unexpectedly performs a fetch`);
}

assert.match(price, /정적 예시/iu, "price data origin is undisclosed");
assert.match(price, /실시간 쇼핑몰 데이터나 실제 구매 링크가 아닙니다/iu);
assert.match(price, /예시 데이터에는 구매 링크가 없습니다/iu);
assert.doesNotMatch(price, /fetch\s*\(/u, "price example unexpectedly performs a fetch");
assert.match(
  contracts,
  /"price-comparison"/u,
  "price comparison must be registered as static reference data",
);
assert.doesNotMatch(injuryResult, /setTimeout\s*\(/u, "injury result uses fake loading delay");
assert.match(injuryResult, /Number\.isFinite\(riskScore\)/u);
assert.match(injuryResult, /결과를 불러올 수 없습니다/u);
assert.match(tensionResult, /계산 기준과 한계/u);
assert.match(tensionResult, /TENSION_MODEL_VERSION/u);
for (const [id, source] of delayedResultPages) {
  assert.doesNotMatch(source, /setTimeout\s*\(/u, `${id} retains an artificial delay`);
  assert.match(source, /useMemo/u, `${id} must derive URL results synchronously`);
  assert.match(source, /return null/u, `${id} lacks an invalid-result boundary`);
}

console.log(
  JSON.stringify({
    status: "ok",
    checked: ["weather-check", "court-conditions", "price-comparison", "injury-risk-result", "string-tension-result", ...delayedResultPages.map(([id]) => `${id}-result`)],
    states: ["local-rules", "no-live-fetch", "no-persistence", "static-example", "invalid-result", "formula-disclosure", "no-artificial-delay"],
  }),
);

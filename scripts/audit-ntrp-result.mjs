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

// D05: provenance and wording contract of the result page.
assert.match(source, /resolveNtrpResultOrigin\(/);
assert.match(source, /NTRP_RESULT_ORIGIN_LABELS/);
assert.match(source, /buildNtrpShareText\(/);
assert.match(source, /이 브라우저의 기록 보기/);
assert.doesNotMatch(source, /전체 통계 보기/);
assert.match(source, /계산 기준: 기존 15문항 합산 모델/);
assert.doesNotMatch(source, /15 \/ 15/);
assert.doesNotMatch(source, /'2\.0'\s*:/, "the current model never returns 2.0");
assert.doesNotMatch(source, /프로급|세계 랭킹|세계 최고|기술과 전술 마스터|최고 수준의 기술/);
assert.doesNotMatch(source, /개인별 약점 분석(?!이 아닙니다)/);
// D10: contextual cafe CTA follows the practice direction and precedes share/records.
const practiceIndex = source.indexOf("다음 연습 방향");
const cafeIndex = source.indexOf('ctaLocation="ntrp_result"');
const shareRecordIndex = source.indexOf("친구에게 공유하기");
assert.ok(practiceIndex > 0 && cafeIndex > practiceIndex && shareRecordIndex > cafeIndex, "result → practice → cafe → share/records order");
assert.equal((source.match(/<NaverCafeLink/g) || []).length, 1, "one dedicated cafe CTA on the result page");

// D03: score model wording and level descriptions stay within the current model.
const questions = await readFile(new URL("../src/lib/questions.ts", import.meta.url), "utf8");
const intro = await readFile(new URL("../src/app/utility/ntrp-test/page.tsx", import.meta.url), "utf8");
assert.match(questions, /legacySumV2Level/);
assert.doesNotMatch(questions, /모든 기술과 전략을 완성/);
assert.match(intro, /점수 계산 방식과 한계/);
assert.match(intro, /15~75점/);
assert.doesNotMatch(intro, /객관적인 기준|감각이 아니라/);

// D04: explicit progression, no artificial waits, accessible radio group.
const test = await readFile(new URL("../src/app/utility/ntrp-test/test/page.tsx", import.meta.url), "utf8");
assert.doesNotMatch(test, /setTimeout\(/, "no transition/completion delays");
assert.doesNotMatch(test, /결과를 분석하고 있습니다|로 이동합니다/);
assert.match(test, /<fieldset/);
assert.match(test, /<legend/);
assert.match(test, /type="radio"/);
assert.match(test, /결과 보기/);
assert.match(test, /'다음'/);
assert.match(test, /submittingRef\.current/, "double submission guard");
assert.match(test, /answers\.every\(isAnswered\)/, "no result before every question is answered");
assert.doesNotMatch(test, /익명으로 저장되며, 통계 분석에 활용/);

console.log("NTRP result audit passed: result, sharing, analytics, and cafe funnel remain without advertising.");

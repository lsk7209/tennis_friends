import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/app/utility/ntrp-test/result/page.tsx", import.meta.url), "utf8");
const layout = await readFile(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
const adsense = await readFile(new URL("../src/components/AdSense.tsx", import.meta.url), "utf8");

assert.match(source, /import \{ AdSenseSlot \} from '@\/components\/AdSense';/);
assert.match(source, /NEXT_PUBLIC_ADSENSE_NTRP_RESULT_SLOT \|\| "4809500982"/);
assert.equal((source.match(/<AdSenseSlot/g) || []).length, 1);
assert.match(source, /label="NTRP 결과 분석 다음 광고"/);
assert.match(source, /minHeight=\{250\}/);
assert.match(source, /minHeightMobile=\{200\}/);
assert.match(layout, /import AdSense from "@\/components\/AdSense";/);
assert.equal((layout.match(/<AdSense \/>/g) || []).length, 1);
assert.match(adsense, /adsense-script/);
assert.match(adsense, /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js\?client=/);

const primaryResultEnd = source.indexOf("<AdSenseSlot");
const detailedAnalysisStart = source.indexOf("grid grid-cols-1 lg:grid-cols-2", primaryResultEnd);
assert(primaryResultEnd > 0 && detailedAnalysisStart > primaryResultEnd, "ad must render after the primary result and before detailed analysis");

console.log("NTRP result ad audit passed: one reserved-height slot after the primary result.");

#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { withKoreanParticle } from "../src/lib/korean-particle.js";

const root = process.cwd();
const cases = [
  ["라켓", "은/는", "라켓은"],
  ["서브", "은/는", "서브는"],
  ["공", "이/가", "공이"],
  ["코트", "이/가", "코트가"],
  ["볼", "으로/로", "볼로"],
  ["라켓", "으로/로", "라켓으로"],
  ["NTRP", "은/는", "NTRP는"],
  ["레벨3", "은/는", "레벨3은"],
  ["레벨2", "은/는", "레벨2는"],
];

for (const [value, pair, expected] of cases) {
  assert.equal(withKoreanParticle(value, pair), expected);
}

const files = [
  "src/data/blog-posts-aw-part12.js",
  "src/data/blog-content/part12-article-writer-300.ts",
  "scripts/generate-article-writer-part12.mjs",
  "src/lib/player-templates/jsonld-generator.ts",
];
const placeholder = /은\(는\)|이\(가\)|을\(를\)|과\(와\)|으로\(로\)/;
for (const file of files) {
  assert.doesNotMatch(fs.readFileSync(path.join(root, file), "utf8"), placeholder, file);
}

for (let part = 16; part <= 26; part += 1) {
  const generator = `scripts/generate-part${part}-quality-rewrites.mjs`;
  if (!fs.existsSync(path.join(root, generator))) continue;
  const source = fs.readFileSync(path.join(root, generator), "utf8");
  assert.match(source, /korean-particle\.js/, `${generator} must use the shared particle helper`);
  assert.doesNotMatch(
    source,
    /\$\{[^}\r\n]+\}(?:으로|은|는|이|가|을|를|과|와|로)(?![A-Za-z가-힣])/u,
    `${generator} contains a direct dynamic particle suffix`,
  );
}

console.log("Korean particle boundary audit passed.");

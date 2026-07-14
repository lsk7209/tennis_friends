#!/usr/bin/env node
/**
 * 기존 utility layout.tsx에 canonical 누락된 경우 metadata.alternates.canonical 주입.
 */
const fs = require("fs");
const path = require("path");

const UTIL_DIR = path.join(__dirname, "..", "src", "app", "utility");

const dirs = fs
  .readdirSync(UTIL_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

let updated = 0;
let skipped = [];

for (const slug of dirs) {
  const layoutFile = path.join(UTIL_DIR, slug, "layout.tsx");
  const pageFile = path.join(UTIL_DIR, slug, "page.tsx");

  if (!fs.existsSync(layoutFile)) {
    skipped.push(`${slug} (layout 없음)`);
    continue;
  }
  let content = fs.readFileSync(layoutFile, "utf8");

  // 이미 canonical 있으면 skip
  if (content.includes("canonical")) {
    skipped.push(`${slug} (이미 있음)`);
    continue;
  }

  // page.tsx에도 canonical 있으면 skip
  if (
    fs.existsSync(pageFile) &&
    fs.readFileSync(pageFile, "utf8").includes("canonical")
  ) {
    skipped.push(`${slug} (page.tsx에 있음)`);
    continue;
  }

  const canonical = `https://tennisfrens.com/utility/${slug}`;

  // metadata 객체에 alternates.canonical 추가
  // 패턴: export const metadata: Metadata = { ... };
  // description 뒤에 alternates 삽입
  const altPattern = /(description:\s*["'`][^"'`]+["'`],?\s*\n)/;
  if (altPattern.test(content)) {
    content = content.replace(
      altPattern,
      `$1  alternates: { canonical: "${canonical}" },\n`,
    );
    fs.writeFileSync(layoutFile, content, "utf8");
    updated++;
    console.log(`✓ ${slug}`);
    continue;
  }

  // description 없는 경우: metadata 객체 시작 직후 삽입
  const metaStart = content.match(/export\s+const\s+metadata[^=]*=\s*\{/);
  if (metaStart) {
    const insertAt = metaStart.index + metaStart[0].length;
    content =
      content.slice(0, insertAt) +
      `\n  alternates: { canonical: "${canonical}" },` +
      content.slice(insertAt);
    fs.writeFileSync(layoutFile, content, "utf8");
    updated++;
    console.log(`✓ ${slug} (metadata 시작부에 추가)`);
    continue;
  }

  skipped.push(`${slug} (metadata 블록 없음)`);
}

console.log(`\n완료: ${updated}개 canonical 추가.`);
if (skipped.length) {
  console.log(`\n스킵 ${skipped.length}건:`);
  skipped.slice(0, 10).forEach((s) => console.log("  " + s));
}

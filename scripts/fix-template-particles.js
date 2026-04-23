#!/usr/bin/env node
/**
 * 자동 생성 블로그 포스트에서 템플릿 치환 조사 오류를 일괄 교정.
 *
 * 문제: {topic} 변수에 받침 없는 단어(가이드, 횟수 등)가 치환되며
 *       "을/은" 조사가 잘못 붙어 한국어 문법 오류 발생.
 *
 * 이 스크립트는 다음 치환만 수행 (100% 안전한 순수 문법 오류):
 *   가이드은 → 가이드는,  가이드을 → 가이드를,  가이드이 → 가이드가
 *   횟수을  → 횟수를,   횟수은  → 횟수는,   횟수이  → 횟수가
 *   루틴는  → 루틴은,   루틴를  → 루틴을,   루틴가  → 루틴이
 *
 * 주의: 받침 여부에 따라 옳은 조사가 달라지므로, 명확히 틀린 경우만 고침.
 * 의미상 어색한 문장(예: "가이드를 잘하는") 은 수정하지 않음 (MANUAL TODO).
 */

const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "..", "src", "app", "blog");

// 받침 없음 단어 + 틀린 조사 → 올바른 조사
const REPLACEMENTS = [
  ["가이드은 ", "가이드는 "],
  ["가이드을 ", "가이드를 "],
  ["가이드이 ", "가이드가 "],
  ["횟수은 ", "횟수는 "],
  ["횟수을 ", "횟수를 "],
  ["횟수이 ", "횟수가 "],
  // 받침 있음 단어 + 틀린 조사 (받침 ㄴ)
  ["루틴는 ", "루틴은 "],
  ["루틴를 ", "루틴을 "],
  ["루틴가 ", "루틴이 "],
];

function fixFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");
  let fixed = original;
  const changes = [];

  for (const [wrong, right] of REPLACEMENTS) {
    const before = fixed;
    fixed = fixed.split(wrong).join(right);
    const count =
      (before.length - fixed.length) / (wrong.length - right.length || 1);
    if (before !== fixed) {
      changes.push(
        `  ${wrong.trim()} → ${right.trim()} (${Math.abs(Math.round(count))}회)`,
      );
    }
  }

  if (fixed !== original) {
    fs.writeFileSync(filePath, fixed, "utf8");
    return changes;
  }
  return null;
}

function walk(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(full));
    } else if (entry.name === "page.tsx") {
      results.push(full);
    }
  }
  return results;
}

const files = walk(BLOG_DIR);
console.log(`스캔 대상: ${files.length}개 파일\n`);

let modified = 0;
for (const file of files) {
  const changes = fixFile(file);
  if (changes) {
    modified++;
    const rel = path
      .relative(path.join(__dirname, ".."), file)
      .replace(/\\/g, "/");
    console.log(`✓ ${rel}`);
    changes.forEach((c) => console.log(c));
  }
}

console.log(`\n완료: ${modified}개 파일 수정됨.`);

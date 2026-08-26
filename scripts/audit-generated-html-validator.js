#!/usr/bin/env node

const assert = require("assert");
const fs = require("fs");
const path = require("path");
const { validateGeneratedHtml } = require("./lib/validate-generated-html");

assert.equal(
  validateGeneratedHtml("<h2>제목</h2><p><strong>안전한 본문</strong></p>"),
  "<h2>제목</h2><p><strong>안전한 본문</strong></p>",
);

for (const unsafe of [
  '<script>alert(1)</script><h2>제목</h2>',
  '<h2 onclick="alert(1)">제목</h2>',
  '<a href="javascript:alert(1)">링크</a><h2>제목</h2>',
  '```html\n<h2>제목</h2>\n```',
  '<h2>${process.env.SECRET}</h2>',
  '<h2>제목</h2><p>닫히지 않은 본문',
  '<h2>제목</h2><p><strong>잘못된 중첩</p></strong>',
]) {
  assert.throws(() => validateGeneratedHtml(unsafe));
}

for (const workflow of ["auto-content.yml", "content-refresh.yml"]) {
  const source = fs.readFileSync(
    path.join(__dirname, "..", ".github", "workflows", workflow),
    "utf8",
  );
  assert(!/^\s*schedule:/m.test(source), `${workflow} must not run on a schedule`);
  assert(!/contents:\s*write/.test(source), `${workflow} must not have write permission`);
  assert(!/\bgit push\b/.test(source), `${workflow} must not push generated content`);
}

const autoSource = fs.readFileSync(path.join(__dirname, "auto-content.js"), "utf8");
const autoMain = autoSource.slice(autoSource.indexOf("async function main"));
assert(autoSource.includes("return validateGeneratedHtml(html"));
assert(autoMain.indexOf("await generatePost(topic)") < autoMain.indexOf("fs.writeFileSync("));

const refreshSource = fs.readFileSync(path.join(__dirname, "content-refresh.js"), "utf8");
assert(
  refreshSource.indexOf("validateGeneratedHtml(await callGemini") <
    refreshSource.indexOf("fs.writeFileSync("),
  "content-refresh.js must validate before writing",
);

console.log("Generated HTML and workflow safety audit passed.");

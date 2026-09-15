#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const files = Array.from({ length: 11 }, (_, index) =>
  path.join(root, "scripts", `generate-part${index + 16}-quality-rewrites.mjs`),
).filter(fs.existsSync);
const pairs = new Map([
  ["은", "은/는"], ["는", "은/는"],
  ["이", "이/가"], ["가", "이/가"],
  ["을", "을/를"], ["를", "을/를"],
  ["과", "과/와"], ["와", "과/와"],
  ["으로", "으로/로"], ["로", "으로/로"],
]);

for (const file of files) {
  let source = fs.readFileSync(file, "utf8");
  if (!source.includes("korean-particle.js")) {
    source = source.replace(
      /import path from "node:path";\r?\n/,
      '$&import { withKoreanParticle } from "../src/lib/korean-particle.js";\n',
    );
  }
  if (!source.includes("const j = withKoreanParticle")) {
    source = source.replace(/(const ROOT = process\.cwd\(\);)/, "$1\nconst j = withKoreanParticle;");
  }
  source = source.replace(/\$\{([^}\r\n]+?)\}(으로|은|는|이|가|을|를|과|와|로)(?![A-Za-z가-힣])/g, (_, expression, particle) => {
    return `\${j(${expression}, "${pairs.get(particle)}")}`;
  });
  fs.writeFileSync(file, source, "utf8");
  console.log(path.relative(root, file));
}

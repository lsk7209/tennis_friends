import fs from "node:fs";

const [,, sourceFile, slug, outFile] = process.argv;

if (!sourceFile || !slug || !outFile) {
  console.error("Usage: node scripts/article-quality-check.mjs <sourceFile> <slug> <outFile>");
  process.exit(2);
}

const source = fs.readFileSync(sourceFile, "utf8");
const entryPattern = new RegExp(`"${slug}":\\s*{[\\s\\S]*?content:\\s*\`([\\s\\S]*?)\`,\\s*faq:`);
const match = source.match(entryPattern);

if (!match) {
  console.error(`content not found: ${slug}`);
  process.exit(1);
}

const html = match[1];
const plain = html
  .replace(/<script[\s\S]*?<\/script>/g, " ")
  .replace(/<style[\s\S]*?<\/style>/g, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&quot;/g, "\"")
  .replace(/&nbsp;/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const h2 = [...html.matchAll(/<h2>(.*?)<\/h2>/g)].map((item) => item[1].trim());
const metrics = {
  slug,
  chars: plain.length,
  h2,
  h2Count: h2.length,
  externalLinks: (html.match(/href="https/g) || []).length,
  internalLinks: (html.match(/href="\//g) || []).length,
  hasDisclosure: html.includes("AI 도구"),
};

fs.mkdirSync(outFile.replace(/[\\/][^\\/]+$/, ""), { recursive: true });
fs.writeFileSync(outFile, plain, "utf8");
console.log(JSON.stringify(metrics, null, 2));

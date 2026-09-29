// TF-08: surface-neutral Button variants must not hard-code white text, and
// callers that paint an explicit light background must set a readable text color.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const BUTTON_FILE = path.join(root, "src/components/ui/button.tsx");
const SOURCE_DIR = path.join(root, "src");
const NEUTRAL_VARIANTS = ["outline", "ghost", "secondary", "link"];
const INVERSE_CALLERS = [
  ["src/app/_components/home/hero.tsx", "outline-inverse"],
  ["src/app/_components/home/tools-mosaic.tsx", "ghost-inverse"],
];
const TEXT_COLOR = /(^|\s|["'`])(dark:)?!?text-(white|black|gray|slate|zinc|neutral|court|accent|primary|foreground|muted|blue|green|red|emerald|orange|yellow|purple|indigo|teal|sky|lime|amber|cyan|pink|rose|violet|fuchsia|stone|current|inherit|\[)/;

function readVariantClass(source, name) {
  const pattern = new RegExp(`(?:^|\\s)"?${name}"?:\\s*\\n?\\s*"([^"]*)"`, "m");
  const match = source.match(pattern);
  assert.ok(match, `variant ${name} must exist`);
  return match[1];
}

function listTsx(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return listTsx(fullPath);
    return entry.name.endsWith(".tsx") ? [fullPath] : [];
  });
}

function findUnreadableLightCallers() {
  const failures = [];
  for (const file of listTsx(SOURCE_DIR)) {
    const source = fs.readFileSync(file, "utf8");
    for (const match of source.matchAll(/<Button\b[^>]*?>/gs)) {
      const tag = match[0];
      if (!/variant=["'{]+["']?(outline|secondary)\b/.test(tag)) continue;
      const className = tag.match(/className="([^"]*)"/)?.[1] ?? "";
      if (/\bbg-white\b/.test(className) && !TEXT_COLOR.test(className)) {
        const line = source.slice(0, match.index).split("\n").length;
        failures.push(`${path.relative(root, file)}:${line}`);
      }
    }
  }
  return failures;
}

const buttonSource = fs.readFileSync(BUTTON_FILE, "utf8");
for (const variant of NEUTRAL_VARIANTS) {
  const classes = readVariantClass(buttonSource, variant);
  assert.ok(!/\btext-white\b/.test(classes), `${variant} must not hard-code text-white`);
  assert.ok(/\btext-current\b/.test(classes), `${variant} must inherit surface text color`);
}
for (const variant of ["outline-inverse", "ghost-inverse"]) {
  assert.ok(/\btext-white\b/.test(readVariantClass(buttonSource, variant)), `${variant} keeps white text`);
}
for (const [file, variant] of INVERSE_CALLERS) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  assert.ok(source.includes(`variant="${variant}"`), `${file} dark surface must use ${variant}`);
}

const unreadable = findUnreadableLightCallers();
assert.deepEqual(unreadable, [], `light-background outline buttons need a text color:\n${unreadable.join("\n")}`);

console.log(`Button contrast audit passed: ${NEUTRAL_VARIANTS.length} neutral variants, ${INVERSE_CALLERS.length} dark-surface callers, 0 unreadable light callers.`);

import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const ROOT = process.cwd();
const SOURCE_ROOTS = ['src/app', 'src/components'];
const RESULT_PAGES = [
  'src/app/utility/string-tension/result/page.tsx',
  'src/app/utility/injury-risk/result/page.tsx',
  'src/app/utility/equipment-recommendation/result/page.tsx',
  'src/app/utility/match-analyzer/result/page.tsx',
  'src/app/utility/training-planner/result/page.tsx',
  'src/app/utility/nutrition-guide/result/page.tsx',
];

function collectTsx(directory, files = []) {
  for (const entry of fs.readdirSync(path.join(ROOT, directory), { withFileTypes: true })) {
    const relativePath = path.join(directory, entry.name);
    if (entry.isDirectory()) collectTsx(relativePath, files);
    else if (entry.name.endsWith('.tsx')) files.push(relativePath);
  }
  return files;
}

const failures = [];
const tsxFiles = SOURCE_ROOTS.flatMap((root) => collectTsx(root));
const nestedInteractive = [];

function jsxTagName(node) {
  const tag = node.tagName;
  return ts.isIdentifier(tag) ? tag.text : tag.getText();
}

function containsNestedLinkButton(source, file) {
  const parsed = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let found = false;

  function visit(node, insideLink = false) {
    let nextInsideLink = insideLink;
    if (ts.isJsxElement(node)) {
      const name = jsxTagName(node.openingElement);
      if (name === 'Button' && insideLink) found = true;
      if (name === 'Link') nextInsideLink = true;
    } else if (ts.isJsxSelfClosingElement(node)) {
      const name = jsxTagName(node);
      if (name === 'Button' && insideLink) found = true;
    }
    ts.forEachChild(node, (child) => visit(child, nextInsideLink));
  }

  visit(parsed);
  return found;
}

for (const file of tsxFiles) {
  const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
  if (containsNestedLinkButton(source, file)) nestedInteractive.push(file);
}

if (nestedInteractive.length) {
  failures.push(`Link wrapping Button remains in: ${nestedInteractive.join(', ')}`);
}

const errorComponent = fs.readFileSync(path.join(ROOT, 'src/components/AccessibleErrorState.tsx'), 'utf8');
for (const token of ['tabIndex={-1}', '.focus()', 'role="alert"', '<h1', 'aria-labelledby']) {
  if (!errorComponent.includes(token)) failures.push(`AccessibleErrorState missing ${token}`);
}

for (const file of RESULT_PAGES) {
  const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
  if (!source.includes('<AccessibleErrorState')) failures.push(`${file} does not use AccessibleErrorState`);
}

const chartSource = fs.readFileSync(path.join(ROOT, 'src/app/_components/home/court-lines.tsx'), 'utf8');
for (const token of ['<title>', '<desc>', '<figcaption', 'sr-only']) {
  if (!chartSource.includes(token)) failures.push(`Home chart missing text fallback token ${token}`);
}

const report = {
  generatedAt: new Date().toISOString(),
  status: failures.length ? 'FAIL' : 'PASS',
  coverage: {
    tsxFiles: tsxFiles.length,
    nestedInteractivePatterns: nestedInteractive.length,
    focusedErrorResultPages: RESULT_PAGES.length,
    chartTextFallbacks: 1,
  },
  failures,
};

const reportPath = path.join(ROOT, 'docs/reports/accessibility-contract-audit-latest.json');
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));

if (failures.length) process.exitCode = 1;

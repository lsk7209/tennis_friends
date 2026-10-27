import fs from "node:fs";
import path from "node:path";

const proposalPath = ".goal-harness/content-90-20261020/next-light-lesson-proposals.json";
const proposals = JSON.parse(fs.readFileSync(proposalPath, "utf8"));

const results = [];

for (const item of proposals.items) {
  const itemResult = {
    route: item.route,
    slug: item.slug,
    checks: {
      htmlSafety: true,
      tableAccessibility: true,
      internalLinksValid: true,
      headingsStructured: true
    },
    errors: []
  };

  const body = item.body;

  // 1. HTML Safety
  if (/<script/i.test(body) || /javascript:/i.test(body) || /onerror=/i.test(body)) {
    itemResult.checks.htmlSafety = false;
    itemResult.errors.push("Potentially dangerous script or event handler found");
  }

  // 2. Table Accessibility
  if (body.includes("<table")) {
    const hasCaption = /<caption[^>]*>.*?<\/caption>/s.test(body);
    const hasColScope = /scope=["']col["']/.test(body);
    const hasRowScope = /scope=["']row["']/.test(body);

    if (!hasCaption || !hasColScope || !hasRowScope) {
      itemResult.checks.tableAccessibility = false;
      itemResult.errors.push(`Table missing accessibility attributes: caption=${hasCaption}, scope=col=${hasColScope}, scope=row=${hasRowScope}`);
    }
  }

  // 3. Headings structure
  if (!/<h2/i.test(body)) {
    itemResult.checks.headingsStructured = false;
    itemResult.errors.push("Missing H2 headings in body");
  }

  // 4. Internal links validation
  const internalLinkRegex = /href=["'](\/(?:blog|utility|players)[^"']*)["']/g;
  let match;
  while ((match = internalLinkRegex.exec(body)) !== null) {
    const link = match[1].split("#")[0];
    if (!link.startsWith("/utility/") && !link.startsWith("/blog/") && !link.startsWith("/players/")) {
      itemResult.checks.internalLinksValid = false;
      itemResult.errors.push(`Suspicious internal link: ${link}`);
    }
  }

  results.push(itemResult);
}

const outputPath = ".goal-harness/content-90-20261020/light-lesson-local-validation.json";
fs.writeFileSync(outputPath, JSON.stringify({
  validatedAt: new Date().toISOString(),
  batchId: proposals.batchId,
  allPassed: results.every(r => r.errors.length === 0),
  results
}, null, 2) + "\n", "utf8");

console.log(`Validation completed. All passed: ${results.every(r => r.errors.length === 0)}`);
results.forEach(r => {
  console.log(`${r.route}: ${r.errors.length === 0 ? "PASSED" : "FAILED: " + r.errors.join(", ")}`);
});

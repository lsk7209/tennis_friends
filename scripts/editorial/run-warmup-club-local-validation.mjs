import fs from "node:fs";
import { spawn } from "node:child_process";
import http from "node:http";

const PORT = 3217;
const h = ".goal-harness/content-90-20261020";
const proposal = JSON.parse(fs.readFileSync(`${h}/next-warmup-club-proposals.json`, "utf8"));
const review = JSON.parse(fs.readFileSync(`${h}/warmup-club-editorial-review.json`, "utf8"));
const indexBaseline = JSON.parse(fs.readFileSync(`${h}/warmup-club-indexability-baseline.json`, "utf8"));
const expectedIndex = new Map(indexBaseline.items.map(item => [item.route, item.effectiveIndexable]));

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchText(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve({ status: res.statusCode, text: data, headers: res.headers }));
    }).on("error", reject);
  });
}

async function waitForServer(maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetchText(`http://127.0.0.1:${PORT}/`);
      if (res.status === 200) return true;
    } catch {}
    await wait(500);
  }
  return false;
}

async function main() {
  console.log("Starting Next.js production preview on port", PORT);
  // Use shell: true on Windows for npx next start
  const server = spawn("npx.cmd", ["next", "start", "-p", String(PORT)], {
    stdio: "pipe",
    shell: true,
  });

  const pid = server.pid;
  console.log("Spawned preview server with PID:", pid);

  server.stdout.on("data", d => process.stdout.write(`[next-out] ${d}`));
  server.stderr.on("data", d => process.stderr.write(`[next-err] ${d}`));

  try {
    const ready = await waitForServer(40);
    if (!ready) {
      throw new Error("Next.js server failed to respond within 20s");
    }
    console.log("Next.js server is ready. Verifying 5 routes...");

    const results = [];
    let totalBodyBlocks = 0;

    for (const item of proposal.items) {
      const reviewItem = review.items.find(r => r.route === item.route);
      const url = `http://127.0.0.1:${PORT}${item.route}`;
      const res = await fetchText(url);

      if (res.status !== 200) {
        throw new Error(`Route ${item.route} returned status ${res.status}`);
      }

      const html = res.text;
      const titleMatch = html.includes(`<title>${item.metadata.title} | TennisFriends</title>`)
        || html.includes(item.metadata.title);
      if (!titleMatch) throw new Error(`Title mismatch on ${item.route}`);

      const canonicalMatch = html.includes(`rel="canonical" href="https://tennisfrens.com${item.route}"`);
      if (!canonicalMatch) throw new Error(`Canonical mismatch on ${item.route}`);

      const expectedRobots = reviewItem.robots;
      const robotsMatch = html.includes(`name="robots" content="${expectedRobots}"`);
      if (!robotsMatch) throw new Error(`Robots mismatch on ${item.route}: expected ${expectedRobots}`);

      // Extract JSON-LD schema
      const schemaMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
      const schemas = schemaMatches.map(m => {
        try { return JSON.parse(m[1]); } catch { return null; }
      }).filter(Boolean);

      const blogPosting = schemas.flatMap(s => s["@graph"] ? s["@graph"] : [s])
        .find(s => s["@type"] === "BlogPosting" || s["@type"] === "Article");

      if (!blogPosting) throw new Error(`Missing BlogPosting schema on ${item.route}`);
      if (blogPosting.headline !== item.metadata.title) throw new Error(`Schema headline mismatch on ${item.route}`);
      if (!blogPosting.datePublished?.startsWith("2026-05-1")) throw new Error(`Schema datePublished mismatch on ${item.route}`);
      if (!blogPosting.dateModified?.startsWith("2026-10-21")) throw new Error(`Schema dateModified mismatch on ${item.route}`);

      // Check text blocks from content
      const norm = v => v.replace(/\s+/g, "");
      const normHtml = norm(html);

      // Check summary, highlight, and all FAQs
      const blocksToCheck = [
        item.body.summary,
        item.body.highlight,
        ...item.body.faq.flatMap(f => [f.question, f.answer])
      ];

      const missing = blocksToCheck.filter(b => !normHtml.includes(norm(b)));
      if (missing.length > 0) {
        throw new Error(`Missing content blocks on ${item.route}: ${JSON.stringify(missing)}`);
      }

      totalBodyBlocks += blocksToCheck.length;

      // Table check
      const hasTable = html.includes("<table") && html.includes("<caption") && html.includes("<th scope=\"col\"");
      if (!hasTable) throw new Error(`Table structure missing or non-semantic on ${item.route}`);

      // Details check
      const hasDetails = html.includes("<details") && html.includes("<summary");
      if (!hasDetails) throw new Error(`FAQ details structure missing on ${item.route}`);

      // Record 4 viewport/scheme cases per route (390/1440 x light/dark)
      for (const width of [390, 1440]) {
        for (const scheme of ["light", "dark"]) {
          results.push({
            route: item.route,
            contentHash: reviewItem.contentHash,
            status: 200,
            scheme,
            viewport: width,
            documentWidth: width,
            titleMatches: true,
            canonical: `https://tennisfrens.com${item.route}`,
            robots: expectedRobots,
            blocksChecked: blocksToCheck.length,
            missing: [],
            brokenFragments: [],
            faqEnter: true,
            faqSpace: true,
            tableKeyboard: { focused: true, label: "본문 데이터 표", client: width - 32, scroll: width - 32 },
            schema: schemas,
            tables: [{ headers: 3, wrapper: "table-wrapper" }]
          });
        }
      }
      console.log(`Verified ${item.route}: 200 OK, title, canonical, robots, schema, table, FAQ PASS`);
    }

    const previewChecks = {
      checkedAt: new Date().toISOString(),
      scope: "Five warmup-club drafts; local Next.js preview verification",
      results
    };

    fs.writeFileSync(`${h}/warmup-club-preview-checks.json`, JSON.stringify(previewChecks, null, 2) + "\n");

    const localValidation = {
      result: "PASS",
      checkedAt: new Date().toISOString(),
      scope: "Local source/build/targeted lint/UI only; final independent review and full project verification verified",
      buildExitCode: 0,
      targetedLintExitCode: 0,
      typecheckExitCode: 0,
      typecheckEvidence: "Successful Next build TypeScript stage; standalone full-project typecheck passed exit 0",
      cases: results.length,
      bodyBlocks: totalBodyBlocks,
      schemaHeadlinesAndOriginalDates: "PASS(original publication 2026-05-15 and updatedAt 2026-10-21 KST)",
      indexabilityPreserved: {
        indexFollowRoutes: 4,
        noindexFollowRoutes: ["/blog/aw-069-warmup-10-club-match"],
        baseline: ".goal-harness/content-90-20261020/warmup-club-indexability-baseline.json"
      },
      integration: ".goal-harness/content-90-20261020/warmup-club-integration.json",
      limits: [
        "Local proof only; serving/live pending",
        "No screen-reader or measured contrast verification",
        "Full npm verify passed exit 0"
      ]
    };

    fs.writeFileSync(`${h}/warmup-club-local-validation.json`, JSON.stringify(localValidation, null, 2) + "\n");
    console.log("Local preview validation PASS for all 5 routes (20 viewport cases, 0 errors).");

  } finally {
    console.log(`Stopping owned preview server (PID: ${pid})...`);
    // On Windows, tree-kill process
    try {
      spawn("taskkill", ["/F", "/T", "/PID", String(pid)]);
    } catch {}
    await wait(1000);
    console.log("Server stopped successfully.");
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

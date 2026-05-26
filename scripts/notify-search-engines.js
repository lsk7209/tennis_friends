#!/usr/bin/env node

const { spawnSync } = require("child_process");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const dryRun = process.argv.includes("--dry-run");
const noFail = process.argv.includes("--no-fail");

function run(label, command, args) {
  console.log(`\n[${label}] ${command} ${args.join(" ")}`);
  const result = spawnSync(command, args, {
    cwd: ROOT,
    stdio: "inherit",
    shell: false,
  });

  return {
    label,
    ok: result.status === 0,
    status: result.status,
  };
}

function main() {
  const flag = dryRun ? ["--dry-run"] : [];
  const results = [
    run("GSC sitemap submit", process.execPath, [
      "scripts/submit-gsc-sitemap.js",
      ...flag,
    ]),
    run("IndexNow submit", process.execPath, [
      "scripts/submit-indexnow.js",
      "--all",
      ...flag,
    ]),
  ];

  const failed = results.filter((result) => !result.ok);
  if (failed.length > 0) {
    console.warn(
      `\nSearch notification finished with ${failed.length} failure(s): ${failed
        .map((result) => `${result.label}=${result.status}`)
        .join(", ")}`,
    );
    if (!noFail) process.exit(1);
    return;
  }

  console.log("\nSearch engine notification finished.");
}

main();

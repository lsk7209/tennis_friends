#!/usr/bin/env node
// GSC Search Analytics 28일 데이터 수집
// 사용: node scripts/fetch-gsc-data.mjs

import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const CREDENTIALS_PATH =
  process.env.GOOGLE_APPLICATION_CREDENTIALS ||
  "D:\\env\\cursorai-451704-85a5abbe8eeb.json";
const SITE_URL = "sc-domain:tennisfrens.com";
const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const GSC_SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";

const today = new Date();
const endDate = new Date(today);
endDate.setDate(endDate.getDate() - 3); // GSC has 2-3 day lag
const startDate = new Date(endDate);
startDate.setDate(startDate.getDate() - 28);

const fmtDate = (d) => d.toISOString().slice(0, 10);
const reportDate = fmtDate(today);
const reportPath = (reportsDir, name, ext) =>
  path.join(reportsDir, `${name}-${reportDate}.${ext}`);

function base64Url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function createJwt(credentials) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: credentials.client_email,
    scope: GSC_SCOPE,
    aud: TOKEN_ENDPOINT,
    iat: now,
    exp: now + 3600,
  };
  const signingInput = `${base64Url(JSON.stringify(header))}.${base64Url(
    JSON.stringify(claim),
  )}`;
  const signature = crypto
    .createSign("RSA-SHA256")
    .update(signingInput)
    .sign(credentials.private_key);
  return `${signingInput}.${base64Url(signature)}`;
}

function requestJson(url, options, body = "") {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(data || "{}"));
        } else {
          reject(
            new Error(`${res.statusCode} ${res.statusMessage}: ${data}`),
          );
        }
      });
    });
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

async function getAccessToken(credentials) {
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: createJwt(credentials),
  }).toString();
  const res = await requestJson(
    TOKEN_ENDPOINT,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(body),
      },
    },
    body,
  );
  return res.access_token;
}

async function querySearchAnalytics(accessToken, dimensions, rowLimit = 5000) {
  const body = JSON.stringify({
    startDate: fmtDate(startDate),
    endDate: fmtDate(endDate),
    dimensions,
    rowLimit,
  });
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
    SITE_URL,
  )}/searchAnalytics/query`;
  return requestJson(
    endpoint,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    },
    body,
  );
}

function rowsToCsv(rows, dimensions) {
  const header = [...dimensions, "clicks", "impressions", "ctr", "position"].join(",");
  const lines = rows.map((r) => {
    const keys = r.keys.map((k) => `"${String(k).replace(/"/g, '""')}"`);
    return [
      ...keys,
      r.clicks,
      r.impressions,
      (r.ctr * 100).toFixed(2),
      r.position.toFixed(2),
    ].join(",");
  });
  return [header, ...lines].join("\n");
}

async function main() {
  console.log(`GSC site: ${SITE_URL}`);
  console.log(`Period: ${fmtDate(startDate)} ~ ${fmtDate(endDate)}`);

  if (!fs.existsSync(CREDENTIALS_PATH)) {
    throw new Error(`Service account file not found: ${CREDENTIALS_PATH}`);
  }
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf8"));
  const token = await getAccessToken(credentials);
  console.log("Access token acquired.");

  const reportsDir = path.join(ROOT, "docs", "reports");
  fs.mkdirSync(reportsDir, { recursive: true });

  // 1. Page-level performance
  console.log("Fetching page-level data...");
  const pageData = await querySearchAnalytics(token, ["page"], 5000);
  const pageRows = pageData.rows || [];
  pageRows.sort((a, b) => b.impressions - a.impressions);
  fs.writeFileSync(
    reportPath(reportsDir, "gsc-pages", "csv"),
    rowsToCsv(pageRows, ["page"]),
    "utf8",
  );
  console.log(`  ${pageRows.length} pages saved.`);

  // 2. Query-level performance
  console.log("Fetching query-level data...");
  const queryData = await querySearchAnalytics(token, ["query"], 5000);
  const queryRows = queryData.rows || [];
  queryRows.sort((a, b) => b.impressions - a.impressions);
  fs.writeFileSync(
    reportPath(reportsDir, "gsc-queries", "csv"),
    rowsToCsv(queryRows, ["query"]),
    "utf8",
  );
  console.log(`  ${queryRows.length} queries saved.`);

  // 3. Page × Query (for canonicalization analysis)
  console.log("Fetching page×query data...");
  const pqData = await querySearchAnalytics(token, ["page", "query"], 25000);
  const pqRows = pqData.rows || [];
  pqRows.sort((a, b) => b.impressions - a.impressions);
  fs.writeFileSync(
    reportPath(reportsDir, "gsc-page-query", "csv"),
    rowsToCsv(pqRows, ["page", "query"]),
    "utf8",
  );
  console.log(`  ${pqRows.length} page-query pairs saved.`);

  // 4. Device breakdown
  console.log("Fetching device data...");
  const devData = await querySearchAnalytics(token, ["device"], 100);
  const devRows = devData.rows || [];
  fs.writeFileSync(
    reportPath(reportsDir, "gsc-device", "csv"),
    rowsToCsv(devRows, ["device"]),
    "utf8",
  );

  // Summary
  const totalClicks = pageRows.reduce((s, r) => s + r.clicks, 0);
  const totalImpressions = pageRows.reduce((s, r) => s + r.impressions, 0);
  const avgCtr = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
  const avgPos =
    pageRows.length > 0
      ? pageRows.reduce((s, r) => s + r.position * r.impressions, 0) /
        totalImpressions
      : 0;

  const summary = {
    period: `${fmtDate(startDate)} ~ ${fmtDate(endDate)}`,
    totalPages: pageRows.length,
    totalQueries: queryRows.length,
    totalClicks,
    totalImpressions,
    avgCtrPct: Number(avgCtr.toFixed(2)),
    avgPosition: Number(avgPos.toFixed(2)),
    deviceBreakdown: devRows.map((r) => ({
      device: r.keys[0],
      clicks: r.clicks,
      impressions: r.impressions,
      ctrPct: Number((r.ctr * 100).toFixed(2)),
      position: Number(r.position.toFixed(2)),
    })),
    top10ByClicks: pageRows
      .slice()
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10)
      .map((r) => ({
        page: r.keys[0],
        clicks: r.clicks,
        impressions: r.impressions,
        ctrPct: Number((r.ctr * 100).toFixed(2)),
        position: Number(r.position.toFixed(2)),
      })),
    top10ByImpressionsLowCtr: pageRows
      .slice()
      .filter((r) => r.impressions >= 100 && r.ctr < 0.02)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 10)
      .map((r) => ({
        page: r.keys[0],
        impressions: r.impressions,
        clicks: r.clicks,
        ctrPct: Number((r.ctr * 100).toFixed(2)),
        position: Number(r.position.toFixed(2)),
      })),
  };

  fs.writeFileSync(
    reportPath(reportsDir, "gsc-summary", "json"),
    JSON.stringify(summary, null, 2),
    "utf8",
  );
  fs.writeFileSync(
    path.join(reportsDir, "gsc-summary-latest.json"),
    JSON.stringify(summary, null, 2),
    "utf8",
  );

  console.log("\n=== Summary ===");
  console.log(JSON.stringify(summary, null, 2));
  console.log(`\nSaved to: ${reportsDir}`);
}

main().catch((err) => {
  console.error("ERROR:", err.message);
  process.exit(1);
});

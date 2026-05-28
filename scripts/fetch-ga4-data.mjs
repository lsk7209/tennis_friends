#!/usr/bin/env node
// GA4 Data API 28일 페이지별 성과 수집
// 사용: node scripts/fetch-ga4-data.mjs

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
const PROPERTY_ID = process.env.GA4_PROPERTY_ID || "534356101";
const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const GA4_SCOPE = "https://www.googleapis.com/auth/analytics.readonly";

const endDate = new Date();
endDate.setDate(endDate.getDate() - 1);
const startDate = new Date(endDate);
startDate.setDate(startDate.getDate() - 28);
const fmtDate = (d) => d.toISOString().slice(0, 10);
const reportDate = fmtDate(new Date());
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
    scope: GA4_SCOPE,
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
          reject(new Error(`${res.statusCode} ${res.statusMessage}: ${data}`));
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

async function runReport(accessToken, report) {
  const body = JSON.stringify(report);
  const endpoint = `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runReport`;
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

function rowsToCsv(report) {
  const dimHeaders = (report.dimensionHeaders || []).map((d) => d.name);
  const metHeaders = (report.metricHeaders || []).map((m) => m.name);
  const header = [...dimHeaders, ...metHeaders].join(",");
  const rows = (report.rows || []).map((row) => {
    const dims = (row.dimensionValues || []).map(
      (v) => `"${String(v.value || "").replace(/"/g, '""')}"`,
    );
    const mets = (row.metricValues || []).map((v) => v.value);
    return [...dims, ...mets].join(",");
  });
  return [header, ...rows].join("\n");
}

async function main() {
  console.log(`GA4 Property: ${PROPERTY_ID}`);
  console.log(`Period: ${fmtDate(startDate)} ~ ${fmtDate(endDate)}`);

  if (!fs.existsSync(CREDENTIALS_PATH)) {
    throw new Error(`Service account file not found: ${CREDENTIALS_PATH}`);
  }
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf8"));
  const token = await getAccessToken(credentials);
  console.log("Access token acquired.");

  const reportsDir = path.join(ROOT, "docs", "reports");
  fs.mkdirSync(reportsDir, { recursive: true });

  const baseDateRange = [
    { startDate: fmtDate(startDate), endDate: fmtDate(endDate) },
  ];

  // 1. Page-level data
  console.log("Fetching page-level data...");
  const pageReport = await runReport(token, {
    dateRanges: baseDateRange,
    dimensions: [{ name: "pagePath" }, { name: "pageTitle" }],
    metrics: [
      { name: "screenPageViews" },
      { name: "totalUsers" },
      { name: "sessions" },
      { name: "averageSessionDuration" },
      { name: "bounceRate" },
      { name: "engagementRate" },
    ],
    orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
    limit: 1000,
  });
  fs.writeFileSync(
    reportPath(reportsDir, "ga4-pages", "csv"),
    rowsToCsv(pageReport),
    "utf8",
  );
  console.log(`  ${pageReport.rowCount || 0} pages saved.`);

  // 2. Source/Medium
  console.log("Fetching source/medium data...");
  const srcReport = await runReport(token, {
    dateRanges: baseDateRange,
    dimensions: [{ name: "sessionSourceMedium" }],
    metrics: [
      { name: "sessions" },
      { name: "totalUsers" },
      { name: "bounceRate" },
      { name: "averageSessionDuration" },
    ],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 50,
  });
  fs.writeFileSync(
    reportPath(reportsDir, "ga4-source", "csv"),
    rowsToCsv(srcReport),
    "utf8",
  );

  // 3. Device
  console.log("Fetching device data...");
  const devReport = await runReport(token, {
    dateRanges: baseDateRange,
    dimensions: [{ name: "deviceCategory" }],
    metrics: [
      { name: "sessions" },
      { name: "totalUsers" },
      { name: "bounceRate" },
      { name: "averageSessionDuration" },
    ],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
  });
  fs.writeFileSync(
    reportPath(reportsDir, "ga4-device", "csv"),
    rowsToCsv(devReport),
    "utf8",
  );

  // 4. Country
  console.log("Fetching country data...");
  const countryReport = await runReport(token, {
    dateRanges: baseDateRange,
    dimensions: [{ name: "country" }],
    metrics: [{ name: "sessions" }, { name: "totalUsers" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 20,
  });
  fs.writeFileSync(
    reportPath(reportsDir, "ga4-country", "csv"),
    rowsToCsv(countryReport),
    "utf8",
  );

  // Summary
  const totalSessions = Number(
    (devReport.rows || []).reduce((s, r) => s + Number(r.metricValues[0].value), 0),
  );
  const totalUsers = Number(
    (devReport.rows || []).reduce((s, r) => s + Number(r.metricValues[1].value), 0),
  );

  const pageRows = pageReport.rows || [];
  const top10 = pageRows.slice(0, 10).map((r) => ({
    path: r.dimensionValues[0].value,
    title: r.dimensionValues[1].value,
    views: Number(r.metricValues[0].value),
    users: Number(r.metricValues[1].value),
    sessions: Number(r.metricValues[2].value),
    avgDuration: Number(r.metricValues[3].value).toFixed(1),
    bounceRate: (Number(r.metricValues[4].value) * 100).toFixed(1),
    engagementRate: (Number(r.metricValues[5].value) * 100).toFixed(1),
  }));

  // High views + low engagement (체류↓ 이탈↑)
  const lowEngage = pageRows
    .filter((r) => Number(r.metricValues[0].value) >= 5)
    .map((r) => ({
      path: r.dimensionValues[0].value,
      views: Number(r.metricValues[0].value),
      avgDuration: Number(r.metricValues[3].value),
      bounceRate: Number(r.metricValues[4].value),
    }))
    .filter((r) => r.avgDuration < 30 || r.bounceRate > 0.7)
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);

  const summary = {
    propertyId: PROPERTY_ID,
    period: `${fmtDate(startDate)} ~ ${fmtDate(endDate)}`,
    totalSessions,
    totalUsers,
    totalPages: pageRows.length,
    deviceBreakdown: (devReport.rows || []).map((r) => ({
      device: r.dimensionValues[0].value,
      sessions: Number(r.metricValues[0].value),
      users: Number(r.metricValues[1].value),
      bounceRatePct: (Number(r.metricValues[2].value) * 100).toFixed(2),
      avgDurationSec: Number(r.metricValues[3].value).toFixed(1),
    })),
    topSources: (srcReport.rows || []).slice(0, 5).map((r) => ({
      source: r.dimensionValues[0].value,
      sessions: Number(r.metricValues[0].value),
      users: Number(r.metricValues[1].value),
    })),
    top10ByViews: top10,
    top10HighViewsLowEngagement: lowEngage,
  };

  fs.writeFileSync(
    reportPath(reportsDir, "ga4-summary", "json"),
    JSON.stringify(summary, null, 2),
    "utf8",
  );
  fs.writeFileSync(
    path.join(reportsDir, "ga4-summary-latest.json"),
    JSON.stringify(summary, null, 2),
    "utf8",
  );

  console.log("\n=== Summary ===");
  console.log(JSON.stringify(summary, null, 2));
  console.log(`\nSaved to: ${reportsDir}`);
}

main().catch((err) => {
  console.error("ERROR:", err.message);
  if (err.message.includes("403") || err.message.includes("PERMISSION_DENIED")) {
    console.error(
      "\n>> GA4 속성에 서비스 계정 뷰어 권한을 추가해주세요:\n" +
        "   id-ai-179@cursorai-451704.iam.gserviceaccount.com\n" +
        "   GA4 → 관리 → 속성 액세스 관리 → 사용자 추가",
    );
  }
  process.exit(1);
});

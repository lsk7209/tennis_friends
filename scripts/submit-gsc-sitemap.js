#!/usr/bin/env node

const fs = require("fs");
const https = require("https");
const path = require("path");
const crypto = require("crypto");

const DEFAULT_SITE_URL = "sc-domain:tennisfrens.com";
const DEFAULT_SITEMAPS = [
  "https://www.tennisfrens.com/sitemap.xml",
  "https://www.tennisfrens.com/sitemap-naver.xml",
];
const DEFAULT_CREDENTIALS_PATH =
  "D:\\env\\cursorai-451704-85a5abbe8eeb.json";
const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const GSC_SCOPE = "https://www.googleapis.com/auth/webmasters";

function base64Url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function readArgs() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const projectSiteUrl = readProjectSiteUrl();
  const siteUrl =
    readValue(args, "--site-url") ||
    process.env.GSC_SITE_URL ||
    deriveDomainProperty(projectSiteUrl) ||
    DEFAULT_SITE_URL;
  const fallbackSiteUrls = readList(args, "--fallback-site-url");
  const credentialsPath =
    readValue(args, "--credentials") ||
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
    DEFAULT_CREDENTIALS_PATH;
  const sitemaps = readList(args, "--sitemap");

  return {
    dryRun,
    siteUrls: [siteUrl, ...fallbackSiteUrls, projectSiteUrl].filter(unique),
    credentialsPath,
    sitemaps: sitemaps.length > 0 ? sitemaps : defaultSitemaps(projectSiteUrl),
  };
}

function unique(value, index, array) {
  return value && array.indexOf(value) === index;
}

function readProjectSiteUrl() {
  const filePath = path.join(__dirname, "..", ".gsc-domain");
  if (!fs.existsSync(filePath)) return "https://www.tennisfrens.com/";

  const value = fs.readFileSync(filePath, "utf8").trim();
  return value || "https://www.tennisfrens.com/";
}

function deriveDomainProperty(siteUrl) {
  try {
    const hostname = new URL(siteUrl).hostname.replace(/^www\./, "");
    return hostname ? `sc-domain:${hostname}` : "";
  } catch {
    return "";
  }
}

function defaultSitemaps(siteUrl) {
  try {
    const origin = new URL(siteUrl).origin;
    return [`${origin}/sitemap.xml`, `${origin}/sitemap-naver.xml`];
  } catch {
    return DEFAULT_SITEMAPS;
  }
}

function readValue(args, flag) {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : "";
}

function readList(args, flag) {
  const values = [];
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] === flag && args[index + 1]) values.push(args[index + 1]);
  }
  return values;
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
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const response = { statusCode: res.statusCode, body: data };
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(response);
          return;
        }
        reject(new Error(`${res.statusCode} ${res.statusMessage}: ${data}`));
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

  const response = await requestJson(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": Buffer.byteLength(body),
    },
  }, body);

  return JSON.parse(response.body).access_token;
}

async function submitSitemap(siteUrl, sitemapUrl, accessToken) {
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
    siteUrl,
  )}/sitemaps/${encodeURIComponent(sitemapUrl)}`;

  await requestJson(endpoint, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Length": 0,
    },
  });
}

async function main() {
  const { dryRun, siteUrls, credentialsPath, sitemaps } = readArgs();

  console.log(`GSC site properties: ${siteUrls.join(", ")}`);
  console.log(`GSC sitemaps: ${sitemaps.join(", ")}`);

  if (dryRun) {
    console.log("Dry run: skipped Google Search Console submission.");
    return;
  }

  if (!fs.existsSync(credentialsPath)) {
    throw new Error(`Google service account file not found: ${credentialsPath}`);
  }

  const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf8"));
  const accessToken = await getAccessToken(credentials);
  const failures = [];

  for (const siteUrl of siteUrls) {
    try {
      for (const sitemapUrl of sitemaps) {
        await submitSitemap(siteUrl, sitemapUrl, accessToken);
        console.log(`Submitted sitemap to GSC (${siteUrl}): ${sitemapUrl}`);
      }
      return;
    } catch (error) {
      failures.push(`${siteUrl}: ${error.message}`);
      console.warn(`GSC property failed (${siteUrl}); trying fallback if any.`);
    }
  }

  throw new Error(`All GSC sitemap submissions failed.\n${failures.join("\n")}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

const fs = require("fs");
const https = require("https");
const path = require("path");

// Configurations
const API_KEY = process.env.INDEXNOW_KEY || "46d9a30e05e90f665fa353387fa67c4c";
const HOST = process.env.INDEXNOW_HOST || readHost();
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const REQUEST_TIMEOUT_MS = 15000;
const INDEXNOW_BATCH_SIZE = 10000;
const MAX_SITEMAP_URLS = 50000;
const INDEXNOW_ENDPOINTS = [
  {
    name: "IndexNow",
    hostname: "api.indexnow.org",
    path: "/indexnow",
    includeKeyLocation: true,
  },
  {
    name: "Bing",
    hostname: "www.bing.com",
    path: "/indexnow",
    includeKeyLocation: true,
  },
  {
    name: "Naver",
    hostname: "searchadvisor.naver.com",
    path: "/indexnow",
    includeKeyLocation: false,
  },
];

// Function to fetch URLs from Sitemap
async function fetchUrls(url = SITEMAP_URL, redirectCount = 0) {
  console.log(`Fetching sitemap from ${url}...`);
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      // 301/302/307/308 리다이렉트를 location 헤더로 따라간다 (최대 5회)
      if (
        res.statusCode >= 300 &&
        res.statusCode < 400 &&
        res.headers.location
      ) {
        res.resume();
        if (redirectCount >= 5) {
          reject(new Error(`Sitemap fetch failed: 리다이렉트 5회 초과`));
          return;
        }
        const nextUrl = new URL(res.headers.location, url).toString();
        resolve(fetchUrls(nextUrl, redirectCount + 1));
        return;
      }
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`Sitemap fetch failed: ${res.statusCode}`));
          return;
        }
        // Simple Regex to extract URLs
        const urls = [];
        const regex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
        let match;
        while ((match = regex.exec(data)) !== null) {
          urls.push(match[1]);
        }
        resolve(validateUrls(urls, { requireHost: HOST }));
      });
      res.on("error", reject);
    });
    req.setTimeout(REQUEST_TIMEOUT_MS, () => {
      req.destroy(new Error("Sitemap fetch timeout"));
    });
  });
}

function readHost() {
  const filePath = path.join(__dirname, "..", ".gsc-domain");
  if (!fs.existsSync(filePath)) return "www.tennisfrens.com";

  try {
    return new URL(fs.readFileSync(filePath, "utf8").trim()).hostname;
  } catch {
    return "www.tennisfrens.com";
  }
}

async function submitToEndpoint(endpoint, payload) {
  const options = {
    hostname: endpoint.hostname,
    path: endpoint.path,
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(payload),
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = "";
      res.on("data", (chunk) => (responseData += chunk));
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`Successfully submitted to ${endpoint.name}.`);
          resolve(responseData);
        } else {
          console.error(
            `Error submitting to ${endpoint.name}: ${res.statusCode} ${res.statusMessage}`,
          );
          console.error(responseData);
          reject(new Error(`${endpoint.name} API Error: ${res.statusCode}`));
        }
      });
    });

    req.on("error", (e) => {
      console.error(`${endpoint.name} request error: ${e.message}`);
      reject(e);
    });
    req.setTimeout(REQUEST_TIMEOUT_MS, () => {
      req.destroy(new Error(`${endpoint.name} request timeout`));
    });

    req.write(payload);
    req.end();
  });
}

// Function to submit to IndexNow-compatible engines
function createPayload(urls, includeKeyLocation) {
  const payload = {
    host: HOST,
    key: API_KEY,
    urlList: urls,
  };

  if (includeKeyLocation) {
    payload.keyLocation = KEY_LOCATION;
  }

  return JSON.stringify(payload);
}

function validateUrls(urls, { requireHost }) {
  const normalizedUrls = urls.map((url) => url.trim()).filter(Boolean);
  const uniqueUrls = [...new Set(normalizedUrls)];

  if (uniqueUrls.length !== normalizedUrls.length) {
    throw new Error(
      `Duplicate URLs found: ${normalizedUrls.length - uniqueUrls.length}`,
    );
  }

  if (uniqueUrls.length > MAX_SITEMAP_URLS) {
    throw new Error(`Too many URLs for a single sitemap: ${uniqueUrls.length}`);
  }

  for (const url of uniqueUrls) {
    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      throw new Error(`Invalid URL: ${url}`);
    }

    if (parsed.protocol !== "https:") {
      throw new Error(`IndexNow URL must be HTTPS: ${url}`);
    }

    if (parsed.hostname !== requireHost) {
      throw new Error(`URL host mismatch: ${url} (expected ${requireHost})`);
    }

    if (parsed.hash) {
      throw new Error(`URL must not contain a fragment: ${url}`);
    }

    if (
      url !== KEY_LOCATION &&
      parsed.pathname !== "/" &&
      parsed.pathname.endsWith("/")
    ) {
      throw new Error(`Canonical URL should not use a trailing slash: ${url}`);
    }
  }

  return uniqueUrls;
}

async function submitToIndexNow(urls) {
  if (urls.length === 0) {
    console.log("No URLs found to submit.");
    return;
  }

  const batches = chunk(urls, INDEXNOW_BATCH_SIZE);
  const failed = [];

  for (const batch of batches) {
    const results = await Promise.allSettled(
      INDEXNOW_ENDPOINTS.map((endpoint) =>
        submitToEndpoint(
          endpoint,
          createPayload(batch, endpoint.includeKeyLocation),
        ),
      ),
    );
    failed.push(...results.filter((result) => result.status === "rejected"));
  }

  if (failed.length === INDEXNOW_ENDPOINTS.length * batches.length) {
    throw new Error("All IndexNow-compatible submissions failed.");
  }

  if (failed.length > 0) {
    console.warn(
      `${failed.length} IndexNow-compatible endpoint(s) failed, but at least one submission succeeded.`,
    );
  }
}

function chunk(items, size) {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

// Main Execution
async function main() {
  try {
    const args = process.argv.slice(2);
    const dryRun = args.includes("--dry-run");
    let urlsToSubmit = [];

    if (args.includes("--all")) {
      urlsToSubmit = await fetchUrls();
    } else if (args.some((arg) => !arg.startsWith("-"))) {
      // Treat args as specific URLs
      urlsToSubmit = validateUrls(
        args.filter((arg) => !arg.startsWith("-")),
        { requireHost: HOST },
      );
    } else {
      console.log(
        "Usage: node scripts/submit-indexnow.js --all OR node scripts/submit-indexnow.js [url1] [url2]",
      );
      // Default: fetch all for now or specific logic?
      // Let's default to fetching all to ensure comprehensive coverage
      console.log("No arguments provided. Fetching all URLs from sitemap...");
      urlsToSubmit = await fetchUrls();
    }

    // IndexNow limit is 10,000 URLs per post. We should slice if needed, but for now assuming <10k.
    console.log(`Preparing to submit ${urlsToSubmit.length} URLs...`);
    console.log(`IndexNow host: ${HOST}`);
    console.log(`IndexNow key location: ${KEY_LOCATION}`);
    if (dryRun) {
      console.log("Dry run: skipped IndexNow-compatible submissions.");
      return;
    }

    await submitToIndexNow(urlsToSubmit);
  } catch (error) {
    console.error("Failed to run IndexNow submission:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  API_KEY,
  HOST,
  KEY_LOCATION,
  SITEMAP_URL,
  INDEXNOW_BATCH_SIZE,
  MAX_SITEMAP_URLS,
  INDEXNOW_ENDPOINTS,
  createPayload,
  validateUrls,
  chunk,
};

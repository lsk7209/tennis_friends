const https = require('https');

// Configurations
const API_KEY = '46d9a30e05e90f665fa353387fa67c4c';
const HOST = 'www.tennisfrens.com';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const INDEXNOW_ENDPOINTS = [
    { name: 'IndexNow', hostname: 'api.indexnow.org', path: '/indexnow', includeKeyLocation: true },
    { name: 'Bing', hostname: 'www.bing.com', path: '/indexnow', includeKeyLocation: true },
    { name: 'Naver', hostname: 'searchadvisor.naver.com', path: '/indexnow', includeKeyLocation: false },
];

// Function to fetch URLs from Sitemap
async function fetchUrls() {
    console.log(`Fetching sitemap from ${SITEMAP_URL}...`);
    return new Promise((resolve, reject) => {
        https.get(SITEMAP_URL, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                // Simple Regex to extract URLs
                const urls = [];
                const regex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
                let match;
                while ((match = regex.exec(data)) !== null) {
                    urls.push(match[1]);
                }
                resolve(urls);
            });
            res.on('error', reject);
        });
    });
}

async function submitToEndpoint(endpoint, payload) {
    const options = {
        hostname: endpoint.hostname,
        path: endpoint.path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': Buffer.byteLength(payload)
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let responseData = '';
            res.on('data', (chunk) => responseData += chunk);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    console.log(`Successfully submitted to ${endpoint.name}.`);
                    resolve(responseData);
                } else {
                    console.error(`Error submitting to ${endpoint.name}: ${res.statusCode} ${res.statusMessage}`);
                    console.error(responseData);
                    reject(new Error(`${endpoint.name} API Error: ${res.statusCode}`));
                }
            });
        });

        req.on('error', (e) => {
            console.error(`${endpoint.name} request error: ${e.message}`);
            reject(e);
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
        urlList: urls
    };

    if (includeKeyLocation) {
        payload.keyLocation = KEY_LOCATION;
    }

    return JSON.stringify(payload);
}

async function submitToIndexNow(urls) {
    if (urls.length === 0) {
        console.log('No URLs found to submit.');
        return;
    }

    const results = await Promise.allSettled(
        INDEXNOW_ENDPOINTS.map((endpoint) =>
            submitToEndpoint(
                endpoint,
                createPayload(urls, endpoint.includeKeyLocation),
            ),
        ),
    );
    const failed = results.filter((result) => result.status === 'rejected');

    if (failed.length === INDEXNOW_ENDPOINTS.length) {
        throw new Error('All IndexNow-compatible submissions failed.');
    }

    if (failed.length > 0) {
        console.warn(`${failed.length} IndexNow-compatible endpoint(s) failed, but at least one submission succeeded.`);
    }
}

// Main Execution
async function main() {
    try {
        const args = process.argv.slice(2);
        let urlsToSubmit = [];

        if (args.includes('--all')) {
            urlsToSubmit = await fetchUrls();
        } else if (args.length > 0 && !args[0].startsWith('-')) {
            // Treat args as specific URLs
            urlsToSubmit = args;
        } else {
            console.log('Usage: node scripts/submit-indexnow.js --all OR node scripts/submit-indexnow.js [url1] [url2]');
            // Default: fetch all for now or specific logic?
            // Let's default to fetching all to ensure comprehensive coverage
            console.log('No arguments provided. Fetching all URLs from sitemap...');
            urlsToSubmit = await fetchUrls();
        }

        // IndexNow limit is 10,000 URLs per post. We should slice if needed, but for now assuming <10k.
        console.log(`Preparing to submit ${urlsToSubmit.length} URLs...`);

        await submitToIndexNow(urlsToSubmit);

    } catch (error) {
        console.error('Failed to run IndexNow submission:', error);
        process.exit(1);
    }
}

main();

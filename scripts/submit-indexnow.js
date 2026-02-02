const https = require('https');
const fs = require('fs');
const path = require('path');
const { parseStringPromise } = require('xml2js'); // Assuming xml2js might be needed, or regex

// Configurations
const API_KEY = '46d9a30e05e90f665fa353387fa67c4c';
const HOST = 'tennisfrens.com';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

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

// Function to submit to IndexNow
async function submitToIndexNow(urls) {
    if (urls.length === 0) {
        console.log('No URLs found to submit.');
        return;
    }

    const payload = JSON.stringify({
        host: HOST,
        key: API_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls
    });

    const options = {
        hostname: 'api.indexnow.org',
        path: '/indexnow',
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
                    console.log(`Successfully submitted ${urls.length} URLs to IndexNow.`);
                    resolve(responseData);
                } else {
                    console.error(`Error submitting to IndexNow: ${res.statusCode} ${res.statusMessage}`);
                    console.error(responseData);
                    reject(new Error(`IndexNow API Error: ${res.statusCode}`));
                }
            });
        });

        req.on('error', (e) => {
            console.error(`Request error: ${e.message}`);
            reject(e);
        });

        req.write(payload);
        req.end();
    });
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

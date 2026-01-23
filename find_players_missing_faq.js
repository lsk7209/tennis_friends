
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const playersFilePath = path.join(__dirname, 'src/data/players.ts');

try {
    const fileContent = fs.readFileSync(playersFilePath, 'utf8');

    // Simple regex parsing since we just need keys and FAQ existence
    // This is less robust than AST but faster for this specific structure
    // We look for 'slug': { ... detailedProfile: { ... faq: [ ... ] } } structure

    // Remove comments to avoid false positives
    const cleanContent = fileContent.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');

    const players = {};
    let currentSlug = null;
    let braceCount = 0;
    let inDetailedProfile = false;

    // Splitting by lines for rough parsing
    const lines = cleanContent.split('\n');
    const missingFaqPlayers = [];

    // We will use a regex to capture player slugs and then check for 'faq:' inside their block
    // A more robust way: use regex to match the whole object structure for each player

    // Regex to match: 'slug': { ... }
    // It's recursive so regex is hard. Let's do a simple line scan with state.

    let currentPlayer = null;
    let hasFaq = false;

    for (const line of lines) {
        // Check for new player entry: 'slug': {
        const playerMatch = line.match(/^\s*'([a-zA-Z0-9-]+)':\s*\{/);
        if (playerMatch) {
            if (currentPlayer && !hasFaq) {
                missingFaqPlayers.push(currentPlayer);
            }
            currentPlayer = playerMatch[1];
            hasFaq = false;
        }

        // Check for FAQ
        if (currentPlayer && line.includes('faq: [')) {
            hasFaq = true;
        }
    }

    // Check last player
    if (currentPlayer && !hasFaq) {
        missingFaqPlayers.push(currentPlayer);
    }

    console.log('Players missing FAQ section:');
    missingFaqPlayers.forEach(p => console.log(`- ${p}`));
    console.log(`\nTotal missing: ${missingFaqPlayers.length}`);

} catch (err) {
    console.error('Error reading file:', err);
}

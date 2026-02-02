const fs = require('fs');
const path = require('path');

const playersPath = path.join(__dirname, 'src', 'data', 'players.ts');
const fileContent = fs.readFileSync(playersPath, 'utf8');

console.log('--- FULL DATABASE AUDIT ---');

const lines = fileContent.split('\n');
let currentPlayer = null;
let profileFound = false;
let bioFound = false;

// We'll iterate lines to find keys and check their content blocks
// This is a heuristic parser
const players = [];

lines.forEach(line => {
    // Match start of player object: 'slug': {
    const keyMatch = line.match(/^\s*'([a-zA-Z0-9-]+)':\s*{/);
    if (keyMatch) {
        if (currentPlayer) {
            // Push previous player
            players.push({ slug: currentPlayer, hasProfile: profileFound, hasBio: bioFound });
        }
        currentPlayer = keyMatch[1];
        profileFound = false;
        bioFound = false;
    }

    if (currentPlayer) {
        if (line.includes('detailedProfile: {')) profileFound = true;
        if (line.includes('longBio:') && !line.includes("''") && !line.includes('""')) {
            // succinct check, might miss short bios if on same line, but decent
            const bioMatch = line.match(/longBio:\s*(['"`])(.*)(['"`])/);
            if (bioMatch && bioMatch[2].length > 30) bioFound = true;
        }
    }
});
// Push last player
if (currentPlayer) {
    players.push({ slug: currentPlayer, hasProfile: profileFound, hasBio: bioFound });
}

const missing = players.filter(p => !p.hasProfile || !p.hasBio);

if (missing.length === 0) {
    console.log('ALL PLAYERS HAVE CONTENT! (Total check: ' + players.length + ')');
} else {
    console.log('PLAYERS MISSING CONTENT:');
    missing.forEach(p => console.log(`- ${p.slug} (Profile: ${p.hasProfile}, Bio: ${p.hasBio})`));
}

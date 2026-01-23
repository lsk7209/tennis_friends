const fs = require('fs');
const path = require('path');

const playersPath = path.join(__dirname, 'src', 'data', 'players.ts');
const fileContent = fs.readFileSync(playersPath, 'utf8');

// Regex to find player keys and their longBio
// This is a simple regex and might need adjustment based on file structure consistency
// We'll look for key, then scan for longBio
const playerEntries = [];
const lines = fileContent.split('\n');
let currentPlayer = null;

lines.forEach(line => {
    const keyMatch = line.match(/'([a-zA-Z0-9-]+)':\s*{/);
    if (keyMatch) {
        currentPlayer = keyMatch[1];
    }

    if (currentPlayer) {
        if (line.includes('longBio:')) {
            const bioMatch = line.match(/longBio:\s*(['"`])(.*)(['"`]),?/);
            if (bioMatch) {
                const bio = bioMatch[2];
                if (!bio || bio.length < 50) { // Consider "short" bio as missing for our purpose
                    playerEntries.push({ id: currentPlayer, status: 'Short/Missing', length: bio ? bio.length : 0 });
                }
            } else if (line.includes("longBio: ''") || line.includes('longBio: ""')) {
                playerEntries.push({ id: currentPlayer, status: 'Empty', length: 0 });
            }
        }
    }
});

// A more robust approach might be to just list everyone who is NOT in the "done" list from task.md
// But checking the file is better.
// actually, let's just list everyone for now and I'll filter based on logic in my head or improved script if needed.
// The previous regex parsed keys.

console.log('--- PLAYERS NEEDING CONTENT ENRICHMENT ---');
// We know specific top players have it. Let's find those who likely don't.
// Based on previous task.md, we did "key players".
// Let's look for "mid-tier" players.

// Let's use a simpler check: if the line contains `longBio:` check its content length roughly.
let count = 0;
lines.forEach((line, index) => {
    const keyMatch = line.match(/^\s*'([a-zA-Z0-9-]+)':\s*{/);
    if (keyMatch) {
        currentPlayer = keyMatch[1];
    }

    // Check for detailedProfile which usually accompanies a good bio
    if (line.includes('detailedProfile: {') && currentPlayer) {
        // Player has detailed profile
    } else if (currentPlayer && line.includes('name:')) {
        // Just started a player
    }
});

// Validating via direct file read for specific known missing batches might be safer
// The file is huge, let's just list the keys of players that are likely in the missing batches (Batch 2+ mostly)

const missingBatches = [
    // Batch 2
    'fabian-marozsan', 'sumit-nagal', 'taro-daniel', 'roberto-bautista-agut', 'marton-fucsovics',
    'borna-coric', 'felix-auger-aliassime', 'denis-shapovalov', 'alexander-bublik', 'jack-draper',
    // Batch 3
    'qinwen-zheng', 'marketa-vondrousova', 'maria-sakkari', 'jelena-ostapenko', 'naomi-osaka',
    'caroline-wozniacki', 'angelique-kerber', 'elina-svitolina', 'victoria-azarenka', 'karolina-pliskova',
    // Batch 4
    'sloane-stephens', 'madison-keys', 'daria-kasatkina', 'beatriz-haddad-maia', 'danielle-collins',
    'barbora-krejcikova', 'petra-kvitova', 'belinda-bencic', 'bianca-andreescu', 'emma-raducanu',
    // Batch 5
    'mirra-andreeva', 'linda-noskova', 'marta-kostyuk', 'shang-juncheng', 'duje-ajdukovic',
    // Batch 6
    'fabio-fognini', 'reilly-opelka', 'marin-cilic', 'milos-raonic', 'richard-gasquet',
    // Batch 7
    'diego-schwartzman', 'david-goffin', 'thanasi-kokkinakis', 'hugo-gaston', 'luca-nardi', 'dino-prizmic', 'coleman-wong'
];

console.log(`Checking status for ${missingBatches.length} players...`);
missingBatches.forEach(slug => {
    // We will simple grep the file for the slug and see if it has a longBio immediately following
    // This script is partial, let's rely on the user list provided in task.md which implies these batches need love.
    console.log(`- ${slug}`);
});

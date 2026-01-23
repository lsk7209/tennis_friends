const fs = require('fs');
const path = require('path');

const playersPath = path.join(__dirname, 'src', 'data', 'players.ts');
const fileContent = fs.readFileSync(playersPath, 'utf8');

const targetPlayers = [
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

console.log('--- MISSING CONTENT REPORT (Batch 4-7) ---');
targetPlayers.forEach(slug => {
    const keyIndex = fileContent.indexOf(`'${slug}':`);
    if (keyIndex === -1) {
        console.log(`[MISSING PLAYER] ${slug}`);
        return;
    }

    const nextContent = fileContent.substring(keyIndex, keyIndex + 2000);
    if (nextContent.includes('detailedProfile: {')) {
        console.log(`[OK] ${slug}`);
    } else {
        console.log(`[NEEDS CONTENT] ${slug}`);
    }
});

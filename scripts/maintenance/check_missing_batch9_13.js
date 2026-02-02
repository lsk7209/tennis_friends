const fs = require('fs');
const path = require('path');

const playersPath = path.join(__dirname, 'src', 'data', 'players.ts');
const fileContent = fs.readFileSync(playersPath, 'utf8');

const targetPlayers = [
    // Batch 9
    'veronika-kudermetova', 'elise-mertens', 'donna-vekic', 'marie-bouzkova', 'katerina-siniakova', 'caroline-garcia',
    // Batch 10
    'anhelina-kalinina', 'lesia-tsurenko', 'magda-linette', 'sofia-kenin', 'paula-badosa',
    // Batch 11
    'karolina-muchova', 'ajla-tomljanovic', 'camila-giorgi', 'wang-xinyu', 'wang-xiyu',
    // Batch 12
    'zhu-lin', 'yuan-yue', 'diane-parry', 'clara-burel', 'varvara-gracheva',
    // Batch 13
    'tatjana-maria', 'laura-siegemund', 'hong-seong-chan', 'garbine-muguruza'
];

console.log('--- MISSING CONTENT REPORT (Batch 9-13) ---');
targetPlayers.forEach(slug => {
    const keyIndex = fileContent.indexOf(`'${slug}':`);
    if (keyIndex === -1) {
        // console.log(`[MISSING PLAYER KEY] ${slug}`); // Optional: confirm key existence
        return;
    }

    const nextContent = fileContent.substring(keyIndex, keyIndex + 2000);
    if (nextContent.includes('detailedProfile: {')) {
        console.log(`[OK] ${slug}`);
    } else {
        console.log(`[NEEDS CONTENT] ${slug}`);
    }
});

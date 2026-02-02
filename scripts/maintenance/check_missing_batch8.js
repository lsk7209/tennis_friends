const fs = require('fs');
const path = require('path');

const playersPath = path.join(__dirname, 'src', 'data', 'players.ts');
const fileContent = fs.readFileSync(playersPath, 'utf8');

const targetPlayers = [
    // Batch 8
    'dayana-yastremska', 'anna-kalinskaya', 'jasmine-paolini', 'sorana-cirstea',
    'anastasia-potapova', 'ekaterina-alexandrova', 'liudmila-samsonova'
];

console.log('--- MISSING CONTENT REPORT (Batch 8) ---');
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

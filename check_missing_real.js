const fs = require('fs');
const path = require('path');

const playersPath = path.join(__dirname, 'src', 'data', 'players.ts');
const fileContent = fs.readFileSync(playersPath, 'utf8');

const targetPlayers = [
    // Batch 2
    'sumit-nagal', 'taro-daniel', 'roberto-bautista-agut', 'marton-fucsovics',
    'borna-coric', 'felix-auger-aliassime', 'denis-shapovalov', 'alexander-bublik', 'jack-draper',
    // Batch 3
    'qinwen-zheng', 'marketa-vondrousova', 'maria-sakkari', 'jelena-ostapenko', 'naomi-osaka',
    'caroline-wozniacki', 'angelique-kerber', 'elina-svitolina', 'victoria-azarenka', 'karolina-pliskova'
];

console.log('--- MISSING CONTENT REPORT ---');
targetPlayers.forEach(slug => {
    // Determine if player has detailed profile
    // We look for 'slug': { ... detailedProfile: {
    const playerBlockRegex = new RegExp(`'${slug}':\\s*\\{[\\s\\S]*?\\},`, 'm'); // This regex is weak for nested objects, but usually detailedProfile comes early-ish or we can search simply.

    // Better: find the line with the key, then look ahead for detailedProfile
    const keyIndex = fileContent.indexOf(`'${slug}':`);
    if (keyIndex === -1) {
        console.log(`[MISSING PLAYER] ${slug}`);
        return;
    }

    const nextContent = fileContent.substring(keyIndex, keyIndex + 2000); // Look at next 2000 chars
    if (nextContent.includes('detailedProfile: {')) {
        console.log(`[OK] ${slug}`);
    } else {
        console.log(`[NEEDS CONTENT] ${slug}`);
    }
});

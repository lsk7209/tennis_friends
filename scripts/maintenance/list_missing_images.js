const fs = require('fs');
const path = require('path');

const playersPath = path.join(__dirname, 'src', 'data', 'players.ts');
const publicImagesPath = path.join(__dirname, 'public', 'images', 'players');
const fileContent = fs.readFileSync(playersPath, 'utf8');
const existingFiles = new Set(fs.readdirSync(publicImagesPath));

const allKeys = [];
let keyRe = /'([a-zA-Z0-9-]+)':\s*{/g;
let match;
while ((match = keyRe.exec(fileContent)) !== null) {
    allKeys.push(match[1]);
}

const missing = [];
allKeys.forEach(slug => {
    const expectedFilename = `${slug}.png`;
    if (!existingFiles.has(expectedFilename)) {
        missing.push(slug);
    }
});

console.log('--- MISSING IMAGES START ---');
missing.forEach(slug => console.log(slug));
console.log('--- MISSING IMAGES END ---');

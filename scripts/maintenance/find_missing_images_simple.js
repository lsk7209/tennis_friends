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
    // Find simple image definition
    // standardized format usually: image: '/images/players/slug.png'
    const expectedFilename = `${slug}.png`;

    // Check if the file exists
    if (!existingFiles.has(expectedFilename)) {
        missing.push(slug);
    }
});

console.log(JSON.stringify(missing));

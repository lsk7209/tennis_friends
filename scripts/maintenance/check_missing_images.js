const fs = require('fs');
const path = require('path');

// Paths
const playersPath = path.join(__dirname, 'src', 'data', 'players.ts');
const publicImagesPath = path.join(__dirname, 'public', 'images', 'players');

// Read players.ts
const fileContent = fs.readFileSync(playersPath, 'utf8');

// Regex to find player keys and their image properties
// Matching: 'player-slug': { ... image: '/images/players/foo.png' ... }
const playerBlockRegex = /'([a-zA-Z0-9-]+)':\s*{([^}]*)}/g;

let match;
const missingImages = [];
const missingImageProperty = [];

// Ensure directory exists
if (!fs.existsSync(publicImagesPath)) {
    console.error(`Directory not found: ${publicImagesPath}`);
    process.exit(1);
}

// Get all files in the images directory
const existingFiles = new Set(fs.readdirSync(publicImagesPath));

console.log('Checking for missing images...');

let totalPlayers = 0;

// Iterate through all players in the file
// Note: This regex is simple and might miss nested braces, but strictly formatted players.ts usually works. 
// A better way is to extract keys and then assume standard image path if not found, or parse specifically.
// Given strict formatting of this project, we can try to find keys and look for 'image:' property.

// Let's use the key extraction method from previous check, then Regex for image prop in that block.
const allKeys = [];
let keyRe = /'([a-zA-Z0-9-]+)':\s*{/g;
while ((match = keyRe.exec(fileContent)) !== null) {
    allKeys.push(match[1]);
}

allKeys.forEach(slug => {
    totalPlayers++;
    const keyStart = fileContent.indexOf(`'${slug}': {`);
    // Find end of this player block - simplified assumption: next player key or end of file
    // This is fragile but works if keys are unique and valid TS.
    // A better robust way: assume image is usually defined in the first few lines of the object.

    // We'll look for `image: '...'` within the file content starting at keyStart
    // Limit search to 500 chars to avoid reading into next player.
    const searchWindow = fileContent.substring(keyStart, keyStart + 1000);

    const imageMatch = searchWindow.match(/image:\s*'([^']+)'/);

    if (!imageMatch) {
        // Maybe it uses double quotes?
        const imageMatchDouble = searchWindow.match(/image:\s*"([^"]+)"/);
        if (!imageMatchDouble) {
            missingImageProperty.push(slug);
            return;
        }
    }

    const imagePathRelative = imageMatch ? imageMatch[1] : searchWindow.match(/image:\s*"([^"]+)"/)[1];
    const filename = path.basename(imagePathRelative);

    if (!existingFiles.has(filename)) {
        missingImages.push({ slug, filename });
    }
});

console.log(`Total players scanned: ${totalPlayers}`);

if (missingImageProperty.length > 0) {
    console.log('\nPlayers missing "image" property in code:');
    missingImageProperty.forEach(p => console.log(`- ${p}`));
}

if (missingImages.length > 0) {
    console.log('\nPlayers with "image" property but missing file:');
    missingImages.forEach(p => console.log(`- ${p.slug} (expects ${p.filename})`));
}

if (missingImageProperty.length === 0 && missingImages.length === 0) {
    console.log('\n✅ All players have valid images!');
}

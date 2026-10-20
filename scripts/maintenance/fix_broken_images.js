const fs = require('fs');
const path = require('path');

const playersPath = path.join(__dirname, 'src', 'data', 'players.ts');
let fileContent = fs.readFileSync(playersPath, 'utf8');

const missingSlugs = [
    'barbora-krejcikova', 'petra-kvitova', 'belinda-bencic', 'bianca-andreescu',
    'emma-raducanu', 'leylah-fernandez', 'mirra-andreeva', 'linda-noskova',
    'marta-kostyuk', 'shang-juncheng', 'duje-ajdukovic', 'dominic-thiem',
    'fabio-fognini', 'reilly-opelka', 'marin-cilic', 'milos-raonic',
    'nick-kyrgios', 'richard-gasquet', 'diego-schwartzman', 'david-goffin',
    'thanasi-kokkinakis', 'hugo-gaston', 'luca-nardi', 'dino-prizmic',
    'coleman-wong', 'dayana-yastremska', 'anna-kalinskaya', 'jasmine-paolini',
    'sorana-cirstea', 'anastasia-potapova', 'ekaterina-alexandrova',
    'liudmila-samsonova', 'veronika-kudermetova', 'elise-mertens', 'donna-vekic',
    'marie-bouzkova', 'katerina-siniakova', 'caroline-garcia', 'anhelina-kalinina',
    'lesia-tsurenko', 'magda-linette', 'sofia-kenin', 'paula-badosa',
    'karolina-muchova', 'ajla-tomljanovic', 'camila-giorgi', 'wang-xinyu',
    'wang-xiyu', 'zhu-lin', 'yuan-yue', 'diane-parry', 'clara-burel',
    'varvara-gracheva', 'tatjana-maria', 'laura-siegemund', 'hong-seong-chan',
    'venus-williams', 'maria-sharapova', 'garbine-muguruza', 'serena-williams',
    'ashleigh-barty', 'simona-halep', 'zheng-qinwen', 'martina-hingis',
    'kim-clijsters', 'andy-roddick', 'lleyton-hewitt'
];

let modifiedCount = 0;

missingSlugs.forEach(slug => {
    // Regex to match the player block and their image property
    // We want to replace "image: '...'," with "// image: '...'," ONLY for these slugs.
    // 1. Find the player key index
    const keyIndex = fileContent.indexOf(`'${slug}': {`);
    if (keyIndex === -1) {
        console.warn(`Slug not found: ${slug}`);
        return;
    }

    // 2. Search forward for "image:"
    // We shouldn't search too far (e.g., 500 chars) to avoid hitting next player
    const searchWindow = fileContent.substring(keyIndex, keyIndex + 800);
    const imageMatch = searchWindow.match(/(image:\s*['"][^'"]+['"],?)/);

    if (imageMatch) {
        const imageProp = imageMatch[1];
        // We construct a specific string to replace to avoid false positives?
        // Actually, string replacement is safer if we pinpoint the exact location.
        // fileContent.slice...

        const absoluteImageIndex = keyIndex + imageMatch.index;
        const strToReplace = imageProp;

        // Using split/join might be risky if same image string used elsewhere (unlikely for specific paths).
        // But "image: '/images/players/...'" is unique enough? 
        // SAFE WAY: slice and replace.

        // We need to re-read or offset index? 
        // Since we modify content, indices shift. 
        // Better: Use regex replace with callback?

        // Let's use specific replace for that block.
        // But the file is huge. Simple regex replace globally is dangerous.

        // Let's use a Regex that captures the key and the image prop relative to it.
        // pattern: ('slug':\s*\{[^}]*?)(image:\s*'[^']*',?)
        // This is complex because of JS regex limitations (dotAll etc).
    }
});

// Iterative approach with splitting lines is safer.
const lines = fileContent.split('\n');
let currentSlug = null;

const newLines = lines.map(line => {
    // check for player key start
    const keyMatch = line.match(/^\s*'([a-zA-Z0-9-]+)':\s*{/);
    if (keyMatch) {
        currentSlug = keyMatch[1];
    }

    // Check if we are inside a object (simple heuristic: indentation?)
    // If we find "image: " AND currentSlug is in missingSlugs
    if (currentSlug && missingSlugs.includes(currentSlug)) {
        if (line.trim().startsWith('image:') || line.trim().match(/image:\s*['"]/)) {
            console.log(`Disabling image for ${currentSlug}`);
            return line.replace('image:', '// image:');
        }
    }

    return line;
});

const newContent = newLines.join('\n');
fs.writeFileSync(playersPath, newContent, 'utf8');
console.log(`Updated players.ts by commenting out missing images.`);

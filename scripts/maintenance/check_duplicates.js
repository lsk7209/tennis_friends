const fs = require('fs');
const path = require('path');

const playersPath = path.join(__dirname, 'src', 'data', 'players.ts');
const fileContent = fs.readFileSync(playersPath, 'utf8');

// Regex to find keys and nameEn
const playerBlockRegex = /'([a-zA-Z0-9-]+)':\s*{([^}]*)}/g;
const nameEnRegex = /nameEn:\s*'([^']+)'/;

const keys = [];
const names = {};
const duplicates = [];
const nameDuplicates = [];

let match;
let keyRe = /'([a-zA-Z0-9-]+)':\s*{/g;

// Find all keys first to check for duplicate keys (which would be syntax errors or overrides)
while ((match = keyRe.exec(fileContent)) !== null) {
    const key = match[1];
    if (keys.includes(key)) {
        duplicates.push(key);
    }
    keys.push(key);

    // Extract block for name check (simplified)
    const keyStart = match.index;
    const block = fileContent.substring(keyStart, keyStart + 500);
    const nameMatch = block.match(nameEnRegex);
    if (nameMatch) {
        const name = nameMatch[1];
        if (names[name]) {
            nameDuplicates.push({ name: name, keys: [names[name], key] });
        } else {
            names[name] = key;
        }
    }
}

console.log('--- Duplicate Keys ---');
if (duplicates.length > 0) {
    duplicates.forEach(d => console.log(d));
} else {
    console.log('No duplicate keys found.');
}

console.log('\n--- Duplicate Names (Potential double entries) ---');
if (nameDuplicates.length > 0) {
    nameDuplicates.forEach(d => console.log(`${d.name}: ${d.keys.join(', ')}`));
} else {
    console.log('No duplicate names found.');
}

const fs = require('fs');
const path = require('path');

const playersPath = path.join(__dirname, 'src', 'data', 'players.ts');
const content = fs.readFileSync(playersPath, 'utf8');
const lines = content.split('\n');

const targets = [
    'sloane-stephens',
    'madison-keys',
    'daria-kasatkina',
    'beatriz-haddad-maia',
    'danielle-collins',
    'barbora-krejcikova',
    'petra-kvitova',
    'belinda-bencic',
    'bianca-andreescu',
    'emma-raducanu'
];

console.log('--- Found Lines ---');
targets.forEach(slug => {
    const searchStr = `'${slug}':`;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(searchStr)) {
            console.log(`${slug}:${i + 1}`); // 1-indexed
            // Print the line content to verify
            console.log(lines[i].trim().substring(0, 100) + '...');
            break;
        }
    }
});

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/blog-posts.js');
let content = fs.readFileSync(filePath, 'utf8');

// Simple tag mapper based on category or title keywords
const getTags = (post) => {
    const tags = new Set();
    const title = post.title.toLowerCase();
    const cat = post.category.toLowerCase();

    if (cat.includes('선수')) tags.add('선수 프로필');
    if (cat.includes('전술')) tags.add('테니스 전술');
    if (cat.includes('기술')) tags.add('테니스 기술');
    if (cat.includes('장비')) tags.add('테니스 장비');
    if (cat.includes('멘탈')) tags.add('멘탈 트레이닝');

    if (title.includes('서브')) tags.add('서브');
    if (title.includes('포핸드')) tags.add('포핸드');
    if (title.includes('백핸드')) tags.add('백핸드');
    if (title.includes('스트링')) tags.add('스트링');
    if (title.includes('라켓')) tags.add('라켓');
    if (title.includes('부상')) tags.add('부상 예방');
    if (title.includes('복식')) tags.add('복식');
    if (title.includes('매치')) tags.add('경기 운영');

    // Add some default tags if empty
    if (tags.size === 0) tags.add('테니스 지식');

    return Array.from(tags);
};

// This is a bit tricky to parse with regex since it's a JS file.
// I'll use a simple approach: find each object and insert "tags" property.

// Temporary hack: I'll parse it as an array of objects if possible, or just string replace.
// Since I know the structure is:
// {
//   "id": "...",
//   ...
// }
// I can look for "slug": "..." and insert after it.

const lines = content.split('\n');
const newLines = [];
let currentPost = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newLines.push(line);

    const slugMatch = line.match(/\"slug\":\s*\"(.*?)\"/);
    if (slugMatch) {
        // We found a post. Let's find its context to decide tags.
        // For simplicity, I'll just look ahead or behind for category/title.
        // Actually, let's just use a fixed set of tags for now to avoid complex parsing
        // and I can refine manually if needed.

        // Let's grab the title from subsequent lines or previous lines.
        let title = '';
        let category = '';
        for (let j = Math.max(0, i - 5); j < Math.min(lines.length, i + 15); j++) {
            const tMatch = lines[j].match(/\"title\":\s*\"(.*?)\"/);
            if (tMatch) title = tMatch[1];
            const cMatch = lines[j].match(/\"category\":\s*\"(.*?)\"/);
            if (cMatch) category = cMatch[1];
        }

        const tags = getTags({ title, category });
        newLines.push(`    "tags": ${JSON.stringify(tags)},`);
    }
}

fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
console.log('✅ Successfully added tags to all posts in blog-posts.js');

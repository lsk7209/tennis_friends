const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/app/blog');
const blogDirs = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());

const results = [];

blogDirs.forEach(dir => {
    const filePath = path.join(blogDir, dir, 'page.tsx');
    if (!fs.existsSync(filePath)) return;

    const content = fs.readFileSync(filePath, 'utf8');

    // Simple way to estimate pure text: remove metadata, imports, and JSX tags
    const pureText = content
        .replace(/export const metadata =[\s\S]*?};/, '') // Remove metadata
        .replace(/import[\s\S]*?;/g, '') // Remove imports
        .replace(/<[^>]+>/g, '') // Remove JSX tags

        .replace(/\s+/g, ' ') // Collapse whitespace
        .trim();

    results.push({
        slug: dir,
        charCount: pureText.length,
        status: pureText.length >= 2000 ? '✅ Pass' : '❌ Fail'
    });
});

// Sort by count ascending
results.sort((a, b) => a.charCount - b.charCount);

console.log('=== Blog Content Word Count Audit ===\n');
console.log('| Slug | Char Count (Pure Text) | Status |');
console.log('| :--- | :--- | :--- |');
results.forEach(r => {
    console.log(`| ${r.slug} | ${r.charCount} | ${r.status} |`);
});

const failCount = results.filter(r => r.charCount < 2000).length;
console.log(`\nTotal Posts: ${results.length}`);
console.log(`Fail (< 2000 chars): ${failCount}`);
console.log(`Pass (>= 2000 chars): ${results.length - failCount}`);

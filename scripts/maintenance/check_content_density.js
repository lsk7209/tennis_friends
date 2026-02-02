const fs = require('fs');
const path = require('path');
const { allBlogPosts } = require('./src/data/blog-posts.js');

const blogDir = './src/app/blog';

// Sort posts by date (newest first)
const sortedPosts = [...allBlogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

console.log(`Total posts in metadata: ${sortedPosts.length}`);
console.log('--- Checking Content Density (Text Length) ---');

const results = [];

sortedPosts.forEach(post => {
    const slug = post.slug;
    const filePath = path.join(blogDir, slug, 'page.tsx');

    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');

        // Remove HTML tags/components to estimate actual text content
        const cleanText = content
            .replace(/<[^>]*>/g, ' ') // Remove HTML tags
            .replace(/import .*/g, '') // Remove imports
            .replace(/export .*/g, '') // Remove exports
            .replace(/\s+/g, ' ') // Collapse whitespace
            .trim();

        const textLength = cleanText.length;
        const isSuspicious = textLength < 1000; // Threshold for "shell"

        results.push({
            slug,
            date: post.date,
            textLength,
            status: isSuspicious ? '⚠️ SUSPICIOUS' : '✅ OK',
            preview: cleanText.substring(0, 50) + '...'
        });
    } else {
        results.push({
            slug,
            date: post.date,
            status: '🚫 MISSING FILE'
        });
    }
});

// Print results
results.forEach(r => {
    if (r.status !== '✅ OK') {
        console.log(`[${r.date}] ${r.slug}: ${r.status} (Length: ${r.textLength || 0})`);
    }
});

console.log('\n--- Summary ---');
console.log(`Suspicious (Text < 1000 chars): ${results.filter(r => r.status.includes('SUSPICIOUS')).length}`);
console.log(`Missing Files: ${results.filter(r => r.status.includes('MISSING')).length}`);

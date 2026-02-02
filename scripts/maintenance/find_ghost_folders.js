const fs = require('fs');
const path = require('path');
const { allBlogPosts } = require('./src/data/blog-posts.js');

const blogDir = './src/app/blog';
const metadataSlugs = new Set(allBlogPosts.map(p => p.slug));

const allFiles = fs.readdirSync(blogDir);
const ghostFolders = [];

allFiles.forEach(file => {
    const fullPath = path.join(blogDir, file);
    if (fs.statSync(fullPath).isDirectory()) {
        if (!metadataSlugs.has(file)) {
            // It's a folder, but not in metadata. It's a GHOST.
            // Check if it has a page.tsx
            if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
                ghostFolders.push(file);
            }
        }
    }
});

console.log(`Found ${ghostFolders.length} Ghost Folders (Not in metadata):`);
ghostFolders.forEach(f => console.log(`- ${f}`));

// Optional: Content check for ghosts
ghostFolders.forEach(f => {
    const content = fs.readFileSync(path.join(blogDir, f, 'page.tsx'), 'utf8');
    const isShell = content.includes('(내용 작성)') || content.length < 1000;
    console.log(`  > Quality Check: ${isShell ? '❌ SHELL' : '✅ CONTENT'} (Length: ${content.length})`);
});

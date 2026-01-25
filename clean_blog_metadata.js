const fs = require('fs');
const path = require('path');

// Read the original file
const dataPath = './src/data/blog-posts.js';
const content = fs.readFileSync(dataPath, 'utf8');

// Extract the array content using regex
const match = content.match(/export const allBlogPosts = (\[[\s\S]*?\]);/);
if (!match) {
    console.error('Could not parse blog-posts.js');
    process.exit(1);
}

// Parse the array
// We need to sanitise the content to make it valid JSON if possible, but it's JS.
// However, the file structure seems to be JS objects.
// Let's rely on string replacement for safety, or we can use eval for this one-off script.
const allBlogPosts = eval(match[1]);

const blogDir = './src/app/blog';
const validSlugs = new Set();

// Get actual folders
const items = fs.readdirSync(blogDir);
items.forEach(item => {
    if (fs.statSync(path.join(blogDir, item)).isDirectory()) {
        validSlugs.add(item);
    }
});

console.log(`Found ${validSlugs.size} valid blog folders.`);

// Filter posts
const validPosts = allBlogPosts.filter(post => {
    // Check if slug exists in file system
    if (validSlugs.has(post.slug)) {
        return true;
    }
    console.log(`Removing metadata for deleted post: ${post.slug}`);
    return false;
});

console.log(`Retained ${validPosts.length} posts.`);

// Reconstruct the file content
const newContent = `// 블로그 글 메타데이터 - 자동 생성됨
export const allBlogPosts = ${JSON.stringify(validPosts, null, 2)};
`;

fs.writeFileSync(dataPath, newContent);
console.log('Updated blog-posts.js successfully.');

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/app/blog');
const blogDirs = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());

blogDirs.forEach(dir => {
    const filePath = path.join(blogDir, dir, 'page.tsx');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Add import if not present
    if (!content.includes("import RelatedPosts from '@/components/blog/RelatedPosts';")) {
        content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport RelatedPosts from '@/components/blog/RelatedPosts';");
    }

    // 2. Add RelatedPosts component before <CTA /> if not present
    if (!content.includes('<RelatedPosts')) {
        // Extract metadata to get slug, category, and tags
        const slugMatch = content.match(/canonical: 'https:\/\/tennisfriends\.co\.kr\/blog\/(.*?)',/);
        const catMatch = content.match(/<Badge.*?>([^<]+)<\/Badge>/); // Take first badge as category mostly
        const tagsMatch = content.match(/keywords: (\[.*?\])/);

        const slug = slugMatch ? slugMatch[1] : dir;
        const category = catMatch ? catMatch[1] : '테니스';
        const tags = tagsMatch ? tagsMatch[1] : '[]';

        content = content.replace('<CTA />', `          <RelatedPosts 
            currentSlug="${slug}" 
            category="${category}" 
            tags={${tags}} 
          />\n\n          <CTA />`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${dir}/page.tsx`);
});

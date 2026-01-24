const fs = require('fs');
const path = require('path');
const { PLAYERS_DB } = require('./temp_players');

const TARGET_PLAYERS = [
    'dayana-yastremska',
    'anna-kalinskaya',
    'jasmine-paolini',
    'sorana-cirstea',
    'anastasia-potapova',
    'ekaterina-alexandrova',
    'liudmila-samsonova'
];

const BLOG_DIR = path.join(__dirname, '../src/app/blog');
const BLOG_POSTS_PATH = path.join(__dirname, '../src/data/blog-posts.js');

function generatePageContent(slug, player) {
    const { detailedProfile, name, nameEn } = player;

    // Safety check for detailedProfile
    if (!detailedProfile) {
        console.error(`Missing detailedProfile for ${slug}`);
        return null;
    }

    const title = `${name} 선수 프로필과 스토리`;
    const description = detailedProfile.oneLineSummary || `${name} 선수의 성장 배경과 플레이 스타일 분석`;
    const oneLineSummary = detailedProfile.oneLineSummary || '';

    // Extract sections content
    // Note: The template usually expects HTML strings for content.
    // We'll wrap them in the Article component structure.

    return `import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: '${title}',
  description: '${description.replace(/'/g, "\\'")}',
  keywords: ['테니스', '${name}', '선수 프로필', '스토리', 'WTA'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/${slug}',
  },
  openGraph: {
    title: '${title}',
    description: '${description.replace(/'/g, "\\'")}',
    url: 'https://tennisfriends.co.kr/blog/${slug}',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${title}',
    description: '${description.replace(/'/g, "\\'")}',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background', text: '성장 배경', depth: 2 },
  { id: 'play-style', text: '경기 스타일', depth: 2 },
  { id: 'why-notable', text: '주목해야 할 이유', depth: 2 },
  { id: 'stats-analysis', text: '스탯 분석', depth: 2 },
  { id: 'signature-match', text: '명장면 (Signature Match)', depth: 2 },
  { id: 'fan-appeal', text: '팬 어필 포인트', depth: 2 },
  { id: 'recent-form', text: '최근 폼과 전망', depth: 2 },
];

const faqs = ${JSON.stringify(detailedProfile.faq ? detailedProfile.faq.map(f => ({ q: f.question, a: f.answer })) : [], null, 2)};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '${name}', '선수 프로필', '스토리', 'WTA'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            ${name}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            ${oneLineSummary.replace(/'/g, "\\'")}
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">8분 읽기</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">${new Date().toISOString().split('T')[0].split('-').join('. ')}</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="${slug}" date="${new Date().toISOString().split('T')[0]}"
        title="${title}"
        excerpt="${description.replace(/"/g, '&quot;')}"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-2xl p-6 md:p-8 mb-10 border border-blue-100 dark:border-blue-900">
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium mb-0">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 align-middle" />
                <strong className="text-blue-700 dark:text-blue-300">요약:</strong> ${oneLineSummary}
              </p>
            </div>

            <h2 id="growth-background">성장 배경와 커리어</h2>
            ${detailedProfile.growthStory}

            <h2 id="play-style">경기 스타일</h2>
            ${detailedProfile.playStyle}

            <h2 id="why-notable">주목해야 할 이유</h2>
            ${detailedProfile.whyNotable}

            <h2 id="stats-analysis">스탯 분석</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              ${detailedProfile.hexagonStats.map(stat => `
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">${stat.name}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">${stat.score}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '${stat.score * 10}%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">${stat.description}</p>
              </div>
              `).join('')}
            </div>

            <h2 id="signature-match">명장면 (Signature Match)</h2>
            <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-indigo-500 p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">${detailedProfile.signatureMatch.title}</h3>
                <p className="text-sm text-gray-500 mb-4 font-mono">${detailedProfile.signatureMatch.date}</p>
                <p className="text-gray-700 dark:text-gray-300">${detailedProfile.signatureMatch.description}</p>
            </div>

            <h2 id="fan-appeal">팬 어필 포인트</h2>
            ${detailedProfile.fanAppeal || '<p>작성 중...</p>'}

            <h2 id="recent-form">최근 폼과 전망</h2>
            ${detailedProfile.recentForm}
          </div>

          <FAQ items={faqs} />
          
          <RelatedPosts 
            currentSlug="${slug}" 
            category="선수 프로필"
            tags={['테니스', '${name}', '선수 프로필', 'WTA']} 
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
`;
}

function updateBlogPostsFile(newPosts) {
    let content = fs.readFileSync(BLOG_POSTS_PATH, 'utf8');

    // Find the end of the array to insert new items
    // Assuming file format ends with "];" or similar array closing
    const insertPoint = content.lastIndexOf('];');

    if (insertPoint === -1) {
        // Try to find the last object ending
        const lastBrace = content.lastIndexOf('}');
        if (lastBrace === -1) return; // Fail safely

        // Construct standard JS object strings
        const newEntriesString = newPosts.map(post => `  ,{
    "id": "${post.id}",
    "slug": "${post.slug}",
    "tags": ${JSON.stringify(post.tags)},
    "title": "${post.title}",
    "excerpt": "${post.excerpt}",
    "badge": "${post.badge}",
    "category": "${post.category}",
    "date": "${post.date}",
    "readTime": "${post.readTime}",
    "badgeColor": "${post.badgeColor}",
    "categoryColor": "${post.categoryColor}"
  }`).join('\n');

        const newContent = content.substring(0, lastBrace + 1) + '\n' + newEntriesString + '\n' + content.substring(lastBrace + 1);
        fs.writeFileSync(BLOG_POSTS_PATH, newContent);
    } else {
        // Insert before ];
        const newEntriesString = newPosts.map(post => `  ,{
    "id": "${post.id}",
    "slug": "${post.slug}",
    "tags": ${JSON.stringify(post.tags)},
    "title": "${post.title}",
    "excerpt": "${post.excerpt}",
    "badge": "${post.badge}",
    "category": "${post.category}",
    "date": "${post.date}",
    "readTime": "${post.readTime}",
    "badgeColor": "${post.badgeColor}",
    "categoryColor": "${post.categoryColor}"
  }`).join('\n');

        const newContent = content.substring(0, insertPoint) + newEntriesString + '\n' + content.substring(insertPoint);
        fs.writeFileSync(BLOG_POSTS_PATH, newContent);
    }
}

// Main execution
const newPosts = [];
const today = new Date().toISOString().split('T')[0];

TARGET_PLAYERS.forEach(slug => {
    const player = PLAYERS_DB[slug];
    if (!player) {
        console.log(`Player not found in DB: ${slug}`);
        return;
    }

    // Generate Page
    const pageContent = generatePageContent(slug, player);
    if (pageContent) {
        const playerDir = path.join(BLOG_DIR, slug);
        if (!fs.existsSync(playerDir)) {
            fs.mkdirSync(playerDir, { recursive: true });
        }

        fs.writeFileSync(path.join(playerDir, 'page.tsx'), pageContent, 'utf8');
        console.log(`Generated page for ${slug}`);

        // Prepare metadata for blog-posts.js
        newPosts.push({
            id: slug,
            slug: slug,
            tags: ["선수 프로필"],
            title: `${player.name} — ${player.detailedProfile.oneLineSummary.split('"')[1] || player.detailedProfile.oneLineSummary}`,
            excerpt: player.detailedProfile.oneLineSummary,
            badge: "최신 글",
            category: "선수 프로필",
            date: today,
            readTime: "8분",
            badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
            categoryColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
        });
    }
});

// Update metadata file
if (newPosts.length > 0) {
    updateBlogPostsFile(newPosts);
    console.log(`Updated blog-posts.js with ${newPosts.length} new entries`);
}

/**
 * 자동 블로그 콘텐츠 생성 스크립트 (Gemini API)
 * 실행: node scripts/auto-content.js
 * 환경변수: GEMINI_API_KEY (필수), DAILY_AI_BUDGET (선택, 기본 $0.5)
 */
const fs = require("fs");
const https = require("https");
const path = require("path");

const API_KEY = process.env.GEMINI_API_KEY;
const DAILY_BUDGET = parseFloat(process.env.DAILY_AI_BUDGET || "0.5");
const COST_PER_POST = 0.002; // gemini-2.5-flash-lite 기준 추정

// 테니스 롱테일 키워드 주제 큐
const TOPIC_QUEUE = [
  {
    slug: "tennis-kick-serve-technique",
    title: "킥 서브 완전 마스터 가이드 — 스핀·바운드·구사법",
    category: "기술 가이드",
    tags: ["서브", "킥서브", "스핀서브", "테니스 기술", "서브 연습"],
  },
  {
    slug: "tennis-mental-pressure-points",
    title: "중요한 포인트에서 멘탈 강화법 — 30-40·타이브레이크·챔피언십 포인트",
    category: "멘탈 트레이닝",
    tags: ["멘탈", "집중력", "테니스 심리", "중요한 포인트", "타이브레이크"],
  },
  {
    slug: "tennis-return-of-serve-guide",
    title: "서브 리턴 완전 가이드 — 위치·타이밍·전술",
    category: "기술 가이드",
    tags: ["리턴", "서브 리턴", "테니스 전술", "리턴 포지션"],
  },
  {
    slug: "tennis-clay-court-tactics",
    title: "클레이 코트 전술 완전 가이드 — 스핀·슬라이딩·포지셔닝",
    category: "전술 가이드",
    tags: ["클레이 코트", "테니스 전술", "코트별 전략", "스핀", "슬라이딩"],
  },
  {
    slug: "tennis-net-approach-shots",
    title: "어프로치샷 마스터 — 네트로 나가는 타이밍과 코스",
    category: "기술 가이드",
    tags: ["어프로치샷", "네트 플레이", "테니스 기술", "발리"],
  },
  {
    slug: "tennis-topspin-forehand-guide",
    title: "탑스핀 포핸드 완전 분석 — 회전·파워·코스 컨트롤",
    category: "기술 가이드",
    tags: ["탑스핀", "포핸드", "회전", "테니스 기술", "포핸드 연습"],
  },
  {
    slug: "tennis-doubles-communication",
    title: "복식 파트너 소통법 — 시그널·포메이션·전술 결정",
    category: "복식 전략",
    tags: ["복식", "파트너 소통", "복식 전술", "복식 포메이션"],
  },
];

function callGemini(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 4000, temperature: 0.7 },
    });

    const options = {
      hostname: "generativelanguage.googleapis.com",
      path: `/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) {
            reject(new Error(parsed.error.message));
          } else {
            resolve(parsed.candidates[0].content.parts[0].text);
          }
        } catch (e) {
          reject(new Error("JSON parse error: " + data.slice(0, 200)));
        }
      });
    });

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

function buildPageContent(slug, title, htmlContent, tags) {
  const lines = [
    `import type { Metadata } from 'next';`,
    `import Link from 'next/link';`,
    `import { getSiteUrl } from '@/lib/site';`,
    `import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';`,
    ``,
    `export const metadata: Metadata = {`,
    `  title: '${title} | TennisFriends',`,
    `  description: '${title}에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술과 전술을 상세히 설명합니다.',`,
    `  keywords: ${JSON.stringify(tags)},`,
    `  alternates: { canonical: \`\${getSiteUrl()}/blog/${slug}\` },`,
    `  openGraph: { title: '${title}', type: 'article', locale: 'ko_KR', siteName: 'TennisFriends' },`,
    `};`,
    ``,
    `export default function Page() {`,
    `  const siteUrl = getSiteUrl();`,
    `  return (`,
    `    <div className="min-h-screen bg-gray-50">`,
    `      <BreadcrumbSchema items={[`,
    `        { name: 'TennisFriends', item: siteUrl },`,
    `        { name: '블로그', item: \`\${siteUrl}/blog\` },`,
    `        { name: '${title}', item: \`\${siteUrl}/blog/${slug}\` },`,
    `      ]} />`,
    `      <article className="container mx-auto max-w-3xl px-4 py-12">`,
    `        <h1 className="text-3xl font-bold text-gray-900 mb-8">${title}</h1>`,
    `        <div`,
    `          className="prose prose-lg max-w-none"`,
    `          dangerouslySetInnerHTML={{`,
    `            __html: \`${htmlContent.replace(/`/g, "\\`").replace(/\$/g, "\\$")}\`,`,
    `          }}`,
    `        />`,
    `        <div className="mt-12 p-6 bg-blue-50 rounded-xl">`,
    `          <p className="font-semibold text-blue-900 mb-2">내 테니스 실력 측정하기</p>`,
    `          <Link href="/utility/ntrp-test" className="text-blue-600 underline">`,
    `            무료 NTRP 실력 테스트 →`,
    `          </Link>`,
    `        </div>`,
    `      </article>`,
    `    </div>`,
    `  );`,
    `}`,
  ];
  return lines.join("\n") + "\n";
}

function addToBlogPosts(slug, title, tags, category) {
  const postsFile = "src/data/blog-posts.js";
  let content = fs.readFileSync(postsFile, "utf8");

  // 이미 있으면 스킵
  if (content.includes(`"id": "${slug}"`)) {
    console.log(`  이미 등록됨: ${slug}`);
    return;
  }

  const today = new Date().toISOString().split("T")[0];
  const entry = `  {
    "id": "${slug}",
    "slug": "${slug}",
    "tags": ${JSON.stringify(tags)},
    "title": "${title}",
    "excerpt": "${title}에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    "badge": "최신 글",
    "category": "${category}",
    "date": "${today}",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },\n`;

  content = content.replace(
    "export const allBlogPosts = [\n",
    `export const allBlogPosts = [\n${entry}`,
  );
  fs.writeFileSync(postsFile, content, "utf8");
}

async function generatePost(topic) {
  const prompt = `테니스 전문 블로그 글을 한국어로 작성해주세요.

제목: ${topic.title}
카테고리: ${topic.category}
키워드: ${topic.tags.join(", ")}

요구사항:
- HTML 형식으로 작성 (h2, h3, p, ul, li 태그만 사용, class 속성 없이)
- 1500자 이상
- 실용적인 팁과 구체적인 방법 포함
- 첫 두 문장에 핵심 답변 완결 (AI 인용 최적화)
- h2 섹션 최소 4개
- FAQ 섹션 포함 (h2 "자주 묻는 질문" + 3개 h3 질문)
- 내부 링크 없이 순수 콘텐츠만
- 마크다운 없이 HTML 태그만

HTML 본문만 출력하세요. 다른 설명은 없이 HTML만.`;

  const raw = await callGemini(prompt);
  // Gemini가 ```html 코드블록으로 감쌀 경우 제거
  return raw
    .trim()
    .replace(/^```html\n?/, "")
    .replace(/^```\n?/, "")
    .replace(/\n?```$/, "")
    .trim();
}

async function main() {
  if (!API_KEY) {
    console.error("❌ GEMINI_API_KEY 환경변수 필요");
    process.exit(1);
  }

  const maxPosts = Math.floor(DAILY_BUDGET / COST_PER_POST);
  const toGenerate = TOPIC_QUEUE.filter(({ slug }) => {
    const dir = path.join("src/app/blog", slug);
    return !fs.existsSync(dir);
  }).slice(0, Math.min(maxPosts, 2)); // 하루 최대 2개

  if (toGenerate.length === 0) {
    console.log("생성할 새 주제 없음 (모두 존재하거나 예산 초과)");
    return;
  }

  console.log(`생성 예정: ${toGenerate.length}개`);

  for (const topic of toGenerate) {
    console.log(`\n생성 중: ${topic.slug}`);
    try {
      const htmlContent = await generatePost(topic);

      const blogDir = path.join("src/app/blog", topic.slug);
      fs.mkdirSync(blogDir, { recursive: true });
      fs.writeFileSync(
        path.join(blogDir, "page.tsx"),
        buildPageContent(topic.slug, topic.title, htmlContent, topic.tags),
        "utf8",
      );

      addToBlogPosts(topic.slug, topic.title, topic.tags, topic.category);
      console.log(`✅ 완료: ${topic.slug}`);
    } catch (err) {
      console.error(`❌ 실패: ${topic.slug} — ${err.message}`);
    }
  }

  console.log("\n자동 콘텐츠 생성 완료");
}

main();

const fs = require("fs");
const path = require("path");
const { BLOG_BATCH, PLAYER_BATCH, UTILITY_BATCH } = require("./content_expansion_batch");

const projectRoot = path.join(__dirname, "..");
const blogRoot = path.join(projectRoot, "src", "app", "blog");
const blogRegistryPath = path.join(projectRoot, "src", "data", "blog-posts.js");
const docsRoot = path.join(projectRoot, "docs");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function toReadTime(description) {
  const words = description.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(6, Math.min(10, Math.ceil(words / 18)));
  return `${minutes}분`;
}

function buildSections(post) {
  return [
    {
      id: "overview",
      title: "핵심 요약",
      body: `${post.title}의 핵심은 한 가지 원칙으로 정리할 수 있습니다. ${post.description} 이 글은 실제 경기와 연습에서 바로 적용할 수 있는 기준을 빠르게 정리하는 데 초점을 둡니다.`,
    },
    {
      id: "common-mistakes",
      title: "자주 나오는 실수",
      body: `많은 동호인은 상황을 단순 기술 문제로만 해석하지만, 실제로는 준비 타이밍과 선택의 문제가 더 큽니다. ${post.title}를 다룰 때는 무리한 스피드보다 안정적인 반복과 명확한 의사결정이 먼저입니다.`,
    },
    {
      id: "practical-drills",
      title: "실전 적용 방법",
      body: `연습에서는 목표를 한 번에 여러 개 두지 않는 편이 효율적입니다. 한 세션에는 한 가지 패턴만 반복하고, 다음 세션에서 속도와 정확도를 올리는 식으로 접근해야 ${post.title}의 효과가 실제 경기력으로 연결됩니다.`,
    },
    {
      id: "checklist",
      title: "체크리스트",
      body: `훈련 전 목표 설정, 훈련 중 반복 수 기록, 훈련 후 피드백 정리라는 세 단계를 유지하면 개선 속도가 빨라집니다. 이 구조를 통해 ${post.title} 관련 훈련을 단발성 팁이 아니라 누적형 시스템으로 바꿀 수 있습니다.`,
    },
  ];
}

function createBlogPage(post) {
  const targetDir = path.join(blogRoot, post.slug);
  const targetFile = path.join(targetDir, "page.tsx");

  if (fs.existsSync(targetFile)) {
    return false;
  }

  ensureDir(targetDir);

  const sections = buildSections(post);
  const code = `import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tennisfrens.com";

export const metadata: Metadata = {
  title: ${JSON.stringify(post.title)},
  description: ${JSON.stringify(post.description)},
  alternates: {
    canonical: \`\${siteUrl}/blog/${post.slug}\`,
  },
  openGraph: {
    title: ${JSON.stringify(post.title)},
    description: ${JSON.stringify(post.description)},
    url: \`\${siteUrl}/blog/${post.slug}\`,
    type: "article",
    siteName: "TennisFriends",
    locale: "ko_KR",
  },
};

const sections = ${JSON.stringify(sections, null, 2)} as const;

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <article className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-gray-900">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">${post.category}</p>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">${post.title}</h1>
        <p className="mb-8 text-base leading-7 text-gray-600 dark:text-gray-300">${post.description}</p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
              <p className="leading-7 text-gray-700 dark:text-gray-300">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/30">
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">다음 액션</h2>
          <p className="mb-4 text-sm leading-6 text-gray-700 dark:text-gray-300">
            읽고 끝내지 말고, 오늘 훈련에서 한 가지 기준만 바로 적용해 보세요.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/utility/ntrp-test" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
              NTRP 테스트
            </Link>
            <Link href="/utility/training-planner" className="rounded-full border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-600">
              훈련 플래너
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
`;

  fs.writeFileSync(targetFile, code, "utf8");
  return true;
}

function updateBlogRegistry() {
  const registryText = fs.readFileSync(blogRegistryPath, "utf8");
  const marker = "];";
  const index = registryText.lastIndexOf(marker);

  if (index === -1) {
    throw new Error("Could not find end of blog registry array.");
  }

  const existingSlugs = new Set(
    Array.from(registryText.matchAll(/"slug":\s*"([^"]+)"/g)).map((match) => match[1]),
  );

  const newEntries = BLOG_BATCH.filter((post) => !existingSlugs.has(post.slug)).map((post) => {
    return `  {
    "id": ${JSON.stringify(post.slug)},
    "slug": ${JSON.stringify(post.slug)},
    "title": ${JSON.stringify(post.title)},
    "excerpt": ${JSON.stringify(post.description)},
    "badge": "신규",
    "category": ${JSON.stringify(post.category)},
    "date": "2026-03-07",
    "readTime": ${JSON.stringify(toReadTime(post.description))},
    "badgeColor": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    "categoryColor": "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300"
  }`;
  });

  if (newEntries.length === 0) {
    return 0;
  }

  const prefix = registryText.slice(0, index).trimEnd();
  const updated = `${prefix},\n${newEntries.join(",\n")}\n${marker}\n`;
  fs.writeFileSync(blogRegistryPath, updated, "utf8");
  return newEntries.length;
}

function writeSeedDocs() {
  ensureDir(docsRoot);

  const playerLines = PLAYER_BATCH.map(([slug, nameEn, gender, country], idx) => {
    return `${idx + 1}. ${nameEn} | ${slug} | ${gender} | ${country}`;
  });

  const utilityLines = UTILITY_BATCH.map(([slug, title, category], idx) => {
    return `${idx + 1}. ${title} | ${slug} | ${category}`;
  });

  fs.writeFileSync(
    path.join(docsRoot, "player-expansion-batch-2026-03.md"),
    `# Player Expansion Batch\n\n${playerLines.join("\n")}\n`,
    "utf8",
  );

  fs.writeFileSync(
    path.join(docsRoot, "utility-expansion-batch-2026-03.md"),
    `# Utility Expansion Batch\n\n${utilityLines.join("\n")}\n`,
    "utf8",
  );
}

function main() {
  let createdPages = 0;

  for (const post of BLOG_BATCH) {
    if (createBlogPage(post)) {
      createdPages += 1;
    }
  }

  const registered = updateBlogRegistry();
  writeSeedDocs();

  console.log(
    JSON.stringify(
      {
        createdBlogPages: createdPages,
        registeredBlogPosts: registered,
        playerSeedCount: PLAYER_BATCH.length,
        utilitySeedCount: UTILITY_BATCH.length,
      },
      null,
      2,
    ),
  );
}

main();

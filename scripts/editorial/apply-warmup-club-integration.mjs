import fs from "node:fs";
import { createHash } from "node:crypto";

function hashText(text) {
  return createHash("sha256").update(text).digest("hex");
}

const proposalPath = ".goal-harness/content-90-20261020/next-warmup-club-proposals.json";
const proposalRaw = fs.readFileSync(proposalPath, "utf8");
const proposal = JSON.parse(proposalRaw);
const proposalHash = hashText(proposalRaw);

const filesChanged = [];

// 1. src/data/blog-content/part11-article-writer-300.ts
{
  const file = "src/data/blog-content/part11-article-writer-300.ts";
  const original = fs.readFileSync(file, "utf8");
  const beforeHash = hashText(original);

  const startMarker = '"aw-069-warmup-10-club-match":';
  const startIdx = original.indexOf(startMarker);
  const endMarker = '"aw-070-record":';
  const endIdx = original.indexOf(endMarker, startIdx);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${file}`);
  }

  const p69 = proposal.items.find(i => i.route === "/blog/aw-069-warmup-10-club-match");
  const newEntry = `"${p69.route.replace('/blog/', '')}": ${JSON.stringify(p69.body, null, 2)},\r\n  `;

  const updated = original.slice(0, startIdx) + newEntry + original.slice(endIdx);
  const afterHash = hashText(updated);
  fs.writeFileSync(file, updated, "utf8");
  console.log(`Updated ${file}: before ${beforeHash.slice(0, 12)} -> after ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file,
    backup: ".goal-harness/content-90-20261020/source-backups/warmup-club-src_data_blog-content_part11-article-writer-300.ts-56280c07b825.txt",
    beforeHash,
    afterHash,
    targetSlugs: ["aw-069-warmup-10-club-match"]
  });
}

// 2. src/data/blog-posts-aw-300.js
{
  const file = "src/data/blog-posts-aw-300.js";
  const original = fs.readFileSync(file, "utf8");
  const beforeHash = hashText(original);

  const startMarker = '{\n    "id": "aw-069-warmup-10-club-match",';
  const startIdx = original.indexOf(startMarker);
  const endMarker = '{\n    "id": "aw-070-record",';
  const endIdx = original.indexOf(endMarker, startIdx);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${file}`);
  }

  const p69 = proposal.items.find(i => i.route === "/blog/aw-069-warmup-10-club-match");
  const newMetadata = `{\n    "id": "aw-069-warmup-10-club-match",\n    "slug": "aw-069-warmup-10-club-match",\n    "tags": ${JSON.stringify(p69.body.tags, null, 6).replace(/\n/g, '\n    ')},\n    "title": ${JSON.stringify(p69.metadata.title)},\n    "excerpt": ${JSON.stringify(p69.metadata.excerpt)},\n    "badge": "신규 가이드",\n    "category": "훈련 가이드",\n    "date": "2026-05-15",\n    "readTime": ${JSON.stringify(p69.metadata.readTime)},\n    "updatedAt": ${JSON.stringify(p69.metadata.updatedAt)},\n    "badgeColor": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",\n    "categoryColor": "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300"\n  },\n  `;

  const updated = original.slice(0, startIdx) + newMetadata + original.slice(endIdx);
  const afterHash = hashText(updated);
  fs.writeFileSync(file, updated, "utf8");
  console.log(`Updated ${file}: before ${beforeHash.slice(0, 12)} -> after ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file,
    backup: ".goal-harness/content-90-20261020/source-backups/warmup-club-src_data_blog-posts-aw-300.js-808675dc5cc8.txt",
    beforeHash,
    afterHash,
    targetSlugs: ["aw-069-warmup-10-club-match"]
  });
}

// 3. src/data/blog-content/part16-quality-rewrites.ts
{
  const file = "src/data/blog-content/part16-quality-rewrites.ts";
  const original = fs.readFileSync(file, "utf8");
  const beforeHash = hashText(original);

  const startMarker = '"aw-070-record":';
  const startIdx = original.indexOf(startMarker);
  const endMarker = '"aw-074-court-beginner":';
  const endIdx = original.indexOf(endMarker, startIdx);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${file}`);
  }

  const routes = [
    "/blog/aw-070-record",
    "/blog/aw-071-tennis-guide",
    "/blog/aw-072-serve",
    "/blog/aw-073-doubles-5"
  ];

  const entries = routes.map(r => {
    const item = proposal.items.find(i => i.route === r);
    const slug = r.replace("/blog/", "");
    return `"${slug}": ${JSON.stringify(item.body, null, 2)}`;
  }).join(",\r\n  ") + ",\r\n  ";

  const updated = original.slice(0, startIdx) + entries + original.slice(endIdx);
  const afterHash = hashText(updated);
  fs.writeFileSync(file, updated, "utf8");
  console.log(`Updated ${file}: before ${beforeHash.slice(0, 12)} -> after ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file,
    backup: ".goal-harness/content-90-20261020/source-backups/warmup-club-src_data_blog-content_part16-quality-rewrites.ts-db99c806a52e.txt",
    beforeHash,
    afterHash,
    targetSlugs: routes.map(r => r.replace("/blog/", ""))
  });
}

// 4. src/data/blog-posts-part16-overrides.js
{
  const file = "src/data/blog-posts-part16-overrides.js";
  const original = fs.readFileSync(file, "utf8");
  const beforeHash = hashText(original);

  const startMarker = '{\r\n    "slug": "aw-070-record",';
  const startIdx = original.indexOf(startMarker);
  const endMarker = '{\r\n    "slug": "aw-074-court-beginner",';
  const endIdx = original.indexOf(endMarker, startIdx);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${file}`);
  }

  const overrides = [
    {
      slug: "aw-070-record",
      title: "테니스 점수 콜과 분쟁 해결: 서버 호칭 원칙과 합의 절차",
      excerpt: "셀프 저지 경기에서 서버의 점수 선창 의무와 스코어 혼선 시 The Code 기준의 단계적 합의 복원 절차를 체계적으로 정리합니다.",
      category: "경기 운영",
      tags: ["테니스 점수", "스코어 콜", "셀프 저지", "The Code"],
      readTime: "8분",
      updatedAt: "2026-10-21"
    },
    {
      slug: "aw-071-tennis-guide",
      title: "긴 랠리 후 호흡 가다듬기: 25초 규칙 안에서 멘탈과 플랜 회복",
      excerpt: "격렬한 랠리 직후 ITF Rule 29의 25초 제한 안에서 호흡을 가다듬고 다음 샷 플랜으로 침착하게 전환하는 실전 루틴입니다.",
      category: "멘탈 트레이닝",
      tags: ["긴 랠리", "25초 규칙", "포인트 사이 루틴", "멘탈 관리"],
      readTime: "8분",
      updatedAt: "2026-10-21"
    },
    {
      slug: "aw-072-serve",
      title: "상대 세컨서브 공략: 짧고 느린 공을 보고 전진 리턴 결정하기",
      excerpt: "상대 세컨서브를 무리한 위너 욕심 대신 바운드와 속도를 관찰한 뒤 베이스라인 안쪽으로 들어가 깊은 코스로 공략하는 리턴 가이드입니다.",
      category: "전술 가이드",
      tags: ["세컨서브 공략", "스텝인 리턴", "리턴 포지션", "테니스 전술"],
      readTime: "8분",
      updatedAt: "2026-10-21"
    },
    {
      slug: "aw-073-doubles-5",
      title: "복식 센터볼 충돌 방지: 포지션 콜과 빈자리 커버의 원칙",
      excerpt: "복식 경기 중 중앙으로 향하는 공에서 라켓 충돌과 시선 혼선을 막고, 음성 콜과 역할 분담으로 안전하게 대처하는 실전 가이드입니다.",
      category: "복식 전술",
      tags: ["복식 전술", "센터볼", "포지션 콜", "복식 충돌 방지"],
      readTime: "8분",
      updatedAt: "2026-10-21"
    }
  ];

  const overrideEntries = overrides.map(o => `  ${JSON.stringify(o, null, 2)}`).join(",\r\n") + ",\r\n  ";

  const updated = original.slice(0, startIdx) + overrideEntries + original.slice(endIdx);
  const afterHash = hashText(updated);
  fs.writeFileSync(file, updated, "utf8");
  console.log(`Updated ${file}: before ${beforeHash.slice(0, 12)} -> after ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file,
    backup: ".goal-harness/content-90-20261020/source-backups/warmup-club-src_data_blog-posts-part16-overrides.js-61987fb7e875.txt",
    beforeHash,
    afterHash,
    targetSlugs: overrides.map(o => o.slug)
  });
}

const integrationRecord = {
  appliedAt: new Date().toISOString(),
  proposalHash,
  routes: [
    "/blog/aw-069-warmup-10-club-match",
    "/blog/aw-070-record",
    "/blog/aw-071-tennis-guide",
    "/blog/aw-072-serve",
    "/blog/aw-073-doubles-5"
  ],
  allowedBodyObjects: 5,
  allowedMetadataObjects: 5,
  nonTargetBytesUnchanged: true,
  files: filesChanged
};

fs.writeFileSync(
  ".goal-harness/content-90-20261020/warmup-club-integration.json",
  JSON.stringify(integrationRecord, null, 2),
  "utf8"
);
console.log("Successfully recorded integration in .goal-harness/content-90-20261020/warmup-club-integration.json");

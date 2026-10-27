import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

function hashText(text) {
  return createHash("sha256").update(text).digest("hex");
}

const backupDir = ".goal-harness/content-90-20261020/source-backups";
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const proposalFile = ".goal-harness/content-90-20261020/next-light-lesson-proposals.json";
const proposals = JSON.parse(fs.readFileSync(proposalFile, "utf8"));

const filesChanged = [];

const metadataEnhancements = {
  "aw-096-tennis-guide": {
    highlight: "야간 조명 아래 로브 대응의 핵심은 조명 직시를 피하는 45도 손차양 시선 처리와 무리한 스매시 대신 원 바운드 후속타로 전환하는 3단계 판단입니다.",
    faq: [
      {
        question: "야간 경기 중 로브가 조명탑 불빛에 들어가면 어떻게 대처해야 하나요?",
        answer: "비타구측 손을 45도 각도로 들어 불빛을 가린 채 공의 실루엣을 추적하고, 눈부심이 심하면 무리한 스매시 대신 원 바운드 후 타구로 전환해야 합니다."
      },
      {
        question: "야간에 오버헤드 스매시 미스가 잦은 주된 이유는 무엇인가요?",
        answer: "강한 광원 직시로 인한 일시적 망막 잔상(0.3~0.7초 시각 소실)과 주간 대비 둔화된 원근감 때문입니다."
      },
      {
        question: "베이스라인 뒤편 음영 지대에서 안전을 지키는 요령은?",
        answer: "뒤꿈치로 물러나지 말고 사이드스텝으로 펜스와의 안전거리를 확보하며 깊은 대각선 로브로 시간을 벌어야 합니다."
      }
    ]
  },
  "aw-097-record-5": {
    highlight: "레슨 코치 피드백 기록의 핵심은 감정적 반성이 아닌 5열(상황-신체부위-타이밍-큐워드-검증기준) 구조화로 단 하나의 핵심 동작을 실전에서 재현하는 것입니다.",
    faq: [
      {
        question: "레슨이 끝난 후 피드백은 언제 기록하는 것이 가장 좋은가요?",
        answer: "스포츠 운동학상 망각을 방지하기 위해 레슨 직후 벤치에서 5분 이내에 스마트폰 메모로 핵심 큐워드를 정리하는 것이 필수적입니다."
      },
      {
        question: "코치가 여러 가지를 동시에 지적했을 때는 어떻게 연습하나요?",
        answer: "실전 경기나 랠리 중에는 뇌가 한 번에 하나의 신호만 처리할 수 있으므로, 단 1가지 핵심 큐워드만 정해 집중해야 합니다."
      },
      {
        question: "피드백 노트가 실전 경기력 향상으로 이어지는지 확인하는 방법은?",
        answer: "득실점 결과와 무관하게, 사전에 정한 '타구 후 라켓 완주' 같은 신체 자가 검증 기준이 달성되었는지를 경기 후 복기합니다."
      }
    ]
  },
  "aw-098-doubles-beginner": {
    highlight: "동호회 복식 스타트 포지션의 핵심은 네트 2.5~3.0m 서비스박스 중앙 전위 배치와 스플릿스텝 대각 전진 첫 스텝으로 사각지대를 차단하는 것입니다.",
    faq: [
      {
        question: "서버 파트너(전위)의 가장 이상적인 시작 위치는 어디인가요?",
        answer: "네트에서 약 2.5~3.0m 떨어진 서비스박스 정중앙 지점에서 센터라인 쪽으로 1.5m 안쪽에 서는 것이 권장됩니다."
      },
      {
        question: "리시버 파트너(전위)는 왜 서비스라인 뒤에 서야 하나요?",
        answer: "상대 전위의 기습 포칭 발리에 대한 반응 거리를 확보하고, 파트너의 리턴이 안전하게 넘어가는 것을 확인하기 위함입니다."
      },
      {
        question: "복식 전위의 첫 발은 어느 방향으로 떼어야 하나요?",
        answer: "단순히 옆으로 뛰지 말고, 네트를 향해 대각선 앞 45도 방향으로 파고들어야 공의 높은 타점을 선점할 수 있습니다."
      }
    ]
  },
  "aw-099-injury-injury-record": {
    highlight: "테니스 엘보 예방의 핵심은 커피잔 들기 등 3대 일상 동작으로 전조 신호를 조기 감별하고, 장비 스펙과 통증 이력을 기록해 전문의 진료 시 정확히 소통하는 것입니다.",
    faq: [
      {
        question: "단순 근육통과 테니스 엘보 전조 신호를 구별하는 기준은 무엇인가요?",
        answer: "커피잔 들기, 문손잡이 돌리기 등 손목을 젖히거나 쥐는 가벼운 일상 동작에서 팔꿈치 바깥쪽 돌출 뼈에 날카로운 통증이 유발되는지 확인합니다."
      },
      {
        question: "팔꿈치에 뻐근함이 느껴질 때 경기나 연습을 계속해도 되나요?",
        answer: "즉시 운동 부하를 줄이거나 중단해야 하며, 특히 스트링 텐션 인하와 그립 사이즈 점검을 병행해야 합니다."
      },
      {
        question: "반드시 즉시 병원 정형외과 진료를 받아야 하는 위험 징후(레드플래그)는?",
        answer: "야간 수면 중 통증으로 깨어나거나, 손가락 저림·마비감, 관절 부종 및 열감이 동반되면 즉시 전문의 검진을 받아야 합니다."
      }
    ]
  },
  "aw-100-tennis-guide": {
    highlight: "효과적인 레슨 질문의 핵심은 'SCFR 공식(장면-결과-느낌-요청)'으로 문제를 구체화하여 코치로부터 즉각적인 맞춤 교정 드릴을 이끌어내는 것입니다.",
    faq: [
      {
        question: "레슨 시작 전 코치에게 어떤 방식으로 질문해야 효과적인가요?",
        answer: "'포핸드가 안 돼요' 대신 '낮은 공을 칠 때 아웃되는데 라켓 면 닫는 드릴을 봐주세요'처럼 장면과 원하는 드릴을 명시합니다."
      },
      {
        question: "스마트폰 경기 영상을 코치에게 보여줄 때 주의할 점은?",
        answer: "전체 경기 영상을 틀지 말고, 교정받고 싶은 특정 문제 장면만 3초 단위로 타임스탬프를 미리 지정해 보여주어야 합니다."
      },
      {
        question: "레슨 중 질문은 몇 개 정도 준비하는 것이 적절한가요?",
        answer: "20분 레슨 기준 1~2개의 핵심 주제에만 집중해야 연습 흐름이 끊기지 않고 충분한 타구 반복량을 확보할 수 있습니다."
      }
    ]
  }
};

// 1. src/data/blog-content/part16-quality-rewrites.ts (aw-096, aw-097, aw-098 and aw-100)
{
  const filePath = "src/data/blog-content/part16-quality-rewrites.ts";
  let content = fs.readFileSync(filePath, "utf8");
  const beforeHash = hashText(content);

  const backupPath = path.join(backupDir, `light-lesson-src_data_blog-content_part16-quality-rewrites.ts-${beforeHash.slice(0, 12)}.txt`);
  fs.writeFileSync(backupPath, content, "utf8");

  // Block 1: aw-096, aw-097, aw-098 (before aw-100)
  const startMarker1 = '"aw-096-tennis-guide":';
  const startIdx1 = content.indexOf(startMarker1);
  const endMarker1 = '"aw-100-tennis-guide":';
  const endIdx1 = content.indexOf(endMarker1, startIdx1);

  if (startIdx1 === -1 || endIdx1 === -1) {
    throw new Error(`Markers 1 not found in ${filePath}`);
  }

  const items96to98 = proposals.items.filter(i => ["aw-096-tennis-guide", "aw-097-record-5", "aw-098-doubles-beginner"].includes(i.slug));
  const newEntries1 = items96to98.map(item => {
    const meta = metadataEnhancements[item.slug];
    const entryObj = {
      content: item.body,
      tags: item.tags,
      summary: item.excerpt,
      highlight: meta.highlight,
      faq: meta.faq
    };
    return `"${item.slug}": ${JSON.stringify(entryObj, null, 2)},\n  `;
  }).join("");

  content = content.slice(0, startIdx1) + newEntries1 + content.slice(endIdx1);

  // Block 2: aw-100 (before aw-101)
  const startMarker2 = '"aw-100-tennis-guide":';
  const startIdx2 = content.indexOf(startMarker2);
  const endMarker2 = '"aw-101-court":';
  const endIdx2 = content.indexOf(endMarker2, startIdx2);

  if (startIdx2 === -1 || endIdx2 === -1) {
    throw new Error(`Markers 2 not found in ${filePath}`);
  }

  const item100 = proposals.items.find(i => i.slug === "aw-100-tennis-guide");
  const meta100 = metadataEnhancements[item100.slug];
  const entryObj100 = {
    content: item100.body,
    tags: item100.tags,
    summary: item100.excerpt,
    highlight: meta100.highlight,
    faq: meta100.faq
  };
  const newEntries2 = `"${item100.slug}": ${JSON.stringify(entryObj100, null, 2)},\n  `;

  content = content.slice(0, startIdx2) + newEntries2 + content.slice(endIdx2);

  const afterHash = hashText(content);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Updated ${filePath}: ${beforeHash.slice(0, 12)} -> ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file: filePath,
    backup: backupPath,
    beforeHash,
    afterHash,
    slugs: ["aw-096-tennis-guide", "aw-097-record-5", "aw-098-doubles-beginner", "aw-100-tennis-guide"]
  });
}

// 2. src/data/blog-posts-part16-overrides.js (aw-096, aw-097, aw-098 and aw-100)
{
  const filePath = "src/data/blog-posts-part16-overrides.js";
  let content = fs.readFileSync(filePath, "utf8");
  const beforeHash = hashText(content);

  const backupPath = path.join(backupDir, `light-lesson-src_data_blog-posts-part16-overrides.js-${beforeHash.slice(0, 12)}.txt`);
  fs.writeFileSync(backupPath, content, "utf8");

  // Block 1: aw-096, aw-097, aw-098 (before aw-100)
  const startMarker1 = '"slug": "aw-096-tennis-guide"';
  const markerIdx1 = content.indexOf(startMarker1);
  const startIdx1 = content.lastIndexOf('{', markerIdx1);
  const endMarker1 = '"slug": "aw-100-tennis-guide"';
  const endMarkerIdx1 = content.indexOf(endMarker1);
  const endIdx1 = content.lastIndexOf('{', endMarkerIdx1);

  if (startIdx1 === -1 || endIdx1 === -1) {
    throw new Error(`Override Markers 1 not found in ${filePath}`);
  }

  const items96to98 = proposals.items.filter(i => ["aw-096-tennis-guide", "aw-097-record-5", "aw-098-doubles-beginner"].includes(i.slug));
  const newOverrides1 = items96to98.map(item => {
    return `{\n    "slug": "${item.slug}",\n    "title": "${item.title}",\n    "excerpt": "${item.excerpt}",\n    "category": "${item.category}",\n    "tags": ${JSON.stringify(item.tags)},\n    "readTime": "9분",\n    "updatedAt": "2026-10-27"\n  },\n  `;
  }).join("");

  content = content.slice(0, startIdx1) + newOverrides1 + content.slice(endIdx1);

  // Block 2: aw-100 (before aw-101)
  const startMarker2 = '"slug": "aw-100-tennis-guide"';
  const markerIdx2 = content.indexOf(startMarker2);
  const startIdx2 = content.lastIndexOf('{', markerIdx2);
  const endMarker2 = '"slug": "aw-101-court"';
  const endMarkerIdx2 = content.indexOf(endMarker2);
  const endIdx2 = content.lastIndexOf('{', endMarkerIdx2);

  if (startIdx2 === -1 || endIdx2 === -1) {
    throw new Error(`Override Markers 2 not found in ${filePath}`);
  }

  const item100 = proposals.items.find(i => i.slug === "aw-100-tennis-guide");
  const newOverrides2 = `{\n    "slug": "${item100.slug}",\n    "title": "${item100.title}",\n    "excerpt": "${item100.excerpt}",\n    "category": "${item100.category}",\n    "tags": ${JSON.stringify(item100.tags)},\n    "readTime": "9분",\n    "updatedAt": "2026-10-27"\n  },\n  `;

  content = content.slice(0, startIdx2) + newOverrides2 + content.slice(endIdx2);

  const afterHash = hashText(content);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Updated ${filePath}: ${beforeHash.slice(0, 12)} -> ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file: filePath,
    backup: backupPath,
    beforeHash,
    afterHash,
    slugs: ["aw-096-tennis-guide", "aw-097-record-5", "aw-098-doubles-beginner", "aw-100-tennis-guide"]
  });
}

// 3. src/data/blog-content/part11-article-writer-300.ts (aw-099-injury-injury-record)
{
  const filePath = "src/data/blog-content/part11-article-writer-300.ts";
  let content = fs.readFileSync(filePath, "utf8");
  const beforeHash = hashText(content);

  const backupPath = path.join(backupDir, `light-lesson-src_data_blog-content_part11-article-writer-300.ts-${beforeHash.slice(0, 12)}.txt`);
  fs.writeFileSync(backupPath, content, "utf8");

  const startMarker = '"aw-099-injury-injury-record":';
  const startIdx = content.indexOf(startMarker);
  const endMarker = '"aw-100-tennis-guide":';
  const endIdx = content.indexOf(endMarker, startIdx);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${filePath}`);
  }

  const item99 = proposals.items.find(i => i.slug === "aw-099-injury-injury-record");
  const meta99 = metadataEnhancements[item99.slug];
  const entryObj99 = {
    content: item99.body,
    tags: item99.tags,
    summary: item99.excerpt,
    highlight: meta99.highlight,
    faq: meta99.faq
  };
  const newEntry99 = `"${item99.slug}": ${JSON.stringify(entryObj99, null, 2)},\n  `;

  content = content.slice(0, startIdx) + newEntry99 + content.slice(endIdx);

  const afterHash = hashText(content);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Updated ${filePath}: ${beforeHash.slice(0, 12)} -> ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file: filePath,
    backup: backupPath,
    beforeHash,
    afterHash,
    slugs: ["aw-099-injury-injury-record"]
  });
}

// 4. src/data/blog-posts-aw-300.js (aw-099-injury-injury-record)
{
  const filePath = "src/data/blog-posts-aw-300.js";
  let content = fs.readFileSync(filePath, "utf8");
  const beforeHash = hashText(content);

  const backupPath = path.join(backupDir, `light-lesson-src_data_blog-posts-aw-300.js-${beforeHash.slice(0, 12)}.txt`);
  fs.writeFileSync(backupPath, content, "utf8");

  const startMarker = '"slug": "aw-099-injury-injury-record"';
  const markerIdx = content.indexOf(startMarker);
  const startIdx = content.lastIndexOf('{', markerIdx);
  const endMarker = '"slug": "aw-100-tennis-guide"';
  const endMarkerIdx = content.indexOf(endMarker);
  const endIdx = content.lastIndexOf('{', endMarkerIdx);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${filePath}`);
  }

  const item99 = proposals.items.find(i => i.slug === "aw-099-injury-injury-record");
  const newPostEntry = `{\n    "id": "${item99.slug}",\n    "slug": "${item99.slug}",\n    "tags": ${JSON.stringify(item99.tags)},\n    "title": "${item99.title}",\n    "excerpt": "${item99.excerpt}",\n    "badge": "신규 가이드",\n    "category": "${item99.category}",\n    "date": "2026-05-15",\n    "readTime": "9분",\n    "badgeColor": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",\n    "categoryColor": "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300"\n  },\n  `;

  content = content.slice(0, startIdx) + newPostEntry + content.slice(endIdx);

  const afterHash = hashText(content);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Updated ${filePath}: ${beforeHash.slice(0, 12)} -> ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file: filePath,
    backup: backupPath,
    beforeHash,
    afterHash,
    slugs: ["aw-099-injury-injury-record"]
  });
}

const integrationRecord = {
  appliedAt: new Date().toISOString(),
  batchId: "light-lesson-20261027",
  filesChanged
};

const recordPath = ".goal-harness/content-90-20261020/light-lesson-integration.json";
fs.writeFileSync(recordPath, JSON.stringify(integrationRecord, null, 2), "utf8");
console.log(`Integration completed and recorded to ${recordPath}`);

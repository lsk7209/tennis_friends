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

const proposalFile = ".goal-harness/content-90-20261020/next-court-doubles-proposals.json";
const proposals = JSON.parse(fs.readFileSync(proposalFile, "utf8"));

const filesChanged = [];

// Specific FAQs and Highlights mapping
const metadataEnhancements = {
  "aw-090-tennis-guide": {
    highlight: "테니스장 예약 전 코트 환경 확인의 핵심은 바닥 균열·조명 조도·안전 런백 거리를 사전에 점검하여 미끄러짐과 충돌 부상을 예방하는 것입니다.",
    faq: [
      {
        question: "예약 전 코트 환경에서 가장 먼저 확인해야 할 사항은 무엇인가요?",
        answer: "바닥 표면의 균열/물고임 여부와 베이스라인 뒤편 최소 6.4m 이상의 안전 런백 거리 확보 여부입니다."
      },
      {
        question: "야간 경기 시 조명 조도는 어느 정도여야 안전한가요?",
        answer: "동호회 클럽 기준 최소 300~500 lux 조도와 음영 사각지대가 없는 균일도(0.5 이상)가 권장됩니다."
      },
      {
        question: "좁은 실내외 코트에서 부상을 피하는 이동 동선 요령은?",
        answer: "무리한 펜스 근처 역동작 추격을 자제하고, 포인트 시작 전 파트너 및 옆 코트와의 간격을 사전에 확인해야 합니다."
      }
    ]
  },
  "aw-091-string-20": {
    highlight: "동절기 테니스 스트링 관리의 핵심은 저온 경화에 따른 충격 증가를 막기 위해 텐션을 2~4 lbs 낮추고 20분 단계별 적응을 거치는 것입니다.",
    faq: [
      {
        question: "추운 날 스트링 텐션을 몇 파운드 낮추는 것이 적절한가요?",
        answer: "일반적으로 평소 텐션 대비 2~4 lbs (약 1~2 kg, 5~8%) 낮추어 공 포켓팅과 충격 흡수력을 회복하는 것이 권장됩니다."
      },
      {
        question: "겨울철 폴리에스터 스트링 파손이 잦은 이유는 무엇인가요?",
        answer: "기온이 10°C 이하로 떨어지면 폴리 분자 구조의 유연성이 급감하여 충격 흡수율이 낮아지고 취성(부러짐)이 높아지기 때문입니다."
      },
      {
        question: "경기 전 20분 적응 웜업은 어떻게 진행하나요?",
        answer: "첫 5분 쇼트 테니스 미니 랠리, 다음 10분 베이스라인 깊이 조절, 마지막 5분 서브 및 발리 점검으로 진행합니다."
      }
    ]
  },
  "aw-092-tennis-guide": {
    highlight: "장비 교체 후 경기 감각 유지의 핵심은 곧바로 시합에 들어가지 않고 3단계(미니랠리-깊이조절-타이브레이크) 테스트로 타점과 궤적을 확인하는 것입니다.",
    faq: [
      {
        question: "새 라켓이나 새 스트링으로 바꾼 뒤 실전 적응 순서는?",
        answer: "1단계 5분 쇼트 테니스(타점 중심), 2단계 10분 롱 랠리(발사각과 깊이), 3단계 7포인트 타이브레이크(실전 압박 적응) 순서가 안전합니다."
      },
      {
        question: "새 장비로 칠 때 아웃이 자주 발생하는 이유는?",
        answer: "라켓 무게중심(스윙웨이트)이나 스트링 반발력 변화로 발사각이 미세하게 높아졌기 때문이며, 스윙을 줄이기보다 타점 앞 위치를 유지해야 합니다."
      },
      {
        question: "테스트 중 팔꿈치나 손목에 위화감이 느껴지면 어떻게 하나요?",
        answer: "즉시 시합 타구를 중단하고, 스트링 텐션 과다 여부나 라켓 그립 사이즈 불일치를 재점검해야 합니다."
      }
    ]
  },
  "aw-093-doubles-club-match": {
    highlight: "동호회 복식 핸드 사인의 핵심은 복잡한 전략 대신 4가지 필수 약속(T존/와이드, 제자리/포칭)을 간결한 신호로 공유하는 것입니다.",
    faq: [
      {
        question: "복식 경기에서 전위가 뒤로 보내는 필수 핸드 사인은?",
        answer: "손가락 1개(T존 센터 코스), 손가락 2개(와이드 코스), 주먹(제자리 스트레이트 블록), 손바닥 펴기(크로스 포칭 대각 컷) 4가지가 대표적입니다."
      },
      {
        question: "사인을 상대방에게 들키지 않게 전달하는 방법은?",
        answer: "전위가 허리 뒤편이나 등 뒤에서 라켓 또는 손가락으로 신호를 보내며, 서브 시작 전 파트너와만 눈을 맞춥니다."
      },
      {
        question: "사인이 맞지 않아 센터가 비었을 때 대처법은?",
        answer: "포칭 실패 시 즉시 '마이(Mine) / 고(Go)' 콜을 명확히 외치고, 후위는 비어있는 반대 코트로 신속히 전환 커버해야 합니다."
      }
    ]
  },
  "aw-095-club-match": {
    highlight: "동호회 게스트 첫 경기 매너의 핵심은 시간 준수, 명확한 셀프 저지, 서버의 사전 스코어 콜 등 5대 수칙으로 원활한 소통을 유지하는 것입니다.",
    faq: [
      {
        question: "동호회 첫 게스트 참가 시 경기 전 갖춰야 할 매너는?",
        answer: "코트 예약 시간 최소 10~15분 전 도착하여 운영진 및 파트너에게 인사하고 복장 규정(테니스화 착용)을 준수합니다."
      },
      {
        question: "라인 콜 분쟁을 방지하는 스코어 콜 원칙은?",
        answer: "서버는 매 포인트 시작 전 상대가 분명히 들을 수 있는 육성으로 '서버 점수 먼저(예: 30-15)' 정확히 콜해야 합니다."
      },
      {
        question: "인/아웃 판정이 애매할 때는 어떻게 처리하나요?",
        answer: "공식 셀프 저지 원칙에 따라 100% 확실한 아웃이 아닌 한 상대방에게 유리한 '인(In)'으로 콜해야 합니다."
      }
    ]
  }
};

// 1. src/data/blog-content/part16-quality-rewrites.ts (aw-090 ~ aw-093, and aw-095)
{
  const filePath = "src/data/blog-content/part16-quality-rewrites.ts";
  let content = fs.readFileSync(filePath, "utf8");
  const beforeHash = hashText(content);

  const backupPath = path.join(backupDir, `court-doubles-src_data_blog-content_part16-quality-rewrites.ts-${beforeHash.slice(0, 12)}.txt`);
  fs.writeFileSync(backupPath, content, "utf8");

  // Block 1: aw-090 to aw-093 (before aw-094-injury-grip-record)
  const startMarker1 = '"aw-090-tennis-guide":';
  const startIdx1 = content.indexOf(startMarker1);
  const endMarker1 = '"aw-094-injury-grip-record":';
  const endIdx1 = content.indexOf(endMarker1, startIdx1);

  if (startIdx1 === -1 || endIdx1 === -1) {
    throw new Error(`Markers 1 not found in ${filePath}`);
  }

  const items90to93 = proposals.items.filter(i => ["aw-090-tennis-guide", "aw-091-string-20", "aw-092-tennis-guide", "aw-093-doubles-club-match"].includes(i.slug));
  const newEntries1 = items90to93.map(item => {
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

  // Block 2: aw-095 (before aw-096-tennis-guide)
  const startMarker2 = '"aw-095-club-match":';
  const startIdx2 = content.indexOf(startMarker2);
  const endMarker2 = '"aw-096-tennis-guide":';
  const endIdx2 = content.indexOf(endMarker2, startIdx2);

  if (startIdx2 === -1 || endIdx2 === -1) {
    throw new Error(`Markers 2 not found in ${filePath}`);
  }

  const item95 = proposals.items.find(i => i.slug === "aw-095-club-match");
  const meta95 = metadataEnhancements[item95.slug];
  const entryObj95 = {
    content: item95.body,
    tags: item95.tags,
    summary: item95.excerpt,
    highlight: meta95.highlight,
    faq: meta95.faq
  };
  const newEntries2 = `"${item95.slug}": ${JSON.stringify(entryObj95, null, 2)},\n  `;

  content = content.slice(0, startIdx2) + newEntries2 + content.slice(endIdx2);

  const afterHash = hashText(content);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Updated ${filePath}: ${beforeHash.slice(0, 12)} -> ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file: filePath,
    backup: backupPath,
    beforeHash,
    afterHash,
    slugs: ["aw-090-tennis-guide", "aw-091-string-20", "aw-092-tennis-guide", "aw-093-doubles-club-match", "aw-095-club-match"]
  });
}

// 2. src/data/blog-posts-part16-overrides.js (aw-090 ~ aw-093, and aw-095)
{
  const filePath = "src/data/blog-posts-part16-overrides.js";
  let content = fs.readFileSync(filePath, "utf8");
  const beforeHash = hashText(content);

  const backupPath = path.join(backupDir, `court-doubles-src_data_blog-posts-part16-overrides.js-${beforeHash.slice(0, 12)}.txt`);
  fs.writeFileSync(backupPath, content, "utf8");

  // Block 1: aw-090 to aw-093 (before aw-094)
  const startMarker1 = '"slug": "aw-090-tennis-guide"';
  const markerIdx1 = content.indexOf(startMarker1);
  const startIdx1 = content.lastIndexOf('{', markerIdx1);
  const endMarker1 = '"slug": "aw-094-injury-grip-record"';
  const endMarkerIdx1 = content.indexOf(endMarker1);
  const endIdx1 = content.lastIndexOf('{', endMarkerIdx1);

  if (startIdx1 === -1 || endIdx1 === -1) {
    throw new Error(`Override Markers 1 not found in ${filePath}`);
  }

  const items90to93 = proposals.items.filter(i => ["aw-090-tennis-guide", "aw-091-string-20", "aw-092-tennis-guide", "aw-093-doubles-club-match"].includes(i.slug));
  const newOverrides1 = items90to93.map(item => {
    return `{\n    "slug": "${item.slug}",\n    "title": "${item.title}",\n    "excerpt": "${item.excerpt}",\n    "category": "${item.category}",\n    "tags": ${JSON.stringify(item.tags)},\n    "readTime": "9분",\n    "updatedAt": "2026-10-26"\n  },\n  `;
  }).join("");

  content = content.slice(0, startIdx1) + newOverrides1 + content.slice(endIdx1);

  // Block 2: aw-095 (before aw-096)
  const startMarker2 = '"slug": "aw-095-club-match"';
  const markerIdx2 = content.indexOf(startMarker2);
  const startIdx2 = content.lastIndexOf('{', markerIdx2);
  const endMarker2 = '"slug": "aw-096-tennis-guide"';
  const endMarkerIdx2 = content.indexOf(endMarker2);
  const endIdx2 = content.lastIndexOf('{', endMarkerIdx2);

  if (startIdx2 === -1 || endIdx2 === -1) {
    throw new Error(`Override Markers 2 not found in ${filePath}`);
  }

  const item95 = proposals.items.find(i => i.slug === "aw-095-club-match");
  const newOverrides2 = `{\n    "slug": "${item95.slug}",\n    "title": "${item95.title}",\n    "excerpt": "${item95.excerpt}",\n    "category": "${item95.category}",\n    "tags": ${JSON.stringify(item95.tags)},\n    "readTime": "9분",\n    "updatedAt": "2026-10-26"\n  },\n  `;

  content = content.slice(0, startIdx2) + newOverrides2 + content.slice(endIdx2);

  const afterHash = hashText(content);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Updated ${filePath}: ${beforeHash.slice(0, 12)} -> ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file: filePath,
    backup: backupPath,
    beforeHash,
    afterHash,
    slugs: ["aw-090-tennis-guide", "aw-091-string-20", "aw-092-tennis-guide", "aw-093-doubles-club-match", "aw-095-club-match"]
  });
}

const integrationRecord = {
  appliedAt: new Date().toISOString(),
  batchId: "court-doubles-20261026",
  filesChanged
};

const recordPath = ".goal-harness/content-90-20261020/court-doubles-integration.json";
fs.writeFileSync(recordPath, JSON.stringify(integrationRecord, null, 2), "utf8");
console.log(`Integration completed and recorded to ${recordPath}`);

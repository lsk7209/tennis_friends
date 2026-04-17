/**
 * 콘텐츠 리프레시 스크립트 (Gemini 2.5 Flash Lite)
 * 6개월+ 된 블로그 글에 최신 정보 섹션 추가
 * 실행: node scripts/content-refresh.js
 * 환경변수: GEMINI_API_KEY (필수)
 */
const fs = require("fs");
const https = require("https");
const path = require("path");

const API_KEY = process.env.GEMINI_API_KEY;
const SIX_MONTHS_AGO = new Date();
SIX_MONTHS_AGO.setMonth(SIX_MONTHS_AGO.getMonth() - 6);

function callGemini(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 800, temperature: 0.5 },
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
          if (parsed.error) reject(new Error(parsed.error.message));
          else resolve(parsed.candidates[0].content.parts[0].text);
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

async function main() {
  if (!API_KEY) {
    console.error("❌ GEMINI_API_KEY 환경변수 필요");
    process.exit(1);
  }

  // blog-posts.js에서 6개월+ 된 글 찾기
  const postsContent = fs.readFileSync("src/data/blog-posts.js", "utf8");
  const dateMatches = [
    ...postsContent.matchAll(/"date":\s*"(\d{4}-\d{2}-\d{2})"/g),
  ];
  const slugMatches = [...postsContent.matchAll(/"slug":\s*"([^"]+)"/g)];
  const titleMatches = [...postsContent.matchAll(/"title":\s*"([^"]+)"/g)];

  const stale = [];
  for (let i = 0; i < dateMatches.length; i++) {
    const date = new Date(dateMatches[i][1]);
    const slug = slugMatches[i]?.[1];
    const title = titleMatches[i]?.[1];
    const pagePath = path.join("src/app/blog", slug, "page.tsx");

    if (date < SIX_MONTHS_AGO && slug && fs.existsSync(pagePath)) {
      stale.push({ slug, title, date: dateMatches[i][1] });
    }
  }

  console.log(`6개월+ 미갱신 글: ${stale.length}개`);
  if (stale.length === 0) return;

  // 최대 3개씩 처리
  const toRefresh = stale.slice(0, 3);

  for (const post of toRefresh) {
    console.log(`\n갱신 중: ${post.slug} (${post.date})`);

    try {
      const updateSection = await callGemini(
        `테니스 블로그 글 "${post.title}"에 추가할 "2026년 최신 업데이트" 섹션을 HTML로 작성해주세요.
200자 이내, h2 태그 사용, 실용적인 최신 정보 포함.
HTML 태그만 출력하세요.`,
      );

      const pagePath = path.join("src/app/blog", post.slug, "page.tsx");
      let content = fs.readFileSync(pagePath, "utf8");

      // dangerouslySetInnerHTML 내용 앞에 업데이트 섹션 삽입
      const updateHtml = `<h2>2026년 최신 업데이트</h2>${updateSection.trim()}`;
      const today = new Date().toISOString().split("T")[0];

      // page.tsx의 HTML 콘텐츠에 업데이트 섹션 prepend
      content = content.replace(
        /dangerouslySetInnerHTML=\{\{\s*__html:\s*`/,
        `dangerouslySetInnerHTML={{ __html: \`${updateHtml.replace(/`/g, "\\`")}\n`,
      );

      // blog-posts.js date 업데이트
      const postsFile = "src/data/blog-posts.js";
      let posts = fs.readFileSync(postsFile, "utf8");
      posts = posts.replace(
        new RegExp(`("slug":\\s*"${post.slug}"[^}]*"date":\\s*)"[^"]+"`),
        `$1"${today}"`,
      );

      fs.writeFileSync(pagePath, content, "utf8");
      fs.writeFileSync(postsFile, posts, "utf8");
      console.log(`✅ 갱신: ${post.slug} → ${today}`);
    } catch (err) {
      console.error(`❌ 실패: ${post.slug} — ${err.message}`);
    }
  }

  console.log("\n콘텐츠 리프레시 완료");
}

main();

#!/usr/bin/env node
/**
 * /blog/{player}/page.tsx 의 canonical URL을 /players/{player} 로 교정.
 *
 * 이유: 동일 선수 페이지가 /blog 와 /players 양쪽에 존재하여 SEO 중복.
 *       /players 를 정규 URL로 하고 /blog 는 canonical 로 이관.
 */
const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "..", "src", "app", "blog");
const PLAYERS_DIR = path.join(__dirname, "..", "src", "app", "players");

const PLAYER_SLUGS = [
  "tommy-paul",
  "alex-de-minaur",
  "alexander-zverev",
  "andrey-rublev",
  "ben-shelton",
  "carlos-alcaraz",
  "casper-ruud",
  "daniil-medvedev",
  "frances-tiafoe",
  "grigor-dimitrov",
  "holger-rune",
  "hubert-hurkacz",
  "jannik-sinner",
  "stefanos-tsitsipas",
  "taylor-fritz",
  "novak-djokovic",
];

let updated = 0;
for (const slug of PLAYER_SLUGS) {
  const blogFile = path.join(BLOG_DIR, slug, "page.tsx");
  const playersFile = path.join(PLAYERS_DIR, slug, "page.tsx");

  if (!fs.existsSync(blogFile)) continue;
  if (!fs.existsSync(playersFile)) {
    console.log(`⚠️  skip ${slug} — /players/${slug} 없음`);
    continue;
  }

  let content = fs.readFileSync(blogFile, "utf8");
  const before = content;

  // canonical URL을 /players/ 로 교정
  content = content.replace(
    new RegExp(
      `canonical:\\s*['"]https://tennisfrens\\.com/blog/${slug}['"]`,
      "g",
    ),
    `canonical: 'https://tennisfrens.com/players/${slug}'`,
  );
  // openGraph url 도 일치시킴
  content = content.replace(
    new RegExp(`url:\\s*['"]https://tennisfrens\\.com/blog/${slug}['"]`, "g"),
    `url: 'https://tennisfrens.com/players/${slug}'`,
  );

  if (content !== before) {
    fs.writeFileSync(blogFile, content, "utf8");
    updated++;
    console.log(`✓ /blog/${slug} canonical → /players/${slug}`);
  }
}

console.log(`\n완료: ${updated}개 블로그 canonical 교정.`);

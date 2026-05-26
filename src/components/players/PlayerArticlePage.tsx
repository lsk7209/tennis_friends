import Article from "@/components/blog/Article";
import TOC from "@/components/blog/TOC";
import { FAQ } from "@/components/blog/FAQ";
import PlayerHexagonStats from "@/components/players/PlayerHexagonStats";
import PlayerSearchAliasSection from "@/components/players/PlayerSearchAliasSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import PersonSchema from "@/components/seo/PersonSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { PLAYERS_DB } from "@/data/players";
import { getSiteUrl } from "@/lib/site";
import { Crown, Target, Zap, Star, BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Props {
  slug: string;
}

export default function PlayerArticlePage({ slug }: Props) {
  const player = PLAYERS_DB[slug];
  if (!player) return null;

  const dp = player.detailedProfile ?? {};
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}/players/${slug}`;
  const tour = player.gender === "male" ? "ATP" : "WTA";

  const faqs = (dp.faq ?? []).map((f) => ({ q: f.question, a: f.answer }));

  const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
    {
      id: "why-notable",
      text: `${player.name}, 왜 주목받는 선수인가?`,
      depth: 2,
    },
    { id: "play-style", text: "이 선수는 어떤 유형의 플레이어인가?", depth: 2 },
    {
      id: "growth-story",
      text: `${player.name}은 어떻게 여기까지 왔을까?`,
      depth: 2,
    },
    {
      id: "signature-match",
      text: "이 선수를 가장 잘 보여주는 경기는?",
      depth: 2,
    },
    { id: "fan-appeal", text: "팬들은 이 선수의 어떤 점에 끌릴까?", depth: 2 },
    {
      id: "recent-form",
      text: `요즘 ${player.name}의 경기력 흐름은?`,
      depth: 2,
    },
    { id: "one-liner", text: "한 문장으로 정리하면?", depth: 2 },
    ...(faqs.length > 0
      ? [{ id: "faq", text: "자주 묻는 질문 (FAQ)", depth: 2 as const }]
      : []),
    { id: "references", text: "외부 참고 자료", depth: 2 },
  ];

  const wikiSlug = player.nameEn.replace(/ /g, "_");
  const atpWtaUrl =
    player.gender === "male"
      ? `https://www.atptour.com/en/players/overview`
      : `https://www.wtatennis.com/players`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <PersonSchema
        name={player.nameEn}
        nameKo={player.name}
        description={
          dp.oneLineSummary ??
          player.longBio ??
          `${player.name} ${tour} 프로 테니스 선수.`
        }
        image={player.image ?? ""}
        nationality={player.country}
        birthDate={player.birthDate}
        height={player.height}
        jobTitle="Professional Tennis Player"
        award={[]}
        url={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "홈", item: siteUrl },
          { name: "선수", item: `${siteUrl}/players` },
          { name: player.name, item: canonicalUrl },
        ]}
      />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}

      <Article
        title={player.name}
        excerpt={
          dp.oneLineSummary ??
          player.longBio ??
          `${player.name}(${player.nameEn}) ${tour} 프로 테니스 선수 완전 분석.`
        }
        image={player.image}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerSearchAliasSection slug={slug} />

          <div className="prose dark:prose-invert max-w-none">
            {dp.oneLineSummary && (
              <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                <strong className="text-orange-600 dark:text-orange-400">
                  {dp.oneLineSummary}
                </strong>
              </p>
            )}

            <TOC items={tocItems} />

            {/* 왜 주목받는 선수인가 */}
            <h2 id="why-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              {player.name}, 왜 주목받는 선수인가?
            </h2>
            {dp.whyNotable ? (
              <div
                className="player-content"
                dangerouslySetInnerHTML={{ __html: dp.whyNotable }}
              />
            ) : (
              <p>{player.longBio}</p>
            )}

            {/* 플레이 스타일 */}
            <h2 id="play-style" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />이 선수는 어떤 유형의
              플레이어인가?
            </h2>
            {dp.playStyle ? (
              <div
                className="player-content"
                dangerouslySetInnerHTML={{ __html: dp.playStyle }}
              />
            ) : (
              <p>
                {player.plays === "Left-handed" ? "왼손잡이" : "오른손잡이"},{" "}
                {player.backhand === "One-handed" ? "원핸드" : "투핸드"}{" "}
                백핸드의 {player.country} 출신 선수.
              </p>
            )}

            {dp.hexagonStats && dp.hexagonStats.length > 0 && (
              <PlayerHexagonStats
                playerName={player.name}
                attributes={dp.hexagonStats}
              />
            )}

            {/* 성장 스토리 */}
            <h2 id="growth-story" className="flex items-center gap-2 mt-12">
              <Star className="w-6 h-6 text-blue-500" />
              {player.name}은 어떻게 여기까지 왔을까?
            </h2>
            {dp.growthStory ? (
              <div
                className="player-content"
                dangerouslySetInnerHTML={{ __html: dp.growthStory }}
              />
            ) : (
              <p>{player.longBio}</p>
            )}

            {/* 대표 경기 */}
            <h2 id="signature-match" className="flex items-center gap-2 mt-12">
              <Zap className="w-6 h-6 text-orange-500" />이 선수를 가장 잘
              보여주는 경기는?
            </h2>
            {dp.signatureMatch ? (
              <div className="not-prose my-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-3 mb-2">
                  <Zap className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-base mb-0.5">
                      {dp.signatureMatch.title}
                    </p>
                    {dp.signatureMatch.date && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {dp.signatureMatch.date}
                      </p>
                    )}
                    <p
                      className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-0"
                      dangerouslySetInnerHTML={{
                        __html: dp.signatureMatch.description,
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <p>{player.name}의 대표 경기 정보를 준비 중입니다.</p>
            )}

            {/* 팬 매력 */}
            <h2 id="fan-appeal" className="flex items-center gap-2 mt-12">
              <Star className="w-6 h-6 text-pink-500" />
              팬들은 이 선수의 어떤 점에 끌릴까?
            </h2>
            {dp.fanAppeal ? (
              <div
                className="player-content"
                dangerouslySetInnerHTML={{ __html: dp.fanAppeal }}
              />
            ) : (
              <p>{player.name}의 팬 매력 분석을 준비 중입니다.</p>
            )}

            {/* 최근 경기력 */}
            <h2 id="recent-form" className="flex items-center gap-2 mt-12">
              <Zap className="w-6 h-6 text-green-500" />
              요즘 {player.name}의 경기력 흐름은?
            </h2>
            {dp.recentForm ? (
              <div
                className="player-content"
                dangerouslySetInnerHTML={{ __html: dp.recentForm }}
              />
            ) : (
              <p>최신 경기력 정보를 업데이트 중입니다.</p>
            )}

            {/* 한 문장 요약 */}
            <h2 id="one-liner" className="mt-12">
              {player.name}, 한 문장으로 정리하면?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-400 rounded-r-lg">
              <p className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-0 italic">
                &ldquo;{dp.oneLineSummary ?? player.longBio}&rdquo;
              </p>
            </blockquote>

            {/* 외부 참고 자료 */}
            <h2 id="references" className="flex items-center gap-2 mt-12">
              <BookOpen className="w-6 h-6 text-slate-500" />
              외부 참고 자료
            </h2>
            <ul className="not-prose list-none p-0 space-y-2 mb-8">
              <li>
                <Link
                  href={`https://en.wikipedia.org/wiki/${wikiSlug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Wikipedia — {player.nameEn}
                </Link>
              </li>
              <li>
                <Link
                  href={atpWtaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  {tour} Tour 공식 사이트
                </Link>
              </li>
              <li>
                <Link
                  href={`https://ko.wikipedia.org/wiki/${encodeURIComponent(player.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  한국어 위키백과 — {player.name}
                </Link>
              </li>
            </ul>

            {/* FAQ */}
            {faqs.length > 0 && (
              <>
                <h2 id="faq" className="mt-12">
                  자주 묻는 질문 (FAQ)
                </h2>
                <FAQ items={faqs} />
              </>
            )}
          </div>
        </div>
      </Article>
    </div>
  );
}

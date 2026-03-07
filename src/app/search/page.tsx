import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { allBlogPosts } from "@/data/blog-posts";
import { PLAYERS_DB } from "@/data/players";
import { getAbsoluteUrl } from "@/lib/site";

type SearchPageProps = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

const utilityResults = [
  {
    title: "NTRP 테스트",
    description: "실력 수준을 가늠하는 대표 테스트",
    href: "/utility/ntrp-test",
    type: "유틸리티",
  },
  {
    title: "스트링 텐션 계산기",
    description: "라켓 세팅을 위한 텐션 추천 도구",
    href: "/utility/string-tension",
    type: "유틸리티",
  },
  {
    title: "장비 추천",
    description: "플레이 스타일과 숙련도에 맞는 장비 추천",
    href: "/utility/equipment-recommendation",
    type: "유틸리티",
  },
  {
    title: "훈련 플래너",
    description: "주간 연습 계획과 루틴 설계",
    href: "/utility/training-planner",
    type: "유틸리티",
  },
];

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const resolvedSearchParams = (await searchParams) || {};
  const query = resolvedSearchParams.q?.trim() || "";

  return {
    title: query ? `"${query}" 검색 결과` : "사이트 검색",
    description: query
      ? `TennisFriends에서 "${query}" 관련 블로그, 선수 정보, 테니스 도구를 찾습니다.`
      : "TennisFriends의 블로그, 선수 정보, 테니스 유틸리티를 검색합니다.",
    alternates: {
      canonical: getAbsoluteUrl("/search"),
    },
    robots: {
      index: !query,
      follow: true,
      googleBot: {
        index: !query,
        follow: true,
      },
    },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = (await searchParams) || {};
  const query = resolvedSearchParams.q?.trim() || "";
  const normalizedQuery = query.toLowerCase();

  const blogResults = query
    ? allBlogPosts
        .filter((post) =>
          [post.title, post.excerpt, post.category, ...(post.tags || [])]
            .filter(Boolean)
            .some((field) => field.toLowerCase().includes(normalizedQuery))
        )
        .slice(0, 8)
        .map((post) => ({
          title: post.title,
          description: post.excerpt,
          href: `/blog/${post.slug}`,
          type: "블로그",
        }))
    : [];

  const playerResults = query
    ? Object.entries(PLAYERS_DB)
        .filter(([slug, player]) =>
          [slug, player.name, player.nameEn, player.country]
            .filter(Boolean)
            .some((field) => field.toLowerCase().includes(normalizedQuery))
        )
        .slice(0, 8)
        .map(([slug, player]) => ({
          title: `${player.name} (${player.nameEn})`,
          description:
            player.detailedProfile?.oneLineSummary ||
            `${player.country} 출신 프로 테니스 선수 프로필입니다.`,
          href: `/players/${slug}`,
          type: "선수",
        }))
    : [];

  const matchedUtilities = query
    ? utilityResults.filter((item) =>
        [item.title, item.description].some((field) =>
          field.toLowerCase().includes(normalizedQuery)
        )
      )
    : utilityResults;

  const results = [...blogResults, ...playerResults, ...matchedUtilities];

  const itemListSchema =
    results.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: query ? `"${query}" 검색 결과` : "TennisFriends 검색",
          itemListElement: results.map((result, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: getAbsoluteUrl(result.href),
            name: result.title,
          })),
        }
      : null;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      {itemListSchema ? <JsonLd data={itemListSchema} id="search-results-schema" /> : null}

      <section className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-gray-900">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
          Site Search
        </p>
        <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
          {query ? `"${query}" 검색 결과` : "테니스 콘텐츠 검색"}
        </h1>
        <p className="max-w-2xl text-sm text-gray-600 dark:text-gray-300">
          블로그, 선수 프로필, 테니스 도구를 한 번에 찾을 수 있는 검색 페이지입니다.
          Google, Naver, Daum에서 들어온 사용자와 AI 에이전트가 사이트 구조를 더 쉽게
          이해할 수 있도록 설계했습니다.
        </p>

        <form action="/search" method="get" className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="예: 서브, 조코비치, 스트링 텐션"
            className="h-12 flex-1 rounded-xl border border-gray-200 bg-white px-4 text-base text-gray-900 outline-none transition focus:border-emerald-500 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
          />
          <button
            type="submit"
            className="h-12 rounded-xl bg-emerald-500 px-5 font-semibold text-white transition hover:bg-emerald-600"
          >
            검색
          </button>
        </form>
      </section>

      <section className="grid gap-4">
        {results.length > 0 ? (
          results.map((result) => (
            <Link
              key={`${result.type}-${result.href}`}
              href={result.href}
              className="rounded-2xl border border-black/5 bg-white p-5 transition hover:border-emerald-400 hover:shadow-sm dark:border-white/10 dark:bg-gray-900"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                {result.type}
              </p>
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {result.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{result.description}</p>
            </Link>
          ))
        ) : query ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            검색 결과가 없습니다. 선수 이름, 샷 이름, 장비 키워드처럼 더 구체적인 검색어로 다시 시도해 보세요.
          </div>
        ) : null}
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { allBlogPosts } from "@/data/blog-posts";
import { PLAYERS_DB } from "@/data/players";
import { getPublishedBlogPosts } from "@/lib/blog-publish";
import { isIndexableBlogSlug } from "@/lib/blog-quality";

const utilityResults = [
  {
    title: "NTRP 테스트",
    description: "현재 실력 수준을 빠르게 확인하는 테니스 레벨 테스트",
    href: "/utility/ntrp-test",
    type: "유틸리티",
  },
  {
    title: "스트링 텐션 계산기",
    description: "라켓 세팅에 맞는 스트링 텐션 추천 도구",
    href: "/utility/string-tension",
    type: "유틸리티",
  },
  {
    title: "장비 추천",
    description: "플레이 스타일과 숙련도에 맞는 테니스 장비 추천",
    href: "/utility/equipment-recommendation",
    type: "유틸리티",
  },
  {
    title: "훈련 플래너",
    description: "주간 연습 계획과 루틴을 설계하는 도구",
    href: "/utility/training-planner",
    type: "유틸리티",
  },
];

export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim() || "";
  const normalizedQuery = query.toLowerCase();

  const results = useMemo(() => {
    const publishedBlogPosts = getPublishedBlogPosts(allBlogPosts).filter(
      (post) => isIndexableBlogSlug(post.slug),
    );

    const blogResults = query
      ? publishedBlogPosts
          .filter((post) =>
            [post.title, post.excerpt, post.category, ...(post.tags || [])]
              .filter(Boolean)
              .some((field) => field.toLowerCase().includes(normalizedQuery)),
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
              .some((field) => field.toLowerCase().includes(normalizedQuery)),
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
            field.toLowerCase().includes(normalizedQuery),
          ),
        )
      : utilityResults;

    return [...blogResults, ...playerResults, ...matchedUtilities];
  }, [normalizedQuery, query]);

  return (
    <>
      <section className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-gray-900">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
          Site Search
        </p>
        <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
          {query ? `"${query}" 검색 결과` : "테니스 콘텐츠 검색"}
        </h1>
        <p className="max-w-2xl text-sm text-gray-600 dark:text-gray-300">
          블로그, 선수 프로필, 테니스 도구를 한 번에 찾을 수 있습니다.
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
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {result.description}
              </p>
            </Link>
          ))
        ) : query ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            검색 결과가 없습니다. 선수 이름, 기술명, 장비 키워드처럼 더 구체적인 검색어로 다시 시도해 보세요.
          </div>
        ) : null}
      </section>
    </>
  );
}

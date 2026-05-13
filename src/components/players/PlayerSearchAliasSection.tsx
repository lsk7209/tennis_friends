import { getPlayerSearchSeo } from "@/lib/player-search-seo";

type PlayerSearchAliasSectionProps = {
  slug: string;
};

export default function PlayerSearchAliasSection({
  slug,
}: PlayerSearchAliasSectionProps) {
  const searchSeo = getPlayerSearchSeo(slug);
  if (!searchSeo) return null;

  return (
    <section className="mb-6 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-gray-800 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-gray-100">
      <h2 className="mb-2 text-lg font-bold">검색 표기 안내</h2>
      <p className="text-sm leading-6">
        이 페이지는 {searchSeo.aliases.join(", ")} 검색어로 찾는 선수를 같은
        프로필로 정리합니다. 핵심 확인 포인트는 {searchSeo.focus}입니다.
      </p>
    </section>
  );
}

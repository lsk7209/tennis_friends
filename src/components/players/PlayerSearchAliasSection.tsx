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
    <section className="mb-6 rounded-lg border border-emerald-100 bg-emerald-50 p-5 text-slate-800 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-slate-100">
      <h2 className="mb-2 text-lg font-bold tracking-normal">
        검색어 기준 핵심 정보
      </h2>
      <p className="text-sm leading-6">
        이 페이지는 {searchSeo.aliases.join(", ")} 검색어로 찾는 사용자를
        위해 랭킹, 전적, 플레이스타일을 한 페이지에서 확인할 수 있게
        정리했습니다. 핵심 확인 포인트는 {searchSeo.focus}입니다.
      </p>
    </section>
  );
}

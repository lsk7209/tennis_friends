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
        선수 이름과 프로필 안내
      </h2>
      <p className="text-sm leading-6">
        {searchSeo.aliases.join(", ")} 등의 이름 표기로 찾을 수 있는
        선수입니다. 이 프로필의 주요 내용은 {searchSeo.focus}입니다.
      </p>
    </section>
  );
}

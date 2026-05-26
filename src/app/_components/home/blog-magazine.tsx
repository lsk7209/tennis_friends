import Link from "next/link";
import { homeBlogPosts } from "@/data/home-blog-posts";

export function BlogMagazine() {
  const [featured, ...rest] = homeBlogPosts.slice(0, 5);

  return (
    <section className="bg-court-bg py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* 헤더 */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-clay mb-3">
              Latest Reads
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-court-ink leading-tight tracking-[-0.035em]">
              테니스 인사이트
            </h2>
          </div>
          <Link
            href="/blog"
            prefetch={false}
            className="text-[13px] font-bold text-court-ink/50 hover:text-court-ink transition-colors hidden md:block"
          >
            전체 보기 →
          </Link>
        </div>

        {/* 매거진 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-court-ink/10">
          {/* Featured — 2/3 width */}
          {featured && (
            <Link
              href={featured.href}
              prefetch={false}
              className="md:col-span-2 group block bg-court-bg p-8 hover:bg-white transition-colors"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-clay">
                {featured.category}
              </span>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold text-court-ink leading-tight group-hover:text-accent-clay transition-colors line-clamp-3">
                {featured.title}
              </h3>
              <p className="mt-4 text-court-ink/60 text-sm leading-relaxed line-clamp-3">
                {featured.description}
              </p>
              <div className="mt-6 flex items-center gap-3 text-[11px] text-court-ink/40">
                <span>{featured.readTime}</span>
                <span>·</span>
                <span>{featured.date}</span>
              </div>
            </Link>
          )}

          {/* 4 small cards */}
          <div className="grid grid-rows-4 gap-px bg-court-ink/10">
            {rest.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                prefetch={false}
                className="group block bg-court-bg p-5 hover:bg-white transition-colors"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent-clay">
                  {post.category}
                </span>
                <h4 className="mt-1.5 text-sm font-bold text-court-ink leading-tight group-hover:text-accent-clay transition-colors line-clamp-2">
                  {post.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>

        {/* 모바일 전체보기 */}
        <div className="mt-6 md:hidden">
          <Link
            href="/blog"
            prefetch={false}
            className="text-[13px] font-bold text-court-ink/50 hover:text-court-ink transition-colors"
          >
            전체 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}

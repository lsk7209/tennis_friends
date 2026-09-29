import Link from "next/link";
import { FileText, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getBlogIndexPage, getBlogTopicNavigation, getBlogTopicPage, getBlogTopicPageHref } from "@/lib/blog-index";
import { getBlogPageHref, getPaginationWindow } from "@/lib/blog-publish";

export default function BlogIndexPageContent({ page, topicId }: { page: number; topicId?: string }) {
  const { posts, currentPage, totalPages, totalPosts, outOfRange } =
    topicId ? getBlogTopicPage(topicId, page) : getBlogIndexPage(page);
  if (outOfRange) return null;
  const topics = getBlogTopicNavigation();
  const currentTopic = topics.find((topic) => topic.id === topicId);
  const pageHref = (targetPage: number) => topicId
    ? getBlogTopicPageHref(topicId, targetPage)
    : getBlogPageHref(targetPage);
  const visiblePageNumbers = getPaginationWindow(currentPage, totalPages).map((href) =>
    href === "/blog" ? 1 : Number(href.split("/").at(-1))
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
            <FileText className="h-4 w-4" aria-hidden="true" />
            테니스 블로그
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-3xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-4xl">
                {currentTopic ? `${currentTopic.label} 글 모음` : "실전에서 바로 쓰는 테니스 가이드"}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
                {currentTopic
                  ? `${currentTopic.label}에 해당하는 공개 글을 최신 순서로 모았습니다.`
                  : "레슨, 장비, 전술, 멘탈, 부상 예방까지 동호인이 경기 전후에 확인해야 할 내용을 주제별로 정리했습니다."}
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <div><dt className="text-xs font-medium text-slate-500 dark:text-slate-400">{currentTopic ? "주제 글" : "공개 글"}</dt><dd className="mt-1 text-2xl font-bold">{totalPosts}</dd></div>
              <div><dt className="text-xs font-medium text-slate-500 dark:text-slate-400">현재 페이지</dt><dd className="mt-1 text-2xl font-bold">{currentPage}/{totalPages}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <form action="/search" method="get" className="mb-8 flex gap-2">
          <label htmlFor="blog-search" className="sr-only">테니스 글 검색</label>
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <Input id="blog-search" name="q" type="search" placeholder="서브, 백핸드, 스트링, 부상 예방처럼 검색하세요" className="h-12 bg-white pl-10 dark:bg-slate-900" />
          </div>
          <Button type="submit" className="h-12">검색</Button>
        </form>

        {topics.length > 0 && (
          <nav aria-labelledby="blog-topics-heading" className="mb-10">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="blog-topics-heading" className="text-xl font-bold">목적별로 읽기</h2>
              <Link href="/blog" className="text-sm font-medium text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300">전체 글 보기</Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <div key={topic.id} className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="font-semibold"><Link href={getBlogTopicPageHref(topic.id, 1)} aria-current={topic.id === topicId && currentPage === 1 ? "page" : undefined} className="text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300">{topic.label} 전체 보기</Link> <span className="text-sm font-normal text-slate-500 dark:text-slate-400">{topic.count}개 글</span></h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {topic.examples.map((post) => (
                      <li key={post.slug}><Link href={`/blog/${post.slug}`} className="text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300">{post.title}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        )}

        <h2 id="blog-posts" className="mb-4 text-xl font-bold">{currentTopic ? `${currentTopic.label} 글 목록` : "전체 글 목록"}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} className="h-full rounded-lg border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <CardContent className="flex h-full flex-col p-5">
                <div className="mb-4 flex flex-wrap gap-2"><Badge className={post.badgeColor}>{post.badge}</Badge><Badge className={post.categoryColor}>{post.category}</Badge></div>
                <h3 className="text-lg font-bold leading-snug"><Link href={`/blog/${post.slug}`} className="transition hover:text-emerald-700 dark:hover:text-emerald-300">{post.title}</Link></h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400"><span>{post.date}</span><span>{post.readTime}</span></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label={currentTopic ? `${currentTopic.label} 페이지` : "블로그 페이지"}>
            {currentPage > 1 && <Button asChild variant="outline" size="sm" className="text-slate-900 dark:text-white"><Link href={pageHref(currentPage - 1)}>이전</Link></Button>}
            {visiblePageNumbers[0] !== 1 && <Button asChild variant="outline" size="sm" className="text-slate-900 dark:text-white"><Link href={pageHref(1)}>1</Link></Button>}
            {currentPage > 4 && <span className="px-1 text-sm text-slate-400">…</span>}
            {visiblePageNumbers.map((pageNumber) => {
              return <Button key={pageNumber} asChild variant={pageNumber === currentPage ? "default" : "outline"} size="sm" className={pageNumber === currentPage ? undefined : "text-slate-900 dark:text-white"}><Link href={pageHref(pageNumber)} aria-current={pageNumber === currentPage ? "page" : undefined}>{pageNumber}</Link></Button>;
            })}
            {currentPage + 2 < totalPages - 1 && <span className="px-1 text-sm text-slate-400">…</span>}
            {!visiblePageNumbers.includes(totalPages) && <Button asChild variant="outline" size="sm" className="text-slate-900 dark:text-white"><Link href={pageHref(totalPages)}>{totalPages}</Link></Button>}
            {currentPage < totalPages && <Button asChild variant="outline" size="sm" className="text-slate-900 dark:text-white"><Link href={pageHref(currentPage + 1)}>다음</Link></Button>}
          </nav>
        )}
      </section>
    </div>
  );
}

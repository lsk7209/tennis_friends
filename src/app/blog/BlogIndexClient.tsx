"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { POSTS_PER_PAGE } from "@/lib/constants";

export type BlogIndexPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  badge: string;
  badgeColor: string;
  categoryColor: string;
};

type CategoryGroup = {
  id: string;
  label: string;
  categories: string[];
};

type BlogIndexClientProps = {
  posts: BlogIndexPost[];
  categoryGroups: CategoryGroup[];
};

function pageWindow(currentPage: number, totalPages: number) {
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

export default function BlogIndexClient({
  posts,
  categoryGroups,
}: BlogIndexClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.category.toLowerCase().includes(normalizedQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      if (!matchesSearch) return false;
      if (!selectedCategory) return true;

      const group = categoryGroups.find((item) => item.id === selectedCategory);
      return group
        ? group.categories.includes(post.category)
        : post.category === selectedCategory;
    });
  }, [categoryGroups, normalizedQuery, posts, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );
  const visiblePages = pageWindow(currentPage, totalPages);

  function handlePageChange(page: number) {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectCategory(category: string | null) {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  function clearFilters() {
    setSearchQuery("");
    setSelectedCategory(null);
    setCurrentPage(1);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <div className="mb-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="서브, 백핸드, 스트링, 부상 예방처럼 검색하세요"
            className="h-12 rounded-md border-slate-300 bg-white pl-10 pr-10 text-base dark:border-slate-700 dark:bg-slate-900"
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              setCurrentPage(1);
            }}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
              aria-label="검색어 지우기"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          )}
        </div>

        <p className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          {filteredPosts.length}개 글
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => selectCategory(null)}
          className="rounded-md"
        >
          전체
        </Button>
        {categoryGroups.map((group) => (
          <Button
            key={group.id}
            variant={selectedCategory === group.id ? "default" : "outline"}
            size="sm"
            onClick={() => selectCategory(group.id)}
            className="rounded-md"
          >
            {group.label}
          </Button>
        ))}
      </div>

      {currentPosts.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold">검색 결과가 없습니다</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            다른 키워드로 검색하거나 필터를 초기화해보세요.
          </p>
          <Button
            variant="outline"
            onClick={clearFilters}
            className="mt-5 rounded-md"
          >
            초기화
          </Button>
        </div>
      ) : (
        <>
          <h2 className="sr-only">블로그 글 목록</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((post) => (
              <Card
                key={post.slug}
                className="h-full rounded-lg border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <CardContent className="flex h-full flex-col p-5">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge className={post.badgeColor}>{post.badge}</Badge>
                    <Badge className={post.categoryColor}>{post.category}</Badge>
                  </div>

                  <h3 className="text-lg font-bold leading-snug text-slate-950 dark:text-white">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-emerald-700 dark:hover:text-emerald-300"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {totalPages > 1 && (
        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          aria-label="블로그 페이지"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="이전 페이지"
            className="rounded-md"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            이전
          </Button>

          {visiblePages[0] > 1 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(1)}
              className="rounded-md"
            >
              1
            </Button>
          )}

          {visiblePages[0] > 2 && (
            <span className="px-1 text-sm text-slate-400">...</span>
          )}

          {visiblePages.map((page) => (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className="min-w-9 rounded-md"
            >
              {page}
            </Button>
          ))}

          {visiblePages.at(-1)! < totalPages - 1 && (
            <span className="px-1 text-sm text-slate-400">...</span>
          )}

          {visiblePages.at(-1)! < totalPages && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(totalPages)}
              className="rounded-md"
            >
              {totalPages}
            </Button>
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="다음 페이지"
            className="rounded-md"
          >
            다음
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </nav>
      )}
    </section>
  );
}

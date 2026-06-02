import type { Metadata } from "next";
import { FileText } from "lucide-react";
import BlogIndexClient, { type BlogIndexPost } from "./BlogIndexClient";
import { allBlogPosts } from "@/data/blog-posts";
import {
  BADGE_COLORS,
  BADGE_LABELS,
  CATEGORY_COLORS,
} from "@/lib/constants";
import { CATEGORY_GROUPS } from "@/lib/blog-utils";
import {
  getBlogPublishDate,
  getPublishedBlogPosts,
} from "@/lib/blog-publish";
import { isIndexableBlogSlug } from "@/lib/blog-quality";
import { getSiteUrl } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "테니스 블로그 | TennisFriends",
  description:
    "테니스 입문, 레슨, 장비, 전술, 부상 예방, 동호회 경기 준비를 실전 기준으로 정리한 TennisFriends 블로그입니다.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "테니스 블로그 | TennisFriends",
    description:
      "테니스 실력 향상과 경기 준비에 바로 쓰는 가이드, 체크리스트, 장비·전술 콘텐츠를 모았습니다.",
    type: "website",
    url: `${getSiteUrl()}/blog`,
  },
};

function buildBlogIndexPosts(): BlogIndexPost[] {
  return sortPublishedPosts().map((post, index) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags ?? [],
    date: getBlogPublishDate(post).toISOString().slice(0, 10),
    readTime: post.readTime || `${8 + (index % 5) * 2}분`,
    badge: BADGE_LABELS[index % BADGE_LABELS.length],
    badgeColor: BADGE_COLORS[index % BADGE_COLORS.length],
    categoryColor: CATEGORY_COLORS[index % CATEGORY_COLORS.length],
  }));
}

function sortPublishedPosts() {
  return getPublishedBlogPosts(allBlogPosts)
    .filter((post) => isIndexableBlogSlug(post.slug))
    .sort(
      (a, b) =>
        getBlogPublishDate(b).getTime() - getBlogPublishDate(a).getTime(),
    );
}

export default function BlogPage() {
  const posts = buildBlogIndexPosts();
  const categoryGroups = Object.values(CATEGORY_GROUPS).map((group) => ({
    id: group.id,
    label: group.label,
    categories: group.categories,
  }));

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
            <FileText className="h-4 w-4" aria-hidden="true" />
            테니스 블로그
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-3xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-4xl">
                실전에서 바로 쓰는 테니스 가이드
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
                레슨, 장비, 전술, 멘탈, 부상 예방까지 동호인이 경기 전후에
                확인해야 할 내용을 주제별로 정리했습니다.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <div>
                <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  공개 글
                </dt>
                <dd className="mt-1 text-2xl font-bold">{posts.length}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  주제 그룹
                </dt>
                <dd className="mt-1 text-2xl font-bold">
                  {categoryGroups.length}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <BlogIndexClient posts={posts} categoryGroups={categoryGroups} />
    </main>
  );
}

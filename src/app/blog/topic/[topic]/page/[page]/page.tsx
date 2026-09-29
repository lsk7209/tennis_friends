import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndexPageContent from "@/app/blog/BlogIndexPageContent";
import {
  getBlogTopicNavigation,
  getBlogTopicPageCapacity,
  getBlogTopicPageCount,
  getBlogTopicPageHref,
} from "@/lib/blog-index";

type TopicPageRouteProps = { params: Promise<{ topic: string; page: string }> };

export const dynamicParams = false;
export const revalidate = 60;

export function generateStaticParams() {
  return getBlogTopicNavigation().flatMap(({ id }) =>
    Array.from({ length: Math.max(0, getBlogTopicPageCapacity(id) - 1) }, (_, index) => ({
      topic: id,
      page: String(index + 2),
    })),
  );
}

async function getValidTopicPage(params: TopicPageRouteProps["params"]) {
  const { topic, page: rawPage } = await params;
  const page = Number(rawPage);
  const selected = getBlogTopicNavigation().find(({ id }) => id === topic);
  if (!selected || !Number.isInteger(page) || page < 2 || page > getBlogTopicPageCount(topic)) notFound();
  return { topic, page, selected };
}

export async function generateMetadata({ params }: TopicPageRouteProps): Promise<Metadata> {
  const { topic, page, selected } = await getValidTopicPage(params);
  return {
    title: `${selected.label} 글 모음 ${page}페이지 | 테니스 블로그`,
    description: `${selected.label}에 해당하는 공개 테니스 글 ${page}페이지입니다.`,
    alternates: { canonical: getBlogTopicPageHref(topic, page) },
    robots: { index: false, follow: true },
  };
}

export default async function BlogTopicPaginatedPage({ params }: TopicPageRouteProps) {
  const { topic, page } = await getValidTopicPage(params);
  return <BlogIndexPageContent page={page} topicId={topic} />;
}

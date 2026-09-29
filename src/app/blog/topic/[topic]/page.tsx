import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndexPageContent from "@/app/blog/BlogIndexPageContent";
import { getBlogTopicNavigation, getBlogTopicPageHref } from "@/lib/blog-index";

type TopicRouteProps = { params: Promise<{ topic: string }> };

export const dynamicParams = false;
export const revalidate = 60;

export function generateStaticParams() {
  return getBlogTopicNavigation().map(({ id }) => ({ topic: id }));
}

export async function generateMetadata({ params }: TopicRouteProps): Promise<Metadata> {
  const { topic } = await params;
  const selected = getBlogTopicNavigation().find(({ id }) => id === topic);
  if (!selected) notFound();
  return {
    title: `${selected.label} 글 모음 | 테니스 블로그`,
    description: `${selected.label}에 해당하는 공개 테니스 글 ${selected.count}개를 최신 순서로 확인하세요.`,
    alternates: { canonical: getBlogTopicPageHref(topic, 1) },
    robots: { index: false, follow: true },
  };
}

export default async function BlogTopicPage({ params }: TopicRouteProps) {
  const { topic } = await params;
  if (!getBlogTopicNavigation().some(({ id }) => id === topic)) notFound();
  return <BlogIndexPageContent page={1} topicId={topic} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndexPageContent from "../../BlogIndexPageContent";
import { getBlogIndexPageCount } from "@/lib/blog-index";
import { getAbsoluteUrl } from "@/lib/site";

type BlogIndexRouteProps = {
  params: Promise<{ page: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from(
    { length: Math.max(0, getBlogIndexPageCount() - 1) },
    (_, index) => ({ page: String(index + 2) }),
  );
}

export async function generateMetadata({
  params,
}: BlogIndexRouteProps): Promise<Metadata> {
  const page = Number((await params).page);
  const canonical = `/blog/page/${page}`;

  return {
    title: `테니스 블로그 ${page}페이지`,
    description: `테니스 레슨, 장비, 전술, 부상 예방 가이드를 모은 TennisFriends 블로그 ${page}페이지입니다.`,
    alternates: { canonical },
    openGraph: {
      title: `테니스 블로그 ${page}페이지 | TennisFriends`,
      description: "동호인을 위한 테니스 실전 가이드와 도구 활용법을 확인하세요.",
      type: "website",
      url: getAbsoluteUrl(canonical),
    },
  };
}

export default async function PaginatedBlogPage({ params }: BlogIndexRouteProps) {
  const page = Number((await params).page);
  const totalPages = getBlogIndexPageCount();

  if (!Number.isInteger(page) || page < 2 || page > totalPages) notFound();

  return <BlogIndexPageContent page={page} />;
}

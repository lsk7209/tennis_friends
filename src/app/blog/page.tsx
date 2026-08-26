import type { Metadata } from "next";
import BlogIndexPageContent from "./BlogIndexPageContent";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "테니스 블로그",
  description:
    "테니스 입문, 레슨, 장비, 전술, 부상 예방, 동호회 경기 준비를 실전 기준으로 정리한 TennisFriends 블로그입니다.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "테니스 블로그 | TennisFriends",
    description:
      "테니스 실력 향상과 경기 준비에 바로 쓰는 가이드, 체크리스트, 장비·전술 콘텐츠를 모았습니다.",
    type: "website",
    url: `${getSiteUrl()}/blog`,
  },
};

export default function BlogPage() {
  return <BlogIndexPageContent page={1} />;
}

import { Suspense } from "react";
import type { Metadata } from "next";
import SearchClient from "@/app/search/SearchClient";
import { getAbsoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "사이트 검색",
  description: "TennisFriends의 블로그, 선수 프로필, 테니스 도구를 검색합니다.",
  alternates: {
    canonical: getAbsoluteUrl("/search"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function SearchPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <Suspense fallback={null}>
        <SearchClient />
      </Suspense>
    </main>
  );
}

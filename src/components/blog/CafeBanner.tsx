"use client";

import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import NaverCafeLink from "@/components/NaverCafeLink";

const EXCLUDED_PATHS = new Set(["/admin", "/privacy", "/terms"]);

function isExcludedPath(pathname: string) {
  const normalizedPathname = pathname.replace(/\/+$/, "") || "/";

  return Array.from(EXCLUDED_PATHS).some(
    (excludedPath) =>
      normalizedPathname === excludedPath ||
      normalizedPathname.endsWith(excludedPath),
  );
}

interface CafeBannerProps {
  ctaLocation?: string;
}

export default function CafeBanner({
  ctaLocation = "sitewide_bottom",
}: CafeBannerProps) {
  const pathname = usePathname();

  // Render during static generation so search visitors and no-JS users receive
  // the same contextual next step. Route-specific exclusions remain deterministic.
  if (isExcludedPath(pathname)) return null;

  return (
    <section
      aria-labelledby="naver-cafe-cta-heading"
      className="not-prose border-y border-accent-volt/20 bg-court-ink px-6 py-12 text-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-volt">
            TennisFriends on Naver Cafe
          </p>
          <h2
            id="naver-cafe-cta-heading"
            className="mt-2 text-2xl font-bold tracking-tight md:text-3xl"
          >
            테니스 이야기를 카페에서 이어가세요
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
            네이버 카페 테니스프렌즈로 이동해 카페 게시판을 확인할 수
            있습니다.
          </p>
        </div>
        <NaverCafeLink
          ctaLocation={ctaLocation}
          linkText="네이버 카페 방문하기"
          aria-label="네이버 카페 테니스프렌즈 새 창에서 열기"
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 bg-accent-volt px-6 text-sm font-bold text-court-ink transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-volt"
        >
          네이버 카페 방문하기
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </NaverCafeLink>
      </div>
    </section>
  );
}

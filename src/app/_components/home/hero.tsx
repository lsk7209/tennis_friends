"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import NaverCafeLink from "@/components/NaverCafeLink";
import {
  revealVariants,
  staggerVariants,
} from "@/components/motion-presets";

export function Hero() {
  return (
    <section className="relative min-h-[640px] md:min-h-[780px] overflow-hidden bg-court-ink flex items-center">
      {/* 코트 라인 그래픽 배경 */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, transparent 49.5%, #fff 49.5%, #fff 50.5%, transparent 50.5%),
            linear-gradient(to right, transparent 49.5%, #fff 49.5%, #fff 50.5%, transparent 50.5%)
          `,
          backgroundSize: "120px 120px",
        }}
      />
      {/* 볼트 그라디언트 악센트 */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-accent-volt/8 to-transparent pointer-events-none" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-12 py-20 md:py-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerVariants}
          className="max-w-4xl"
        >
          {/* 레이블 */}
          <motion.p
            variants={revealVariants}
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-volt mb-6"
          >
            TennisFriends Community Guide
          </motion.p>

          {/* 디스플레이 헤드라인 — LCP 요소, 즉시 렌더링 */}
          <h1 className="font-display-latin text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[88px] leading-[0.88] tracking-[-0.045em] text-white mb-8">
            읽고 점검하고,
            <br />
            카페에서 <em className="not-italic text-accent-volt">이어가세요</em>
          </h1>

          {/* 서브 카피 */}
          <motion.p
            variants={revealVariants}
            className="text-base md:text-lg text-white/60 max-w-xl mb-10 leading-relaxed"
          >
            테니스 가이드와 도구로 필요한 내용을 먼저 확인하고,
            <br />
            네이버 카페 테니스프렌즈에서 다음 이야기를 확인하세요.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={revealVariants}
            className="flex items-center gap-4 flex-wrap"
          >
            <Button asChild variant="volt" size="lg">
              <NaverCafeLink
                ctaLocation="home_hero"
                linkText="네이버 카페 방문하기"
                aria-label="네이버 카페 테니스프렌즈 새 창에서 열기"
              >
                네이버 카페 방문하기 →
              </NaverCafeLink>
            </Button>
            <Link href="/utility/ntrp-test" prefetch={false}>
              <Button variant="outline" size="lg">
                NTRP 테스트 시작
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

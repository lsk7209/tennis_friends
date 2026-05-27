"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  revealVariants,
  staggerVariants,
  useNumberCounter,
} from "@/components/motion-presets";

export function Hero() {
  const diagnosed = useNumberCounter(14820);

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
            Tennis Intelligence Platform
          </motion.p>

          {/* 디스플레이 헤드라인 — LCP 요소, 즉시 렌더링 */}
          <h1 className="font-display-latin text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[88px] leading-[0.88] tracking-[-0.045em] text-white mb-8">
            데이터로
            <br />
            COURT를 <em className="not-italic text-accent-volt">OWN</em>
          </h1>

          {/* 서브 카피 */}
          <motion.p
            variants={revealVariants}
            className="text-base md:text-lg text-white/60 max-w-xl mb-10 leading-relaxed"
          >
            NTRP 진단부터 스트링 텐션 계산, 부상 예방까지.
            <br />
            과학적 데이터로 당신의 테니스를 한 단계 끌어올리세요.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={revealVariants}
            className="flex items-center gap-4 flex-wrap"
          >
            <Link href="/utility/ntrp-test" prefetch={false}>
              <Button variant="volt" size="lg">
                NTRP 테스트 시작 →
              </Button>
            </Link>
            <Link href="/utility" prefetch={false}>
              <Button variant="outline" size="lg">
                전체 도구 보기
              </Button>
            </Link>
          </motion.div>

          {/* 카운터 */}
          <motion.div
            variants={revealVariants}
            className="mt-14 flex items-baseline gap-2"
          >
            <span className="font-display-latin text-5xl font-bold text-accent-volt tabular-nums">
              {diagnosed.toLocaleString()}
            </span>
            <span className="text-white/50 text-sm">명이 NTRP 진단 완료</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

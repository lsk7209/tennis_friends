"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ToolCard,
  ToolCardDescription,
  ToolCardLabel,
  ToolCardTitle,
} from "@/components/ui/tool-card";
import { staggerVariants, hoverLift } from "@/components/motion-presets";

const TOOLS = [
  {
    variant: "featured" as const,
    label: "실력 진단",
    title: "NTRP\n테스트",
    description:
      "10개 질문으로 나의 테니스 레벨을 객관적으로 측정합니다. 1.0~7.0 국제 표준 기준.",
    href: "/utility/ntrp-test",
    cta: "테스트 시작 →",
  },
  {
    variant: "standard" as const,
    label: "장비 설정",
    title: "스트링 텐션\n계산기",
    description:
      "라켓·플레이 스타일·선호 타구감을 입력하면 최적 텐션 범위를 추천합니다.",
    href: "/utility/string-tension",
    cta: "계산하기 →",
  },
  {
    variant: "standard" as const,
    label: "부상 예방",
    title: "부상 리스크\n예측",
    description:
      "현재 훈련 패턴과 신체 상태를 분석해 테니스 엘보·무릎 부상 위험도를 진단합니다.",
    href: "/utility/injury-risk",
    cta: "진단하기 →",
  },
];

export function ToolsMosaic() {
  return (
    <section className="bg-court-ink-2 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* 섹션 헤더 */}
        <div className="mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-volt mb-3">
            Smart Tools
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-[-0.035em]">
            데이터 기반 테니스 도구
          </h2>
        </div>

        {/* 카드 그리드 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5"
        >
          {TOOLS.map((tool) => (
            <motion.div key={tool.href} {...hoverLift}>
              <Link href={tool.href} prefetch={false} className="block h-full">
                <ToolCard variant={tool.variant} className="h-full">
                  <div>
                    <ToolCardLabel>{tool.label}</ToolCardLabel>
                    <ToolCardTitle style={{ whiteSpace: "pre-line" }}>
                      {tool.title}
                    </ToolCardTitle>
                    <ToolCardDescription className="mt-3">
                      {tool.description}
                    </ToolCardDescription>
                  </div>
                  <div className="mt-8">
                    <Button
                      variant={
                        tool.variant === "featured" ? "ghost" : "outline"
                      }
                      size="sm"
                      className={
                        tool.variant === "featured"
                          ? "text-court-ink hover:text-court-ink/70 px-0"
                          : undefined
                      }
                    >
                      {tool.cta}
                    </Button>
                  </div>
                </ToolCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* 전체 도구 링크 */}
        <div className="mt-8 flex justify-end">
          <Link href="/utility" prefetch={false}>
            <Button variant="ghost" size="sm">
              전체 63개 도구 보기 →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

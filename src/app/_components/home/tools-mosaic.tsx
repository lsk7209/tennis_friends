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
    label: "실력 자가점검",
    title: "NTRP\n테스트",
    description:
      "15개 질문 답변을 합산해 NTRP 기준의 참고 구간을 보여줍니다. 공식 등급은 아닙니다.",
    href: "/utility/ntrp-test",
    cta: "테스트 시작 →",
  },
  {
    variant: "standard" as const,
    label: "장비 설정",
    title: "스트링 텐션\n계산기",
    description:
      "라켓·스트링·플레이 스타일을 입력하면 조건에 따른 참고 텐션 범위를 보여줍니다.",
    href: "/utility/string-tension",
    cta: "계산하기 →",
  },
  {
    variant: "standard" as const,
    label: "부상 예방",
    title: "부상 예방\n참고 점검",
    description:
      "운동 빈도·준비운동·이전 부상 등 입력 항목을 점검하고 일반 예방 정보를 보여줍니다. 의학적 진단이 아닙니다.",
    href: "/utility/injury-risk",
    cta: "점검하기 →",
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
            연습을 돕는 테니스 도구
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
                    <span
                      className={
                        tool.variant === "featured"
                          ? "inline-flex min-h-10 items-center text-sm font-semibold text-court-ink"
                          : "inline-flex min-h-10 items-center rounded-lg border border-white/20 px-4 text-sm font-semibold text-white"
                      }
                    >
                      {tool.cta}
                    </span>
                  </div>
                </ToolCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* 전체 도구 링크 */}
        <div className="mt-8 flex justify-end">
          <Button asChild variant="ghost-inverse" size="sm"><Link href="/utility" prefetch={false}>
              전체 66개 도구 보기 →
            </Link></Button>
        </div>
      </div>
    </section>
  );
}

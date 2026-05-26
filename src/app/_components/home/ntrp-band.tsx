import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NtrpBand() {
  return (
    <section className="bg-court-ink-3 py-20 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-volt mb-3">
            Free Test
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-[-0.035em]">
            당신의 NTRP는?
          </h2>
          <p className="text-white/50 mt-3 max-w-md text-sm leading-relaxed">
            10개 질문, 5분이면 충분합니다. 국제 표준 NTRP 등급으로 내 실력을
            객관적으로 확인하세요.
          </p>
        </div>
        <Link href="/utility/ntrp-test" prefetch={false} className="flex-none">
          <Button variant="volt" size="lg">
            지금 무료로 테스트하기 →
          </Button>
        </Link>
      </div>
    </section>
  );
}

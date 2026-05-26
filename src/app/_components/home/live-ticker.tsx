"use client";

const TICKER_ITEMS = [
  "NTRP 실력 테스트 · 무료 진단",
  "스트링 텐션 계산기",
  "부상 리스크 예측 도구",
  "플레이 스타일 진단",
  "63개 이상의 무료 도구",
  "복식 궁합 테스트",
  "반응 속도 테스트",
  "상대 분석기",
];

export function LiveTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="bg-accent-volt text-court-ink overflow-hidden py-2.5 select-none">
      <div className="flex items-center gap-0 animate-[ticker_28s_linear_infinite]">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex-none text-[11px] font-bold uppercase tracking-[0.18em] whitespace-nowrap px-8"
          >
            {item}
            <span className="ml-8 opacity-40">◆</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

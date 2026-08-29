import Image from "next/image";
import Link from "next/link";

const FEATURED_PLAYER = {
  slug: "carlos-alcaraz",
  name: "Carlos Alcaraz",
  nameKo: "카를로스 알카라스",
  number: "01",
  image: "/images/players/carlos-alcaraz.png",
  summary:
    "스페인의 올코트 플레이어. 강력한 포핸드와 드롭샷, 과감한 네트 전진을 오가며 하드·클레이·잔디 모든 표면에서 메이저 타이틀을 들어올렸다.",
  highlights: [
    "2022 US 오픈 우승 — 역대 최연소 남자 단식 세계 1위 등극",
    "2023 윔블던 우승 (결승에서 조코비치 상대 승리)",
    "2024 롤랑가로스·윔블던 연속 우승",
    "하드·클레이·잔디 세 표면 모두 메이저 우승 경험",
  ],
  styles: ["올코트", "공격적", "헤비 톱스핀"],
};

export function PlayerSpotlight() {
  const p = FEATURED_PLAYER;

  return (
    <section className="bg-court-ink py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* 섹션 헤더 */}
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-volt mb-3">
          Player of the Week
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-[-0.035em] mb-10">
          이번 주 주목할 선수
        </h2>

        {/* 메인 카드 */}
        <div className="border border-white/10 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
          {/* 좌측: 대형 번호 + 선수 이미지 */}
          <div className="relative flex items-end justify-center bg-[#0A0E1A] min-h-[320px] md:min-h-[440px] overflow-hidden p-8">
            {/* 배경 대형 번호 */}
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[220px] md:text-[280px] leading-none select-none pointer-events-none"
              style={{
                fontFamily:
                  "var(--font-archivo-black, 'Archivo Black', sans-serif)",
                color: "rgba(223,255,28,0.06)",
                letterSpacing: "-0.05em",
              }}
            >
              {p.number}
            </span>

            {/* 선수 이미지 — duotone(grayscale + volt tint) */}
            <div
              className="relative z-10 w-[220px] md:w-[280px] h-[260px] md:h-[360px]"
              style={{ filter: "grayscale(100%) brightness(1.1)" }}
            >
              <div
                className="absolute inset-0 z-20 mix-blend-color pointer-events-none"
                style={{ backgroundColor: "rgba(223,255,28,0.25)" }}
              />
              <Image
                src={p.image}
                alt={`${p.nameKo} 선수 사진`}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 220px, 280px"
              />
            </div>
          </div>

          {/* 우측: 선수 정보 */}
          <div className="flex flex-col justify-between bg-[#0D1220] p-8 md:p-12">
            {/* 선수명 */}
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                {p.nameKo}
              </p>
              <h3
                className="text-4xl md:text-5xl font-black text-white leading-none tracking-[-0.04em] mb-8"
                style={{
                  fontFamily:
                    "var(--font-archivo-black, 'Archivo Black', sans-serif)",
                }}
              >
                {p.name}
              </h3>

              {/* 선수 소개 + 주요 커리어 */}
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6">
                {p.summary}
              </p>
              <ul className="space-y-2 mb-8">
                {p.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-white/60 leading-relaxed"
                  >
                    <span aria-hidden="true" className="text-accent-volt">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* 플레이 스타일 칩 */}
              <div className="flex flex-wrap gap-2 mb-8">
                {p.styles.map((style) => (
                  <span
                    key={style}
                    className="text-[11px] uppercase tracking-wider text-white/60 border border-white/20 px-3 py-1 rounded-full"
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href={`/players/${p.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 px-6 py-3 rounded-sm hover:border-accent-volt hover:text-accent-volt transition-colors duration-200 w-fit"
            >
              선수 분석 보기
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

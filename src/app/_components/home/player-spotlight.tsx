import Image from "next/image";
import Link from "next/link";

const FEATURED_PLAYER = {
  slug: "carlos-alcaraz",
  name: "Carlos Alcaraz",
  nameKo: "카를로스 알카라스",
  number: "01",
  image: "/images/players/carlos-alcaraz.png",
  stats: [
    { label: "ATP RANK", value: "#2" },
    { label: "WIN%", value: "83%" },
    { label: "SERVE", value: "220km/h" },
    { label: "TITLES", value: "14" },
  ],
  styles: ["All-Court", "Aggressive", "Heavy Topspin"],
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

              {/* 4칸 스탯 그리드 */}
              <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 mb-8">
                {p.stats.map((stat) => (
                  <div key={stat.label} className="bg-[#0D1220] px-5 py-4">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-1">
                      {stat.label}
                    </p>
                    <p
                      className="text-2xl font-black text-accent-volt leading-none"
                      style={{
                        fontFamily:
                          "var(--font-archivo-black, 'Archivo Black', sans-serif)",
                      }}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

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

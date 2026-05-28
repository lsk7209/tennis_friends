"use client";

const DATA = [
  { level: "1.0", count: 2 },
  { level: "1.5", count: 5 },
  { level: "2.0", count: 12 },
  { level: "2.5", count: 24 },
  { level: "3.0", count: 38 },
  { level: "3.5", count: 52 },
  { level: "4.0", count: 45 },
  { level: "4.5", count: 30 },
  { level: "5.0", count: 16 },
  { level: "5.5", count: 8 },
  { level: "6.0", count: 3 },
  { level: "7.0", count: 1 },
];

const CHART_WIDTH = 720;
const CHART_HEIGHT = 280;
const CHART_PADDING = 32;
const MAX_COUNT = Math.max(...DATA.map((item) => item.count));

function getPoint(index: number, count: number) {
  const innerWidth = CHART_WIDTH - CHART_PADDING * 2;
  const innerHeight = CHART_HEIGHT - CHART_PADDING * 2;
  const x = CHART_PADDING + (innerWidth / (DATA.length - 1)) * index;
  const y = CHART_PADDING + innerHeight - (count / MAX_COUNT) * innerHeight;

  return `${x.toFixed(1)},${y.toFixed(1)}`;
}

const linePoints = DATA.map((item, index) => getPoint(index, item.count)).join(
  " ",
);
const areaPoints = `${CHART_PADDING},${CHART_HEIGHT - CHART_PADDING} ${linePoints} ${CHART_WIDTH - CHART_PADDING},${CHART_HEIGHT - CHART_PADDING}`;

export function CourtLines() {
  return (
    <section className="bg-court-ink py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="mb-10">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-volt">
            Data Insights
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] text-white md:text-4xl">
            TennisFriends 사용자 NTRP 분포
          </h2>
          <p className="mt-3 text-sm text-white/50">
            실제 테스트 응답 기반 데이터 예시
          </p>
        </div>

        <div className="h-[280px] min-h-[280px] min-w-0 md:h-[360px] md:min-h-[360px]">
          <svg
            className="h-full w-full"
            viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
            role="img"
            aria-label="NTRP 응답 분포 그래프"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="voltGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DFFF1C" stopOpacity="0.25" />
                <stop offset="95%" stopColor="#DFFF1C" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3].map((line) => {
              const y =
                CHART_PADDING +
                ((CHART_HEIGHT - CHART_PADDING * 2) / 3) * line;

              return (
                <line
                  key={line}
                  x1={CHART_PADDING}
                  x2={CHART_WIDTH - CHART_PADDING}
                  y1={y}
                  y2={y}
                  stroke="rgba(255,255,255,0.08)"
                  strokeDasharray="1 6"
                />
              );
            })}
            <polygon points={areaPoints} fill="url(#voltGradient)" />
            <polyline
              points={linePoints}
              fill="none"
              stroke="#DFFF1C"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {DATA.map((item, index) => {
              const [x, y] = getPoint(index, item.count).split(",");

              return (
                <g key={item.level}>
                  <circle cx={x} cy={y} r="4" fill="#DFFF1C" />
                  <text
                    x={x}
                    y={CHART_HEIGHT - 8}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.45)"
                    fontSize="11"
                  >
                    {item.level}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

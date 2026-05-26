"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

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

export function CourtLines() {
  return (
    <section className="bg-court-ink py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-volt mb-3">
            Data Insights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-[-0.035em]">
            TennisFriends 사용자 NTRP 분포
          </h2>
          <p className="text-white/50 mt-3 text-sm">
            실제 테스트 응답 기반 데이터 (예시)
          </p>
        </div>

        <div className="h-[280px] md:h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={DATA}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="voltGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DFFF1C" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#DFFF1C" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="1 6"
                stroke="rgba(255,255,255,0.08)"
                vertical={false}
              />
              <XAxis
                dataKey="level"
                tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "#11162A",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 2,
                  color: "#DFFF1C",
                  fontSize: 12,
                }}
                labelStyle={{ color: "rgba(255,255,255,0.6)" }}
                formatter={(value: number) => [`${value}%`, "비율"]}
              />
              <Area
                type="monotone"
                dataKey="count"
                stroke="#DFFF1C"
                strokeWidth={2}
                fill="url(#voltGradient)"
                dot={false}
                activeDot={{
                  r: 4,
                  fill: "#DFFF1C",
                  stroke: "#0A0E1A",
                  strokeWidth: 2,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

'use client';

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

interface SkillAttribute {
    name: string;
    score: number; // 0 to 10
    description?: string;
}

interface PlayerHexagonStatsProps {
    attributes: SkillAttribute[];
    playerName: string;
}

export default function PlayerHexagonStats({ attributes, playerName }: PlayerHexagonStatsProps) {
    // Recharts용 데이터 변환
    const chartData = attributes.map(attr => ({
        skill: attr.name,
        value: attr.score,
        fullMark: 10
    }));

    // 평균 능력치 계산
    const averageScore = (attributes.reduce((sum, attr) => sum + attr.score, 0) / attributes.length).toFixed(1);

    // 등급 계산
    const getOverallRating = (avg: number) => {
        if (avg >= 9.5) return { grade: 'S', color: '#10b981' };
        if (avg >= 9) return { grade: 'A+', color: '#3b82f6' };
        if (avg >= 8.5) return { grade: 'A', color: '#6366f1' };
        if (avg >= 8) return { grade: 'B+', color: '#f59e0b' };
        if (avg >= 7) return { grade: 'B', color: '#f97316' };
        return { grade: 'C', color: '#ef4444' };
    };

    const rating = getOverallRating(parseFloat(averageScore));

    return (
        <div className="my-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg">
                    📊
                </span>
                플레이 스타일 분석
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 왼쪽: Hexagon 차트 + 캐릭터 */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700">
                    {/* 선수 카드 헤더 */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-1">{playerName}</h4>
                            <p className="text-sm text-slate-400">Overall Rating</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div
                                className="text-5xl font-black"
                                style={{ color: rating.color }}
                            >
                                {rating.grade}
                            </div>
                            <div className="text-lg font-bold text-slate-300">
                                {averageScore}
                            </div>
                        </div>
                    </div>

                    {/* Hexagon 레이더 차트 */}
                    <div className="w-full h-[350px] relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart data={chartData}>
                                <PolarGrid
                                    stroke="#475569"
                                    strokeWidth={1.5}
                                />
                                <PolarAngleAxis
                                    dataKey="skill"
                                    tick={{
                                        fill: '#e2e8f0',
                                        fontSize: 12,
                                        fontWeight: 600
                                    }}
                                />
                                <PolarRadiusAxis
                                    angle={90}
                                    domain={[0, 10]}
                                    tick={{ fill: '#64748b', fontSize: 10 }}
                                    tickCount={6}
                                />
                                <Radar
                                    name={playerName}
                                    dataKey="value"
                                    stroke={rating.color}
                                    fill={rating.color}
                                    fillOpacity={0.25}
                                    strokeWidth={3}
                                />
                            </RadarChart>
                        </ResponsiveContainer>

                        {/* 중앙 캐릭터 실루엣 */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full opacity-30">
                                    {/* 테니스 선수 실루엣 */}
                                    <path
                                        d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM16 8H12.5L11.5 11H9V13H11L10 16L13 14L14 17H16L14.5 12L17 11L16 8ZM8 9C7.4 9 7 9.4 7 10V14C7 14.6 7.4 15 8 15C8.6 15 9 14.6 9 14V10C9 9.4 8.6 9 8 9Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* 간단한 능력치 바 */}
                    <div className="mt-6 space-y-2">
                        {attributes.slice(0, 3).map((attr) => (
                            <div key={attr.name} className="flex items-center gap-2">
                                <span className="text-xs text-slate-400 w-24 truncate">{attr.name}</span>
                                <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-500"
                                        style={{
                                            width: `${attr.score * 10}%`,
                                            backgroundColor: rating.color
                                        }}
                                    />
                                </div>
                                <span className="text-xs font-bold text-slate-300 w-8 text-right">
                                    {attr.score}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 오른쪽: 상세 능력치 카드 */}
                <div className="space-y-3">
                    {attributes.map((attr) => {
                        const getScoreColor = (score: number) => {
                            if (score >= 9) return 'from-green-500 to-emerald-500';
                            if (score >= 8) return 'from-blue-500 to-cyan-500';
                            if (score >= 7) return 'from-amber-500 to-orange-500';
                            return 'from-red-500 to-rose-500';
                        };

                        const getScoreGrade = (score: number) => {
                            if (score >= 9.5) return 'S';
                            if (score >= 9) return 'A+';
                            if (score >= 8.5) return 'A';
                            if (score >= 8) return 'B+';
                            if (score >= 7) return 'B';
                            return 'C';
                        };

                        return (
                            <div
                                key={attr.name}
                                className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-gray-900 dark:text-white">
                                        {attr.name}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${getScoreColor(attr.score)} text-white`}>
                                            {getScoreGrade(attr.score)}
                                        </span>
                                        <span className="text-lg font-bold text-gray-700 dark:text-gray-300">
                                            {attr.score}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                                    <div
                                        className={`h-full rounded-full transition-all duration-500 bg-gradient-to-r ${getScoreColor(attr.score)}`}
                                        style={{ width: `${attr.score * 10}%` }}
                                    />
                                </div>
                                {attr.description && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {attr.description}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

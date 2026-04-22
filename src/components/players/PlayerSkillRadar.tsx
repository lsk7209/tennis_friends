'use client';

import { useState, useEffect } from 'react';
import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip} from 'recharts';

interface SkillAttribute {
    name: string;
    score: number; // 0 to 10
    description?: string;
}

interface PlayerSkillRadarProps {
    attributes: SkillAttribute[];
}

export default function PlayerSkillRadar({ attributes }: PlayerSkillRadarProps) {
    // 클라이언트 사이드에서만 차트 렌더링 (SSR에서 컨테이너 크기 계산 문제 방지)
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Recharts용 데이터 변환
    const chartData = attributes.map(attr => ({
        skill: attr.name,
        value: attr.score,
        fullMark: 10
    }));

    return (
        <div className="my-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg">
                    📊
                </span>
                플레이 스타일 분석
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* 레이더 차트 */}
                <div className="w-full h-[400px] bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    {isMounted ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart data={chartData}>
                            <PolarGrid stroke="#94a3b8" strokeDasharray="3 3" />
                            <PolarAngleAxis
                                dataKey="skill"
                                tick={{ fill: 'currentColor', fontSize: 13, fontWeight: 600 }}
                                className="text-gray-700 dark:text-gray-300"
                            />
                            <PolarRadiusAxis
                                angle={90}
                                domain={[0, 10]}
                                tick={{ fill: '#94a3b8', fontSize: 11 }}
                                tickCount={6}
                            />
                            <Radar
                                name="능력치"
                                dataKey="value"
                                stroke="#3b82f6"
                                fill="#3b82f6"
                                fillOpacity={0.6}
                                strokeWidth={2}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    padding: '8px 12px'
                                }}
                                formatter={(value: number) => [`${value}/10`, '점수']}
                            />
                        </RadarChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-gray-400">Loading chart...</div>
                        </div>
                    )}
                </div>

                {/* 능력치 상세 설명 */}
                <div className="space-y-4">
                    {attributes.map((attr) => (
                        <div
                            key={attr.name}
                            className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-gray-900 dark:text-gray-100">{attr.name}</span>
                                <span className="text-lg font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full">
                                    {attr.score}/10
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                                <div
                                    className={`h-2 rounded-full transition-all duration-500 ease-out ${attr.score >= 9
                                            ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                                            : attr.score >= 7
                                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                                                : 'bg-gradient-to-r from-orange-500 to-amber-500'
                                        }`}
                                    style={{ width: `${attr.score * 10}%` }}
                                ></div>
                            </div>
                            {attr.description && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {attr.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* 모바일 전용: 차트 먼저, 설명은 아래 */}
            <style jsx>{`
                @media (max-width: 1023px) {
                    .grid {
                        display: flex;
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    );
}

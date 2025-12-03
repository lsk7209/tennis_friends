'use client';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface SkillAttribute {
    name: string;
    score: number; // 0 to 10
    description?: string;
}

interface PlayerSkillGaugesProps {
    attributes: SkillAttribute[];
}

export default function PlayerSkillGauges({ attributes }: PlayerSkillGaugesProps) {
    // 점수에 따른 색상 결정
    const getColor = (score: number) => {
        if (score >= 9) return '#10b981'; // green-500
        if (score >= 8) return '#3b82f6'; // blue-500
        if (score >= 7) return '#f59e0b'; // amber-500
        return '#ef4444'; // red-500
    };

    return (
        <div className="my-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg">
                    📊
                </span>
                플레이 스타일 분석
            </h3>

            {/* 원형 게이지 그리드 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                {attributes.map((attr) => (
                    <div
                        key={attr.name}
                        className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
                    >
                        {/* 원형 프로그레스 바 */}
                        <div className="w-24 h-24 mb-3">
                            <CircularProgressbar
                                value={attr.score * 10}
                                text={`${attr.score}`}
                                styles={buildStyles({
                                    textSize: '28px',
                                    pathColor: getColor(attr.score),
                                    textColor: getColor(attr.score),
                                    trailColor: '#e5e7eb',
                                    pathTransitionDuration: 0.5,
                                })}
                            />
                        </div>

                        {/* 능력치 이름 */}
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white text-center mb-1">
                            {attr.name}
                        </h4>

                        {/* 등급 표시 */}
                        <span
                            className="text-xs font-semibold px-2 py-1 rounded-full"
                            style={{
                                backgroundColor: `${getColor(attr.score)}20`,
                                color: getColor(attr.score)
                            }}
                        >
                            {attr.score >= 9.5 ? 'S급' : attr.score >= 9 ? 'A+' : attr.score >= 8.5 ? 'A' : attr.score >= 8 ? 'B+' : attr.score >= 7 ? 'B' : 'C'}
                        </span>
                    </div>
                ))}
            </div>

            {/* 상세 설명 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {attributes.map((attr) => (
                    <div
                        key={`desc-${attr.name}`}
                        className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: getColor(attr.score) }}
                                />
                                <span className="font-bold text-gray-900 dark:text-white">
                                    {attr.name}
                                </span>
                            </div>
                            <span
                                className="text-lg font-bold px-3 py-1 rounded-full"
                                style={{
                                    backgroundColor: `${getColor(attr.score)}20`,
                                    color: getColor(attr.score)
                                }}
                            >
                                {attr.score}/10
                            </span>
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
    );
}

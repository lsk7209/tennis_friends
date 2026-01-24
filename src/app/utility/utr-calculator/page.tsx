'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Calculator,
    Target,
    TrendingUp,
    ArrowRight,
    ArrowLeft,
    Sparkles,
    CheckCircle,
    Info,
    Trophy,
    Users,
    BarChart3
} from 'lucide-react';

interface MatchResult {
    opponentUTR: string;
    myScore: string;
    opponentScore: string;
    matchType: 'singles' | 'doubles';
}

export default function UTRCalculatorPage() {
    const [step, setStep] = useState<'intro' | 'input' | 'result'>('intro');
    const [matches, setMatches] = useState<MatchResult[]>([
        { opponentUTR: '', myScore: '', opponentScore: '', matchType: 'singles' }
    ]);
    const [calculatedUTR, setCalculatedUTR] = useState<number | null>(null);

    const addMatch = () => {
        if (matches.length < 10) {
            setMatches([...matches, { opponentUTR: '', myScore: '', opponentScore: '', matchType: 'singles' }]);
        }
    };

    const removeMatch = (index: number) => {
        if (matches.length > 1) {
            setMatches(matches.filter((_, i) => i !== index));
        }
    };

    const updateMatch = (index: number, field: keyof MatchResult, value: string) => {
        const updated = [...matches];
        updated[index] = { ...updated[index], [field]: value };
        setMatches(updated);
    };

    const calculateUTR = () => {
        // UTR 계산 알고리즘 (간소화 버전)
        let totalWeight = 0;
        let weightedSum = 0;

        matches.forEach(match => {
            const oppUTR = parseFloat(match.opponentUTR);
            const myScore = parseInt(match.myScore);
            const oppScore = parseInt(match.opponentScore);

            if (!isNaN(oppUTR) && !isNaN(myScore) && !isNaN(oppScore)) {
                const totalGames = myScore + oppScore;
                if (totalGames > 0) {
                    const winRatio = myScore / totalGames;
                    // 승리 시 상대방 UTR + 보너스, 패배 시 상대방 UTR - 페널티
                    let estimatedUTR = oppUTR;
                    if (winRatio > 0.5) {
                        estimatedUTR = oppUTR + (winRatio - 0.5) * 2;
                    } else {
                        estimatedUTR = oppUTR - (0.5 - winRatio) * 2;
                    }
                    // 최소 1.0, 최대 16.0 제한
                    estimatedUTR = Math.max(1.0, Math.min(16.0, estimatedUTR));

                    const weight = totalGames; // 게임 수에 비례한 가중치
                    weightedSum += estimatedUTR * weight;
                    totalWeight += weight;
                }
            }
        });

        if (totalWeight > 0) {
            const result = weightedSum / totalWeight;
            setCalculatedUTR(Math.round(result * 100) / 100);
            setStep('result');
        }
    };

    const getUTRLevel = (utr: number): { level: string; description: string; color: string } => {
        if (utr >= 14) return { level: 'Professional', description: '프로 수준', color: 'from-purple-500 to-pink-500' };
        if (utr >= 12) return { level: 'Elite', description: '엘리트 수준', color: 'from-red-500 to-orange-500' };
        if (utr >= 10) return { level: 'Advanced', description: '상급자', color: 'from-orange-500 to-yellow-500' };
        if (utr >= 8) return { level: 'Intermediate+', description: '중상급자', color: 'from-green-500 to-emerald-500' };
        if (utr >= 6) return { level: 'Intermediate', description: '중급자', color: 'from-teal-500 to-cyan-500' };
        if (utr >= 4) return { level: 'Beginner+', description: '초중급자', color: 'from-blue-500 to-indigo-500' };
        return { level: 'Beginner', description: '초보자', color: 'from-gray-500 to-slate-500' };
    };

    const isFormValid = matches.every(m =>
        m.opponentUTR && m.myScore && m.opponentScore &&
        !isNaN(parseFloat(m.opponentUTR)) && !isNaN(parseInt(m.myScore)) && !isNaN(parseInt(m.opponentScore))
    );

    // 인트로 화면
    if (step === 'intro') {
        return (
            <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-20 md:py-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

                    <div className="container mx-auto max-w-6xl px-4 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">
                            <Badge className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-6 py-2 mb-8 text-sm font-semibold shadow-lg">
                                <Sparkles className="h-4 w-4 mr-2 inline" />
                                UTR 레이팅 계산기
                            </Badge>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
                                나의 UTR 레이팅은{' '}
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    얼마일까?
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                                경기 결과를 입력하면 예상 UTR(Universal Tennis Rating)을 계산해드립니다.<br />
                                <span className="text-gray-600">전 세계 표준 테니스 레이팅 시스템으로 실력을 객관화하세요.</span>
                            </p>

                            <Button
                                onClick={() => setStep('input')}
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                                <Calculator className="h-5 w-5 mr-2" />
                                UTR 계산 시작하기
                                <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-700 text-base font-medium mt-12">
                                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                                    <Trophy className="h-4 w-4 text-yellow-500" />
                                    <span>전 세계 표준</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                                    <Users className="h-4 w-4 text-blue-500" />
                                    <span>500만+ 선수 사용</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                                    <BarChart3 className="h-4 w-4 text-green-500" />
                                    <span>정확한 분석</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* UTR 레벨 설명 */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto max-w-6xl px-4">
                        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
                            UTR 레벨 시스템
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { range: '1-4', label: '초급', desc: '기본기 학습 단계' },
                                { range: '5-7', label: '중급', desc: '안정적인 랠리 가능' },
                                { range: '8-10', label: '상급', desc: '대회 출전 가능' },
                                { range: '11+', label: '엘리트', desc: '프로 수준' },
                            ].map((level, i) => (
                                <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">{level.range}</div>
                                    <div className="font-semibold text-gray-900 mb-1">{level.label}</div>
                                    <div className="text-sm text-gray-600">{level.desc}</div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    // 입력 화면
    if (step === 'input') {
        return (
            <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
                <div className="container mx-auto max-w-3xl px-4">
                    <Button
                        variant="ghost"
                        onClick={() => setStep('intro')}
                        className="mb-6"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        돌아가기
                    </Button>

                    <Card className="shadow-xl">
                        <CardContent className="p-8">
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">경기 결과 입력</h1>
                                <p className="text-gray-600">최근 경기 결과를 입력해주세요 (최대 10경기)</p>
                            </div>

                            <div className="space-y-6">
                                {matches.map((match, index) => (
                                    <Card key={index} className="bg-gray-50 border-2 border-gray-100">
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-center mb-4">
                                                <Badge variant="outline" className="font-semibold">
                                                    경기 {index + 1}
                                                </Badge>
                                                {matches.length > 1 && (
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => removeMatch(index)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        삭제
                                                    </Button>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div>
                                                    <Label htmlFor={`opp-utr-${index}`} className="text-sm font-medium">
                                                        상대방 UTR
                                                    </Label>
                                                    <Input
                                                        id={`opp-utr-${index}`}
                                                        type="number"
                                                        step="0.01"
                                                        min="1"
                                                        max="16"
                                                        placeholder="예: 6.5"
                                                        value={match.opponentUTR}
                                                        onChange={(e) => updateMatch(index, 'opponentUTR', e.target.value)}
                                                        className="mt-1"
                                                    />
                                                </div>
                                                <div>
                                                    <Label htmlFor={`my-score-${index}`} className="text-sm font-medium">
                                                        내 게임 수
                                                    </Label>
                                                    <Input
                                                        id={`my-score-${index}`}
                                                        type="number"
                                                        min="0"
                                                        placeholder="예: 6"
                                                        value={match.myScore}
                                                        onChange={(e) => updateMatch(index, 'myScore', e.target.value)}
                                                        className="mt-1"
                                                    />
                                                </div>
                                                <div>
                                                    <Label htmlFor={`opp-score-${index}`} className="text-sm font-medium">
                                                        상대 게임 수
                                                    </Label>
                                                    <Input
                                                        id={`opp-score-${index}`}
                                                        type="number"
                                                        min="0"
                                                        placeholder="예: 4"
                                                        value={match.opponentScore}
                                                        onChange={(e) => updateMatch(index, 'opponentScore', e.target.value)}
                                                        className="mt-1"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}

                                {matches.length < 10 && (
                                    <Button
                                        variant="outline"
                                        onClick={addMatch}
                                        className="w-full border-dashed border-2"
                                    >
                                        + 경기 추가
                                    </Button>
                                )}

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                                    <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div className="text-sm text-blue-800">
                                        <strong>팁:</strong> 더 많은 경기를 입력할수록 정확한 UTR을 계산할 수 있습니다.
                                        상대방의 UTR을 모른다면 대략적인 실력(초급 3-4, 중급 5-7, 상급 8-10)으로 입력하세요.
                                    </div>
                                </div>

                                <Button
                                    onClick={calculateUTR}
                                    disabled={!isFormValid}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-bold rounded-xl shadow-xl"
                                >
                                    <Calculator className="h-5 w-5 mr-2" />
                                    UTR 계산하기
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        );
    }

    // 결과 화면
    if (step === 'result' && calculatedUTR !== null) {
        const levelInfo = getUTRLevel(calculatedUTR);

        return (
            <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
                <div className="container mx-auto max-w-3xl px-4">
                    <Card className="shadow-2xl overflow-hidden">
                        <div className={`bg-gradient-to-r ${levelInfo.color} p-8 text-white text-center`}>
                            <h1 className="text-2xl font-bold mb-2">예상 UTR 레이팅</h1>
                            <div className="text-7xl font-extrabold mb-4">{calculatedUTR}</div>
                            <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                                {levelInfo.level} - {levelInfo.description}
                            </Badge>
                        </div>

                        <CardContent className="p-8">
                            <div className="text-center mb-8">
                                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">계산 완료!</h2>
                                <p className="text-gray-600">
                                    입력하신 {matches.length}개의 경기 결과를 분석했습니다.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 mb-8">
                                <h3 className="font-semibold text-gray-900 mb-4">UTR 레벨 참고</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>1-4점</span>
                                        <span className="text-gray-600">초급 (레슨 단계)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>5-7점</span>
                                        <span className="text-gray-600">중급 (동호회 수준)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>8-10점</span>
                                        <span className="text-gray-600">상급 (대회 출전 가능)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>11점 이상</span>
                                        <span className="text-gray-600">엘리트/프로 수준</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    onClick={() => {
                                        setMatches([{ opponentUTR: '', myScore: '', opponentScore: '', matchType: 'singles' }]);
                                        setStep('input');
                                    }}
                                    variant="outline"
                                    className="flex-1"
                                >
                                    다시 계산하기
                                </Button>
                                <Link href="/utility" className="flex-1">
                                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                        다른 유틸리티 보기
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        );
    }

    return null;
}

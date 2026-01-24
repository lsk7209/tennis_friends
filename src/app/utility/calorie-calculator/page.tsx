'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Flame,
    Activity,
    Timer,
    ArrowRight,
    ArrowLeft,
    Sparkles,
    CheckCircle,
    Dumbbell,
    Scale,
    Zap,
    Info,
    RotateCcw
} from 'lucide-react';

interface CalorieResult {
    totalCalories: number;
    activityLevel: string;
    mets: number;
}

export default function CalorieCalculatorPage() {
    const [step, setStep] = useState<'intro' | 'input' | 'result'>('intro');
    const [weight, setWeight] = useState<string>('');
    const [duration, setDuration] = useState<string>('');
    const [matchType, setMatchType] = useState<'singles' | 'doubles'>('singles');
    const [intensity, setIntensity] = useState<'light' | 'moderate' | 'vigorous'>('moderate');
    const [result, setResult] = useState<CalorieResult | null>(null);

    const calculateCalories = () => {
        const weightNum = parseFloat(weight);
        const durationNum = parseFloat(duration);

        if (isNaN(weightNum) || isNaN(durationNum)) return;

        // METs (Metabolic Equivalent of Task) values for tennis
        let mets = 0;

        if (matchType === 'singles') {
            if (intensity === 'light') mets = 6.0; // 연습/가벼운 랠리
            else if (intensity === 'moderate') mets = 7.3; // 일반적인 단식 게임
            else mets = 8.5; // 격렬한 시합
        } else { // doubles
            if (intensity === 'light') mets = 4.0;
            else if (intensity === 'moderate') mets = 5.0; // 일반적인 복식 게임
            else mets = 6.0; // 격렬한 시합
        }

        // 칼로리 계산 공식: METs x 몸무게(kg) x 시간(hour)
        const calories = mets * weightNum * (durationNum / 60);

        setResult({
            totalCalories: Math.round(calories),
            activityLevel: intensity === 'light' ? '가벼움' : intensity === 'moderate' ? '보통' : '격렬함',
            mets
        });
        setStep('result');
    };

    // 인트로 화면
    if (step === 'intro') {
        return (
            <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
                <section className="relative overflow-hidden py-20 md:py-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-yellow-500/5 to-orange-500/5"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>

                    <div className="container mx-auto max-w-6xl px-4 relative z-10 text-center">
                        <Badge className="bg-white/80 backdrop-blur-sm border border-green-200 text-green-700 px-6 py-2 mb-8 text-sm font-semibold shadow-lg">
                            <Sparkles className="h-4 w-4 mr-2 inline" />
                            테니스 칼로리 계산기
                        </Badge>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
                            오늘 테니스로<br />
                            <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                얼마나 태웠을까?
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium">
                            단식/복식 여부와 플레이 강도를 고려하여<br />
                            <span className="text-gray-600">정확한 칼로리 소모량을 계산해드립니다.</span>
                        </p>

                        <Button
                            onClick={() => setStep('input')}
                            size="lg"
                            className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                            <Flame className="h-5 w-5 mr-2" />
                            계산하러 가기
                            <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-700 text-base font-medium mt-12">
                            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                                <Activity className="h-4 w-4 text-red-500" />
                                <span>운동 강도 반영</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                                <Users className="h-4 w-4 text-blue-500" />
                                <span>단/복식 구분</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    // 입력 화면
    if (step === 'input') {
        return (
            <main className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto max-w-xl px-4">
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
                            <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">정보 입력</h1>

                            <div className="space-y-6">
                                <div>
                                    <Label htmlFor="weight" className="text-base font-medium mb-2 block">몸무게 (kg)</Label>
                                    <div className="relative">
                                        <Input
                                            id="weight"
                                            type="number"
                                            placeholder="예: 70"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                            className="pl-10 h-12 text-lg"
                                        />
                                        <Scale className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="duration" className="text-base font-medium mb-2 block">운동 시간 (분)</Label>
                                    <div className="relative">
                                        <Input
                                            id="duration"
                                            type="number"
                                            placeholder="예: 60"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                            className="pl-10 h-12 text-lg"
                                        />
                                        <Timer className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                                    </div>
                                </div>

                                <div>
                                    <Label className="text-base font-medium mb-3 block">경기 방식</Label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            onClick={() => setMatchType('singles')}
                                            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${matchType === 'singles'
                                                    ? 'border-green-500 bg-green-50 text-green-700'
                                                    : 'border-gray-200 hover:border-green-200'
                                                }`}
                                        >
                                            <Zap className="h-6 w-6" />
                                            <span className="font-bold">단식 (Singles)</span>
                                        </button>
                                        <button
                                            onClick={() => setMatchType('doubles')}
                                            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${matchType === 'doubles'
                                                    ? 'border-green-500 bg-green-50 text-green-700'
                                                    : 'border-gray-200 hover:border-green-200'
                                                }`}
                                        >
                                            <Users className="h-6 w-6" />
                                            <span className="font-bold">복식 (Doubles)</span>
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <Label className="text-base font-medium mb-3 block">운동 강도</Label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { value: 'light', label: '가벼움', desc: '연습/랠리' },
                                            { value: 'moderate', label: '보통', desc: '일반 게임' },
                                            { value: 'vigorous', label: '격렬함', desc: '대회/시합' }
                                        ].map((level) => (
                                            <button
                                                key={level.value}
                                                onClick={() => setIntensity(level.value as any)}
                                                className={`p-3 rounded-xl border-2 transition-all text-center ${intensity === level.value
                                                        ? 'border-yellow-500 bg-yellow-50 text-yellow-900'
                                                        : 'border-gray-200 hover:border-yellow-200'
                                                    }`}
                                            >
                                                <div className="font-bold">{level.label}</div>
                                                <div className="text-xs text-gray-500">{level.desc}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3 mt-4">
                                    <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div className="text-sm text-blue-800">
                                        실제 쉬는 시간을 제외한 <strong>순수 운동 시간</strong>을 입력하면 더 정확합니다.
                                    </div>
                                </div>

                                <Button
                                    onClick={calculateCalories}
                                    disabled={!weight || !duration}
                                    className="w-full bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white py-6 text-lg font-bold rounded-xl shadow-xl mt-4"
                                >
                                    <Flame className="h-5 w-5 mr-2" />
                                    칼로리 계산하기
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        );
    }

    // 결과 화면
    if (step === 'result' && result) {
        return (
            <main className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto max-w-3xl px-4">
                    <Card className="shadow-2xl overflow-hidden border-0">
                        <div className="bg-gradient-to-r from-green-500 to-yellow-500 p-10 text-white text-center">
                            <h1 className="text-2xl font-bold mb-2 opacity-90">소모 칼로리</h1>
                            <div className="text-7xl font-extrabold mb-4 flex items-center justify-center gap-2">
                                <Flame className="h-16 w-16 animate-pulse" />
                                {result.totalCalories}
                                <span className="text-3xl font-medium self-end mb-4">kcal</span>
                            </div>
                            <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                                {matchType === 'singles' ? '단식' : '복식'} / {duration}분 / {result.activityLevel} 강도
                            </Badge>
                        </div>

                        <CardContent className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-orange-50 p-6 rounded-2xl">
                                    <h3 className="font-bold text-orange-900 mb-2 flex items-center">
                                        <Activity className="h-5 w-5 mr-2" />
                                        운동 효과
                                    </h3>
                                    <p className="text-orange-800 text-sm">
                                        이 정도 활동량은 <strong>밥 {Math.round(result.totalCalories / 300 * 10) / 10}공기</strong>에 해당하며,
                                        <strong>체지방 약 {Math.round(result.totalCalories / 7.7)}g</strong>을 태웠을 것으로 예상됩니다.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-2xl">
                                    <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                                        <Dumbbell className="h-5 w-5 mr-2" />
                                        METs (대사당량)
                                    </h3>
                                    <p className="text-blue-800 text-sm">
                                        운동 강도는 <strong>{result.mets} METs</strong>입니다.<br />
                                        이는 안정 시보다 {result.mets}배 많은 에너지를 사용했음을 의미합니다.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    onClick={() => setStep('input')}
                                    variant="outline"
                                    className="flex-1 py-6 text-lg"
                                >
                                    <RotateCcw className="h-5 w-5 mr-2" />
                                    다시 계산하기
                                </Button>
                                <Link href="/utility" className="flex-1">
                                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-6 text-lg hover:from-green-700 hover:to-emerald-700">
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

// Icon component helper
function Users({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

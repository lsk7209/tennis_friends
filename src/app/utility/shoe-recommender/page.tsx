'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
    Footprints,
    ArrowRight,
    ArrowLeft,
    Sparkles,
    CheckCircle,
    ShoppingBag,
    Info,
    Scale,
    Zap,
    Activity,
    Layers,
    RotateCcw
} from 'lucide-react';

interface ShoePreference {
    footWidth: 'narrow' | 'standard' | 'wide';
    archType: 'low' | 'medium' | 'high';
    playStyle: 'baseliner' | 'all-court' | 'serve-volley';
    courtSurface: 'hard' | 'clay' | 'all-court';
    priority: 'stability' | 'speed' | 'cushion' | 'durability';
}

interface ShoeRecommendation {
    name: string;
    brand: string;
    type: 'Speed' | 'Stability' | 'Balanced';
    features: string[];
    description: string;
    matchScore: number;
}

export default function ShoeRecommenderPage() {
    const [step, setStep] = useState<'intro' | 'quiz' | 'result'>('intro');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [preferences, setPreferences] = useState<ShoePreference>({
        footWidth: 'standard',
        archType: 'medium',
        playStyle: 'all-court',
        courtSurface: 'hard',
        priority: 'stability'
    });

    const questions = [
        {
            id: 'footWidth',
            label: '발볼 너비',
            description: '평소 신발을 신을 때 발볼이 어떤가요?',
            options: [
                { value: 'narrow', label: '좁음 (칼발)', icon: Footprints, desc: '신발 끈을 꽉 조여야 맞음' },
                { value: 'standard', label: '보통', icon: Footprints, desc: '대부분의 브랜드가 잘 맞음' },
                { value: 'wide', label: '넓음', icon: Footprints, desc: '발볼 때문에 사이즈를 크게 신음' }
            ]
        },
        {
            id: 'priority',
            label: '가장 중요하게 생각하는 기능',
            description: '테니스화에서 포기할 수 없는 한 가지는?',
            options: [
                { value: 'stability', label: '안정성 (발목 보호)', icon: Scale, desc: '지지력이 좋고 튼튼한 신발' },
                { value: 'speed', label: '스피드 (가벼움)', icon: Zap, desc: '빠른 움직임을 위한 경량화' },
                { value: 'cushion', label: '쿠션 (무릎 보호)', icon: Layers, desc: '충격 흡수가 뛰어난 신발' },
                { value: 'durability', label: '내구성', icon: Activity, desc: '아웃솔이 오래가는 신발' }
            ]
        },
        {
            id: 'playStyle',
            label: '플레이 스타일',
            description: '코트에서 주로 어떻게 움직이나요?',
            options: [
                { value: 'baseliner', label: '베이스라이너', icon: ArrowRight, desc: '좌우 횡이동이 많고 랠리 위주' },
                { value: 'all-court', label: '올라운더', icon: Activity, desc: '코트 전체를 누비는 스타일' },
                { value: 'serve-volley', label: '서브 앤 발리', icon: Zap, desc: '네트 대시와 전후 이동이 많음' }
            ]
        }
    ];

    const getRecommendations = (): ShoeRecommendation[] => {
        // 간단한 추천 로직 (실제로는 더 복잡한 데이터베이스 필요)
        const shoes: ShoeRecommendation[] = [
            {
                name: 'Gel Resolution 9',
                brand: 'Asics',
                type: 'Stability',
                features: ['최고의 안정성', '넓은 발볼 옵션', '내구성 우수'],
                description: '베이스라이너에게 최적화된 안정성과 지지력을 제공합니다. 발볼이 넓은 분들에게도 편안합니다.',
                matchScore: 0
            },
            {
                name: 'Solution Speed FF 3',
                brand: 'Asics',
                type: 'Speed',
                features: ['초경량', '유연함', '빠른 반응성'],
                description: '코트를 빠르게 누비는 스피드스터를 위한 가벼운 신발입니다.',
                matchScore: 0
            },
            {
                name: 'Vapor 11',
                brand: 'Nike',
                type: 'Balanced',
                features: ['지면 밀착감', '슬라이딩 용이', '세련된 디자인'],
                description: '빠른 방향 전환과 슬라이딩에 최적화된 나이키의 스테디셀러입니다.',
                matchScore: 0
            },
            {
                name: 'Barricade 13',
                brand: 'Adidas',
                type: 'Stability',
                features: ['강력한 내구성', '발목 지지', '클래식'],
                description: '전통의 강자 바리케이드. 내구성과 지지력이 타의 추종을 불허합니다.',
                matchScore: 0
            },
            {
                name: 'Eclipsion 5',
                brand: 'Yonex',
                type: 'Stability',
                features: ['파워 쿠션', '충격 흡수', '안정감'],
                description: '요넥스만의 파워 쿠션 기술로 무릎 보호와 에너지 리턴이 뛰어납니다.',
                matchScore: 0
            },
            {
                name: 'Jet Mach 3',
                brand: 'Babolat',
                type: 'Speed',
                features: ['케블라 소재', '통기성', '가벼움'],
                description: '신은 듯 안 신은 듯한 가벼움과 놀라운 통기성을 자랑합니다.',
                matchScore: 0
            }
        ];

        // 점수 계산 로직
        return shoes.map(shoe => {
            let score = 70; // 기본 점수

            // 우선순위 매칭
            if (preferences.priority === 'stability' && shoe.type === 'Stability') score += 20;
            if (preferences.priority === 'speed' && shoe.type === 'Speed') score += 20;

            // 발볼 매칭
            if (preferences.footWidth === 'wide') {
                if (shoe.brand === 'Asics' || shoe.brand === 'New Balance') score += 15; // 아식스, 뉴발란스는 발볼 옵션이 좋음
                if (shoe.brand === 'Nike') score -= 10; // 나이키는 보통 좁음
            }

            // 브랜드 가산점 (예시)
            if (shoe.brand === 'Asics') score += 5; // 가장 대중적

            return { ...shoe, matchScore: Math.min(99, score) };
        }).sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);
    };

    const handleOptionSelect = (value: string) => {
        const questionId = questions[currentQuestion].id;
        setPreferences(prev => ({ ...prev, [questionId]: value }));

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setStep('result');
        }
    };

    // 인트로 화면
    if (step === 'intro') {
        return (
            <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
                <section className="relative overflow-hidden py-20 md:py-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-yellow-500/5"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400/10 rounded-full blur-3xl"></div>

                    <div className="container mx-auto max-w-6xl px-4 relative z-10 text-center">
                        <Badge className="bg-white/80 backdrop-blur-sm border border-orange-200 text-orange-700 px-6 py-2 mb-8 text-sm font-semibold shadow-lg">
                            <Sparkles className="h-4 w-4 mr-2 inline" />
                            AI 테니스화 추천기
                        </Badge>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
                            나의 발에 딱 맞는<br />
                            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                                인생 테니스화
                            </span>찾기
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium">
                            발볼 너비, 플레이 스타일, 선호하는 기능을 분석하여<br />
                            <span className="text-gray-600">당신에게 최적화된 테니스화를 추천해드립니다.</span>
                        </p>

                        <Button
                            onClick={() => setStep('quiz')}
                            size="lg"
                            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                            <Footprints className="h-5 w-5 mr-2" />
                            추천받기 시작
                            <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                    </div>
                </section>
            </main>
        );
    }

    // 퀴즈 화면
    if (step === 'quiz') {
        const question = questions[currentQuestion];
        return (
            <main className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto max-w-2xl px-4">
                    <div className="mb-8">
                        <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                            <span>Step {currentQuestion + 1} of {questions.length}</span>
                            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    <Card className="shadow-xl">
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{question.label}</h2>
                            <p className="text-gray-600 mb-8">{question.description}</p>

                            <div className="space-y-4">
                                {question.options.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleOptionSelect(option.value)}
                                        className="w-full flex items-center p-6 border-2 border-gray-100 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all text-left group"
                                    >
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-5 group-hover:scale-110 transition-transform">
                                            <option.icon className="h-6 w-6 text-gray-600 group-hover:text-orange-600" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-lg group-hover:text-orange-700">{option.label}</div>
                                            <div className="text-gray-500 text-sm">{option.desc}</div>
                                        </div>
                                        <ArrowRight className="ml-auto h-5 w-5 text-gray-300 group-hover:text-orange-500" />
                                    </button>
                                ))}
                            </div>

                            {currentQuestion > 0 && (
                                <Button
                                    variant="ghost"
                                    onClick={() => setCurrentQuestion(prev => prev - 1)}
                                    className="mt-6"
                                >
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    이전 질문
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </main>
        );
    }

    // 결과 화면
    if (step === 'result') {
        const recommendations = getRecommendations();

        return (
            <main className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            성향 분석 완료!
                        </h1>
                        <p className="text-xl text-gray-600">
                            고객님의 발 모양과 플레이 스타일에 가장 적합한 테니스화입니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {recommendations.map((shoe, index) => (
                            <Card key={index} className={`relative overflow-hidden border-2 ${index === 0 ? 'border-orange-500 shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-lg'}`}>
                                {index === 0 && (
                                    <div className="absolute top-0 inset-x-0 bg-orange-500 text-white text-center py-1 text-sm font-bold">
                                        BEST CHOICE
                                    </div>
                                )}
                                <CardContent className={`p-6 ${index === 0 ? 'pt-10' : ''}`}>
                                    <div className="text-sm font-semibold text-gray-500 mb-1">{shoe.brand}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{shoe.name}</h3>
                                    <Badge variant={index === 0 ? 'default' : 'secondary'} className="mb-4">
                                        매칭률 {shoe.matchScore}%
                                    </Badge>
                                    <p className="text-gray-600 text-sm mb-6 h-20">{shoe.description}</p>

                                    <div className="space-y-2 mb-6">
                                        {shoe.features.map((feature, i) => (
                                            <div key={i} className="flex items-center text-sm text-gray-700">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={`/utility/price-comparison?q=${shoe.brand} ${shoe.name}`} className="w-full block">
                                        <Button className={`w-full ${index === 0 ? 'bg-orange-600 hover:bg-orange-700' : 'bg-gray-900 hover:bg-gray-800'}`}>
                                            <ShoppingBag className="h-4 w-4 mr-2" />
                                            최저가 확인하기
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button
                            variant="outline"
                            onClick={() => {
                                setStep('intro');
                                setCurrentQuestion(0);
                            }}
                            size="lg"
                        >
                            <RotateCcw className="h-4 w-4 mr-2" />
                            다시 테스트하기
                        </Button>
                    </div>
                </div>
            </main>
        );
    }

    return null;
}


import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PLAYERS_DB } from '@/data/players';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Trophy, Activity, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import PersonSchema from '@/components/seo/PersonSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import AdSense from '@/components/AdSense';
import Image from 'next/image';

// Force static generation for these paths
export async function generateStaticParams() {
    return Object.keys(PLAYERS_DB).map((slug) => ({
        slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const player = PLAYERS_DB[slug];

    if (!player) {
        return {
            title: '선수를 찾을 수 없습니다',
        };
    }

    const title = `${player.name} (${player.nameEn}) - 테니스 프로필 & 전적`;
    const description = `${player.name} 선수의 상세 프로필, 랭킹, 플레이 스타일, 사용 장비 정보. ${player.country} 출신의 ${player.gender === 'male' ? 'ATP' : 'WTA'} 프로 테니스 선수 정보를 확인하세요.`;

    return {
        title,
        description,
        keywords: [player.name, player.nameEn, '테니스 선수', '프로필', '랭킹', 'ATP', 'WTA', player.country],
        openGraph: {
            title,
            description,
            type: 'profile',
            images: player.image ? [player.image] : [],
        },
        alternates: {
            canonical: `https://tennisfriends.co.kr/players/${slug}`,
        }
    };
}

export default async function PlayerProfilePage({ params }: Props) {
    const resolvedParams = await params;
    const player = PLAYERS_DB[resolvedParams.slug];

    if (!player) {
        notFound();
    }

    // Generate generic bio if specific content is missing
    const generateBio = () => {
        return (
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                    <strong>{player.name}</strong> ({player.nameEn}) 선수는
                    {player.country} 국적의 프로 테니스 선수입니다.
                    {player.gender === 'male' ? 'ATP(남자 프로 테니스)' : 'WTA(여자 프로 테니스)'} 투어에서 활약하고 있으며,
                    강력한 퍼포먼스로 전 세계 팬들의 주목을 받고 있습니다.
                </p>
                <p>
                    본 프로필 페이지에서는 {player.name} 선수의 기본 정보와 플레이 스타일,
                    그리고 최신 경기력을 분석한 데이터를 제공할 예정입니다.
                </p>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
            <PersonSchema
                name={player.nameEn}
                nameKo={player.name}
                description={`${player.name} 테니스 선수 프로필`}
                image={player.image || '/images/default-player.png'}
                nationality={player.country}
                jobTitle="Professional Tennis Player"
                url={`https://tennisfriends.co.kr/players/${resolvedParams.slug}`}
            />

            {/* Header / Hero */}
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white pt-24 pb-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Trophy size={200} />
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <Link href="/players" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        선수 목록으로 돌아가기
                    </Link>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Player Image / Avatar */}
                        <div className="relative group">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/30 overflow-hidden bg-white/10 shadow-xl flex-shrink-0">
                                {player.image ? (
                                    <Image
                                        src={player.image}
                                        alt={player.name}
                                        width={160}
                                        height={160}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 text-4xl">
                                        {player.countryFlag}
                                    </div>
                                )}
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-white text-gray-900 rounded-full px-3 py-1 text-sm font-bold shadow-lg flex items-center gap-1">
                                <span>{player.countryFlag}</span>
                                <span>{player.country}</span>
                            </div>
                        </div>

                        <div className="text-center md:text-left flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold mb-2">{player.name}</h1>
                            <p className="text-xl text-blue-100 mb-4">{player.nameEn}</p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
                                    {player.gender === 'male' ? 'ATP Player' : 'WTA Player'}
                                </Badge>
                                {/* Future: Add Rank Badge */}
                                {/* <Badge variant="outline" className="border-white/40 text-white">Rank Top 100</Badge> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <Card className="shadow-xl bg-white dark:bg-gray-800 border-0">
                    <CardContent className="p-6 md:p-8">
                        <Tabs defaultValue="info" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-8">
                                <TabsTrigger value="info">선수 정보</TabsTrigger>
                                <TabsTrigger value="stats">통계 & 기록 (Coming Soon)</TabsTrigger>
                            </TabsList>

                            <TabsContent value="info" className="space-y-8">
                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                                        <Info className="w-6 h-6 mr-2 text-blue-600" />
                                        선수 소개
                                    </h2>
                                    <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {player.longBio ? (
                                            <div dangerouslySetInnerHTML={{ __html: player.longBio.replace(/\n/g, '<br/>') }} />
                                        ) : (
                                            generateBio()
                                        )}
                                    </div>
                                </section>

                                <AdSense />

                                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">국적</h3>
                                        <div className="text-lg font-medium flex items-center gap-2">
                                            <span className="text-2xl">{player.countryFlag}</span>
                                            {player.country}
                                        </div>
                                    </div>
                                    {player.plays && (
                                        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">주손 (Plays)</h3>
                                            <div className="text-lg font-medium">
                                                {player.plays === 'Right-handed' ? '오른손잡이' : '왼손잡이'}
                                            </div>
                                        </div>
                                    )}
                                    {player.backhand && (
                                        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">백핸드 (Backhand)</h3>
                                            <div className="text-lg font-medium">
                                                {player.backhand === 'One-handed' ? '원핸드' : '투핸드'}
                                            </div>
                                        </div>
                                    )}
                                </section>
                            </TabsContent>

                            <TabsContent value="stats">
                                <div className="text-center py-12 text-gray-500">
                                    <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                    <p className="text-lg">상세 경기 기록 및 통계 데이터 준비 중입니다.</p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>

            <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
                <Link href="/utility">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg transform hover:-translate-y-1 transition-all">
                        <Activity className="w-5 h-5 mr-2" />
                        내 테니스 실력 테스트해보기 (NTRP)
                    </Button>
                </Link>
            </div>
        </div>
    );
}

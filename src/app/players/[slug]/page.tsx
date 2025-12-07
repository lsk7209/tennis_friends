
import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PLAYERS_DB } from '@/data/players';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Trophy, Activity, ArrowLeft, ExternalLink, Star, Target, Zap, Crown, MapPin, Hand, CheckCircle, Shield, Award, Brain, List } from 'lucide-react';
import Link from 'next/link';
import PersonSchema from '@/components/seo/PersonSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import AdSense from '@/components/AdSense';
import Image from 'next/image';
import PlayerHexagonStats from '@/components/players/PlayerHexagonStats';
import TOC from '@/components/blog/TOC';

// Force static generation for these paths
export async function generateStaticParams() {
    return Object.keys(PLAYERS_DB).map((slug) => ({
        slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
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
        keywords: [player.name, player.nameEn, '테니스 선수', '프로필', '랭킹', 'ATP', 'WTA', player.country, '전적', '플레이스타일'],
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

    // --- Smart Tag Logic ---
    const getSmartTags = (bio: string) => {
        const tags = [];
        if (bio.includes('서브') || bio.includes('에이스')) tags.push({ text: 'Big Server', icon: <Zap className="w-3 h-3" />, color: 'blue' });
        if (bio.includes('클레이')) tags.push({ text: 'Clay Specialist', icon: <Activity className="w-3 h-3" />, color: 'orange' });
        if (bio.includes('우승') || bio.includes('챔피언')) tags.push({ text: 'Title Winner', icon: <Trophy className="w-3 h-3" />, color: 'yellow' });
        if (bio.includes('공격') || bio.includes('파워')) tags.push({ text: 'Aggressive', icon: <Target className="w-3 h-3" />, color: 'red' });
        if (bio.includes('수비') || bio.includes('끈질긴')) tags.push({ text: 'Defender', icon: <Shield className="w-3 h-3" />, color: 'green' });
        if (bio.includes('발리') || bio.includes('네트')) tags.push({ text: 'Net Player', icon: <Activity className="w-3 h-3" />, color: 'purple' });
        if (bio.includes('랭킹 1위') || bio.includes('No.1')) tags.push({ text: 'World No.1', icon: <Crown className="w-3 h-3" />, color: 'amber' });

        // Default tags if none match
        if (tags.length === 0) {
            tags.push({ text: 'Pro Player', icon: <Star className="w-3 h-3" />, color: 'gray' });
        }
        return tags;
    };

    const smartTags = getSmartTags(player.longBio || '');

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
            <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white pt-24 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Trophy size={300} />
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <Link href="/players" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        선수 목록으로 돌아가기
                    </Link>

                    <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
                        {/* Player Image / Avatar */}
                        <div className="relative group">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white/20 overflow-hidden bg-white/10 shadow-2xl flex-shrink-0 backdrop-blur-sm">
                                {player.image ? (
                                    <Image
                                        src={player.image}
                                        alt={player.name}
                                        width={192}
                                        height={192}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-600 text-5xl">
                                        {player.countryFlag}
                                    </div>
                                )}
                            </div>
                            <div className="absolute -bottom-3 -right-3 bg-white text-gray-900 rounded-full px-4 py-1.5 text-sm font-bold shadow-lg flex items-center gap-2 border border-blue-100">
                                <span className="text-xl">{player.countryFlag}</span>
                                <span>{player.country}</span>
                            </div>
                        </div>

                        <div className="text-center md:text-left flex-1 mb-2">
                            <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">{player.name}</h1>
                            <p className="text-xl md:text-2xl text-blue-200 mb-5 font-light">{player.nameEn}</p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                <Badge variant="secondary" className="bg-blue-600 text-white border-none hover:bg-blue-500 px-3 py-1">
                                    {player.gender === 'male' ? 'ATP Tour' : 'WTA Tour'}
                                </Badge>
                                {smartTags.map((tag, idx) => (
                                    <Badge key={idx} variant="outline" className="border-white/30 text-white hover:bg-white/10 px-3 py-1 flex items-center gap-1.5">
                                        {tag.icon}
                                        {tag.text}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
                <Card className="shadow-xl bg-white dark:bg-gray-800 border-0 overflow-hidden ring-1 ring-black/5">
                    <CardHeader className="bg-gray-50/50 dark:bg-gray-700/30 border-b border-gray-100 dark:border-gray-700 p-6">
                        <CardTitle className="flex items-center text-lg font-bold text-gray-800 dark:text-gray-100">
                            <Activity className="w-5 h-5 mr-2 text-blue-600" />
                            선수 프로필
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8">
                        {/* Quick Stats Layout */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 border-b border-gray-100 dark:border-gray-700 pb-8">
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Nationality</span>
                                <div className="flex items-center gap-2 font-medium text-gray-900 dark:text-gray-100">
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    {player.country}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Plays</span>
                                <div className="flex items-center gap-2 font-medium text-gray-900 dark:text-gray-100">
                                    <Hand className="w-4 h-4 text-orange-500" />
                                    {player.plays === 'Left-handed' ? 'Left-handed' : 'Right-handed'}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Backhand</span>
                                <div className="flex items-center gap-2 font-medium text-gray-900 dark:text-gray-100">
                                    <Target className="w-4 h-4 text-green-500" />
                                    {player.backhand === 'One-handed' ? 'One-handed' : 'Two-handed'}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Status</span>
                                <div className="flex items-center gap-2 font-medium text-gray-900 dark:text-gray-100">
                                    <CheckCircle className="w-4 h-4 text-purple-500" />
                                    Active Player
                                </div>
                            </div>
                        </div>

                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 dark:bg-gray-900 p-1 rounded-lg">
                                <TabsTrigger value="overview" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">선수 소개</TabsTrigger>
                                <TabsTrigger value="stats" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">통계 & 기록 (Soon)</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                {player.detailedProfile ? (
                                    <div className="prose dark:prose-invert max-w-none">
                                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
                                            {player.detailedProfile.oneLineSummary || player.longBio?.slice(0, 100) + '...'}
                                        </p>

                                        {/* Table of Contents for Rich Profiles */}
                                        <div className="not-prose bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl mb-8 border border-gray-100 dark:border-gray-700">
                                            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                                                <List className="w-4 h-4 mr-2" />
                                                목차
                                            </h4>
                                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                                <li><a href="#why-notable" className="hover:text-blue-600 transition-colors">1. 왜 주목받는 선수인가?</a></li>
                                                <li><a href="#play-style" className="hover:text-blue-600 transition-colors">2. 플레이 스타일 분석</a></li>
                                                <li><a href="#growth-story" className="hover:text-blue-600 transition-colors">3. 성장 스토리</a></li>
                                                {player.detailedProfile.signatureMatch && (
                                                    <li><a href="#signature-match" className="hover:text-blue-600 transition-colors">4. 인생 경기</a></li>
                                                )}
                                                <li><a href="#recent-form" className="hover:text-blue-600 transition-colors">5. 최근 폼 & 전망</a></li>
                                            </ul>
                                        </div>

                                        <h2 id="why-notable" className="flex items-center gap-2 mt-12 scroll-mt-24">
                                            <Crown className="w-6 h-6 text-yellow-500" />
                                            왜 주목해야 하는가?
                                        </h2>
                                        <div dangerouslySetInnerHTML={{ __html: player.detailedProfile.whyNotable || '' }} />

                                        <AdSense />

                                        <h2 id="play-style" className="flex items-center gap-2 mt-12 scroll-mt-24">
                                            <Target className="w-6 h-6 text-red-500" />
                                            플레이 스타일
                                        </h2>
                                        <div dangerouslySetInnerHTML={{ __html: player.detailedProfile.playStyle || '' }} />

                                        {player.detailedProfile.hexagonStats && (
                                            <div className="my-8 not-prose">
                                                <PlayerHexagonStats
                                                    playerName={player.name}
                                                    attributes={player.detailedProfile.hexagonStats}
                                                />
                                            </div>
                                        )}

                                        <h2 id="growth-story" className="flex items-center gap-2 mt-12 scroll-mt-24">
                                            <Star className="w-6 h-6 text-blue-500" />
                                            성장 스토리
                                        </h2>
                                        <div dangerouslySetInnerHTML={{ __html: player.detailedProfile.growthStory || '' }} />

                                        {player.detailedProfile.signatureMatch && (
                                            <>
                                                <h2 id="signature-match" className="flex items-center gap-2 mt-12 scroll-mt-24">
                                                    <Award className="w-6 h-6 text-purple-500" />
                                                    이 선수를 증명하는 경기
                                                </h2>
                                                <div className="not-prose my-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                                        <Trophy size={100} />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 relative z-10">
                                                        {player.detailedProfile.signatureMatch.title}
                                                    </h3>
                                                    {player.detailedProfile.signatureMatch.date && (
                                                        <div className="text-sm text-blue-600 dark:text-blue-400 mb-4 font-medium flex items-center gap-1 relative z-10">
                                                            <Activity className="w-3 h-3" />
                                                            {player.detailedProfile.signatureMatch.date}
                                                        </div>
                                                    )}
                                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                                                        {player.detailedProfile.signatureMatch.description}
                                                    </p>
                                                </div>
                                            </>
                                        )}

                                        <h2 id="recent-form" className="flex items-center gap-2 mt-12 scroll-mt-24">
                                            <Activity className="w-6 h-6 text-green-500" />
                                            최근 흐름과 전망
                                        </h2>
                                        <div dangerouslySetInnerHTML={{ __html: player.detailedProfile.recentForm || '' }} />
                                    </div>
                                ) : (
                                    <>
                                        {/* Generic Layout for players without detailed profile */}
                                        <section className="relative">
                                            <div className="absolute -left-4 top-0 w-1 h-full bg-blue-500 rounded-full opacity-20 hidden md:block"></div>
                                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                                                <Star className="w-6 h-6 mr-2 text-amber-500" />
                                                About {player.name}
                                            </h2>

                                            <div className="prose dark:prose-invert max-w-none">
                                                {player.longBio ? (
                                                    <div className="bg-blue-50/50 dark:bg-blue-900/10 p-6 md:p-8 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                                                        <div className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium" dangerouslySetInnerHTML={{ __html: player.longBio.replace(/\n/g, '<br/>') }} />
                                                    </div>
                                                ) : (
                                                    generateBio()
                                                )}
                                            </div>
                                        </section>

                                        <AdSense />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                            <div className="border border-gray-100 dark:border-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow">
                                                <h3 className="font-bold text-lg mb-3 flex items-center">
                                                    <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                                                    Play Style
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    {player.name} 선수는 {player.plays === 'Right-handed' ? '오른손' : '왼손'}잡이 플레이어로,
                                                    {player.backhand === 'Two-handed' ? ' 안정적인 투핸드 백핸드' : ' 날카로운 원핸드 백핸드'}를 구사합니다.
                                                    {player.country} 테니스의 특징을 잘 보여주는 선수 중 한 명입니다.
                                                </p>
                                            </div>

                                            <div className="border border-gray-100 dark:border-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow">
                                                <h3 className="font-bold text-lg mb-3 flex items-center">
                                                    <Trophy className="w-5 h-5 mr-2 text-blue-500" />
                                                    Tour Highlights
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    {player.gender === 'male' ? 'ATP' : 'WTA'} 투어에서 활약 중이며, 꾸준한 성적으로 랭킹을 유지하고 있습니다.
                                                    그랜드슬램 및 마스터스 대회에서의 활약이 기대되는 선수입니다.
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}

                            </TabsContent>

                            <TabsContent value="stats">
                                <div className="text-center py-16 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
                                    <Activity className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">데이터 수집 중</h3>
                                    <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                                        {player.name} 선수의 상세 시즌 스탯, 승률, 서브 기록 등 정밀 데이터를 준비하고 있습니다.
                                    </p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>

            <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
                <Link href="/utility">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 transform hover:-translate-y-1 transition-all rounded-full px-8 h-12 text-base font-bold">
                        <Activity className="w-5 h-5 mr-2" />
                        내 플레이 스타일과 비슷한 선수는? (테스트)
                    </Button>
                </Link>
            </div>
        </div>
    );
}

// Helper icon component for Shield if not imported



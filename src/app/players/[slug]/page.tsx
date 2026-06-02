import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PLAYERS_DB } from "@/data/players";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Info,
  Trophy,
  Activity,
  ArrowLeft,
  Star,
  Target,
  Zap,
  Crown,
  Hand,
  CheckCircle,
  Shield,
  Award,
  Brain,
  List,
  Heart,
} from "lucide-react";
import Link from "next/link";
import ProfilePageSchema from "@/components/seo/ProfilePageSchema";
import { allBlogPosts } from "@/data/blog-posts";
import RelatedContent from "@/components/RelatedContent";
import FAQSchema from "@/components/seo/FAQSchema";
import Image from "next/image";
import CafeBanner from "@/components/blog/CafeBanner";
import PlayerHexagonStats from "@/components/players/PlayerHexagonStats";
import PlayerSearchAliasSection from "@/components/players/PlayerSearchAliasSection";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getPublishedBlogPosts } from "@/lib/blog-publish";
import { getSiteUrl } from "@/lib/site";
import {
  buildPlayerSeoDescription,
  buildPlayerSeoKeywords,
  buildPlayerSeoTitle,
} from "@/lib/player-search-seo";

// Force static generation for these paths
export async function generateStaticParams() {
  return Object.keys(PLAYERS_DB).map((slug) => ({
    slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

const SEARCH_METADATA_OVERRIDES: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const player = PLAYERS_DB[slug];

  if (!player) {
    return {
      title: "Player not found",
    };
  }

  const tour = player.gender === "male" ? "ATP" : "WTA";
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/players/${slug}`;
  const metadataOverride = SEARCH_METADATA_OVERRIDES[slug];
  const baseTitle = buildPlayerSeoTitle(player, tour);
  const baseDescription = buildPlayerSeoDescription(player, tour);
  const title = metadataOverride?.title ?? baseTitle;
  const description =
    metadataOverride?.description ?? baseDescription;
  const ogImage = `${siteUrl}/api/og?title=${encodeURIComponent(player.name)}&sub=${encodeURIComponent(`${player.nameEn} · ${tour} profile`)}`;
  const keywords = metadataOverride
    ? [
        player.name,
        player.nameEn,
        `${player.name} profile`,
        `${player.name} ranking`,
        ...metadataOverride.keywords,
        "tennis",
        tour,
        player.country,
      ]
    : buildPlayerSeoKeywords(slug, player, tour, [
        `${player.name} playing style`,
        "tennis profile",
        "racket",
        "tennis",
      ]);

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "profile",
      siteName: "TennisFriends",
      locale: "ko_KR",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}
export default async function PlayerProfilePage({ params }: Props) {
  const resolvedParams = await params;
  const player = PLAYERS_DB[resolvedParams.slug];

  if (!player) {
    notFound();
  }

  const siteUrl = getSiteUrl();

  const breadcrumbItems = [
    { name: "Home", item: siteUrl },
    { name: "Players", item: `${siteUrl}/players` },
    { name: player.nameEn, item: `${siteUrl}/players/${resolvedParams.slug}` },
  ];

  // --- Smart Tag Logic ---
  const getSmartTags = (playerData: typeof player) => {
    const tags = [];
    const combinedText = [
      playerData.longBio,
      playerData.detailedProfile?.playStyle,
      playerData.detailedProfile?.whyNotable,
      playerData.detailedProfile?.oneLineSummary,
    ]
      .join(" ")
      .toLowerCase();

    // 1. Physical/Technical Traits (From Static Data)
    if (playerData.plays === "Left-handed") {
      tags.push({
        text: "Left-Handed",
        icon: <Hand className="w-3 h-3" />,
        color: "teal",
      });
    }
    if (playerData.backhand === "One-handed") {
      tags.push({
        text: "One-Handed BH",
        icon: <Star className="w-3 h-3" />,
        color: "indigo",
      });
    }

    // 2. Play Style & Strengths (From Bio/Detailed)
    if (
      combinedText.includes("서브") ||
      combinedText.includes("에이스") ||
      combinedText.includes("big server")
    ) {
      tags.push({
        text: "Big Server",
        icon: <Zap className="w-3 h-3" />,
        color: "blue",
      });
    }
    if (
      combinedText.includes("클레이") ||
      combinedText.includes("clay") ||
      combinedText.includes("흙신")
    ) {
      tags.push({
        text: "Clay Specialist",
        icon: <Activity className="w-3 h-3" />,
        color: "orange",
      });
    }
    if (combinedText.includes("잔디") || combinedText.includes("grass")) {
      tags.push({
        text: "Grass Court",
        icon: <Activity className="w-3 h-3" />,
        color: "green",
      });
    }
    if (
      combinedText.includes("공격") ||
      combinedText.includes("파워") ||
      combinedText.includes("aggressive")
    ) {
      tags.push({
        text: "Aggressive",
        icon: <Target className="w-3 h-3" />,
        color: "red",
      });
    }
    if (
      combinedText.includes("수비") ||
      combinedText.includes("끈질긴") ||
      combinedText.includes("counter")
    ) {
      tags.push({
        text: "Defender",
        icon: <Shield className="w-3 h-3" />,
        color: "emerald",
      });
    }
    if (
      combinedText.includes("발리") ||
      combinedText.includes("네트") ||
      combinedText.includes("net play")
    ) {
      tags.push({
        text: "Net Player",
        icon: <Activity className="w-3 h-3" />,
        color: "purple",
      });
    }

    // 3. Achievements & Status
    if (
      combinedText.includes("랭킹 1위") ||
      combinedText.includes("no.1") ||
      combinedText.includes("number one")
    ) {
      tags.push({
        text: "World No.1",
        icon: <Crown className="w-3 h-3" />,
        color: "amber",
      });
    }
    if (
      combinedText.includes("그랜드슬램 우승") ||
      combinedText.includes("grand slam champion") ||
      combinedText.includes("메이저 우승")
    ) {
      tags.push({
        text: "Grand Slam Champ",
        icon: <Trophy className="w-3 h-3" />,
        color: "yellow",
      });
    } else if (
      combinedText.includes("우승") ||
      combinedText.includes("title")
    ) {
      tags.push({
        text: "Title Winner",
        icon: <Award className="w-3 h-3" />,
        color: "sky",
      });
    }
    if (
      combinedText.includes("신성") ||
      combinedText.includes("유망주") ||
      combinedText.includes("rookie") ||
      combinedText.includes("next gen")
    ) {
      tags.push({
        text: "Rising Star",
        icon: <Star className="w-3 h-3" />,
        color: "pink",
      });
    }
    if (
      combinedText.includes("베테랑") ||
      combinedText.includes("legend") ||
      combinedText.includes("레전드")
    ) {
      tags.push({
        text: "Veteran",
        icon: <Brain className="w-3 h-3" />,
        color: "slate",
      });
    }

    // Deduplicate by text just in case
    const uniqueTags = Array.from(
      new Map(tags.map((item) => [item.text, item])).values(),
    );

    // Default if empty
    if (uniqueTags.length === 0) {
      uniqueTags.push({
        text: "Pro Player",
        icon: <Star className="w-3 h-3" />,
        color: "gray",
      });
    }

    // Limit to 4 tags to avoid clutter
    return uniqueTags.slice(0, 4);
  };

  const smartTags = getSmartTags(player);

  // Generate generic bio if specific content is missing
  const generateBio = () => {
    return (
      <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          <strong>{player.name}</strong> ({player.nameEn}) 선수는
          {player.country} 국적의 프로 테니스 선수입니다.
          {player.gender === "male"
            ? "ATP(남자 프로 테니스)"
            : "WTA(여자 프로 테니스)"}{" "}
          투어에서 활약하고 있으며, 강력한 퍼포먼스로 전 세계 팬들의 주목을 받고
          있습니다.
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
      <BreadcrumbSchema items={breadcrumbItems} />
      <ProfilePageSchema
        name={`${player.name} (${player.nameEn}) - 테니스 프로필`}
        description={`${player.name} 선수의 상세 프로필, 랭킹, 플레이 스타일, 사용 장비 정보.`}
        image={player.image || "/images/players/placeholder-tennis-player.svg"}
        breadcrumb={{
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.item,
          })),
        }}
        mainEntity={{
          "@type": "Person",
          name: player.nameEn,
          alternateName: player.name,
          description: `${player.name} 테니스 선수 프로필`,
          image:
            player.image || "/images/players/placeholder-tennis-player.svg",
          nationality: {
            "@type": "Country",
            name: player.country,
          },
          jobTitle: "Professional Tennis Player",
          url: `${siteUrl}/players/${resolvedParams.slug}`,
        }}
      />
      {player.detailedProfile?.faq && (
        <FAQSchema
          faqs={player.detailedProfile.faq.map((item) => ({
            q: item.question,
            a: item.answer,
          }))}
        />
      )}

      {/* Header / Hero */}
      <div className="bg-court-ink text-white pt-24 pb-20 px-4 relative overflow-hidden">
        {/* 배경 대형 텍스트 */}
        <span
          aria-hidden="true"
          className="absolute top-1/2 right-8 -translate-y-1/2 font-black leading-none select-none pointer-events-none hidden md:block"
          style={{
            fontFamily:
              "var(--font-archivo-black, 'Archivo Black', sans-serif)",
            fontSize: "clamp(160px, 20vw, 320px)",
            color: "rgba(223,255,28,0.04)",
            letterSpacing: "-0.05em",
          }}
        >
          {player.gender === "male" ? "ATP" : "WTA"}
        </span>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/players"
            className="inline-flex items-center text-white/50 hover:text-white mb-8 transition-colors"
          >
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
              <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
                {player.name}
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-5 font-light">
                {player.nameEn}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Badge
                  variant="secondary"
                  className="bg-accent-volt text-court-ink border-none hover:opacity-90 px-3 py-1 font-semibold"
                >
                  {player.gender === "male" ? "ATP Tour" : "WTA Tour"}
                </Badge>
                {smartTags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-3 py-1 flex items-center gap-1.5"
                  >
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
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  국적 (Nationality)
                </span>
                <div className="flex items-center gap-2 font-medium">
                  <span className="text-xl">{player.countryFlag}</span>
                  {player.country}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  주손 (Plays)
                </span>
                <div className="flex items-center gap-2 font-medium">
                  <Hand className="w-4 h-4 text-orange-500" />
                  {player.plays === "Right-handed" ? "오른손잡이" : "왼손잡이"}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  백핸드 (Backhand)
                </span>
                <div className="flex items-center gap-2 font-medium">
                  <Activity className="w-4 h-4 text-green-500" />
                  {player.backhand === "One-handed" ? "원핸드" : "투핸드"}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  상태 (Status)
                </span>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  현역 선수
                </div>
              </div>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 dark:bg-gray-900 p-1 rounded-lg">
                <TabsTrigger
                  value="overview"
                  className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  선수 소개
                </TabsTrigger>
                <TabsTrigger
                  value="stats"
                  className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  능력치 (Stats)
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="overview"
                className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                {player.detailedProfile ? (
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
                      {player.detailedProfile.oneLineSummary ||
                        player.longBio?.slice(0, 100) + "..."}
                    </p>

                    {/* Table of Contents for Rich Profiles */}
                    <div className="not-prose bg-gray-100 dark:bg-gray-800 p-6 rounded-xl mb-8 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-gray-50 mb-4 flex items-center">
                        <List className="w-4 h-4 mr-2" />
                        목차
                      </h4>
                      <ul className="space-y-2 text-sm font-semibold">
                        <li>
                          <a
                            href="#why-notable"
                            className="!text-black dark:!text-white hover:!text-blue-600 transition-colors no-underline block"
                            style={{ color: "black" }}
                          >
                            1. 왜 주목받는 선수인가?
                          </a>
                        </li>
                        <li>
                          <a
                            href="#play-style"
                            className="!text-black dark:!text-white hover:!text-blue-600 transition-colors no-underline block"
                            style={{ color: "black" }}
                          >
                            2. 플레이 스타일 분석
                          </a>
                        </li>
                        <li>
                          <a
                            href="#growth-story"
                            className="!text-black dark:!text-white hover:!text-blue-600 transition-colors no-underline block"
                            style={{ color: "black" }}
                          >
                            3. 성장 스토리
                          </a>
                        </li>
                        {player.detailedProfile.signatureMatch && (
                          <li>
                            <a
                              href="#signature-match"
                              className="!text-black dark:!text-white hover:!text-blue-600 transition-colors no-underline block"
                              style={{ color: "black" }}
                            >
                              4. 인생 경기
                            </a>
                          </li>
                        )}
                        <li>
                          <a
                            href="#recent-form"
                            className="!text-black dark:!text-white hover:!text-blue-600 transition-colors no-underline block"
                            style={{ color: "black" }}
                          >
                            5. 최근 폼 & 전망
                          </a>
                        </li>
                        {player.detailedProfile.faq && (
                          <li>
                            <a
                              href="#faq"
                              className="!text-black dark:!text-white hover:!text-blue-600 transition-colors no-underline block"
                              style={{ color: "black" }}
                            >
                              6. 자주 묻는 질문 (FAQ)
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>

                    <h2
                      id="why-notable"
                      className="flex items-center gap-2 mt-12 scroll-mt-24"
                    >
                      <Crown className="w-6 h-6 text-yellow-500" />왜 주목해야
                      하는가?
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: player.detailedProfile.whyNotable || "",
                      }}
                    />

                    <h2
                      id="play-style"
                      className="flex items-center gap-2 mt-12 scroll-mt-24"
                    >
                      <Target className="w-6 h-6 text-red-500" />
                      플레이 스타일
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: player.detailedProfile.playStyle || "",
                      }}
                    />

                    {player.detailedProfile.hexagonStats && (
                      <div className="my-8 not-prose">
                        <PlayerHexagonStats
                          playerName={player.name}
                          attributes={player.detailedProfile.hexagonStats}
                        />
                      </div>
                    )}

                    <h2
                      id="growth-story"
                      className="flex items-center gap-2 mt-12 scroll-mt-24"
                    >
                      <Star className="w-6 h-6 text-blue-500" />
                      성장 스토리
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: player.detailedProfile.growthStory || "",
                      }}
                    />

                    {player.detailedProfile.signatureMatch && (
                      <>
                        <h2
                          id="signature-match"
                          className="flex items-center gap-2 mt-12 scroll-mt-24"
                        >
                          <Award className="w-6 h-6 text-purple-500" />이 선수를
                          증명하는 경기
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

                    {player.detailedProfile.fanAppeal && (
                      <>
                        <hr className="my-8 border-gray-200 dark:border-gray-800" />
                        <h2
                          id="what-attracts-fans"
                          className="flex items-center gap-2 mt-12 scroll-mt-24"
                        >
                          <Heart className="w-6 h-6 text-pink-500" />
                          팬들은 이 선수의 어떤 점에 끌릴까?
                        </h2>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: player.detailedProfile.fanAppeal,
                          }}
                        />
                      </>
                    )}

                    <h2
                      id="recent-form"
                      className="flex items-center gap-2 mt-12 scroll-mt-24"
                    >
                      <Activity className="w-6 h-6 text-green-500" />
                      최근 흐름과 전망
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: player.detailedProfile.recentForm || "",
                      }}
                    />

                    {player.detailedProfile.faq &&
                      player.detailedProfile.faq.length > 0 && (
                        <>
                          <h2
                            id="faq"
                            className="flex items-center gap-2 mt-12 scroll-mt-24"
                          >
                            <Info className="w-6 h-6 text-gray-500" />
                            자주 묻는 질문
                          </h2>
                          <div className="not-prose space-y-4 mt-6">
                            {player.detailedProfile.faq.map((item, idx) => (
                              <div
                                key={idx}
                                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                              >
                                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 font-bold text-gray-900 dark:text-gray-100 flex items-start gap-2">
                                  <span className="text-blue-600 shrink-0">
                                    Q.
                                  </span>
                                  {item.question}
                                </div>
                                <div className="p-4 text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 flex items-start gap-2">
                                  <span className="text-green-600 font-bold shrink-0">
                                    A.
                                  </span>
                                  <div>{item.answer}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
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
                            <div
                              className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium"
                              dangerouslySetInnerHTML={{
                                __html: player.longBio.replace(/\n/g, "<br/>"),
                              }}
                            />
                          </div>
                        ) : (
                          generateBio()
                        )}
                      </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="border border-gray-100 dark:border-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-lg mb-3 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                          Play Style
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {player.name} 선수는{" "}
                          {player.plays === "Right-handed" ? "오른손" : "왼손"}
                          잡이 플레이어로,
                          {player.backhand === "Two-handed"
                            ? " 안정적인 투핸드 백핸드"
                            : " 날카로운 원핸드 백핸드"}
                          를 구사합니다.
                          {player.country} 테니스의 특징을 잘 보여주는 선수 중
                          한 명입니다.
                        </p>
                      </div>

                      <div className="border border-gray-100 dark:border-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-lg mb-3 flex items-center">
                          <Trophy className="w-5 h-5 mr-2 text-blue-500" />
                          Tour Highlights
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {player.gender === "male" ? "ATP" : "WTA"} 투어에서
                          활약 중이며, 꾸준한 성적으로 랭킹을 유지하고 있습니다.
                          그랜드슬램 및 마스터스 대회에서의 활약이 기대되는
                          선수입니다.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent
                value="stats"
                className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                {player.detailedProfile?.hexagonStats ? (
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <h3 className="flex items-center text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                      <Activity className="w-5 h-5 mr-2 text-blue-500" />
                      육각형 능력치 분석
                    </h3>
                    <div className="flex justify-center mb-8">
                      <PlayerHexagonStats
                        playerName={player.name}
                        attributes={player.detailedProfile.hexagonStats}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {player.detailedProfile.hexagonStats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-gray-700 dark:text-gray-200">
                              {stat.name}
                            </span>
                            <span className="font-bold text-blue-600 dark:text-blue-400">
                              {stat.score}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {stat.description}
                          </p>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 h-1.5 rounded-full mt-2">
                            <div
                              className="bg-blue-500 h-1.5 rounded-full transition-all duration-1000"
                              style={{ width: `${stat.score * 10}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
                    <Activity className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      데이터 수집 중
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                      {player.name} 선수의 정밀 능력치 데이터를 수집하고
                      있습니다.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <PlayerSearchAliasSection slug={resolvedParams.slug} />
      </div>

      {/* Related Blog Posts Section */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        {(() => {
          const relatedPosts = getPublishedBlogPosts(allBlogPosts)
            .filter(
              (post) =>
                post.title.includes(player?.name || "") ||
                post.excerpt?.includes(player?.name || "") ||
                (player?.nameEn &&
                  post.title
                    .toLowerCase()
                    .includes(player.nameEn.toLowerCase())) ||
                (player?.nameEn &&
                  post.excerpt
                    ?.toLowerCase()
                    .includes(player.nameEn.toLowerCase())),
            )
            .slice(0, 3)
            .map((post) => ({
              ...post,
              href: `/blog/${post.slug}`,
            }));

          if (relatedPosts.length > 0) {
            return (
              <RelatedContent
                items={relatedPosts}
                title={`${player.name} 선수 관련 가이드`}
                type="blog"
              />
            );
          }
          return null;
        })()}
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <CafeBanner />
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12">
        <section
          className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
          aria-label={`${player.name} 선수 분석 다음 단계`}
        >
          <div className="mb-5">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">
              {player.name} 분석 다음 단계
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              선수의 플레이 특징을 내 연습 기준, 실력 레벨, 장비 선택으로 이어서 확인합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Link
              href="/utility/play-style-test"
              className="group rounded-md border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-emerald-400 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 dark:text-slate-100 dark:group-hover:text-emerald-300">
                플레이 스타일 진단
              </div>
              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                내 경기 성향과 보완 포인트를 유형별로 확인
              </p>
            </Link>
            <Link
              href="/utility/ntrp-test"
              className="group rounded-md border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-blue-400 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">
                NTRP 실력 테스트
              </div>
              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                현재 레벨과 다음 훈련 기준을 빠르게 측정
              </p>
            </Link>
            <Link
              href="/utility/equipment-recommendation"
              className="group rounded-md border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-amber-400 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 dark:text-slate-100 dark:group-hover:text-amber-300">
                장비 추천 시스템
              </div>
              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                실력과 목적에 맞는 라켓·스트링 조합 확인
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

// Helper icon component for Shield if not imported

import { PLAYERS_DB } from '@/data/players';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import PlayerHexagonStats from '@/components/players/PlayerHexagonStats';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

const SLUG = 'miomir-kecmanovic';

export function generateMetadata(): Metadata {
  const player = PLAYERS_DB[SLUG];
  if (!player) return { title: '선수를 찾을 수 없습니다' };

  const tour = player.gender === 'male' ? 'ATP' : 'WTA';
  const oneLiner = player.detailedProfile?.oneLineSummary?.slice(0, 60) ?? '';
  const title = `${player.name} 완전 분석 | 플레이 스타일·강점·${tour} 프로필`;
  const description = oneLiner
    ? `${oneLiner} ${player.name}(${player.nameEn})의 플레이 스타일, 강점·약점, 라켓·스트링 정보를 한눈에. ${player.country} 출신 ${tour} 프로 선수 완전 분석.`
    : `${player.name}(${player.nameEn})의 플레이 스타일, 강점·약점, 라켓·스트링 정보를 한눈에. ${player.country} 출신 ${tour} 프로 선수 완전 분석.`;

  return {
    title,
    description,
    keywords: [player.name, player.nameEn, `${player.name} 프로필`, `${player.name} 플레이 스타일`, '테니스', tour, player.country],
    alternates: { canonical: `${getSiteUrl()}/players/${SLUG}` },
    openGraph: { title, description, type: 'profile', locale: 'ko_KR', siteName: 'TennisFriends' },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  };
}

export default function PlayerPage() {
  const player = PLAYERS_DB[SLUG];
  if (!player) notFound();

  const tour = player.gender === 'male' ? 'ATP' : 'WTA';
  const siteUrl = getSiteUrl();

  const breadcrumbs = [
    { name: 'TennisFriends', item: siteUrl },
    { name: '선수 프로필', item: `${siteUrl}/players` },
    { name: player.name, item: `${siteUrl}/players/${SLUG}` },
  ];

  const faqItems = (player.detailedProfile?.faq ?? []).map((f) => ({
    q: f.question,
    a: f.answer,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbSchema items={breadcrumbs} />
      {faqItems.length > 0 && <FAQSchema faqs={faqItems} />}

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Link href="/players" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> 선수 목록
        </Link>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">{tour}</Badge>
            <Badge variant="outline">{player.countryFlag} {player.country}</Badge>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {player.name}{' '}
            <span className="text-lg font-normal text-gray-500">({player.nameEn})</span>
          </h1>
          {player.detailedProfile?.oneLineSummary && (
            <p className="text-lg text-gray-600 mt-2">{player.detailedProfile.oneLineSummary}</p>
          )}
          <p className="mt-3 text-gray-500 text-sm">{player.plays} · {player.backhand} backhand</p>
        </div>

        {player.detailedProfile?.hexagonStats && player.detailedProfile.hexagonStats.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">능력치 분석</h2>
            <PlayerHexagonStats
              attributes={player.detailedProfile.hexagonStats}
              playerName={player.name}
            />
          </div>
        )}

        {player.detailedProfile?.playStyle && (
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">플레이 스타일</h2>
            <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: player.detailedProfile.playStyle }} />
          </div>
        )}

        {player.detailedProfile?.growthStory && (
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">성장 스토리</h2>
            <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: player.detailedProfile.growthStory }} />
          </div>
        )}

        {faqItems.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="border-b pb-4 last:border-0">
                  <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-2">나의 테니스 실력은?</h2>
          <p className="mb-4 opacity-90">NTRP 실력 테스트로 내 레벨을 확인해보세요.</p>
          <Link href="/utility/ntrp-test">
            <Button variant="secondary" size="lg">무료 실력 테스트</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

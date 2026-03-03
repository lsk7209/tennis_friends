import Article from '@/components/blog/Article';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "노박 조코비치: 기록의 파괴자, GOAT",
  description: "테니스 역사상 가장 위대한 선수. 24회 그랜드 슬램 우승에 빛나는 조코비치의 무결점 플레이와 철저한 자기 관리.",
  keywords: ["테니스", "노박 조코비치", "Novak Djokovic", "GOAT", "세르비아"],
  alternates: {
    canonical: 'https://tennisfrens.com/blog/novak-djokovic',
  },
  openGraph: {
    title: "노박 조코비치: 기록의 파괴자, GOAT",
    description: "테니스 역사상 가장 위대한 선수. 24회 그랜드 슬램 우승에 빛나는 조코비치의 무결점 플레이와 철저한 자기 관리.",
    url: 'https://tennisfrens.com/blog/novak-djokovic',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "노박 조코비치: 기록의 파괴자, GOAT",
    description: "테니스 역사상 가장 위대한 선수. 24회 그랜드 슬램 우승에 빛나는 조코비치의 무결점 플레이와 철저한 자기 관리.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const faqs = [
  {
    "q": "조코비치의 메이저 우승 횟수는?",
    "a": "현재 24회로, 남자 단식 역대 최다 기록을 보유하고 있습니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스", "노박 조코비치", "Novak Djokovic", "GOAT", "세르비아"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            노박 조코비치: 기록의 파괴자, GOAT
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            테니스 역사상 가장 위대한 선수. 24회 그랜드 슬램 우승에 빛나는 조코비치의 무결점 플레이와 철저한 자기 관리.
          </p>
        </div>
      </div>

      <Article slug="novak-djokovic" date="2026-01-24" title="노박 조코비치: 기록의 파괴자, GOAT" excerpt="테니스 역사상 가장 위대한 선수. 24회 그랜드 슬램 우승에 빛나는 조코비치의 무결점 플레이와 철저한 자기 관리.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2>테니스의 완성형, 노박 조코비치</h2>
            <p>조코비치는 테니스라는 스포츠를 한 단계 진화시켰습니다. 그는 공격과 수비의 완벽한 밸런스를 보여줍니다.</p>
            <h3>1. 역사상 최고의 리턴</h3>
            <p>그의 리턴게임 승률은 타의 추종을 불허합니다. 상대의 퍼스트 서브조차 발밑으로 떨어뜨려 랠리 주도권을 가져옵니다.</p>
            <h3>2. 멘탈 몬스터</h3>
            <p>매치 포인트 위기에서도 흔들리지 않고 역전승을 일궈내는 그의 정신력은 연구 대상입니다.</p>

          </div>
          <div className="mt-12">
            <FAQ items={faqs} />
          </div>
          <RelatedPosts
            currentSlug="novak-djokovic"
            category="Player"
            tags={["테니스", "노박 조코비치", "Novak Djokovic", "GOAT", "세르비아"]}
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}

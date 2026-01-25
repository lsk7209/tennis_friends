import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "그리고르 디미트로프: 원핸드 백핸드의 낭만",
  description: "'베이비 페더러'에서 진정한 마스터로. 우아한 폼과 다재다능한 샷 메이킹을 가진 디미트로프의 제2의 전성기.",
  keywords: ["테니스","그리고르 디미트로프","Grigor Dimitrov","원핸드 백핸드","불가리아"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/grigor-dimitrov',
  },
  openGraph: {
    title: "그리고르 디미트로프: 원핸드 백핸드의 낭만",
    description: "'베이비 페더러'에서 진정한 마스터로. 우아한 폼과 다재다능한 샷 메이킹을 가진 디미트로프의 제2의 전성기.",
    url: 'https://tennisfriends.co.kr/blog/grigor-dimitrov',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "그리고르 디미트로프: 원핸드 백핸드의 낭만",
    description: "'베이비 페더러'에서 진정한 마스터로. 우아한 폼과 다재다능한 샷 메이킹을 가진 디미트로프의 제2의 전성기.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'section-1', text: '1. 주요 특징', depth: 2 },
  { id: 'section-2', text: '2. 플레이 스타일', depth: 2 },
  { id: 'conclusion', text: '결론', depth: 2 },
];

const faqs = [
  {
    "q": "디미트로프는 원핸드 백핸드인가요?",
    "a": "네, 투어에서 몇 남지 않은 정통 원핸드 백핸드 사용자입니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","그리고르 디미트로프","Grigor Dimitrov","원핸드 백핸드","불가리아"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            그리고르 디미트로프: 원핸드 백핸드의 낭만
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            '베이비 페더러'에서 진정한 마스터로. 우아한 폼과 다재다능한 샷 메이킹을 가진 디미트로프의 제2의 전성기.
          </p>
        </div>
      </div>

      <Article slug="grigor-dimitrov" date="2026-01-24" title="그리고르 디미트로프: 원핸드 백핸드의 낭만" excerpt="'베이비 페더러'에서 진정한 마스터로. 우아한 폼과 다재다능한 샷 메이킹을 가진 디미트로프의 제2의 전성기.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>불가리아의 영웅, 그리고르 디미트로프</h2>
      <p>데뷔 초 페더러와 닮은 폼으로 주목받았지만, 이제는 자신만의 영역을 구축했습니다. 그는 오랫동안 투어 상위권을 지키는 베테랑입니다.</p>
      <h3>1. 예술 같은 백핸드</h3>
      <p>그의 원핸드 백핸드는 파워와 각도 모두 일품입니다. 특히 수비 상황에서 슬라이스로 버티는 능력은 타의 추종을 불허합니다.</p>
      <h3>2. ATP 파이널스 챔피언</h3>
      <p>2017년 ATP 파이널스 우승은 그의 커리어 하이라이트입니다. 그는 큰 무대에서도 통하는 실력을 증명했습니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="grigor-dimitrov" 
            category="Player" 
            tags={["테니스","그리고르 디미트로프","Grigor Dimitrov","원핸드 백핸드","불가리아"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}

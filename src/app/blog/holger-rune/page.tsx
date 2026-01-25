import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "홀거 루네: 덴마크의 당돌한 신성",
  description: "거침없는 공격 본능과 넘치는 자신감. 알카라스, 시너와 함께 차세대를 이끌어갈 홀거 루네의 잠재력.",
  keywords: ["테니스","홀거 루네","Holger Rune","공격형","덴마크"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/holger-rune',
  },
  openGraph: {
    title: "홀거 루네: 덴마크의 당돌한 신성",
    description: "거침없는 공격 본능과 넘치는 자신감. 알카라스, 시너와 함께 차세대를 이끌어갈 홀거 루네의 잠재력.",
    url: 'https://tennisfriends.co.kr/blog/holger-rune',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "홀거 루네: 덴마크의 당돌한 신성",
    description: "거침없는 공격 본능과 넘치는 자신감. 알카라스, 시너와 함께 차세대를 이끌어갈 홀거 루네의 잠재력.",
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
    "q": "루네의 코치는?",
    "a": "보리스 베커, 패트릭 무라토글루 등 명장들의 지도를 받으며 성장했습니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","홀거 루네","Holger Rune","공격형","덴마크"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            홀거 루네: 덴마크의 당돌한 신성
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            거침없는 공격 본능과 넘치는 자신감. 알카라스, 시너와 함께 차세대를 이끌어갈 홀거 루네의 잠재력.
          </p>
        </div>
      </div>

      <Article slug="holger-rune" date="2026-01-24" title="홀거 루네: 덴마크의 당돌한 신성" excerpt="거침없는 공격 본능과 넘치는 자신감. 알카라스, 시너와 함께 차세대를 이끌어갈 홀거 루네의 잠재력.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>겁 없는 도전자, 홀거 루네</h2>
      <p>루네는 상대를 가리지 않고 자신의 플레이를 합니다. 때로는 과한 승부욕이 논란이 되기도 하지만, 그만큼 승리에 대한 집념이 강합니다.</p>
      <h3>1. 초공격적 리턴</h3>
      <p>그는 리턴 게임에서도 수비보다는 공격을 선택합니다. 베이스라인 안쪽으로 들어와서 때리는 리턴은 그의 상징입니다.</p>
      <h3>2. 다양성</h3>
      <p>강타뿐만 아니라 드롭샷, 네트 플레이 등 다양한 옵션을 가지고 있어 경기 운영이 다채롭습니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="holger-rune" 
            category="Player" 
            tags={["테니스","홀거 루네","Holger Rune","공격형","덴마크"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}

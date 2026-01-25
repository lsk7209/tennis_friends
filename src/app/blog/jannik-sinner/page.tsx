import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "야닉 시너: 이탈리아의 붉은 여우",
  description: "스키 선수 출신의 완벽한 밸런스. 강력한 양쪽 스트로크로 세계 1위를 향해 질주하는 야닉 시너.",
  keywords: ["테니스","야닉 시너","Jannik Sinner","세계1위","이탈리아"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/jannik-sinner',
  },
  openGraph: {
    title: "야닉 시너: 이탈리아의 붉은 여우",
    description: "스키 선수 출신의 완벽한 밸런스. 강력한 양쪽 스트로크로 세계 1위를 향해 질주하는 야닉 시너.",
    url: 'https://tennisfriends.co.kr/blog/jannik-sinner',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "야닉 시너: 이탈리아의 붉은 여우",
    description: "스키 선수 출신의 완벽한 밸런스. 강력한 양쪽 스트로크로 세계 1위를 향해 질주하는 야닉 시너.",
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
    "q": "시너가 스키 선수를 했었나요?",
    "a": "네, 어릴 적 이탈리아 스키 챔피언 출신으로, 테니스로 전향한 독특한 이력이 있습니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","야닉 시너","Jannik Sinner","세계1위","이탈리아"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            야닉 시너: 이탈리아의 붉은 여우
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            스키 선수 출신의 완벽한 밸런스. 강력한 양쪽 스트로크로 세계 1위를 향해 질주하는 야닉 시너.
          </p>
        </div>
      </div>

      <Article slug="jannik-sinner" date="2026-01-24" title="야닉 시너: 이탈리아의 붉은 여우" excerpt="스키 선수 출신의 완벽한 밸런스. 강력한 양쪽 스트로크로 세계 1위를 향해 질주하는 야닉 시너.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>새로운 시대의 제왕, 야닉 시너</h2>
      <p>시너는 알카라스와 함께 테니스의 미래를 이끌어갈 쌍두마차입니다. 냉철한 경기 운영과 강력한 멘탈이 돋보입니다.</p>
      <h3>1. 무결점 스트로크</h3>
      <p>포핸드와 백핸드 모두 약점이 없습니다. 랠리 싸움에서 그를 이길 수 있는 선수는 거의 없습니다.</p>
      <h3>2. 카로타 보이즈(Carota Boys)</h3>
      <p>그가 경기 중 당근을 먹는 모습에서 유래한 팬클럽 '카로타 보이즈'는 이제 전 세계적인 인기를 끌고 있습니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="jannik-sinner" 
            category="Player" 
            tags={["테니스","야닉 시너","Jannik Sinner","세계1위","이탈리아"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}

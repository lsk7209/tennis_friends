import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "다닐 메드베데프: 코트 위의 체스 마스터",
  description: "변칙적인 폼과 천재적인 전술. '문어'라 불리는 긴 팔다리로 모든 공을 받아내는 메드베데프의 독특한 테니스 세계.",
  keywords: ["테니스","다닐 메드베데프","Daniil Medvedev","전술","러시아"],
  alternates: {
    canonical: 'https://tennisfrens.com/blog/daniil-medvedev',
  },
  openGraph: {
    title: "다닐 메드베데프: 코트 위의 체스 마스터",
    description: "변칙적인 폼과 천재적인 전술. '문어'라 불리는 긴 팔다리로 모든 공을 받아내는 메드베데프의 독특한 테니스 세계.",
    url: 'https://tennisfrens.com/blog/daniil-medvedev',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "다닐 메드베데프: 코트 위의 체스 마스터",
    description: "변칙적인 폼과 천재적인 전술. '문어'라 불리는 긴 팔다리로 모든 공을 받아내는 메드베데프의 독특한 테니스 세계.",
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
    "q": "메드베데프가 가장 좋아하는 코트는?",
    "a": "하드 코트입니다. 반면 클레이 코트는 매우 싫어하는 것으로 유명합니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","다닐 메드베데프","Daniil Medvedev","전술","러시아"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            다닐 메드베데프: 코트 위의 체스 마스터
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            변칙적인 폼과 천재적인 전술. '문어'라 불리는 긴 팔다리로 모든 공을 받아내는 메드베데프의 독특한 테니스 세계.
          </p>
        </div>
      </div>

      <Article slug="daniil-medvedev" date="2026-01-24" title="다닐 메드베데프: 코트 위의 체스 마스터" excerpt="변칙적인 폼과 천재적인 전술. '문어'라 불리는 긴 팔다리로 모든 공을 받아내는 메드베데프의 독특한 테니스 세계.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>지능형 테니스의 정점, 다닐 메드베데프</h2>
      <p>메드베데프는 상대의 허를 찌르는 플레이를 즐깁니다. 그는 단순히 공을 치는 것이 아니라, 상대를 심리적으로 무너뜨리는 게임을 합니다.</p>
      <h3>1. 철벽 수비와 역습</h3>
      <p>그는 '벽'과 같습니다. 아무리 세게 쳐도 다 받아넘기며, 상대가 지쳐서 실수하게 만듭니다. 그러다 기회가 오면 날카로운 백핸드 다운더라인으로 끝냅니다.</p>
      <h3>2. 솔직한 캐릭터</h3>
      <p>관중과 싸우기도 하고 인터뷰에서 거침없는 입담을 과시하기도 합니다. 이런 솔직함이 그를 미워할 수 없는 악동 캐릭터로 만들었습니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="daniil-medvedev" 
            category="Player" 
            tags={["테니스","다닐 메드베데프","Daniil Medvedev","전술","러시아"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}

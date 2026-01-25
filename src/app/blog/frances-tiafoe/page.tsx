import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "프란시스 티아포: 흥이 넘치는 빅 포(Big Foe)",
  description: "코트 위를 무대로 만드는 쇼맨십. 미국 테니스의 희망 프란시스 티아포의 에너지 넘치는 플레이와 인생 스토리.",
  keywords: ["테니스","프란시스 티아포","Frances Tiafoe","쇼맨십","미국"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/frances-tiafoe',
  },
  openGraph: {
    title: "프란시스 티아포: 흥이 넘치는 빅 포(Big Foe)",
    description: "코트 위를 무대로 만드는 쇼맨십. 미국 테니스의 희망 프란시스 티아포의 에너지 넘치는 플레이와 인생 스토리.",
    url: 'https://tennisfriends.co.kr/blog/frances-tiafoe',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "프란시스 티아포: 흥이 넘치는 빅 포(Big Foe)",
    description: "코트 위를 무대로 만드는 쇼맨십. 미국 테니스의 희망 프란시스 티아포의 에너지 넘치는 플레이와 인생 스토리.",
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
    "q": "티아포의 별명은?",
    "a": "'Big Foe(빅 포)'입니다. 그의 성(Tiafoe)과 '큰 적(Foe)'이라는 중의적인 의미를 담고 있습니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","프란시스 티아포","Frances Tiafoe","쇼맨십","미국"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            프란시스 티아포: 흥이 넘치는 빅 포(Big Foe)
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            코트 위를 무대로 만드는 쇼맨십. 미국 테니스의 희망 프란시스 티아포의 에너지 넘치는 플레이와 인생 스토리.
          </p>
        </div>
      </div>

      <Article slug="frances-tiafoe" date="2026-01-24" title="프란시스 티아포: 흥이 넘치는 빅 포(Big Foe)" excerpt="코트 위를 무대로 만드는 쇼맨십. 미국 테니스의 희망 프란시스 티아포의 에너지 넘치는 플레이와 인생 스토리.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>감동과 재미를 주는 선수, 프란시스 티아포</h2>
      <p>시에라리온 이민자 가정에서 태어나 테니스 센터 관리실에서 자란 그의 인생 역정은 한 편의 영화 같습니다. 그는 이제 미국 테니스의 아이콘이 되었습니다.</p>
      <h3>1. 독특한 포핸드 메커니즘</h3>
      <p>그의 포핸드는 스윙이 짧고 빠릅니다. 교과서적이지는 않지만, 임팩트 순간의 폭발력은 어마어마합니다.</p>
      <h3>2. 최고의 엔터테이너</h3>
      <p>그는 승리 후 코트 인터뷰나 세리머니에서 항상 관중을 즐겁게 합니다. "사람들이 내 경기를 보며 미소 짓길 바란다"는 것이 그의 철학입니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="frances-tiafoe" 
            category="Player" 
            tags={["테니스","프란시스 티아포","Frances Tiafoe","쇼맨십","미국"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}

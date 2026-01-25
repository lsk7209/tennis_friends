import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "카스퍼 루드: 노르웨이의 차분한 암살자",
  description: "클레이 코트의 강자에서 올라운더로. 성실함과 꾸준함으로 세계 랭킹 2위까지 올랐던 카스퍼 루드의 테니스 철학.",
  keywords: ["테니스","카스퍼 루드","Casper Ruud","클레이","노르웨이"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/casper-ruud',
  },
  openGraph: {
    title: "카스퍼 루드: 노르웨이의 차분한 암살자",
    description: "클레이 코트의 강자에서 올라운더로. 성실함과 꾸준함으로 세계 랭킹 2위까지 올랐던 카스퍼 루드의 테니스 철학.",
    url: 'https://tennisfriends.co.kr/blog/casper-ruud',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "카스퍼 루드: 노르웨이의 차분한 암살자",
    description: "클레이 코트의 강자에서 올라운더로. 성실함과 꾸준함으로 세계 랭킹 2위까지 올랐던 카스퍼 루드의 테니스 철학.",
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
    "q": "루드는 나달 아카데미 출신인가요?",
    "a": "네, 스페인 마요르카의 라파엘 나달 아카데미에서 훈련하며 기량을 급성장시켰습니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","카스퍼 루드","Casper Ruud","클레이","노르웨이"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            카스퍼 루드: 노르웨이의 차분한 암살자
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            클레이 코트의 강자에서 올라운더로. 성실함과 꾸준함으로 세계 랭킹 2위까지 올랐던 카스퍼 루드의 테니스 철학.
          </p>
        </div>
      </div>

      <Article slug="casper-ruud" date="2026-01-24" title="카스퍼 루드: 노르웨이의 차분한 암살자" excerpt="클레이 코트의 강자에서 올라운더로. 성실함과 꾸준함으로 세계 랭킹 2위까지 올랐던 카스퍼 루드의 테니스 철학.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>북유럽의 태양, 카스퍼 루드</h2>
      <p>카스퍼 루드는 테니스 불모지였던 노르웨이에서 혜성처럼 등장한 영웅입니다. 그의 아버지 크리스티안 루드 역시 프로 테니스 선수였습니다.</p>
      <h3>1. 헤비 탑스핀 포핸드</h3>
      <p>루드의 포핸드는 엄청난 rpm의 회전이 걸려 바운드 후 높게 튀어 오릅니다. 이는 상대의 타점을 흔들어 실수를 유발하는 강력한 무기입니다.</p>
      <h3>2. 젠틀맨</h3>
      <p>그는 투어에서 가장 매너 좋은 선수 중 한 명으로 꼽힙니다. 심판 판정에 항의하거나 라켓을 부수는 모습을 거의 볼 수 없습니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="casper-ruud" 
            category="Player" 
            tags={["테니스","카스퍼 루드","Casper Ruud","클레이","노르웨이"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}

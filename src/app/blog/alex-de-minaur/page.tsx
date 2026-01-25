import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "알렉스 드 미노: 멈추지 않는 호주의 엔진",
  description: "지칠 줄 모르는 체력과 거미줄 같은 수비력. '데몬(Demon)'이라 불리는 알렉스 드 미노의 성장 배경과 플레이 스타일 분석.",
  keywords: ["테니스","알렉스 드 미노","Alex de Minaur","스피드","호주"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/alex-de-minaur',
  },
  openGraph: {
    title: "알렉스 드 미노: 멈추지 않는 호주의 엔진",
    description: "지칠 줄 모르는 체력과 거미줄 같은 수비력. '데몬(Demon)'이라 불리는 알렉스 드 미노의 성장 배경과 플레이 스타일 분석.",
    url: 'https://tennisfriends.co.kr/blog/alex-de-minaur',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "알렉스 드 미노: 멈추지 않는 호주의 엔진",
    description: "지칠 줄 모르는 체력과 거미줄 같은 수비력. '데몬(Demon)'이라 불리는 알렉스 드 미노의 성장 배경과 플레이 스타일 분석.",
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
    "q": "드 미노의 별명은?",
    "a": "'Demon(악마)'입니다. 발음이 비슷하기도 하고, 지독한 플레이 스타일 때문이기도 합니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","알렉스 드 미노","Alex de Minaur","스피드","호주"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            알렉스 드 미노: 멈추지 않는 호주의 엔진
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            지칠 줄 모르는 체력과 거미줄 같은 수비력. '데몬(Demon)'이라 불리는 알렉스 드 미노의 성장 배경과 플레이 스타일 분석.
          </p>
        </div>
      </div>

      <Article slug="alex-de-minaur" date="2026-01-24" title="알렉스 드 미노: 멈추지 않는 호주의 엔진" excerpt="지칠 줄 모르는 체력과 거미줄 같은 수비력. '데몬(Demon)'이라 불리는 알렉스 드 미노의 성장 배경과 플레이 스타일 분석.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>코트 위의 악마(Demon), 알렉스 드 미노</h2>
      <p>알렉스 드 미노는 호주 테니스의 투지를 잇는 차세대 기수입니다. 스페인과 호주를 오가며 성장한 그는 클레이 코트의 끈질김과 하드 코트의 스피드를 모두 갖췄습니다.</p>
      <h3>1. 발로 만드는 테니스</h3>
      <p>그의 경기를 보면 '저걸 어떻게 받아?'라는 감탄이 절로 나옵니다. 포기하지 않고 끝까지 쫓아가서 공을 넘기는 그의 수비 능력은 상대방을 절망하게 만듭니다.</p>
      <h3>2. 조용하지만 강한 멘탈</h3>
      <p>레이튼 휴이트의 멘토링을 받은 그는 코트 위에서 화려한 제스처보다는 묵묵히 자신의 할 일을 하는 스타일입니다. 이러한 차분함이 그를 큰 경기에서도 흔들리지 않게 만듭니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="alex-de-minaur" 
            category="Player" 
            tags={["테니스","알렉스 드 미노","Alex de Minaur","스피드","호주"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}

import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "오버헤드 스매시 완벽 가이드",
  "description": "확실한 포인트 마무리를 위한 스매시 기술. 풋워크, 타점,임팩트까지 단계별 분석.",
  "keywords": [
    "테니스 기술",
    "스매시",
    "Overhead",
    "오버헤드"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-overhead-smash-guide"
  },
  "openGraph": {
    "title": "오버헤드 스매시 완벽 가이드",
    "description": "확실한 포인트 마무리를 위한 스매시 기술. 풋워크, 타점, 임팩트까지 단계별 분석.",
    "url": "https://tennisfriends.co.kr/blog/tennis-overhead-smash-guide",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "오버헤드 스매시 완벽 가이드",
    "description": "확실한 포인트 마무리를 위한 스매시 기술. 풋워크, 타점, 임팩트까지 단계별 분석."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "footwork",
    "text": "풋워크",
    "depth": 2
  },
  {
    "id": "contact",
    "text": "타점",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "스매시 실수를 줄이려면?",
    "a": "조급하게 치지 말고, 공 아래로 충분히 이동한 뒤 여유 있게 치세요."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30">테니스 기술</Badge>
            <Badge className="bg-white/20 text-white border-white/30">스매시</Badge>
            <Badge className="bg-white/20 text-white border-white/30">Overhead</Badge>
            <Badge className="bg-white/20 text-white border-white/30">오버헤드</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">오버헤드 스매시 완벽 가이드</h1>
          <p className="text-xl text-blue-100 mb-8">확실한 포인트 마무리를 위한 스매시 기술. 풋워크, 타점,임팩트까지 단계별 분석.</p>
        </div>
      </div>
      <Article slug="tennis-overhead-smash-guide" date="2026-01-24" title="오버헤드 스매시 완벽 가이드" excerpt="확실한 포인트 마무리를 위한 스매시 기술. 풋워크, 타점,임팩트까지 단계별 분석.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="footwork">풋워크</h2><p>공 아래로 빠르게 이동하고, 옆으로 몸을 돌려 서브와 같은 자세를 만드세요.</p><h2 id="contact">타점</h2><p>최고점보다 약간 앞에서 치면 더 강력하고 정확합니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "경기 전 영양 섭취 가이드",
  "description": "경기 2시간 전 무엇을 먹어야 하나? 에너지와 컨디션을 최적화하는 식단 전략.",
  "keywords": [
    "테니스 건강",
    "영양",
    "식단",
    "경기 준비"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-nutrition-pre-match"
  },
  "openGraph": {
    "title": "경기 전 영양 섭취 가이드",
    "description": "경기 2시간 전 무엇을 먹어야 하나? 에너지와 컨디션을 최적화하는 식단 전략.",
    "url": "https://tennisfriends.co.kr/blog/tennis-nutrition-pre-match",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "경기 전 영양 섭취 가이드",
    "description": "경기 2시간 전 무엇을 먹어야 하나? 에너지와 컨디션을 최적화하는 식단 전략."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "before",
    "text": "경기 전 식사",
    "depth": 2
  },
  {
    "id": "during",
    "text": "경기 중 보충",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "경기 직전에 먹으면 안 되는 음식은?",
    "a": "기름진 음식, 탄산음료, 과도한 유제품은 피하세요."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30">테니스 건강</Badge>
            <Badge className="bg-white/20 text-white border-white/30">영양</Badge>
            <Badge className="bg-white/20 text-white border-white/30">식단</Badge>
            <Badge className="bg-white/20 text-white border-white/30">경기 준비</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">경기 전 영양 섭취 가이드</h1>
          <p className="text-xl text-blue-100 mb-8">경기 2시간 전 무엇을 먹어야 하나? 에너지와 컨디션을 최적화하는 식단 전략.</p>
        </div>
      </div>
      <Article slug="tennis-nutrition-pre-match" date="2026-01-24" title="경기 전 영양 섭취 가이드" excerpt="경기 2시간 전 무엇을 먹어야 하나? 에너지와 컨디션을 최적화하는 식단 전략.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="before">경기 전 식사 (2-3시간 전)</h2><p>복합 탄수화물(현미, 통밀빵)과 적당한 단백질(닭가슴살)을 섭취하세요. 소화가 빠른 음식을 선택합니다.</p><h2 id="during">경기 중 보충</h2><p>바나나, 에너지바, 스포츠 음료로 빠르게 에너지를 보충하세요.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
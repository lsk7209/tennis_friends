import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "진동 흡수기(댐퍼)의 효과와 선택",
  "description": "정말 효과가 있나? 과학적 분석과 선수들의 사용 이유, 추천 제품까지.",
  "keywords": [
    "테니스 장비",
    "댐퍼",
    "진동 흡수기",
    "효과"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-dampener-effectiveness"
  },
  "openGraph": {
    "title": "진동 흡수기(댐퍼)의 효과와 선택",
    "description": "정말 효과가 있나? 과학적 분석과 선수들의 사용 이유, 추천 제품까지.",
    "url": "https://tennisfriends.co.kr/blog/tennis-dampener-effectiveness",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "진동 흡수기(댐퍼)의 효과와 선택",
    "description": "정말 효과가 있나? 과학적 분석과 선수들의 사용 이유, 추천 제품까지."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "effect",
    "text": "실제 효과",
    "depth": 2
  },
  {
    "id": "choice",
    "text": "선택 방법",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "댐퍼는 필수인가요?",
    "a": "아니요, 선택 사항입니다. 소리가 신경 쓰이거나 진동을 줄이고 싶으면 사용하세요."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30">테니스 장비</Badge>
            <Badge className="bg-white/20 text-white border-white/30">댐퍼</Badge>
            <Badge className="bg-white/20 text-white border-white/30">진동 흡수기</Badge>
            <Badge className="bg-white/20 text-white border-white/30">효과</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">진동 흡수기(댐퍼)의 효과와 선택</h1>
          <p className="text-xl text-blue-100 mb-8">정말 효과가 있나? 과학적 분석과 선수들의 사용 이유, 추천 제품까지.</p>
        </div>
      </div>
      <Article slug="tennis-dampener-effectiveness" date="2026-01-24" title="진동 흡수기(댐퍼)의 효과와 선택" excerpt="정말 효과가 있나? 과학적 분석과 선수들의 사용 이유, 추천 제품까지.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="effect">실제 효과</h2><p>연구에 따르면 큰 진동 감소 효과는 없지만, "핑" 소리를 줄여주어 심리적 안정감을 줍니다.</p><h2 id="choice">선택 방법</h2><p>가벼운 것을 선택하세요. 무거우면 라켓 밸런스가 변합니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "그립 사이즈 선택 가이드",
  "description": "너무 크거나 작으면 부상 위험. 정확한 그립 사이즈 측정법과 선택 기준.",
  "keywords": [
    "테니스 장비",
    "그립",
    "사이즈",
    "라켓"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-grip-size-selection"
  },
  "openGraph": {
    "title": "그립 사이즈 선택 가이드",
    "description": "너무 크거나 작으면 부상 위험. 정확한 그립 사이즈 측정법과 선택 기준.",
    "url": "https://tennisfriends.co.kr/blog/tennis-grip-size-selection",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "그립 사이즈 선택 가이드",
    "description": "너무 크거나 작으면 부상 위험. 정확한 그립 사이즈 측정법과 선택 기준."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "measure",
    "text": "측정 방법",
    "depth": 2
  },
  {
    "id": "choose",
    "text": "선택 기준",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "손가락이 손바닥에 닿아야 하나요?",
    "a": "약 1cm 정도의 공간이 있어야 적절합니다. 너무 딱 맞으면 작은 것입니다."
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
            <Badge className="bg-white/20 text-white border-white/30">그립</Badge>
            <Badge className="bg-white/20 text-white border-white/30">사이즈</Badge>
            <Badge className="bg-white/20 text-white border-white/30">라켓</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">그립 사이즈 선택 가이드</h1>
          <p className="text-xl text-blue-100 mb-8">너무 크거나 작으면 부상 위험. 정확한 그립 사이즈 측정법과 선택 기준.</p>
        </div>
      </div>
      <Article slug="tennis-grip-size-selection" date="2026-01-24" title="그립 사이즈 선택 가이드" excerpt="너무 크거나 작으면 부상 위험. 정확한 그립 사이즈 측정법과 선택 기준.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="measure">측정 방법</h2><p>손바닥 중앙에서 약지 끝까지 자로 재면 인치 단위로 그립 사이즈가 나옵니다.</p><h2 id="choose">선택 기준</h2><p>애매하면 작은 사이즈를 선택하세요. 오버그립으로 두께를 늘릴 수 있습니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
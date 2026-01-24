import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "오버그립 완벽 가이드",
  "description": "땀 흡수와 그립감 개선의 필수 아이템. 종류별 특징과 교체 주기, 감는 방법까지.",
  "keywords": [
    "테니스 장비",
    "오버그립",
    "그립",
    "교체"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-overgrip-guide"
  },
  "openGraph": {
    "title": "오버그립 완벽 가이드",
    "description": "땀 흡수와 그립감 개선의 필수 아이템. 종류별 특징과 교체 주기, 감는 방법까지.",
    "url": "https://tennisfriends.co.kr/blog/tennis-overgrip-guide",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "오버그립 완벽 가이드",
    "description": "땀 흡수와 그립감 개선의 필수 아이템. 종류별 특징과 교체 주기, 감는 방법까지."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "types",
    "text": "오버그립 종류",
    "depth": 2
  },
  {
    "id": "change",
    "text": "교체 주기",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "얼마나 자주 교체하나요?",
    "a": "주 3회 이상 치면 1-2주마다, 그 이하면 한 달에 한 번 정도 교체하세요."
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
            <Badge className="bg-white/20 text-white border-white/30">오버그립</Badge>
            <Badge className="bg-white/20 text-white border-white/30">그립</Badge>
            <Badge className="bg-white/20 text-white border-white/30">교체</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">오버그립 완벽 가이드</h1>
          <p className="text-xl text-blue-100 mb-8">땀 흡수와 그립감 개선의 필수 아이템. 종류별 특징과 교체 주기, 감는 방법까지.</p>
        </div>
      </div>
      <Article slug="tennis-overgrip-guide" date="2026-01-24" title="오버그립 완벽 가이드" excerpt="땀 흡수와 그립감 개선의 필수 아이템. 종류별 특징과 교체 주기, 감는 방법까지.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="types">오버그립 종류</h2><p>땀 흡수형(Tacky)과 드라이형이 있습니다. 손에 땀이 많으면 드라이형을 추천합니다.</p><h2 id="change">교체 주기</h2><p>오버그립이 헤지거나 미끄러우면 즉시 교체하세요. 부상 예방이 최우선입니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
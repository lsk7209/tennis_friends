import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "바람 부는 날 테니스 실전 가이드",
  "description": "바람 많은 날에도 일관성을 유지하는 법. 토스 조정, 스핀 활용, 멘탈 관리까지.",
  "keywords": [
    "테니스 전술",
    "바람",
    "날씨",
    "멘탈"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-windy-condition-tips"
  },
  "openGraph": {
    "title": "바람 부는 날 테니스 실전 가이드",
    "description": "바람 많은 날에도 일관성을 유지하는 법. 토스 조정, 스핀 활용, 멘탈 관리까지.",
    "url": "https://tennisfriends.co.kr/blog/tennis-windy-condition-tips",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "바람 부는 날 테니스 실전 가이드",
    "description": "바람 많은 날에도 일관성을 유지하는 법. 토스 조정, 스핀 활용, 멘탈 관리까지."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "serve",
    "text": "서브 토스 조정",
    "depth": 2
  },
  {
    "id": "groundstroke",
    "text": "그라운드 스트로크",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "바람 부는 날 토스 높이는?",
    "a": "평소보다 낮게 토스하고, 바람 방향을 고려하여 앞이나 뒤로 조정합니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30">테니스 전술</Badge>
            <Badge className="bg-white/20 text-white border-white/30">바람</Badge>
            <Badge className="bg-white/20 text-white border-white/30">날씨</Badge>
            <Badge className="bg-white/20 text-white border-white/30">멘탈</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">바람 부는 날 테니스 실전 가이드</h1>
          <p className="text-xl text-blue-100 mb-8">바람 많은 날에도 일관성을 유지하는 법. 토스 조정, 스핀 활용, 멘탈 관리까지.</p>
        </div>
      </div>
      <Article slug="tennis-windy-condition-tips" date="2026-01-24" title="바람 부는 날 테니스 실전 가이드" excerpt="바람 많은 날에도 일관성을 유지하는 법. 토스 조정, 스핀 활용, 멘탈 관리까지.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="serve">서브 토스 조정</h2><p>바람이 강하면 토스를 낮게 하고, 바람 방향에 따라 토스 위치를 앞뒤로 미세 조정하세요.</p><h2 id="groundstroke">그라운드 스트로크</h2><p>탑스핀을 더 많이 걸어 공이 날아가지 않도록 안정성을 높이세요.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
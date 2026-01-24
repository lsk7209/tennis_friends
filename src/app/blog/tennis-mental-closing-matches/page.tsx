import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "경기 마무리 멘탈 관리법",
  "description": "5-3에서 패배하는 이유. 리드를 지키고 경기를 확실히 마무리하는 멘탈 전략.",
  "keywords": [
    "테니스 멘탈",
    "종료 능력",
    "집중력",
    "경기 운영"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-mental-closing-matches"
  },
  "openGraph": {
    "title": "경기 마무리 멘탈 관리법",
    "description": "5-3에서 패배하는 이유. 리드를 지키고 경기를 확실히 마무리하는 멘탈 전략.",
    "url": "https://tennisfriends.co.kr/blog/tennis-mental-closing-matches",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "경기 마무리 멘탈 관리법",
    "description": "5-3에서 패배하는 이유. 리드를 지키고 경기를 확실히 마무리하는 멘탈 전략."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "problem",
    "text": "문제 원인",
    "depth": 2
  },
  {
    "id": "solution",
    "text": "해결 전략",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "리드하다 역전당하는 이유는?",
    "a": "조급함과 과도한 긴장으로 평소 플레이를 못하기 때문입니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30">테니스 멘탈</Badge>
            <Badge className="bg-white/20 text-white border-white/30">종료 능력</Badge>
            <Badge className="bg-white/20 text-white border-white/30">집중력</Badge>
            <Badge className="bg-white/20 text-white border-white/30">경기 운영</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">경기 마무리 멘탈 관리법</h1>
          <p className="text-xl text-blue-100 mb-8">5-3에서 패배하는 이유. 리드를 지키고 경기를 확실히 마무리하는 멘탈 전략.</p>
        </div>
      </div>
      <Article slug="tennis-mental-closing-matches" date="2026-01-24" title="경기 마무리 멘탈 관리법" excerpt="5-3에서 패배하는 이유. 리드를 지키고 경기를 확실히 마무리하는 멘탈 전략.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="problem">문제 원인</h2><p>이기려는 욕심에 평소와 다른 플레이를 시도하거나, 너무 안전하게만 쳐서 주도권을 내줍니다.</p><h2 id="solution">해결 전략</h2><p>"한 포인트씩"만 생각하세요. 이기고 있다는 생각을 버리고 0-0처럼 집중합니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
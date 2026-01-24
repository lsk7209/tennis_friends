import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "스트링 텐션 완벽 가이드",
  "description": "높은 텐션 vs 낮은 텐션. 파워, 컨트롤, 스핀에 미치는 영향과 나에게 맞는 텐션 찾기.",
  "keywords": [
    "테니스 장비",
    "스트링",
    "텐션",
    "가이드"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-string-tension-guide"
  },
  "openGraph": {
    "title": "스트링 텐션 완벽 가이드",
    "description": "높은 텐션 vs 낮은 텐션. 파워, 컨트롤, 스핀에 미치는 영향과 나에게 맞는 텐션 찾기.",
    "url": "https://tennisfriends.co.kr/blog/tennis-string-tension-guide",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "스트링 텐션 완벽 가이드",
    "description": "높은 텐션 vs 낮은 텐션. 파워, 컨트롤, 스핀에 미치는 영향과 나에게 맞는 텐션 찾기."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "high",
    "text": "높은 텐션",
    "depth": 2
  },
  {
    "id": "low",
    "text": "낮은 텐션",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "초보자에게 추천하는 텐션은?",
    "a": "중간 정도(50-55lbs)에서 시작해 자신의 스타일에 맞춰 조정하세요."
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
            <Badge className="bg-white/20 text-white border-white/30">스트링</Badge>
            <Badge className="bg-white/20 text-white border-white/30">텐션</Badge>
            <Badge className="bg-white/20 text-white border-white/30">가이드</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">스트링 텐션 완벽 가이드</h1>
          <p className="text-xl text-blue-100 mb-8">높은 텐션 vs 낮은 텐션. 파워, 컨트롤, 스핀에 미치는 영향과 나에게 맞는 텐션 찾기.</p>
        </div>
      </div>
      <Article slug="tennis-string-tension-guide" date="2026-01-24" title="스트링 텐션 완벽 가이드" excerpt="높은 텐션 vs 낮은 텐션. 파워, 컨트롤, 스핀에 미치는 영향과 나에게 맞는 텐션 찾기.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="high">높은 텐션 (55lbs+)</h2><p>컨트롤이 좋지만 파워가 줄어듭니다. 풀 스윙을 하는 상급자에게 적합합니다.</p><h2 id="low">낮은 텐션 (45-50lbs)</h2><p>파워와 편안함이 증가하지만 컨트롤이 어려워집니다. 초중급자에게 추천합니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
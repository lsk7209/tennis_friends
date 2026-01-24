import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "서브 리턴 전략 완벽 가이드",
  "description": "경기의 50%를 차지하는 리턴 게임. 위치 선택, 스플릿 스텝, 리턴 코스 전략까지.",
  "keywords": [
    "테니스 전술",
    "서브 리턴",
    "Return",
    "전략"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-return-of-serve-strategy"
  },
  "openGraph": {
    "title": "서브 리턴 전략 완벽 가이드",
    "description": "경기의 50%를 차지하는 리턴 게임. 위치 선택, 스플릿 스텝, 리턴 코스 전략까지.",
    "url": "https://tennisfriends.co.kr/blog/tennis-return-of-serve-strategy",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "서브 리턴 전략 완벽 가이드",
    "description": "경기의 50%를 차지하는 리턴 게임. 위치 선택, 스플릿 스텝, 리턴 코스 전략까지."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "position",
    "text": "위치 선택",
    "depth": 2
  },
  {
    "id": "split",
    "text": "스플릿 스텝",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "리턴 위치는 어디가 좋나요?",
    "a": "베이스라인 안쪽에서 시작해, 상대 서브 스피드에 따라 조정합니다."
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
            <Badge className="bg-white/20 text-white border-white/30">서브 리턴</Badge>
            <Badge className="bg-white/20 text-white border-white/30">Return</Badge>
            <Badge className="bg-white/20 text-white border-white/30">전략</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">서브 리턴 전략 완벽 가이드</h1>
          <p className="text-xl text-blue-100 mb-8">경기의 50%를 차지하는 리턴 게임. 위치 선택, 스플릿 스텝, 리턴 코스 전략까지.</p>
        </div>
      </div>
      <Article slug="tennis-return-of-serve-strategy" date="2026-01-24" title="서브 리턴 전략 완벽 가이드" excerpt="경기의 50%를 차지하는 리턴 게임. 위치 선택, 스플릿 스텝, 리턴 코스 전략까지.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="position">위치 선택</h2><p>상대 서브가 느리면 앞으로, 빠르면 뒤로 조정하세요. 중요한 건 일관성입니다.</p><h2 id="split">스플릿 스텝</h2><p>상대가 공을 치는 순간 작게 점프하여 빠르게 반응할 준비를 하세요.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
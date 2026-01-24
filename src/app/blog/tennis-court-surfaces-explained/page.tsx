import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "코트 표면별 전략: 하드, 클레이, 잔디",
  "description": "하드, 클레이, 잔디 코트의 특성과 각 코트에서의 최적 전략. 슈즈 선택부터 전술까지.",
  "keywords": [
    "테니스 상식",
    "코트 표면",
    "하드 코트",
    "클레이 코트",
    "잔디 코트"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-court-surfaces-explained"
  },
  "openGraph": {
    "title": "코트 표면별 전략: 하드, 클레이, 잔디",
    "description": "하드, 클레이, 잔디 코트의 특성과 각 코트에서의 최적 전략. 슈즈 선택부터 전술까지.",
    "url": "https://tennisfriends.co.kr/blog/tennis-court-surfaces-explained",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "코트 표면별 전략: 하드, 클레이, 잔디",
    "description": "하드, 클레이, 잔디 코트의 특성과 각 코트에서의 최적 전략. 슈즈 선택부터 전술까지."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "hard",
    "text": "하드 코트",
    "depth": 2
  },
  {
    "id": "clay",
    "text": "클레이 코트",
    "depth": 2
  },
  {
    "id": "grass",
    "text": "잔디 코트",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "코트 표면별 특성은?",
    "a": "하드는 중간 속도, 클레이는 느리고 높게 튀며, 잔디는 빠르고 낮게 튕깁니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30">테니스 상식</Badge>
            <Badge className="bg-white/20 text-white border-white/30">코트 표면</Badge>
            <Badge className="bg-white/20 text-white border-white/30">하드 코트</Badge>
            <Badge className="bg-white/20 text-white border-white/30">클레이 코트</Badge>
            <Badge className="bg-white/20 text-white border-white/30">잔디 코트</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">코트 표면별 전략: 하드, 클레이, 잔디</h1>
          <p className="text-xl text-blue-100 mb-8">하드, 클레이, 잔디 코트의 특성과 각 코트에서의 최적 전략. 슈즈 선택부터 전술까지.</p>
        </div>
      </div>
      <Article slug="tennis-court-surfaces-explained" date="2026-01-24" title="코트 표면별 전략: 하드, 클레이, 잔디" excerpt="하드, 클레이, 잔디 코트의 특성과 각 코트에서의 최적 전략. 슈즈 선택부터 전술까지.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="hard">하드 코트</h2><p>가장 보편적이며, 반발이 일정합니다. 올라운드 플레이어에게 유리합니다.</p><h2 id="clay">클레이 코트</h2><p>공이 느리게 튀고 슬라이딩이 가능합니다. 긴 랠리가 이어지며 체력이 중요합니다.</p><h2 id="grass">잔디 코트</h2><p>공이 빠르고 낮게 튕기며, 서브 앤 발리가 유리합니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
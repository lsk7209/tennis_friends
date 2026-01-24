import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "테니스 점수 체계의 역사: 왜 15-30-40인가?",
  "description": "15, 30, 40의 비밀과 듀스, 애드밴티지의 유래. 테니스 스코어링의 흥미로운 역사.",
  "keywords": [
    "테니스 상식",
    "역사",
    "스코어",
    "점수"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/history-of-tennis-scoring"
  },
  "openGraph": {
    "title": "테니스 점수 체계의 역사: 왜 15-30-40인가?",
    "description": "15, 30, 40의 비밀과 듀스, 애드밴티지의 유래. 테니스 스코어링의 흥미로운 역사.",
    "url": "https://tennisfriends.co.kr/blog/history-of-tennis-scoring",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "테니스 점수 체계의 역사: 왜 15-30-40인가?",
    "description": "15, 30, 40의 비밀과 듀스, 애드밴티지의 유래. 테니스 스코어링의 흥미로운 역사."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "origin",
    "text": "점수의 기원",
    "depth": 2
  },
  {
    "id": "deuce",
    "text": "듀스의 유래",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "왜 45가 아니라 40인가요?",
    "a": "발음의 편의성 때문입니다. \"Forty-Five\"는 길어서 \"Forty\"로 줄였습니다."
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
            <Badge className="bg-white/20 text-white border-white/30">역사</Badge>
            <Badge className="bg-white/20 text-white border-white/30">스코어</Badge>
            <Badge className="bg-white/20 text-white border-white/30">점수</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">테니스 점수 체계의 역사: 왜 15-30-40인가?</h1>
          <p className="text-xl text-blue-100 mb-8">15, 30, 40의 비밀과 듀스, 애드밴티지의 유래. 테니스 스코어링의 흥미로운 역사.</p>
        </div>
      </div>
      <Article slug="history-of-tennis-scoring" date="2026-01-24" title="테니스 점수 체계의 역사: 왜 15-30-40인가?" excerpt="15, 30, 40의 비밀과 듀스, 애드밴티지의 유래. 테니스 스코어링의 흥미로운 역사.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="origin">점수의 기원</h2><p>중세 프랑스에서 시계 문자판(60분)을 사용했다는 설이 유력합니다. 15분, 30분, 45분(후에 40분)으로 진행했습니다.</p><h2 id="deuce">듀스의 유래</h2><p>프랑스어 "à deux"(둘다)에서 유래했습니다. 두 선수가 동점이라는 의미입니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
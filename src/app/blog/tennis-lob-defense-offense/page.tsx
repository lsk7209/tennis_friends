import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "로브 활용법: 수비와 공격",
  "description": "수비 로브와 공격 로브의 차이. 상황에 따른 로브 전술과 실전 연습법.",
  "keywords": [
    "테니스 기술",
    "로브",
    "Lob",
    "전술"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-lob-defense-offense"
  },
  "openGraph": {
    "title": "로브 활용법: 수비와 공격",
    "description": "수비 로브와 공격 로브의 차이. 상황에 따른 로브 전술과 실전 연습법.",
    "url": "https://tennisfriends.co.kr/blog/tennis-lob-defense-offense",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "로브 활용법: 수비와 공격",
    "description": "수비 로브와 공격 로브의 차이. 상황에 따른 로브 전술과 실전 연습법."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "defense",
    "text": "수비 로브",
    "depth": 2
  },
  {
    "id": "offense",
    "text": "공격 로브",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "수비 로브와 공격 로브 차이는?",
    "a": "수비 로브는 높고 깊게, 공격 로브는 낮고 빠르게 보냅니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30">테니스 기술</Badge>
            <Badge className="bg-white/20 text-white border-white/30">로브</Badge>
            <Badge className="bg-white/20 text-white border-white/30">Lob</Badge>
            <Badge className="bg-white/20 text-white border-white/30">전술</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">로브 활용법: 수비와 공격</h1>
          <p className="text-xl text-blue-100 mb-8">수비 로브와 공격 로브의 차이. 상황에 따른 로브 전술과 실전 연습법.</p>
        </div>
      </div>
      <Article slug="tennis-lob-defense-offense" date="2026-01-24" title="로브 활용법: 수비와 공격" excerpt="수비 로브와 공격 로브의 차이. 상황에 따른 로브 전술과 실전 연습법.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="defense">수비 로브</h2><p>위기 상황에서 시간을 버는 용도. 최대한 높이 띄워서 상대가 스매싱하기 어렵게 만듭니다.</p><h2 id="offense">공격 로브</h2><p>네트에 붙은 상대의 머리 위로 빠르게 넘기는 공격적인 샷. 상대가 뒤로 돌아가지 못하면 포인트를 따냅니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
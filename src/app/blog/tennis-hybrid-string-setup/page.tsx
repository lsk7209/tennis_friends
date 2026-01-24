import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "하이브리드 스트링 세팅 가이드",
  "description": "메인과 크로스를 다르게. 폴리 + 멀티필라멘트 조합의 장점과 추천 세팅.",
  "keywords": [
    "테니스 장비",
    "하이브리드",
    "스트링",
    "세팅"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-hybrid-string-setup"
  },
  "openGraph": {
    "title": "하이브리드 스트링 세팅 가이드",
    "description": "메인과 크로스를 다르게. 폴리 + 멀티필라멘트 조합의 장점과 추천 세팅.",
    "url": "https://tennisfriends.co.kr/blog/tennis-hybrid-string-setup",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "하이브리드 스트링 세팅 가이드",
    "description": "메인과 크로스를 다르게. 폴리 + 멀티필라멘트 조합의 장점과 추천 세팅."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "why",
    "text": "왜 하이브리드?",
    "depth": 2
  },
  {
    "id": "combo",
    "text": "추천 조합",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "하이브리드의 장점은?",
    "a": "폴리의 스핀과 멀티필라멘트의 편안함을 동시에 얻을 수 있습니다."
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
            <Badge className="bg-white/20 text-white border-white/30">하이브리드</Badge>
            <Badge className="bg-white/20 text-white border-white/30">스트링</Badge>
            <Badge className="bg-white/20 text-white border-white/30">세팅</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">하이브리드 스트링 세팅 가이드</h1>
          <p className="text-xl text-blue-100 mb-8">메인과 크로스를 다르게. 폴리 + 멀티필라멘트 조합의 장점과 추천 세팅.</p>
        </div>
      </div>
      <Article slug="tennis-hybrid-string-setup" date="2026-01-24" title="하이브리드 스트링 세팅 가이드" excerpt="메인과 크로스를 다르게. 폴리 + 멀티필라멘트 조합의 장점과 추천 세팅.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="why">왜 하이브리드?</h2><p>폴리스트링만 사용하면 팔이 아플 수 있습니다. 하이브리드는 스핀과 편안함을 동시에 제공합니다.</p><h2 id="combo">추천 조합</h2><p>메인에 폴리, 크로스에 멀티필라멘트 또는 내츄럴 거트가 가장 인기 있는 조합입니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "테니스 가방 필수품 체크리스트",
  "description": "라켓만 챙기면 끝? 잊지 말아야 할 필수 아이템과 추천 준비물까지.",
  "keywords": [
    "테니스 장비",
    "가방",
    "체크리스트",
    "준비물"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-bag-essentials-checklist"
  },
  "openGraph": {
    "title": "테니스 가방 필수품 체크리스트",
    "description": "라켓만 챙기면 끝? 잊지 말아야 할 필수 아이템과 추천 준비물까지.",
    "url": "https://tennisfriends.co.kr/blog/tennis-bag-essentials-checklist",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "테니스 가방 필수품 체크리스트",
    "description": "라켓만 챙기면 끝? 잊지 말아야 할 필수 아이템과 추천 준비물까지."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "must",
    "text": "필수 아이템",
    "depth": 2
  },
  {
    "id": "extra",
    "text": "추가 추천",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "라켓은 몇 개 챙겨야 하나요?",
    "a": "최소 2개를 추천합니다. 스트링이 끊어질 경우를 대비해야 합니다."
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
            <Badge className="bg-white/20 text-white border-white/30">가방</Badge>
            <Badge className="bg-white/20 text-white border-white/30">체크리스트</Badge>
            <Badge className="bg-white/20 text-white border-white/30">준비물</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">테니스 가방 필수품 체크리스트</h1>
          <p className="text-xl text-blue-100 mb-8">라켓만 챙기면 끝? 잊지 말아야 할 필수 아이템과 추천 준비물까지.</p>
        </div>
      </div>
      <Article slug="tennis-bag-essentials-checklist" date="2026-01-24" title="테니스 가방 필수품 체크리스트" excerpt="라켓만 챙기면 끝? 잊지 말아야 할 필수 아이템과 추천 준비물까지.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="must">필수 아이템</h2><p>라켓 2개, 테니스화, 물, 수건, 여벌 옷, 오버그립, 손목·머리 밴드는 반드시 챙기세요.</p><h2 id="extra">추가 추천</h2><p>선크림, 모자, 에너지바, 테이핑, 진통제도 가방에 넣어두면 유용합니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "왼손잡이 상대 공략법",
  "description": "왼손잡이 특유의 스핀과 각도에 대응하는 전략. 서브 리턴부터 백핸드 대각선 공략까지 실전 팁.",
  "keywords": [
    "테니스 전술",
    "왼손잡이",
    "Lefty",
    "전략"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-strategy-vs-lefty"
  },
  "openGraph": {
    "title": "왼손잡이 상대 공략법",
    "description": "왼손잡이 특유의 스핀과 각도에 대응하는 전략. 서브 리턴부터 백핸드 대각선 공략까지 실전 팁.",
    "url": "https://tennisfriends.co.kr/blog/tennis-strategy-vs-lefty",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "왼손잡이 상대 공략법",
    "description": "왼손잡이 특유의 스핀과 각도에 대응하는 전략. 서브 리턴부터 백핸드 대각선 공략까지 실전 팁."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "intro",
    "text": "왼손잡이의 특징",
    "depth": 2
  },
  {
    "id": "serve",
    "text": "서브 리턴 전략",
    "depth": 2
  },
  {
    "id": "rally",
    "text": "랠리 전략",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "왼손잡이가 어려운 이유는?",
    "a": "오른손잡이가 익숙한 각도와 스핀이 반대로 나오기 때문입니다. 특히 슬라이스 서브가 반대 방향으로 휘어져 당황하기 쉽습니다."
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
            <Badge className="bg-white/20 text-white border-white/30">왼손잡이</Badge>
            <Badge className="bg-white/20 text-white border-white/30">Lefty</Badge>
            <Badge className="bg-white/20 text-white border-white/30">전략</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">왼손잡이 상대 공략법</h1>
          <p className="text-xl text-blue-100 mb-8">왼손잡이 특유의 스핀과 각도에 대응하는 전략. 서브 리턴부터 백핸드 대각선 공략까지 실전 팁.</p>
        </div>
      </div>
      <Article slug="tennis-strategy-vs-lefty" date="2026-01-24" title="왼손잡이 상대 공략법" excerpt="왼손잡이 특유의 스핀과 각도에 대응하는 전략. 서브 리턴부터 백핸드 대각선 공략까지 실전 팁.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="intro">왼손잡이의 특징</h2><p>왼손잡이는 전체 인구의 10%에 불과하므로, 대다수 선수는 왼손잡이와의 경기 경험이 부족합니다. 이 불편함을 극복하는 것이 핵심입니다.</p><h2 id="serve">서브 리턴 전략</h2><p>왼손잡이의 슬라이스 서브는 오른손잡이와 반대로 휘어집니다. 듀스 코트에서는 몸 쪽으로 파고들고, 애드 코트에서는 바깥으로 빠져나갑니다. 미리 예측하고 포지션을 조정하세요.</p><h2 id="rally">랠리 전략</h2><p>그들의 포핸드 크로스(당신 입장에서 백핸드)를 공략하세요. 왼손잡이는 이쪽 각도에 익숙하지 않습니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
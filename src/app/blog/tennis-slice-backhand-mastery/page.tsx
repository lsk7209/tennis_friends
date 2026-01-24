import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "슬라이스 백핸드 활용법",
  "description": "변화와 리듬 조절의 핵심 슬라이스. 언제 어떻게 사용할지, 실전 전술과 연습 드릴.",
  "keywords": [
    "테니스 기술",
    "슬라이스",
    "Slice",
    "백핸드"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-slice-backhand-mastery"
  },
  "openGraph": {
    "title": "슬라이스 백핸드 활용법",
    "description": "변화와 리듬 조절의 핵심 슬라이스. 언제 어떻게 사용할지, 실전 전술과 연습 드릴.",
    "url": "https://tennisfriends.co.kr/blog/tennis-slice-backhand-mastery",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "슬라이스 백핸드 활용법",
    "description": "변화와 리듬 조절의 핵심 슬라이스. 언제 어떻게 사용할지, 실전 전술과 연습 드릴."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "use",
    "text": "슬라이스 활용 시기",
    "depth": 2
  },
  {
    "id": "technique",
    "text": "기술",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "슬라이스는 언제 쓰나요?",
    "a": "수비 상황, 어프로치 샷, 또는 상대 리듬을 깨고 싶을 때 유용합니다."
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
            <Badge className="bg-white/20 text-white border-white/30">슬라이스</Badge>
            <Badge className="bg-white/20 text-white border-white/30">Slice</Badge>
            <Badge className="bg-white/20 text-white border-white/30">백핸드</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">슬라이스 백핸드 활용법</h1>
          <p className="text-xl text-blue-100 mb-8">변화와 리듬 조절의 핵심 슬라이스. 언제 어떻게 사용할지, 실전 전술과 연습 드릴.</p>
        </div>
      </div>
      <Article slug="tennis-slice-backhand-mastery" date="2026-01-24" title="슬라이스 백핸드 활용법" excerpt="변화와 리듬 조절의 핵심 슬라이스. 언제 어떻게 사용할지, 실전 전술과 연습 드릴.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="use">슬라이스 활용 시기</h2><p>상대가 베이스라인 깊숙이 강타할 때, 슬라이스로 낮고 짧게 넘기면 상대는 공을 들어 올려야 해서 공격이 어려워집니다.</p><h2 id="technique">기술</h2><p>라켓을 위에서 아래로 베어 내리며, 백스핀을 걸어야 합니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "드롭샷 마스터하기",
  "description": "절묘한 타이밍과 터치로 승부를 가르는 드롭샷. 언제 사용할지, 어떻게 숨길지 완벽 가이드.",
  "keywords": [
    "테니스 기술",
    "드롭샷",
    "Drop Shot",
    "터치"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-drop-shot-mastery"
  },
  "openGraph": {
    "title": "드롭샷 마스터하기",
    "description": "절묘한 타이밍과 터치로 승부를 가르는 드롭샷. 언제 사용할지, 어떻게 숨길지 완벽 가이드.",
    "url": "https://tennisfriends.co.kr/blog/tennis-drop-shot-mastery",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "드롭샷 마스터하기",
    "description": "절묘한 타이밍과 터치로 승부를 가르는 드롭샷. 언제 사용할지, 어떻게 숨길지 완벽 가이드."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "timing",
    "text": "드롭샷 타이밍",
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
    "q": "드롭샷 성공 조건은?",
    "a": "상대가 베이스라인 뒤에 있고, 당신이 충분히 앞에 있을 때가 최적입니다."
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
            <Badge className="bg-white/20 text-white border-white/30">드롭샷</Badge>
            <Badge className="bg-white/20 text-white border-white/30">Drop Shot</Badge>
            <Badge className="bg-white/20 text-white border-white/30">터치</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">드롭샷 마스터하기</h1>
          <p className="text-xl text-blue-100 mb-8">절묘한 타이밍과 터치로 승부를 가르는 드롭샷. 언제 사용할지, 어떻게 숨길지 완벽 가이드.</p>
        </div>
      </div>
      <Article slug="tennis-drop-shot-mastery" date="2026-01-24" title="드롭샷 마스터하기" excerpt="절묘한 타이밍과 터치로 승부를 가르는 드롭샷. 언제 사용할지, 어떻게 숨길지 완벽 가이드.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="timing">드롭샷 타이밍</h2><p>상대가 베이스라인 깊숙이 있을 때, 그리고 당신이 코트 안쪽에 있을 때 시도하세요.</p><h2 id="technique">기술</h2><p>스윙을 같은 궤도로 시작해서 마지막 순간에만 속도를 줄여야 상대가 예측하지 못합니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
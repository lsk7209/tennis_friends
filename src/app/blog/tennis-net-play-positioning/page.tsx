import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "네트 플레이 포지셔닝 가이드",
  "description": "공격의 완성, 네트 플레이. 언제 올라갈지, 어디에 설지, 발리 각도까지 실전 팁.",
  "keywords": [
    "테니스 전술",
    "네트 플레이",
    "Volley",
    "포지셔닝"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-net-play-positioning"
  },
  "openGraph": {
    "title": "네트 플레이 포지셔닝 가이드",
    "description": "공격의 완성, 네트 플레이. 언제 올라갈지, 어디에 설지, 발리 각도까지 실전 팁.",
    "url": "https://tennisfriends.co.kr/blog/tennis-net-play-positioning",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "네트 플레이 포지셔닝 가이드",
    "description": "공격의 완성, 네트 플레이. 언제 올라갈지, 어디에 설지, 발리 각도까지 실전 팁."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "approach",
    "text": "어프로치 샷",
    "depth": 2
  },
  {
    "id": "position",
    "text": "네트 포지션",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "네트로 언제 올라가나요?",
    "a": "깊고 강한 샷으로 상대를 밀어낸 뒤, 어프로치 샷을 치고 전진하세요."
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
            <Badge className="bg-white/20 text-white border-white/30">네트 플레이</Badge>
            <Badge className="bg-white/20 text-white border-white/30">Volley</Badge>
            <Badge className="bg-white/20 text-white border-white/30">포지셔닝</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">네트 플레이 포지셔닝 가이드</h1>
          <p className="text-xl text-blue-100 mb-8">공격의 완성, 네트 플레이. 언제 올라갈지, 어디에 설지, 발리 각도까지 실전 팁.</p>
        </div>
      </div>
      <Article slug="tennis-net-play-positioning" date="2026-01-24" title="네트 플레이 포지셔닝 가이드" excerpt="공격의 완성, 네트 플레이. 언제 올라갈지, 어디에 설지, 발리 각도까지 실전 팁.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="approach">어프로치 샷</h2><p>깊고 낮은 슬라이스나 강한 드라이브로 상대를 밀어낸 뒤 네트로 붙으세요.</p><h2 id="position">네트 포지션</h2><p>T라인과 서비스 라인 사이에 서서, 상대가 공을 치는 방향으로 크로스 스텝으로 이동하세요.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
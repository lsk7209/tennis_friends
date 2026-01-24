import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  "title": "데니스 샤포발로프: 왼손 원핸드 백핸드의 낭만",
  "description": "폭발적인 점프 원핸드 백핸드의 소유자 데니스 샤포발로프. 공격적인 스타일과 화려한 샷 메이킹, 그가 보여주는 낭만 테니스.",
  "keywords": [
    "테니스",
    "데니스 샤포발로프",
    "Denis Shapovalov",
    "원핸드 백핸드",
    "왼손잡이"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/denis-shapovalov"
  },
  "openGraph": {
    "title": "데니스 샤포발로프: 왼손 원핸드 백핸드의 낭만",
    "description": "폭발적인 점프 원핸드 백핸드의 소유자 데니스 샤포발로프. 공격적인 스타일과 화려한 샷 메이킹, 그가 보여주는 낭만 테니스.",
    "url": "https://tennisfriends.co.kr/blog/denis-shapovalov",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "데니스 샤포발로프: 왼손 원핸드 백핸드의 낭만",
    "description": "폭발적인 점프 원핸드 백핸드의 소유자 데니스 샤포발로프. 공격적인 스타일과 화려한 샷 메이킹, 그가 보여주는 낭만 테니스."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};

const tocItems = [
  {
    "id": "intro",
    "text": "들어가며",
    "depth": 2
  },
  {
    "id": "backhand",
    "text": "원핸드 백핸드의 예술",
    "depth": 2
  },
  {
    "id": "conclusion",
    "text": "마무리",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "샤포발로프의 백핸드는?",
    "a": "왼손 원핸드 백핸드로, 페더러를 연상시키는 우아함과 파괴력을 자랑합니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30">테니스</Badge>
            <Badge className="bg-white/20 text-white border-white/30">데니스 샤포발로프</Badge>
            <Badge className="bg-white/20 text-white border-white/30">Denis Shapovalov</Badge>
            <Badge className="bg-white/20 text-white border-white/30">원핸드 백핸드</Badge>
            <Badge className="bg-white/20 text-white border-white/30">왼손잡이</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">데니스 샤포발로프: 왼손 원핸드 백핸드의 낭만</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">폭발적인 점프 원핸드 백핸드의 소유자 데니스 샤포발로프. 공격적인 스타일과 화려한 샷 메이킹, 그가 보여주는 낭만 테니스.</p>
          <div className="flex gap-6 text-blue-100">
            <div className="flex gap-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>5분</span></div>
            <div className="flex gap-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span>2026-01-24</span></div>
          </div>
        </div>
      </div>
      <Article slug="denis-shapovalov" date="2026-01-24" title="데니스 샤포발로프: 왼손 원핸드 백핸드의 낭만" excerpt="폭발적인 점프 원핸드 백핸드의 소유자 데니스 샤포발로프. 공격적인 스타일과 화려한 샷 메이킹, 그가 보여주는 낭만 테니스.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="mb-12"><TOC items={tocItems} /></div>
          <div className="prose prose-lg dark:prose-invert max-w-none"><h2 id="intro">들어가며</h2><p>데니스 샤포발로프는 현대 테니스에서 보기 드문 왼손 원핸드 백핸드 선수입니다.</p><h2 id="backhand">원핸드 백핸드의 예술</h2><p>그의 백핸드는 페더러를 연상시키는 우아함과 파워를 동시에 지니고 있습니다.</p><h2 id="conclusion">마무리</h2><p>샤포발로프는 테니스의 낭만을 지키는 선수입니다.</p></div>
          <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 rounded-2xl p-8 border shadow-lg">
            <h3 className="text-2xl font-bold mb-6">관련 자료</h3>
            <div className="grid grid-cols-2 gap-6">
              <Card><CardContent className="p-6"><Link href="/players">🏆 선수 프로필</Link></CardContent></Card>
              <Card><CardContent className="p-6"><a href="https://www.atptour.com/" target="_blank">🌐 ATP 투어</a></CardContent></Card>
            </div>
          </div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
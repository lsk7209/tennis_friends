import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  "title": "펠릭스 오제-알리아심: 캐나다의 테니스 희망",
  "description": "성실함과 운동 능력을 겸비한 펠릭스 오제-알리아심. 그의 강력한 포핸드와 서비스 게임, 그리고 그랜드 슬램을 향한 도전을 정리합니다.",
  "keywords": [
    "테니스",
    "펠릭스 오제-알리아심",
    "Felix Auger-Aliassime",
    "캐나다"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/felix-auger-aliassime"
  },
  "openGraph": {
    "title": "펠릭스 오제-알리아심: 캐나다의 테니스 희망",
    "description": "성실함과 운동 능력을 겸비한 펠릭스 오제-알리아심. 그의 강력한 포핸드와 서비스 게임, 그리고 그랜드 슬램을 향한 도전을 정리합니다.",
    "url": "https://tennisfriends.co.kr/blog/felix-auger-aliassime",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "펠릭스 오제-알리아심: 캐나다의 테니스 희망",
    "description": "성실함과 운동 능력을 겸비한 펠릭스 오제-알리아심. 그의 강력한 포핸드와 서비스 게임, 그리고 그랜드 슬램을 향한 도전을 정리합니다."
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
    "id": "style",
    "text": "경기 스타일",
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
    "q": "오제-알리아심의 강점은?",
    "a": "강력한 서브와 포핸드, 그리고 성실한 훈련 태도입니다."
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
            <Badge className="bg-white/20 text-white border-white/30">펠릭스 오제-알리아심</Badge>
            <Badge className="bg-white/20 text-white border-white/30">Felix Auger-Aliassime</Badge>
            <Badge className="bg-white/20 text-white border-white/30">캐나다</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">펠릭스 오제-알리아심: 캐나다의 테니스 희망</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">성실함과 운동 능력을 겸비한 펠릭스 오제-알리아심. 그의 강력한 포핸드와 서비스 게임, 그리고 그랜드 슬램을 향한 도전을 정리합니다.</p>
          <div className="flex gap-6 text-blue-100">
            <div className="flex gap-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>5분</span></div>
            <div className="flex gap-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span>2026-01-24</span></div>
          </div>
        </div>
      </div>
      <Article slug="felix-auger-aliassime" date="2026-01-24" title="펠릭스 오제-알리아심: 캐나다의 테니스 희망" excerpt="성실함과 운동 능력을 겸비한 펠릭스 오제-알리아심. 그의 강력한 포핸드와 서비스 게임, 그리고 그랜드 슬램을 향한 도전을 정리합니다.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="mb-12"><TOC items={tocItems} /></div>
          <div className="prose prose-lg dark:prose-invert max-w-none"><h2 id="intro">들어가며</h2><p>펠릭스 오제-알리아심은 캐나다 테니스의 미래입니다. 성실함과 재능을 겸비한 그는 곧 메이저 우승을 이룰 것으로 기대됩니다.</p><h2 id="style">경기 스타일</h2><p>강력한 서브와 공격적인 포핸드로 주도권을 잡습니다.</p><h2 id="conclusion">마무리</h2><p>그의 여정은 이제 시작입니다.</p></div>
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
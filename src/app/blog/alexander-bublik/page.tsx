import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '알렉산더 부블릭: 언더암 서브와 창의성',
  description: '테니스를 즐기는 방식이 남다른 알렉산더 부블릭. 언더암 서브, 변칙 플레이, 그리고 그가 추구하는 창의적인 테니스의 세계.',
  keywords: ['테니스', '알렉산더 부블릭', 'Alexander Bublik', '언더암 서브', '변칙'],
  alternates: { canonical: 'https://tennisfriends.co.kr/blog/alexander-bublik' },
  openGraph: {
    title: '알렉산더 부블릭: 언더암 서브와 창의성',
    description: '테니스를 즐기는 방식이 남다른 알렉산더 부블릭. 언더암 서브, 변칙 플레이, 그리고 그가 추구하는 창의적인 테니스의 세계.',
    url: 'https://tennisfriends.co.kr/blog/alexander-bublik',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '알렉산더 부블릭: 언더암 서브와 창의성',
    description: '테니스를 즐기는 방식이 남다른 알렉산더 부블릭. 언더암 서브, 변칙 플레이, 그리고 그가 추구하는 창의적인 테니스의 세계.',
  },
  robots: { index: true, follow: true },
};

const tocItems = [
  { id: 'intro', text: '들어가며', depth: 2 },
  { id: 'style', text: '경기 스타일: 예측 불가능한 천재', depth: 2 },
  { id: 'serve', text: '언더암 서브의 달인', depth: 2 },
  { id: 'personality', text: '자유로운 영혼', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  { q: '부블릭의 언더암 서브는 합법인가요?', a: '네, 완전히 합법적인 전술입니다. 규칙상 아무 문제가 없으며, 상대가 너무 뒤에 서 있을 때 효과적인 전략입니다.' },
  { q: '그의 별명은?', a: '"Bad Boy Bublik" 또는 "Entertaining Bublik"입니다. 예측 불가능한 플레이와 자유분방한 성격 때문입니다.' },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">테니스</Badge>
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">알렉산더 부블릭</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">알렉산더 부블릭: 언더암 서브와 창의성</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">테니스를 즐기는 방식이 남다른 부블릭의 창의적인 세계를 분석합니다.</p>
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>5분 읽기</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span>2026-01-24</span>
            </div>
          </div>
        </div>
      </div>
      <Article slug="alexander-bublik" date="2026-01-24" title="알렉산더 부블릭: 언더암 서브와 창의성" excerpt="테니스를 즐기는 방식이 남다른 알렉산더 부블릭. 언더암 서브, 변칙 플레이, 그리고 그가 추구하는 창의적인 테니스의 세계.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="mb-12"><TOC items={tocItems} /></div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="intro">들어가며</h2>
            <p>알렉산더 부블릭(Alexander Bublik)은 테니스 코트의 코미디언입니다. 그는 진지함보다 재미를, 관습보다 창의성을 선택합니다. 언더암 서브, 노-룩 샷, 그리고 예상을 깨는 플레이로 관중을 웃게 만듭니다.</p>

            <h2 id="style">경기 스타일: 예측 불가능한 천재</h2>
            <p>부블릭의 테니스는 교과서와 정반대입니다. 그는 "훈련은 지루하다"고 공공연히 말하며, 대신 즉흥적인 창의성으로 승부합니다. 같은 상황에서도 매번 다른 샷을 시도하기 때문에 상대는 준비할 수 없습니다.</p>

            <h2 id="serve">언더암 서브의 달인</h2>
            <p>그의 트레이드마크는 언더암 서브입니다. 키리오스가 가끔 사용하는 반면, 부블릭은 한 경기에 수차례 시도합니다. 이는 단순한 쇼맨십이 아니라 상대의 리듬을 깨는 전략적 무기입니다.</p>

            <h2 id="personality">자유로운 영혼</h2>
            <p>"테니스는 일일 뿐, 내 인생의 전부가 아니다." 부블릭의 이 말은 그의 철학을 잘 보여줍니다. 그는 승리보다 즐거움을 우선시하며, 그 자유로움이 오히려 그를 특별하게 만듭니다.</p>

            <h2 id="conclusion">마무리하며</h2>
            <p>알렉산더 부블릭은 테니스가 너무 진지해지지 않도록 균형을 잡아주는 선수입니다. 그의 웃음과 창의성은 이 스포츠를 더욱 풍요롭게 만듭니다.</p>
          </div>
          <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">관련 자료</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card><CardContent className="p-6"><Link href="/players" className="flex items-center gap-3 hover:text-blue-600"><span>🏆</span><span>선수 프로필 더보기</span></Link></CardContent></Card>
              <Card><CardContent className="p-6"><a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-purple-600"><span>🌐</span><span>ATP 투어</span></a></CardContent></Card>
            </div>
          </div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}

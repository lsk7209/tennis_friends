import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: '서브 리턴 마스터 전략 — 안드레 아가시의 타이밍 비결과 3대 타겟 존 | 브레이크 확률을 높이는 과학적 리턴 가이드',
  description: '서브는 서버의 권리지만, 리턴은 승부의 시작입니다. 스플릿 스텝 과학, 짧은 백스윙, 리턴 타겟팅 등 브레이크를 부르는 모든 기술.',
  keywords: ['테니스 리턴', '안드레 아가시 리턴', '서브 공략', '스플릿 스텝', '리턴 전술', '테니스 승리 전략'],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-return-of-serve-strategy`,
  },
  openGraph: {
    title: '서브 리턴 마스터 전략 — 안드레 아가시의 타이밍 비결과 3대 타겟 존',
    description: '서브는 서버의 권리지만, 리턴은 승부의 시작입니다. 스플릿 스텝 과학, 짧은 백스윙, 리턴 타겟팅 등 브레이크를 부르는 모든 기술.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-return-of-serve-strategy`,
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '서브 리턴 마스터 전략 — 안드레 아가시의 타이밍 비결과 3대 타겟 존',
    description: '기회의 시작은 리턴입니다. 리턴이 안정되는 순간 모든 게임이 바뀝니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'split-step-science', text: '1. 스플릿 스텝의 과학: 아가시의 "임팩트 점프" 법칙', depth: 2 },
  { id: 'short-backswing', text: '2. 짧은 백스윙: 텐션 3/10 규칙과 블로킹 메커니즘', depth: 2 },
  { id: 'return-target-zones', text: '3. 고확률 리턴 타겟: 3대의 골든 매직 존', depth: 2 },
  { id: 'return-types', text: '4. 리턴의 종류: 블록(Block), 슬라이스(Slice), 립(Rip)', depth: 2 },
  { id: 'returner-psychology', text: '5. 리턴너의 심리학: 서버를 "벽"으로 압박하라', depth: 2 },
  { id: 'conclusion', text: '6. 결론: 리턴은 브레이크의 문을 여는 열쇠다', depth: 2 },
];

const faqs = [
  {
    q: '강서브 리턴 시 라켓이 밀려요.',
    a: '라켓을 뒤로 빼지 말고 몸 앞 30cm 지점에서 고정한다는 느낌으로 "벽"을 만드세요. 힘이 아닌 팔 전체의 무게로 버티는 것이 핵심입니다.'
  },
  {
    q: '리턴 시 스탠스는 어떻게 잡나요?',
    a: '기본적인 어깨너비보다 1.5배 더 넓게 잡으세요. 중심이 낮을수록 빠른 방향 전환이 가능합니다.'
  }
];

export default function TennisReturnOfServeStrategyPage() {
  const title = '서브 리턴: 서버의 권리를 뺏는 정교한 기술';
  const excerpt = '서브는 게임의 시작이지만, 리턴은 승부의 시작입니다. 0.5초 만에 날아오는 공을 제어하는 리턴의 모든 전술을 공개합니다.';

  return (
    <Article slug="tennis-return-of-serve-strategy" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">리턴 전술</Badge>
          <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">게임 브레이커</Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-bold text-center">
          "최고의 리턴너는 가장 빠른 선수가 아니라 가장 잘 읽는 선수입니다."
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="split-step-science" className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. 스플릿 스텝의 과학: 아가시의 "임팩트 점프" 법칙</h2>
        <p className="mb-4">효과적인 리턴은 공이 코트에 닿기 전이 아니라, <strong>상대의 라켓이 공에 닿는 순간</strong> 지면에서 발이 떠 있어야 합니다.</p>
        <div className="bg-slate-900 text-white p-6 rounded-2xl mb-6 flex items-center justify-around">
          <div className="text-center">
            <p className="text-[10px] text-slate-400">Launch</p>
            <p className="text-xs font-bold">임팩트 직전 도약</p>
          </div>
          <div className="text-2xl">→</div>
          <div className="text-center">
            <p className="text-[10px] text-slate-400">Landing</p>
            <p className="text-xs font-bold">방향 읽고 착지</p>
          </div>
          <div className="text-2xl">→</div>
          <div className="text-center">
            <p className="text-[10px] text-slate-400">Explosion</p>
            <p className="text-xs font-bold">폭발적 첫 스텝</p>
          </div>
        </div>
      </section>

      <section id="short-backswing" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. 짧은 백스윙: 텐션 3/10 규칙</h2>
        <p className="mb-4">리턴 시 가장 큰 실수는 백스윙을 크게 가져가는 것입니다. <strong>"어깨는 틀되, 라켓은 남겨라"</strong>.</p>
        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-5">
            <h4 className="font-bold text-sm mb-2 italic">The 3/10 Tension Rule:</h4>
            <p className="text-xs text-slate-500 leading-relaxed">준비 단계에서 그립 강도를 3 정도로 유지하세요. 너무 꽉 쥐면 반응 속도가 느려집니다. 임팩트 순간에만 8로 높여 공을 가볍게 튕겨냅니다.</p>
          </CardContent>
        </Card>
      </section>

      <section id="return-target-zones" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. 고확률 리턴 타겟: 3대의 골든 존</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-blue-200">
            <h5 className="font-bold text-sm text-blue-600 mb-2">Zone A: Deep Middle</h5>
            <p className="text-[10px]"><strong>80% 확률 성공존.</strong> 서버의 발치를 공략하여 각도를 줄이고 3구 공격을 차단합니다.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-indigo-200">
            <h5 className="font-bold text-sm text-indigo-600 mb-2">Zone B: Short Angle</h5>
            <p className="text-[10px]"><strong>공격형 전략.</strong> 세컨 서브 공량 시 유용합니다. 상대를 코트 밖으로 완전히 끌어냅니다.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-purple-200">
            <h5 className="font-bold text-sm text-purple-600 mb-2">Zone C: Down the Line</h5>
            <p className="text-[10px]"><strong>도박성 위너 존.</strong> 상대가 서브 앤 발리를 시도할 때 패싱샷으로 결정짓는 자리입니다.</p>
          </div>
        </div>
      </section>

      <section id="returner-psychology" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. 리턴너의 심리학: 서버를 압박하라</h2>
        <p className="mb-4 text-sm leading-relaxed">서버는 자신의 서브가 무력해지는 순간 가장 큰 공포를 느낍니다.</p>
        <div className="p-5 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border-l-4 border-blue-500">
          <ul className="text-xs space-y-2">
            <li>• <strong>보디 랭귀지:</strong> 베이스라인 안쪽으로 서서 공격적인 자세를 취하세요.</li>
            <li>• <strong>리듬 깨기:</strong> 리턴 직전에 베이스라인 위치를 앞뒤로 조정해 서버의 시선을 분산시키세요.</li>
            <li>• <strong>안전 제일:</strong> 퍼스트 서브는 "무조건 코트 안으로" 되돌려주어 서버가 다시 준비하게 만드세요.</li>
          </ul>
        </div>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. 결론: 리턴은 브레이크의 문을 여는 열쇠다</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          테니스의 위대한 선수들은 모두 위대한 리턴너였습니다. 강서브를 이기는 것은 더 강한 힘이 아니라 <strong>더 정교한 타이밍과 냉철한 코스 선택</strong>입니다. 오늘부터 당신의 리턴이 상대 서버의 가장 큰 고민거리가 되게 만드세요.
        </p>
      </section>

      <FAQ items={faqs} />
    </Article>
  );
}

import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: '테니스 복식 마스터 가이드 — 진화된 포메이션과 팀워크의 과학 | 승률을 높이는 전략적 듀오 플레이',
  description: '테니스 복식은 단순히 두 명이 치는 경기가 아닙니다. 호주형(Australian) 포메이션, I-포메이션, 포칭(Poaching) 타이밍 등 고급 전술과 팀워크 전략.',
  keywords: ['테니스 복식', '호주형 포메이션', 'I-포메이션', '포칭', '복식 전략', '복식 팀워크', '테니스 전술'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-doubles-teamwork-strategy',
  },
  openGraph: {
    title: '테니스 복식 마스터 가이드 — 진화된 포메이션과 팀워크의 과학',
    description: '테니스 복식은 단순히 두 명이 치는 경기가 아닙니다. 호주형(Australian) 포메이션, I-포메이션, 포칭(Poaching) 타이밍 등 고급 전술과 팀워크 전략.',
    url: 'https://tennisfriends.co.kr/blog/tennis-doubles-teamwork-strategy',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 복식 마스터 가이드 — 진화된 포메이션과 팀워크의 과학',
    description: '테니스 복식은 단순히 두 명이 치는 경기가 아닙니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'advanced-formations', text: '1. 고급 포메이션: 호주형(Australian) & I-포메이션', depth: 2 },
  { id: 'poaching-mechanics', text: '2. 포칭(Poaching)의 미학: 0.1초의 인터셉트 타이밍', depth: 2 },
  { id: 'behind-back-signals', text: '3. 비언어적 커뮤니케이션: 등 뒤의 수신호', depth: 2 },
  { id: 'target-the-middle', text: '4. 센터 공략: 왜 중앙이 복식의 금광인가?', depth: 2 },
  { id: 'partner-psychology', text: '5. 파트너 심리학: "우리"라는 리듬을 유지하는 법', depth: 2 },
  { id: 'conclusion', text: '6. 결론: 복식은 합이 아니라 곱이다', depth: 2 },
];

const faqs = [
  {
    q: '포칭을 나갔다가 뚫리면 어떻게 하나요?',
    a: '뚫리는 것은 괜찮습니다. 중요한 것은 "나간다"는 의지입니다. 한 번의 포칭 성공이 상대의 리턴 정확도를 평소보다 30% 떨어뜨립니다.'
  },
  {
    q: '파트너가 계속 로브를 허용합니다.',
    a: '파트너에게 뒤로 조금 더 물러나라고 조언하거나, 본인이 활발히 스위칭(Switching)하여 커버해주는 전략이 필요합니다.'
  }
];

export default function TennisDoublesTeamworkStrategyPage() {
  const title = '복식의 완성: 두 사람이 하나로 움직이는 시스템';
  const excerpt = '복식은 실력의 합이 아닙니다. 두 사람의 움직임이 시너지를 낼 때, 코트는 훨씬 좁아 보이고 상대의 빈틈은 넓어 보입니다.';

  return (
    <Article slug="tennis-doubles-teamwork-strategy" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">복식 전술</Badge>
          <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300">팀워크 사이언스</Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-bold text-center italic">
          "복식은 파트너가 잘못했을 때 내가 그 자리를 메우는 게임입니다."
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="advanced-formations" className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. 고급 포메이션: 호주형(Australian) & I-포메이션</h2>
        <p className="mb-4">상대 리턴너의 리듬을 완전히 무너뜨리는 필살기입니다.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card className="bg-slate-50 dark:bg-slate-900">
            <CardContent className="p-5">
              <h4 className="font-bold text-red-600 mb-2">Australian Formation</h4>
              <p className="text-xs">서버와 네트 플레이어가 같은 사이드에 서서 상대의 강력한 크로스 리턴을 원천 차단합니다. 상대에게 어려운 다운더라인 리턴을 강요합니다.</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 dark:bg-slate-900">
            <CardContent className="p-5">
              <h4 className="font-bold text-pink-600 mb-2">I-Formation</h4>
              <p className="text-xs">네트 플레이어가 센터 표시 바로 위에 낮게 웅크려 앉습니다. 서브 직후 좌/우 어디로 튈지 모르게 하여 리턴너에게 극심한 심리적 압박을 줍니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="poaching-mechanics" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. 포칭(Poaching)의 미학: 인터셉트 타이밍</h2>
        <p className="mb-4">네트 플레이어의 존재 목적은 단순히 발리를 하는 것이 아니라, 상대를 <strong>'감시'</strong>하는 것입니다.</p>
        <div className="p-6 bg-slate-900 text-white rounded-2xl">
          <h4 className="text-pink-400 font-bold mb-3">Poaching Rhythm:</h4>
          <ol className="text-xs space-y-3">
            <li>1. 서버의 라켓이 공에 닿는 순간 <strong>스플릿 스텝</strong>.</li>
            <li>2. 리턴너의 라켓 각도가 열리는 순간 <strong>대각선 전방</strong>으로 대담하게 돌진.</li>
            <li>3. 발리는 짧고 날카롭게 상대 네트 플레이어의 발밑을 겨냥.</li>
          </ol>
        </div>
      </section>

      <section id="behind-back-signals" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. 비언어적 커뮤니케이션: 등 뒤의 수신호</h2>
        <p className="mb-4">말은 상대에게도 들립니다. 등 뒤에서 손가락으로 다음 플레이를 지시하세요.</p>
        <div className="flex flex-wrap gap-4">
          <div className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-xs font-bold">✊ 주먹: Stay (그대로 유지)</div>
          <div className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-xs font-bold">✋ 보: Poach (인터셉트 나감)</div>
          <div className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-xs font-bold">👆 검지: Wide Serve (와이드 서브 요청)</div>
        </div>
      </section>

      <section id="target-the-middle" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. 센터 공략: 왜 중앙이 복식의 금광인가?</h2>
        <p className="text-sm leading-relaxed mb-4">"누가 칠지 모르는 사이 공간을 뚫어라."</p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-700 dark:text-slate-300">
          <li><strong>의사결정 방해:</strong> 두 사람이 공을 서로 미루거나 동시에 달려들게 만듭니다.</li>
          <li><strong>각도 축소:</strong> 중앙에서 발리를 하면 상대가 각도를 벌려 치기 매우 어렵습니다.</li>
          <li><strong>에러 유도:</strong> 중앙은 네트가 가장 낮은 지점입니다. 득점 확률이 가장 높습니다.</li>
        </ul>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. 결론: 복식은 합이 아니라 곱이다</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          한 명의 스타 플레이어보다 <strong>두 명의 조화로운 플레이어</strong>가 항상 이깁니다. 파트너의 실수를 메우고, 서로의 강점을 극대화하는 시스템을 구축하세요. 코트는 두 명을 위해 충분히 넓지만, 팀워크가 있는 자들에게는 놀이터가 될 것입니다.
        </p>
      </section>

      <FAQ items={faqs} />
    </Article>
  );
}

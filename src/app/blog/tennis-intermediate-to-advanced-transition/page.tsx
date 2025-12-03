import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '중급자에서 상급자로 가는 전환 포인트 — 스윙 일관성과 경기 운영력의 분기점 | 안정에서 전략으로 진화하는 5가지 변화',
  description: '중급자는 기술로는 충분하지만, 운영력에서 한계를 느낀다. \'스윙의 일관성\'과 \'포인트 설계\'가 상급자의 문을 연다.',
  keywords: ['테니스 중급자', '상급자', '스윙 일관성', '경기 운영력', '포인트 설계', '멘탈 루틴', '전략', '성장'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-intermediate-to-advanced-transition',
  },
  openGraph: {
    title: '중급자에서 상급자로 가는 전환 포인트 — 스윙 일관성과 경기 운영력의 분기점 | 안정에서 전략으로 진화하는 5가지 변화',
    description: '중급자는 기술로는 충분하지만, 운영력에서 한계를 느낀다. \'스윙의 일관성\'과 \'포인트 설계\'가 상급자의 문을 연다.',
    url: 'https://tennisfriends.co.kr/blog/tennis-intermediate-to-advanced-transition',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '중급자에서 상급자로 가는 전환 포인트 — 스윙 일관성과 경기 운영력의 분기점 | 안정에서 전략으로 진화하는 5가지 변화',
    description: '중급자는 기술로는 충분하지만, 운영력에서 한계를 느낀다. \'스윙의 일관성\'과 \'포인트 설계\'가 상급자의 문을 연다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'swing-consistency', text: '1. 스윙의 일관성 — 10번 중 8번 같은 스윙을 만드는 법', depth: 2 },
  { id: 'point-design', text: '2. 포인트 설계 — 감이 아닌 시나리오로 경기하기', depth: 2 },
  { id: 'mental-routine', text: '3. 멘탈 루틴 — 감정이 아니라 호흡으로 경기하기', depth: 2 },
  { id: 'environmental-strategy', text: '4. 환경 기반 경기 운영력 — 코트를 전략으로 활용하기', depth: 2 },
  { id: 'match-analysis', text: '5. 경기 내 분석력 — 패턴을 읽는 눈을 훈련하라', depth: 2 },
  { id: 'conclusion-transition', text: '결론 — 일관성과 판단의 속도를 높여라', depth: 2 },
];

const faqs = [
  {
    q: '상급자로 가기 위해 하루에 얼마나 연습해야 하나요?',
    a: '매일 1시간이 이상적이지만, 중요한 건 시간보다 일관성입니다. 30분이라도 매일 반복이 핵심입니다.'
  },
  {
    q: '멘탈 루틴은 어떻게 만들면 되나요?',
    a: '실수 후 3초 호흡 루틴을 먼저 자동화하세요. 그 후 자신만의 루틴 워드(\'집중\', \'리듬\' 등)를 설정하세요.'
  },
  {
    q: '패턴 분석은 초보에게도 필요할까요?',
    a: '네. 패턴을 보는 습관은 모든 레벨에 유용합니다. 단, 복잡하게 분석하지 말고 2~3가지만 기억하세요.'
  },
  {
    q: '코트 환경 전략은 왜 중요한가요?',
    a: '지역별 기후가 공의 반발력과 스피드에 큰 영향을 줍니다. 환경 이해는 실전 적응력을 높입니다.'
  },
  {
    q: '중급자에게 가장 필요한 변화는?',
    a: '\'힘\'보다 \'리듬\'을 중시하는 전환입니다. 리듬이 일정해야 스윙과 판단이 안정됩니다.'
  }
];

export default function TennisIntermediateToAdvancedTransitionPage() {
  const title = '중급자에서 상급자로 가는 전환 포인트 — 스윙 일관성과 경기 운영력의 분기점 | 안정에서 전략으로 진화하는 5가지 변화';
  const excerpt = '중급자는 기술로는 충분하지만, 운영력에서 한계를 느낀다. \'스윙의 일관성\'과 \'포인트 설계\'가 상급자의 문을 연다.';

  return (
    <Article slug="tennis-intermediate-to-advanced-transition" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
            성장 가이드
          </Badge>
          <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
            전략 마스터
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스에서 중급자는 기술적으로 완성되어 보이지만, 경기에서 안정적인 승리를 이어가기는 어렵습니다. 이유는 단순합니다. 공을 칠 수는 있지만 '흐름을 통제'하지 못하기 때문입니다. 상급자는 강한 샷보다 '일관된 리듬과 판단'을 가집니다. 이번 글에서는 중급자가 상급자로 도약하기 위한 5가지 핵심 전환 포인트를 다룹니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/intermediate-tennis-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">중급자 성장 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/intermediate.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 중급자 발전 가이드</a></li>
        </ul>
      </div>

      <section id="swing-consistency" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          스윙의 일관성 — 10번 중 8번 같은 스윙을 만드는 법
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          상급자는 강한 스윙보다 <strong>일관된 스윙</strong>을 우선합니다. 공의 속도나 힘이 아니라, 타점과 궤적이 일정해야 경기 중 흔들리지 않습니다.
        </p>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">점검 루틴:</h3>
          <ul className="text-purple-700 dark:text-purple-300 space-y-1">
            <li>• 20구 랠리 중 미스 2개 이하 목표.</li>
            <li>• 스윙 궤적이 매번 동일한지 영상으로 확인.</li>
            <li>• '공이 맞는 순간 시선 고정' 훈련 (3초 유지).</li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>💡 핵심:</strong> 스윙의 일관성은 체력보다 리듬에서 옵니다. 같은 템포를 유지하는 연습이 상급자의 출발점입니다.
          </p>
        </div>
      </section>

      <section id="point-design" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          포인트 설계 — 감이 아닌 시나리오로 경기하기
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          중급자는 즉흥적으로 공을 치지만, 상급자는 패턴을 만듭니다.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6">
          <p className="text-blue-700 dark:text-blue-300 mb-3">
            예를 들어, "백핸드로 몰아넣기 → 중앙 압박 → 오픈 코트 마무리"라는 3단계 패턴을 루틴화합니다. 이 루틴이 익숙해지면, 상대가 어떤 공을 보내도 <strong>판단이 빨라집니다.</strong>
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">실전 훈련법:</h3>
          <ul className="text-blue-700 dark:text-blue-300 space-y-1">
            <li>• 5포인트마다 '의도된 전개'를 시도해보기.</li>
            <li>• 실전 후 '성공 패턴'을 메모하기.</li>
            <li>• 같은 패턴을 반복하며 효율화.</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            상급자는 즉흥적 공격이 아니라, <strong>의도된 확률적 전개</strong>를 합니다. 감각보다 설계가 먼저입니다.
          </p>
        </div>
      </section>

      <section id="mental-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          멘탈 루틴 — 감정이 아니라 호흡으로 경기하기
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          중급자는 실수에 반응하지만, 상급자는 호흡으로 복구합니다.
        </p>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">3단계 멘탈 루틴:</h3>
          <ul className="text-green-700 dark:text-green-300 space-y-1">
            <li>• 1️⃣ 실수 인식 (0.5초) → 2️⃣ 호흡 리셋 (3초) → 3️⃣ 루틴 워드 반복 ("리듬"·"집중").</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            이 루틴은 포인트 간 20초 사이에 멘탈을 회복시키는 기술입니다. 실제로 프로 선수들도 이 루틴으로 멘탈을 '공학적으로' 관리합니다.
            <br/><br/>
            <strong>연습법:</strong> 경기 중 실수할 때마다 루틴을 실행하세요. 처음엔 인위적이지만, 반복하면 자동화됩니다.
          </p>
        </div>
      </section>

      <section id="environmental-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-yellow-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          환경 기반 경기 운영력 — 코트를 전략으로 활용하기
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          상급자는 기후와 코트 조건까지 계산에 넣습니다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기: 반발 빠름 → 플랫 중심, 리턴 타이밍 앞당기기.</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산: 습기 많음 → 스핀량 늘리고 랠리 길게.</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구: 고온·건조 → 라켓면 닫고 낮은 궤적 유지.</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주: 바람 많음 → 바람 방향 따라 서브·로브 조정.</h3>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>💡 전략 팁:</strong> 이 환경 전략은 단순한 현지 적응이 아니라 '상황 예측력'을 키웁니다. 코트 조건에 따라 전술을 미리 세우는 습관은 상급자의 특징입니다.
          </p>
        </div>
      </section>

      <section id="match-analysis" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          경기 내 분석력 — 패턴을 읽는 눈을 훈련하라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          상급자는 스스로의 플레이뿐 아니라 <strong>상대의 반복 행동</strong>을 읽습니다. 상대의 리턴 방향, 백핸드 빈도, 미스 구간을 관찰하세요.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">훈련법:</h3>
          <ul className="text-indigo-700 dark:text-indigo-300 space-y-1">
            <li>• 경기 중 '상대 패턴' 3가지를 메모.</li>
            <li>• 영상 분석 시 성공률이 높은 샷·포인트 패턴 기록.</li>
            <li>• 다음 경기에서 그 패턴을 역이용.</li>
          </ul>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            결국 테니스는 체력의 싸움이 아니라 '정보의 싸움'입니다. 상급자는 공을 치기 전에 이미 다음 전개를 예측하고 있습니다.
          </p>
        </div>
      </section>

      <section id="conclusion-transition" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          결론 — 일관성과 판단의 속도를 높여라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          중급자와 상급자의 차이는 기술이 아니라 <strong>결정의 품질</strong>입니다. 감으로 치는 테니스에서, 설계로 치는 테니스로 전환하는 순간 성장의 속도가 달라집니다.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          스윙이 같고, 루틴이 일정하며, 판단이 빠른 플레이어 — 그것이 상급자의 정의입니다. 오늘부터는 공을 세게 치는 대신, '같은 리듬으로' 10번을 반복하세요. 그 반복이 상급자로 가는 가장 확실한 길입니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-mental-routine-5steps">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 mb-2">
                  멘탈 트레이닝
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  멘탈 루틴 5단계 — 시합 중 흔들리지 않는 집중력의 기술
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  테니스의 승패는 기술보다 멘탈 루틴에서 갈린다. 포인트 사이 20초를 어떻게 쓰느냐가 경기 전체를 바꾼다.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

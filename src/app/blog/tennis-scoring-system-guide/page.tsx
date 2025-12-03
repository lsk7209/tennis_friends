import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 경기 점수 체계 완전 이해 — 게임·세트·타이브레이크까지 한 번에 정리 | 초보도 3분이면 이해하는 점수의 구조',
  description: '15-30-40-게임, 단순해 보이지만 복잡한 규칙 속에는 전략의 심리가 숨어 있다. 점수를 이해하면 경기 흐름이 보인다.',
  keywords: ['테니스 점수', '게임 규칙', '세트', '타이브레이크', '듀스', '어드밴티지', '브레이크', '테니스 초보', '점수 체계'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-scoring-system-guide',
  },
  openGraph: {
    title: '테니스 경기 점수 체계 완전 이해 — 게임·세트·타이브레이크까지 한 번에 정리 | 초보도 3분이면 이해하는 점수의 구조',
    description: '15-30-40-게임, 단순해 보이지만 복잡한 규칙 속에는 전략의 심리가 숨어 있다. 점수를 이해하면 경기 흐름이 보인다.',
    url: 'https://tennisfriends.co.kr/blog/tennis-scoring-system-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 경기 점수 체계 완전 이해 — 게임·세트·타이브레이크까지 한 번에 정리 | 초보도 3분이면 이해하는 점수의 구조',
    description: '15-30-40-게임, 단순해 보이지만 복잡한 규칙 속에는 전략의 심리가 숨어 있다. 점수를 이해하면 경기 흐름이 보인다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'basic-scoring-structure', text: '1. 기본 점수 구조 — 15, 30, 40, 게임', depth: 2 },
  { id: 'game-set-match-relationship', text: '2. 게임 → 세트 → 매치의 관계', depth: 2 },
  { id: 'tiebreak-climax', text: '3. 타이브레이크 — 긴장의 절정', depth: 2 },
  { id: 'serve-return-games', text: '4. 서브 게임과 리턴 게임 — 심리전의 시작', depth: 2 },
  { id: 'after-deuce-strategy', text: '5. 듀스 이후 전략 — 흐름을 잡는 3초', depth: 2 },
  { id: 'regional-match-operation-tips', text: '6. 지역별 경기 운영 팁', depth: 2 },
  { id: 'conclusion-understand-scoring', text: '결론 — 점수를 이해하면 전략이 보인다', depth: 2 },
];

const faqs = [
  {
    q: '15-30-40은 왜 이런 구조인가요?',
    a: '고대 프랑스 시절 시계 숫자(15분 단위)에서 유래했다는 설이 가장 유력합니다.'
  },
  {
    q: '듀스에서 몇 번까지 반복되나요?',
    a: '이론상 무제한입니다. 두 점 차가 날 때까지 계속 듀스와 어드밴티지를 반복합니다.'
  },
  {
    q: '타이브레이크는 모든 세트에서 적용되나요?',
    a: '대부분의 경기에서는 그렇지만, 일부 대회(윔블던 등)는 마지막 세트에서만 적용하기도 합니다.'
  },
  {
    q: '브레이크와 홀드의 차이는?',
    a: '브레이크는 상대 서브를 따내는 것, 홀드는 자신의 서브를 지키는 것입니다.'
  },
  {
    q: '바람이 강한 날 점수 운영 팁은?',
    a: '서브 속도를 낮추고 회전량을 높이세요. 실수보다 리듬 유지가 중요합니다.'
  }
];

export default function TennisScoringSystemGuidePage() {
  const title = '테니스 경기 점수 체계 완전 이해 — 게임·세트·타이브레이크까지 한 번에 정리 | 초보도 3분이면 이해하는 점수의 구조';
  const excerpt = '15-30-40-게임, 단순해 보이지만 복잡한 규칙 속에는 전략의 심리가 숨어 있다. 점수를 이해하면 경기 흐름이 보인다.';

  return (
    <Article slug="tennis-scoring-system-guide" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            초보 가이드
          </Badge>
          <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">
            경기 규칙
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          처음 테니스를 배우면 가장 혼란스러운 부분이 '점수'입니다. 왜 1점이 아니라 15점일까? 40 다음엔 왜 듀스가 나올까? 이 점수 체계는 단순한 숫자가 아니라 경기의 리듬을 만들기 위한 설계입니다. 점수를 이해하면 경기의 흐름과 전략까지 읽을 수 있습니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-scoring-system/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 점수 체계 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/rules-and-regulations.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 경기 규칙</a></li>
        </ul>
      </div>

      <section id="basic-scoring-structure" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          기본 점수 구조 — 15, 30, 40, 게임
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스는 네 번의 포인트를 따면 한 '게임'을 가져가는 구조입니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">획득 포인트</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">점수 표기</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">1점</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">15</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">첫 포인트</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">2점</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">30</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">두 번째 포인트</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">3점</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">40</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">세 번째 포인트</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">4점</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-green-600">게임</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">두 점 차 이상 시 게임 승리</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            하지만 40-40이 되면 '듀스(Deuce)'가 됩니다. 이후 두 점을 연속으로 따야 게임을 가져갑니다.
            듀스 후 1점 앞서면 <strong>어드밴티지(Advantage)</strong>, 다시 동점이면 듀스로 돌아갑니다.
            이 구조는 단순히 규칙이 아니라 '긴장과 해소'를 만드는 장치입니다. 점수가 뒤집히는 순간, 심리전이 시작됩니다.
          </p>
        </div>
      </section>

      <section id="game-set-match-relationship" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          게임 → 세트 → 매치의 관계
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스는 작은 단위의 '게임'을 묶어 '세트'를 이루고, 세트를 합쳐 '매치'가 됩니다.
        </p>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">점수 누적 구조:</h3>
          <ul className="text-green-700 dark:text-green-300 space-y-1">
            <li>• <strong>1세트:</strong> 6게임을 먼저 따면 승리. 단, 2게임 차 이상 필요. (예: 6-4 가능, 6-5 불가)</li>
            <li>• <strong>6-6 동점 시:</strong> 타이브레이크로 승부 결정.</li>
            <li>• <strong>매치:</strong> 남자 3세트, 여자 2세트(혹은 3세트) 기준으로 진행.</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            즉, 1포인트 → 1게임 → 1세트 → 1매치 순으로 누적되는 구조입니다.
          </p>
        </div>
      </section>

      <section id="tiebreak-climax" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-yellow-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          타이브레이크 — 긴장의 절정
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          6-6이 되면 타이브레이크(Tiebreak)에 돌입합니다.
          여기서는 점수가 1점씩 올라가며, 7점을 먼저 얻고 2점 차가 나면 세트를 가져갑니다.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">타이브레이크 규칙 요약:</h3>
          <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• 서브는 첫 포인트는 A가, 이후 두 포인트는 B가, 다음 두 포인트는 다시 A가 서브. (2포인트 단위로 교대)</li>
            <li>• 6점마다 코트 체인지.</li>
            <li>• 7점 이상, 2점 차로 승리.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            예: 7-5, 8-6, 10-8 등 가능. 이때 멘탈 루틴이 중요합니다. 짧은 포인트들이 누적되기 때문에 한 실수가 전체 세트를 좌우합니다.
          </p>
        </div>
      </section>

      <section id="serve-return-games" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          서브 게임과 리턴 게임 — 심리전의 시작
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스의 독특한 점은 매 게임마다 서브권이 바뀐다는 것입니다.
          서브 게임을 따내는 것이 유리하므로, 한 번의 '브레이크'가 경기 흐름을 완전히 바꿉니다.
        </p>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">중요 개념:</h3>
          <ul className="text-purple-700 dark:text-purple-300 space-y-1">
            <li>• <strong>브레이크(Break):</strong> 상대의 서브 게임을 따내는 것.</li>
            <li>• <strong>홀드(Hold):</strong> 자신의 서브 게임을 지키는 것.</li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            일반적으로 남자 경기에서는 1세트에 1~2번의 브레이크가 나오며, 이 한 번이 세트 승부를 결정합니다.
          </p>
        </div>
      </section>

      <section id="after-deuce-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          듀스 이후 전략 — 흐름을 잡는 3초
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          듀스 상황은 테니스의 하이라이트입니다. 이때는 단순한 실력보다 '심리 안정'이 승부를 가릅니다.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">듀스 후 전략:</h3>
          <ul className="text-indigo-700 dark:text-indigo-300 space-y-1">
            <li>• 서브 전 루틴을 일정하게 유지하세요.</li>
            <li>• 한 포인트만 생각하세요. 점수보다 '공 하나'에 집중.</li>
            <li>• 실수 후 3초 호흡 리셋으로 감정 제어.</li>
          </ul>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            프로 선수들은 듀스에서 이 3초를 자신만의 의식처럼 사용합니다. 집중력 회복의 핵심 구간입니다.
          </p>
        </div>
      </section>

      <section id="regional-match-operation-tips" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          지역별 경기 운영 팁
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트 비율 높음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">서브 게임 중심 운영, 공격적 리턴 중요.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습도 높음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">랠리 길어짐, 체력 관리 중심.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">빠른 포인트 유리, 플랫 서브 효과적.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">듀스 상황 시 킥 서브나 로브로 변칙 전술 사용.</p>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            지역별 환경은 점수 흐름에도 영향을 줍니다. 예를 들어 바람이 강한 날엔 듀스에서 높은 토스 서브보다 낮은 회전 서브가 유리합니다.
          </p>
        </div>
      </section>

      <section id="conclusion-understand-scoring" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          결론 — 점수를 이해하면 전략이 보인다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스의 점수는 단순한 숫자가 아니라, '심리와 리듬'의 지도입니다. 15-30-40의 흐름은 단순히 진행이 아니라, 집중과 긴장의 사이클입니다. 점수를 읽을 줄 알면, 경기를 '따라가는 선수'가 아니라 '흐름을 만드는 선수'가 됩니다.
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

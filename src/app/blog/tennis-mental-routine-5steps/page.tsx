import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '멘탈 루틴 5단계 — 시합 중 흔들리지 않는 집중력의 기술 | 긴장·실수·흐름을 제어하는 심리 루틴 완전 가이드',
  description: '포인트 사이 20초를 지배하라. 루틴·시선·호흡·이미지 트레이닝으로 흔들리지 않는 멘탈을 만드는 5단계 심리 전략.',
  keywords: ['테니스 멘탈', '집중력', '루틴', '심리훈련', '시합 전략', '긴장 관리', '실수 극복', '흐름 유지'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-mental-routine-5steps',
  },
  openGraph: {
    title: '멘탈 루틴 5단계 — 시합 중 흔들리지 않는 집중력의 기술 | 긴장·실수·흐름을 제어하는 심리 루틴 완전 가이드',
    description: '포인트 사이 20초를 지배하라. 루틴·시선·호흡·이미지 트레이닝으로 흔들리지 않는 멘탈을 만드는 5단계 심리 전략.',
    url: 'https://www.tennisfrens.com/blog/tennis-mental-routine-5steps',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '멘탈 루틴 5단계 — 시합 중 흔들리지 않는 집중력의 기술 | 긴장·실수·흐름을 제어하는 심리 루틴 완전 가이드',
    description: '포인트 사이 20초를 지배하라. 루틴·시선·호흡·이미지 트레이닝으로 흔들리지 않는 멘탈을 만드는 5단계 심리 전략.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'mental-routine-step1', text: '1단계 — 인식: 감정의 위치를 확인하라', depth: 2 },
  { id: 'mental-routine-step2', text: '2단계 — 리셋: 호흡으로 신경계를 재부팅하라', depth: 2 },
  { id: 'mental-routine-step3', text: '3단계 — 시선 고정: 외부 자극 차단', depth: 2 },
  { id: 'mental-routine-step4', text: '4단계 — 이미지 트레이닝: 다음 포인트를 시각화', depth: 2 },
  { id: 'mental-routine-step5', text: '5단계 — 루틴 고정: 자신만의 \'의식\'을 만들어라', depth: 2 },
  { id: 'geo-mental-environment', text: 'GEO 멘탈 환경 대응', depth: 2 },
  { id: 'conclusion-mental-routine', text: '결론 — 루틴은 \'심리의 근육\'이다', depth: 2 },
];

const faqs = [
  {
    q: '멘탈 루틴은 경기 중 몇 번 반복하나요?',
    a: '포인트마다 20초 내에 짧게 반복하세요. 습관이 되면 자동으로 작동합니다.'
  },
  {
    q: '호흡 패턴은 꼭 일정해야 하나요?',
    a: '일정할수록 좋습니다. 3-1-4 패턴이나 4-4-6 패턴이 가장 안정적입니다.'
  },
  {
    q: '시각화가 어렵습니다.',
    a: '실제 장면을 영상처럼 떠올리기보다, 단어 한 문장으로 그리세요. \'백핸드 깊게\'만으로 충분합니다.'
  },
  {
    q: '멘탈 루틴과 기술 루틴은 다른가요?',
    a: '멘탈 루틴은 감정과 집중, 기술 루틴은 몸의 동작입니다. 둘은 함께 작동해야 완전한 경기력이 나옵니다.'
  },
  {
    q: '루틴을 바꾸면 혼란스럽지 않나요?',
    a: '자주 바꾸면 효과가 줄어듭니다. 한 가지 루틴을 3주 이상 유지해 몸에 익히세요.'
  }
];

export default function TennisMentalRoutine5StepsPage() {
  const title = '멘탈 루틴 5단계 — 시합 중 흔들리지 않는 집중력의 기술 | 긴장·실수·흐름을 제어하는 심리 루틴 완전 가이드';
  const excerpt = '테니스의 승패는 기술보다 멘탈 루틴에서 갈린다. 포인트 사이 20초를 어떻게 쓰느냐가 경기 전체를 바꾼다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
            멘탈 마스터
          </Badge>
          <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
            심리 훈련
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스는 기술의 경기 같지만, 실은 '감정의 리듬'을 다루는 경기입니다. 경기 중 실수 한 번으로 무너지는 사람과, 끝까지 흐름을 유지하는 사람의 차이는 멘탈 루틴에 있습니다. 이 글에서는 실제 프로 선수들의 루틴을 분석해, 아마추어도 바로 적용 가능한 5단계 멘탈 루틴을 정리합니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/02/mental-toughness-tennis/795642/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 멘탈 트레이닝 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/training/mental-training.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 멘탈 트레이닝</a></li>
        </ul>
      </div>

      <section id="mental-routine-step1" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          1단계 — 인식: 감정의 위치를 확인하라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          실수했을 때 대부분은 '화'를 낸 뒤 바로 다음 포인트로 들어갑니다. 하지만 그 상태로 스윙하면, 몸은 이미 긴장해 있습니다. 첫 단계는 감정을 '인식'하는 것입니다.
        </p>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg mb-6">
          <p className="text-purple-800 dark:text-purple-200 font-medium mb-3">감정 인식 구문:</p>
          <ul className="text-purple-700 dark:text-purple-300 space-y-1">
            <li>• "지금 긴장돼 있다."</li>
            <li>• "내 어깨가 올라가 있다."</li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            이렇게 스스로에게 짧게 말하는 순간, 뇌는 감정을 외부화시켜 통제하기 쉬운 상태로 바꿉니다. 감정을 억누르는 게 아니라, <strong>관찰자로 전환하는 것</strong>이 핵심입니다.
          </p>
        </div>
      </section>

      <section id="mental-routine-step2" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          2단계 — 리셋: 호흡으로 신경계를 재부팅하라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          긴장 시 가장 빠른 회복법은 '호흡 루틴'입니다. 포인트 사이 5초간 다음 패턴을 반복하세요.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">호흡 패턴:</h3>
          <ul className="text-blue-700 dark:text-blue-300 space-y-1">
            <li>• 들숨 3초 → 멈춤 1초 → 날숨 4초.</li>
            <li>• 날숨 때 어깨의 긴장을 의식적으로 풀기.</li>
            <li>• 손가락을 가볍게 쥐었다 펴며 감각을 현재로 돌리기.</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            이 루틴은 자율신경계의 균형을 회복시켜 집중력 지속시간을 늘려줍니다. 조코비치와 나달 모두 이 방법을 경기 중 사용합니다.
          </p>
        </div>
      </section>

      <section id="mental-routine-step3" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          3단계 — 시선 고정: 외부 자극 차단
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          시선은 멘탈의 방향과 같습니다. 실수 후 관중석이나 하늘을 보는 순간, 뇌는 '외부 자극 모드'로 전환됩니다. 대신 라켓 스트링이나 베이스라인을 바라보며 <strong>시선을 고정</strong>하세요. 3초간 동일한 지점을 바라보는 것만으로도 뇌파가 안정됩니다.
        </p>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            실수 후 라켓을 한 번 쥐어 쳐다보는 행동에는 실제로 의미가 있습니다. 시선을 한 점에 모으면 집중의 회로가 다시 켜지기 때문입니다.
          </p>
        </div>
      </section>

      <section id="mental-routine-step4" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-yellow-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          4단계 — 이미지 트레이닝: 다음 포인트를 시각화
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          루틴의 네 번째 단계는 '시각화'입니다. 포인트 사이 10초 동안 다음 동작을 머릿속에 그려보세요.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">시각화 예시:</h3>
          <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• "다음 리턴은 중앙 깊숙이."</li>
            <li>• "서브 후 오른쪽으로 이동."</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            이런 구체적 이미지 한 장면이 실제 신경 회로를 자극해 근육 반응 속도를 높입니다. 스포츠 심리학 연구에 따르면, 시각화만으로도 반응 시간이 평균 12% 단축된다고 합니다.
          </p>
        </div>
      </section>

      <section id="mental-routine-step5" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          5단계 — 루틴 고정: 자신만의 '의식'을 만들어라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          이제 감정도, 호흡도, 시야도 정리됐다면 마지막은 '루틴 고정'입니다. 프로 선수들은 자신만의 '시그니처 루틴'을 갖고 있습니다.
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">나달의 루틴:</h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-sm">서브 전 수건 → 머리카락 정리 → 베이스라인 리듬.</p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">페더러의 루틴:</h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-sm">베이스라인 뒤 3걸음 → 토스 점 확인 → 스윙.</p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">당신의 루틴:</h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-sm">"숨 한 번 + 라켓 터치 + 시선 고정"이면 충분합니다.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            이 행동이 반복되면, 뇌는 "이 신호가 들어오면 경기 모드로 전환해야 한다"고 학습합니다. 결국 루틴은 '집중의 스위치' 역할을 합니다.
          </p>
        </div>
      </section>

      <section id="geo-mental-environment" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          GEO 멘탈 환경 대응
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (실내 시합 많아 소음 적음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">자기 루틴을 길게 가져가도 괜찮습니다.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (해안 바람, 소음 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">시선 루틴을 짧게, 호흡 루틴을 더 자주.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (더위로 피로 누적):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">짧고 강한 호흡 루틴으로 체력 소모 최소화.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람·관광객 소음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">감각 루틴 대신 시각화 중심으로 전환.</p>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>👉 GEO 팁:</strong> 지역별 환경이 멘탈에 미치는 영향은 생각보다 큽니다. 소음, 날씨, 관중 등 주변 조건에 맞춰 루틴을 미세 조정하세요.
          </p>
        </div>
      </section>

      <section id="conclusion-mental-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          결론 — 루틴은 '심리의 근육'이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          멘탈은 타고나는 게 아닙니다. 감정 인식 → 호흡 리셋 → 시선 고정 → 시각화 → 루틴 고정. 이 다섯 단계를 반복하면 집중력이 '자동화'됩니다. 테니스는 감정이 흔들릴 때 실수가 나오고, 실수가 흐름을 무너뜨립니다. 멘탈 루틴은 그 흐름을 다시 잡는 '보이지 않는 기술'입니다. 기술보다 멘탈이 승부를 결정짓는 순간, 이 다섯 단계가 당신의 가장 강력한 무기가 될 것입니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        </div>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

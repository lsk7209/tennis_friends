import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: '테니스 점수 체계 완벽 가이드 — 15-30-40의 유래부터 타이브레이크 마스터까지 | 초보와 상급자 모두를 위한 규칙 백과사전',
  description: '테니스 점수가 왜 15 단위인지 아시나요? 타이브레이크 7포인트와 10포인트의 차이, 노애드(No-Ad) 유의점, 그리고 점수 호출 에티켓까지 완벽 정리.',
  keywords: ['테니스 점수 규칙', '타이브레이크 규칙', '슈퍼 타이브레이크', '노애드 경기', '테니스 점수 부르는 법', '테니스 에티켓'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-scoring-system-guide',
  },
  openGraph: {
    title: '테니스 점수 체계 완벽 가이드 — 15-30-40의 유래부터 타이브레이크 마스터까지',
    description: '테니스 점수가 왜 15 단위인지 아시나요? 타이브레이크 7포인트와 10포인트의 차이, 노애드(No-Ad) 유의점, 그리고 점수 호출 에티켓까지 완벽 정리.',
    url: 'https://www.tennisfrens.com/blog/tennis-scoring-system-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 점수 체계 완벽 가이드 — 15-30-40의 유래부터 타이브레이크 마스터까지',
    description: '점수를 알면 테니스의 리듬이 보입니다. 규칙 그 이상의 전략적 가치를 발견하세요.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'origin-of-scoring', text: '1. 신비로운 숫자: 왜 1, 2, 3이 아니라 15, 30, 40인가?', depth: 2 },
  { id: 'tiebreak-mechanics', text: '2. 타이브레이크의 미립자 분석: 7점 vs 10점(슈퍼)', depth: 2 },
  { id: 'ad-vs-noad', text: '3. Ad vs No-Ad: 듀스 룰에 따른 경기 템포의 차이', depth: 2 },
  { id: 'scoring-etiquette', text: '4. 점수 호출 에티켓: "서버의 의무"와 매너', depth: 2 },
  { id: 'psychology-of-deuce-ad', text: '5. 코트의 심리학: 듀스 사이드 vs 애드 사이드', depth: 2 },
  { id: 'conclusion', text: '6. 결론: 점수는 실시간 전략의 나침반이다', depth: 2 },
];

const faqs = [
  {
    q: '점수를 누가 불러야 하나요?',
    a: '원칙적으로 서버가 서브를 넣기 전, 상대가 들릴 수 있도록 명확하게 현재 점수를 불러야 합니다.'
  },
  {
    q: '6-6에서 타이브레이크를 할 때 코트 체인지는 언제 하나요?',
    a: '합산 점수가 6의 배수(6, 12, 18...)가 될 때마다 코트를 바꿉니다.'
  }
];

export default function TennisScoringSystemGuidePage() {
  const title = '테니스 점수: 실력보다 중요한 규칙의 이해';
  const excerpt = '단순한 숫자 나열이 아닙니다. 테니스 점수 체계는 선수들의 심리적 한계를 시험하고 전술적 변화를 유도하는 정교한 시스템입니다.';

  return (
    <Article slug="tennis-scoring-system-guide" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300">규칙 백과</Badge>
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">스포츠 매너</Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold italic text-center">
          "점수를 부르는 목소리에는 그 선수의 품격이 담겨 있다."
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="origin-of-scoring" className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. 신비로운 숫자: 왜 15, 30, 40인가?</h2>
        <p className="mb-4">테니스 점수 단위는 중세 시대 60진법 시계나 '주 드 폼(Jeu de paume)' 경기에서 유래했다는 설이 지배적입니다.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
          <div className="p-3 bg-slate-50 dark:bg-slate-900 text-center rounded-lg border-b-4 border-blue-500">
            <h5 className="font-bold text-lg">15</h5>
            <p className="text-[10px]">하나 (Love to Fifteen)</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-900 text-center rounded-lg border-b-4 border-blue-500">
            <h5 className="font-bold text-lg">30</h5>
            <p className="text-[10px]">둘 (Thirty)</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-900 text-center rounded-lg border-b-4 border-blue-500">
            <h5 className="font-bold text-lg">40</h5>
            <p className="text-[10px]">셋 (Forty)</p>
          </div>
        </div>
        <p className="text-xs text-slate-500 italic">* 45가 아닌 40인 이유는 발음하기 편하게 축약되었기 때문이라는 분석이 유력합니다.</p>
      </section>

      <section id="tiebreak-mechanics" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. 타이브레이크의 미립자 분석: 7점 vs 10점</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-2 text-indigo-600">Standard Tie-break (7 Points)</h4>
              <p className="text-xs">일반적으로 세트 스코어 6-6일 때 시행. 7점을 먼저 따고 2점 차가 나야 이깁니다.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-2 text-purple-600">Super Tie-break (10 Points)</h4>
              <p className="text-xs">주로 복식 경기에서 세트 스코어 1-1인 경우 마지막 세트 대신 진행. 10점을 먼저 따야 합니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="ad-vs-noad" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. Ad vs No-Ad: 듀스 룰의 차이</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-4 bg-gray-50 dark:bg-slate-900 rounded-xl">
            <h5 className="font-bold text-xs mb-2">Advantage (전통 방식)</h5>
            <p className="text-[10px] leading-relaxed">듀스 이후 두 포인트를 연속으로 따야 함. 체력전과 심리전이 극대화됩니다.</p>
          </div>
          <div className="flex-1 p-4 bg-gray-50 dark:bg-slate-900 rounded-xl">
            <h5 className="font-bold text-xs mb-2">No-Ad (노애드 방식)</h5>
            <p className="text-[10px] leading-relaxed">듀스 시 다음 포인트 하나로 경기가 결정됨(Golden Point). 시간 단축과 박진감을 위해 동호회 경기에서 주로 사용합니다.</p>
          </div>
        </div>
      </section>

      <section id="scoring-etiquette" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. 점수 호출 에티켓: "서버의 의무"</h2>
        <div className="p-6 bg-slate-900 text-white rounded-2xl relative">
          <h4 className="text-blue-400 font-bold text-sm mb-3">Professional Etiquette Guide</h4>
          <ul className="text-xs space-y-3">
            <li>• <strong>Score First:</strong> 서버가 서브를 넣기 전 항상 점수를 부르세요. (예: "Thirty-Fifteen")</li>
            <li>• <strong>Server's Score First:</strong> 항상 자신의 점수를 먼저 부릅니다.</li>
            <li>• <strong>Final Point:</strong> 게임이 끝났을 때는 "Game, [Name]"이라고 명확히 선언하세요.</li>
          </ul>
        </div>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. 결론: 점수는 실시간 전략의 나침반이다</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          테니스 점수를 단순히 숫자로만 보지 마세요. <strong>30-30</strong>은 긴장이 시작되는 점수이고, <strong>40-0</strong>은 여유를 가지고 새로운 시도를 해볼 수 있는 점수입니다. 점수의 흐름을 읽는 자가 결국 그 게임의 주인이 됩니다.
        </p>
      </section>

      <FAQ items={faqs} />
    </Article>
  );
}

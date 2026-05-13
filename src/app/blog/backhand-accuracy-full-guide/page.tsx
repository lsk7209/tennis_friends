import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: '백핸드 정확도 향상 완전 가이드 | 원핸드·투핸드 타점·라켓면·리듬',
  description: '백핸드 정확도를 높이려면 힘이 아니라 타점과 각도를 조정해야 한다. 원핸드·투핸드별 교정 루틴, 지역 코트별 전략, 20분 감각 회복 훈련까지.',
  keywords: ['백핸드', '테니스 백핸드', '원핸드 백핸드', '투핸드 백핸드', '타점', '라켓면 각도', '리듬', '폼 교정'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/backhand-accuracy-full-guide',
  },
  openGraph: {
    title: '백핸드 정확도 향상 완전 가이드 | 원핸드·투핸드 타점·라켓면·리듬',
    description: '백핸드 정확도를 높이려면 힘이 아니라 타점과 각도를 조정해야 한다. 원핸드·투핸드별 교정 루틴, 지역 코트별 전략, 20분 감각 회복 훈련까지.',
    url: 'https://www.tennisfrens.com/blog/backhand-accuracy-full-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '백핸드 정확도 향상 완전 가이드 | 원핸드·투핸드 타점·라켓면·리듬',
    description: '백핸드 정확도를 높이려면 힘이 아니라 타점과 각도를 조정해야 한다. 원핸드·투핸드별 교정 루틴, 지역 코트별 전략, 20분 감각 회복 훈련까지.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'momentum-science', text: '1. 운동량의 과학: 선형(Linear) vs 회전(Rotational)', depth: 2 },
  { id: 'push-pull-mechanism', text: '2. 투핸드 백핸드: 밀고 당기는(Push-Pull) 역학', depth: 2 },
  { id: 'lead-shoulder-control', text: '3. 원핸드 백핸드: 앞 어깨가 지배하는 방향성', depth: 2 },
  { id: 'racket-face-physics', text: '4. 라켓면 물리학: 1도의 차이가 만드는 아웃', depth: 2 },
  { id: 'video-analysis-checklist', text: '5. 비디오 분석 체크리스트 (프로급 각도)', depth: 2 },
  { id: 'accuracy-recovery-routine', text: '6. 20분 정확도 회복 루틴', depth: 2 },
  { id: 'conclusion', text: '7. 결론: 백핸드는 정교한 수학이다', depth: 2 },
];

const faqs = [
  {
    q: '원핸드와 투핸드 중 무엇이 정확도가 높은가요?',
    a: '투핸드는 컨트롤이 안정적이고, 원핸드는 타격 범위가 넓어 스핀에 유리합니다. 유연성에 맞춰 선택하세요.'
  },
  {
    q: '백핸드가 자꾸 네트에 걸리는 이유는?',
    a: '피니시가 낮거나 체중 이동이 뒤에 머물러서입니다. 어깨 위까지 팔로스루를 이어가세요.'
  }
];

export default function BackhandAccuracyFullGuidePage() {
  const title = '백핸드 정확도는 \'힘\'이 아니라 각도의 예술이다';
  const excerpt = '백핸드의 정확도는 근력이 아니라 타점의 3cm와 라켓면의 1도에서 결정된다. 현대 테니스의 선형/회전 운동량 모델로 백핸드를 재정의합니다.';

  return (
    <Article slug="backhand-accuracy-full-guide" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            백핸드 정밀 분석
          </Badge>
          <Badge className="bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300">
            폼 최적화
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          많은 아마추어가 백핸드 실수 시 '힘'을 탓하지만, 백핸드는 본질적으로 <strong>각도와 타이밍의 수학</strong>입니다. 라켓면이 1도 열리거나 타점이 3cm 밀리면 공은 코트를 벗어납니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="momentum-science" className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. 운동량의 과학: 선형(Linear) vs 회전(Rotational)</h2>
        <p className="mb-4">백핸드 에너지를 생성하는 두 가지 방식입니다. 상황에 맞는 모멘텀 선택이 정확도를 높입니다.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="p-5 border-t-4 border-blue-500 bg-slate-50 dark:bg-slate-900 rounded-b-xl shadow-sm">
            <h4 className="font-bold text-blue-600 mb-2">선형 운동량 (Linear)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">체중을 뒤에서 앞으로 옮기며 공을 밀어내는 힘. 정확도가 매우 높으며 공격적인 찬스 볼에서 주로 사용됩니다.</p>
          </div>
          <div className="p-5 border-t-4 border-purple-500 bg-slate-50 dark:bg-slate-900 rounded-b-xl shadow-sm">
            <h4 className="font-bold text-purple-600 mb-2">회전 운동량 (Rotational)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">몸동작의 꼬임을 이용해 라켓 스피드를 높이는 힘. 수비 상황이나 높은 베이스라인 랠리에서 강력한 스핀을 만듭니다.</p>
          </div>
        </div>
      </section>

      <section id="push-pull-mechanism" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. 투핸드 백핸드: 밀고 당기는(Push-Pull) 역학</h2>
        <p className="mb-6">투핸드 백핸드는 사실상 <strong>'왼손 포핸드'</strong>가 주도합니다. 양손의 명확한 역할 분담이 일관성을 만듭니다.</p>
        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border-l-4 border-blue-500 mb-6">
          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <span className="text-blue-600 font-bold">PUSH</span>
              <p className="text-sm">왼손(오른손잡이 기준)이 지배적으로 앞으로 밀고 나가는 파워를 제공합니다.</p>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-indigo-600 font-bold">PULL</span>
              <p className="text-sm">오른손은 가이드 역할을 하며, 조기에 스윙을 멈추거나 틀어지지 않게 고정하는 역할을 합니다.</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="lead-shoulder-control" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. 원핸드 백핸드: 앞 어깨가 지배하는 방향성</h2>
        <p className="mb-6">원핸드 백핸드의 가장 흔한 실수는 어깨가 너무 빨리 열리는 것입니다.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl italic text-sm border-l-4 border-gray-400">
          "임팩트 순간 몸이 정면을 바라보는 것이 아니라, <strong>오른쪽 어깨가 타겟을 향하고 있어야</strong> 합니다." - 로저 페더러
        </div>
        <p className="mt-4 text-sm leading-relaxed">어깨를 닫아둔 채로 팔을 펴서 휘두를 때만 원핸드 특유의 폭발적인 힘과 긴 직선 궤도가 완성됩니다.</p>
      </section>

      <section id="racket-face-physics" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. 라켓면 물리학: 1도의 차이가 만드는 아웃</h2>
        <p className="mb-4">라켓면 각도는 임팩트 순간 고정되어야 합니다. 손목의 '흔들림'을 방지하는 손바닥 감각 팁입니다.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white dark:bg-slate-900 border rounded-lg">
            <h5 className="font-bold text-xs mb-1">플랫 포인트</h5>
            <p className="text-[10px]">지면과 90도 평행. 강력한 위너에 사용.</p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-900 border rounded-lg">
            <h5 className="font-bold text-xs mb-1">탑스핀 클로즈</h5>
            <p className="text-[10px]">지면과 85도. 아래에서 위로 쓸어 올리는 궤적.</p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-900 border rounded-lg">
            <h5 className="font-bold text-xs mb-1">슬라이스 오픈</h5>
            <p className="text-[10px]">지면과 100~110도. 공 아래를 깎아 체공 지연.</p>
          </div>
        </div>
      </section>

      <section id="video-analysis-checklist" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. 비디오 분석 체크리스트 (프로급 각도)</h2>
        <p className="mb-6 text-sm">자신의 백핸드 영상을 측면(Side)에서 촬영하여 다음 3가지를 점검하세요.</p>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Badge variant="outline">CHECK 1</Badge>
                <span className="text-sm">임팩트 시 앞발 무릎이 단단히 고정되어 있는가? (에너지 누수 환인)</span>
              </li>
              <li className="flex gap-3">
                <Badge variant="outline">CHECK 2</Badge>
                <span className="text-sm">테이크백 시 라켓 헤드가 머리 위에 있는가? (유닛 턴 깊이)</span>
              </li>
              <li className="flex gap-3">
                <Badge variant="outline">CHECK 3</Badge>
                <span className="text-sm">임팩트 후 팔로스루가 목을 감싸거나 높이 뻗는가?</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id="accuracy-recovery-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. 20분 정확도 회복 루틴</h2>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <h5 className="font-bold text-sm">1. 미니 랠리 (5분)</h5>
            <p className="text-xs">왼손만으로 공을 넘기는 컨트롤 훈련.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <h5 className="font-bold text-sm">2. 콘 타겟 드릴 (10분)</h5>
            <p className="text-xs">크로스 코트와 다운 더 라인을 번갈아 조준.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <h5 className="font-bold text-sm">3. 섀도우 스윙 (5분)</h5>
            <p className="text-xs">완벽한 임팩트 높이 시각화 후 빈 스윙.</p>
          </div>
        </div>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. 결론: 백핸드는 정교한 수학이다</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          백핸드는 감이 아니라 <strong>데이터와 정렬</strong>의 결과물입니다. 발의 위치, 어깨 각도, 라켓의 기울기 이 세 가지를 일치시키는 연습을 반복하세요. 테니스에서 백핸드는 가장 아름다운 기술이자, 상대를 압박하는 가장 정교한 무기가 될 것입니다.
        </p>
      </section>

      <FAQ items={faqs} />
    </Article>
  );
}

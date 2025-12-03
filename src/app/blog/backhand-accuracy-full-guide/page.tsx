import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '백핸드 정확도 향상 완전 가이드 | 원핸드·투핸드 타점·라켓면·리듬',
  description: '백핸드 정확도를 높이려면 힘이 아니라 타점과 각도를 조정해야 한다. 원핸드·투핸드별 교정 루틴, 지역 코트별 전략, 20분 감각 회복 훈련까지.',
  keywords: ['백핸드', '테니스 백핸드', '원핸드 백핸드', '투핸드 백핸드', '타점', '라켓면 각도', '리듬', '폼 교정'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/backhand-accuracy-full-guide',
  },
  openGraph: {
    title: '백핸드 정확도 향상 완전 가이드 | 원핸드·투핸드 타점·라켓면·리듬',
    description: '백핸드 정확도를 높이려면 힘이 아니라 타점과 각도를 조정해야 한다. 원핸드·투핸드별 교정 루틴, 지역 코트별 전략, 20분 감각 회복 훈련까지.',
    url: 'https://tennisfriends.co.kr/blog/backhand-accuracy-full-guide',
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
  { id: 'backhand-linear-swing', text: '백핸드의 본질은 \'선형 스윙\'이다', depth: 2 },
  { id: 'racket-face-angle-wrist', text: '라켓면의 각도와 손목 고정', depth: 2 },
  { id: 'lower-body-rhythm-balance', text: '하체 리듬과 중심 이동', depth: 2 },
  { id: 'regional-backhand-strategy', text: '지역별 백핸드 전략', depth: 2 },
  { id: 'accuracy-recovery-routine', text: '20분 정확도 회복 루틴', depth: 2 },
  { id: 'common-errors-correction', text: '흔한 오류 3가지와 교정법', depth: 2 },
  { id: 'backhand-angle-art', text: '결론 — 백핸드는 각도의 언어다', depth: 2 },
];

const faqs = [
  {
    q: '원핸드와 투핸드 중 무엇이 정확도가 높은가요?',
    a: '초보는 투핸드가 안정적이고, 원핸드는 스윙 범위가 길어 스핀량이 많습니다. 본인 어깨 유연성과 스윙 템포에 맞추세요.'
  },
  {
    q: '백핸드가 자꾸 뜨는 이유는?',
    a: '라켓면이 열렸거나 타점이 밀렸기 때문입니다. 타점을 몸보다 20~30cm 앞에 두세요.'
  },
  {
    q: '네트 미스를 줄이는 방법은?',
    a: '팔로스루를 짧게 끊지 말고, 임팩트 후 어깨를 완전히 회전시키세요.'
  },
  {
    q: '높은 볼 백핸드는 어떻게 치나요?',
    a: '무릎을 낮춰 수평을 유지하고, 스핀을 더 주어 아크로 넘기세요.'
  },
  {
    q: '지역별로 타점이 다른 이유는?',
    a: '기온·습도·바람이 공의 반발과 바운스 높이에 영향을 주기 때문입니다.'
  }
];

export default function BackhandAccuracyFullGuidePage() {
  const title = '백핸드 정확도는 \'힘\'이 아니라 각도의 예술이다 — 원핸드·투핸드별 타점, 라켓면, 리듬, 지역별 코트 적응까지 완전 가이드';
  const excerpt = '백핸드의 정확도는 근력이 아니라 타점의 3cm와 라켓면의 1도에서 결정된다. 원핸드·투핸드별 폼 교정, 코트별 대응, 루틴까지 완전 정리.';

  return (
    <Article slug="backhand-accuracy-full-guide" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950 dark:to-slate-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
            백핸드 마스터
          </Badge>
          <Badge className="bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300">
            폼 교정
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          많은 아마추어 테니스인들이 백핸드를 어려워하는 이유는 단순합니다. 공이 네트에 걸리거나 아웃이 나면 대부분 '힘이 부족하다'고 생각하지만, 사실 백핸드의 정확도는 '힘'이 아니라 '각도와 타점의 문제'입니다. 라켓면이 1도 열리거나 타점이 3cm 밀리면, 공은 바로 네트나 펜스에 꽂힙니다. 이를 바로잡기 위해서는 백핸드의 본질적인 메커니즘—타점, 회전, 리듬—을 이해해야 합니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/backhand-technique-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">백핸드 테크닉 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/technique/backhand-fundamentals.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 백핸드 기초 가이드</a></li>
        </ul>
      </div>

      <section id="backhand-linear-swing" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-gray-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          백핸드의 본질은 '선형 스윙'이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          백핸드는 포핸드보다 궤적이 짧습니다. 원핸드는 몸의 회전으로 선을 만들고, 투핸드는 왼손(오른손잡이 기준)의 주도 아래 직선에 가까운 임팩트를 완성합니다. 중요한 점은 '선형 스윙'이라는 사실입니다. 공을 세게 밀어치려 하지 말고, 일정한 궤적을 따라 통과시켜야 컨트롤이 살아납니다.
        </p>

        <div className="bg-gray-50 dark:bg-gray-950 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">원핸드 vs 투핸드의 핵심 차이</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">원핸드의 핵심</h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                임팩트는 허리 높이에서 몸보다 25~30cm 앞. 어깨 회전이 완전히 열리기 전에 맞추면 라켓면이 닫히며 스핀을 얹기 쉽습니다.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">투핸드의 핵심</h4>
              <p className="text-green-700 dark:text-green-300 text-sm">
                타점은 몸 앞 20~25cm, 두 손의 균형이 6:4 정도. 왼손이 방향을, 오른손이 안정감을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="racket-face-angle-wrist" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-slate-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          라켓면의 각도와 손목 고정
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          라켓면이 열리면 공은 뜨고, 닫히면 네트로 갑니다. 해결책은 '손목 고정'입니다. 손목을 세게 잡는다는 뜻이 아니라, 임팩트 전후 0.1초 동안 손목 각을 유지하는 것입니다. 특히 투핸드 백핸드에서는 왼손이 너무 강하면 라켓면이 닫혀 공이 아래로 깔립니다. 반대로 오른손만 쓰면 공이 뜹니다. 힘의 분배를 6(왼손):4(오른손)로 유지하세요.
        </p>

        <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg">
          <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-3">라켓면 각도 원칙</h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>• 라켓면은 임팩트 순간 지면과 약 80~85도를 이루는 것이 이상적</li>
            <li>• 원핸드: 82도, 투핸드: 84도 전후가 안정적인 반발을 만들어냄</li>
            <li>• 라켓을 뒤로 많이 젖히는 것은 오히려 불안정한 궤적을 유발</li>
            <li>• 공식: '짧은 백스윙, 단단한 임팩트, 긴 팔로스루'</li>
          </ul>
        </div>
      </section>

      <section id="lower-body-rhythm-balance" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          하체 리듬과 중심 이동
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          정확한 백핸드는 하체에서 시작합니다. 임팩트 순간 체중이 뒤에서 앞으로 60% 이상 이동해야 공이 밀리지 않습니다. 스플릿 스텝→작은 보정 스텝→임팩트→정지→복귀까지의 리듬은 4박자로 반복하세요. 한 발이라도 늦으면 타점이 뒤로 밀리면서 라켓면이 열립니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">하드코트</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">중심 낮추고 무릎 더 사용</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">클레이코트</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">슬라이드 후 중심 복귀</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">인조잔디</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">타점 약간 앞으로</p>
          </div>
        </div>
      </section>

      <section id="regional-backhand-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          지역별 백핸드 전략
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          한국의 코트 환경은 지역별로 다르다. 백핸드 전략도 그에 맞춰 조정해야 한다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트, 건조)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">라켓면을 1~2도 닫고 플랫성 스윙.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습도 높음)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">스윙을 길게, 투핸드 컨트롤 중심.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·열기)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">라켓면을 세워 스핀 추가.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">발 간격 넓히고 임팩트를 짧게, 무게 중심 낮춰 흔들림 방지.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>💡 테니스 팁:</strong> 이렇게 지역별로 코트 특성에 맞춰 각도를 미세 조정하면 실제 경기력에 큰 차이를 만듭니다. 코트 환경을 고려한 전략적 접근이 승리의 핵심입니다.
          </p>
        </div>
      </section>

      <section id="accuracy-recovery-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          20분 정확도 회복 루틴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">1️⃣ 그림자 스윙 (5분) — 거울 앞에서 임팩트 타점 고정</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">백스윙–임팩트–팔로스루 리듬 반복.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">2️⃣ 미니 랠리 (5분) — 3~4m 거리에서 컨트롤 중심</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">라켓면 1도 닫기 유지.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">3️⃣ 콘 이동 드릴 (5분) — 좌우 1.5m 간격</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">스플릿→보정 스텝→임팩트 반복.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">4️⃣ 영상 피드백 (5분) — 폰으로 스윙 촬영</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">라켓면 각도와 팔로스루 점검.</p>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>👉 효과:</strong> 하루 20분만 투자해도 타점 감각이 눈에 띄게 개선됩니다.
          </p>
        </div>
      </section>

      <section id="common-errors-correction" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-rose-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          흔한 오류 3가지와 교정법
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">① 공이 뜸</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">
              타점이 뒤로 밀렸습니다. 앞발을 10cm 더 전진하세요.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
            <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-2">② 네트 미스</h3>
            <p className="text-orange-700 dark:text-orange-300 text-sm">
              팔로스루가 짧거나 체중 이동이 불충분합니다. 임팩트 후 어깨를 더 열어주세요.
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">③ 공이 좌우로 흔들림</h3>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              발 간격이 좁습니다. 보폭을 넓혀 안정성을 확보하세요.
            </p>
          </div>
        </div>
      </section>

      <section id="backhand-angle-art" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          결론 — 백핸드는 각도의 언어다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          백핸드는 감이 아니라 데이터의 영역입니다. 라켓면의 1도, 타점의 3cm, 중심의 5cm—이 세 가지가 정확도를 결정합니다. 스윙을 세게 할수록 오히려 불안정해집니다. '짧고 단단하게, 일정한 리듬으로, 중심을 앞으로'—이 문장을 몸에 새기면 백핸드가 달라질 겁니다. 힘이 아닌 각도의 예술, 그것이 진짜 백핸드입니다.
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

import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 풋워크 밸런스 훈련 | 하체 중심 리듬·균형 이동 완전정복',
  description: '테니스 풋워크 밸런스 향상 루틴. 하체 중심 이동과 리듬 훈련, 코트별 발 스텝 전략까지 완벽 가이드.',
  keywords: ['테니스 풋워크', '밸런스 훈련', '하체 리듬', '균형 이동', '스텝 훈련', '코트별 전략'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-footwork-balance-training-guide',
  },
  openGraph: {
    title: '테니스 풋워크 밸런스 훈련 | 하체 중심 리듬·균형 이동 완전정복',
    description: '테니스 풋워크 밸런스 향상 루틴. 하체 중심 이동과 리듬 훈련, 코트별 발 스텝 전략까지 완벽 가이드.',
    url: 'https://tennisfriends.co.kr/blog/tennis-footwork-balance-training-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 풋워크 밸런스 훈련 | 하체 중심 리듬·균형 이동 완전정복',
    description: '테니스 풋워크 밸런스 향상 루틴. 하체 중심 이동과 리듬 훈련, 코트별 발 스텝 전략까지 완벽 가이드.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'center-forward-concept', text: '중심은 \'앞쪽\'에 둬라 — 밸런스의 시작점', depth: 2 },
  { id: 'footwork-rhythm-core', text: '풋워크의 핵심은 속도가 아니라 리듬이다', depth: 2 },
  { id: 'lower-body-rhythm-training', text: '하체 리듬을 만드는 훈련 루틴', depth: 2 },
  { id: 'regional-court-footwork-strategy', text: '코트별 풋워크 밸런스 전략 — 서울·부산·광주·제주', depth: 2 },
  { id: 'center-movement-accurate-contact', text: '중심 이동이 정확한 타점을 만든다', depth: 2 },
  { id: 'balance-routine-recovery', text: '밸런스 루틴으로 하체 감각 되살리기', depth: 2 },
  { id: 'stability-over-speed', text: '빠름보다 안정이 실력이다', depth: 2 },
  { id: 'footwork-balance-checklist', text: '풋워크 밸런스 체크리스트', depth: 2 },
];

const faqs = [
  {
    q: '풋워크 훈련에서 가장 중요한 포인트는?',
    a: '발의 중심을 앞쪽에 두고 리듬을 일정하게 유지하는 것입니다. 리듬이 끊기면 스윙 타점이 흔들립니다.'
  },
  {
    q: '코트별로 풋워크 차이가 큰가요?',
    a: '네. 하드코트는 짧은 스텝, 클레이는 미끄러짐을 활용하는 롱스텝이 유리합니다.'
  },
  {
    q: '하체 밸런스를 빠르게 회복하는 법은?',
    a: '스플릿 스텝과 한발 버티기 훈련을 매일 반복하세요. 무게 중심 감각이 되살아납니다.'
  },
  {
    q: '풋워크 훈련을 얼마나 자주 해야 하나요?',
    a: '하루 10분씩이라도 꾸준히 하는 게 좋습니다. 단기간 집중보다 일상 루틴이 효과적입니다.'
  },
  {
    q: '리듬이 자꾸 깨질 때 대처법은?',
    a: '발소리를 의식해 리듬을 되찾으세요. 일정한 발박자가 안정된 타이밍을 만들어줍니다.'
  }
];

export default function TennisFootworkBalanceTrainingGuidePage() {
  const title = '테니스 풋워크 밸런스, 빠름보다 \'안정\'이 먼저다';
  const excerpt = '공을 쫓는 속도보다 중요한 건 중심을 잃지 않는 안정감이다. 프로 선수처럼 밸런스를 유지하는 하체 리듬과 스텝 훈련을 정리했다.';

  return (
    <Article slug="tennis-footwork-balance-training-guide" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950 dark:to-teal-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">
            풋워크 마스터
          </Badge>
          <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
            밸런스 훈련
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          공이 빠를수록 몸은 흔들리고, 중심을 잃으면 어떤 기술도 통하지 않는다. 테니스에서 풋워크는 단순한 이동이 아니라 '균형의 기술'이다. 좋은 스윙은 좋은 발에서 시작된다. 밸런스를 잃지 않는 하체 리듬이 곧 정확한 타점을 만든다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-footwork-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 풋워크 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/technique/footwork-fundamentals.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 풋워크 기초 가이드</a></li>
        </ul>
      </div>

      <section id="center-forward-concept" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          중심은 '앞쪽'에 둬라 — 밸런스의 시작점
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          대부분의 아마추어는 뒤꿈치에 무게를 두고 서 있다. 하지만 프로 선수의 발은 항상 <strong>볼(발 앞쪽)</strong>에 있다. 이렇게 하면 반응속도가 빨라지고, 갑작스러운 방향 전환에도 흔들리지 않는다.
        </p>

        <blockquote className="border-l-4 border-cyan-500 pl-6 py-4 bg-cyan-50 dark:bg-cyan-950 italic">
          <p className="text-cyan-800 dark:text-cyan-200">
            💡 "스윙이 무너지면 폼을 고치기 전에 발을 먼저 확인하라."
          </p>
        </blockquote>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            <strong>👉 훈련법:</strong> 제자리에서 무릎을 살짝 굽히고 발끝으로 가볍게 점프해보자. 착지 시 무게중심이 자연스럽게 앞쪽으로 이동하는 느낌이 '정상 밸런스'다.
          </p>
        </div>
      </section>

      <section id="footwork-rhythm-core" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          풋워크의 핵심은 속도가 아니라 리듬이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          빠른 발보다 중요한 건 '일정한 리듬'이다. 공의 속도에 따라 발걸음이 들쭉날쭉하면 타점이 흔들린다. 공이 빠를수록 스텝은 짧게, 느릴수록 스텝은 길게 유지해야 한다. 즉, 리듬의 속도는 공의 속도에 맞춰 조정하는 것이다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">상황</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">리듬 패턴</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 dark:border-gray-600">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">빠른 랠리</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">1-2 스텝 리듬</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">작은 발로 짧게 움직이기</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">느린 공</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">3박자 리듬</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">스윙 전에 여유 확보</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-600">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">네트 접근</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">2박자 리듬</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">빠른 반응 + 멈춤 준비</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-teal-800 dark:text-teal-200 text-sm">
            <strong>👉 실전 팁:</strong> 공을 치기 직전, '스플릿 스텝(split step)'을 꼭 하라. 리듬이 끊기면 타점이 무너진다.
          </p>
        </div>
      </section>

      <section id="lower-body-rhythm-training" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          하체 리듬을 만드는 훈련 루틴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">1️⃣ 사이드 스텝 10회 × 3세트 — 좌우 이동하면서 무게 중심 유지</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">2️⃣ 스플릿 스텝 점프 — 공이 오는 타이밍에 맞춰 제자리 점프 후 착지</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">3️⃣ 미니 콘 드릴 — 1m 간격의 콘 5개를 놓고 리듬 있게 이동</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">4️⃣ 백스텝 → 전진 스텝 연계 — 후퇴 후 다시 전진하는 타이밍 조절 훈련</h3>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>👉 핵심:</strong> 하체 리듬은 스윙 리듬보다 0.2초 빨라야 한다. 몸이 먼저 움직이고, 라켓은 따라와야 한다.
          </p>
        </div>
      </section>

      <section id="regional-court-footwork-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          코트별 풋워크 밸런스 전략 — 서울·부산·광주·제주
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          한국의 코트 환경은 지역별로 다르다. 풋워크 밸런스도 그에 맞춰 조정해야 한다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울(하드코트)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">마찰이 강하므로 짧고 빠른 스텝이 유리. 뒤꿈치 착지를 피하라.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산(습한 코트)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">표면이 미끄럽다. 무릎을 더 굽히고 중심을 낮게 유지.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">광주(클레이코트)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">미끄러짐 활용. 발을 밀어 스윙 타이밍 조절.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주(바람 많은 코트)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">발의 간격을 넓혀 흔들림 방지. 상체보다 하체로 방향 전환.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>👉 GEO 팁:</strong> "서울 하드코트 풋워크", "제주 테니스 밸런스" 같은 지역 키워드는 로컬 유입에 강하다.
          </p>
        </div>
      </section>

      <section id="center-movement-accurate-contact" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          중심 이동이 정확한 타점을 만든다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          풋워크는 결국 타점의 예고다. 공이 날아올 때 이미 중심이 어느 방향으로 이동 중이냐에 따라 임팩트가 결정된다. '스윙 타이밍'을 고민하기 전에, 발이 이미 다음 스텝을 준비해야 한다.
        </p>

        <blockquote className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-purple-950 italic">
          <p className="text-purple-800 dark:text-purple-200">
            💬 "라켓은 발이 만든 리듬 위에서만 움직인다." — 로저 페더러
          </p>
        </blockquote>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>👉 훈련:</strong> 벽치기 연습 시 '공을 치기 전 한 스텝 더' 움직여라. 이 리듬이 실제 경기의 타점 안정성을 만든다.
          </p>
        </div>
      </section>

      <section id="balance-routine-recovery" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          밸런스 루틴으로 하체 감각 되살리기
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">1️⃣ 워밍업 점프 30초 — 무릎 리듬 활성화</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">2️⃣ 사이드 스텝 드릴 2분 — 좌우 중심 전환 훈련</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">3️⃣ 스플릿 리듬 훈련 3분 — 공 없이 점프 타이밍 맞추기</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">4️⃣ 마무리 밸런스 체크 — 정지 후 한 발로 5초 버티기</h3>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>👉 루틴 활용:</strong> 매일 10분만 반복해도 하체 리듬이 되살아난다. 하루 쉬면 감이 떨어지고, 사흘 쉬면 타점이 무너진다.
          </p>
        </div>
      </section>

      <section id="stability-over-speed" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-rose-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          빠름보다 안정이 실력이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          경기 중에 공을 쫓다보면 '속도'에 집중하기 쉽다. 그러나 진짜 고수는 빠르게 움직이는 대신 <strong>리듬을 유지하며 안정적으로 서 있다.</strong> 중심이 흔들리지 않는 발은 어떤 공도 받아낼 수 있다. 빠름보다 안정, 그것이 밸런스의 본질이다.
        </p>
      </section>

      <section id="footwork-balance-checklist" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-slate-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          풋워크 밸런스 체크리스트
        </h2>

        <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-lg">
          <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4">👉 풋워크 밸런스 체크리스트</h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>• 발의 무게 중심이 앞쪽에 있는가?</li>
            <li>• 스텝 리듬이 일정한가?</li>
            <li>• 코트별 환경에 맞게 중심 이동이 조정되는가?</li>
            <li>• 하체가 스윙보다 먼저 움직이는가?</li>
          </ul>
        </div>
      </section>

      
      {/* FAQ Section */}
      <FAQ items={faqs} />

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        </div>
      </div>
    </Article>
  );
}

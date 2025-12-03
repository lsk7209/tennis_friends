import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 중급자의 경기 운영법 — 포인트 설계와 리듬 조절의 기술 | 이기는 경기의 흐름을 만드는 전략적 사고',
  description: '중급자에게 필요한 건 기술이 아니라 \'흐름의 감각\'이다. 포인트 설계와 리듬 조절이 승부를 만든다.',
  keywords: ['테니스 전략', '중급자', '포인트 설계', '리듬 조절', '경기 운영', '승부 전략'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-intermediate-match-strategy',
  },
  openGraph: {
    title: '테니스 중급자의 경기 운영법 — 포인트 설계와 리듬 조절의 기술 | 이기는 경기의 흐름을 만드는 전략적 사고',
    description: '중급자에게 필요한 건 기술이 아니라 \'흐름의 감각\'이다. 포인트 설계와 리듬 조절이 승부를 만든다.',
    url: 'https://tennisfriends.co.kr/blog/tennis-intermediate-match-strategy',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 중급자의 경기 운영법 — 포인트 설계와 리듬 조절의 기술 | 이기는 경기의 흐름을 만드는 전략적 사고',
    description: '중급자에게 필요한 건 기술이 아니라 \'흐름의 감각\'이다. 포인트 설계와 리듬 조절이 승부를 만든다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'point-design-concept', text: '1. 포인트 설계란 무엇인가', depth: 2 },
  { id: 'rhythm-control-by-point', text: '2. 포인트별 리듬 조절 — 빠르게만 치면 진다', depth: 2 },
  { id: 'opponent-type-strategy', text: '3. 상대 유형별 운영 전략', depth: 2 },
  { id: 'strategic-thinking-by-section', text: '4. 포인트 구간별 전략적 사고', depth: 2 },
  { id: 'regional-match-strategy', text: '5. 지역별 경기 운영 전략', depth: 2 },
  { id: 'match-routine-thinking-flow', text: '6. 실전 루틴 — 경기 중 생각의 흐름 정리', depth: 2 },
  { id: 'winning-sentence', text: '7. 승부를 가르는 한 문장', depth: 2 },
  { id: 'conclusion-intermediate-wall', text: '결론 — 중급자의 벽은 \'생각의 속도\'에서 결정된다', depth: 2 },
];

const faqs = [
  {
    q: '경기 중 리듬이 자꾸 깨집니다.',
    a: '호흡 루틴을 추가하세요. 3초 복식호흡 후 \'리듬\' 워드를 반복하면 안정됩니다.'
  },
  {
    q: '상대가 너무 공격적일 때는?',
    a: '공을 깊게 보내 상대를 뒤로 밀고, 랠리를 길게 가져가세요.'
  },
  {
    q: '템포 조절은 어떻게 연습하나요?',
    a: '속도와 회전을 의도적으로 바꾸는 랠리 연습을 하세요. \'느림→빠름\' 리듬 훈련이 효과적입니다.'
  },
  {
    q: '포인트 설계가 어렵습니다.',
    a: '시작은 단순하게 하세요. \'백핸드 유도 후 네트 전진\' 패턴부터 익히면 됩니다.'
  },
  {
    q: '코트 환경이 경기 운영에 왜 중요한가요?',
    a: '지역별 코트 반발과 습도가 공의 속도에 영향을 주기 때문입니다. 환경을 알면 전략이 바뀝니다.'
  }
];

export default function TennisIntermediateMatchStrategyPage() {
  const title = '테니스 중급자의 경기 운영법 — 포인트 설계와 리듬 조절의 기술 | 이기는 경기의 흐름을 만드는 전략적 사고';
  const excerpt = '중급자에게 필요한 건 기술이 아니라 \'흐름의 감각\'이다. 포인트 설계와 리듬 조절이 승부를 만든다.';

  return (
    <Article slug="tennis-intermediate-match-strategy" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            전략 가이드
          </Badge>
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
            중급자
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스 중급자는 '기술은 되지만 경기력이 불안한 단계'입니다. 공은 잘 치지만, 경기에서는 이기지 못하는 이유는 단 하나 — '포인트 설계 능력'이 없기 때문입니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-strategy-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 전략 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-strategy.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 테니스 전략 가이드</a></li>
        </ul>
      </div>

      <section id="point-design-concept" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          포인트 설계란 무엇인가
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          포인트 설계는 단순히 공을 이어가는 것이 아니라, '상대의 약점을 유도해 득점 패턴을 만드는 사고 과정'입니다.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">예시:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-blue-800 dark:text-blue-200">상대 백핸드로 유도 →</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-blue-800 dark:text-blue-200">짧은 공 발생 →</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-blue-800 dark:text-blue-200">네트 전진 →</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <strong className="text-blue-800 dark:text-blue-200">발리 마무리.</strong>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          이 일련의 흐름이 하나의 '포인트 설계'입니다.
        </p>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>💡 핵심:</strong> 중급자 단계부터는 '힘'보다 '흐름'을 다뤄야 합니다.
          </p>
        </div>
      </section>

      <section id="rhythm-control-by-point" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          포인트별 리듬 조절 — 빠르게만 치면 진다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          공이 빠르면 강해 보이지만, 리듬이 일정하지 않으면 실수가 쌓입니다. 경기 중에는 '리듬 변주'가 필요합니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">리듬 변화</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">효과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">빠른 템포</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">상대 압박, 실수 유도</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">느린 템포</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">자신의 타이밍 회복, 에너지 절약</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">템포 혼합</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">상대의 예측 방해</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>💡 팁:</strong> 듀스 상황에서는 '속도를 줄여서 정확도로 압박'하세요. 급할수록 느리게 치는 것이 상급자의 리듬입니다.
          </p>
        </div>
      </section>

      <section id="opponent-type-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          상대 유형별 운영 전략
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">상대 유형</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">특징</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">대응 전략</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">공격형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">빠른 타구, 짧은 랠리</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">깊은 탑스핀으로 체력전 유도</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">수비형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">안정적, 실수 적음</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">각도 넓게 공략 + 네트 전진</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">감각형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">변화 많음, 속임수 사용</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">리듬 일정하게 유지, 예측 배제</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">파워형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">서브·포핸드 중심</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">리턴을 깊게, 수비 후 카운터</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>핵심 문장:</strong> "상대를 이기는 게 아니라, 리듬을 깨뜨리는 것이 목표다."
          </p>
        </div>
      </section>

      <section id="strategic-thinking-by-section" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          포인트 구간별 전략적 사고
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">1~3구: 주도권 설정</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">강한 서브·깊은 리턴으로 주도권 확보.</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">4~6구: 상대 리듬 파악</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">속도 조절, 스핀 변화로 상대 패턴 분석.</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">7구 이후: 체력전</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">상대 움직임 읽고 짧은 각으로 마무리.</p>
          </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            <strong>💡 팁:</strong> 5구 이상 이어질 경우, 실수는 타이밍보다 '집중력 저하' 때문입니다. 포인트 중 호흡을 조절하세요.
          </p>
        </div>
      </section>

      <section id="regional-match-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          지역별 경기 운영 전략
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">반발 빠름 → 템포 조절 중요, 스핀 깊이 유지.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습한 환경):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 무거움 → 에너지 배분형 운영 필요.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 튐 강함 → 빠른 첫 스트라이크로 짧은 포인트 전개.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 흔들림 큼 → 네트 플레이 비중 확대.</p>
          </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            <strong>📍 GEO 팁:</strong> 환경에 맞게 리듬을 조절하는 것이 진짜 '전략적 운영'입니다.
          </p>
        </div>
      </section>

      <section id="match-routine-thinking-flow" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          실전 루틴 — 경기 중 생각의 흐름 정리
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg">
            <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-2">1️⃣ 서브 전 — 목표 지역 1곳만 상상.</h3>
          </div>
          <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg">
            <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-2">2️⃣ 랠리 중 — 다음 구상하지 말고 '현재 공'만 집중.</h3>
          </div>
          <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg">
            <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-2">3️⃣ 포인트 후 — 루틴 워드 "리듬"으로 감정 리셋.</h3>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            <strong>멘탈 팁:</strong> 실수를 분석하지 말고 '패턴'을 점검하세요. 감정보다 구조를 보는 것이 전략적 사고의 시작입니다.
          </p>
        </div>
      </section>

      <section id="winning-sentence" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          승부를 가르는 한 문장
        </h2>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-center text-lg font-medium">
            "공을 이기려 하지 말고, 흐름을 이겨라."
          </p>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
          포인트 하나하나의 흐름을 설계하는 순간, 경기 전체의 리듬을 주도할 수 있습니다. 중급자는 이제 기술이 아니라 <strong>흐름의 플레이어</strong>로 진화해야 합니다.
        </p>
      </section>

      <section id="conclusion-intermediate-wall" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          결론 — 중급자의 벽은 '생각의 속도'에서 결정된다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스는 근육보다 사고의 스포츠입니다. 스윙 속도보다 빠른 것은 '판단'입니다. 포인트 설계, 리듬 조절, 환경 인식 — 이 세 가지가 중급자를 상급자로 이끄는 다리입니다. 지금 필요한 건 더 강한 샷이 아니라, 더 깊은 생각입니다.
        </p>
      </section>

      
      {/* FAQ Section */}
      <FAQ items={faqs} />

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-mental-focus-recovery">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  전략적 멘탈
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 경기 중 멘탈 붕괴 방지법 — 실수 후 3초 회복 루틴의 힘
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  실수 후 3초 회복 루틴으로 멘탈을 회복하고 경기 흐름을 되찾는 법. 감정 제어·집중 루틴·GEO별 멘탈 관리 전략.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </Article>
  );
}

import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 초보자의 30일 성장 루틴 — 실전 감각을 만드는 훈련 플랜 | 기초부터 경기 감각까지 완성하는 한 달 프로그램',
  description: '초보자도 30일이면 실전 감각을 만들 수 있다. 일일 루틴과 훈련 플랜으로 \'처음\'을 \'자신감\'으로 바꾼다.',
  keywords: ['테니스 초보자', '30일 훈련', '테니스 루틴', '기초 기술', '실전 감각', '성장 플랜'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-beginner-30day-growth-plan',
  },
  openGraph: {
    title: '테니스 초보자의 30일 성장 루틴 — 실전 감각을 만드는 훈련 플랜 | 기초부터 경기 감각까지 완성하는 한 달 프로그램',
    description: '초보자도 30일이면 실전 감각을 만들 수 있다. 일일 루틴과 훈련 플랜으로 \'처음\'을 \'자신감\'으로 바꾼다.',
    url: 'https://tennisfriends.co.kr/blog/tennis-beginner-30day-growth-plan',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 초보자의 30일 성장 루틴 — 실전 감각을 만드는 훈련 플랜 | 기초부터 경기 감각까지 완성하는 한 달 프로그램',
    description: '초보자도 30일이면 실전 감각을 만들 수 있다. 일일 루틴과 훈련 플랜으로 \'처음\'을 \'자신감\'으로 바꾼다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'week1-swing-foundation', text: '1. 1~7일차 — 스윙의 뼈대를 세우는 시기', depth: 2 },
  { id: 'week2-impact-timing', text: '2. 8~14일차 — 임팩트 감각과 타이밍 조정', depth: 2 },
  { id: 'week3-footwork-fitness', text: '3. 15~21일차 — 풋워크와 체력 루틴 결합', depth: 2 },
  { id: 'week4-serve-return', text: '4. 22~26일차 — 서브와 리턴 감각 익히기', depth: 2 },
  { id: 'week5-match-sense', text: '5. 27~30일차 — 실전 감각과 경기 흐름 익히기', depth: 2 },
  { id: '30day-routine-summary', text: '6. 30일 루틴의 핵심 포인트 요약', depth: 2 },
  { id: 'conclusion-accumulated-rhythm', text: '결론 — 테니스는 하루의 훈련이 아닌, 리듬의 누적이다', depth: 2 },
];

const faqs = [
  {
    q: '초보자는 하루 몇 분 연습이 적당할까요?',
    a: '하루 30분이면 충분합니다. 중요한 건 반복의 일관성입니다.'
  },
  {
    q: '라켓이 아직 어색합니다.',
    a: '하루 10분이라도 그림자 스윙을 꾸준히 하면 1주일 만에 손에 익습니다.'
  },
  {
    q: '혼자서도 실력이 늘 수 있나요?',
    a: '가능합니다. 벽치기, 영상 피드백, 루틴 워드 활용으로 성장할 수 있습니다.'
  },
  {
    q: '30일 이후엔 어떤 훈련을 해야 하나요?',
    a: '서브·리턴 집중 훈련과 복식 전술 연습으로 넘어가면 됩니다.'
  },
  {
    q: '부상 위험은 없을까요?',
    a: '준비운동 10분, 정리운동 10분만 지키면 부상 위험은 매우 낮습니다.'
  }
];

export default function TennisBeginner30DayGrowthPlanPage() {
  const title = '테니스 초보자의 30일 성장 루틴 — 실전 감각을 만드는 훈련 플랜 | 기초부터 경기 감각까지 완성하는 한 달 프로그램';
  const excerpt = '초보자도 30일이면 실전 감각을 만들 수 있다. 일일 루틴과 훈련 플랜으로 \'처음\'을 \'자신감\'으로 바꾼다.';

  return (
    <Article slug="tennis-beginner-30day-growth-plan" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            초보자 가이드
          </Badge>
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            성장 플랜
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스는 복잡한 기술의 집합처럼 보이지만, '루틴'으로 접근하면 놀라울 만큼 빠르게 성장할 수 있습니다. 초보자도 하루 30분, 30일만 꾸준히 루틴을 실행하면 기초는 물론 경기 감각까지 익힐 수 있습니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-beginner-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 초보자 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-basics.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 테니스 기초 가이드</a></li>
        </ul>
      </div>

      <section id="week1-swing-foundation" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          1~7일차 — 스윙의 뼈대를 세우는 시기
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          <strong>목표:</strong> 라켓에 익숙해지고 기본 스윙 폼을 체화.
        </p>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500 mb-6">
          <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">루틴:</h3>
          <ul className="text-green-700 dark:text-green-300 space-y-1">
            <li>• 라켓 그립 익히기 (이스턴·세미웨스턴 구분)</li>
            <li>• 벽치기 50회 × 2세트</li>
            <li>• 포핸드·백핸드 그림자 스윙 30회씩</li>
            <li>• 공 없이 발 스텝 이동 (좌우 10회 × 3세트)</li>
          </ul>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-500">
          <p className="text-amber-800 dark:text-amber-200 text-sm">
            <strong>💡 핵심:</strong> 공보다 '폼'을 먼저 익히세요. 잘못된 자세로 치면 나중에 교정이 어렵습니다.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500 mt-4">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>보조 훈련:</strong> 거울 앞 스윙 — 팔로스루 끝에서 라켓 위치 확인.
          </p>
        </div>
      </section>

      <section id="week2-impact-timing" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          8~14일차 — 임팩트 감각과 타이밍 조정
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          <strong>목표:</strong> 공을 중심에 맞히는 감각 형성.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">루틴:</h3>
          <ol className="text-blue-700 dark:text-blue-300 space-y-1">
            <li>1️⃣ 포핸드 중심 랠리 (3분 유지 목표)</li>
            <li>2️⃣ 볼 바운드 후 타이밍 맞추기</li>
            <li>3️⃣ 라켓 스윗스팟 확인 (가장 진동 적은 지점 체크)</li>
            <li>4️⃣ 가벼운 미니게임 (7포인트 랠리)</li>
          </ol>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>💡 팁:</strong> 라켓 중심이 아니라 공의 '면'을 보세요. 시선이 일찍 움직이면 타점이 흐트러집니다.
          </p>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500 mt-4">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>보조 루틴:</strong> 리듬 맞추기 — "톡-따닥" 일정한 템포로 스윙.
          </p>
        </div>
      </section>

      <section id="week3-footwork-fitness" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          15~21일차 — 풋워크와 체력 루틴 결합
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          <strong>목표:</strong> 스윙과 발 움직임을 동시에 조화.
        </p>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
          <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">루틴:</h3>
          <ul className="text-purple-700 dark:text-purple-300 space-y-1">
            <li>• 스플릿 스텝 연습 30회</li>
            <li>• 좌우 이동 후 포핸드/백핸드 교차 타격</li>
            <li>• 미니 스프린트(5m 왕복) 10회</li>
            <li>• 하체 강화 운동 (스쿼트 15회 × 3세트)</li>
          </ul>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500 mb-6">
          <h3 className="font-bold text-cyan-800 dark:text-cyan-200 mb-3">GEO 팁:</h3>
          <ul className="text-cyan-700 dark:text-cyan-300 space-y-1">
            <li>• 서울·경기 하드코트 → 무릎 보호대 착용 필수.</li>
            <li>• 부산 습한 코트 → 신발 통풍 관리.</li>
            <li>• 대구 고온 환경 → 15분 간격 수분 섭취.</li>
            <li>• 제주 바람 많은 코트 → 타점 조정 훈련.</li>
          </ul>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            <strong>💡 핵심:</strong> 발이 빠르면 실수도 줄어듭니다. 공보다 항상 '한 발 앞'에 서는 느낌으로.
          </p>
        </div>
      </section>

      <section id="week4-serve-return" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          22~26일차 — 서브와 리턴 감각 익히기
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          <strong>목표:</strong> 경기의 시작을 지배하는 루틴 구축.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500 mb-6">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">루틴:</h3>
          <ol className="text-indigo-700 dark:text-indigo-300 space-y-1">
            <li>1️⃣ 토스 위치 일정하게 (이마 앞 30cm)</li>
            <li>2️⃣ 서브 리듬 "토스-탑-임팩트" 반복</li>
            <li>3️⃣ 벽 리턴 연습 50회</li>
            <li>4️⃣ 실전 서브 게임 시뮬레이션 (10포인트)</li>
          </ol>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>보조 팁:</strong> 서브 후 중심 이동을 바로 전진으로 이어가세요. 서브-앤드-스텝은 복식에서도 핵심 루틴입니다.
          </p>
        </div>
      </section>

      <section id="week5-match-sense" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          27~30일차 — 실전 감각과 경기 흐름 익히기
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          <strong>목표:</strong> 포인트 단위 플레이 감각 형성.
        </p>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500 mb-6">
          <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-3">루틴:</h3>
          <ul className="text-pink-700 dark:text-pink-300 space-y-1">
            <li>• 포인트 단위 게임 (7포인트 랠리)</li>
            <li>• 상대와 간단한 복식 연습</li>
            <li>• 포인트 후 루틴(3초 복식호흡) 적용</li>
            <li>• 영상 촬영 후 자세 피드백.</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>💡 중요:</strong> 이 시기에는 '승패'보다 '리듬 유지'를 목표로 하세요. 실수는 학습의 일부입니다.
          </p>
        </div>
      </section>

      <section id="30day-routine-summary" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          30일 루틴의 핵심 포인트 요약
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">영역</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">핵심 목표</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">주요 루틴</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">기술</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">기본 스윙·임팩트 안정</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">그림자 스윙·벽치기</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">체력</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">하체 중심 강화</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">스플릿 스텝·스쿼트</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">멘탈</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">집중력 유지</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">루틴 워드·호흡 조절</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">경기</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">실전 감각 형성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">미니게임·영상 피드백</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-teal-800 dark:text-teal-200 text-sm">
            <strong>결론:</strong> 꾸준함이 모든 것을 바꿉니다. 30일이면 '라켓이 낯선 사람'에서 '코트가 익숙한 사람'이 됩니다.
          </p>
        </div>
      </section>

      <section id="conclusion-accumulated-rhythm" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          결론 — 테니스는 하루의 훈련이 아닌, 리듬의 누적이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          성장은 단숨에 이루어지지 않습니다. 하지만 루틴은 배신하지 않습니다. 30일 동안 몸이 익히는 것은 단순한 기술이 아니라 '코트 위의 리듬'입니다. 매일 30분, 오늘의 한 걸음이 내일의 자신감을 만듭니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-beginner-30day-training-plan">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  초보자 가이드
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 초보자 30일 훈련 플랜 — 포핸드·타점·감각으로 실력 만드는 단계별 루틴
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  테니스 초보자가 30일 안에 포핸드·타점·감각을 익히는 훈련 루틴. 하루 30분으로 실력 향상 가능한 과학적 플랜.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/blog/tennis-mental-focus-recovery">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  멘탈 관리
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

      <FAQ items={faqs} />
    </Article>
  );
}

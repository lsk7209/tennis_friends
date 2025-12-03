import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 초보자의 첫 30일 훈련 플랜 — 입문부터 경기 감각까지 4주 완성 로드맵 | 기초·폼·리듬·실전까지 단계별 가이드',
  description: '테니스는 하루에 배우지 못한다. 하지만 올바른 30일 루틴이면 \'폼·타점·감각\'이 완성된다. 초보를 위한 실전형 훈련 로드맵.',
  keywords: ['테니스 초보자', '훈련 플랜', '입문자', '30일 루틴', '폼 교정', '기초 훈련', '테니스 입문', '초보자 가이드'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-beginner-30day-training-plan',
  },
  openGraph: {
    title: '테니스 초보자의 첫 30일 훈련 플랜 — 입문부터 경기 감각까지 4주 완성 로드맵 | 기초·폼·리듬·실전까지 단계별 가이드',
    description: '테니스는 하루에 배우지 못한다. 하지만 올바른 30일 루틴이면 \'폼·타점·감각\'이 완성된다. 초보를 위한 실전형 훈련 로드맵.',
    url: 'https://tennisfriends.co.kr/blog/tennis-beginner-30day-training-plan',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 초보자의 첫 30일 훈련 플랜 — 입문부터 경기 감각까지 4주 완성 로드맵 | 기초·폼·리듬·실전까지 단계별 가이드',
    description: '테니스는 하루에 배우지 못한다. 하지만 올바른 30일 루틴이면 \'폼·타점·감각\'이 완성된다. 초보를 위한 실전형 훈련 로드맵.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'week1-swing-foundation', text: '1주차 — 스윙의 뼈대 만들기', depth: 2 },
  { id: 'week2-rhythm-timing', text: '2주차 — 리듬과 타점 교정', depth: 2 },
  { id: 'week3-spin-steps', text: '3주차 — 회전과 스텝의 연결', depth: 2 },
  { id: 'week4-match-sense', text: '4주차 — 실전 감각과 경기 루틴 구축', depth: 2 },
  { id: 'after-30days-changes', text: '30일 후 달라지는 점', depth: 2 },
];

const faqs = [
  {
    q: '혼자서도 이 훈련 플랜이 가능할까요?',
    a: '가능합니다. 벽치기, 미니테니스, 영상 피드백만으로도 충분히 루틴을 구축할 수 있습니다.'
  },
  {
    q: '하루 훈련 시간은 어느 정도가 적당할까요?',
    a: '30~60분이면 충분합니다. 중요한 건 \'매일 반복\'입니다.'
  },
  {
    q: '폼이 자꾸 무너집니다.',
    a: '그립과 타점을 매일 5분씩 점검하세요. 영상 피드백이 가장 효과적입니다.'
  },
  {
    q: '체력 훈련도 병행해야 하나요?',
    a: '네. 스쿼트와 플랭크 같은 기초 근력운동이 스윙 안정성을 높입니다.'
  },
  {
    q: '30일 이후엔 어떻게 해야 하나요?',
    a: '\'중급자 전환 루틴\'으로 넘어가세요. 스핀, 포인트 설계, 경기 운영 훈련을 추가하면 됩니다.'
  }
];

export default function TennisBeginner30DayTrainingPlanPage() {
  const title = '테니스 초보자의 첫 30일 훈련 플랜 — 입문부터 경기 감각까지 4주 완성 로드맵 | 기초·폼·리듬·실전까지 단계별 가이드';
  const excerpt = '테니스는 하루에 배우지 못한다. 하지만 올바른 30일 루틴이면 \'폼·타점·감각\'이 완성된다. 초보를 위한 실전형 훈련 로드맵.';

  return (
    <Article slug="tennis-beginner-30day-training-plan" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            초보자 가이드
          </Badge>
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
            훈련 플랜
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스는 한 번 배우면 평생 즐길 수 있는 스포츠지만, 초보에게는 진입장벽이 높습니다. 처음 30일은 습관을 만드는 기간이자 '몸이 기억하는 기초'를 완성하는 시간입니다. 이 로드맵은 초보가 기술·체력·리듬을 동시에 익히도록 설계된 4주 훈련 플랜입니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2020/02/beginner-tennis-guide/678123/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 초보자 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/beginner.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 초보자 시작 가이드</a></li>
        </ul>
      </div>

      <section id="week1-swing-foundation" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          1주차 — 스윙의 뼈대 만들기
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          <strong>목표:</strong> 라켓 잡는 법, 타점, 기본 자세 익히기.
        </p>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">훈련 루틴:</h3>
          <ul className="text-green-700 dark:text-green-300 space-y-1">
            <li>• 라켓 그립 익히기 (이스턴·세미웨스턴) — 하루 10분, 거울 앞 연습.</li>
            <li>• 벽치기 50구 — 공을 세게 치지 말고, 일정한 리듬 유지.</li>
            <li>• 그림자 스윙 30회 × 2세트 — 폼 정렬 및 어깨 회전 확인.</li>
            <li>• 풋워크 기초 — 좌우 이동 + 스플릿 스텝 감각 익히기.</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>💡 핵심 포인트:</strong> 이 시기에는 '공을 맞히는 것'보다 '폼을 기억하는 것'이 중요합니다. 완벽한 타점보다는 <strong>일관된 자세</strong>를 반복하세요.
          </p>
        </div>
      </section>

      <section id="week2-rhythm-timing" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          2주차 — 리듬과 타점 교정
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          <strong>목표:</strong> 스윙 리듬 형성과 타점 일관성 향상.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">훈련 루틴:</h3>
          <ul className="text-blue-700 dark:text-blue-300 space-y-1">
            <li>• 포핸드 30분 / 백핸드 30분 — 코치나 파트너와 느린 랠리.</li>
            <li>• '타-탁-슥' 3박자 리듬 훈련 (메트로놈 85BPM).</li>
            <li>• 미니테니스 15분 — 코트 앞 4m 거리에서 짧은 랠리.</li>
            <li>• 발 중심 이동 드릴 — 임팩트 후 중심이 앞발로 넘어가도록.</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>💡 보정 포인트:</strong> 공이 뜨면 타점이 뒤로 밀린 것, 네트면 팔로스루가 짧은 것.<br/>
            → 해결: 타점을 몸보다 30cm 앞, 팔로스루를 귀 옆까지 유지.
          </p>
        </div>
      </section>

      <section id="week3-spin-steps" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-yellow-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          3주차 — 회전과 스텝의 연결
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          <strong>목표:</strong> 하체 리듬을 활용한 스핀 컨트롤.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">훈련 루틴:</h3>
          <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• 톱스핀 드릴 15분 — 라켓 아래에서 위로 스윙, 회전 감각 익히기.</li>
            <li>• 풋워크 이동 + 타점 고정 훈련 (콘 3개 기준).</li>
            <li>• 크로스·다운더라인 번갈아 20구.</li>
            <li>• 체중이동 드릴 — '뒤→앞→복귀' 3단계 반복.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">체력 보조 훈련:</h3>
          <p className="text-yellow-700 dark:text-yellow-300 text-sm">
            스쿼트 15회 × 3세트, 플랭크 30초 × 3세트. 하체와 코어는 스윙 안정성의 기반입니다.
          </p>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>💡 멘탈 팁:</strong> 실수는 학습의 일부입니다. 공을 놓쳤다면, '폼이 흐트러진 원인'을 1초 안에 떠올리고 다음 공에 집중하세요.
          </p>
        </div>
      </section>

      <section id="week4-match-sense" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          4주차 — 실전 감각과 경기 루틴 구축
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          <strong>목표:</strong> 포인트 플레이 경험과 경기 흐름 이해.
        </p>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">훈련 루틴:</h3>
          <ul className="text-purple-700 dark:text-purple-300 space-y-1">
            <li>• 미니게임 (4포인트 랠리) 3세트.</li>
            <li>• 서브 30회, 리턴 30회 — 정확도보다 리듬 유지.</li>
            <li>• 포인트 후 복식호흡 3회 루틴 — 집중력 회복 훈련.</li>
            <li>• 영상 촬영 피드백 — 자세·타점·리듬 분석.</li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">GEO 코트별 적응 훈련:</h3>
          <ul className="text-purple-700 dark:text-purple-300 space-y-1">
            <li>• <strong>서울·경기(하드):</strong> 반발 빠름 → 타점 앞, 플랫 중심.</li>
            <li>• <strong>부산(습함):</strong> 공 무거움 → 스윙 길게, 톱스핀 활용.</li>
            <li>• <strong>대구(건조):</strong> 공 가벼움 → 라켓면 닫고 낮은 타점 유지.</li>
            <li>• <strong>제주(바람):</strong> 바람 방향 체크, 스윙 안정성 위주.</li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>💡 실전 루틴:</strong> 포인트 간 20초 루틴 — 수건 닦기 → 호흡 → 시선 고정 → 루틴 워드(예: '리듬'). 이 루틴은 경기 집중의 기반이 됩니다.
          </p>
        </div>
      </section>

      <section id="after-30days-changes" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          30일 후 달라지는 점
        </h2>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <ul className="text-cyan-700 dark:text-cyan-300 space-y-2">
            <li>• <strong>라켓 컨트롤과 타점 일관성 향상.</strong></li>
            <li>• <strong>경기 리듬 인식</strong> — 언제 공격, 언제 수비할지 감각적 이해.</li>
            <li>• <strong>근육 기억 형성</strong>으로 '생각보다 먼저 움직이는' 반응 속도 향상.</li>
          </ul>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
          30일은 짧지만, 올바른 루틴을 반복하면 충분합니다. 이 시기의 핵심은 '폼보다 리듬', '속도보다 일관성'입니다. 30일 후 당신은 단순한 초보가 아니라, 리듬을 이해하는 플레이어로 성장하게 될 것입니다.
        </p>
      </section>

      
      {/* FAQ Section */}
      <FAQ items={faqs} />

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
    </Article>
  );
}

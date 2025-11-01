import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 경기 후 회복 루틴 — 24시간 리커버리 사이클로 피로 없이 다음 경기 준비하기 | 근육 회복과 멘탈 리셋의 과학',
  description: '경기는 끝났지만, 진짜 승부는 회복에서 시작된다. 경기 후 24시간, 루틴 하나가 다음 실력을 결정한다.',
  keywords: ['테니스 회복', '경기 후 루틴', '피로 회복', '냉찜질', '스트레칭', '영양 보충', '수면', '근육 회복'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-postmatch-recovery-routine',
  },
  openGraph: {
    title: '테니스 경기 후 회복 루틴 — 24시간 리커버리 사이클로 피로 없이 다음 경기 준비하기 | 근육 회복과 멘탈 리셋의 과학',
    description: '경기는 끝났지만, 진짜 승부는 회복에서 시작된다. 경기 후 24시간, 루틴 하나가 다음 실력을 결정한다.',
    url: 'https://www.tennisfrens.com/blog/tennis-postmatch-recovery-routine',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 경기 후 회복 루틴 — 24시간 리커버리 사이클로 피로 없이 다음 경기 준비하기 | 근육 회복과 멘탈 리셋의 과학',
    description: '경기는 끝났지만, 진짜 승부는 회복에서 시작된다. 경기 후 24시간, 루틴 하나가 다음 실력을 결정한다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'immediate-post-match', text: '1. 경기 직후 (0~1시간) — 냉찜질과 수분 리셋', depth: 2 },
  { id: '3hours-post-match', text: '2. 경기 후 3시간 — 스트레칭과 릴리즈', depth: 2 },
  { id: '6-12hours-post-match', text: '3. 경기 후 6~12시간 — 영양·수면 회복 구간', depth: 2 },
  { id: 'next-day-recovery', text: '4. 다음 날 오전 (12~24시간 후) — 회복운동과 멘탈 리셋', depth: 2 },
  { id: 'geo-recovery-strategy', text: '5. GEO별 회복 전략', depth: 2 },
  { id: 'recovery-mistakes', text: '6. 회복을 망치는 행동 3가지', depth: 2 },
  { id: 'conclusion-recovery-power', text: '결론 — 경기력은 회복력이다', depth: 2 },
];

const faqs = [
  {
    q: '경기 후 바로 샤워해도 되나요?',
    a: '냉찜질 후 30분이 지나면 괜찮습니다. 즉시 뜨거운 샤워는 염증을 악화시킬 수 있습니다.'
  },
  {
    q: '단백질 보충은 언제 하는 게 좋나요?',
    a: '경기 후 30분~1시간 이내가 가장 효과적입니다. 근육 회복 효율이 최대 2배로 높아집니다.'
  },
  {
    q: '폼롤러는 언제 써야 하나요?',
    a: '경기 후 3시간 내 사용이 이상적입니다. 피로물질이 근육에 쌓이기 전에 릴리즈하세요.'
  },
  {
    q: '하드코트 경기 후 무릎 통증이 심합니다.',
    a: '냉찜질 시간을 늘리고, 다음날은 조깅 대신 스트레칭 중심으로 회복하세요.'
  },
  {
    q: '회복 중에도 연습을 해도 될까요?',
    a: '가능합니다. 단, 강도 50% 이하로 가볍게 몸을 풀어주는 수준이 적당합니다.'
  }
];

export default function TennisPostmatchRecoveryRoutinePage() {
  const title = '테니스 경기 후 회복 루틴 — 24시간 리커버리 사이클로 피로 없이 다음 경기 준비하기 | 근육 회복과 멘탈 리셋의 과학';
  const excerpt = '경기는 끝났지만, 진짜 승부는 회복에서 시작된다. 경기 후 24시간, 루틴 하나가 다음 실력을 결정한다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950 dark:to-teal-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">
            회복 루틴
          </Badge>
          <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
            피로 관리
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          많은 테니스 플레이어가 경기 후 '회복'을 소홀히 합니다. 하지만 진짜 실력은 경기 이후 24시간의 관리에서 결정됩니다. 회복 루틴을 체계화하면 부상 위험을 줄이고, 다음 경기에서 집중력과 근육 반응 속도가 두 배로 향상됩니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/recovery-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 회복 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-health-fitness/recovery.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 회복 가이드</a></li>
        </ul>
      </div>

      <section id="immediate-post-match" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          경기 직후 (0~1시간) — 냉찜질과 수분 리셋
        </h2>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>목표:</strong> 염증 완화, 체온 안정, 피로물질 배출 시작.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">루틴:</h3>
          <ul className="text-green-700 dark:text-green-300 space-y-1">
            <li>• <strong>냉찜질 15분:</strong> 어깨, 무릎, 손목 중심. 얼음찜질은 근육 온도를 낮춰 염증을 억제.</li>
            <li>• <strong>수분 보충:</strong> 경기 중 땀으로 손실된 수분 + 전해질(이온음료) 500~800ml 섭취.</li>
            <li>• <strong>단백질 보충:</strong> 단백질 20g 이상 (닭가슴살, 단백질 쉐이크 등).</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>⚠️ 주의:</strong> 냉찜질 직후 바로 뜨거운 샤워는 금물. 근육 수축 상태에서 혈관이 급팽창해 통증이 악화될 수 있습니다.
          </p>
        </div>
      </section>

      <section id="3hours-post-match" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          경기 후 3시간 — 스트레칭과 릴리즈
        </h2>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-6 border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>목표:</strong> 근육 유연성 회복, 젖산 축적 방지.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">루틴:</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-green-800 dark:text-green-200">전신 스트레칭 15분:</strong>
                <span className="text-green-700 dark:text-green-300"> 어깨 → 허리 → 햄스트링 순서.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-green-800 dark:text-green-200">폼롤러 릴리즈 10분:</strong>
                <span className="text-green-700 dark:text-green-300"> 허벅지·종아리·등 근육을 압박하며 풀어줌.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-green-800 dark:text-green-200">가벼운 산책 10분:</strong>
                <span className="text-green-700 dark:text-green-300"> 혈류 순환으로 피로물질 배출.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>핵심:</strong> 근육을 '늘리는 스트레칭'이 아니라 '풀어주는 릴리즈'에 집중하세요. 통증 부위는 살살 압박만 해도 충분합니다.
          </p>
        </div>
      </section>

      <section id="6-12hours-post-match" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          경기 후 6~12시간 — 영양·수면 회복 구간
        </h2>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg mb-6 border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>목표:</strong> 근섬유 재생과 호르몬 밸런스 회복.
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">루틴:</h3>
          <ul className="text-purple-700 dark:text-purple-300 space-y-1">
            <li>• <strong>탄수화물·단백질 비율 3:1 식사:</strong> 예: 현미밥 + 연어 + 채소.</li>
            <li>• <strong>수면 전 스트레칭 5분:</strong> 허리·목·손목 이완.</li>
            <li>• <strong>수면 최소 7시간 확보:</strong> 수면 중 성장호르몬 분비가 근육 복구를 촉진.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>💡 팁:</strong> 취침 전 온찜질 10분은 근육 회복을 가속화하고, 수면의 질을 높입니다.
          </p>
        </div>
      </section>

      <section id="next-day-recovery" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          다음 날 오전 (12~24시간 후) — 회복운동과 멘탈 리셋
        </h2>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg mb-6 border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>목표:</strong> 근육 활성화, 집중력 회복, 경기 모드 리부트.
          </p>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">루틴:</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">가벼운 조깅 10분:</strong>
                <span className="text-indigo-700 dark:text-indigo-300"> 혈류 순환으로 근육 산소공급.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">복식호흡 3분:</strong>
                <span className="text-indigo-700 dark:text-indigo-300"> 긴장 완화, 뇌 피로 회복.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">그림자 스윙 20회:</strong>
                <span className="text-indigo-700 dark:text-indigo-300"> 감각 회복, 타점 유지.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">루틴 워드 리셋:</strong>
                <span className="text-indigo-700 dark:text-indigo-300"> "리듬", "집중" 등 멘탈 워드 반복으로 경기 모드 복귀.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            이 루틴은 단순한 피로 회복을 넘어 <strong>리듬 복구와 심리 안정</strong>까지 연결됩니다. 실제로 24시간 루틴을 실천한 아마추어의 다음 경기 퍼포먼스가 평균 18% 향상된 연구 결과가 있습니다.
          </p>
        </div>
      </section>

      <section id="geo-recovery-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          GEO별 회복 전략
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">관절 충격 ↑ → 냉찜질 시간 20분.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습도 높음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">수분 손실 ↑ → 전해질 보충량 1L 이상.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (고온·건조):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">근육 탈수 위험 → 냉찜질 대신 수분 냉수 샤워 권장.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">근육 긴장 ↑ → 온찜질 중심 회복 루틴 적용.</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            환경에 따라 회복 방법을 바꾸면 효율이 달라집니다. 지역별 코트 특성과 날씨 조건을 고려한 회복 루틴이 가장 효과적입니다.
          </p>
        </div>
      </section>

      <section id="recovery-mistakes" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          회복을 망치는 행동 3가지
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
            <div className="flex items-start gap-3">
              <span className="text-red-800 dark:text-red-200 font-bold">1️⃣</span>
              <div>
                <strong className="text-red-800 dark:text-red-200">바로 샤워 후 수면:</strong>
                <span className="text-red-700 dark:text-red-300"> 근육이 긴장된 상태로 굳어 통증 악화.</span>
              </div>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
            <div className="flex items-start gap-3">
              <span className="text-red-800 dark:text-red-200 font-bold">2️⃣</span>
              <div>
                <strong className="text-red-800 dark:text-red-200">스트레칭 생략:</strong>
                <span className="text-red-700 dark:text-red-300"> 젖산이 쌓여 다음날 근육통 유발.</span>
              </div>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
            <div className="flex items-start gap-3">
              <span className="text-red-800 dark:text-red-200 font-bold">3️⃣</span>
              <div>
                <strong className="text-red-800 dark:text-red-200">단백질 보충 지연:</strong>
                <span className="text-red-700 dark:text-red-300"> 1시간 내 섭취하지 않으면 회복 효율이 40% 감소.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>기억하세요:</strong> 회복은 선택이 아니라 '훈련의 일부'입니다. 루틴이 습관이 되는 순간, 부상 없는 성장이 시작됩니다.
          </p>
        </div>
      </section>

      <section id="conclusion-recovery-power" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          결론 — 경기력은 회복력이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스에서 회복 루틴은 '보조'가 아니라 '필수 스킬'입니다. 냉찜질 15분, 스트레칭 10분, 수면 7시간 — 이 3가지가 다음 경기를 결정합니다. 테니스는 근육의 싸움이 아니라, <strong>리듬을 얼마나 빨리 회복하느냐의 싸움</strong>입니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-injury-prevention-recovery">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  건강 관리
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 부상 예방과 회복 루틴 — 어깨·무릎·손목을 지키는 과학적 관리법
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  부상은 실력이 아니라 루틴의 문제다. 어깨·무릎·손목을 지키는 습관만 만들어도 경기력은 2배로 오래간다.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/blog/tennis-mental-focus-recovery">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  멘탈 회복
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 경기 중 멘탈 붕괴 방지법 — 실수 후 3초 회복 루틴의 힘
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  테니스의 승패는 멘탈이 결정한다. 실수 후 3초, 그 짧은 루틴이 경기 전체의 흐름을 바꾼다.
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

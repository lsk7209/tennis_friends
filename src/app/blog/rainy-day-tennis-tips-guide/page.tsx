import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '비 오는 날 테니스 루틴 | 감각 유지·실내 훈련·장비 관리법 완전 가이드',
  description: '비 오는 날 테니스 감각 유지법 6가지. 실내 대체 훈련, 스트링 관리, 리듬 감각 훈련까지 완벽 정리.',
  keywords: ['비 오는 날 테니스', '감각 유지', '실내 훈련', '장비 관리', '루틴', '스트링'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/rainy-day-tennis-tips-guide',
  },
  openGraph: {
    title: '비 오는 날 테니스 루틴 | 감각 유지·실내 훈련·장비 관리법 완전 가이드',
    description: '비 오는 날 테니스 감각 유지법 6가지. 실내 대체 훈련, 스트링 관리, 리듬 감각 훈련까지 완벽 정리.',
    url: 'https://tennisfriends.co.kr/blog/rainy-day-tennis-tips-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '비 오는 날 테니스 루틴 | 감각 유지·실내 훈련·장비 관리법 완전 가이드',
    description: '비 오는 날 테니스 감각 유지법 6가지. 실내 대체 훈련, 스트링 관리, 리듬 감각 훈련까지 완벽 정리.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'indoor-alternative-routine', text: '실내 대체 루틴으로 리듬 유지', depth: 2 },
  { id: 'wall-training-contact-point', text: '벽치기·리턴 훈련으로 타점 감각 유지', depth: 2 },
  { id: 'equipment-management', text: '장비 관리 — 비에 젖은 라켓은 즉시 말린다', depth: 2 },
  { id: 'condition-recovery-routine', text: '컨디션 회복 루틴 — 몸은 쉬어도 감각은 유지', depth: 2 },
  { id: 'regional-weather-response', text: '지역별 날씨 대응 전략 — 서울·부산·광주·제주', depth: 2 },
  { id: 'sensory-recovery-routine', text: '감각 회복 루틴 — 20분 집중 플로우', depth: 2 },
  { id: 'rain-reset-signal', text: '비는 리셋의 신호다', depth: 2 },
  { id: 'rainy-day-checklist', text: '비 오는 날 체크리스트', depth: 2 },
];

const faqs = [
  {
    q: '비 오는 날 실내에서 할 수 있는 테니스 훈련은?',
    a: '벽치기, 그림자 스윙, 풋워크 루틴으로 감각을 유지할 수 있습니다. 리듬만 유지하면 감각은 쉽게 사라지지 않습니다.'
  },
  {
    q: '비 맞은 라켓은 어떻게 관리하나요?',
    a: '수건으로 닦은 후 통풍이 잘 되는 음지에서 자연건조하세요. 드라이기나 직사광선은 금물입니다.'
  },
  {
    q: '습한 날엔 스트링 텐션을 조정해야 하나요?',
    a: '네. 습도가 높으면 스트링이 늘어나 반발력이 떨어지므로 1~2파운드 낮춰주는 것이 좋습니다.'
  },
  {
    q: '비 오는 날에도 코어 훈련이 필요한가요?',
    a: '오히려 좋습니다. 코어는 타점 안정성과 리듬 유지의 핵심 근육입니다.'
  },
  {
    q: '비가 며칠 계속 오면 어떻게 감각을 유지하나요?',
    a: '매일 15분씩 루틴을 정해 실내에서 반복하세요. 감각은 일정한 루틴을 통해 유지됩니다.'
  }
];

export default function RainyDayTennisTipsGuidePage() {
  const title = '비 오는 날에도 테니스는 계속된다, 감각 유지법 6가지';
  const excerpt = '비가 와도 테니스 감각은 잃지 않는다. 실내 대체 루틴부터 장비 관리, 리듬 유지 훈련까지, 날씨에 구애받지 않는 플레이어의 비밀을 공개한다.';

  return (
    <Article slug="rainy-day-tennis-tips-guide" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300">
            날씨 대응
          </Badge>
          <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
            감각 유지
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          비 오는 날이면 대부분의 아마추어들은 훈련을 멈춘다. 그러나 고수들은 오히려 이 시간을 '감각 유지 훈련'에 쓴다. 공을 치지 않아도, 감각은 유지할 수 있다. 비가 와도 테니스는 멈추지 않는다.
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

      <section id="indoor-alternative-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-slate-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          실내 대체 루틴으로 리듬 유지
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          비 오는 날 가장 먼저 해야 할 일은 '루틴을 끊지 않는 것'이다. 실내에서 할 수 있는 루틴을 미리 정해두면, 감각 저하 없이 다음 훈련으로 이어진다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">1️⃣ 미니 풋워크 5분 — 거실 바닥에서도 가능한 스텝 워크</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">2️⃣ 그림자 스윙 15회 × 3세트 — 공 없이 임팩트 리듬 익히기</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">3️⃣ 코어 밸런스 10분 — 중심 유지 근육 강화</h3>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border-l-4 border-slate-500">
          <p className="text-slate-800 dark:text-slate-200 text-sm">
            <strong>👉 핵심:</strong> 리듬을 잃지 않는 것이 곧 감각을 유지하는 길이다.
          </p>
        </div>
      </section>

      <section id="wall-training-contact-point" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-gray-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          벽치기·리턴 훈련으로 타점 감각 유지
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          실내나 주차장 벽면에서도 벽치기 훈련은 충분히 가능하다. 벽과의 거리 3~4m를 유지하고 짧은 타이밍으로 리턴하라. 공이 빠르게 반사될수록 반응속도와 타점 감각이 되살아난다.
        </p>

        <blockquote className="border-l-4 border-gray-500 pl-6 py-4 bg-gray-50 dark:bg-gray-950 italic">
          <p className="text-gray-800 dark:text-gray-200">
            💡 "비 오는 날 벽은 최고의 코치다."
          </p>
        </blockquote>

        <div className="bg-gray-50 dark:bg-gray-950 p-4 rounded-lg border-l-4 border-gray-500">
          <p className="text-gray-800 dark:text-gray-200 text-sm">
            <strong>👉 훈련 팁:</strong> 라켓이 아니라 손바닥으로 공을 톡톡 치는 '핸드컨트롤' 연습도 타점 회복에 도움이 된다.
          </p>
        </div>
      </section>

      <section id="equipment-management" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          장비 관리 — 비에 젖은 라켓은 즉시 말린다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          비에 젖은 라켓을 그대로 두면 텐션이 빠르게 줄어든다. 스트링은 습기에 약하므로 반드시 즉시 닦고 건조해야 한다.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">장비 관리 팁:</h3>
          <ul className="space-y-2 text-blue-700 dark:text-blue-300">
            <li>• 라켓: 마른 수건으로 즉시 닦고, 음지에서 건조</li>
            <li>• 그립: 교체 or 완전 건조 후 사용</li>
            <li>• 신발: 종이 신문을 넣어 수분 흡수</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500 mt-4">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>👉 주의:</strong> 드라이기로 말리면 스트링이 수축되어 텐션이 불안정해진다.
          </p>
        </div>
      </section>

      <section id="condition-recovery-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          컨디션 회복 루틴 — 몸은 쉬어도 감각은 유지
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          비 오는 날은 몸을 쉬게 하되, '감각적 연결'을 끊지 않아야 한다. 눈으로 경기 영상을 보고, 귀로 리듬을 듣고, 몸으로 흐름을 기억하는 것이다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">1️⃣ 프로 경기 영상 분석 — 서브·리턴 리듬 관찰</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">2️⃣ 이미지 트레이닝 — 포핸드 타점을 머릿속으로 재현</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">3️⃣ 음악 리듬 훈련 — BPM 100~120 비트 음악에 맞춰 스윙 모션 연습</h3>
          </div>
        </div>

        <blockquote className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 dark:bg-green-950 italic">
          <p className="text-green-800 dark:text-green-200">
            💬 "감각은 손이 아니라 뇌에 저장된다."
          </p>
        </blockquote>
      </section>

      <section id="regional-weather-response" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          지역별 날씨 대응 전략 — 서울·부산·광주·제주
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          한국의 코트 환경은 지역별로 다르다. 날씨 대응 전략도 그에 맞춰 조정해야 한다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울(갑작스런 소나기)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">갑작스런 소나기 대비, 실내 코트 위치 미리 파악.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산(습한 해안기후)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">습도 높음 → 스트링 수축 주의, 텐션 -1파운드 조정.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">광주(장마철)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">장마철 미끄럼 사고 주의, 풋워크 대신 근력 루틴.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주(바람 강한 비)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">바람 강한 비 → 실내 코트에서도 타점 안정 훈련.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>👉 GEO 팁:</strong> "서울 비 오는 날 테니스", "부산 실내 테니스장" 같은 키워드는 로컬 유입에 강하다.
          </p>
        </div>
      </section>

      <section id="sensory-recovery-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          감각 회복 루틴 — 20분 집중 플로우
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">1️⃣ 워밍업 3분 — 손목·어깨 스트레칭</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">2️⃣ 풋워크 5분 — 제자리 점프 + 스텝 전환</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">3️⃣ 그림자 스윙 5분 — 타점 기억</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">4️⃣ 코어 밸런스 5분 — 플랭크 or 버드독</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">5️⃣ 호흡 정리 2분 — 리듬 복원</h3>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>👉 핵심:</strong> 훈련의 목적은 '완성'이 아니라 '유지'다. 감각은 단 하루만 쉬어도 희미해진다.
          </p>
        </div>
      </section>

      <section id="rain-reset-signal" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-rose-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          비는 리셋의 신호다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          비 오는 날은 리듬을 리셋하는 좋은 기회다. 빠른 스윙, 무리한 스텝보다 '균형'과 '감각'을 다시 세팅하라. 멈춘다고 잃는 게 아니다. 멈춤 속에서 새로운 리듬이 만들어진다.
        </p>

        <blockquote className="border-l-4 border-rose-500 pl-6 py-4 bg-rose-50 dark:bg-rose-950 italic">
          <p className="text-rose-800 dark:text-rose-200">
            💡 "비는 쉬는 게 아니라, 다시 시작하기 위한 템포다."
          </p>
        </blockquote>
      </section>

      <section id="rainy-day-checklist" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          비 오는 날 체크리스트
        </h2>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-6 rounded-lg">
          <h3 className="font-bold text-cyan-800 dark:text-cyan-200 mb-4">👉 비 오는 날 체크리스트</h3>
          <ul className="space-y-2 text-cyan-700 dark:text-cyan-300">
            <li>• 루틴: 실내 대체 루틴이 있는가?</li>
            <li>• 장비: 스트링·그립을 바로 말렸는가?</li>
            <li>• 리듬: 하루 20분 감각 유지 루틴을 했는가?</li>
            <li>• 영상: 프로 경기 리듬을 관찰했는가?</li>
          </ul>
        </div>
      </section>

      
      {/* FAQ Section */}
      <FAQ items={faqs} />

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/winter-indoor-tennis-training-routine">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  겨울 시즌
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  겨울 테니스, 실내 코트에서 실력을 올리는 7가지 루틴
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  겨울 테니스 실내 코트에서 스윙 감각과 스피드를 유지하는 7가지 루틴. 장비, 워밍업, 리듬 훈련, 컨디션 관리까지 완벽 가이드.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/guide/tennis-racket-tension-string-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 mb-2">
                  장비 가이드
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  라켓 텐션 조절만 잘해도 실력이 달라진다
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  스트링 텐션별 특징, 재질별 반발력 차이, 계절별 세팅법까지 완전 정리. 당신의 손에 맞는 라켓 세팅 가이드.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </Article>
  );
}

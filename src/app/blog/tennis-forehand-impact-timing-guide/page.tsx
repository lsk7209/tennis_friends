import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 포핸드 임팩트 완전 정복 | 타점·스윙 리듬·회전 타이밍 가이드',
  description: '포핸드 임팩트 타이밍, 라켓 각도, 하체 리듬 조정까지 완전 정리. 코트별 포핸드 전략과 실전 훈련 루틴까지 한눈에.',
  keywords: ['테니스 포핸드', '임팩트 타이밍', '포핸드 타점', '스윙 리듬', '하체 회전', '포핸드 훈련'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-forehand-impact-timing-guide',
  },
  openGraph: {
    title: '테니스 포핸드 임팩트 완전 정복 | 타점·스윙 리듬·회전 타이밍 가이드',
    description: '포핸드 임팩트 타이밍, 라켓 각도, 하체 리듬 조정까지 완전 정리. 코트별 포핸드 전략과 실전 훈련 루틴까지 한눈에.',
    url: 'https://tennisfriends.co.kr/blog/tennis-forehand-impact-timing-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 포핸드 임팩트 완전 정복 | 타점·스윙 리듬·회전 타이밍 가이드',
    description: '포핸드 임팩트 타이밍, 라켓 각도, 하체 리듬 조정까지 완전 정리.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'impact-timing-concept', text: '임팩트 타이밍은 \'앞에서, 리듬 안에서\'', depth: 2 },
  { id: 'contact-point-zone', text: '타점은 고정된 점이 아니라 \'움직이는 구간\'이다', depth: 2 },
  { id: 'lower-body-rhythm', text: '하체 리듬이 임팩트를 만든다', depth: 2 },
  { id: 'follow-through-importance', text: '팔로스루는 임팩트보다 중요하다', depth: 2 },
  { id: 'regional-court-forehand-strategy', text: '코트별 포핸드 전략 — 서울·대구·부산·제주', depth: 2 },
  { id: 'forehand-feel-recovery-routine', text: '포핸드 임팩트 감각을 되찾는 루틴', depth: 2 },
  { id: 'forehand-body-conversation', text: '포핸드는 결국 \'몸의 대화\'다', depth: 2 },
  { id: 'forehand-checklist', text: '포핸드 체크리스트', depth: 2 },
];

const faqs = [
  {
    q: '포핸드 타점을 일정하게 유지하려면?',
    a: '스윙 궤적을 짧게 유지하고, 몸의 회전 중심을 고정하세요. 타점보다 리듬이 안정돼야 공이 일정하게 맞습니다.'
  },
  {
    q: '포핸드가 자꾸 밀리는 이유는?',
    a: '임팩트 타이밍이 늦거나 하체 회전이 끊겨서입니다. 공보다 먼저 몸이 움직이도록 리듬을 잡으세요.'
  },
  {
    q: '하드코트와 클레이코트에서 포핸드 차이는?',
    a: '하드코트는 짧고 빠른 타점, 클레이코트는 긴 팔로스루가 유리합니다. 코트 특성에 따라 스윙 길이를 조정하세요.'
  },
  {
    q: '포핸드 실력을 빠르게 올리는 법은?',
    a: '하루 15분 벽치기와 그림자 스윙을 꾸준히 하면 리듬 감각이 빠르게 돌아옵니다.'
  },
  {
    q: '포핸드 리듬을 몸에 각인시키는 방법은?',
    a: '음악 BPM 90~100의 리듬에 맞춰 스윙 루틴을 반복하면 자연스럽게 몸이 타이밍을 기억합니다.'
  }
];

export default function TennisForehandImpactTimingGuidePage() {
  const title = '포핸드 임팩트, 0.1초가 승부를 가른다';
  const excerpt = '포핸드는 테니스의 심장이다. 스윙 속도보다 중요한 건 임팩트 타이밍과 몸의 회전 리듬. 이 0.1초의 차이가 경기 전체를 바꾼다.';

  return (
    <Article slug="tennis-forehand-impact-timing-guide" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            포핸드 마스터
          </Badge>
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
            임팩트 타이밍
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스에서 포핸드는 단순한 공격 기술이 아니라 경기의 흐름을 만드는 언어다. 강하게 치는 것보다 중요한 건 '언제' 치느냐다. 포핸드의 본질은 <strong>타점 타이밍</strong>이며, 임팩트 순간의 0.1초가 승패를 좌우한다.
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

      <section id="impact-timing-concept" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          임팩트 타이밍은 '앞에서, 리듬 안에서'
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          많은 초보자들이 공을 몸 가까이까지 끌어와 치지만, 정확한 포핸드는 <strong>타점이 몸보다 20~30cm 앞</strong>에 있어야 한다. 그래야 몸의 회전 에너지가 라켓으로 자연스럽게 전달된다. 몸이 공을 기다리는 게 아니라, 몸이 공을 '만나러 가는' 리듬이 필요하다.
        </p>

        <blockquote className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 dark:bg-green-950 italic">
          <p className="text-green-800 dark:text-green-200">
            💡 "포핸드는 치는 게 아니라, 몸의 흐름으로 밀어내는 것이다."
          </p>
        </blockquote>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>👉 훈련법:</strong> 벽치기 연습에서 공이 라켓에 닿는 순간, 앞발이 살짝 바닥을 누르는 타이밍을 의식하라. 이 동작이 임팩트 리듬을 고정시킨다.
          </p>
        </div>
      </section>

      <section id="contact-point-zone" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-emerald-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          타점은 고정된 점이 아니라 '움직이는 구간'이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          포핸드의 타점은 상황마다 달라진다. 빠른 공은 앞에서, 느린 공은 약간 뒤에서. 중요한 건 타점의 '범위'를 몸이 기억하게 하는 것이다. 하루에 10분만이라도 <strong>타점 존(zone)</strong>을 설정해 반복하면, 공이 어디로 오든 일관된 스윙이 가능해진다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">속도</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">이상적 타점 위치</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">스윙 포인트</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 dark:border-gray-600">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">빠른 공</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">몸보다 30cm 앞</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">짧고 빠른 임팩트</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">중간 속도</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">몸보다 20cm 앞</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">표준 타점, 회전 중심 유지</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-600">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">느린 공</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">몸 정면</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">팔로스루 길게 가져가기</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-950 p-4 rounded-lg border-l-4 border-emerald-500">
          <p className="text-emerald-800 dark:text-emerald-200 text-sm">
            <strong>👉 실전 팁:</strong> 느린 공에서 타점을 앞당기면 미스가 많아진다. 스윙 리듬은 일정하게, 타점만 유연하게 조정하라.
          </p>
        </div>
      </section>

      <section id="lower-body-rhythm" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          하체 리듬이 임팩트를 만든다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          포핸드는 팔의 기술이 아니라 하체의 리듬이다. 무릎을 살짝 굽혔다가 임팩트 순간 펴주는 <strong>'지면 반력'</strong>이 공에 파워를 싣는다. 서울 잠실·수원 하드코트처럼 반발력이 좋은 곳에서는 짧은 스텝으로 리듬을 맞추고, 부산·제주처럼 습한 코트에서는 하체를 깊게 써야 한다.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>👉 루틴:</strong> "스텝-회전-임팩트-릴리즈"의 4박 리듬으로 몸을 훈련하라. 음악에 맞춰 발박자를 밟는 것도 효과적이다.
          </p>
        </div>
      </section>

      <section id="follow-through-importance" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          팔로스루는 임팩트보다 중요하다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          많은 초보자들이 임팩트 순간에 멈추지만, 프로 선수는 임팩트 이후 <strong>'흐름'을 만든다.</strong> 라켓 헤드가 자연스럽게 왼쪽 어깨 위로 올라갈 때까지 스윙을 유지하라. 이때 손목을 과하게 꺾지 말고, 어깨 회전에 따라가게 해야 한다.
        </p>

        <blockquote className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-purple-950 italic">
          <p className="text-purple-800 dark:text-purple-200">
            "임팩트는 끝이 아니라 시작이다." — 라파엘 나달
          </p>
        </blockquote>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>👉 훈련법:</strong> 빈 스윙 20회 후, '임팩트 이후의 라켓 흐름'을 거울 앞에서 점검하라.
          </p>
        </div>
      </section>

      <section id="regional-court-forehand-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          코트별 포핸드 전략 — 서울·대구·부산·제주
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          한국의 코트 환경은 지역별로 다르다. 포핸드 타이밍과 스윙량도 그에 맞춰 조정해야 한다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·수원(하드코트)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공이 빠르고 낮게 튐 → 플랫 드라이브 중심. 타점을 앞당겨 임팩트 타이밍을 고정하라.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구(건조)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">바운스가 높고 빠름 → 스핀볼 대비, 무릎을 더 굽혀 타점 하강 조정.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산(습함)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공이 무겁게 튐 → 임팩트 시 손목 고정, 하체 회전 강화.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주(바람 많음)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">스윙 리듬 일정 유지, 공이 흔들려도 타점을 믿고 밀어내라.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>👉 GEO 팁:</strong> "서울 포핸드 임팩트 타이밍", "부산 테니스 포핸드 스윙" 키워드는 로컬 검색 유입률이 높다.
          </p>
        </div>
      </section>

      <section id="forehand-feel-recovery-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          포핸드 임팩트 감각을 되찾는 루틴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">1️⃣ 그림자 스윙 10회 — 타점 위치를 시각적으로 기억</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">2️⃣ 벽치기 15분 — 일정한 리듬으로 공 맞추기</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">3️⃣ 풋워크 + 스윙 10분 — 하체 이동과 타점 일치 훈련</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">4️⃣ 리듬 서브 연결 — 서브 후 첫 포핸드 리턴 타이밍 조정</h3>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>👉 핵심:</strong> "타점보다 리듬이 먼저다." 리듬이 안정되면 타점은 자연히 따라온다.
          </p>
        </div>
      </section>

      <section id="forehand-body-conversation" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          포핸드는 결국 '몸의 대화'다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          포핸드를 잘 치는 사람은 공과 싸우지 않는다. 공의 속도, 회전, 리듬을 읽고 '대화하듯' 맞춘다. 0.1초의 여유가 생기면 그 순간 게임의 흐름이 바뀐다. 강한 스윙보다 '예측 가능한 타이밍'을 만들라. 그것이 진짜 실력이다.
        </p>
      </section>

      <section id="forehand-checklist" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          포핸드 체크리스트
        </h2>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-6 rounded-lg">
          <h3 className="font-bold text-cyan-800 dark:text-cyan-200 mb-4">👉 포핸드 체크리스트</h3>
          <ul className="space-y-2 text-cyan-700 dark:text-cyan-300">
            <li>• 타점: 몸보다 20~30cm 앞인가?</li>
            <li>• 하체: 무릎 굽힘과 펴짐이 자연스러운가?</li>
            <li>• 리듬: 일정한 4박자로 스윙하는가?</li>
            <li>• 팔로스루: 어깨 위까지 이어지는가?</li>
          </ul>
        </div>
      </section>

      
      {/* FAQ Section */}
      <FAQ items={faqs} />

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/guide/tennis-footwork-balance-training">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  기술 가이드
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 풋워크 밸런스 훈련법
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  포핸드와 백핸드의 완벽한 밸런스를 위한 풋워크 기술. 코트 지배의 핵심 이동 기술을 마스터하세요.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </Article>
  );
}

import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 백핸드의 기술 — 왼손의 리드로 완성하는 정확한 임팩트 | 흔들림 없는 스윙을 만드는 양손 백핸드의 비밀',
  description: '백핸드는 힘이 아니라 밸런스의 기술이다. 왼손이 리드하고 오른손이 따라올 때 정확도와 파워가 동시에 완성된다.',
  keywords: ['테니스 백핸드', '양손 백핸드', '스윙 기술', '임팩트', '타점', '기술'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-backhand-technique-guide',
  },
  openGraph: {
    title: '테니스 백핸드의 기술 — 왼손의 리드로 완성하는 정확한 임팩트 | 흔들림 없는 스윙을 만드는 양손 백핸드의 비밀',
    description: '백핸드는 힘이 아니라 밸런스의 기술이다. 왼손이 리드하고 오른손이 따라올 때 정확도와 파워가 동시에 완성된다.',
    url: 'https://www.tennisfrens.com/blog/tennis-backhand-technique-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 백핸드의 기술 — 왼손의 리드로 완성하는 정확한 임팩트 | 흔들림 없는 스윙을 만드는 양손 백핸드의 비밀',
    description: '백핸드는 힘이 아니라 밸런스의 기술이다. 왼손이 리드하고 오른손이 따라올 때 정확도와 파워가 동시에 완성된다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'backhand-essence-left-hand-leads', text: '1. 백핸드의 본질 — 왼손이 주도하고 오른손이 보조한다', depth: 2 },
  { id: 'grip-selection-continental-eastern-blend', text: '2. 그립 선택 — 콘티넨탈 + 이스턴의 조화', depth: 2 },
  { id: 'impact-contact-point-ahead-waist-height', text: '3. 임팩트 타점 — 공보다 앞, 허리 높이에서', depth: 2 },
  { id: 'swing-arc-not-straight-line', text: '4. 스윙 궤도 — 직선이 아닌 \'호(Arc)\'의 움직임', depth: 2 },
  { id: 'geo-backhand-adjustment', text: '5. GEO별 백핸드 조정법', depth: 2 },
  { id: 'backhand-strengthening-routine-15min', text: '6. 백핸드 강화 루틴 (15분)', depth: 2 },
  { id: 'mistake-correction-common-backhand-errors', text: '7. 실수 교정 — 자주 나오는 백핸드 오류', depth: 2 },
  { id: 'conclusion-left-hand-lead-makes-art', text: '결론 — 왼손이 리드하는 순간, 백핸드는 예술이 된다', depth: 2 },
];

const faqs = [
  {
    q: '양손 백핸드에서 왼손이 더 중요한가요?',
    a: '그렇습니다. 왼손이 주동이 되어야 스윙의 방향과 파워가 안정됩니다.'
  },
  {
    q: '백핸드가 자꾸 늦어요.',
    a: '타점을 앞당기세요. 공을 기다리지 말고, 몸이 먼저 회전해야 합니다.'
  },
  {
    q: '스핀 백핸드를 잘 치는 방법은?',
    a: '라켓 궤도를 아래에서 위로 부드럽게 올리세요. 팔로스루를 길게 가져가는 것이 포인트입니다.'
  },
  {
    q: '하드코트와 클레이코트에서 스윙 차이가 있나요?',
    a: '네. 하드코트는 반발이 빨라 짧고 빠르게, 클레이는 길고 부드럽게 스윙해야 합니다.'
  },
  {
    q: '왼손이 약해서 백핸드가 약합니다.',
    a: '왼손 전용 밴드 트레이닝을 매일 5분씩 하세요. 근력이 아니라 근신경 연결이 핵심입니다.'
  }
];

export default function TennisBackhandTechniqueGuidePage() {
  const title = '테니스 백핸드의 기술 — 왼손의 리드로 완성하는 정확한 임팩트 | 흔들림 없는 스윙을 만드는 양손 백핸드의 비밀';
  const excerpt = '백핸드는 힘이 아니라 밸런스의 기술이다. 왼손이 리드하고 오른손이 따라올 때 정확도와 파워가 동시에 완성된다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            백핸드 기술
          </Badge>
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
            양손 백핸드
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          많은 테니스 플레이어가 백핸드를 어려워합니다. 포핸드보다 몸의 회전 방향이 반대이고, 타점이 짧기 때문이죠. 하지만 백핸드는 '힘의 기술'이 아니라 '밸런스의 기술'입니다. 왼손이 리드하고 오른손이 따라올 때 비로소 정확한 임팩트가 만들어집니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/backhand-technique-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 백핸드 기술 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-basics/backhand.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 백핸드 가이드</a></li>
        </ul>
      </div>

      <section id="backhand-essence-left-hand-leads" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          백핸드의 본질 — 왼손이 주도하고 오른손이 보조한다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          백핸드 스윙은 단순히 양손으로 라켓을 쥐는 것이 아니라, <strong>왼손이 공을 밀어내는 주동 손</strong>입니다. 오른손은 방향을 안정시키는 보조 역할을 합니다.
        </p>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500 mb-6">
          <p className="text-green-800 dark:text-green-200 mb-3">
            <strong>핵심 문장:</strong> "백핸드는 오른손으로 당기지 말고, 왼손으로 밀어라."
          </p>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-950 p-4 rounded-lg border-l-4 border-emerald-500 mb-6">
          <h3 className="font-bold text-emerald-800 dark:text-emerald-200 mb-3">기본 동작 순서:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-emerald-800 dark:text-emerald-200">라켓 테이크백 시 왼팔이 몸 앞을 이끈다.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-emerald-800 dark:text-emerald-200">체중을 오른발 → 왼발 순으로 이동.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-emerald-800 dark:text-emerald-200">임팩트 순간, 왼손이 중심선 앞 15cm에서 밀어내듯 스윙.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-teal-800 dark:text-teal-200 text-sm">
            <strong>과학적 근거:</strong> 근전도(EMG) 분석에 따르면, 양손 백핸드 시 왼팔의 삼각근과 광배근 활성도가 오른팔보다 약 20% 더 높습니다.
          </p>
        </div>
      </section>

      <section id="grip-selection-continental-eastern-blend" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-emerald-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          그립 선택 — 콘티넨탈 + 이스턴의 조화
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">손</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">추천 그립</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">특징</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">오른손</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">콘티넨탈</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">안정적 컨트롤, 밸런스 유지</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">왼손</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">이스턴</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">파워와 스핀 생성</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>💡 팁:</strong> 왼손의 포핸드 그립으로 백핸드를 쥔다고 생각하면 자연스럽습니다.
          </p>
        </div>
      </section>

      <section id="impact-contact-point-ahead-waist-height" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          임팩트 타점 — 공보다 앞, 허리 높이에서
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          백핸드는 포핸드보다 타점이 짧기 때문에 '공을 기다리면 늦습니다'. 공이 오기 전에 몸이 먼저 회전해야 합니다.
        </p>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500 mb-6">
          <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-3">이상적 타점:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">몸 앞 20cm, 허리 높이.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">체중이 왼발로 완전히 이동된 상태.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">라켓 헤드가 지면과 평행 유지.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-950 p-4 rounded-lg border-l-4 border-emerald-500">
          <p className="text-emerald-800 dark:text-emerald-200 text-sm">
            <strong>💡 훈련법:</strong> 벽치기 시 공이 허리보다 올라오지 않게 낮은 바운드를 중심으로 연습하세요.
          </p>
        </div>
      </section>

      <section id="swing-arc-not-straight-line" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          스윙 궤도 — 직선이 아닌 '호(Arc)'의 움직임
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          스윙은 직선이 아니라 원호를 그려야 합니다. 그래야 회전이 자연스럽게 걸리고, 공이 코트 안으로 떨어집니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">궤도 구간</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">동작</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">포인트</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">백스윙</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">왼쪽 어깨 뒤로 라켓 이동</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">체중 오른발 중심</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">임팩트</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">몸 앞 20cm</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">시선 고정, 팔 펴기</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">팔로스루</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">오른어깨 위로 마무리</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">상체 회전 유지</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            <strong>💡 핵심:</strong> 라켓 헤드가 공보다 '뒤에서 앞으로' 흐르는 느낌으로 휘둘러야 합니다.
          </p>
        </div>
      </section>

      <section id="geo-backhand-adjustment" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          GEO별 백핸드 조정법
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">반발 빠름 → 스윙 짧게, 타점 앞당기기.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습도 높음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 무거움 → 팔로스루 길게 유지.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 가벼움 → 백스윙 작게, 컨트롤 중심.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">스핀 강화, 낮은 탄도 유지.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>📍 GEO 팁:</strong> 습도와 바람은 공의 회전력에 직접 영향을 미칩니다. 환경을 읽고 스윙 속도를 조정하세요.
          </p>
        </div>
      </section>

      <section id="backhand-strengthening-routine-15min" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          백핸드 강화 루틴 (15분)
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">구간</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">시간</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">0~5분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">벽치기 100회</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">스윗스팟 타점 감각 익히기</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">5~10분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">왼손 주도 스윙</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">오른손 이완, 왼손 리드</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">10~15분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">풀스윙 루틴</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">발 스텝 + 체중 이동 결합</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>💡 훈련 팁:</strong> 거울 앞에서 왼손의 리드 각도(45도)를 확인하면 폼 교정이 빨라집니다.
          </p>
        </div>
      </section>

      <section id="mistake-correction-common-backhand-errors" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-rose-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          실수 교정 — 자주 나오는 백핸드 오류
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-rose-50 dark:bg-rose-950 p-4 rounded-lg">
            <h3 className="font-bold text-rose-800 dark:text-rose-200 mb-2">1️⃣ 공이 뜸:</h3>
            <p className="text-rose-700 dark:text-rose-300 text-sm">타점이 뒤, 손목 과사용 → 타점 앞당기기.</p>
          </div>
          <div className="bg-rose-50 dark:bg-rose-950 p-4 rounded-lg">
            <h3 className="font-bold text-rose-800 dark:text-rose-200 mb-2">2️⃣ 공이 짧음:</h3>
            <p className="text-rose-700 dark:text-rose-300 text-sm">체중 이동 부족 → 오른발에서 왼발로 확실히 전환.</p>
          </div>
          <div className="bg-rose-50 dark:bg-rose-950 p-4 rounded-lg">
            <h3 className="font-bold text-rose-800 dark:text-rose-200 mb-2">3️⃣ 공이 옆으로 샘:</h3>
            <p className="text-rose-700 dark:text-rose-300 text-sm">어깨 회전 미흡 → 상체 끝까지 회전 유지.</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            <strong>핵심 문장:</strong> 백핸드는 '팔의 기술'이 아니라 '몸 전체의 조화'입니다.
          </p>
        </div>
      </section>

      <section id="conclusion-left-hand-lead-makes-art" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          결론 — 왼손이 리드하는 순간, 백핸드는 예술이 된다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          좋은 백핸드는 힘으로 밀어붙이는 것이 아닙니다. 왼손의 리드, 체중의 흐름, 시선의 안정 — 이 세 가지가 완성될 때 부드러우면서도 강한 스윙이 만들어집니다. 백핸드는 결국 '리듬의 미학'입니다. 왼손으로 시작해 몸 전체로 마무리되는 이 리듬이 바로 테니스가 예술이 되는 순간입니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-forehand-impact-timing-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  포핸드 기술
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  포핸드 임팩트, 0.1초가 승부를 가른다
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  포핸드는 테니스의 심장이다. 스윙 속도보다 중요한 건 임팩트 타이밍과 몸의 회전 리듬. 이 0.1초의 차이가 경기 전체를 바꾼다.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/blog/tennis-footwork-balance-training-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  풋워크 기술
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 풋워크 밸런스, 빠름보다 '안정'이 먼저다
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  공을 쫓는 속도보다 중요한 건 중심을 잃지 않는 안정감이다. 프로 선수처럼 밸런스를 유지하는 하체 리듬과 스텝 훈련.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <CTA />

      <FAQ items={faqs} />
    </Article>
  );
}

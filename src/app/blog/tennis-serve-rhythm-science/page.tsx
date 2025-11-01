import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '서브 리듬의 과학 — 토스·회전·체중이동으로 완성하는 파워와 안정성 | 첫 서브 성공률 70% 만드는 방법',
  description: '토스 높이, 회전축, 체중이동 타이밍으로 서브 파워와 안정성을 동시에 높이는 실전 루틴과 GEO별 조정법 완전 정리.',
  keywords: ['테니스 서브', '토스', '체중이동', '회전', '리듬', '서브 타이밍', '플랫 서브', '슬라이스 서브', '킥 서브'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-serve-rhythm-science',
  },
  openGraph: {
    title: '서브 리듬의 과학 — 토스·회전·체중이동으로 완성하는 파워와 안정성 | 첫 서브 성공률 70% 만드는 방법',
    description: '토스 높이, 회전축, 체중이동 타이밍으로 서브 파워와 안정성을 동시에 높이는 실전 루틴과 GEO별 조정법 완전 정리.',
    url: 'https://www.tennisfrens.com/blog/tennis-serve-rhythm-science',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '서브 리듬의 과학 — 토스·회전·체중이동으로 완성하는 파워와 안정성 | 첫 서브 성공률 70% 만드는 방법',
    description: '토스 높이, 회전축, 체중이동 타이밍으로 서브 파워와 안정성을 동시에 높이는 실전 루틴과 GEO별 조정법 완전 정리.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'serve-rhythm-4-beats', text: '1. 리듬은 \'1-2-3-타\'의 4박자', depth: 2 },
  { id: 'toss-science', text: '2. 토스의 과학 — 높이와 위치', depth: 2 },
  { id: 'weight-transfer', text: '3. 체중이동 — \'뒤에서 앞\'으로의 에너지 전달', depth: 2 },
  { id: 'spin-science', text: '4. 회전의 과학 — 플랫, 슬라이스, 킥', depth: 2 },
  { id: 'geo-serve-adjustment', text: '5. GEO별 서브 조정 전략', depth: 2 },
  { id: '15-min-serve-routine', text: '6. 15분 서브 리듬 루틴', depth: 2 },
  { id: 'conclusion-serve-rhythm', text: '결론 — 서브는 \'박자\'로 완성된다', depth: 2 },
];

const faqs = [
  {
    q: '첫 서브 성공률을 높이려면?',
    a: '리듬을 일정하게 유지하세요. 속도보다 정확한 토스와 일정한 타이밍이 더 중요합니다.'
  },
  {
    q: '서브가 자꾸 네트에 걸립니다.',
    a: '토스가 뒤로 갑니다. 머리보다 30cm 앞에서 던지세요.'
  },
  {
    q: '힘이 부족해 멀리 안 갑니다.',
    a: '하체 체중이동이 부족합니다. 무릎 굽힘과 펼침을 리듬에 맞춰 연습하세요.'
  },
  {
    q: '두 번째 서브가 자주 불안합니다.',
    a: '플랫 대신 킥 서브를 사용하세요. 회전으로 안정성을 확보할 수 있습니다.'
  },
  {
    q: '바람 부는 날 서브가 흔들려요.',
    a: '토스를 낮추고, 회전량을 늘리세요. 맞바람에선 킥, 뒷바람에선 슬라이스 서브가 유리합니다.'
  }
];

export default function TennisServeRhythmSciencePage() {
  const title = '서브 리듬의 과학 — 토스·회전·체중이동으로 완성하는 파워와 안정성 | 첫 서브 성공률 70% 만드는 방법';
  const excerpt = '서브는 힘이 아니라 리듬의 예술이다. 토스의 높이, 체중이동, 회전축이 일치하면 첫 서브 성공률이 두 배로 오른다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
            서브 마스터
          </Badge>
          <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
            리듬 훈련
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스 서브는 '가장 어렵지만 가장 중요한 기술'입니다. 첫 서브가 성공하면 포인트 주도권이 생기고, 실패하면 흐름이 끊깁니다. 그러나 대부분의 아마추어는 '힘'을 키우려다 리듬을 잃습니다. 서브는 팔의 스피드보다 '리듬·축·타이밍'의 조화가 본질입니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2020/09/how-to-improve-your-tennis-serve/678123/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">서브 개선 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/training/serve.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 서브 기술 가이드</a></li>
        </ul>
      </div>

      <section id="serve-rhythm-4-beats" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          리듬은 '1-2-3-타'의 4박자
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          좋은 서브는 음악처럼 일정한 리듬을 가집니다. '1-2-3-타' 패턴을 기억하세요.
        </p>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg mb-6">
          <p className="text-orange-800 dark:text-orange-200 font-medium mb-3">1️⃣ 라켓 준비 (1) → 2️⃣ 토스 상승 (2) → 3️⃣ 체중이동 (3) → 4️⃣ 임팩트 (타).</p>
          <p className="text-orange-700 dark:text-orange-300 text-sm">
            이 4박자가 어긋나면 타점이 흔들리고, 힘이 새어 나갑니다. <strong>리듬은 곧 정확도</strong>입니다. 공을 '올려 던지고 치는' 게 아니라, '리듬 안에서 맞추는' 것이 핵심입니다.
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            <strong>💡 훈련 팁:</strong> 토스와 스윙을 분리해서 연습하지 말고, '하나의 리듬'으로 이어지게 하세요. 손이 공을 던지는 순간, 하체는 이미 올라가 있어야 합니다.
          </p>
        </div>
      </section>

      <section id="toss-science" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          토스의 과학 — 높이와 위치
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          토스는 서브 전체의 70%를 결정합니다. 토스가 흔들리면 스윙이 불안정해지고, 어깨에 무리가 갑니다.
        </p>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-red-800 dark:text-red-200 mb-3">이상적인 토스 좌표:</h3>
          <ul className="text-red-700 dark:text-red-300 space-y-1 text-sm">
            <li>• 오른손잡이 기준, 머리보다 약 30cm 앞, 오른쪽으로 15cm.</li>
            <li>• 공이 떨어질 때 어깨 각도 75도 유지.</li>
            <li>• 최고점에서 멈추지 않고 바로 임팩트.</li>
          </ul>
        </div>

        <div className="space-y-3 mb-6">
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">잘못된 토스 신호:</h3>
            <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
              <li>• 공이 뒤로 가면 네트 미스.</li>
              <li>• 왼쪽으로 가면 스핀 과다.</li>
              <li>• 너무 높으면 타이밍 불일치.</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>💡 교정법:</strong> 벽 앞에서 토스 후 떨어지는 공이 머리 오른쪽 어깨 근처로 떨어지면 이상적입니다.
          </p>
        </div>
      </section>

      <section id="weight-transfer" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          체중이동 — '뒤에서 앞'으로의 에너지 전달
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          서브 파워의 60%는 하체에서 나옵니다. 다리 근육이 압축되며 만든 반발력이 상체 회전에 전달되어야 합니다.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">핵심 포인트:</h3>
          <ul className="text-blue-700 dark:text-blue-300 space-y-1 text-sm">
            <li>• 무릎을 살짝 굽혀 체중을 뒤에 모은 뒤, 토스 상승과 함께 전방으로 이동.</li>
            <li>• 임팩트 순간 무릎이 펴지며 체중이 앞발로 80% 이동.</li>
            <li>• 피니시는 왼발이 네트 쪽으로 자연스럽게 전진.</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            무릎을 고정하거나 점프를 억지로 만들면 오히려 파워 손실이 납니다. 체중 이동은 '밀기'가 아니라 '흐름'입니다.
          </p>
        </div>
      </section>

      <section id="spin-science" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          회전의 과학 — 플랫, 슬라이스, 킥
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">구질</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">라켓면 각도</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">타점 위치</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">궤적 특징</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">추천 상황</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">플랫 서브</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">90도</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">정면 약간 앞</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">빠르고 낮음</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">첫 서브 공격용</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">슬라이스 서브</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">80~85도</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">몸 앞 오른쪽</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">휘어지는 궤적</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">상대 백핸드 공략</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">킥 서브</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">75~80도</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">머리 위 약간 뒤</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">높게 튀는 스핀</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">두 번째 서브 안정용</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            서브의 구질을 섞으면 상대의 리턴 타이밍을 깨뜨릴 수 있습니다. 초보자는 플랫, 중급은 슬라이스, 상급은 킥을 병행하세요.
          </p>
        </div>
      </section>

      <section id="geo-serve-adjustment" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          GEO별 서브 조정 전략
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          기후에 따라 공의 밀도와 반발이 달라지므로, 지역별로 토스와 체중이동 각도를 미세하게 조정해야 합니다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공이 빠르고 낮게 튐 → 플랫 서브 유리, 토스 낮게.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습도 높음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 무겁고 속도 떨어짐 → 토스 높이고 회전량 증가.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">반발 강해 플랫 위험 → 슬라이스 중심으로 구질 조절.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 강함):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">토스 낮추고 킥서브 활용, 바람에 맞서 회전 안정성 확보.</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            같은 서브라도 지역별 코트 특성에 맞춰 조정하면 성공률이 크게 향상됩니다.
          </p>
        </div>
      </section>

      <section id="15-min-serve-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          15분 서브 리듬 루틴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">1. 토스 점 고정 3분:</h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-sm">벽 앞에서 토스 후 공 낙하 좌표 확인.</p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">2. 체중 이동 드릴 4분:</h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-sm">공 없이 무릎 굽힘–펼침 리듬 연습.</p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">3. 구질 섞기 5회 × 3세트:</h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-sm">슬라이스 → 플랫 → 킥 순서로 반복.</p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">4. 마무리 리듬 서브 10회:</h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-sm">일정한 호흡과 타점으로 마무리.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>💡 핵심:</strong> 루틴의 목적은 '정확도'가 아니라 '일관성'입니다. 서브는 하루에 20분씩만 꾸준히 반복해도 감각이 급격히 향상됩니다.
          </p>
        </div>
      </section>

      <section id="conclusion-serve-rhythm" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          결론 — 서브는 '박자'로 완성된다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          토스가 흔들리고, 리듬이 끊기면 서브는 무너집니다. 반대로 리듬이 일정하면 플랫이든 스핀 서브든 일관성이 유지됩니다. '1-2-3-타'를 몸에 새기세요. 테니스에서 서브는 기술이 아니라 음악입니다. 그 리듬이 안정된 순간, 경기는 이미 당신 쪽으로 기울어 있습니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/serve-return-prediction-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  리턴 마스터
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  리턴은 반응이 아니라 '예측'의 기술이다
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  서브 리턴은 반응이 아니라 예측의 경기다. 토스와 스텝 타이밍, 라켓 각도를 조정하면 180km 서브도 되돌릴 수 있다.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/blog/tennis-serve-timing-and-spin-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 mb-2">
                  서브 가이드
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 서브 완전 정복, 힘이 아닌 타이밍으로 승부하라
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  강한 서브는 팔힘이 아니라 리듬에서 나온다. 아마추어가 프로처럼 보이게 만드는 서브 타이밍과 스핀 컨트롤의 모든 것을 정리했다.
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

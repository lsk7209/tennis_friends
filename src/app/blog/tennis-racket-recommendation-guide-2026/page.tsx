import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
    title: '2026년 테니스 라켓 추천 가이드 — 초보자부터 상급자까지 BEST 5 | 윌슨, 바볼랏, 요넥스',
    description: '2026년 최신 테니스 라켓 트렌드와 추천 모델 TOP 5를 소개합니다. 윌슨 블레이드 v9, 요넥스 이존, 바볼랏 퓨어드라이브 등 인기 라켓의 장단점을 비교 분석해 드립니다.',
    keywords: ['테니스 라켓 추천 2026', '테니스 라켓 순위', '윌슨 블레이드 v9', '요넥스 이존', '바볼랏 퓨어드라이브', '초보자 테니스 라켓', '여자 테니스 라켓'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/blog/tennis-racket-recommendation-guide-2026',
    },
    openGraph: {
        title: '2026년 테니스 라켓 추천 가이드 — 초보자부터 상급자까지 BEST 5',
        description: '2026년 최신 테니스 라켓 트렌드와 추천 모델 TOP 5를 소개합니다. 윌슨 블레이드 v9, 요넥스 이존 등 인기 라켓 비교.',
        url: 'https://tennisfriends.co.kr/blog/tennis-racket-recommendation-guide-2026',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: '2026년 테니스 라켓 추천 가이드 — 초보자부터 상급자까지 BEST 5',
        description: '2026년 최신 테니스 라켓 트렌드와 추천 모델 TOP 5를 소개합니다. 윌슨 블레이드 v9, 요넥스 이존 등 인기 라켓 비교.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
    { id: '2026-trend', text: '1. 2026년 라켓 트렌드: "편안함과 파워의 공존"', depth: 2 },
    { id: 'best-for-beginners', text: '2. 입문자(테린이) 추천 BEST 3', depth: 2 },
    { id: 'best-for-advanced', text: '3. 중상급자 추천 BEST 3', depth: 2 },
    { id: 'best-for-spin', text: '4. 스핀형 플레이어 추천', depth: 2 },
    { id: 'selection-tips', text: '5. 구매 전 필수 체크리스트', depth: 2 },
    { id: 'conclusion', text: '결론 — 나에게 맞는 라켓 찾기', depth: 2 },
];

const faqs = [
    {
        q: '라켓 무게는 몇 그램이 적당한가요?',
        a: '일반적으로 성인 남성은 300g~305g, 성인 여성은 260g~285g을 선호합니다. 입문자는 조금 가벼운 라켓으로 시작해 스윙 자세를 잡는 것이 좋습니다.'
    },
    {
        q: '헤드 사이즈가 크면 좋은가요?',
        a: '헤드 사이즈가 클수록 공을 맞추기 편하고 파워가 잘 나오지만 컨트롤은 떨어집니다. 보통 100sq가 표준이며, 초보자는 100~105sq를 추천합니다.'
    },
    {
        q: '오픈 패턴(16x19)과 덴스 패턴(18x20)의 차이는?',
        a: '오픈 패턴은 줄 간격이 넓어 스핀과 파워에 유리하고, 덴스 패턴은 촘촘해서 컨트롤과 타구감에 유리합니다. 초보자에게는 오픈 패턴이 다루기 쉽습니다.'
    },
    {
        q: '라켓 수명은 얼마나 되나요?',
        a: '프레임에 금이 가지 않더라도 내부 소재의 탄성이 줄어들기 때문에, 주 2~3회 사용자 기준 2년~3년 정도 사용하면 교체를 고려해보는 것이 좋습니다.'
    }
];

export default function TennisRacketRecommendationGuide2026Page() {
    const title = '2026년 테니스 라켓 추천 가이드 — 초보자부터 상급자까지 BEST 5 | 윌슨, 바볼랏, 요넥스';
    const excerpt = '수많은 라켓 중 어떤 걸 사야 할지 고민이신가요? 2026년 가장 핫한 라켓들의 특징을 완벽하게 정리해 드립니다.';

    return (
        <Article
            title={title}
            excerpt={excerpt}
            date="2026-01-25"
            slug="tennis-racket-recommendation-guide-2026"
            author="TennisFriends"
            image="/images/blog/tennis-racket-recommendation-guide-2026.png"
        >
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                        2026 신상
                    </Badge>
                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                        구매 가이드
                    </Badge>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    새해를 맞아 새로운 라켓으로 코트를 누비고 싶으신가요? 메이저 브랜드들의 기술 전쟁으로 라켓은 해마다 진화하고 있습니다. 2026년 주목해야 할 핵심 키워드와 함께, 당신의 플레이 스타일을 업그레이드해 줄 '인생 라켓'을 찾아드립니다.
                </p>
            </div>

            <TOC items={tocItems} />

            <section id="2026-trend" className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-gray-800 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                    2026년 라켓 트렌드: "편안함과 파워의 공존"
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    <p>
                        과거 테니스 라켓 시장에는 불문율이 있었습니다. <em>"파워가 좋으면 컨트롤이 안 되고, 컨트롤이 좋으면 공이 안 나간다."</em> 혹은 <em>"타구감이 부드러우면 먹먹하고, 경쾌하면 팔에 충격이 크다."</em> 하지만 2026년, 이 공식은 완전히 깨졌습니다.
                    </p>
                    <p className="mt-4">
                        주요 브랜드들의 2026년 라인업을 관통하는 핵심 키워드는 <strong>'하이브리드 퍼포먼스'</strong>입니다. 헤드(Head)의 <em>'Auxetic 2.0'</em>, 윌슨(Wilson)의 <em>'StableFeel'</em>, 요넥스(Yonex)의 <em>'Servo Filter'</em> 등 최첨단 소재 기술이 적용되면서, 임팩트 시에는 부드럽게 충격을 흡수하면서도 공이 떠나는 순간에는 폭발적인 반발력을 뿜어내는 '마법 같은 타구감'이 현실화되었습니다.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-8">
                        <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 text-lg">💡 2026년 라켓 선택의 3대 기준</h4>
                        <ul className="list-disc list-inside space-y-2 text-base">
                            <li><strong>Arm-Friendly (부상 방지):</strong> 테니스 엘보를 원천 차단하는 진동 감쇠 기술이 적용되었는가?</li>
                            <li><strong>Easy Power (접근성):</strong> 적은 힘으로도 베이스라인 깊숙이 공을 보낼 수 있는가?</li>
                            <li><strong>Stability (안정성):</strong> 빠른 공에 밀리지 않고 정확한 면을 유지할 수 있는가?</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="best-for-beginners" className="mb-20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                    <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                    입문자(테린이) 추천 BEST 3
                </h2>
                <div className="space-y-12">
                    {/* Yonex EZONE 100 */}
                    <Card className="bg-white dark:bg-gray-800 overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all shadow-md hover:shadow-xl">
                        <div className="bg-gradient-to-r from-blue-600 to-sky-500 p-5">
                            <h3 className="text-2xl font-bold text-white flex justify-between items-center">
                                1. 요넥스 이존 100 (Yonex EZONE 100)
                                <Badge variant="secondary" className="bg-white/20 text-white border-none px-3 py-1">실패 없는 선택</Badge>
                            </h3>
                        </div>
                        <CardContent className="p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl text-sm border border-gray-100 dark:border-gray-600">
                                <div><span className="text-gray-500 block text-xs mb-1">헤드 사이즈</span> <span className="font-bold text-gray-900 dark:text-white">100 sq in</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">무게 (Unstrung)</span> <span className="font-bold text-gray-900 dark:text-white">300g / 285g(L)</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">밸런스</span> <span className="font-bold text-gray-900 dark:text-white">320mm (4 pts HL)</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">스윙웨이트</span> <span className="font-bold text-gray-900 dark:text-white">317</span></div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                        🧐 왜 베스트셀러인가요?
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        <strong>"스윗스팟이 운동장만 하다"</strong>는 평가는 과장이 아닙니다. 요넥스 특유의 사각형(Isometric) 헤드 형태 덕분에 유효 타구 면적이 타 브랜드 원형 헤드 대비 7% 이상 넓습니다. 정타를 맞추기 어려운 테니스 입문자가 써도 공이 네트를 훌쩍 넘어가는 '자동 보정' 기능을 느낄 수 있습니다. 닉 키리오스, 캐스퍼 루드, 벤 쉘튼 등 파워 히터들도 애용하는 명불허전의 명검입니다.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">🛠 테크놀로지 포인트</h4>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                        프레임 상단은 강성을 높여 파워를 증대시키고, 목(Throat) 부분은 유연하게 설계하여 부드러운 타구감을 제공합니다. 특히 그립 속에 내장된 진동 감쇠 메쉬(VDM)가 불필요한 진동을 걸러주어 엘보 보호에 탁월합니다.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                        <span className="text-green-700 dark:text-green-400 font-bold block mb-2">👍 장점 (Pros)</span>
                                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                            <li>압도적인 스윗스팟 크기 (정타율 상승)</li>
                                            <li>부드러우면서도 강력한 파워</li>
                                            <li>초보자부터 선수까지 커버 가능한 범용성</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                                        <span className="text-red-700 dark:text-red-400 font-bold block mb-2">👎 단점 (Cons)</span>
                                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                            <li>타구감이 다소 먹먹하다(Muted)는 호불호</li>
                                            <li>컨트롤 보다는 파워 위주의 세팅</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Babolat Pure Drive */}
                    <Card className="bg-white dark:bg-gray-800 overflow-hidden border-2 border-transparent hover:border-sky-500 transition-all shadow-md hover:shadow-xl">
                        <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-5">
                            <h3 className="text-2xl font-bold text-white flex justify-between items-center">
                                2. 바볼랏 퓨어 드라이브 (Babolat Pure Drive)
                                <Badge variant="secondary" className="bg-white/20 text-white border-none px-3 py-1">파워의 제왕</Badge>
                            </h3>
                        </div>
                        <CardContent className="p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl text-sm border border-gray-100 dark:border-gray-600">
                                <div><span className="text-gray-500 block text-xs mb-1">헤드 사이즈</span> <span className="font-bold text-gray-900 dark:text-white">100 sq in</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">무게 (Unstrung)</span> <span className="font-bold text-gray-900 dark:text-white">300g</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">밸런스</span> <span className="font-bold text-gray-900 dark:text-white">320mm (7 pts HL)</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">강성(Stiffness)</span> <span className="font-bold text-gray-900 dark:text-white">72 RA</span></div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                        🧐 왜 추천하나요?
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        현대 테니스 라켓의 역사는 '퓨어 드라이브' 출시 전과 후로 나뉜다고 해도 과언이 아닙니다. <strong>"갖다 대면 넘어간다"</strong>는 말처럼 반발력이 그야말로 '어마무시'합니다. 스윙 폼이 아직 완성되지 않아 온전히 체중을 싣지 못하는 초보자도, 이 라켓을 들면 시원시원한 샷을 날릴 수 있습니다. 서브와 스트로크에서 '공짜 파워(Free Power)'를 얻고 싶다면 단연 최고의 선택입니다.
                                    </p>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                                    <p className="text-sm text-blue-800 dark:text-blue-300">
                                        <strong>💡 전문가 팁:</strong> 반발력이 워낙 좋기 때문에 스트링 텐션을 평소보다 2-3lbs 정도 높게 매는 것을 추천합니다. 공이 펜스 밖으로 날아가는 '홈런'을 방지할 수 있습니다.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                        <span className="text-green-700 dark:text-green-400 font-bold block mb-2">👍 장점</span>
                                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                            <li>폭발적인 볼 스피드와 서브 파워</li>
                                            <li>매우 쉬운 조작성과 넓은 면적</li>
                                            <li>시원시원한 타구음 (Crisp Feel)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                                        <span className="text-red-700 dark:text-red-400 font-bold block mb-2">👎 단점</span>
                                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                            <li>강성(Stiffness)이 높아 팔에 충격이 올 수 있음</li>
                                            <li>엘보 이력이 있는 분들에겐 주의 필요</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Wilson Ultra 100 */}
                    <Card className="bg-white dark:bg-gray-800 overflow-hidden border-2 border-transparent hover:border-indigo-500 transition-all shadow-md hover:shadow-xl">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-5">
                            <h3 className="text-2xl font-bold text-white flex justify-between items-center">
                                3. 윌슨 울트라 100 (Wilson Ultra 100 v4)
                                <Badge variant="secondary" className="bg-white/20 text-white border-none px-3 py-1">압도적 비주얼</Badge>
                            </h3>
                        </div>
                        <CardContent className="p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl text-sm border border-gray-100 dark:border-gray-600">
                                <div><span className="text-gray-500 block text-xs mb-1">헤드 사이즈</span> <span className="font-bold text-gray-900 dark:text-white">100 sq in</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">무게 (Unstrung)</span> <span className="font-bold text-gray-900 dark:text-white">300g</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">밸런스</span> <span className="font-bold text-gray-900 dark:text-white">320mm (7 pts HL)</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">스윙웨이트</span> <span className="font-bold text-gray-900 dark:text-white">315</span></div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">✨ 우아한 파워 (Beautiful Power)</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        코트 위에서 빛에 따라 색이 변하는 영롱한 '오션 블루' 컬러로 디자인 선호도 1위를 다투는 라켓입니다. 성향은 '바볼랏 퓨어 드라이브'와 같은 파워형 라켓 카테고리에 속하지만, 조금 더 <strong>'우아하고 부드러운 파워'</strong>를 지향합니다. 특히 라켓의 목 부분이 단단하게 설계되어 발리(Volley) 시 면 안정성이 매우 뛰어납니다. 복식(Doubles) 게임을 즐기는 동호인들에게 최고의 파트너가 되어줍니다.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                        <span className="text-green-700 dark:text-green-400 font-bold block mb-2">👍 장점</span>
                                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                            <li>발리 시 뒤틀림 없는 안정성</li>
                                            <li>역대급으로 아름다운 도장 마감 (Color-shifting)</li>
                                            <li>편안하게 나오는 파워</li>
                                        </ul>
                                    </div>
                                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                                        <span className="text-indigo-700 dark:text-indigo-400 font-bold block mb-2">ℹ️ 특이사항</span>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">
                                            그립 부분이 다른 브랜드에 비해 아주 미세하게 두껍게 느껴질 수 있다는 평이 있습니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="best-for-advanced" className="mb-20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                    <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                    중상급자 추천 BEST 3
                </h2>
                <div className="space-y-12">
                    {/* Wilson Blade 98 */}
                    <Card className="bg-white dark:bg-gray-800 overflow-hidden border-2 border-transparent hover:border-green-600 transition-all shadow-md hover:shadow-xl">
                        <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-5">
                            <h3 className="text-2xl font-bold text-white flex justify-between items-center">
                                1. 윌슨 블레이드 98 (Wilson Blade 98 v9)
                                <Badge variant="secondary" className="bg-white/20 text-white border-none px-3 py-1">투어 점유율 1위</Badge>
                            </h3>
                        </div>
                        <CardContent className="p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl text-sm border border-gray-100 dark:border-gray-600">
                                <div><span className="text-gray-500 block text-xs mb-1">헤드 사이즈</span> <span className="font-bold text-gray-900 dark:text-white">98 sq in</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">무게 (Unstrung)</span> <span className="font-bold text-gray-900 dark:text-white">305g</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">밸런스</span> <span className="font-bold text-gray-900 dark:text-white">320mm</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">강성</span> <span className="font-bold text-gray-900 dark:text-white">60 RA (매우 부드러움)</span></div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">👑 명실상부한 투어 1위 라켓</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        <strong>"컨트롤의 정석"</strong>이자 전 세계 ATP/WTA 랭커들이 가장 많이 사용하는 라켓입니다. 스테파노스 치치파스, 아리나 사발렌카, 엠마 라두카누 등 수많은 스타들의 선택을 받았습니다. 21mm의 얇은 빔 두께에서 나오는 날카로운 컨트롤과 <em>'공을 씹어 뱉는 듯한'</em> 쫀득한 손맛(Feel)은 한 번 빠지면 헤어나오기 힘듭니다. v9 버전에서는 'StableFeel' 기술이 적용되어 빗맞았을 때의 비틀림이 획기적으로 줄어들었습니다.
                                    </p>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                    <span className="text-green-700 dark:text-green-400 font-bold block mb-2">🎯 누구에게 추천하나요?</span>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        본인의 힘으로 스윙 스피드를 만들 수 있는 중상급자. 공을 정확한 코스로 찌르고 싶은 '컨트롤 프릭(Control Freak)'에게 최고의 무기입니다. (초보자가 쓰기엔 공이 짧아질 수 있어 어렵습니다.)
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Head Speed MP */}
                    <Card className="bg-white dark:bg-gray-800 overflow-hidden border-2 border-transparent hover:border-gray-800 transition-all shadow-md hover:shadow-xl">
                        <div className="bg-gradient-to-r from-gray-700 to-black p-5">
                            <h3 className="text-2xl font-bold text-white flex justify-between items-center">
                                2. 헤드 스피드 MP (Head Speed MP)
                                <Badge variant="secondary" className="bg-white/20 text-white border-none px-3 py-1">노박 조코비치</Badge>
                            </h3>
                        </div>
                        <CardContent className="p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl text-sm border border-gray-100 dark:border-gray-600">
                                <div><span className="text-gray-500 block text-xs mb-1">헤드 사이즈</span> <span className="font-bold text-gray-900 dark:text-white">100 sq in</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">무게 (Unstrung)</span> <span className="font-bold text-gray-900 dark:text-white">300g</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">스윙웨이트</span> <span className="font-bold text-gray-900 dark:text-white">323</span></div>
                                <div><span className="text-gray-500 block text-xs mb-1">기술</span> <span className="font-bold text-gray-900 dark:text-white">Auxetic 2.0</span></div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">⚡️ 이름값 하는 스피드</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        이름처럼 <strong>빠른 스윙 스피드</strong>를 낼 수 있도록 설계된 공기역학적 프레임이 특징입니다. 컨트롤과 파워, 스핀과 플랫의 밸런스가 기가 막히게 잡혀있는 '육각형 라켓'입니다. Auxetic 2.0 기술 적용으로 임팩트 시의 감각이 더욱 선명해졌습니다. 베이스라인 플레이와 네트 플레이 모두를 즐기는 올라운드 플레이어(All-Court Player)에게 더할 나위 없는 무기입니다.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="best-for-spin" className="mb-20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                    <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                    스핀형 플레이어 추천
                </h2>
                <Card className="bg-white dark:bg-gray-800 overflow-hidden border-2 border-transparent hover:border-yellow-500 transition-all shadow-md hover:shadow-xl">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-5">
                        <h3 className="text-2xl font-bold text-white flex justify-between items-center">
                            바볼랏 퓨어 에어로 (Babolat Pure Aero)
                            <Badge variant="secondary" className="bg-white/20 text-white border-none px-3 py-1">스핀 몬스터</Badge>
                        </h3>
                    </div>
                    <CardContent className="p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl text-sm border border-gray-100 dark:border-gray-600">
                            <div><span className="text-gray-500 block text-xs mb-1">헤드 사이즈</span> <span className="font-bold text-gray-900 dark:text-white">100 sq in</span></div>
                            <div><span className="text-gray-500 block text-xs mb-1">무게 (Unstrung)</span> <span className="font-bold text-gray-900 dark:text-white">300g</span></div>
                            <div><span className="text-gray-500 block text-xs mb-1">스트링 패턴</span> <span className="font-bold text-gray-900 dark:text-white">16x19 (오픈)</span></div>
                            <div><span className="text-gray-500 block text-xs mb-1">스윙웨이트</span> <span className="font-bold text-gray-900 dark:text-white">322</span></div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">🌪 코트를 지배하는 탑스핀</h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>"극강의 스핀 머신"</strong>. 공기 저항을 최소화하는 에어로모듈(Aeromodular) 프레임 설계로 헤드 스피드를 극한으로 끌어올립니다. 카를로스 알카라스와 라파엘 나달의 헤비 탑스핀 샷의 비결이 바로 이 라켓에 있습니다.
                                    스트링 베드가 넓게 열려 있어 공을 무는 능력(Snap-back)이 탁월합니다. 본인이 와이퍼 스윙을 구사하며 상대를 베이스라인 뒤로 쫓아내고 싶다면, 이 라켓이 정답입니다.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            <section id="selection-tips" className="mb-20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                    <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                    구매 전 필수 체크리스트
                </h2>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-8 rounded-2xl border border-teal-100 dark:border-teal-900">
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded-full shrink-0 mt-1">
                                <span className="text-teal-600 dark:text-teal-400 font-bold text-lg">⚖️</span>
                            </div>
                            <div>
                                <span className="text-teal-700 dark:text-teal-300 font-bold text-lg block mb-1">1. 무게 감당 가능? (가장 중요)</span>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    라켓을 들었을 때 '조금 묵직한데?' 정도는 괜찮지만, 휘두를 때 손목이 꺾이거나 어깨에 무리가 간다면 즉시 내려놓으세요.
                                    <br />
                                    <strong>권장 무게:</strong> 남성 초보자(300g), 여성 초보자(260~285g).
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded-full shrink-0 mt-1">
                                <span className="text-teal-600 dark:text-teal-400 font-bold text-lg">🤲</span>
                            </div>
                            <div>
                                <span className="text-teal-700 dark:text-teal-300 font-bold text-lg block mb-1">2. 올바른 그립 사이즈</span>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    라켓을 쥐었을 때 약지와 손바닥 사이에 새끼손가락 하나가 들어갈 정도의 공간이 남는 것이 정석입니다. 한국 남성은 대부분 <strong>4 1/4 (2그립)</strong>을 사용합니다.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded-full shrink-0 mt-1">
                                <span className="text-teal-600 dark:text-teal-400 font-bold text-lg">🎾</span>
                            </div>
                            <div>
                                <span className="text-teal-700 dark:text-teal-300 font-bold text-lg block mb-1">3. 시타는 선택이 아닌 필수</span>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    유튜브 리뷰만 보고 사지 마세요. 테니스샵이나 시타 이벤트에서 직접 공을 쳐보는 것이 '중복 투자'를 막는 지름길입니다. '손맛'은 지극히 주관적이기 때문입니다.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
                    결론 — 나에게 맞는 라켓 찾기
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                    <p className="font-medium text-xl text-gray-900 dark:text-white mb-4">
                        가장 비싼 라켓이 좋은 라켓이 아닙니다. 세계 1위 선수의 라켓이 나에게도 1위 라켓은 아닙니다.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        입문 단계라면 <span className="text-blue-600 dark:text-blue-400 font-bold">요넥스 이존</span>이나 <span className="text-blue-600 dark:text-blue-400 font-bold">바볼랏 퓨어드라이브</span> 같은 '파워형 라켓'으로 테니스의 재미를 먼저 느끼세요. 공이 잘 넘어가야 테니스가 즐거워집니다. 이후 구력이 쌓이고 스윙 메커니즘이 잡히면, 그때 <span className="text-orange-600 dark:text-orange-400 font-bold">윌슨 블레이드</span> 같은 '컨트롤 라켓'으로 교체하여 정교함을 더해도 늦지 않습니다.
                    </p>
                    <p className="mb-8">
                        이 가이드가 여러분의 '인생 라켓'을 찾는 여정에 도움이 되기를 바랍니다. 코트에서 만나요! 🎾
                    </p>
                </div>
            </section>

            <FAQ items={faqs} />

            <div className="mt-12 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">아직도 고민되시나요?</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">데이터 기반으로 나에게 딱 맞는 라켓 스펙을 찾아보세요.</p>
                <Link href="/blog/tennis-racket-selection-guide" className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-xl transition transform hover:-translate-y-1">
                    상세 스펙 가이드 보러가기
                </Link>
            </div>
        </Article>
    );
}

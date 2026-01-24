import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
    title: '테니스 시작하기 완벽 가이드 — 입문부터 첫 게임까지 30일 완성 로드맵 | 라켓 준비, 레슨 예약, 코트 찾기',
    description: '테니스 입문을 고민 중이신가요? 라켓 구매부터 레슨 선택, 기본기 마스터, 첫 게임 도전까지. 테린이를 위한 30일 완성 로드맵을 제공합니다.',
    keywords: ['테니스 입문', '테니스 시작하기', '테니스 준비물', '테니스 라켓', '테니스 레슨', '테니스 기초', '테린이'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/blog/tennis-starting-complete-guide',
    },
    openGraph: {
        title: '테니스 시작하기 완벽 가이드 — 입문부터 첫 게임까지 30일 완성 로드맵',
        description: '테니스 입문을 고민 중이신가요? 라켓 구매부터 레슨 선택, 기본기 마스터, 첫 게임 도전까지. 테린이를 위한 30일 완성 로드맵을 제공합니다.',
        url: 'https://tennisfriends.co.kr/blog/tennis-starting-complete-guide',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: '테니스 시작하기 완벽 가이드 — 입문부터 첫 게임까지 30일 완성 로드맵',
        description: '테니스 입문을 고민 중이신가요? 라켓 구매부터 레슨 선택, 기본기 마스터, 첫 게임 도전까지. 테린이를 위한 30일 완성 로드맵을 제공합니다.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
    { id: 'why-tennis', text: '1. 왜 테니스인가? — 평생 즐길 수 있는 최고의 취미', depth: 2 },
    { id: 'preparation', text: '2. 준비물 3대장 — 라켓, 신발, 의류 (최소한의 투자)', depth: 2 },
    { id: 'finding-lessons', text: '3. 레슨 찾기 — 실내 vs 실외, 나에게 맞는 선택은?', depth: 2 },
    { id: 'basics-4-strokes', text: '4. 기본기 다지기 — 포핸드, 백핸드, 서브, 발리', depth: 2 },
    { id: 'etiquette', text: '5. 테니스 에티켓 — 코트장 매너와 규칙 A to Z', depth: 2 },
    { id: 'first-game', text: '6. 첫 게임 도전 — 게임 스코어 세는 법과 랠리 연습', depth: 2 },
    { id: 'injury-prevention', text: '7. 부상 방지 — 테니스 엘보와 발목 보호', depth: 2 },
    { id: 'conclusion-roadmap', text: '결론 — 30일 로드맵으로 꾸준히 성장하기', depth: 2 },
];

const faqs = [
    {
        q: '테니스를 배우는 데 비용이 얼마나 드나요?',
        a: '지역과 시설에 따라 다르지만, 일반적으로 주 2회 20분 레슨 기준 월 15~25만 원 선입니다. 실내 테니스장이 실외보다 조금 더 비싼 편입니다.'
    },
    {
        q: '라켓은 처음부터 비싼 걸 사야 하나요?',
        a: '아니요. 처음엔 레슨장에 비치된 연습용 라켓을 1~2달 정도 사용해보는 것을 추천합니다. 이후 자신의 스윙 스타일이 어느 정도 잡히면 그때 구매하세요.'
    },
    {
        q: '운동 신경이 없어도 할 수 있나요?',
        a: '물론입니다. 테니스는 감각도 중요하지만, 꾸준한 반복 훈련이 더 중요한 스포츠입니다. 누구나 연습하면 랠리를 즐길 수 있습니다.'
    },
    {
        q: '혼자서도 연습할 수 있나요?',
        a: '네. 벽치기나 무인 테니스 연습장을 활용하면 혼자서도 충분히 자세 교정과 임팩트 연습을 할 수 있습니다.'
    },
    {
        q: '게임은 언제부터 할 수 있나요?',
        a: '개인차가 있지만, 보통 레슨 3~6개월 차 정도 되면 난타(랠리)가 가능해지고, 간단한 게임을 즐길 수 있습니다.'
    }
];

export default function TennisStartingCompleteGuidePage() {
    const title = '테니스 시작하기 완벽 가이드 — 입문부터 첫 게임까지 30일 완성 로드맵';
    const excerpt = '테니스라는 평생의 취미를 시작하는 당신을 위한 완벽한 가이드입니다. 장비 준비부터 첫 레슨, 그리고 코트 위에서의 에티켓까지 모든 것을 담았습니다.';

    return (
        <Article
            title={title}
            excerpt={excerpt}
            date="2024-01-25"
            slug="tennis-starting-complete-guide"
            author="TennisFriends"
            image="/images/blog/tennis-starting-complete-guide.png"
        >
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
                        입문 가이드
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
                        테린이 탈출
                    </Badge>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    "테니스, 한 번 배워볼까?" 이 생각만으로도 여러분의 인생은 더 건강하고 활기차게 변할 준비가 되었습니다. 하지만 막상 시작하려니 라켓은 뭘 사야 할지, 레슨은 어디서 받아야 할지 막막하시죠? 이 가이드는 그런 여러분을 위해 준비했습니다.
                </p>
            </div>

            <TOC items={tocItems} />

            <section id="why-tennis" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-emerald-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                    왜 테니스인가? — 평생 즐길 수 있는 최고의 취미
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    테니스는 전신을 사용하는 유산소 운동이면서 동시에 근력 운동입니다. 순간적인 판단력과 민첩성을 기를 수 있고, 공을 타격할 때의 쾌감은 스트레스 해소에 탁월합니다.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <li><strong>높은 칼로리 소모:</strong> 시간당 약 400~600kcal를 소모하는 고강도 운동입니다.</li>
                    <li><strong>사회성 증진:</strong> 복식 게임이나 동호회 활동을 통해 다양한 사람들과 교류할 수 있습니다.</li>
                    <li><strong>평생 스포츠:</strong> 유소년부터 노년층까지 나이에 상관없이 즐길 수 있습니다.</li>
                </ul>
            </section>

            <section id="preparation" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                    준비물 3대장 — 라켓, 신발, 의류
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    처음부터 모든 장비를 완벽하게 갖출 필요는 없습니다. 하지만 부상 방지와 효율적인 학습을 위해 꼭 필요한 것들이 있습니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card className="bg-white dark:bg-gray-800">
                        <CardContent className="p-5">
                            <h3 className="text-lg font-bold mb-2 text-blue-600 dark:text-blue-400">🎾 테니스 라켓</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                입문용으로는 <strong>헤드 사이즈 100sq, 무게 255~285g(여성) / 300g(남성)</strong> 정도의 스펙이 무난합니다.
                            </p>
                            <Link href="/blog/tennis-racket-selection-guide" className="text-blue-500 hover:underline text-sm font-medium">
                                👉 라켓 선택 상세 가이드 보기
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-gray-800">
                        <CardContent className="p-5">
                            <h3 className="text-lg font-bold mb-2 text-blue-600 dark:text-blue-400">👟 테니스화 (필수!)</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                일반 러닝화는 절대 금물! 테니스는 좌우 움직임이 많아 발목을 잡아주는 전용 테니스화를 꼭 신어야 부상을 막을 수 있습니다.
                            </p>
                            <Link href="/blog/tennis-shoes-selection-guide" className="text-blue-500 hover:underline text-sm font-medium">
                                👉 테니스화 선택 가이드 보기
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="finding-lessons" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                    레슨 찾기 — 실내 vs 실외, 나에게 맞는 선택은?
                </h2>

                <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800">
                                <th className="border border-gray-300 dark:border-gray-600 p-3">구분</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-3">실내 테니스장</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-3">실외 테니스장</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-center">장점</td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3">날씨 영향 없음, 쾌적함, 접근성 좋음 (도심)</td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3">실전 감각 익히기 좋음, 공간이 넓음, 비용 저렴</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-center">단점</td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3">코트가 좁을 수 있음 (층고 낮음), 비용 비쌈</td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3">눈/비 오면 레슨 취소, 여름/겨울에 힘듬</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-center">추천</td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3">직장인, 입문자 (자세 교정 위주)</td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3">중급자 이상, 랠리/게임 위주</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                    💡 <strong>Tip:</strong> 입문 초기 3개월은 자세를 잡는 것이 중요하므로, 날씨에 구애받지 않고 꾸준히 갈 수 있는 실내 레슨장을 추천합니다.
                </p>
            </section>

            <section id="basics-4-strokes" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                    기본기 다지기 — 포핸드, 백핸드, 서브, 발리
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">✋ 포핸드 (Forehand)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">가장 많이 쓰이는 공격 기술. 주로 쓰는 손으로 라켓을 잡고 스윙합니다. 허리 회전과 체중 이동이 핵심!</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">🤚 백핸드 (Backhand)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">반대쪽으로 오는 공을 칩니다. 요즘은 안정적인 '투핸드(양손)' 백핸드가 대세입니다. 페더러처럼 한 손은 '원핸드'!</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">🏐 발리 (Volley)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">공이 바닥에 튀기기 전에 쳐내는 기술. 네트 앞에서의 순발력이 중요합니다. '툭' 갖다 대는 느낌으로!</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">🚀 서브 (Serve)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">게임을 시작하는 첫 샷. 가장 배우기 어렵지만 가장 강력한 무기입니다. 토스(공을 띄우는 동작)가 연습의 8할!</p>
                    </div>
                </div>
            </section>

            <section id="etiquette" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                    테니스 에티켓 — "매너가 사람을(테니스를) 만든다"
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    테니스는 '신사의 스포츠'라 불릴 만큼 매너를 중요시합니다. 실력보다 먼저 갖춰야 할 것이 바로 에티켓입니다.
                </p>
                <div className="bg-pink-50 dark:bg-pink-950/30 border-l-4 border-pink-500 p-4 rounded-r-lg">
                    <ul className="space-y-3 text-gray-800 dark:text-gray-200 text-sm font-medium">
                        <li>✅ <strong>공 줍기:</strong> 내 코트에 떨어진 공은 내가 줍고, 상대방에게 공을 건넬 때는 받기 좋게 원바운드로 부드럽게 보냅니다.</li>
                        <li>✅ <strong>소음 주의:</strong> 랠리 중에는 큰 소리를 내거나 움직여서 방해하면 안 됩니다.</li>
                        <li>✅ <strong>복장:</strong> 깃이 있는 피케 셔츠나 테니스 전용 의류를 입는 것이 예의입니다 (요즘은 많이 자유로워졌지만요).</li>
                        <li>✅ <strong>인/아웃 판정:</strong> 상대방 코트의 판정은 상대방의 권한입니다. 상대의 콜을 존중해주세요.</li>
                    </ul>
                </div>
                <div className="mt-4 text-center">
                    <Link href="/blog/tennis-etiquette-and-manners" className="inline-block px-6 py-2 border border-pink-500 text-pink-600 dark:text-pink-400 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors text-sm font-bold">
                        에티켓 가이드 더 자세히 보기
                    </Link>
                </div>
            </section>

            <section id="first-game" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
                    첫 게임 도전 — 스코어 세는 법 (0, 15, 30, 40, Game)
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">테니스의 점수 체계는 조금 독특합니다. 1, 2, 3점이 아닙니다.</p>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700">
                        <div className="p-4 bg-orange-50 dark:bg-orange-950/20 font-bold text-center">포인트</div>
                        <div className="p-4 bg-orange-50 dark:bg-orange-950/20 font-bold text-center">콜 (Call)</div>

                        <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700">0점</div>
                        <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400 font-medium">Love (러브)</div>

                        <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700">1점</div>
                        <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400 font-medium">15 (피프틴)</div>

                        <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700">2점</div>
                        <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400 font-medium">30 (써티)</div>

                        <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700">3점</div>
                        <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400 font-medium">40 (포티)</div>

                        <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700">4점 (승리)</div>
                        <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700 text-orange-600 dark:text-orange-400 font-medium">Game</div>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">* 40:40 동점 상황은 '듀스(Deuce)'라고 하며, 연속 2포인트를 따야 게임을 가져갑니다.</p>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-between">
                    <span className="font-bold text-blue-900 dark:text-blue-100">스코어 계산이 아직 헷갈리나요?</span>
                    <Link href="/blog/tennis-scoring-system-guide" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                        점수 계산법 상세 보기
                    </Link>
                </div>
            </section>

            <section id="conclusion-roadmap" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
                    결론 — 30일 완성 로드맵
                </h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1주차</div>
                        <div>
                            <h4 className="font-bold">입문 & 장비 준비</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">집 근처 실내 테니스장 등록, 테니스화 구매, 그립 잡는 법(컨티넨탈/이스턴) 익히기</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2주차</div>
                        <div>
                            <h4 className="font-bold">스윙 메커니즘 이해</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">포핸드/백핸드 스윙 궤적 연습 (빈 스윙 하루 50회), 공 맞추는 타이밍 잡기</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3주차</div>
                        <div>
                            <h4 className="font-bold">풋워크 & 랠리 기초</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">스플릿 스텝 연습, 코치님과 10회 이상 랠리 이어가기 도전</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4주차</div>
                        <div>
                            <h4 className="font-bold text-teal-700 dark:text-teal-300">서브 & 첫 게임</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">서브 토스 연습, 간단한 미니 게임 진행해보기</p>
                        </div>
                    </div>
                </div>
                <p className="mt-8 text-gray-700 dark:text-gray-300">
                    테니스는 마라톤과 같습니다. 처음부터 잘하려고 조급해하지 마세요. 공이 라켓에 '팡!' 하고 맞을 때의 그 짜릿한 손맛을 즐기다 보면, 어느새 코트 위를 누비고 있는 자신을 발견하게 될 것입니다.
                </p>
            </section>

            <FAQ items={faqs} />

            <div className="mt-12 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">함께 테니스 친구가 되어볼까요?</h3>
                <p className="mb-6 text-gray-300">더 많은 테니스 정보와 뉴스를 받아보고 싶다면</p>
                <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105">
                    TennisFriends 홈으로 가기
                </Link>
            </div>
        </Article>
    );
}

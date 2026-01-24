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
    { id: 'selection-tips', text: '5. 구매 전 체크리스트', depth: 2 },
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

            <section id="2026-trend" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-gray-800 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                    2026년 라켓 트렌드: "편안함과 파워의 공존"
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    과거에는 '파워형 라켓은 딱딱하다', '컨트롤 라켓은 어렵다'는 공식이 있었지만, 2026년 신상 라켓들은 이 경계를 허물고 있습니다. 최신 소재 기술(Auxtic 2.0, VDM 등)을 통해 <strong>부드러운 타구감(Arm-Friendly)을 유지하면서도 폭발적인 파워</strong>를 내는 것이 트렌드입니다.
                </p>
            </section>

            <section id="best-for-beginners" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                    입문자(테린이) 추천 BEST 3
                </h2>
                <div className="space-y-6">
                    <Card className="bg-white dark:bg-gray-800">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">1. 요넥스 이존 100 (Yonex EZONE 100)</h3>
                                <Badge variant="secondary">국민 라켓</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">스펙: 100sq / 300g(남), 285g(여) / 16x19</p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                <strong>"스윗스팟이 운동장"</strong>이라는 별명처럼, 빗맞아도 잘 넘어갑니다. 부드러운 타구감 덕분에 테니스 엘보 걱정이 덜하며, 적당한 파워와 스핀을 겸비해 초보자가 사용하기 가장 무난하고 좋은 라켓입니다.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">2. 바볼랏 퓨어 드라이브 (Babolat Pure Drive)</h3>
                                <Badge variant="secondary">파워 끝판왕</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">스펙: 100sq / 300g / 16x19</p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                <strong>"갖다 대면 넘어간다"</strong>는 말이 있을 정도로 반발력이 뛰어납니다. 근력이 부족한 입문자도 시원시원한 공을 칠 수 있게 도와줍니다. 단, 타구감이 다소 딱딱할 수 있습니다.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">3. 윌슨 울트라 100 (Wilson Ultra 100 v4)</h3>
                                <Badge variant="secondary">아름다운 디자인</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">스펙: 100sq / 300g / 16x19</p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                영롱한 블루 컬러로 디자인 선호도가 높습니다. 퓨어 드라이브와 비슷한 성향의 '파워형 라켓'이지만 조금 더 부드러운 느낌을 줍니다. 발리 플레이 시 안정감이 뛰어납니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="best-for-advanced" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                    중상급자 추천 BEST 3
                </h2>
                <div className="space-y-6">
                    <Card className="bg-white dark:bg-gray-800">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">1. 윌슨 블레이드 98 (Wilson Blade 98 v9)</h3>
                                <Badge variant="secondary">투어 점유율 1위</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">스펙: 98sq / 305g / 16x19 or 18x20</p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                <strong>"컨트롤의 정석"</strong>. 자신이 치는 만큼 나가는 정직한 라켓입니다. v9 버전은 안정성(Stability)이 더욱 강화되었습니다. 스윙 스피드가 빠른 중급자 이상에게 최고의 손맛을 선사합니다.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">2. 헤드 스피드 MP (Head Speed MP)</h3>
                                <Badge variant="secondary">노박 조코비치 라인</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">스펙: 100sq / 300g / 16x19</p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                이름처럼 <strong>빠른 스윙 스피드</strong>를 낼 수 있도록 설계되었습니다. 컨트롤과 파워의 밸런스가 가장 잘 잡힌 '육각형 라켓'입니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="best-for-spin" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                    스핀형 플레이어 추천
                </h2>
                <Card className="bg-white dark:bg-gray-800">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">바볼랏 퓨어 에어로 (Babolat Pure Aero)</h3>
                            <Badge variant="secondary">나달의 라켓</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">스펙: 100sq / 300g / 16x19</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            <strong>"극강의 스핀 머신"</strong>. 공기 저항을 줄이는 프레임 설계로 헤드 스피드를 높여 강력한 탑스핀을 만들어냅니다. 베이스라인 뒤에서 스핀으로 상대를 공략하는 플레이어에게 추천합니다.
                        </p>
                    </CardContent>
                </Card>
            </section>

            <section id="selection-tips" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                    구매 전 체크리스트
                </h2>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-6 rounded-lg">
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="text-teal-600 dark:text-teal-400 font-bold">1. 무게 감당 가능?</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">들었을 때 '조금 묵직한데?' 정도는 괜찮지만, 휘두를 때 손목이 꺾이거나 어깨가 아프다면 바로 무게를 낮춰야 합니다.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-teal-600 dark:text-teal-400 font-bold">2. 그립 사이즈 확인</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">라켓을 쥐었을 때 약지와 손바닥 사이에 손가락 하나가 들어갈 정도의 공간(약 1~1.5cm)이 남는 것이 정석입니다 (주로 4 1/4 사이즈).</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-teal-600 dark:text-teal-400 font-bold">3. 시타 해보기</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">가능하다면 테니스 대리점이나 시타 이벤트에서 직접 공을 쳐보는 것이 실패 확률을 줄이는 가장 좋은 방법입니다.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
                    결론 — 나에게 맞는 라켓 찾기
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
                    "가장 비싼 라켓이 좋은 라켓이 아닙니다. 내 몸에 맞는 라켓이 명검입니다."
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    입문단계라면 요넥스 이존이나 바볼랏 퓨어드라이브 같은 <span className="text-pink-500 font-bold">파워형 라켓</span>으로 테니스의 재미를 붙이세요. 이후 구력이 쌓이고 스윙이 잡히면 윌슨 블레이드 같은 <span className="text-pink-500 font-bold">컨트롤 라켓</span>으로 정교함을 더해가는 것을 추천합니다.
                </p>
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

import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerHexagonStats from '@/components/players/PlayerHexagonStats';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProfilePageSchema from '@/components/seo/ProfilePageSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import KeyTakeaways from '@/components/blog/KeyTakeaways';
import { Metadata } from 'next';
import { Crown, Star, Target, Shield, Brain, Award } from 'lucide-react';

export const metadata: Metadata = {
    title: '지오반니 음페치 페리카르 — 프랑스의 거인 | 플레이스타일·명장면·최근 경기력',
    description: "지오반니 음페치 페리카르 (Giovanni Mpetshi Perricard) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
    keywords: ['지오반니 음페치 페리카르', 'Giovanni Mpetshi Perricard', '테니스', 'ATP', '플레이스타일', '프랑스 유망주', '빅 서버', '한손 백핸드'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/players/giovanni-mpetshi-perricard',
    },
    openGraph: {
        title: '지오반니 음페치 페리카르 — 프랑스의 거인 | 플레이스타일·명장면·최근 경기력',
        description: '지오반니 음페치 페리카르의 압도적인 서브와 파워, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
        url: 'https://tennisfriends.co.kr/players/giovanni-mpetshi-perricard',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: '지오반니 음페치 페리카르 — 프랑스의 거인 | 플레이스타일·명장면·최근 경기력',
        description: '지오반니 음페치 페리카르의 압도적인 서브와 파워, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
    { id: 'why-again-notable', text: '지오반니 음페치 페리카르, 왜 주목받는 선수인가?', depth: 2 },
    { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
    { id: 'growth-story', text: '지오반니 음페치 페리카르는 어떻게 여기까지 왔을까?', depth: 2 },
    { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
    { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
    { id: 'recent-form', text: '요즘 지오반니 음페치 페리카르의 경기력 흐름은 어떤가?', depth: 2 },
    { id: 'one-sentence-summary', text: '지오반니 음페치 페리카르, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
    {
        q: '지오반니 음페치 페리카르의 경기 스타일은 어떤가요?',
        a: '203cm의 장신에서 나오는 강력한 서브와 포핸드, 그리고 한 손 백핸드를 구사하는 공격적인 스타일입니다.',
    },
    {
        q: '페리카르의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
        a: '2024년 윔블던 16강 진출 등으로 랭킹이 급상승하여 50위권에 진입했습니다. 무서운 속도로 성장 중입니다.',
    },
    {
        q: '페리카르의 강점은 무엇인가요?',
        a: '압도적인 서브 파워와 각도, 그리고 네트 앞에서의 과감한 플레이가 강점입니다. 서브만으로 게임을 지배할 수 있습니다.',
    },
    {
        q: '페리카르의 약점은 무엇인가요?',
        a: '큰 키로 인해 움직임이 다소 느리고, 리턴 게임에서의 정교함이 아직 부족합니다. 경험 부족도 해결해야 할 과제입니다.',
    },
    {
        q: '페리카르를 한 문장으로 설명하면?',
        a: '프랑스 테니스의 미래를 책임질 거인이자, 코트 위를 폭격하는 차세대 서브 킹입니다.',
    },
];

const keyTakeaways = [
    "203cm의 장신에서 내리꽂는 압도적인 서브 능력",
    "2024년 윔블던 16강 진출로 잠재력 폭발",
    "한 손 백핸드를 구사하는 클래식한 스타일의 차세대 거인"
];

export default function GiovanniMpetshiPerricardPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
            <Article
                title="지오반니 음페치 페리카르"
                excerpt="203cm의 압도적인 피지컬에서 뿜어져 나오는 초강력 서브"
                image="/images/players/giovanni-mpetshi-perricard.svg"
            >
                <ProfilePageSchema
                    name="지오반니 음페치 페리카르 — 프랑스의 거인 | 플레이스타일·명장면·최근 경기력"
                    description="지오반니 음페치 페리카르 (Giovanni Mpetshi Perricard) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석."
                    image="/images/players/giovanni-mpetshi-perricard.svg"
                    mainEntity={{
                        '@type': 'Person',
                        name: 'Giovanni Mpetshi Perricard',
                        alternateName: '지오반니 음페치 페리카르',
                        description: '프랑스 출신의 테니스 선수. 203cm의 장신과 강력한 서브가 특징.',
                        image: '/images/players/giovanni-mpetshi-perricard.png',
                        jobTitle: 'Professional Tennis Player',
                        nationality: { '@type': 'Country', name: 'France' },
                        birthDate: '2003-07-08',
                        height: { '@type': 'QuantitativeValue', value: '203', unitText: 'cm' },
                        award: ['ATP Tour Title (Lyon 2024)', 'Wimbledon Round of 16 (2024)'],
                        sameAs: [
                            'https://en.wikipedia.org/wiki/Giovanni_Mpetshi_Perricard',
                            'https://www.atptour.com/en/players/giovanni-mpetshi-perricard/m0fh/overview',
                            'https://www.instagram.com/giovanni.mpetshi/'
                        ]
                    }}
                />
                <BreadcrumbSchema
                    items={[
                        { name: '홈', item: 'https://tennisfriends.co.kr' },
                        { name: '선수', item: 'https://tennisfriends.co.kr/players' },
                        { name: '지오반니 음페치 페리카르', item: 'https://tennisfriends.co.kr/players/giovanni-mpetshi-perricard' },
                    ]}
                />
                <FAQSchema faqs={faqs} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <KeyTakeaways items={keyTakeaways} />

                    <PlayerProfileCard
                        name="Giovanni Mpetshi Perricard"
                        country="France"
                        age={21}
                        height="203cm"
                        plays="Right-handed (One-handed backhand)"
                        turnedPro={2021}
                        grandSlams={0}
                        ranking={50}
                    />

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            프랑스의 거인. <strong className="text-blue-600 dark:text-blue-400">압도적인 높이</strong>에서 내리꽂는 서브로 상대를 무력화시키는 차세대 스타.
                        </p>

                        <TOC items={tocItems} />

                        <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
                            <Crown className="w-6 h-6 text-yellow-500" />
                            지오반니 음페치 페리카르, 왜 주목받는 선수인가?
                        </h2>
                        <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                                    203cm의 장신에서 내리꽂는 압도적인 서브 능력
                                </p>
                            </div>
                        </blockquote>
                        <p>지오반니 음페치 페리카르는 203cm라는 엄청난 신체 조건을 가진 프랑스의 유망주다. 2024년 윔블던에서 럭키 루저로 본선에 합류하여 세바스찬 코르다 등을 꺾고 16강에 진출하는 파란을 일으켰다. 특히 그의 서브는 '알고도 못 막는' 수준으로, 차세대 서브 킹의 자리를 예약했다.</p>

                        <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
                            <Target className="w-6 h-6 text-red-500" />
                            이 선수는 어떤 유형의 플레이어인가?
                        </h2>
                        <p><strong>"초대형 서브 앤 발리어 (Massive Serve & Volleyer)"</strong></p>
                        <p>페리카르는 서브로 상대를 압도하고, 네트 플레이로 포인트를 마무리하는 클래식한 스타일을 현대적으로 재해석했다.</p>

                        <PlayerHexagonStats
                            playerName="지오반니 음페치 페리카르"
                            attributes={[
                                { name: '서브 (Serve)', score: 9.5, description: '그의 알파이자 오메가. 220km를 넘나드는 속도와 엄청난 바운드를 자랑한다.' },
                                { name: '파워 (Power)', score: 9.0, description: '포핸드 스트로크의 파괴력이 엄청나다. 한 방에 위너를 낼 수 있다.' },
                                { name: '포핸드 (Forehand)', score: 8.5, description: '타점이 높고 스윙이 커서 공에 실리는 무게감이 다르다.' },
                                { name: '움직임 (Movement)', score: 6.5, description: '큰 키로 인해 민첩성은 떨어지지만, 긴 보폭으로 커버한다.' },
                                { name: '경험 (Experience)', score: 6.0, description: '아직 투어 경험이 부족하여 경기 운영에서 미숙한 점이 있다.' },
                            ]}
                        />

                        <p>그는 한 손 백핸드를 구사하는데, 이는 현대 테니스에서 보기 드문 스타일이다. 강력한 서브 후 짧은 공을 포핸드로 처리하거나 네트로 대시하는 패턴을 즐긴다. 리턴 게임에서는 다소 약점을 보이지만, 자신의 서브 게임만큼은 확실하게 지켜낸다.</p>

                        <h3 className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                            피지컬 능력
                        </h3>
                        <p>203cm, 98kg의 거구다. 이스너, 카를로비치 등 역대급 빅 서버들의 계보를 잇는 피지컬이다. 아직 어린 나이이기에 근력이 더 붙는다면 서브의 위력은 더욱 강해질 것이다.</p>

                        <h3 className="flex items-center gap-2">
                            <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            멘탈 강점
                        </h3>
                        <div className="not-prose my-4 p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <Target className="w-4 h-4 text-green-700 dark:text-green-400" />
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-0">
                                    핵심 통계
                                </p>
                            </div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0">
                                2024 리옹 오픈 우승 · 윔블던 16강 (럭키 루저) · <strong className="text-green-700 dark:text-green-400 text-base">무서운 신예</strong>
                            </p>
                        </div>
                        <p>어린 나이답지 않게 침착하다. 자신의 강점인 서브에 대한 믿음이 확고하여, 브레이크 위기에서도 과감하게 세컨드 서브를 넣는 배짱을 보여준다.</p>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="growth-story">지오반니 음페치 페리카르는 어떻게 여기까지 왔을까?</h2>
                        <p>프랑스 리옹에서 태어난 페리카르는 4살 때 테니스를 시작했다. 주니어 시절부터 큰 키로 주목받았으며, 2021년 프랑스 오픈 주니어 복식 우승을 차지했다. 2024년 고향인 리옹 오픈에서 생애 첫 투어 우승을 차지하며 화려하게 등장했다.</p>

                        <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
                        <p>2024년 윔블던 1회전이다.</p>

                        <h3>2024년 윔블던 1회전</h3>
                        <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">럭키 루저의 반란</p>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                                세계 랭킹 20위권의 세바스찬 코르다를 상대로 3-2 승리를 거뒀다. 무려 51개의 에이스를 터뜨리며 윔블던 잔디 코트가 자신에게 최적의 무대임을 증명했다.
                            </p>
                        </div>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
                        <p>시원시원한 서브와 호쾌한 플레이 스타일이 매력적이다. 또한 한 손 백핸드를 사용하는 희소성 있는 선수라는 점도 팬들의 관심을 끈다. 프랑스 팬들에게는 몽피스, 쏭가 이후 끊긴 스타 플레이어의 맥을 이을 재목으로 기대를 모으고 있다.</p>

                        <h2 id="recent-form">요즘 지오반니 음페치 페리카르의 경기력 흐름은 어떤가?</h2>
                        <p>가파른 상승세다. 2024년 초 200위권 밖이었던 랭킹이 50위권까지 수직 상승했다.</p>

                        <h3>최근 성적</h3>
                        <p>서브의 정확도와 리턴 게임에서의 집중력만 보완한다면 탑 20 진입도 시간문제로 보인다.</p>

                        <h2 id="one-sentence-summary">지오반니 음페치 페리카르, 한 문장으로 정리하면?</h2>
                        <p>지오반니 음페치 페리카르는 203cm의 압도적인 피지컬에서 뿜어져 나오는 초강력 서브로 코트를 폭격하는 프랑스의 거인이다.</p>
                    </div>

                    <FAQ items={faqs} />
                    <CTA />
                </div>
            </Article>
        </div>
    );
}

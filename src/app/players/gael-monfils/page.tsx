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
    title: '가엘 몽필스 — 코트 위의 슈퍼히어로 | 플레이스타일·명장면·최근 경기력',
    description: "가엘 몽필스 (Gael Monfils) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
    keywords: ['가엘 몽필스', 'Gael Monfils', '테니스', 'ATP', '플레이스타일', '프랑스 테니스', '쇼맨십', '운동신경'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/players/gael-monfils',
    },
    openGraph: {
        title: '가엘 몽필스 — 코트 위의 슈퍼히어로 | 플레이스타일·명장면·최근 경기력',
        description: '가엘 몽필스의 놀라운 운동신경과 쇼맨십, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
        url: 'https://tennisfriends.co.kr/players/gael-monfils',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: '가엘 몽필스 — 코트 위의 슈퍼히어로 | 플레이스타일·명장면·최근 경기력',
        description: '가엘 몽필스의 놀라운 운동신경과 쇼맨십, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
    { id: 'why-again-notable', text: '가엘 몽필스, 왜 주목받는 선수인가?', depth: 2 },
    { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
    { id: 'growth-story', text: '가엘 몽필스는 어떻게 여기까지 왔을까?', depth: 2 },
    { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
    { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
    { id: 'recent-form', text: '요즘 가엘 몽필스의 경기력 흐름은 어떤가?', depth: 2 },
    { id: 'one-sentence-summary', text: '가엘 몽필스, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
    {
        q: '가엘 몽필스의 경기 스타일은 어떤가요?',
        a: '압도적인 운동신경을 바탕으로 한 수비와 기습적인 공격이 특징입니다. 묘기 같은 샷을 자주 구사하며 관중과 호흡하는 것을 즐깁니다.',
    },
    {
        q: '몽필스의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
        a: '최고 랭킹은 6위(2016년)입니다. 현재는 30대 후반의 나이에도 불구하고 30-40위권을 유지하며 경쟁력을 보여주고 있습니다.',
    },
    {
        q: '몽필스의 강점은 무엇인가요?',
        a: '코트 전체를 커버하는 스피드와 유연성, 그리고 강력한 포핸드와 서브가 강점입니다. 무엇보다 예측 불가능한 플레이가 상대를 당황하게 만듭니다.',
    },
    {
        q: '몽필스의 약점은 무엇인가요?',
        a: '경기 중 집중력이 흐트러지거나 체력 안배에 실패하는 경우가 종종 있습니다. 또한 잦은 부상이 커리어 내내 그를 괴롭혔습니다.',
    },
    {
        q: '몽필스를 한 문장으로 설명하면?',
        a: '테니스 코트를 무대로 만드는 최고의 엔터테이너이자, 불가능을 가능으로 만드는 슈퍼히어로입니다.',
    },
];

const keyTakeaways = [
    "중력을 거스르는 듯한 점프와 슬라이딩 등 압도적인 운동신경",
    "승패를 떠나 관중을 즐겁게 하는 최고의 쇼맨십",
    "30대 후반의 나이에도 여전히 경쟁력을 유지하는 자기관리"
];

export default function GaelMonfilsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
            <Article
                title="가엘 몽필스"
                excerpt="놀라운 운동신경과 쇼맨십으로 관중을 열광시키는 테니스계의 엔터테이너"
                image="/images/players/gael-monfils.png"
            >
                <ProfilePageSchema
                    name="가엘 몽필스 — 코트 위의 슈퍼히어로 | 플레이스타일·명장면·최근 경기력"
                    description="가엘 몽필스 (Gael Monfils) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석."
                    image="/images/players/gael-monfils.png"
                    mainEntity={{
                        '@type': 'Person',
                        name: 'Gael Monfils',
                        alternateName: '가엘 몽필스',
                        description: '프랑스 출신의 베테랑 테니스 선수. 화려한 쇼맨십과 운동신경으로 유명함.',
                        image: '/images/players/gael-monfils.png',
                        jobTitle: 'Professional Tennis Player',
                        nationality: { '@type': 'Country', name: 'France' },
                        birthDate: '1986-09-01',
                        height: { '@type': 'QuantitativeValue', value: '193', unitText: 'cm' },
                        award: ['ATP Tour Titles (12)', 'Davis Cup Finalist'],
                        sameAs: [
                            'https://en.wikipedia.org/wiki/Ga%C3%ABl_Monfils',
                            'https://www.atptour.com/en/players/gael-monfils/mc65/overview',
                            'https://www.instagram.com/iamgaelmonfils/'
                        ]
                    }}
                />
                <BreadcrumbSchema
                    items={[
                        { name: '홈', item: 'https://tennisfriends.co.kr' },
                        { name: '선수', item: 'https://tennisfriends.co.kr/players' },
                        { name: '가엘 몽필스', item: 'https://tennisfriends.co.kr/players/gael-monfils' },
                    ]}
                />
                <FAQSchema faqs={faqs} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <KeyTakeaways items={keyTakeaways} />

                    <PlayerProfileCard
                        name="Gael Monfils"
                        country="France"
                        age={37}
                        height="193cm"
                        plays="Right-handed (Two-handed backhand)"
                        turnedPro={2004}
                        grandSlams={0}
                        ranking={38}
                    />

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            코트 위의 슈퍼히어로. <strong className="text-purple-600 dark:text-purple-400">믿을 수 없는 운동신경</strong>과 유쾌한 쇼맨십으로 테니스의 즐거움을 선사하는 선수.
                        </p>

                        <TOC items={tocItems} />

                        <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
                            <Crown className="w-6 h-6 text-yellow-500" />
                            가엘 몽필스, 왜 주목받는 선수인가?
                        </h2>
                        <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                                    놀라운 운동신경과 쇼맨십으로 관중을 열광시키는 테니스계의 엔터테이너
                                </p>
                            </div>
                        </blockquote>
                        <p>가엘 몽필스는 단순한 테니스 선수가 아니다. 그는 코트 위에서 공연을 펼치는 아티스트와 같다. 360도 점프 스매싱, 슬라이딩 샷, 노룩 샷 등 묘기에 가까운 플레이를 실전에서 구사하며 관중들을 열광시킨다. '테니스는 지루하다'는 편견을 깨고, 스포츠가 줄 수 있는 최고의 엔터테인먼트를 제공하는 선수다.</p>

                        <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
                            <Target className="w-6 h-6 text-red-500" />
                            이 선수는 어떤 유형의 플레이어인가?
                        </h2>
                        <p><strong>"카운터 펀처 & 쇼맨 (Counter Puncher & Showman)"</strong></p>
                        <p>몽필스는 기본적으로 수비적인 카운터 펀처 스타일이지만, 기회가 오면 폭발적인 공격력을 보여주는 하이브리드 플레이어다.</p>

                        <PlayerHexagonStats
                            playerName="가엘 몽필스"
                            attributes={[
                                { name: '운동 신경 (Athleticism)', score: 10, description: '테니스 역사상 최고의 운동 능력을 가진 선수 중 한 명. 점프력과 유연성이 타의 추종을 불허한다.' },
                                { name: '쇼맨십 (Showmanship)', score: 10, description: '관중의 환호를 에너지로 삼는다. 이기기 위한 경기보다 즐기는 경기를 한다.' },
                                { name: '스피드 (Speed)', score: 9.5, description: '코트 끝에서 끝까지 순식간에 이동한다. 도저히 받을 수 없을 것 같은 공도 받아낸다.' },
                                { name: '포핸드 (Forehand)', score: 8.5, description: '엄청난 스윙 스피드에서 나오는 포핸드는 위력적이다.' },
                                { name: '서브 (Serve)', score: 8.5, description: '최고 시속 230km에 육박하는 강서브를 가지고 있다.' },
                            ]}
                        />

                        <p>그의 플레이는 예측 불가능하다. 베이스라인 뒤에서 끈질기게 수비하다가도, 갑자기 네트로 대시하거나 드롭샷을 놓는다. 특히 공중에서 몸을 비틀며 치는 스매싱은 그의 시그니처 무브다. 때로는 너무 쇼맨십에 치중하다가 쉬운 포인트를 놓치기도 하지만, 그것조차 몽필스 테니스의 일부다.</p>

                        <h3 className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                            피지컬 능력
                        </h3>
                        <p>193cm의 큰 키에 농구 선수를 연상시키는 탄력을 가지고 있다. 그의 유연성은 부상을 방지하고 기적 같은 수비를 가능하게 하는 원동력이다. 나이가 들어도 여전히 투어 최상위권의 스피드를 유지하고 있다.</p>

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
                                19년 연속 ATP 투어 결승 진출 · 통산 550승 이상 · <strong className="text-green-700 dark:text-green-400 text-base">꾸준함의 상징</strong>
                            </p>
                        </div>
                        <p>긍정적이고 낙천적이다. 경기 중에도 웃음을 잃지 않으며, 상대의 멋진 플레이에 박수를 보내는 여유가 있다. 이러한 태도는 그가 오랫동안 투어 생활을 즐길 수 있게 해주는 원동력이다.</p>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="growth-story">가엘 몽필스는 어떻게 여기까지 왔을까?</h2>
                        <p>프랑스 파리에서 태어난 몽필스는 주니어 시절 3개의 그랜드 슬램 주니어 타이틀을 휩쓸며 '천재' 소리를 들었다. 2004년 프로 데뷔 이후 꾸준히 상위권에 머물며 프랑스 테니스의 황금세대(송가, 가스케, 시몽)를 이끌었다. 그랜드 슬램 우승은 없지만, 12개의 투어 타이틀을 획득하며 성공적인 커리어를 쌓았다.</p>

                        <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
                        <p>수많은 명경기가 있지만, 2023년 스톡홀름 오픈 우승은 그의 건재함을 알린 감동적인 순간이었다.</p>

                        <h3>2023년 스톡홀름 오픈 결승</h3>
                        <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">노장의 품격</p>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                                37세의 나이로 파벨 코토프를 꺾고 우승을 차지했다. ATP 투어 역사상 최고령 우승자 중 한 명이 되었으며, 12년 만의 스톡홀름 우승이라는 진기록도 세웠다. 아내 엘리나 스비톨리나와 딸에게 바치는 우승이라 더욱 뜻깊었다.
                            </p>
                        </div>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
                        <p>그의 경기는 한 편의 쇼와 같다. 승패를 떠나 관중을 즐겁게 하려는 그의 진심이 팬들에게 전해진다. 또한 아내 엘리나 스비톨리나와의 러브 스토리, 그리고 딸을 향한 애정 등 인간적인 면모도 큰 사랑을 받고 있다.</p>

                        <h2 id="recent-form">요즘 가엘 몽필스의 경기력 흐름은 어떤가?</h2>
                        <p>전성기만큼의 폭발력은 아니지만, 여전히 위협적인 선수다. 2024년에도 꾸준히 투어에 참가하며 경쟁력을 보여주고 있다.</p>

                        <h3>최근 성적</h3>
                        <p>도하 오픈 4강, 인디언 웰스 16강 등 굵직한 대회에서 성적을 내고 있다. 체력 관리만 잘 된다면 여전히 탑 랭커들을 위협할 수 있는 '조커'로서의 역할을 톡톡히 하고 있다.</p>

                        <h2 id="one-sentence-summary">가엘 몽필스, 한 문장으로 정리하면?</h2>
                        <p>가엘 몽필스는 코트 위의 슈퍼히어로이자, 테니스의 즐거움을 전파하는 전도사다.</p>
                    </div>

                    <FAQ items={faqs} />
                    <CTA />
                </div>
            </Article>
        </div>
    );
}

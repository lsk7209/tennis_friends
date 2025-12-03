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
    title: '장지전 — 대륙의 자존심 | 플레이스타일·명장면·최근 경기력',
    description: "장지전 (Zhizhen Zhang) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
    keywords: ['장지전', 'Zhizhen Zhang', '테니스', 'ATP', '플레이스타일', '중국 테니스', '아시안게임 금메달', '포핸드'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/players/zhizhen-zhang',
    },
    openGraph: {
        title: '장지전 — 대륙의 자존심 | 플레이스타일·명장면·최근 경기력',
        description: '장지전의 강력한 포핸드와 서브, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
        url: 'https://tennisfriends.co.kr/players/zhizhen-zhang',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: '장지전 — 대륙의 자존심 | 플레이스타일·명장면·최근 경기력',
        description: '장지전의 강력한 포핸드와 서브, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
    { id: 'why-again-notable', text: '장지전, 왜 주목받는 선수인가?', depth: 2 },
    { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
    { id: 'growth-story', text: '장지전은 어떻게 여기까지 왔을까?', depth: 2 },
    { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
    { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
    { id: 'recent-form', text: '요즘 장지전의 경기력 흐름은 어떤가?', depth: 2 },
    { id: 'one-sentence-summary', text: '장지전, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
    {
        q: '장지전의 경기 스타일은 어떤가요?',
        a: '큰 키를 활용한 강력한 서브와 포핸드 위주의 공격적인 플레이를 펼칩니다. 베이스라인에서 물러나지 않고 맞불을 놓는 스타일입니다.',
    },
    {
        q: '장지전의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
        a: '중국 남자 선수 최초로 탑 50에 진입했으며, 현재 40위권을 유지하며 꾸준히 역사를 써 내려가고 있습니다.',
    },
    {
        q: '장지전의 강점은 무엇인가요?',
        a: '묵직한 포핸드 스트로크와 서브, 그리고 중요한 순간에 과감하게 공격을 시도하는 배짱이 강점입니다.',
    },
    {
        q: '장지전의 약점은 무엇인가요?',
        a: '움직임이 다소 둔할 수 있으며, 경기 중 기복이 있어 범실이 늘어나는 경우가 있습니다.',
    },
    {
        q: '장지전을 한 문장으로 설명하면?',
        a: '중국 남자 테니스의 한계를 뛰어넘어 세계 무대에서 통하는 경쟁력을 입증한 개척자입니다.',
    },
];

const keyTakeaways = [
    "중국 남자 선수 최초로 ATP 랭킹 50위 진입 및 마스터스 8강 진출",
    "193cm의 장신에서 나오는 시원시원한 공격 테니스와 강력한 포핸드",
    "아시안 게임 금메달리스트이자 중국 테니스의 간판스타"
];

export default function ZhizhenZhangPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
            <Article
                title="장지전"
                excerpt="강력한 포핸드와 서브로 중국 남자 테니스의 역사를 새로 쓰고 있는 개척자"
                image="/images/players/zhizhen-zhang.svg"
            >
                <ProfilePageSchema
                    name="장지전 — 대륙의 자존심 | 플레이스타일·명장면·최근 경기력"
                    description="장지전 (Zhizhen Zhang) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석."
                    image="/images/players/zhizhen-zhang.svg"
                    mainEntity={{
                        '@type': 'Person',
                        name: 'Zhizhen Zhang',
                        alternateName: '장지전',
                        description: '중국 출신의 테니스 선수. 중국 남자 테니스 역대 최고 랭킹 보유자.',
                        image: '/images/players/zhizhen-zhang.png',
                        jobTitle: 'Professional Tennis Player',
                        nationality: { '@type': 'Country', name: 'China' },
                        birthDate: '1996-10-16',
                        height: { '@type': 'QuantitativeValue', value: '193', unitText: 'cm' },
                        award: ['Asian Games Gold Medalist (2022)', 'ATP Masters 1000 Quarterfinalist'],
                        sameAs: [
                            'https://en.wikipedia.org/wiki/Zhang_Zhizhen',
                            'https://www.atptour.com/en/players/zhizhen-zhang/z371/overview',
                            'https://www.instagram.com/zhizhenzhang/'
                        ]
                    }}
                />
                <BreadcrumbSchema
                    items={[
                        { name: '홈', item: 'https://tennisfriends.co.kr' },
                        { name: '선수', item: 'https://tennisfriends.co.kr/players' },
                        { name: '장지전', item: 'https://tennisfriends.co.kr/players/zhizhen-zhang' },
                    ]}
                />
                <FAQSchema faqs={faqs} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <KeyTakeaways items={keyTakeaways} />

                    <PlayerProfileCard
                        name="Zhizhen Zhang"
                        country="China"
                        age={27}
                        height="193cm"
                        plays="Right-handed (Two-handed backhand)"
                        turnedPro={2012}
                        grandSlams={0}
                        ranking={42}
                    />

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            대륙의 자존심. <strong className="text-red-600 dark:text-red-400">역사를 쓰는 포핸드</strong>로 세계 무대에 중국 테니스의 힘을 보여주는 선수.
                        </p>

                        <TOC items={tocItems} />

                        <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
                            <Crown className="w-6 h-6 text-yellow-500" />
                            장지전, 왜 주목받는 선수인가?
                        </h2>
                        <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                                    중국 남자 선수 최초로 ATP 랭킹 50위 진입 및 마스터스 8강 진출
                                </p>
                            </div>
                        </blockquote>
                        <p>장지전은 중국 남자 테니스의 역사를 홀로 다시 쓰고 있다. 그동안 여자 테니스에 비해 두각을 나타내지 못했던 중국 남자 테니스계에 혜성처럼 등장하여, 마드리드 오픈 8강 진출 등 굵직한 성과를 내고 있다. 193cm의 당당한 체격과 서구적인 플레이 스타일로 '아시아 선수는 파워가 약하다'는 편견을 깨뜨렸다.</p>

                        <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
                            <Target className="w-6 h-6 text-red-500" />
                            이 선수는 어떤 유형의 플레이어인가?
                        </h2>
                        <p><strong>"공격형 베이스라이너 (Aggressive Baseliner)"</strong></p>
                        <p>장지전은 강력한 서브와 포핸드를 앞세워 상대를 힘으로 누르는 스타일이다.</p>

                        <PlayerHexagonStats
                            playerName="장지전"
                            attributes={[
                                { name: '포핸드 (Forehand)', score: 9.0, description: '그의 가장 큰 무기. 묵직한 탑스핀과 빠른 스피드로 위너를 만들어낸다.' },
                                { name: '서브 (Serve)', score: 8.5, description: '큰 키에서 내리꽂는 서브가 위력적이다. 에이스 생산 능력이 좋다.' },
                                { name: '멘탈 (Mental)', score: 8.0, description: '중요한 순간에 과감하게 지르는 배짱이 있다. 타이브레이크 승률이 높다.' },
                                { name: '백핸드 (Backhand)', score: 7.5, description: '안정적이며, 수비 상황에서도 반격을 노린다.' },
                                { name: '움직임 (Movement)', score: 7.5, description: '장신 치고는 준수하지만, 좌우 수비 범위는 개선이 필요하다.' },
                            ]}
                        />

                        <p>그는 랠리를 길게 가져가는 것을 선호하지 않는다. 서브 후 3구 공격이나 리턴 에이스를 노리는 등 공격적인 템포로 경기를 운영한다. 특히 클레이 코트에서도 강한 면모를 보이는데, 이는 그의 묵직한 구질이 클레이에서 더 위력을 발휘하기 때문이다.</p>

                        <h3 className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                            피지컬 능력
                        </h3>
                        <p>193cm, 87kg의 이상적인 테니스 체형을 가졌다. 상체 근력이 좋아 스윙에 힘을 싣는 능력이 탁월하다. 체력적으로도 많이 성장하여 5세트 경기에서도 경쟁력을 보여준다.</p>

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
                                마드리드 오픈 8강 · 로마 오픈 8강 · <strong className="text-green-700 dark:text-green-400 text-base">최초의 기록 제조기</strong>
                            </p>
                        </div>
                        <p>부담감을 즐길 줄 안다. 중국 테니스의 기대를 한 몸에 받고 있음에도 불구하고, 코트 위에서는 자신의 플레이에만 집중하는 집중력을 보여준다.</p>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="growth-story">장지전은 어떻게 여기까지 왔을까?</h2>
                        <p>상하이에서 태어난 장지전은 축구 선수 출신 아버지의 영향으로 운동 신경이 뛰어났다. 4살 때 테니스를 시작했고, 유럽으로 건너가 선진 테니스를 익혔다. 챌린저 투어에서 꾸준히 실력을 쌓은 뒤, 2022년 말부터 투어 레벨에서 두각을 나타내기 시작했다.</p>

                        <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
                        <p>2023년 마드리드 오픈 16강전이다.</p>

                        <h3>2023년 마드리드 오픈 16강</h3>
                        <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">기적의 역전승</p>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                                테일러 프리츠를 상대로 세트 스코어 0-1로 뒤지다가 타이브레이크 접전 끝에 2-1 역전승을 거뒀다. 탑 10 선수를 상대로 거둔 승리이자, 중국 선수 최초의 마스터스 8강 진출을 확정 지은 역사적인 경기였다.
                            </p>
                        </div>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
                        <p>시원시원한 공격 테니스와 겸손한 인터뷰 태도가 매력적이다. 또한 아시안 게임 금메달 획득으로 중국 내에서는 국민 영웅 대접을 받고 있으며, 글로벌 팬들에게도 아시아 테니스의 새로운 희망으로 주목받고 있다.</p>

                        <h2 id="recent-form">요즘 장지전의 경기력 흐름은 어떤가?</h2>
                        <p>2024년에도 꾸준히 성적을 내며 랭킹을 유지하고 있다. 로마 오픈 8강 진출 등 클레이 코트에서 특히 강한 모습을 보여주었다.</p>

                        <h3>최근 성적</h3>
                        <p>복식에서도 좋은 성적을 내며 올라운더로서의 능력을 키워가고 있다. 그랜드 슬램에서의 활약이 더욱 기대된다.</p>

                        <h2 id="one-sentence-summary">장지전, 한 문장으로 정리하면?</h2>
                        <p>장지전은 강력한 포핸드와 서브로 중국 남자 테니스의 역사를 새로 쓰고 있는 대륙의 자존심이다.</p>
                    </div>

                    <FAQ items={faqs} />
                    <CTA />
                </div>
            </Article>
        </div>
    );
}

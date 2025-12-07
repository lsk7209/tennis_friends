import { PlayerData } from '@/types/player';

export const PLAYERS_DB: Record<string, PlayerData> = {
    // --- Existing Male Players (53) ---
    'carlos-alcaraz': {
        name: '카를로스 알카라스', nameEn: 'Carlos Alcaraz', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/carlos-alcaraz.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '카를로스 알카라스는 스페인의 테니스 신동으로, 폭발적인 스피드와 강력한 포핸드로 코트를 지배합니다. 어린 나이에 그랜드슬램을 제패하며 차세대 테니스 황제로 불립니다.',
        detailedProfile: {
            oneLineSummary: '나달의 투지와 페더러의 공격성을 겸비한 완성형 천재, 새로운 테니스 황제.',
            whyNotable: `
                <p><strong>"빅3 시대를 종식시킨 차세대 황제"</strong></p>
                <p>카를로스 알카라스는 역사상 최연소(만 19세 4개월)로 세계 랭킹 1위에 등극하며 테니스 역사를 새로 썼습니다. 나달의 후계자로 불리지만, 페더러의 공격적인 넷 플레이와 조코비치의 유연한 수비력까지 갖춘 '완성형 하이브리드' 선수로 평가받습니다.</p>
                <p>무엇보다 그는 코트 위에서 항상 미소를 잃지 않으며, 창의적이고 대담한 샷으로 관중을 매료시키는 최고의 스타성을 가지고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 올라운더 (Aggressive All-Rounder)"</strong></p>
                <p>알카라스는 약점이 없는 것이 특징입니다. 베이스라인에서 강력한 파워로 상대를 압도하다가도, 기습적인 드롭샷이나 서브 앤 발리로 허를 찌릅니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>드롭샷:</strong> 투어 역사상 최고의 드롭샷 구사 능력 중 하나를 보유했습니다. 상대가 베이스라인 뒤로 물러나면 어김없이 네트 바로 앞에 공을 떨어뜨립니다.</li>
                    <li><strong>포핸드:</strong> 탄환 같은 스피드와 엄청난 회전량을 동반한 포핸드는 그의 가장 확실한 득점 루트입니다.</li>
                    <li><strong>스피드:</strong> '우사인 볼트'에 비견될 만큼 빠른 발을 가지고 있어, 도저히 불가능해 보이는 공도 끝까지 쫓아가 위너로 만들어냅니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 10, description: '코트 끝에서 끝까지 순식간에 이동하는 놀라운 기동력.' },
                { name: '포핸드 (Forehand)', score: 10, description: '어떤 위치에서도 위너를 만들어내는 파괴력.' },
                { name: '창의성 (Creativity)', score: 10, description: '드롭샷, 로브 등 예측 불가능한 샷 셀렉션.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '중요한 포인트에서 더 과감해지는 강심장.' },
                { name: '네트 플레이 (Net)', score: 9.5, description: '발리와 스매싱 결정력이 매우 높음.' },
                { name: '서브 (Serve)', score: 9, description: '다양한 구질과 코스 공략이 뛰어남.' }
            ],
            growthStory: `
                <p>스페인 무르시아 출신으로 4살 때 테니스 라켓을 잡았습니다. 후안 카를로스 페레로(전 세계 1위)의 지도를 받으며 재능을 꽃피웠습니다.</p>
                <p>10대 시절부터 챌린저 투어를 폭격하며 '괴물 신인'으로 주목받았고, 2022 US 오픈 우승으로 자신의 시대를 활짝 열었습니다. 클레이, 잔디, 하드 등 모든 코트에서 우승을 차지하며 가장 완벽한 선수가 되었습니다.</p>
            `,
            signatureMatch: {
                title: '2023 윔블던 결승 vs 노박 조코비치',
                date: '2023. 07. 16',
                description: '테니스 역사에 길이 남을 세대교체의 순간. 잔디 코트의 제왕 조코비치의 윔블던 5연패를 저지한 명승부입니다. 5세트 접전 끝에 승리하며, 하드, 클레이뿐만 아니라 잔디에서도 최강임을 증명했습니다.'
            },
            recentForm: `
                <p><strong>"황제의 행보"</strong></p>
                <p>부상 이슈가 간간이 있지만, 출전하는 대회마다 우승 후보 1순위입니다. 2024년 롤랑가로스와 윔블던을 연속 제패하며 '채널 슬램'을 달성, 21세의 나이에 커리어 그랜드슬램에 한 발짝 더 다가섰습니다.</p>
            `
        }
    },
    'jannik-sinner': {
        name: '야닉 시너', nameEn: 'Jannik Sinner', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/jannik-sinner.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아 최초의 로저스 컵 우승자이자 차세대 빅3 후보. 강력한 베이스라인 스트로크와 기복 없는 멘탈이 강점입니다. 스키 선수 출신다운 유연한 움직임이 돋보입니다.',
        detailedProfile: {
            oneLineSummary: '알프스의 스키 소년에서 세계 1위로. 가장 깨끗한 타구음을 가진 "볼 스트라이킹의 정점".',
            whyNotable: `
                <p><strong>"이탈리아 테니스의 역사를 새로 쓰는 남자"</strong></p>
                <p>야닉 시너는 이탈리아 테니스 역사상 최초로 ATP 랭킹 1위에 등극한 선수입니다. 흔들리지 않는 평정심과 냉철한 경기 운영으로 'The Fox(여우)'라는 별명을 가지고 있습니다. 카를로스 알카라스와 함께 남자 테니스의 향후 10년을 책임질 가장 강력한 라이벌리를 형성하고 있습니다.</p>
                <p>특히 2024 호주 오픈 우승은 그가 단순한 유망주를 넘어 진정한 챔피언으로 거듭났음을 증명한 사건이었습니다. 조코비치의 호주 오픈 연승 기록을 저지하고, 결승에서도 대역전극을 이뤄낸 그의 멘탈은 이미 완성형입니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner) + 완벽한 밸런스"</strong></p>
                <p>시너의 가장 큰 무기는 <strong>투어에서 가장 빠르고 묵직한 그라운드 스트로크</strong>입니다. 양쪽 날개(포핸드, 백핸드)에서 모두 위닝샷을 때릴 수 있는 몇 안 되는 선수이며, 공을 때리는 임팩트 소리가 다른 선수들과 확연히 다를 정도로 정타율이 높습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>스키 베이스:</strong> 어린 시절 스키 선수로 활약했던 경험 덕분에, 코트 위에서 미끄러지면서도 균형을 잃지 않는 독보적인 밸런스를 자랑합니다.</li>
                    <li><strong>멘탈:</strong> 위기 상황에서도 표정 변화가 거의 없으며, 실수 후에도 빠르게 다음 포인트에 집중하는 '리셋 능력'이 탁월합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9.5, description: '폭발적인 스피드와 파워를 겸비한 무기.' },
                { name: '백핸드 (Backhand)', score: 10, description: '투어 전체를 통틀어 가장 안정적이고 강력한 백핸드.' },
                { name: '스피드 (Speed)', score: 9, description: '긴 팔다리를 이용한 넓은 수비 범위.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '냉철하고 침착한 승부사 기질.' },
                { name: '서브 (Serve)', score: 8.5, description: '최근 비약적으로 발전하며 확실한 무기가 됨.' },
                { name: '체력 (Stamina)', score: 9, description: '5세트 접전도 버텨내는 강인한 체력.' }
            ],
            growthStory: `
                <p>이탈리아 북부 알프스 지역에서 태어난 시너는 본래 촉망받는 스키 선수였습니다. 그러나 13세에 테니스로 전향하는 과감한 결단을 내렸고, 리카르도 피아티 코치의 지도를 받으며 급성장했습니다.</p>
                <p>2019년 넥스트 제너레이션 파이널스 우승으로 혜성처럼 등장한 그는, 매년 놀라운 성장세를 보이며 탑 랭커들을 차례로 격파했습니다. 그리고 2024년, 마침내 그랜드슬램 챔피언의 자리에 오르며 세계 최정상의 자리를 차지했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 호주 오픈 결승 vs 다닐 메드베데프',
                date: '2024. 01. 28',
                description: '그의 첫 그랜드슬램 우승 경기이자, 역대급 명승부. 세트 스코어 0-2로 뒤지던 절체절명의 위기에서, 포기하지 않는 집념으로 내리 3세트를 따내며 3-2 대역전승을 거뒀습니다. 그의 챔피언 DNA를 전 세계에 각인시킨 순간이었습니다.'
            },
            recentForm: `
                <p><strong>"거칠 것이 없다"</strong></p>
                <p>2024 시즌은 '시너의 해'라고 해도 과언이 아닙니다. 호주 오픈, 로테르담, 마이애미 오픈 등을 휩쓸며 승승장구하고 있습니다. 클레이, 잔디, 하드 코트를 가리지 않는 올라운드 능력을 갖췄기에 당분간 그의 독주는 계속될 전망입니다.</p>
            `
        }
    },
    'novak-djokovic': {
        name: '노박 조코비치', nameEn: 'Novak Djokovic', country: 'Serbia', countryFlag: '🇷🇸', image: '/images/players/novak-djokovic.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '테니스 역사상 가장 위대한 선수(GOAT). 무결점의 테크닉과 불굴의 정신력, 그리고 압도적인 유연성으로 그랜드슬램 최다 우승 기록을 보유하고 있습니다.',
        detailedProfile: {
            oneLineSummary: '기록 파괴자이자 살아있는 전설, 테니스의 모든 역사를 새로 쓴 "무결점의 GOAT".',
            whyNotable: `
                <p><strong>"The Great of All Time (GOAT)"</strong></p>
                <p>노박 조코비치를 설명하는 데는 긴 말이 필요 없습니다. **그랜드슬램 최다 우승(24회), 마스터스 1000 최다 우승, ATP 파이널스 최다 우승, 역대 최장기간 세계 랭킹 1위** 등 테니스의 거의 모든 주요 기록을 보유하고 있습니다.</p>
                <p>페더러의 우아함과 나달의 투지 사이에서, 조코비치는 '완벽함'이라는 단어로 정의됩니다. 어떤 상황에서도 무너지지 않는 강철 같은 멘탈과, 신체 능력을 극한으로 끌어올린 유연성은 그를 난공불락의 요새로 만들었습니다.</p>
            `,
            playStyle: `
                <p><strong>"육각형의 정점 (Complete Player)"</strong></p>
                <p>조코비치는 뚜렷한 약점이 없는 '무결점 플레이어'입니다. 공격과 수비의 완벽한 조화, 정교한 리턴, 그리고 코트 구석구석을 찌르는 정밀함은 타의 추종을 불허합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>리턴:</strong> 역사상 최고의 리터너로 꼽힙니다. 상대의 강서브를 발 밑으로 떨어뜨려 공격권 자체를 무력화시킵니다.</li>
                    <li><strong>유연성:</strong> '고무 인간'이라 불릴 정도로 관절 가동 범위가 넓어, 불가능해 보이는 수비 상황에서도 균형을 잃지 않고 공을 받아냅니다.</li>
                    <li><strong>백핸드:</strong> 투어 역사상 가장 완벽한 투핸드 백핸드를 구사합니다. 다운더라인 샷은 그의 필살기입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '리턴 (Return)', score: 10, description: '역사상 최고의 리턴 능력.' },
                { name: '백핸드 (Backhand)', score: 10, description: '수비와 공격 모두 완벽한 투어 최고의 백핸드.' },
                { name: '멘탈 (Mental)', score: 10, description: '타이브레이크 승률 역대 1위. 압박감을 즐기는 강심장.' },
                { name: '체력 (Stamina)', score: 10, description: '5시간의 혈투 끝에도 지치지 않는 무한 동력.' },
                { name: '수비 (Defense)', score: 10, description: '코트의 모든 공을 받아내는 통곡의 벽.' },
                { name: '서브 (Serve)', score: 9, description: '화려하진 않지만 정교한 코스 공략으로 에이스를 양산함.' }
            ],
            growthStory: `
                <p>세르비아 베오그라드에서 태어난 조코비치는 전쟁의 포화 속에서 테니스를 배웠습니다. 이러한 성장 배경은 그에게 누구에게도 지지 않는 불굴의 정신력을 심어주었습니다.</p>
                <p>2008년 첫 호주 오픈 우승 이후, 글루텐 프리 식단 등 철저한 자기 관리를 통해 신체적 한계를 극복했습니다. 2011년 시즌 43연승이라는 대기록과 함께 페더러-나달의 양강 체제를 깨뜨리며 1인 독재 시대를 열었습니다.</p>
            `,
            signatureMatch: {
                title: '2019 윔블던 결승 vs 로저 페더러',
                date: '2019. 07. 14',
                description: '테니스 역사상 가장 위대한 결승전 중 하나. 마지막 세트 12-12 타이브레이크까지 가는 4시간 57분의 혈투 끝에 우승을 차지했습니다. 특히 매치 포인트 위기(15-40)를 두 번이나 극복하고 역전승을 일궈낸 이 경기는 그의 멘탈을 증명하는 최고의 명장면입니다.'
            },
            recentForm: `
                <p><strong>"여전히 정상에서"</strong></p>
                <p>30대 중반을 훌쩍 넘긴 나이에도 여전히 전성기 기량을 유지하고 있습니다. 2023년 그랜드슬램 3회 우승, 2024 파리 올림픽 금메달을 목표로 달리는 그는 여전히 모든 대회의 가장 강력한 우승 후보입니다.</p>
            `
        }
    },
    'daniil-medvedev': {
        name: '다닐 메드베데프', nameEn: 'Daniil Medvedev', country: 'Russia', countryFlag: '🇷🇺', image: '/images/players/daniil-medvedev.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 체스 마스터. 독특한 폼이지만 실용적인 스트로크와 엄청난 수비 범위, 그리고 지능적인 경기 운영으로 상대를 질식시키는 플레이가 특징입니다.',
        detailedProfile: {
            oneLineSummary: '상대를 질식시키는 "코트 위의 체스 마스터", 예측 불가능한 변칙의 승부사.',
            whyNotable: `
                <p><strong>"빅3의 독주를 막아선 난공불락의 벽"</strong></p>
                <p>다닐 메드베데프는 2021 US 오픈 결승에서 노박 조코비치의 '캘린더 그랜드슬램' 대기록을 저지하며 전 세계에 자신의 존재감을 각인시켰습니다. 198cm의 장신임에도 불구하고 투어 최고의 수비력을 갖췄으며, 독특하지만 실용적인 그만의 테니스 철학으로 세계 랭킹 1위까지 올랐던 선수입니다.</p>
                <p>그는 코트 위에서 예측 불가능한 행동과 솔직한 화법으로 '빌런'과 '스타' 사이를 오가며 팬들에게 색다른 재미를 선사합니다.</p>
            `,
            playStyle: `
                <p><strong>"수비형 카운터 펀처 + 빅 서브"</strong></p>
                <p>메드베데프의 플레이 스타일은 독보적입니다. 베이스라인에서 훨씬 뒤로 물러나 수비하다가, 상대의 공이 짧아지면 긴 팔다리를 이용해 휘감는 듯한 플랫 성 타구로 반격을 가합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>딥 리턴 포지션:</strong> 화면 밖으로 나갈 정도로 뒤에서 리턴을 준비하며, 이는 서브가 강한 선수들에게 엄청난 압박감을 줍니다.</li>
                    <li><strong>문어(Octopus) 수비:</strong> 긴 팔다리로 코트 구석구석을 커버하며, '도저히 못 받을 공'을 받아넘겨 상대를 지치게 만듭니다.</li>
                    <li><strong>전술:</strong> 상대의 리듬을 깨는 변칙적인 플레이와 심리전에 능합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '수비 (Defense)', score: 10, description: '투어 최고의 수비 범위. 뚫을 수 없는 벽.' },
                { name: '전술 (Tactics)', score: 10, description: '상대의 약점을 집요하게 파고드는 체스 마스터.' },
                { name: '서브 (Serve)', score: 9.5, description: '200km/h를 넘나드는 플랫 서브와 정교한 세컨 서브.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '공격과 수비 밸런스가 완벽한 그의 가장 강력한 무기.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '독특한 폼이지만, 낮고 빠르게 깔리는 구질이 까다로움.' },
                { name: '멘탈 (Mental)', score: 8, description: '가끔 감정을 주체하지 못하지만, 그조차 전략으로 활용함.' }
            ],
            growthStory: `
                <p>러시아 모스크바 출신인 메드베데프는 어릴 적부터 승부욕이 남달랐습니다. 프랑스로 유학 후 질 세바라 코치를 만나 자신의 독특한 신체 조건에 맞는 플레이 스타일을 정립했습니다.</p>
                <p>주니어 시절에는 크게 두각을 나타내지 못했으나, 프로 데뷔 후 꾸준히 랭킹을 올리며 '대기만성형' 천재의 면모를 보여주었습니다. 특히 하드 코트에서의 강세는 그를 투어 최강자 중 한 명으로 만들었습니다.</p>
            `,
            signatureMatch: {
                title: '2021 US 오픈 결승 vs 노박 조코비치',
                date: '2021. 09. 12',
                description: '테니스 역사에 남을 대이변. 조코비치의 캘린더 그랜드슬램 달성을 저지한 경기입니다. 세트 스코어 3-0 (6-4, 6-4, 6-4) 완승을 거두며 생애 첫 메이저 타이틀을 획득했고, 차세대 황제의 등장을 알렸습니다.'
            },
            recentForm: `
                <p><strong>"하드 코트의 지배자"</strong></p>
                <p>클레이 코트에서는 다소 약한 모습을 보이지만, 하드 코트 시즌이 돌아오면 언제나 가장 강력한 우승 후보 0순위입니다. 2024년 호주 오픈 준우승을 차지하며 여전한 클래스를 증명했습니다.</p>
            `
        }
    },
    'alexander-zverev': {
        name: '알렉산더 즈베레프', nameEn: 'Alexander Zverev', country: 'Germany', countryFlag: '🇩🇪', image: '/images/players/alexander-zverev.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '큰 키에서 나오는 강력한 서브와 세계 최고 수준의 투핸드 백핸드를 보유했습니다. 올림픽 금메달리스트이자 꾸준히 정상권을 지키는 독일의 에이스입니다.',
        detailedProfile: {
            oneLineSummary: '치명적인 발목 부상을 딛고 돌아온 불굴의 "독일 병정", 빅3의 가장 강력한 대항마.',
            whyNotable: `
                <p><strong>"올림픽 금메달리스트이자 인간 승리의 아이콘"</strong></p>
                <p>알렉산더 즈베레프는 2021 도쿄 올림픽에서 노박 조코비치의 골든 슬램을 저지하고 금메달을 목에 걸며 전성기를 맞이했습니다. 그러나 2022 롤랑가로스 4강전에서 입은 끔찍한 발목 부상으로 선수 생명에 위기가 찾아왔습니다.</p>
                <p>하지만 그는 모두의 예상을 깨고 1년 만에 투어 최상위권으로 복귀했습니다. 부상을 극복하고 보여준 그의 투지와 끈기는 많은 팬들에게 감동을 주었으며, 이제 다시 그랜드슬램 우승을 정조준하고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"빅 서버 + 공격적 베이스라이너"</strong></p>
                <p>198cm의 큰 키에서 뿜어져 나오는 220km/h 대의 강서브와, 투어 최고 수준의 양손 백핸드가 그의 확실한 무기입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 즈베레프의 백핸드는 공격과 수비 모든 면에서 완벽에 가깝습니다. 특히 크로스 코트 앵글 샷은 알고도 못 막는 수준입니다.</li>
                    <li><strong>서브:</strong> 퍼스트 서브 성공률이 높은 날에는 그 누구도 그를 쉽게 브레이크할 수 없습니다. 다만 결정적인 순간 세컨 서브가 불안해지는 점은 개선 과제입니다.</li>
                    <li><strong>체력:</strong> 장신 선수임에도 불구하고 5세트 접전을 버텨내는 강인한 체력을 보유하고 있습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '백핸드 (Backhand)', score: 10, description: '투어 최고의 양손 백핸드 중 하나.' },
                { name: '서브 (Serve)', score: 9.5, description: '압도적인 타점과 스피드.' },
                { name: '체력 (Stamina)', score: 9, description: '부상 복귀 후 더욱 강해진 피지컬.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '강력하지만 가끔 빗맞는 경우가 있음.' },
                { name: '멘탈 (Mental)', score: 8, description: '가끔 소극적인 플레이로 변하는 경향.' },
                { name: '네트 플레이 (Net)', score: 8, description: '장신을 이용한 커버 범위가 넓음.' }
            ],
            growthStory: `
                <p>구소련 테니스 선수 출신 부모님 밑에서 자란 '테니스 금수저'입니다. 형 미샤 즈베레프 역시 프로 선수로 활약한 테니스 가문 출신입니다.</p>
                <p>주니어 시절부터 세계 1위를 달리며 엘리트 코스를 밟았고, 20세에 마스터스 1000 우승을 차지하며 일찌감치 차세대 주자로 낙점받았습니다. 그랜드슬램 결승 문턱에서 번번이 좌절하는 아픔도 겪었지만, 꾸준히 4강권에 이름을 올리는 저력을 보여주고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2021 도쿄 올림픽 4강 vs 노박 조코비치',
                date: '2021. 07. 30',
                description: '그 누구도 막을 수 없을 것 같았던 조코비치의 골든 슬램(한 해 4대 메이저 + 올림픽 우승) 꿈을 무너뜨린 경기입니다. 세트 스코어 0-1로 뒤지던 상황에서 믿을 수 없는 경기력으로 2-1 역전승을 거두며 세계를 충격에 빠뜨렸습니다.'
            },
            recentForm: `
                <p><strong>"완벽한 부활"</strong></p>
                <p>부상 복귀 후 랭킹 10위권 밖으로 밀려났었으나, 무서운 속도로 랭킹 포인트를 쌓으며 다시 Top 5에 진입했습니다. 로마 마스터스 우승 등을 통해 클레이 코트에서도 강한 면모를 보이고 있습니다.</p>
            `
        }
    },
    'andrey-rublev': {
        name: '안드레이 루블레프', nameEn: 'Andrey Rublev', country: 'Russia', countryFlag: '🇷🇺', image: '/images/players/andrey-rublev.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '투어에서 가장 강력한 포핸드를 가진 선수 중 한 명. "Bweh"라는 기합 소리와 함께 매 포인트 전력을 다하는 파워풀한 공격 테니스를 구사합니다.',
        detailedProfile: {
            oneLineSummary: '폭발적인 포핸드와 뜨거운 열정, 코트 위의 "하드 히터".',
            whyNotable: `
                <p><strong>"Bweh! 기합 소리만큼 강력한 파괴력"</strong></p>
                <p>안드레이 루블레프는 투어 선수들이 가장 상대하기 싫어하는 선수 중 한 명입니다. 매 포인트마다 라켓이 부러질 듯 온몸을 실어 치는 포핸드는 엄청난 파괴력을 자랑합니다. 특유의 기합 소리("Bweh")와 함께 코트 위에서 모든 에너지를 쏟아붓는 열정적인 스타일로 많은 팬들의 사랑을 받고 있습니다.</p>
                <p>코트 밖에서는 수줍음 많고 착한 성품을 지녔지만, 경기 중에는 그 누구보다도 승부욕에 불타오르는 반전 매력의 소유자입니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>루블레프의 전략은 단순하지만 강력합니다. 강력한 서브와 그보다 더 강력한 포핸드로 상대를 베이스라인 뒤로 밀어낸 뒤, 위너를 꽂아 넣습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> ATP 투어에서 가장 빠른 스윙 스피드와 파괴력을 가진 포핸드 중 하나입니다. 인사이드-아웃 포핸드는 그의 전매특허입니다.</li>
                    <li><strong>체력:</strong> 쉴 새 없이 몰아치는 스타일임에도 지치지 않는 엄청난 활동량을 보여줍니다.</li>
                    <li><strong>멘탈:</strong> 경기가 풀리지 않을 때 자책하거나 라켓을 치는 등 감정을 표출하는 경우가 잦아, 멘탈 관리가 약점으로 지적되기도 합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 10, description: '투어 최강의 파괴력을 지닌 포핸드.' },
                { name: '파워 (Power)', score: 9.5, description: '체구에 비해 믿을 수 없는 볼 스피 생성.' },
                { name: '스피드 (Speed)', score: 9, description: '빠른 발로 포핸드 칠 공간을 만들어냄.' },
                { name: '서브 (Serve)', score: 8.5, description: '강력하지만 코스 예측이 비교적 쉬움.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적이지만 포핸드만큼 위협적이지 않음.' },
                { name: '멘탈 (Mental)', score: 7, description: '감정 기복이 심해 경기력에 영향을 줌.' }
            ],
            growthStory: `
                <p>러시아 모스크바에서 복싱 선수 출신 아버지와 테니스 코치 어머니 사이에서 태어났습니다. 주니어 시절 세계 랭킹 1위를 기록하며 일찍부터 재능을 인정받았습니다.</p>
                <p>프로 전향 후 꾸준히 Top 10을 유지하며 상위권에 자리 잡았으나, 메이저 대회 8강의 벽을 넘지 못해 '8강 징크스'에 시달리기도 했습니다. 하지만 2023년 몬테카를로 마스터스 우승으로 큰 경기에서도 통할 수 있음을 증명했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 몬테카를로 마스터스 결승 vs 홀게르 루네',
                date: '2023. 04. 16',
                description: '생애 첫 마스터스 1000 시리즈 우승을 차지한 경기. 3세트 1-4로 뒤지고 있던 절망적인 상황에서 대역전승을 거두며 감격의 눈물을 흘렸습니다.'
            },
            recentForm: `
                <p><strong>"꾸준함의 대명사"</strong></p>
                <p>기복 없이 매 시즌 ATP 파이널스에 진출할 만큼 꾸준한 성적을 내고 있습니다. 2024년 마드리드 오픈 우승 등 클레이 코트에서도 강한 면모를 보이며 커리어 하이 시즌을 노리고 있습니다.</p>
            `
        }
    },
    'stefanos-tsitsipas': {
        name: '스테파노스 치치파스', nameEn: 'Stefanos Tsitsipas', country: 'Greece', countryFlag: '🇬🇷', image: '/images/players/stefanos-tsitsipas.png', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '그리스의 테니스 신. 우아한 원핸드 백핸드와 공격적인 포핸드, 그리고 네트 플레이까지 갖춘 올라운드 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '그리스 조각상 같은 외모와 우아한 원핸드 백핸드, 스타성을 겸비한 "그리스의 신".',
            whyNotable: `
                <p><strong>"현대 테니스에 남은 낭만, 원핸드 백핸더"</strong></p>
                <p>스테파노스 치치파스는 멸종 위기에 처한 '원핸드 백핸드'의 명맥을 잇는 대표주자입니다. 페더러를 연상시키는 우아한 폼과 공격적인 네트 플레이로 '가장 아름다운 테니스를 하는 선수' 중 한 명으로 꼽힙니다.</p>
                <p>큰 키와 수려한 외모, 그리고 코트 밖에서의 철학적인(?) 인터뷰와 활발한 유튜브 활동으로 엄청난 팬덤을 보유하고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 올코트 플레이어 (Aggressive All-Court Player)"</strong></p>
                <p>강력한 포핸드를 바탕으로 네트 점령을 즐기는 공격적인 스타일입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 치치파스의 주득점원입니다. 높은 타점에서 감아치는 묵직한 포핸드는 클레이 코트에서 더욱 위력을 발휘합니다.</li>
                    <li><strong>네트 플레이:</strong> 복식을 병행하며 다져진 발리 감각이 뛰어납니다. 기회가 오면 주저 없이 네트로 대시하여 포인트를 끝냅니다.</li>
                    <li><strong>백핸드:</strong> 화려하고 우아하지만, 그의 유일한 약점이기도 합니다. 높은 공이나 빠른 리턴에 밀리는 경향이 있습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9.5, description: '가장 강력하고 믿을 수 있는 무기.' },
                { name: '서브 (Serve)', score: 9, description: '190cm가 넘는 키에서 나오는 위력적인 서브.' },
                { name: '네트 플레이 (Net)', score: 9, description: '과감한 대시와 부드러운 터치.' },
                { name: '스피드 (Speed)', score: 8.5, description: '장신임에도 불구하고 코트 커버가 좋음.' },
                { name: '백핸드 (Backhand)', score: 8, description: '아름답지만 기복이 있는 양날의 검.' },
                { name: '멘탈 (Mental)', score: 8, description: '중요한 순간 흔들리는 경향이 있음.' }
            ],
            growthStory: `
                <p>테니스 선수 출신 부모님(어머니는 소련 국가대표 출신)의 영향으로 어릴 때부터 라켓을 잡았습니다. 주니어 시절 세계 1위에 오르며 그리스 테니스의 희망으로 떠올랐습니다.</p>
                <p>2019년 호주 오픈에서 우상이었던 로저 페더러를 꺾으며 세계적인 스타로 발돋움했고, 그해 ATP 파이널스에서 최연소 우승을 차지하며 차세대 선두주자임을 입증했습니다.</p>
            `,
            signatureMatch: {
                title: '2019 ATP 파이널스 결승 vs 도미니크 팀',
                date: '2019. 11. 17',
                description: '왕중왕전인 ATP 파이널스 데뷔 무대에서 우승까지 차지한 역사적인 경기. 3세트 타이브레이크까지 가는 접전 끝에 승리하며, 21세의 나이로 최연소 챔피언에 등극했습니다.'
            },
            recentForm: `
                <p><strong>"클레이의 강자"</strong></p>
                <p>최근에는 하드 코트보다 클레이 코트에서 더 강한 모습을 보이고 있습니다. 2024년 몬테카를로 마스터스에서 3번째 우승을 차지하며 부활의 신호탄을 쏘아 올렸습니다.</p>
            `
        }
    },
    'casper-ruud': {
        name: '카스페르 루드', nameEn: 'Casper Ruud', country: 'Norway', countryFlag: '🇳🇴', image: '/images/players/casper-ruud.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '노르웨이 테니스의 새 역사를 쓰고 있는 선수. 나달 아카데미 출신답게 클레이 코트에서 특히 강하며, 엄청난 회전량의 포핸드 탑스핀이 주무기입니다.',
        detailedProfile: {
            oneLineSummary: '가장 예의 바른 "북유럽의 신사", 성실함으로 쌓아 올린 클레이의 탑.',
            whyNotable: `
                <p><strong>"나달의 수제자, 클레이의 프린스"</strong></p>
                <p>카스페르 루드는 노르웨이 역사상 최초로 ATP 투어 우승, 그랜드슬램 결승 진출, 세계 랭킹 2위 등 모든 기록을 갈아치우고 있는 국민 영웅입니다. 라파엘 나달 아카데미 출신으로, 나달을 연상시키는 엄청난 회전량의 헤비 탑스핀 포핸드를 구사합니다.</p>
                <p>투어에서 가장 매너 좋은 선수에게 수여하는 '스테판 에드베리 스포츠맨십 상'을 수상할 정도로 훌륭한 인품을 지녀, 안티가 없는 선수로도 유명합니다.</p>
            `,
            playStyle: `
                <p><strong>"클레이 코트 스페셜리스트 + 베이스라이너"</strong></p>
                <p>루드의 가장 큰 무기는 단연 **포핸드**입니다. 나달 다음으로 많은 분당 회전수(RPM)를 기록할 정도로 공이 묵직하게 튀어 올라 상대를 괴롭힙니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 그의 승리 공식입니다. 높은 탄도로 깊숙이 떨어지는 포핸드로 상대를 뒤로 밀어낸 뒤, 짧아진 공을 강타합니다.</li>
                    <li><strong>체력:</strong> 클레이 코트에서 긴 랠리를 버텨내는 강인한 체력과 인내심을 갖췄습니다.</li>
                    <li><strong>서브:</strong> 빠르지는 않지만 킥 서브를 잘 활용해 상대를 코트 밖으로 밀어내는 지능적인 서브를 넣습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9.5, description: '나달의 향기가 느껴지는 헤비 탑스핀.' },
                { name: '체력 (Stamina)', score: 9.5, description: '5세트도 문제없는 강철 체력.' },
                { name: '멘탈 (Mental)', score: 9, description: '흥분하지 않고 차분하게 경기를 풀어감.' },
                { name: '스피드 (Speed)', score: 8.5, description: '클레이에서의 풋워크가 매우 좋음.' },
                { name: '서브 (Serve)', score: 8, description: '파워보다는 회전과 코스 중심.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적이지만 결정력은 포핸드에 비해 아쉬움.' }
            ],
            growthStory: `
                <p>전직 프로 테니스 선수였던 아버지 크리스티안 루드의 지도를 받으며 자랐습니다. 더 큰 성장을 위해 스페인 마요르카의 라파엘 나달 아카데미로 유학을 떠났고, 그곳에서 실력이 급성장했습니다.</p>
                <p>초기에는 클레이 코트에서만 강하다는 편견이 있었으나, 2022 US 오픈(하드 코트) 준우승을 차지하며 올라운드 플레이어로서의 가능성을 입증했습니다.</p>
            `,
            signatureMatch: {
                title: '2022 프랑스 오픈 4강 vs 마린 칠리치',
                date: '2022. 06. 03',
                description: '노르웨이 선수 최초로 그랜드슬램 결승 진출을 확정 지은 경기. 베테랑 칠리치의 강력한 공격을 끈질긴 수비와 포핸드 역습으로 무력화시키며 3-1 역전승을 거뒀습니다.'
            },
            recentForm: `
                <p><strong>"큰 경기에 강한 남자"</strong></p>
                <p>2022, 2023 프랑스 오픈 2년 연속 준우승을 차지하며 '클레이 2인자'의 입지를 굳혔습니다. 2024년 바르셀로나 오픈에서 생애 가장 큰 타이틀(ATP 500)을 획득하며 커리어 하이를 경신했습니다.</p>
            `
        }
    },
    'alex-de-minaur': {
        name: '알렉스 드 미노', nameEn: 'Alex de Minaur', country: 'Australia', countryFlag: '🇦🇺', image: '/images/players/alex-de-minaur.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '스피드 데몬(Speed Demon)이라는 별명처럼 투어에서 가장 빠른 발을 가진 선수로 평가받으며, 끈질긴 수비와 카운터 펀치로 상대를 지치게 만듭니다.',
        detailedProfile: {
            oneLineSummary: '코트 위를 지배하는 "스피드 데몬", 끈질긴 수비와 투지로 상대를 질식시키는 승부사.',
            whyNotable: `
                <p><strong>"빛보다 빠른 발, 포기를 모르는 사나이"</strong></p>
                <p>알렉스 드 미노는 'Speed Demon'이라는 별명에 걸맞게 투어에서 가장 빠른 스피드를 자랑합니다. 도저히 닿을 수 없어 보이는 공도 기적적으로 받아넘기며 상대를 절망에 빠뜨립니다.</p>
                <p>큰 키나 강력한 파워는 없지만, 지치지 않는 체력과 멘탈로 이를 극복하고 Top 10에 진입하며 '노력형 천재'의 정석을 보여줍니다.</p>
            `,
            playStyle: `
                <p><strong>"카운터 펀처 (Counter Puncher)"</strong></p>
                <p>드 미노의 테니스는 '발'로 합니다. 탁월한 코트 커버리지를 바탕으로 상대의 실수를 유도하고, 기습적인 카운터 샷으로 득점합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>스피드:</strong> 타의 추종을 불허하는 그의 최대 무기입니다. 코트의 모든 곳을 커버하며 긴 랠리를 유도합니다.</li>
                    <li><strong>플랫 샷:</strong> 네트를 스치듯 낮게 깔리는 플랫성 스트로크는 상대가 공격적인 샷을 하지 못하게 만듭니다.</li>
                    <li><strong>리턴:</strong> 빠른 반응 속도로 상대의 강서브를 효과적으로 차단합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 10, description: 'ATP 투어 최고의 준족.' },
                { name: '체력 (Stamina)', score: 9.5, description: '5세트 내내 뛰어다녀도 지치지 않음.' },
                { name: '멘탈 (Mental)', score: 9, description: '끝까지 포기하지 않는 좀비 같은 근성.' },
                { name: '리턴 (Return)', score: 8.5, description: '상대의 서브 게임을 끈질기게 괴롭힘.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적이고 견고한 수비.' },
                { name: '파워 (Power)', score: 6.5, description: '체격 조건상 파워는 다소 부족함.' }
            ],
            growthStory: `
                <p>호주인 아버지와 스페인인 어머니 사이에서 태어나 스페인과 호주를 오가며 테니스를 배웠습니다. 어릴 때는 왜소한 체격 때문에 주목받지 못했지만, 레이튼 휴이트(전 세계 1위)의 멘토링을 받으며 급성장했습니다.</p>
                <p>끊임없는 노력으로 피지컬 열세를 극복하고 2024년 멕시코 오픈 우승, 프랑스 오픈 8강, 윔블던 8강 등 최고의 시즌을 보내며 Top 10에 안착했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 멕시코 오픈 결승 vs 토미 폴',
                date: '2023. 03. 05',
                description: 'ATP 500 시리즈 결승에서 토미 폴을 꺾고 우승을 차지한 경기. 특유의 끈질긴 수비로 상대의 에러를 유발하고, 결정적인 순간 과감한 공격으로 승부를 결정지으며 "빅 타이틀" 경쟁력을 입증했습니다.'
            },
            recentForm: `
                <p><strong>"Top 10의 자격"</strong></p>
                <p>2024년 들어 더욱 공격적인 테니스를 장착하며 커리어 하이를 경신했습니다. 부상으로 윔블던 8강 기권의 아쉬움을 남겼지만, 건강하게 복귀한다면 언제든 상위권을 위협할 수 있는 전력입니다.</p>
            `
        }
    },
    'taylor-fritz': {
        name: '테일러 프리츠', nameEn: 'Taylor Fritz', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/taylor-fritz.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '미국 남자 테니스의 에이스. 강력한 서브와 파워풀한 포핸드를 앞세운 전형적인 공격형 스타일로, 홈 그라운드인 미국 대회에서 특히 강합니다.',
        detailedProfile: {
            oneLineSummary: '미국 테니스의 자존심이자 에이스, 강력한 서브와 포핸드로 무장한 "미스터 아메리카".',
            whyNotable: `
                <p><strong>"미국 테니스의 부활을 이끄는 선봉장"</strong></p>
                <p>로딕 이후 끊겼던 미국 남자 테니스의 계보를 잇는 에이스입니다. 2022년 인디언 웰스 결승에서 나달을 꺾고 우승하며 21년 만에 미국인 챔피언이 탄생했음을 알렸습니다.</p>
                <p>잘생긴 외모와 넷플릭스 다큐멘터리 '브레이크 포인트' 출연으로 대중적인 인지도도 매우 높으며, 미국 내 테니스 붐을 다시 일으키고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>큰 키에서 나오는 강서브와 포핸드로 경기를 주도합니다. 전형적인 하드 히터 스타일이지만, 최근에는 백핸드와 수비력도 많이 향상되었습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 프리츠의 가장 강력한 무기입니다. 플랫하게 꽂히는 포핸드 위너는 그야말로 일품입니다.</li>
                    <li><strong>서브:</strong> 시속 220km를 넘나드는 서브는 위기관리 능력의 핵심입니다.</li>
                    <li><strong>백핸드:</strong> 과거에는 약점이었으나, 이제는 랠리를 버티고 역습을 할 수 있을 정도로 견고해졌습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9.5, description: '미국 선수 특유의 파워풀한 포핸드.' },
                { name: '서브 (Serve)', score: 9.5, description: '투어 최상위권의 서브 능력.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '홈 관중의 응원을 등에 업으면 더욱 강해짐.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '약점에서 준수한 무기로 성장.' },
                { name: '네트 플레이 (Net)', score: 7.5, description: '아직은 발전이 필요한 부분.' },
                { name: '스피드 (Speed)', score: 8, description: '체격에 비해 나쁘지 않은 기동력.' }
            ],
            growthStory: `
                <p>전 테니스 선수였던 어머니(캐시 메이, 전 세계 10위)의 영향으로 자연스럽게 테니스를 접했습니다. 주니어 시절부터 미국 내 랭킹 1위를 다투며 엘리트 코스를 밟았습니다.</p>
                <p>2015년 US 오픈 주니어 우승 이후 프로에 데뷔했으나, 잠시 정체기를 겪기도 했습니다. 하지만 2022년 인디언 웰스 우승을 기점으로 기량이 만개하여 Top 5까지 진입했습니다.</p>
            `,
            signatureMatch: {
                title: '2022 인디언 웰스 마스터스 결승 vs 라파엘 나달',
                date: '2022. 03. 20',
                description: '발목 부상 투혼 끝에 전승 행진을 달리던 나달을 2-0으로 꺾고 우승한 기적 같은 경기. 미국 테니스 역사상 가장 감동적인 순간 중 하나로 꼽힙니다.'
            },
            recentForm: `
                <p><strong>"메이저 우승을 향한 도전"</strong></p>
                <p>하드 코트에서는 그 누구와 붙어도 이길 수 있는 경쟁력을 갖췄습니다. 2024년 호주 오픈 8강 진출 등 메이저 대회에서 꾸준히 성적을 내고 있으며, 이제는 우승 트로피를 노리고 있습니다.</p>
            `
        }
    },
    'hubert-hurkacz': {
        name: '후베르트 후르카츠', nameEn: 'Hubert Hurkacz', country: 'Poland', countryFlag: '🇵🇱', image: '/images/players/hubert-hurkacz.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '폴란드의 서브 몬스터. 큰 키에서 내리꽂는 에이스급 서브와 부드러운 발리 터치, 그리고 겸손한 성품으로 사랑받는 선수입니다.',
        detailedProfile: {
            oneLineSummary: '코트 위의 신사, 강력한 서브와 부드러운 터치를 겸비한 폴란드의 "Hubi".',
            whyNotable: `
                <p><strong>"서브 에이스 머신 & 윔블던 4강 신화"</strong></p>
                <p>투어에서 가장 많은 에이스를 기록하는 선수 중 한 명입니다. 단순히 서브만 좋은 것이 아니라, 큰 키(196cm)에도 불구하고 놀랍도록 유연한 움직임과 부드러운 발리 능력을 갖췄습니다.</p>
                <p>2021년 윔블던 8강에서 '잔디의 황제' 로저 페더러를 3-0으로 완파하고 은퇴시킨 선수로도 역사에 이름을 남겼습니다. 항상 예의 바르고 겸손한 태도로 동료 선수들에게도 인정받는 모범생입니다.</p>
            `,
            playStyle: `
                <p><strong>"올라운드 서버 (All-round Server)"</strong></p>
                <p>강력한 서브를 바탕으로 게임을 풀어가지만, 베이스라인 랠리와 넷 플레이 모두 능숙합니다. 특히 수비 상황에서 몸을 날리는 다이빙 발리는 그의 트레이드마크입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 최고 시속 230km에 육박하며, 코스 선택이 매우 정확해 리턴하기 가장 까다로운 서브 중 하나입니다.</li>
                    <li><strong>발리:</strong> 복식 경기 경험이 많아 네트 플레이가 매우 안정적입니다.</li>
                    <li><strong>이동성:</strong> 장신 선수라고 믿기 힘들 만큼 코트 커버리지가 좋고 수비가 끈질깁니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 10, description: '현존하는 최고의 서버 중 한 명.' },
                { name: '발리 (Volley)', score: 9, description: '부드럽고 정교한 손기술.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '항상 침착함을 유지함.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적이고 견고함.' },
                { name: '포핸드 (Forehand)', score: 8, description: '가끔 흔들릴 때가 있음.' },
                { name: '스피드 (Speed)', score: 8, description: '큰 키를 커버하는 좋은 움직임.' }
            ],
            growthStory: `
                <p>폴란드 브로츠와프 출신으로, 어머니가 주니어 테니스 챔피언 출신입니다. 체조 선수였던 할아버지의 유전자를 물려받아 큰 키에도 유연한 신체를 가졌습니다.</p>
                <p>조용히 성장하다가 2021년 마이애미 오픈(마스터스 1000) 우승으로 깜짝 스타가 되었고, 이후 꾸준히 Top 10을 유지하며 폴란드 테니스의 역사를 새로 쓰고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2021 마이애미 오픈 결승 vs 야닉 시너',
                date: '2021. 04. 04',
                description: '생애 첫 마스터스 우승의 감격적인 순간. 절친한 후배이자 라이벌인 시너를 상대로 노련한 경기 운영을 보여주며 2-0 승리를 거뒀습니다. 이 우승으로 그는 세계적인 강자로 인정받게 되었습니다.'
            },
            recentForm: `
                <p><strong>"잔디와 하드의 강자"</strong></p>
                <p>빠른 코트에서 특히 강점을 보입니다. 2023년 상하이 마스터스 우승 등 여전한 기량을 과시하고 있으며, 서브 감각조절이 잘 되는 날에는 그 누구도 그를 막을 수 없습니다.</p>
            `
        }
    },
    'holger-rune': {
        name: '홀게르 루네', nameEn: 'Holger Rune', country: 'Denmark', countryFlag: '🇩🇰', image: '/images/players/holger-rune.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '덴마크의 악동이자 슈퍼 루키. 폭발적인 에너지와 다재다능한 기술, 그리고 거침없는 승부욕으로 단숨에 톱 랭커로 도약했습니다.',
        detailedProfile: {
            oneLineSummary: '코트 위의 악동이자 천재, 승부욕으로 무장한 덴마크의 "다이너마이트".',
            whyNotable: `
                <p><strong>"빅3를 꺾은 무서운 10대"</strong></p>
                <p>홀게르 루네는 2022 파리 마스터스 결승에서 '테니스 황제' 노박 조코비치를 꺾고 19세의 나이로 우승을 차지하며 전 세계를 놀라게 했습니다. 이 대회에서 그는 5명의 탑 랭커를 연파하는 괴력을 보여주었습니다.</p>
                <p>경기 중 감정 표현이 솔직하고 때로는 거친 행동으로 '악동' 이미지가 있지만, 그만큼 테니스에 대한 열정과 승부욕이 누구보다 강한 선수입니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 올라운더 (Aggressive All-Rounder)"</strong></p>
                <p>루네는 빠른 발과 강력한 샷을 바탕으로 상대를 끊임없이 압박합니다. 베이스라인 뒤에 머물기보다는 기회가 생기면 과감하게 네트로 대시하는 플레이를 즐깁니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 그의 가장 큰 무기입니다. 다운더라인 백핸드는 투어 최고 수준의 정확도와 파워를 자랑합니다.</li>
                    <li><strong>드롭샷:</strong> 중요한 순간에 허를 찌르는 드롭샷을 매우 잘 구사합니다.</li>
                    <li><strong>에너지:</strong> 코트 위에서 넘치는 에너지를 발산하며, 관중의 호응을 유도하고 분위기를 자신의 것으로 가져오는 데 능합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '백핸드 (Backhand)', score: 9.5, description: '투어에서 가장 위협적인 백핸드 중 하나.' },
                { name: '스피드 (Speed)', score: 9, description: '폭발적인 순간 스피드.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '지기 싫어하는 엄청난 승부욕.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '강력하지만 가끔 기복이 있음.' },
                { name: '창의성 (Creativity)', score: 9, description: '드롭샷, 넷 플레이 등 다양한 옵션 보유.' },
                { name: '서브 (Serve)', score: 8, description: '점점 발전하고 있는 부분.' }
            ],
            growthStory: `
                <p>덴마크 코펜하겐 출신으로, 누나를 따라 6살 때 테니스를 시작했습니다. 어릴 때부터 '세계 1위'가 되겠다는 목표가 확고했습니다.</p>
                <p>주니어 세계 1위를 거쳐 프로 데뷔 후에도 빠르게 랭킹을 올렸습니다. 2022년 프랑스 오픈 8강, 파리 마스터스 우승 등으로 단숨에 Top 10에 진입하며 알카라스와 함께 차세대를 이끌 주역으로 인정받았습니다.</p>
            `,
            signatureMatch: {
                title: '2022 파리 마스터스 결승 vs 노박 조코비치',
                date: '2022. 11. 06',
                description: '루네의 이름을 전 세계에 알린 인생 경기. 디펜딩 챔피언 조코비치를 상대로 3세트 접전 끝에 2-1 역전승을 거뒀습니다. 마지막 게임에서 무려 6번의 브레이크 포인트를 막아내며 우승을 확정 짓는 장면은 압권이었습니다.'
            },
            recentForm: `
                <p><strong>"성장통과 도약"</strong></p>
                <p>최근 코치진 교체 등으로 다소 불안정한 모습을 보였으나, 여전히 최고의 재능을 가진 선수임에는 의심의 여지가 없습니다. 멘탈적인 성숙이 더해진다면 언제든 메이저 우승을 노릴 수 있는 다크호스입니다.</p>
            `
        }
    },
    'grigor-dimitrov': {
        name: '그리고르 디미트로프', nameEn: 'Grigor Dimitrov', country: 'Bulgaria', countryFlag: '🇧🇬', image: '/images/players/grigor-dimitrov.png', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '베이비 페더러라는 별명처럼 가장 아름다운 폼을 가진 선수 중 하나. 유려한 원핸드 백핸드와 다채로운 기술로 제2의 전성기를 맞이했습니다.',
        detailedProfile: {
            oneLineSummary: '제2의 전성기를 맞이한 "베이비 페더러", 가장 우아하고 기술적인 원핸드 백핸더.',
            whyNotable: `
                <p><strong>"가장 아름다운 테니스를 구사하는 선수"</strong></p>
                <p>로저 페더러를 연상시키는 부드러운 폼과 우아한 원핸드 백핸드 덕분에 '베이비 페더러'라는 별명으로 불렸습니다. 한때 기대만큼 성장하지 못했다는 평도 있었으나, 30대에 접어들어 더욱 완숙하고 효율적인 플레이로 제2의 전성기를 맞이하며 Top 10에 복귀했습니다.</p>
                <p>코트 안팎에서의 매너와 스타일리시한 외모로 많은 팬을 보유하고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"올라운드 테크니션 (All-round Technician)"</strong></p>
                <p>코트 위의 모든 기술을 최상급으로 구사할 수 있습니다. 강력한 서브, 날카로운 슬라이스, 파워풀한 탑스핀, 그리고 섬세한 발리까지 모든 샷이 교과서적입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 그의 상징과도 같습니다. 특히 백핸드 슬라이스는 투어 최고 수준으로, 경기 템포를 조절하고 상대 리듬을 뺏는 데 탁월합니다.</li>
                    <li><strong>운동신경:</strong> 유연한 신체를 이용해 믿기 힘든 수비 장면을 연출하곤 합니다. 다이빙 샷이나 스플릿 스텝은 예술에 가깝습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '테크닉 (Technique)', score: 10, description: '모든 샷을 완벽한 폼으로 구사.' },
                { name: '백핸드 (Backhand)', score: 9, description: '가장 아름다운 원핸드 백핸드.' },
                { name: '운동신경 (Athleticism)', score: 9.5, description: '유연성과 탄력이 최상급.' },
                { name: '서브 (Serve)', score: 8.5, description: '기복이 있지만 터지면 막을 수 없음.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '중요한 순간 흔들리는 경향이 있음.' },
                { name: '체력 (Stamina)', score: 8, description: '나이가 들었음에도 잘 관리됨.' }
            ],
            growthStory: `
                <p>불가리아 하스코보 출신으로, 주니어 시절부터 '천재'로 불렸습니다. 2008년 윔블던, US 오픈 주니어 우승을 휩쓸며 혜성처럼 등장했습니다.</p>
                <p>2017년 ATP 파이널스 우승으로 세계 3위까지 올랐으나 이후 부진과 부상으로 랭킹이 하락했습니다. 하지만 포기하지 않고 폼을 교정하고 체력을 보완하여 2023-2024 시즌 화려하게 부활했습니다.</p>
            `,
            signatureMatch: {
                title: '2017 ATP 파이널스 결승 vs 다비드 고팽',
                date: '2017. 11. 19',
                description: '디미트로프 커리어의 정점. 왕중왕전인 파이널스에서 전승 우승을 차지하며 세계 3위를 확정 지었습니다. 이 대회 우승으로 그는 "Big 3" 다음가는 실력자임을 증명했습니다.'
            },
            recentForm: `
                <p><strong>"회춘한 베테랑"</strong></p>
                <p>2024년 마이애미 오픈에서 알카라스, 즈베레프 등 젊은 강자들을 연파하고 결승에 오르는 기염을 토했습니다. 전성기 못지않은 몸놀림과 더욱 노련해진 경기 운영으로 투어의 다크호스로 군림하고 있습니다.</p>
            `
        }
    },
    'ben-shelton': {
        name: '벤 쉘튼', nameEn: 'Ben Shelton', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/ben-shelton.png', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '미국 대학 테니스 출신의 괴물 신인. 230km/h를 넘나드는 왼손 폭탄 서브와 다이내믹한 플레이, 그리고 전화기 세리머니로 스타성을 입증했습니다.',
        detailedProfile: {
            oneLineSummary: '240km/h 서브를 꽂아 넣는 미국의 "슈퍼 루키", 코트 위의 에너자이저.',
            whyNotable: `
                <p><strong>"대학 테니스에서 US 오픈 4강까지"</strong></p>
                <p>미국 대학(NCAA) 챔피언 출신으로, 프로 데뷔 1년 만에 US 오픈 4강에 오르는 괴력을 발휘했습니다. 왼손잡이 특유의 각도 큰 서브와 폭발적인 포핸드, 그리고 시원시원한 성격으로 단숨에 스타덤에 올랐습니다.</p>
                <p>특히 US 오픈에서 보여준 '전화기 세리머니(Hang up the phone)'는 전 세계적인 밈이 되기도 했습니다.</p>
            `,
            playStyle: `
                <p><strong>"빅 서버 & 하드 히터 (Big Server & Hard Hitter)"</strong></p>
                <p>쉘튼의 테니스는 '화력' 그 자체입니다. 엄청난 피지컬에서 나오는 서브와 포핸드는 그 어떤 수비도 뚫어버립니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 투어에서 가장 빠른 서브(최고 241km/h)를 구사하는 선수 중 하나입니다. 왼손잡이의 이점까지 더해져 위력이 배가됩니다.</li>
                    <li><strong>운동신경:</strong> 미식축구 선수 출신이었던 만큼 폭발적인 순발력과 점프력을 보여줍니다.</li>
                    <li><strong>스매싱:</strong> 서브만큼이나 강력한 스매싱 능력을 갖추고 있어, 로브를 띄우는 것이 자살행위가 될 수 있습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9.5, description: '투어 최고 수준의 구속과 파워.' },
                { name: '포핸드 (Forehand)', score: 9, description: '맞으면 터지는 듯한 타격감.' },
                { name: '파워 (Power)', score: 9.5, description: '압도적인 힘.' },
                { name: '운동신경 (Athleticism)', score: 9, description: '폭발적인 점프력과 스피드.' },
                { name: '멘탈 (Mental)', score: 8, description: '큰 무대를 즐기는 강심장.' },
                { name: '리턴 (Return)', score: 7, description: '아직 다듬어야 할 부분.' }
            ],
            growthStory: `
                <p>전 프로 테니스 선수이자 대학 코치인 브라이언 쉘튼의 아들입니다. 어릴 때는 미식축구에 더 관심이 많았으나, 12세 때 본격적으로 테니스를 시작했습니다.</p>
                <p>플로리다 대학 시절 NCAA 단식 우승으로 대학 무대를 평정한 뒤 프로로 전향, 해외 투어 경험이 전무한 상태에서 호주 오픈 8강에 오르는 기적을 썼습니다.</p>
            `,
            signatureMatch: {
                title: '2023 US 오픈 8강 vs 프란시스 티아포',
                date: '2023. 09. 06',
                description: '미국 테니스의 신구 대결. 선배 티아포를 상대로 압도적인 화력을 뽐내며 3-1 승리를 거두고 4강에 진출했습니다. 이 경기 승리 후 보여준 전화기 세리머니는 대회의 하이라이트였습니다.'
            },
            recentForm: `
                <p><strong>"다듬어지는 원석"</strong></p>
                <p>2023년 재팬 오픈에서 생애 첫 투어 우승을 차지하며 상승세를 탔습니다. 아직 경험 부족으로 인한 기복이 있지만, 성장 속도가 매우 빨라 Top 10 진입이 유력시됩니다.</p>
            `
        }
    },
    'tommy-paul': {
        name: '토미 폴', nameEn: 'Tommy Paul', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/tommy-paul.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '빠른 발과 뛰어난 운동 신경을 가진 미국의 톱 랭커. 수비에서 공격으로 전환하는 능력이 탁월하며, 그랜드슬램 4강에 오르는 등 꾸준한 상승세입니다.',
        detailedProfile: {
            oneLineSummary: '빠른 발과 조코비치도 인정한 운동신경, "육각형 플레이어"의 정석.',
            whyNotable: `
                <p><strong>"가장 운동신경이 뛰어난 미국 선수"</strong></p>
                <p>토미 폴은 폭발적인 파워보다는 탁월한 밸런스와 빠른 발을 이용한 올라운드 플레이로 승부합니다. 2023년 호주 오픈에서 미국 남자 선수로는 14년 만에 4강에 진출하며 자신의 시대를 알렸습니다.</p>
                <p>코트 위에서는 냉정하지만 밖에서는 자유분방한 성격의 소유자로, 패셔너블한 스타일로도 유명합니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 카운터 펀처 (Aggressive Counter Puncher)"</strong></p>
                <p>수비력이 뛰어나지만 수비에만 치중하지 않습니다. 기회가 오면 지체 없이 네트로 대시하거나 포핸드로 공격 전환을 시도합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>풋워크:</strong> 투어 최상위권의 스텝을 자랑합니다. 어떤 공이든 쫓아가 받아내는 능력이 뛰어납니다.</li>
                    <li><strong>포핸드:</strong> 역크로스 포핸드는 그의 주득점원이며, 상대의 백핸드 쪽을 집요하게 공략합니다.</li>
                    <li><strong>전환:</strong> 수비에서 공격으로 전환하는 속도가 매우 빠릅니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 9.5, description: '코트 커버리지가 매우 넓음.' },
                { name: '운동신경 (Athleticism)', score: 9.5, description: '타고난 신체 밸런스.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '정확하고 날카로운 역크로스.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적인 연결 중심.' },
                { name: '네트 플레이 (Net)', score: 8.5, description: '복식 경험이 풍부해 발리가 좋음.' },
                { name: '서브 (Serve)', score: 7.5, description: '파워보다는 코스 공략 위주.' }
            ],
            growthStory: `
                <p>주니어 시절 롤랑가로스 주니어 우승과 US 오픈 주니어 준우승을 차지하며 일찌감치 유망주로 꼽혔습니다. 테일러 프리츠, 라일리 오펠카와 함께 '미국 테니스 황금세대'의 일원입니다.</p>
                <p>한동안 부상과 정체기를 겪었으나, 꾸준히 랭킹을 끌어올려 2023년에 생애 첫 Top 20, 그리고 Top 15 진입에 성공했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 호주 오픈 8강 vs 벤 쉘튼',
                date: '2023. 01. 25',
                description: '미국 테니스의 현재와 미래의 대결. 쉘튼의 강력한 서브와 파워를 노련한 경기 운영과 빠른 발로 무력화시키며 3-1 승리를 거두고 생애 첫 메이저 4강에 올랐습니다.'
            },
            recentForm: `
                <p><strong>"꾸준함의 대명사"</strong></p>
                <p>2024년 댈러스 오픈 우승, 델레이 비치 준우승 등 시즌 초반부터 좋은 흐름을 이어가고 있습니다. 큰 기복 없이 매 대회 상위권 성적을 내는 것이 강점입니다.</p>
            `
        }
    },
    'frances-tiafoe': {
        name: '프란시스 티아포', nameEn: 'Frances Tiafoe', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/frances-tiafoe.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '빅 포(Big Foe). 독특한 포핸드 폼과 쇼맨십, 그리고 관중과 호흡하는 에너지 넘치는 플레이로 US 오픈 4강 신화를 쓴 미국의 스타입니다.',
        detailedProfile: {
            oneLineSummary: '관중을 미치게 만드는 "Big Foe", 독특한 폼과 쇼맨십으로 무장한 엔터테이너.',
            whyNotable: `
                <p><strong>"아메리칸 드림의 상징"</strong></p>
                <p>시에라리온 이민자 가정 출신으로, 아버지가 관리인으로 일하던 테니스 센터에서 라켓을 잡기 시작한 이야기는 한 편의 영화 같습니다. 2022년 US 오픈에서 나달을 꺾고 흑인 남성 선수로는 아서 애시 이후 16년 만에 4강에 오르며 미국의 새로운 영웅으로 떠올랐습니다.</p>
                <p>경기 중 관중의 호응을 유도하고 화려한 세리머니를 펼치는 등 최고의 쇼맨십을 자랑합니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 올라운더 (Aggressive All-Rounder)"</strong></p>
                <p>변칙적이고 창의적인 플레이를 즐깁니다. 포핸드 스윙 폼이 매우 독특하지만 위력적이며, 네트 플레이와 발리 센스도 뛰어납니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 테이크백이 짧고 채찍처럼 휘두르는 독특한 폼을 가졌습니다. 타이밍을 뺏기 좋고 스핀이 많이 걸립니다.</li>
                    <li><strong>발리:</strong> 복식 경기에서도 두각을 나타낼 만큼 손맛이 좋고 네트 앞 움직임이 민첩합니다.</li>
                    <li><strong>서브:</strong> 파워보다는 다양한 코스와 구질로 승부합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '쇼맨십 (Showmanship)', score: 10, description: '관중을 조련하는 마에스트로.' },
                { name: '포핸드 (Forehand)', score: 9, description: '독특하지만 파괴적인 샷.' },
                { name: '네트 플레이 (Net)', score: 9, description: '감각적인 터치 발리.' },
                { name: '운동신경 (Athleticism)', score: 9, description: '탄력과 유연성이 뛰어남.' },
                { name: '서브 (Serve)', score: 8, description: '평균 이상이지만 기복이 있음.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적으로 버티는 역할.' }
            ],
            growthStory: `
                <p>메릴랜드주 칼리지파크의 테니스 센터에서 5살 때부터 형과 함께 테니스를 쳤습니다. 어려운 가정 형편 속에서도 재능을 인정받아 후원을 받으며 성장했습니다.</p>
                <p>2018년 델레이 비치 우승으로 첫 투어 타이틀을 따냈고, 2022년 US 오픈 4강으로 커리어 하이를 찍으며 세계적인 선수로 발돋움했습니다.</p>
            `,
            signatureMatch: {
                title: '2022 US 오픈 16강 vs 라파엘 나달',
                date: '2022. 09. 05',
                description: '티아포의 인생 경기. 그랜드슬램 22회 우승자인 나달을 상대로 3-1 승리를 거두며 전 세계를 충격에 빠뜨렸습니다. 강력한 스트로크와 흔들리지 않는 멘탈로 나달을 압도했습니다.'
            },
            recentForm: `
                <p><strong>"Top 10 재진입을 노리는 강자"</strong></p>
                <p>2023년 슈투트가르트와 휴스턴 우승으로 잔디와 클레이 코트에서도 경쟁력을 증명했습니다. 기복을 줄이고 꾸준함을 유지한다면 다시 한번 메이저 대회에서 돌풍을 일으킬 수 있습니다.</p>
            `
        }
    },
    'ugo-humbert': {
        name: '우고 움베르', nameEn: 'Ugo Humbert', country: 'France', countryFlag: '🇫🇷', image: '/images/players/ugo-humbert.png', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '프랑스의 현재이자 미래. 왼손잡이 특유의 각도 깊은 서브와 빠른 템포의 공격적인 테니스로 실내 하드 코트에서 특히 강한 면모를 보입니다.'
    },
    'sebastian-baez': {
        name: '세바스티안 바에즈', nameEn: 'Sebastian Baez', country: 'Argentina', countryFlag: '🇦🇷', image: '/images/players/sebastian-baez.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '작은 고추가 맵다. 단신이지만 엄청난 활동량과 끈질긴 랠리 능력, 그리고 강력한 포핸드로 클레이 코트에서 무서운 저력을 보여주는 선수입니다.'
    },
    'lorenzo-musetti': {
        name: '로렌조 무세티', nameEn: 'Lorenzo Musetti', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/lorenzo-musetti.png', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '이탈리아의 예술가. 화려한 원핸드 백핸드와 창의적인 샷 메이킹으로 보는 이들을 매료시키는 스타일리시한 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '코트 위의 예술가, 낭만적인 원핸드 백핸드와 창의성으로 승부하는 테크니션.',
            whyNotable: `
                <p><strong>"이탈리아 테니스의 르네상스, 그 중심"</strong></p>
                <p>로렌조 무세티는 아름다운 원핸드 백핸드와 마법 같은 샷 메이킹으로 '코트 위의 예술가'라 불립니다. 2024년 윔블던 4강, 파리 올림픽 동메달을 획득하며 야닉 시너와 함께 이탈리아 테니스의 황금기를 이끌고 있습니다.</p>
                <p>단순히 이기는 것보다 '어떻게' 이기는지를 보여주는 스타일리시한 플레이로 수많은 팬을 매료시킵니다.</p>
            `,
            playStyle: `
                <p><strong>"올코트 크리에이터 (All-court Creator)"</strong></p>
                <p>정형화된 플레이를 거부합니다. 베이스라인 뒤에서 엄청난 양의 스핀을 건 샷을 날리다가도, 기습적인 드롭샷이나 네트 대시로 득점합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 가스케, 바브린카의 뒤를 잇는 명품 원핸드 백핸드입니다. 다운더라인 위너는 감탄을 자아냅니다.</li>
                    <li><strong>터치:</strong> 손목 감각이 타의 추종을 불허합니다. 드롭샷과 발리 터치는 예술의 경지입니다.</li>
                    <li><strong>다양성:</strong> 슬라이스, 롭, 앵글 샷 등 코트의 모든 공간을 활용하는 옵션을 가졌습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '창의성 (Creativity)', score: 10, description: '예측 불가능한 샷 셀렉션.' },
                { name: '테크닉 (Technique)', score: 9.5, description: '모든 구질을 자유자재로 구사.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '원핸드 백핸드의 로망 그 자체.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '감정 기복이 경기력에 영향을 줌.' },
                { name: '서브 (Serve)', score: 8, description: '코스는 좋으나 파워는 평범함.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '회전량이 많아 까다로움.' }
            ],
            growthStory: `
                <p>이탈리아 카라라 출신으로, 어릴 때부터 나이답지 않은 노련한 플레이로 주목받았습니다. 2019년 호주 오픈 주니어 우승을 차지하며 세계 주니어 1위에 올랐습니다.</p>
                <p>프로 데뷔 후 클레이 코트에서 강점을 보이다가, 2024년 잔디 코트(윔블던 4강)에서의 맹활약으로 모든 코트에서 통하는 선수임을 증명했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 파리 올림픽 동메달 결정전 vs 펠릭스 오제-알리아심',
                date: '2024. 08. 04',
                description: '이탈리아 테니스 역사상 100년 만의 올림픽 메달을 안긴 경기. 3세트 접전 끝에 승리하며 조국에 동메달을 바쳤습니다. 승리가 확정된 순간 코트에 누워 보여준 기쁨은 전 세계에 감동을 주었습니다.'
            },
            recentForm: `
                <p><strong>"커리어 하이 시즌"</strong></p>
                <p>2024년 중반부터 기량이 만개했습니다. 특히 잔디 시즌 퀸즈 클럽 준우승, 윔블던 4강에 이어 올림픽 메달까지 획득하며 최고의 상승세를 타고 있습니다.</p>
            `
        }
    },

    'cameron-norrie': {
        name: '카메론 노리', nameEn: 'Cameron Norrie', country: 'United Kingdom', countryFlag: '🇬🇧', image: '/images/players/cameron-norrie.png', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '영국의 철인. 지치지 않는 체력과 독특한 플랫 백핸드, 그리고 엄청난 회전량의 포핸드를 섞어 상대를 까다롭게 만드는 왼손잡이 전략가입니다.'
    },
    'tallon-griekspoor': {
        name: '탈론 크리에크스푸르', nameEn: 'Tallon Griekspoor', country: 'Netherlands', countryFlag: '🇳🇱', image: '/images/players/tallon-griekspoor.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '네덜란드 테니스의 에이스. 네덜란드 역대 최다 우승 기록을 갱신하고 있으며, 강력한 서브와 포핸드를 앞세운 공격적인 플레이가 특징입니다.'
    },
    'nicolas-jarry': {
        name: '니콜라스 자리', nameEn: 'Nicolas Jarry', country: 'Chile', countryFlag: '🇨🇱', image: '/images/players/nicolas-jarry.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '칠레의 거인. 2미터에 가까운 키에서 뿜어져 나오는 압도적인 서브와 포핸드는 투어에서 가장 상대하기 까다로운 무기 중 하나입니다.'
    },
    'alejandro-davidovich-fokina': {
        name: '알레한드로 다비도비치 포키나', nameEn: 'Alejandro Davidovich Fokina', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/alejandro-davidovich-fokina.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '다이빙 샷의 장인. 코트 위에서 몸을 아끼지 않는 허슬 플레이와 팬들을 열광시키는 쇼맨십으로 유명한 스페인의 재능입니다.'
    },
    'alex-michelsen': {
        name: '알렉스 미첼슨', nameEn: 'Alex Michelsen', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/alex-michelsen.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '미국 테니스의 최신성. 190cm가 넘는 키에서 나오는 안정적인 서비스 게임과 나이답지 않은 침착한 경기 운영이 돋보이는 유망주입니다.'
    },
    'arthur-landercknech': {
        name: '아르튀르 랑데르크네슈', nameEn: 'Arthur Landercknech', country: 'France', countryFlag: '🇫🇷', image: '/images/players/arthur-landercknech.png', gender: 'male',
        plays: 'Right-handed', backhand: 'One-handed',
        longBio: '미국 대학 테니스(Texas A&M)를 평정하고 프로에 온 늦깍이 스타. 강력한 서브와 포핸드를 앞세운 공격적인 테니스를 구사합니다.'
    },
    'brandon-nakashima': {
        name: '브랜든 나카시마', nameEn: 'Brandon Nakashima', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/brandon-nakashima.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '기계 같은 정밀함. 감정을 드러내지 않는 포커페이스와 기복 없는 백핸드 스트로크로 넥스트젠 파이널스 우승을 차지한 실력파입니다.'
    },
    'corentin-moutet': {
        name: '코랑탱 무테', nameEn: 'Corentin Moutet', country: 'France', countryFlag: '🇫🇷', image: '/images/players/corentin-moutet.png', gender: 'male',
        plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '프랑스의 왼손잡이 마법사. 작은 체구지만 뛰어난 손감각과 드롭샷, 발리 등 다양한 기술로 상대를 괴롭히는 창의적인 플레이어입니다.'
    },
    'flavio-cobolli': {
        name: '플라비오 코볼리', nameEn: 'Flavio Cobolli', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/flavio-cobolli.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 떠오르는 샛별. AS 로마 유스 출신의 축구 선수 경력을 가지고 있어 발놀림이 뛰어나며, 파이팅 넘치는 플레이가 인상적입니다.'
    },
    'francisco-cerundolo': {
        name: '프란시스코 세룬돌로', nameEn: 'Francisco Cerundolo', country: 'Argentina', countryFlag: '🇦🇷', image: '/images/players/francisco-cerundolo.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '아르헨티나 No.1. 남미 특유의 클레이 코트 강점은 물론 하드 코트에서도 강력한 포핸드 위너를 쏟아내는 전천후 플레이어입니다.'
    },
    'jakub-mensik': {
        name: '야쿠프 멘시크', nameEn: 'Jakub Mensik', country: 'Czech Republic', countryFlag: '🇨🇿', image: '/images/players/jakub-mensik.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '체코의 10대 돌풍. 193cm의 큰 키와 강력한 서브, 그리고 나달을 꺾는 등 대담한 플레이로 투어에 신선한 충격을 주고 있습니다.'
    },
    'jaume-munar': {
        name: '자우메 무나르', nameEn: 'Jaume Munar', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/jaume-munar.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '라파엘 나달 아카데미 수석 졸업생. 전형적인 스페인 클레이 코트 스페셜리스트로, 끈질긴 수비와 안정적인 스트로크가 강점입니다.'
    },
    'jiri-lehecka': {
        name: '이리 레헤츠카', nameEn: 'Jiri Lehecka', country: 'Czech Republic', countryFlag: '🇨🇿', image: '/images/players/jiri-lehecka.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '체코 테니스의 부활을 알리는 신호탄. 토마스 베르디흐를 연상시키는 깔끔하고 강력한 플랫성 스트로크로 빠르게 랭킹을 끌어올렸습니다.'
    },
    'joao-fonseca': {
        name: '주앙 폰세카', nameEn: 'Joao Fonseca', country: 'Brazil', countryFlag: '🇧🇷', image: '/images/players/joao-fonseca.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '브라질의 슈퍼 원더키드. 2006년생으로 넥스트젠의 선두주자이며, 리오 오픈에서 최연소 8강에 오르는 등 폭발적인 잠재력을 보여주고 있습니다.'
    },
    'karen-khachanov': {
        name: '카렌 하차노프', nameEn: 'Karen Khachanov', country: 'Russia', countryFlag: '🇷🇺', image: '/images/players/karen-khachanov.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '파리의 마스터스 챔피언. 198cm의 장신에서 나오는 강력한 서브와 두꺼운 그립의 포핸드로 상대를 힘으로 압박하는 파워 히터입니다.'
    },
    'linner-tien': {
        name: '리너 티엔', nameEn: 'Learner Tien', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/linner-tien.png', gender: 'male',
        plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '미국 테니스의 숨은 보석. 10대 때 두 번이나 US 오픈 주니어 챔피언에 올랐으며, 왼손잡이 특유의 까다로운 구질과 지능적인 플레이가 강점입니다.'
    },
    'luciano-darderi': {
        name: '루치아노 다르데리', nameEn: 'Luciano Darderi', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/luciano-darderi.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 클레이 스페셜리스트. 아르헨티나 태생으로 남미 스타일의 끈질긴 랠리와 파워 넘치는 포핸드를 구사하며 급성장하고 있는 선수입니다.'
    },
    'tomas-machac': {
        name: '토마스 마하츠', nameEn: 'Tomas Machac', country: 'Czech Republic', countryFlag: '🇨🇿', image: '/images/players/tomas-machac.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '조코비치를 꺾은 사나이. 체코의 유망주로, 매우 공격적인 리턴과 빠른 템포의 스트로크로 상대를 압박하는 스타일입니다.'
    },
    'valentin-vacherot': {
        name: '발랑탱 바슈로', nameEn: 'Valentin Vacherot', country: 'Monaco', countryFlag: '🇲🇨', image: '/images/players/valentin-vacherot.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '모나코의 자존심. 챌린저 투어를 제패하며 ATP 무대에 도전장을 내민 늦깍이 유망주로, 침착한 경기 운영이 돋보입니다.'
    },
    'alexei-popyrin': {
        name: '알렉세이 포피린', nameEn: 'Alexei Popyrin', country: 'Australia', countryFlag: '🇦🇺', image: '/images/players/alexei-popyrin.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '호주의 거포. 196cm의 장신에서 뿜어져 나오는 서브와 포핸드가 강력하며, 마스터스 1000 우승(몬트리올)으로 잠재력을 폭발시켰습니다.'
    },
    'jan-lennard-struff': {
        name: '얀-레나드 스트루프', nameEn: 'Jan-Lennard Struff', country: 'Germany', countryFlag: '🇩🇪', image: '/images/players/jan-lennard-struff.svg', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '독일의 대기만성형 스타. 공격적인 서브 앤 발리와 강력한 포핸드로 상대를 몰아붙이는 스타일로, 30대의 나이에 커리어 하이를 경신 중입니다.'
    },
    'adrian-mannarino': {
        name: '아드리안 만나리노', nameEn: 'Adrian Mannarino', country: 'France', countryFlag: '🇫🇷', image: '/images/players/adrian-mannarino.svg', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '테니스계의 힙스터. 매우 낮은 텐션의 라켓을 사용하여 공을 툭툭 건드리는 듯한 독특한 스윙으로 상대의 리듬을 뺏는 왼손잡이 베테랑입니다.'
    },
    'matteo-arnaldi': {
        name: '마테오 아르날디', nameEn: 'Matteo Arnaldi', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/matteo-arnaldi.svg', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 지치지 않는 엔진. 데이비스컵 우승의 주역으로, 빠른 발과 끈질긴 수비, 그리고 결정적인 순간에 터지는 위너가 강점입니다.'
    },
    'jordan-thompson': {
        name: '조던 톰슨', nameEn: 'Jordan Thompson', country: 'Australia', countryFlag: '🇦🇺', image: '/images/players/jordan-thompson.svg', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '호주의 콧수염 파이터. 투박하지만 실속 있는 플레이, 특히 훌륭한 넷 플레이와 더블즈 실력을 겸비한 전천후 플레이어입니다.'
    },
    'zhizhen-zhang': {
        name: '장지전', nameEn: 'Zhizhen Zhang', country: 'China', countryFlag: '🇨🇳', image: '/images/players/zhizhen-zhang.svg', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '중국 남자 테니스의 역사. 중국 선수 최초로 마스터스 8강, 세계 랭킹 50위 진입 등 아시아 테니스의 새로운 역사를 쓰고 있는 파워 히터입니다.'
    },
    'giovanni-mpetshi-perricard': {
        name: '지오반니 음페치 페리카르', nameEn: 'Giovanni Mpetshi Perricard', country: 'France', countryFlag: '🇫🇷', image: '/images/players/giovanni-mpetshi-perricard.svg', gender: 'male',
        plays: 'Right-handed', backhand: 'One-handed',
        longBio: '프랑스의 203cm 거인 유망주. 엄청난 높이에서 내리꽂는 서브와 강력한 원핸드 백핸드로 챌린저 투어를 폭격하고 있는 무서운 신예입니다.'
    },

    // --- New Male Players (30) ---
    'rafael-nadal': {
        name: '라파엘 나달', nameEn: 'Rafael Nadal', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/rafael-nadal.png', gender: 'male',
        plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '클레이 황제, 라파엘 나달. 흙신이라는 별명답게 롤랑가로스 최다 우승 기록을 보유하고 있으며, 강력한 탑스핀 포핸드와 불굴의 정신력으로 테니스 역사를 새로 썼습니다.',
        detailedProfile: {
            oneLineSummary: '불멸의 "클레이 황제", 테니스 역사상 가장 위대한 투사.',
            whyNotable: `
                <p><strong>"흙신(The King of Clay)"</strong></p>
                <p>라파엘 나달은 특정 코트에서 인류 역사상 가장 압도적인 지배력을 보여준 선수입니다. <strong>롤랑가로스(프랑스 오픈) 14회 우승</strong>이라는 전무후무한 대기록은 앞으로도 깨지기 힘든 불멸의 기록으로 평가받습니다.</p>
                <p>하지만 그를 단순히 클레이 코트 전문가로만 부르는 것은 실례입니다. 커리어 골든 슬램(4대 메이저 + 올림픽 금메달)을 달성한 역대 최연소 선수이며, 부상으로 인한 숱한 위기 속에서도 오뚝이처럼 다시 일어서는 불굴의 정신력은 전 세계 스포츠 팬들에게 깊은 울림을 주었습니다.</p>
            `,
            playStyle: `
                <p><strong>"헤비 탑스핀 베이스라이너 (Heavy Topspin Baseliner)"</strong></p>
                <p>나달의 테니스는 '물리학적 파괴력'으로 정의됩니다. 분당 회전수(RPM) 3,500을 넘나드는 그의 왼손 포핸드는 상대의 머리 위로 튀어 오르며 수비를 불가능하게 만듭니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 그의 트레이드마크인 '라소(Lasso)' 스윙에서 나오는 헤비 탑스핀은 상대 코트 깊숙이 떨어져 엄청난 높이로 튀어 오릅니다.</li>
                    <li><strong>수비:</strong> '나달 존'이라 불리는 베이스라인 밖에서의 수비 능력은 타의 추종을 불허합니다. 포기하지 않고 끝까지 쫓아가 위너로 되치기합니다.</li>
                    <li><strong>멘탈:</strong> "한 포인트, 한 포인트를 내 인생의 마지막 포인트처럼 칩니다."라는 그의 말처럼, 경기 시작부터 끝까지 집중력을 잃지 않습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '멘탈 (Mental)', score: 10, description: '스포츠 역사상 가장 강인한 정신력.' },
                { name: '포핸드 (Forehand)', score: 10, description: '역사상 가장 위력적인 왼손 포핸드.' },
                { name: '체력 (Stamina)', score: 10, description: '지치지 않는 무한한 엔진.' },
                { name: '수비 (Defense)', score: 10, description: '클레이 코트에서는 뚫을 수 없는 벽.' },
                { name: '스피드 (Speed)', score: 9.5, description: '전성기 시절의 코트 커버리지는 신계.' },
                { name: '네트 플레이 (Net)', score: 9, description: '과소평가되었지만 매우 뛰어난 발리 감각.' }
            ],
            growthStory: `
                <p>스페인 마요르카 출신으로, 원래 오른손잡이였으나 토니 나달 코치(삼촌)의 권유로 왼손잡이 테니스를 시작했습니다. 이는 테니스 역사상 가장 성공적인 전략적 선택 중 하나였습니다.</p>
                <p>2005년 첫 롤랑가로스 우승 이후 10년 넘게 세계 정상을 지켰습니다. 고질적인 무릎 부상과 발 부상(뮐러-와이즈 증후군)에도 불구하고, 끝내 재활에 성공하여 2022년 호주 오픈과 프랑스 오픈을 제패하는 기적을 보여주었습니다.</p>
            `,
            signatureMatch: {
                title: '2008 윔블던 결승 vs 로저 페더러',
                date: '2008. 07. 06',
                description: '테니스 역사상 가장 위대한 경기로 꼽히는 명승부. 페더러의 안방인 잔디 코트에서 4시간 48분의 혈투 끝에 세트 스코어 3-2로 승리하며, 나달이 더 이상 클레이만의 강자가 아님을 전 세계에 선포했습니다.'
            },
            recentForm: `
                <p><strong>"라스트 댄스"</strong></p>
                <p>2024년은 나달의 마지막 시즌이 될 가능성이 높습니다. 부상에서 복귀하여 클레이 시즌과 올림픽에 모든 것을 걸고 있으며, 그의 마지막 투혼을 보는 것만으로도 팬들에게는 큰 선물입니다.</p>
            `
        }
    },
    'andy-murray': {
        name: '앤디 머레이', nameEn: 'Andy Murray', country: 'United Kingdom', countryFlag: '🇬🇧', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '영국의 테니스 영웅, 앤디 머레이. 놀라운 수비력과 전술적인 플레이로 BIG 4의 일원으로 활약했으며, 윔블던 우승으로 영국 테니스의 한을 풀었습니다.',
        detailedProfile: {
            oneLineSummary: '영국 테니스의 77년 한을 푼 영웅, 불가능을 가능으로 만든 "인조인간(Bionic Man)".',
            whyNotable: `
                <p><strong>"Big 4의 일원이자 불굴의 영웅"</strong></p>
                <p>앤디 머레이는 페더러, 나달, 조코비치라는 역사상 가장 위대한 세 명의 괴물들과 동시대에 경쟁하며 세계 1위까지 올랐던 유일한 인간입니다. 2013년 윔블던 우승으로 프레드 페리 이후 77년 만에 영국인 윔블던 챔피언이 되며 국민 영웅으로 등극했습니다.</p>
                <p>고관절 금속 이식 수술이라는 선수 생명이 끝날 위기를 겪고도, 피나는 재활 끝에 코트로 돌아와 다시 승리를 쌓아가는 그의 모습은 전 세계에 감동을 주었습니다.</p>
            `,
            playStyle: `
                <p><strong>"수비형 카운터 펀처 + 전술가 (Tactician)"</strong></p>
                <p>머레이는 투어 최고의 <strong>테니스 IQ</strong>를 가진 선수 중 한 명입니다. 상대의 강공을 끈질기게 받아넘기며 실수를 유도하고, 빈틈이 보이면 날카로운 카운터 샷이나 정교한 롭(Lob)으로 득점합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>리턴:</strong> 조코비치와 함께 투어 최고의 리터너로 꼽힙니다. 아무리 빠른 서브도 반사적으로 받아냅니다.</li>
                    <li><strong>백핸드:</strong> 매우 안정적이고 강력한 투핸드 백핸드를 가지고 있으며, 다운더라인 공격이 일품입니다.</li>
                    <li><strong>롭(Lob):</strong> 네트 앞에 나온 상대를 키 넘기는 탑스핀 롭은 그의 시그니처 무기입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '전술 (Tactics)', score: 10, description: '상대의 약점을 집요하게 파고드는 천재적인 두뇌.' },
                { name: '리턴 (Return)', score: 10, description: '서브 에이스를 허용하지 않는 철벽 리턴.' },
                { name: '수비 (Defense)', score: 10, description: '미친 활동량으로 모든 공을 건져냄.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '공격과 수비 모두 완벽한 백핸드.' },
                { name: '멘탈 (Mental)', score: 9, description: '코트 위에서 불평이 많지만 끝까지 포기하지 않음.' },
                { name: '서브 (Serve)', score: 8, description: '첫 서브는 강력하나 두 번째 서브가 약점.' }
            ],
            growthStory: `
                <p>스코틀랜드 던블레인 출신으로, 테니스 코치인 어머니 주디 머레이의 지도를 받으며 자랐습니다. 1996년 던블레인 초등학교 총기 난사 사건의 생존자라는 아픈 과거를 가지고 있습니다.</p>
                <p>주니어 시절부터 두각을 나타냈으며, 스페인 유학을 통해 클레이 코트 능력을 보완했습니다. 4번의 그랜드슬램 준우승 끝에 2012년 US 오픈에서 첫 메이저 타이틀을 따내며 '무관의 제왕' 설움을 씻어냈습니다.</p>
            `,
            signatureMatch: {
                title: '2013 윔블던 결승 vs 노박 조코비치',
                date: '2013. 07. 07',
                description: '영국 전체가 숨죽여 지켜본 경기. 세계 1위 조코비치를 상대로 세트 스코어 3-0 완승을 거두며, 영국인들의 77년 숙원이었던 윔블던 우승 트로피를 들어 올렸습니다.'
            },
            recentForm: `
                <p><strong>"아름다운 황혼기"</strong></p>
                <p>인공 고관절 수술 후 예전만 한 기량은 아니지만, 여전히 투어 레벨에서 승리할 수 있는 경쟁력을 보여주었습니다. 2024년 파리 올림픽을 끝으로 은퇴를 선언하며 전설적인 커리어의 마침표를 찍었습니다.</p>
            `
        }
    },
    'stan-wawrinka': {
        name: '스탄 바브린카', nameEn: 'Stan Wawrinka', country: 'Switzerland', countryFlag: '🇨🇭', gender: 'male',
        plays: 'Right-handed', backhand: 'One-handed',
        longBio: '대기만성형 스타, 스탄 바브린카. "Stanimal"이라는 별명처럼 폭발적인 파워와 예술적인 원핸드 백핸드로 그랜드슬램 3회 우승을 달성했습니다.',
        detailedProfile: {
            oneLineSummary: '예술적인 원핸드 백핸드와 묵직한 파워로 Big 4의 아성을 무너뜨린 "Stanimal".',
            whyNotable: `
                <p><strong>"Big 4 시대의 유일한 대항마"</strong></p>
                <p>스탄 바브린카는 페더러, 나달, 조코비치, 머레이가 지배하던 시대에 그들의 독주를 저지하고 3개의 그랜드슬램 타이틀을 획득한 유일한 선수입니다. 특히 결승전 승률 100%(3전 3승)라는 놀라운 집중력으로 큰 경기 강자의 면모를 보여주었습니다.</p>
                <p>그의 원핸드 백핸드는 테니스 역사상 가장 강력하고 아름다운 샷 중 하나로 꼽히며, 'Stan the Man', 'Stanimal' 등의 애칭으로 전 세계 팬들의 사랑을 받고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>바브린카의 플레이는 '묵직함' 그 자체입니다. 엄청난 상체 근력에서 나오는 파워풀한 그라운드스트로크는 상대를 베이스라인 뒤로 밀어냅니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>원핸드 백핸드:</strong> 그의 상징과도 같은 기술. 엄청난 라켓 스피드로 다운더라인 위너를 밥 먹듯이 만들어냅니다.</li>
                    <li><strong>포핸드:</strong> 백핸드에 가려져 있지만, 포핸드 역시 투어 최상위권의 파워와 회전을 자랑합니다.</li>
                    <li><strong>서브:</strong> 최고 시속 230km에 육박하는 강력한 첫 서브는 그의 공격적인 게임을 뒷받침합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: '투어 역사상 가장 무거운 공을 치는 선수 중 하나.' },
                { name: '백핸드 (Backhand)', score: 10, description: '타의 추종을 불허하는 역대 최고의 원핸드 백핸드.' },
                { name: '서브 (Serve)', score: 9, description: '클러치 상황에서 터지는 강력한 에이스.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '큰 경기에 강한 강심장, 하지만 기복이 있음.' },
                { name: '체력 (Stamina)', score: 9, description: '5세트 접전에서도 지치지 않는 "Stanimal".' },
                { name: '스피드 (Speed)', score: 7.5, description: '빠른 발보다는 묵직한 풋워크를 가짐.' }
            ],
            growthStory: `
                <p>스위스 로잔 근교의 농장에서 자랐습니다. 어린 시절에는 같은 국적의 '황제' 로저 페더러의 그늘에 가려져 있었지만, 꾸준한 노력으로 자신만의 입지를 다졌습니다.</p>
                <p>20대 후반의 늦은 나이에 전성기를 맞이한 대기만성형 선수입니다. 2014년 호주 오픈에서 나달을 꺾고 첫 메이저 우승을 차지하며 전설의 시작을 알렸고, 자신의 팔뚝에 새긴 사뮈엘 베케트의 명언처럼 "실패하라, 더 잘 실패하라(Fail better)"는 정신으로 끊임없이 도전했습니다.</p>
            `,
            signatureMatch: {
                title: '2015 롤랑가로스 결승 vs 노박 조코비치',
                date: '2015. 06. 07',
                description: '커리어 그랜드슬램을 노리던 천하무적 조코비치를 상대로 믿을 수 없는 위너들을 쏟아내며 3-1 역전승을 거두었습니다. 바브린카의 "인생 경기"로 회자됩니다.'
            },
            recentForm: `
                <p><strong>"마지막 불꽃"</strong></p>
                <p>30대 후반의 나이와 무릎 수술의 여파로 전성기 기량은 아니지만, 여전히 현역 선수로 활동하며 테니스에 대한 열정을 보여주고 있습니다. 가끔씩 번뜩이는 샷으로 팬들에게 옛 향수를 불러일으키고 있습니다.</p>
            `
        }
    },
    'kei-nishikori': {
        name: '니시코리 케이', nameEn: 'Kei Nishikori', country: 'Japan', countryFlag: '🇯🇵', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '아시아 남자 테니스의 자존심. 빠른 발과 뛰어난 리턴 능력, 그리고 시그니처인 "Air-K" 점프 샷으로 유명합니다.',
        detailedProfile: {
            oneLineSummary: '아시아 남자 테니스 역대 최고 순위(4위), 불리한 신체 조건을 극복한 "샷 메이킹의 마법사".',
            whyNotable: `
                <p><strong>"아시아 테니스의 선구자"</strong></p>
                <p>니시코리 케이는 2014년 US 오픈 준우승을 차지하며 아시아 남자 선수 최초로 그랜드슬램 결승에 진출했습니다. 서양 선수들에 비해 왜소한 체격(178cm)임에도 불구하고, 5세트 승률 역대 1위(현역 기준)라는 놀라운 정신력과 체력으로 세계 4위까지 올랐습니다.</p>
                <p>그의 성공은 수많은 아시아 테니스 키즈들에게 "할 수 있다"는 희망을 심어주었습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너 + 샷 메이커"</strong></p>
                <p>니시코리는 베이스라인에 바짝 붙어서 라이징 볼을 처리하는 능력이 탁월합니다. 박자를 뺏는 빠른 템포의 스트로크로 상대를 좌우로 흔듭니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 투어 전체에서도 손꼽히는 명품 투핸드 백핸드. 다운더라인 공격은 그의 가장 강력한 무기입니다.</li>
                    <li><strong>Air-K:</strong> 기회가 오면 공중으로 점프하며 포핸드 위너를 꽂아 넣는 '에어 케이'는 그의 트레이드마크입니다.</li>
                    <li><strong>리턴:</strong> 상대의 서브를 베이스라인 안쪽에서 받아치며 공격적인 포지션을 선점합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 9.5, description: '코트 위를 날아다니는 듯한 민첩성.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '조코비치, 머레이와 비견되는 백핸드 마스터.' },
                { name: '리턴 (Return)', score: 9, description: '공격적인 리턴으로 상대를 압박.' },
                { name: '멘탈 (Mental)', score: 9, description: '5세트의 사나이. 끝까지 포기하지 않음.' },
                { name: '파워 (Power)', score: 7.5, description: '체격의 한계로 인해 절대적인 파워는 부족.' },
                { name: '서브 (Serve)', score: 7, description: '그의 유일한 아킬레스건.' }
            ],
            growthStory: `
                <p>일본 시마네현 출신으로, 14세 때 소니 회장의 후원으로 미국 플로리다의 닉 볼리티에리 아카데미로 유학을 떠났습니다.</p>
                <p>'프로젝트 45'(이전 일본 최고 랭킹 46위를 넘어서겠다는 목표)를 훨씬 뛰어넘어 세계 4위까지 오르며 아시아 테니스의 역사를 새로 썼습니다. 잦은 부상으로 "유리몸"이라는 비판도 받지만, 챌린저 대회부터 다시 시작하여 재기를 꿈꾸는 그의 도전은 현재진행형입니다.</p>
            `,
            signatureMatch: {
                title: '2014 US 오픈 4강 vs 노박 조코비치',
                date: '2014. 09. 06',
                description: '테니스계를 충격에 빠뜨린 이변. 당대 최강 조코비치를 상대로 30도가 넘는 폭염 속에서 4세트 승리를 거두며 아시아 남자 선수 최초로 그랜드슬램 결승에 진출했습니다.'
            },
            recentForm: `
                <p><strong>"끝없는 도전"</strong></p>
                <p>큰 부상으로 인해 랭킹이 많이 떨어졌지만, 2024년 몬트리올 마스터스 8강에 오르는 등 여전한 클래스를 보여주고 있습니다. 그의 마지막 목표는 다시 한번 메이저 대회에서 경쟁력을 증명하는 것입니다.</p>
            `
        }
    },
    'soonwoo-kwon': {
        name: '권순우', nameEn: 'Soonwoo Kwon', country: 'Korea', countryFlag: '🇰🇷', image: '/images/players/soonwoo-kwon.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '대한민국 테니스의 새로운 역사를 쓴 "코리안 썬더". 이형택 이후 18년 만에 ATP 투어 우승을 차지했으며, 한국 선수 최초로 ATP 투어 2회 우승이라는 금자탑을 쌓은 명실상부한 한국 테니스의 에이스입니다.',
        detailedProfile: {
            oneLineSummary: '한국 테니스 최초 ATP 투어 2회 우승! 체격의 열세를 스피드와 "닥공"으로 극복한 불굴의 파이터.',
            whyNotable: `
                <p><strong>"한국 테니스의 역사를 새로 쓴 에이스"</strong></p>
                <p>권순우는 이형택 이후 오랫동안 침체기였던 한국 테니스에 혜성처럼 등장한 희망입니다. 2021년 아스타나 오픈 우승으로 18년 만에 한국인 ATP 투어 챔피언이 되었고, 2023년에는 애들레이드 인터내셔널 2에서 '러키 루저(Lucky Loser)'로 본선에 올라 우승까지 차지하는 기적을 쓰며 <strong>한국인 최초 ATP 투어 멀티 타이틀(2승)</strong> 보유자가 되었습니다.</p>
                <p>세계적인 선수들에 비해 왜소한 체격(180cm, 72kg)이지만, 한 박자 빠른 타이밍과 물러서지 않는 공격적인 플레이로 서양의 거구들을 쓰러뜨리는 모습은 짜릿한 쾌감을 선사합니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 속사포 (Aggressive Shotmaker)"</strong></p>
                <p>권순우의 테니스는 '빠름'과 '닥공(닥치고 공격)'으로 요약됩니다. 상대가 준비할 시간을 주지 않는 빠른 템포의 스트로크와 기민한 발놀림이 그의 전매특허입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 체중을 온전히 실어 때리는 포핸드는 체격 대비 놀라운 파워를 냅니다. 특히 라이징 볼을 공략해 박자를 뺏는 샷이 일품입니다.</li>
                    <li><strong>드롭샷:</strong> 빠른 발을 이용해 코트 안으로 들어가 구사하는 드롭샷은 성공률이 매우 높습니다.</li>
                    <li><strong>스피드:</strong> 투어 내에서도 수준급인 풋워크로 코트 구석구석을 커버하며, 수비 후 역습 전환이 매우 빠릅니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9, description: '체격을 뛰어넘는 파워와 박자 뺏기.' },
                { name: '스피드 (Speed)', score: 9, description: '투어 상위권의 민첩한 풋워크.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '러키 루저 우승 신화를 쓴 강심장.' },
                { name: '전술 (Tactics)', score: 8.5, description: '다양한 구질로 상대를 흔드는 영리함.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적이고 견고한 연결.' },
                { name: '서브 (Serve)', score: 7, description: '신체 조건상 절대적 위력은 다소 부족.' }
            ],
            growthStory: `
                <p>경상북도 상주 출신으로 초등학교 4학년 때 테니스를 시작했습니다. 고교 시절부터 두각을 나타냈으며, 건국대학교 재학 중 퓨처스 대회를 휩쓸며 프로 무대에 뛰어들었습니다.</p>
                <p>당진시청에 입단 후 체계적인 지원 속에 급성장했습니다. 챌린저 무대를 평정하고 ATP 투어에 도전하여, 실패를 두려워하지 않는 도전 정신으로 마침내 세계 52위(커리어 하이)에 오르는 기염을 토했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 애들레이드 인터내셔널 2 결승 vs 로베르토 바우티스타 아굿',
                date: '2023. 01. 14',
                description: '한국 테니스 역사의 명장면. 예선에서 탈락했으나 기권자 발생으로 본선에 합류(러키 루저)한 뒤 우승까지 차지하는 영화 같은 스토리를 완성했습니다. 결승에서 베테랑 바우티스타 아굿을 상대로 3세트 접전 끝에 승리하며 한국인 최초 투어 2회 우승을 달성했습니다.'
            },
            recentForm: `
                <p><strong>"부활을 위한 숨고르기"</strong></p>
                <p>어깨 부상 등으로 잠시 공백기가 있었고 랭킹이 하락했지만, 보호 랭킹(PR) 제도를 활용해 다시 투어 무대를 두드리고 있습니다. 여전히 공격적인 본능은 살아있으며, 건강만 회복한다면 언제든 다시 투어급 경쟁력을 보여줄 수 있는 선수입니다.</p>
            `
        }
    },
    'christopher-eubanks': {
        name: '크리스토퍼 유뱅크스', nameEn: 'Christopher Eubanks', country: 'United States', countryFlag: '🇺🇸', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '201cm의 장신에서 뿜어져 나오는 강력한 서브와 시원한 포핸드, 그리고 우아한 원핸드 백핸드가 특징입니다. 2023 윔블던 8강 돌풍의 주인공입니다.'
    },
    'emil-ruusuvuori': {
        name: '에밀 루수부오리', nameEn: 'Emil Ruusuvuori', country: 'Finland', countryFlag: '🇫🇮', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '핀란드를 대표하는 테니스 에이스. 군더더기 없는 깔끔한 폼에서 나오는 강력한 그라운드 스트로크가 주무기인 베이스라이너입니다.'
    },
    'miomir-kecmanovic': {
        name: '미오미르 케크마노비치', nameEn: 'Miomir Kecmanovic', country: 'Serbia', countryFlag: '🇷🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '세르비아 테니스의 계보를 잇는 선수. 탄탄한 기본기와 끈질긴 수비력, 그리고 기복 없는 플레이로 투어에서 꾸준한 성적을 내고 있습니다.'
    },
    'roman-safiullin': {
        name: '로만 사피울린', nameEn: 'Roman Safiullin', country: 'Russia', countryFlag: '🇷🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '러시아의 숨은 강자. 호주 오픈 주니어 챔피언 출신으로, 부상을 딛고 일어나 2023 윔블던 8강에 오르며 강력한 파워 히터의 면모를 과시했습니다.'
    },
    'laslo-djere': {
        name: '라슬로 제레', nameEn: 'Laslo Djere', country: 'Serbia', countryFlag: '🇷🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '불굴의 의지를 가진 선수. 개인적인 아픔을 극복하고 투어 우승을 차지한 인간 승리의 드라마를 썼으며, 클레이 코트에서 특히 끈질긴 모습을 보여줍니다.'
    },
    'daniel-evans': {
        name: '다니엘 에반스', nameEn: 'Daniel Evans', country: 'United Kingdom', countryFlag: '🇬🇧', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '영국의 테크니션. 작은 체구지만 정교한 슬라이스와 뛰어난 네트 플레이, 그리고 창의적인 경기 운영으로 상대를 혼란에 빠뜨리는 지능적인 플레이어입니다.'
    },
    'roberto-carballes-baena': {
        name: '로베르토 카르바예스 바에나', nameEn: 'Roberto Carballes Baena', country: 'Spain', countryFlag: '🇪🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '전형적인 스페인 클레이 코트 스페셜리스트. 지치지 않는 체력과 끈질긴 랠리 능력으로 상대를 진이 빠지게 만드는 "늪 테니스"의 구사자입니다.'
    },
    'nuno-borges': {
        name: '누노 보르헤스', nameEn: 'Nuno Borges', country: 'Portugal', countryFlag: '🇵🇹', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '포르투갈 테니스의 희망. 미국 대학 테니스(NCAA) 준우승 출신으로, 탄탄한 기본기와 공격적인 포핸드를 바탕으로 투어 무대에 성공적으로 안착했습니다.'
    },
    'mackenzie-mcdonald': {
        name: '매켄지 맥도날드', nameEn: 'Mackenzie McDonald', country: 'United States', countryFlag: '🇺🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '빠른 발과 박자 빠른 스트로크가 강점인 선수 "Mackie". 2023 호주 오픈에서 라파엘 나달을 꺾는 이변을 연출한 바 있는 실력파입니다.'
    },
    'max-purcell': {
        name: '맥스 퍼셀', nameEn: 'Max Purcell', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '단식과 복식을 모두 잘하는 호주의 테크니션. 윔블던 복식 챔피언 출신으로, 독특한 슬라이스와 서브 앤 발리 등 클래식한 변칙 플레이를 구사합니다.'
    },
    'dominik-koepfer': {
        name: '도미닉 쾨퍼', nameEn: 'Dominik Koepfer', country: 'Germany', countryFlag: '🇩🇪', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '독일의 파이터. 미국 대학 테니스 출신으로, 끈질긴 랠리와 포기하지 않는 투지로 상대를 끝까지 물고 늘어지는 플레이 스타일을 가졌습니다.'
    },
    'aleksandar-vukic': {
        name: '알렉산더 부키치', nameEn: 'Aleksandar Vukic', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '호주의 또 다른 유망주. 188cm의 키에서 나오는 강력한 서브와 포핸드가 주무기이며, 공격적인 스타일로 랭킹 상승세를 타고 있습니다.'
    },
    'yoshihito-nishioka': {
        name: '요시히토 니시오카', nameEn: 'Yoshihito Nishioka', country: 'Japan', countryFlag: '🇯🇵', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '일본의 왼손잡이 테크니션. 작은 신장의 약점을 엄청난 스피드와 지능적인 경기 운영, 그리고 끈질긴 수비로 극복하며 투어 타이틀을 획득했습니다.'
    },
    'alexander-shevchenko': {
        name: '알렉산더 셰브첸코', nameEn: 'Alexander Shevchenko', country: 'Kazakhstan', countryFlag: '🇰🇿', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '카자흐스탄을 대표하는 신예. 빠른 발과 공격적인 베이스라인 플레이로 투어 무대에서 빠르게 경쟁력을 입증하고 있는 선수입니다.'
    },
    'rinky-hijikata': {
        name: '린키 히지카타', nameEn: 'Rinky Hijikata', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '호주의 파이터. 2023 US 오픈 16강 진출로 이름을 알렸으며, 빠른 발과 넘치는 투지, 그리고 관중을 사로잡는 세리머니가 인상적입니다.'
    },
    'botic-van-de-zandschulp': {
        name: '보틱 반 더 잔츠슐프', nameEn: 'Botic van de Zandschulp', country: 'Netherlands', countryFlag: '🇳🇱', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '네덜란드의 실력파. 2021 US 오픈 8강 돌풍의 주역으로, 무표정한 얼굴에서 뿜어져 나오는 묵직하고 강력한 스트로크가 일품입니다.'
    },
    'yannick-hanfmann': {
        name: '야닉 한프만', nameEn: 'Yannick Hanfmann', country: 'Germany', countryFlag: '🇩🇪', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '인간 승리의 드라마. 태어날 때부터 청각 장애가 있었지만 이를 극복하고 프로 테니스 선수가 되었으며, 묵직한 서브와 파워풀한 샷을 구사합니다.'
    },
    'pavel-kotov': {
        name: '파벨 코토프', nameEn: 'Pavel Kotov', country: 'Russia', countryFlag: '🇷🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '러시아의 공격형 플레이어. 감정을 숨기지 않는 스타일과 강력한 그라운드 스트로크로 투어에서 존재감을 드러내고 있는 선수입니다.'
    },
    'aslan-karatsev': {
        name: '아슬란 카라체프', nameEn: 'Aslan Karatsev', country: 'Russia', countryFlag: '🇷🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '러시아의 비밀병기. 2021 호주 오픈 4강 신화를 쓰며 혜성처럼 등장했습니다. 탄탄한 종아리 근육에서 나오는 폭발적인 스트로크는 투어 최고 수준입니다.'
    },
    'fabian-marozsan': {
        name: '파비안 마로잔', nameEn: 'Fabian Marozsan', country: 'Hungary', countryFlag: '🇭🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '헝가리의 드롭샷 장인. 로마 마스터스에서 알카라스를 꺾는 대이변을 연출하며 세계를 놀라게 했으며, 예측 불가능한 샷 메이킹이 강점입니다.'
    },
    'sumit-nagal': {
        name: '수밋 나갈', nameEn: 'Sumit Nagal', country: 'India', countryFlag: '🇮🇳', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '인도 테니스의 희망. 빠른 발과 강한 포핸드 회전력을 바탕으로 투어 무대에서 아시아 선수의 저력을 보여주고 있습니다.'
    },
    'taro-daniel': {
        name: '타로 다니엘', nameEn: 'Taro Daniel', country: 'Japan', countryFlag: '🇯🇵', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '일본의 혼혈 베테랑. 191cm의 큰 키와 안정적인 스트로크를 겸비했으며, 조코비치를 꺾은 경험이 있는 저력 있는 선수입니다.'
    },
    'roberto-bautista-agut': {
        name: '로베르토 바우티스타 아굿', nameEn: 'Roberto Bautista Agut', country: 'Spain', countryFlag: '🇪🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '스페인의 철벽 "RBA". 엄청난 체력과 기복 없는 플레이, 그리고 강인한 멘탈로 톱 랭커들도 꺼려하는 아주 끈질기고 까다로운 승부사입니다.'
    },
    'marton-fucsovics': {
        name: '마르톤 푸초비치', nameEn: 'Marton Fucsovics', country: 'Hungary', countryFlag: '🇭🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '헝가리의 아이언맨. 투어에서 가장 완벽한 근육질 몸매를 자랑하며, 그 힘에서 나오는 파워풀한 서브와 스트로크가 주무기입니다.'
    },
    'borna-coric': {
        name: '보르나 초리치', nameEn: 'Borna Coric', country: 'Croatia', countryFlag: '🇭🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '크로아티아의 전사. "Baby Djokovic"이라 불릴 정도로 뛰어난 백핸드와 수비력을 가졌으며, 마스터스 1000 우승(신시내티) 경험이 있는 강자입니다.'
    },
    'gael-monfils': {
        name: '가엘 몽피스', nameEn: 'Gael Monfils', country: 'France', countryFlag: '🇫🇷', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 쇼맨 "La Monf". 믿을 수 없는 운동신경과 화려한 플레이로 관중들을 열광시키는 테니스계 최고의 엔터테이너입니다.',
        detailedProfile: {
            oneLineSummary: '중력을 거스르는 점프와 믿을 수 없는 샷, 테니스 역사상 최고의 "슈퍼 히어로" 엔터테이너.',
            whyNotable: `
                <p><strong>"La Monf, 코트 위의 예술가"</strong></p>
                <p>가엘 몽피스는 승패를 떠나 가장 보고 싶은 경기를 하는 선수입니다. 슬라이딩하며 치는 샷, 360도 회전 스매싱 등 묘기에 가까운 플레이로 관중들을 매료시킵니다.</p>
                <p>단순한 쇼맨이 아니라 세계 랭킹 6위까지 올랐던 실력파이며, 30대 후반의 나이에도 여전히 투어 우승을 차지하는 등 자기 관리 또한 철저한 "살아있는 전설"입니다.</p>
            `,
            playStyle: `
                <p><strong>"카운터 펀처 + 아크로바틱 디펜더"</strong></p>
                <p>엄청난 스피드와 탄력을 바탕으로 불가능해 보이는 공을 건져냅니다. 수비 위주의 플레이를 하다가 기습적으로 터뜨리는 강력한 포핸드는 그의 전매특허입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>운동신경:</strong> NBA 선수를 연상시키는 점프력과 유연성은 타의 추종을 불허합니다.</li>
                    <li><strong>포핸드:</strong> 시속 190km가 넘는 포핸드 위너를 칠 수 있는 파워를 감추고 있습니다.</li>
                    <li><strong>쇼맨십:</strong> 관중의 호응을 유도하고 즐기는 스타성은 경기 분위기를 순식간에 반전시킵니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 10, description: '순간 스피드와 점프력은 역대 최고 수준.' },
                { name: '엔터테인먼트 (Showmanship)', score: 10, description: '관중을 미치게 만드는 스타성.' },
                { name: '수비 (Defense)', score: 9.5, description: '코트 어디서든 공을 넘겨보냄.' },
                { name: '서브 (Serve)', score: 9, description: '최고 235km/h에 달하는 강서브 보유.' },
                { name: '집중력 (Focus)', score: 7, description: '분위기에 휩쓸려 경기를 내줄 때가 있음.' },
                { name: '전술 (Tactics)', score: 7.5, description: '본능에 의존하는 경향이 강함.' }
            ],
            growthStory: `
                <p>프랑스 파리 출신으로 아버지는 과들루프, 어머니는 마르티니크 출신입니다. 주니어 시절 3개 그랜드슬램을 석권하며 '천재' 소리를 들었습니다.</p>
                <p>프로 데뷔 후 잦은 부상으로 기대만큼의 성적을 못 냈다는 평도 있지만, 20년 가까이 Top 100을 유지하며 롱런하고 있습니다. 동료 선수 엘리나 스비톨리나와 결혼하여 '테니스 부부'로도 유명합니다.</p>
            `,
            signatureMatch: {
                title: '2014 US 오픈 8강 vs 로저 페더러',
                date: '2014. 09. 05',
                description: '비록 2-3으로 역전패했지만, 몽피스의 재능이 폭발한 경기. 페더러를 벼랑 끝까지 몰아붙이며 매치 포인트까지 잡았던, US 오픈 역사상 가장 재미있는 경기 중 하나로 꼽힙니다.'
            },
            recentForm: `
                <p><strong>"즐기는 베테랑"</strong></p>
                <p>2023년 스톡홀름 오픈 우승으로 12년 연속 투어 결승 진출 기록을 세웠습니다. 승패에 연연하기보다 테니스 자체를 즐기며 황혼기를 불태우고 있습니다.</p>
            `
        }
    },
    'matteo-berrettini': {
        name: '마테오 베레티니', nameEn: 'Matteo Berrettini', country: 'Italy', countryFlag: '🇮🇹', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 "망치(The Hammer)". 모델 같은 외모와 그에 걸맞은 파괴적인 포핸드, 강력한 서브로 윔블던 준우승을 차지한 스타 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '파괴적인 서브와 포핸드라는 "두 개의 망치"를 휘무르는 이탈리아의 다비드상.',
            whyNotable: `
                <p><strong>"이탈리아 테니스의 르네상스를 연 주역"</strong></p>
                <p>마테오 베레티니는 이탈리아 남자 선수 최초로 윔블던 결승(2021)에 진출하며 자국 테니스의 부흥을 이끌었습니다. 'The Hammer'라는 별명처럼 강력한 힘을 앞세운 플레이는 잔디 코트에서 특히 위력을 발휘합니다.</p>
                <p>그의 잘생긴 외모와 보스 같은 카리스마는 패션계에서도 주목받아, 휴고 보스(Hugo Boss)의 글로벌 앰버서더로도 활동하고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"빅 서버 + 포핸드 몬스터"</strong></p>
                <p>전형적인 '원투 펀치' 스타일입니다. 서브로 상대를 무너뜨리고, 포핸드로 마무리합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 시속 220km를 넘나드는 대포알 서브는 투어에서 가장 위력적인 무기 중 하나입니다.</li>
                    <li><strong>포핸드:</strong> 엄청난 라켓 헤드 스피드에서 나오는 탑스핀 포핸드는 '망치'처럼 무겁고 강력합니다.</li>
                    <li><strong>백핸드:</strong> 상대적으로 약점으로 꼽히지만, 정교한 슬라이스로 이를 보완하며 템포 조절을 합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 10, description: '브레이크가 거의 불가능한 수준의 서브 게임.' },
                { name: '포핸드 (Forehand)', score: 10, description: '걸리면 끝나는 필살기.' },
                { name: '파워 (Power)', score: 9.5, description: '순수 힘 대결에서는 밀리는 법이 없음.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '중요한 순간 서브로 위기를 탈출하는 대담함.' },
                { name: '체력 (Stamina)', score: 7.5, description: '잦은 부상이 발목을 잡음.' },
                { name: '백핸드 (Backhand)', score: 7, description: '슬라이스는 좋으나 공격력은 부족.' }
            ],
            growthStory: `
                <p>이탈리아 로마 출신으로, 전직 테니스 선수였던 부모님의 영향을 받았습니다. 늦게 꽃을 피운 편으로, 2019년 US 오픈 4강에 오르며 세계적인 주목을 받기 시작했습니다.</p>
                <p>이후 윔블던 준우승, 호주 오픈 4강 등 메이저 대회에서 꾸준히 성적을 냈으나, 복근과 손목 부상으로 긴 재활의 시간을 보내기도 했습니다. 최근 우승을 차지하며 부활의 신호탄을 쏘아 올렸습니다.</p>
            `,
            signatureMatch: {
                title: '2021 윔블던 결승 vs 노박 조코비치',
                date: '2021. 07. 11',
                description: '이탈리아 역사상 첫 윔블던 결승. 비록 조코비치의 벽에 막혀 준우승에 그쳤지만, 첫 세트를 따내며 디펜딩 챔피언을 긴장시켰던 명승부였습니다.'
            },
            recentForm: `
                <p><strong>"부활하는 거인"</strong></p>
                <p>2024년, 긴 부상 공백을 깨고 복귀하여 마라케시 오픈 우승을 차지했습니다. 여전한 서브 파워를 과시하며 잔디 시즌에서의 활약을 예고하고 있습니다.</p>
            `
        }
    },
    'felix-auger-aliassime': {
        name: '펠릭스 오제 알리아심', nameEn: 'Felix Auger-Aliassime', country: 'Canada', countryFlag: '🇨🇦', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '캐나다의 차세대 리더. 완벽한 신체 조건과 성실함, 그리고 폭발적인 재능을 겸비한 "FA2". 토니 나달의 지도를 받으며 계속 성장 중입니다.',
        detailedProfile: {
            oneLineSummary: '나달의 스승 토니 나달이 선택한 재능, 완벽한 피지컬과 성실함으로 무장한 캐나다의 영건.',
            whyNotable: `
                <p><strong>"준비된 슈퍼스타"</strong></p>
                <p>펠릭스 오제 알리아심은 주니어 시절부터 '완성형 선수'로 평가받았습니다. ATP 투어 결승에서 8연패를 당하는 불운의 징크스도 있었지만, 이를 극복하고 2022년 한 해에만 4승을 쓸어 담으며 알을 깨고 나왔습니다.</p>
                <p>라파엘 나달을 키워낸 '토니 나달'이 코치로 합류했다는 사실만으로도 그의 잠재력이 얼마나 큰지 알 수 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"다재다능한 올라운더 (Athletic All-Rounder)"</strong></p>
                <p>큰 키(193cm)와 유연함, 스피드를 모두 갖춘 완벽한 피지컬에서 나오는 테니스를 구사합니다. 특별한 약점이 없는 것이 강점입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 매우 부드러운 폼에서 나오는 강서브는 정확도와 파워를 모두 겸비했습니다.</li>
                    <li><strong>포핸드:</strong> 타점을 앞에서 잡아 채는 공격적인 포핸드로 경기를 주도합니다.</li>
                    <li><strong>움직임:</strong> 큰 키에도 불구하고 풋워크가 매우 가볍고 빠릅니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '피지컬 (Physicality)', score: 9.5, description: '현대 테니스에 최적화된 신체 조건.' },
                { name: '서브 (Serve)', score: 9, description: '에이스 생산 능력이 탁월함.' },
                { name: '포핸드 (Forehand)', score: 9, description: '공격의 시발점이자 마무리 무기.' },
                { name: '스피드 (Speed)', score: 9, description: '코트 커버리지가 매우 좋음.' },
                { name: '멘탈 (Mental)', score: 8, description: '결승전 징크스는 극복했으나 기복이 있음.' },
                { name: '백핸드 (Backhand)', score: 8, description: '견고하지만 결정력은 포핸드보다 낮음.' }
            ],
            growthStory: `
                <p>캐나다 몬트리올 출신으로 아버지는 토고, 어머니는 캐나다인입니다. 14세에 챌린저 투어 본선 승리를 거두며 최연소 기록을 갈아치웠습니다.</p>
                <p>데뷔 초 '결승전 전패'라는 꼬리표가 따라다녔으나, 끊임없는 노력과 멘탈 관리로 2022년 로테르담 오픈에서 첫 우승을 차지하며 징크스를 깼습니다. 캐나다 국가대표로서 데이비스 컵 우승을 이끌기도 했습니다.</p>
            `,
            signatureMatch: {
                title: '2022 US 오픈 2라운드 vs 잭 드레이퍼',
                date: '2022. 09. 01',
                description: '그의 잠재력이 폭발했던 시기. 압도적인 기량으로 상대를 제압하며 생애 첫 그랜드슬램 4강(2021 US 오픈)에 이어 꾸준한 메이저 경쟁력을 증명했습니다.'
            },
            recentForm: `
                <p><strong>"재도약 준비"</strong></p>
                <p>2023년 부상 등으로 잠시 주춤하며 랭킹이 떨어졌지만, 2024년 마드리드 마스터스 결승에 진출하며 다시 폼을 끌어올리고 있습니다. 언제든 Top 5에 복귀할 수 있는 저력을 가진 선수입니다.</p>
            `
        }
    },

    'denis-shapovalov': {
        name: '데니스 샤포발로프', nameEn: 'Denis Shapovalov', country: 'Canada', countryFlag: '🇨🇦', gender: 'male',
        plays: 'Left-handed', backhand: 'One-handed',
        longBio: '코트 위의 야생마 "El Shapo". 폭발적인 점프 원핸드 백핸드와 다이나믹한 플레이로 팬들의 사랑을 받는 공격형 테니스의 진수입니다.',
        detailedProfile: {
            oneLineSummary: '하늘을 나는 듯한 점프 원핸드 백핸드, 긁히는 날에는 누구도 막을 수 없는 "El Shapo".',
            whyNotable: `
                <p><strong>"가장 화려한 원핸드 백핸드의 소유자"</strong></p>
                <p>데니스 샤포발로프는 현역 선수 중 가장 다이나믹한 폼을 가진 선수 중 하나입니다. 특히 베이스라인에서 도움닫기 후 공중으로 날아올라 때리는 '점핑 원핸드 백핸드'는 그의 트레이드마크이자 테니스 하이라이트 필름의 단골 소재입니다.</p>
                <p>랩 음악을 만들어 발표할 정도로 끼가 넘치며, 코트 위에서도 감정을 숨기지 않는 열정적인 모습으로 'El Shapo'라는 애칭으로 불립니다.</p>
            `,
            playStyle: `
                <p><strong>"하이 리스크 하이 리턴 (Aggressive All-Court)"</strong></p>
                <p>샤포발로프의 사전에는 '수비'가 없습니다. 서브부터 리턴, 스트로크까지 모든 샷을 풀스윙으로 때려 위너를 노립니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 왼손잡이 특유의 슬라이스 서브와 강력한 플랫 서브를 섞어 구사합니다.</li>
                    <li><strong>원핸드 백핸드:</strong> 타점이 매우 높고 공격적입니다. 다운더라인 위너가 터지는 날은 승리를 장담합니다.</li>
                    <li><strong>포핸드:</strong> 백핸드 못지않게 강력한 파워를 자랑하며, 회전량이 많아 바운드 후 크게 튀어 오릅니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: '모든 샷을 전력으로 때리는 파괴력.' },
                { name: '스타성 (Star Quality)', score: 10, description: '화려한 플레이로 관중을 사로잡음.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '예술에 가까운 점프 원핸드 백핸드.' },
                { name: '서브 (Serve)', score: 9, description: '왼손잡이 이점을 살린 까다로운 서브.' },
                { name: '안정성 (Consistency)', score: 5, description: '위너만큼 에러도 많이 쏟아냄.' },
                { name: '멘탈 (Mental)', score: 6, description: '경기가 안 풀릴 때 스스로 무너지는 경향.' }
            ],
            growthStory: `
                <p>이스라엘 텔아비브에서 태어나 캐나다로 이주했습니다. 어머니가 직접 테니스 코치로서 그를 지도했습니다. 2017년 몬트리올 마스터스에서 라파엘 나달을 꺾으며 혜성처럼 등장, '넥스트 제너레이션'의 선두주자로 주목받았습니다.</p>
                <p>이후 윔블던 4강(2021)에 오르며 가능성을 증명했지만, 잦은 기복과 부상을 줄이는 것이 과제입니다.</p>
            `,
            signatureMatch: {
                title: '2017 몬트리올 마스터스 16강 vs 라파엘 나달',
                date: '2017. 08. 11',
                description: "전 세계에 자신의 이름을 알린 경기. 18세의 와일드카드 선수가 홈 관중 앞에서 '흙신' 나달을 상대로 믿을 수 없는 위너들을 쏟아내며 역전승을 거둔, 캐나다 테니스 역사상 가장 짜릿한 순간 중 하나입니다."
            },
            recentForm: `
                <p><strong>"절치부심"</strong></p>
                <p>2023년 무릎 부상으로 랭킹이 100위권 밖으로 밀려났으나, 2024년 복귀 후 다시 랭킹을 끌어올리고 있습니다. 여전한 폭발력을 보여주며 재기를 노리고 있습니다.</p>
            `
        }
    },
    'alexander-bublik': {
        name: '알렉산더 버블릭', nameEn: 'Alexander Bublik', country: 'Kazakhstan', countryFlag: '🇰🇿', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 악동이자 천재. 언더암 서브, 트위너 등 예측할 수 없는 변칙 플레이로 상대를 혼란에 빠뜨리는 "Trickster"입니다.',
        detailedProfile: {
            oneLineSummary: '언더암 서브와 묘기 샷의 달인, 테니스를 가장 창의적으로(혹은 이상하게) 치는 "The Trickster".',
            whyNotable: `
                <p><strong>"지루한 테니스는 거부한다"</strong></p>
                <p>알렉산더 버블릭은 투어에서 가장 독특한 캐릭터입니다. "테니스가 싫다"고 공공연하게 말하면서도(상금을 위해 뛴다고 농담 반 진담 반으로 말함), 코트 위에서는 누구보다 천재적인 감각으로 묘기 샷을 선보입니다.</p>
                <p>불리한 상황에서 갑자기 언더암 서브를 넣거나, 라켓 손잡이로 공을 치는 등 기상천외한 플레이로 관중들을 웃게 만들고 상대를 당황시킵니다.</p>
            `,
            playStyle: `
                <p><strong>"예측 불가능한 변칙 플레이어"</strong></p>
                <p>정석적인 랠리를 싫어합니다. 드롭샷, 로브, 슬라이스 등 온갖 기술을 섞어 상자의 리듬을 깨는 데 주력합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 투어 최상위권의 서브 파워를 가졌습니다. 세컨드 서브에서도 시속 220km를 때리는 도박적인 플레이를 즐깁니다.</li>
                    <li><strong>터치:</strong> 드롭샷 감각은 천부적입니다.</li>
                    <li><strong>변칙:</strong> 언더암 서브 빈도가 투어에서 가장 높으며, 성공률도 꽤 높습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '창의성 (Creativity)', score: 10, description: '상상 그 이상의 플레이를 보여줌.' },
                { name: '서브 (Serve)', score: 9.5, description: '에이스와 더블 폴트 모두 많음.' },
                { name: '터치 (Touch)', score: 9.5, description: '드롭샷과 발리 감각이 매우 뛰어남.' },
                { name: '파워 (Power)', score: 8.5, description: '마음먹고 치면 매우 강력함.' },
                { name: '멘탈 (Mental)', score: 5, description: '경기가 안 풀리면 라켓을 부수거나 대충 침.' },
                { name: '성실함 (Effort)', score: 4, description: '최선을 다하지 않는 것처럼 보일 때가 있음.' }
            ],
            growthStory: `
                <p>러시아 가치나 출신이나, 지원을 받기 위해 카자흐스탄으로 국적을 옮겼습니다. 주니어 시절부터 재능은 인정받았으나, 자유분방한 성격 탓에 코치들과 마찰이 잦았습니다.</p>
                <p>하지만 2022년 몽펠리에 오픈에서 즈베레프를 꺾고 첫 우승을 차지하며 재능을 증명했고, 2023년 할레 오픈(잔디)에서도 루블레프를 꺾고 우승하며 큰 무대에서도 통하는 실력자임을 보여주었습니다.</p>
            `,
            signatureMatch: {
                title: '2023 할레 오픈 결승 vs 안드레이 루블레프',
                date: '2023. 06. 25',
                description: '버블릭의 재능이 만개한 대회. 결승전에서 강력한 우승 후보 루블레프를 상대로 서브와 변칙 플레이를 적절히 섞어가며 승리, 생애 첫 ATP 500 시리즈 타이틀을 획득했습니다.'
            },
            recentForm: `
                <p><strong>"커리어 하이"</strong></p>
                <p>2024년 몽펠리에 오픈 우승, 두바이 챔피언십 결승 진출 등 시즌 초반 커리어 최고의 성적을 거두며 랭킹 20위권 내에 안착했습니다.</p>
            `
        }
    },
    'jack-draper': {
        name: '잭 드레이퍼', nameEn: 'Jack Draper', country: 'United Kingdom', countryFlag: '🇬🇧', gender: 'male',
        plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '영국 테니스의 새로운 희망. 앤디 머레이의 뒤를 이을 재목으로 평가받으며, 강력한 왼손 서브와 묵직한 포핸드가 강점인 라이징 스타입니다.',
        detailedProfile: {
            oneLineSummary: '앤디 머레이가 지목한 영국의 후계자, 왼손에서 뿜어져 나오는 묵직한 파워.',
            whyNotable: `
                <p><strong>"영국 테니스의 차세대 기수"</strong></p>
                <p>잭 드레이퍼는 어린 시절부터 영국 테니스계의 기대를 한 몸에 받아온 엘리트 유망주입니다. 193cm의 훌륭한 신체 조건과 왼손잡이라는 이점, 그리고 침착한 멘탈까지 갖춰 차기 Grand Slam 챔피언 후보로 거론됩니다.</p>
                <p>우상인 앤디 머레이의 멘토링을 받으며 빠르게 성장하고 있어, 영국 팬들의 사랑을 독차지하고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"파워풀한 왼손잡이 베이스라이너"</strong></p>
                <p>나달을 연상시키는 묵직한 왼손 포핸드가 주무기입니다. 하지만 나달보다는 좀 더 플랫하고 공격적인 성향을 띱니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 왼손잡이 특유의 슬라이스 서브가 코트 밖으로 빠져나가며 상대를 괴롭힙니다.</li>
                    <li><strong>포핸드:</strong> 매우 강한 파워를 실어 때리는 포핸드 역크로스 샷이 일품입니다.</li>
                    <li><strong>피지컬:</strong> 어린 나이임에도 완성된 근육질 몸매를 가지고 있어 힘 대결에서 밀리지 않습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9, description: '타고난 힘이 장사.' },
                { name: '서브 (Serve)', score: 9, description: '왼손잡이 이점이 더해져 매우 까다로움.' },
                { name: '포핸드 (Forehand)', score: 9, description: '경기를 주도하는 확실한 무기.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '어린 나이답지 않게 차분함.' },
                { name: '체력 (Stamina)', score: 7, description: '잦은 부상이 성장의 걸림돌.' },
                { name: '네트 플레이 (Net)', score: 7.5, description: '준수하지만 발전이 필요함.' }
            ],
            growthStory: `
                <p>영국 런던 근교 서튼 출신으로, 아버지는 영국 테니스 협회(LTA) CEO를 지낸 로저 드레이퍼, 어머니는 주니어 테니스 챔피언 출신입니다.</p>
                <p>2018년 윔블던 주니어 준우승으로 두각을 나타냈고, 2022년 넥스트 제너레이션 파이널스에 진출하며 세계 무대에 이름을 알렸습니다. 2024년 슈투트가르트 오픈에서 베레티니를 꺾고 생애 첫 투어 우승을 차지했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 슈투트가르트 오픈 결승 vs 마테오 베레티니',
                date: '2024. 06. 16',
                description: '잔디 코트 강자 베레티니를 상대로 접전 끝에 2-1 승리를 거두며 생애 첫 ATP 투어 타이틀을 획득했습니다. 영국 남자 테니스의 자존심을 세운 날입니다.'
            },
            recentForm: `
                <p><strong>"잠재력 폭발"</strong></p>
                <p>첫 우승의 기세를 몰아 랭킹을 급격히 끌어올리고 있습니다. 부상만 없다면 Top 10 진입도 머지않아 보이는 상승세입니다.</p>
            `
        }
    },
    'arthur-fils': {
        name: '아서 필스', nameEn: 'Arthur Fils', country: 'France', countryFlag: '🇫🇷', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '프랑스 테니스의 미래. 폭발적인 피지컬과 두려움 없는 공격 테니스로 최연소 Top 50에 진입한 괴물 신인입니다.',
        detailedProfile: {
            oneLineSummary: '프랑스가 기다려온 대형 유망주, 터질듯한 피지컬과 파워로 무장한 "Next Tsonga".',
            whyNotable: `
                <p><strong>"제2의 총가(Tsonga)"</strong></p>
                <p>아서 필스는 조-윌프리드 총가를 연상시키는 강력한 피지컬과 파워풀한 플레이 스타일 때문에 '제2의 총가'로 불립니다. 2004년생이라는 어린 나이에 ATP 투어 우승(2023 리옹)을 차지하며 프랑스 테니스의 차세대 에이스로 낙점받았습니다.</p>
                <p>웃음 많고 에너지 넘치는 성격으로 스타성까지 겸비했습니다.</p>
            `,
            playStyle: `
                <p><strong>"피지컬 몬스터 + 파워 히터"</strong></p>
                <p>허벅지 근육이 매우 발달해 있어 폭발적인 하체 힘에서 나오는 스트로크가 압권입니다. 베이스라인 안쪽으로 파고들며 공격하는 것을 선호합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 엄청난 스피드의 포핸드 위너를 뿜어냅니다. 그의 가장 큰 득점원입니다.</li>
                    <li><strong>스피드:</strong> 육중한 체격에 비해 발이 매우 빠르고 움직임이 민첩합니다.</li>
                    <li><strong>서브:</strong> 아직 완성형은 아니지만 최고 220km에 달하는 잠재력을 가졌습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9.5, description: '통뼈에서 나오는 묵직한 힘.' },
                { name: '피지컬 (Physicality)', score: 9.5, description: '성인 무대에서도 밀리지 않는 완성된 몸.' },
                { name: '포핸드 (Forehand)', score: 9, description: '아주 강력한 무기.' },
                { name: '스피드 (Speed)', score: 9, description: '빠르고 탄력적인 움직임.' },
                { name: '경험 (Experience)', score: 6, description: '아직 경기 운영의 노련함은 부족.' },
                { name: '백핸드 (Backhand)', score: 7.5, description: '준수하지만 포핸드만큼 위협적이진 않음.' }
            ],
            growthStory: `
                <p>프랑스 파리 근교 콩드-쉬르-노로에서 태어났습니다. 2020년 오렌지 보울(세계적인 주니어 대회) 우승으로 일찌감치 두각을 나타냈습니다.</p>
                <p>2023년 홈에서 열린 리옹 오픈에서 우승하며 10대의 나이에 투어 타이틀을 거머쥐었고, 넥스트 제너레이션 파이널스 준우승을 차지하며 세계 무대에 자신의 이름을 각인시켰습니다.</p>
            `,
            signatureMatch: {
                title: '2023 리옹 오픈 결승 vs 프란시스코 세룬돌로',
                date: '2023. 05. 27',
                description: '생애 첫 투어 우승. 홈 팬들의 열광적인 응원 속에 클레이 강자 세룬돌로를 꺾으며 최연소 프랑스 우승 기록을 세웠습니다.'
            },
            recentForm: `
                <p><strong>"무서운 속도로 성장 중"</strong></p>
                <p>매 대회마다 성장하는 모습을 보여주고 있습니다. 특히 클레이와 하드 코트를 가리지 않고 좋은 성적을 내며 올라운더로서의 가능성을 보여줍니다.</p>
            `
        }
    },
    'sebastian-korda': {
        name: '세바스찬 코다', nameEn: 'Sebastian Korda', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/sebastian-korda.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '스포츠 명문 코다 가문의 막내. 아버지 페트르 코다의 재능을 물려받아 부드러운 스윙과 정교한 기술을 구사하는 올라운드 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '아버지(테니스 챔피언)와 어머니(올림픽 테니스 선수)의 DNA를 물려받은 "테니스 금수저"이자 실력파.',
            whyNotable: `
                <p><strong>"로열 패밀리의 완성작"</strong></p>
                <p>아버지는 1998 호주 오픈 챔피언 페트르 코다, 어머니는 올림픽 테니스 선수 레지나 라이크르토바, 두 누나(넬리, 제시카)는 LPGA 골프 세계 랭킹 1위를 다투는 스타입니다. 그야말로 '스포츠 로열 패밀리'의 막내입니다.</p>
                <p>하지만 단순히 배경만 화려한 것이 아닙니다. 2018 호주 오픈 주니어 우승을 차지하며 아버지의 발자취를 따라가고 있으며, 투어에서도 매끄러운 폼과 뛰어난 재능으로 인정받고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"클래식한 올라운더"</strong></p>
                <p>현대 테니스에서 보기 드물게 부드럽고 우아한 폼을 가지고 있습니다. 힘으로 윽박지르기보다는 타이밍과 코스로 승부합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 투머들이 뽑은 '가장 부드러운 투핸드 백핸드' 중 하나입니다. 수비와 공격 모두 완벽합니다.</li>
                    <li><strong>발리:</strong> 네트 플레이를 두려워하지 않으며, 터치 감각이 매우 좋습니다.</li>
                    <li><strong>리턴:</strong> 베이스라인 안으로 들어와서 공격적으로 리턴하는 것을 즐깁니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '테크닉 (Technique)', score: 9.5, description: '교과서적이고 군더더기 없는 폼.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '그의 가장 큰 장점.' },
                { name: '네트 플레이 (Net)', score: 9, description: '복식 경기에서도 강점 발휘.' },
                { name: '전술 (Tactics)', score: 8.5, description: '영리하게 경기를 풀어감.' },
                { name: '파워 (Power)', score: 8, description: '아직 피지컬이 완성되지 않아 파워는 평범.' },
                { name: '체력 (Stamina)', score: 7.5, description: '5세트 경기에서 체력 저하가 눈에 띔.' }
            ],
            growthStory: `
                <p>미국 플로리다에서 자랐습니다. 원래 아이스하키를 했으나 9세 때 아버지와 함께 US 오픈을 관람한 후 테니스로 전향했습니다.</p>
                <p>2021년 파르마 오픈에서 첫 우승을 차지했고, 2023 호주 오픈에서 8강에 오르며 메이저 경쟁력을 입증했습니다. 안드레 애거시의 지도를 받으며 계속 성장하고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2023 호주 오픈 3라운드 vs 다닐 메드베데프',
                date: '2023. 01. 20',
                description: '전년도 준우승자이자 우승 후보 메드베데프를 3-0 셧아웃으로 잡아낸 이변의 경기. 완벽한 경기력으로 팬들에게 자신의 이름을 확실하게 각인시켰습니다.'
            },
            recentForm: `
                <p><strong>"꾸준한 상승세"</strong></p>
                <p>손목 부상에서 회복한 후 다시 랭킹을 끌어올리고 있습니다. 2024년 윔블던 등 잔디 시즌에서도 좋은 모습을 보여주며 올라운더로서의 면모를 과시했습니다.</p>
            `
        }
    },
    'iga-swiatek': {
        name: '이가 시비옹테크', nameEn: 'Iga Swiatek', country: 'Poland', countryFlag: '🇵🇱', image: '/images/players/iga-swiatek.png', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '폴란드 최초의 그랜드슬램 단식 우승자이자 현 여자 테니스 세계 랭킹 1위. "흙신" 라파엘 나달을 연상시키는 강력한 탑스핀 포핸드와 압도적인 활동량으로 클레이 코트에서 절대적인 강세를 보입니다. 37연승이라는 21세기 최다 연승 기록을 보유하고 있습니다.',
        detailedProfile: {
            oneLineSummary: '나달의 후계자라 불리는 "클레이 여제", 압도적인 포핸드와 멘탈로 투어를 지배하다.',
            whyNotable: `
                <p><strong>"21세기 여자 테니스의 새로운 지배자"</strong></p>
                <p>이가 시비옹테크는 단순한 랭킹 1위가 아닙니다. 그녀는 세레나 윌리엄스, 애슐리 바티 은퇴 이후 춘추전국시대였던 여자 테니스를 평정하고 독주 체제를 구축했습니다. 특히 <strong>2022년 37연승</strong> 기록은 21세기 최장 연승 기록으로, 그녀의 압도적인 기량을 증명합니다.</p>
                <p>무엇보다 클레이 코트에서의 그녀는 '난공불락'입니다. 롤랑가로스(프랑스 오픈)에서 보여주는 퍼포먼스는 라파엘 나달의 전성기를 떠올리게 하며, 실제로 나달을 우상으로 삼아 비슷한 스타일의 헤비 탑스핀을 구사합니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner) + 헤비 탑스핀"</strong></p>
                <p>시비옹테크의 가장 큰 무기는 <strong>남자 선수들에 버금가는 RPM(회전수)의 포핸드</strong>입니다. 그녀의 포핸드는 높게 튀어 오르며 상대를 베이스라인 뒤로 밀어냅니다. 여기에 투어 최고 수준의 풋워크가 더해져, 수비 상황에서도 순식간에 공격으로 전환하는 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 평균 3000 RPM 이상의 탑스핀을 생성하며, 이는 WTA 평균을 훨씬 웃도는 수치입니다.</li>
                    <li><strong>리턴:</strong> 상대의 세컨드 서브를 무자비하게 공략하여 브레이크를 만들어냅니다.</li>
                    <li><strong>멘탈:</strong> 스포츠 심리학자와 동행하며 멘탈을 관리할 정도로 심리적인 부분에 집중하며, 경기 중 흔들리지 않는 평정심을 유지합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 10, description: 'WTA 최고 수준의 탑스핀과 파워.' },
                { name: '백핸드 (Backhand)', score: 9, description: '직선과 대각선 모두 정교하게 찌르는 안정적인 무기.' },
                { name: '스피드 (Speed)', score: 9.5, description: '코트 커버리지가 뛰어나며 슬라이딩 능력이 발군.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '중요한 포인트에서 더 강해지는 강심장.' },
                { name: '서브 (Serve)', score: 7.5, description: '유일한 약점으로 꼽히지만, 킥 서브를 활용해 보완 중.' },
                { name: '전술 (Tactics)', score: 9, description: '상대의 약점을 파고드는 지능적인 플레이.' }
            ],
            growthStory: `
                <p>폴란드 바르샤바 출신인 그녀는 조정 선수였던 아버지의 영향으로 운동을 시작했습니다. 주니어 시절부터 두각을 나타내며 2018년 윔블던 주니어 단식 우승을 차지했습니다.</p>
                <p>세계 무대에 이름을 알린 것은 <strong>2020년 프랑스 오픈</strong>이었습니다. 당시 시드조차 받지 못한 19세의 나이로 출전해, 단 한 세트도 내주지 않는 '무실세트 우승'이라는 기적을 썼습니다. 이는 1992년 모니카 셀레스 이후 최연소 챔피언 기록이자, 폴란드 테니스 역사상 최초의 그랜드슬램 단식 우승이었습니다.</p>
            `,
            signatureMatch: {
                title: '2020 프랑스 오픈 결승 vs 소피아 케닌',
                date: '2020. 10. 10',
                description: '그녀의 전설이 시작된 경기. 호주 오픈 우승자였던 케닌을 상대로 6-4, 6-1 완승을 거두며 세계 테니스계에 충격을 안겼습니다. 이 경기에서 보여준 공격적인 위너와 드롭샷은 그녀의 트레이드마크가 되었습니다.'
            },
            recentForm: `
                <p><strong>"여왕의 독주"</strong></p>
                <p>2024년에도 그녀는 여전히 강력합니다. 시즌 초반부터 꾸준히 우승 트로피를 수집하고 있으며, 특히 클레이 시즌이 다가올수록 그녀의 경기력은 정점에 달합니다. 서브에서의 기복만 줄인다면 당분간 그녀의 독주를 막기는 어려워 보입니다.</p>
            `
        }
    },
    'aryna-sabalenka': {
        name: '아리나 사발렌카', nameEn: 'Aryna Sabalenka', country: 'Belarus', countryFlag: '🇧🇾', image: '/images/players/aryna-sabalenka.png', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 파워 테니스의 대명사. 폭발적인 서브와 포핸드로 공격적인 플레이를 구사하며 하드 코트 그랜드슬램에서 눈부신 성과를 거두었습니다.',
        detailedProfile: {
            oneLineSummary: '코트 위를 지배하는 압도적인 "호랑이", 파워 테니스의 새로운 표준.',
            whyNotable: `
                <p><strong>"여자 테니스 최고의 파워 히터"</strong></p>
                <p>아리나 사발렌카는 현역 여자 선수 중 가장 강력한 그라운드 스트로크 파워를 보유한 선수 중 한 명입니다. 그녀의 포효하는 듯한 기합 소리만큼이나 공의 위력도 압도적이며, 특히 하드 코트에서 그녀를 막을 수 있는 선수는 손에 꼽습니다.</p>
                <p>과거에는 멘탈과 서브 난조(더블 폴트)로 인해 스스로 무너지는 경우가 많았으나, 2023년을 기점으로 이를 완벽하게 극복하고 호주 오픈 2연패를 달성하며 명실상부한 '하드 코트의 여왕'으로 등극했습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner) + 빅 서브"</strong></p>
                <p>사발렌카의 테니스는 '공격, 공격, 또 공격'입니다. 평균 시속 190km에 육박하는 강력한 퍼스트 서브와, 남자 선수와 비교해도 뒤지지 않는 묵직한 포핸드가 그녀의 주무기입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 한때 게임당 10개가 넘는 더블 폴트를 범하며 '입스(Yips)' 위기까지 겪었으나, 폼 교정 후 이제는 투어에서 가장 위협적인 서브를 구사합니다.</li>
                    <li><strong>스트로크:</strong> 플랫하고 낮게 깔리는 샷보다는 상대를 힘으로 밀어내는 묵직한 샷을 구사합니다.</li>
                    <li><strong>멘탈:</strong> 감정 기복이 심했던 과거와 달리, 이제는 경기 중에도 미소를 잃지 않는 여유와 침착함을 보여줍니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: 'WTA 투어 최강의 스트로크 파워.' },
                { name: '서브 (Serve)', score: 9.5, description: '약점에서 강점으로 완벽하게 진화한 무기.' },
                { name: '포핸드 (Forehand)', score: 10, description: '상대를 베이스라인 밖으로 밀어내는 압도적인 힘.' },
                { name: '멘탈 (Mental)', score: 9, description: '약점을 극복하고 메이저 우승을 일궈낸 집념.' },
                { name: '스피드 (Speed)', score: 8.5, description: '큰 키에 비해 준수한 코트 커버 능력.' },
                { name: '네트 플레이 (Net Play)', score: 8, description: '복식 경험을 바탕으로 한 준수한 발리 능력.' }
            ],
            growthStory: `
                <p>벨라루스 민스크 출신의 사발렌카는 공격적인 스타일로 일찍부터 주목받았으나, 불안정한 제구력이 발목을 잡았습니다. 특히 2022년에는 서브 입스(Yips)로 인해 극심한 슬럼프를 겪었습다.</p>
                <p>그러나 그녀는 생체 역학 전문가와 멘탈 코치의 도움을 받아 서브 폼을 완전히 뜯어고쳤고, 이는 그녀의 커리어를 뒤바꾼 신의 한 수가 되었습니다. 단점을 극복하고 세계 1위까지 올랐던 그녀의 스토리는 '극복의 아이콘'으로 불리기에 충분합니다.</p>
            `,
            signatureMatch: {
                title: '2024 호주 오픈 결승 vs 정친원',
                date: '2024. 01. 27',
                description: '대회 내내 단 한 세트도 내주지 않는 완벽한 경기력으로 우승을 차지했습니다. 결승전에서도 압도적인 파워로 상대를 제압하며 호주 오픈 2연패를 달성, 하드 코트 여제로서의 위상을 공고히 했습니다.'
            },
            recentForm: `
                <p><strong>"파죽지세"</strong></p>
                <p>호주 오픈 우승 이후에도 꾸준히 상위권 성적을 유지하고 있습니다. 이가 시비옹테크, 엘레나 리바키나와 함께 'WTA 빅3'를 구축하며 매 대회 강력한 우승 후보로 거론됩니다.</p>
            `
        }
    },
    'coco-gauff': {
        name: '코코 가우프', nameEn: 'Coco Gauff', country: 'United States', countryFlag: '🇺🇸', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '미국의 천재 테니스 소녀에서 슈퍼스타로. 10대 시절부터 세계적인 주목을 받았으며, 놀라운 운동신경과 강력한 백핸드를 보유하고 있습니다.',
        detailedProfile: {
            oneLineSummary: '10대 천재 소녀에서 미국의 아이콘으로. 폭발적인 운동신경으로 코트를 지배하는 슈퍼스타.',
            whyNotable: `
                <p><strong>"세레나 윌리엄스의 뒤를 잇는 미국의 희망"</strong></p>
                <p>코코 가우프는 2019년, 불과 15세의 나이로 윔블던 본선에 진출해 비너스 윌리엄스를 꺾으며 전 세계적인 신드롬을 일으켰습니다. 그 후 끊임없는 성장 끝에 2023 US 오픈에서 생애 첫 그랜드슬램 우승을 차지하며, 단순한 유망주가 아닌 진정한 챔피언임을 증명했습니다.</p>
                <p>경기력뿐만 아니라 사회 문제에 적극적으로 목소리를 내는 성숙한 태도로, 코트 밖에서도 많은 사람들의 롤모델이 되고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"올코트 플레이어 + 압도적인 스피드"</strong></p>
                <p>가우프의 가장 큰 무기는 육상 선수를 능가하는 **폭발적인 스피드**입니다. 어떤 공이든 쫓아가 받아내는 수비력은 상대의 실수를 유발합니다. 복식 세계 랭킹 1위 경험이 말해주듯, 네트 플레이에도 매우 능합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 투어 전체를 통틀어 가장 강력하고 안정적인 백핸드를 가지고 있습니다. 위기 상황에서 믿고 치는 주무기입니다.</li>
                    <li><strong>서브:</strong> 최고 시속 200km가 넘는 강서브를 가지고 있지만, 가끔 더블 폴트로 흔들리는 점은 개선되고 있습니다.</li>
                    <li><strong>포핸드:</strong> 과거 약점으로 지적받았으나, 탑스핀을 많이 거는 스타일로 안정감을 높였습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 10, description: '타의 추종을 불허하는 코트 커버 능력.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '공격과 수비 모두 완벽한 월드클래스 백핸드.' },
                { name: '네트 플레이 (Net)', score: 9, description: '복식 세계 1위 출신다운 감각적인 발리.' },
                { name: '서브 (Serve)', score: 9, description: '파워는 최상급, 정확도는 발전 중.' },
                { name: '포핸드 (Forehand)', score: 8, description: '안정성은 좋아졌으나 결정력은 백핸드에 비해 낮음.' },
                { name: '멘탈 (Mental)', score: 9, description: '어린 나이가 믿기지 않는 침착함과 투지.' }
            ],
            growthStory: `
                <p>운동선수 출신 부모님의 DNA를 물려받은 가우프는 7세 때부터 테니스를 시작했습니다. 프랑스 무라토글루 아카데미에서 훈련하며 재능을 꽃피웠고, 주니어 시절부터 '차세대 여제'로 지목받았습니다.</p>
                <p>너무 어린 나이에 받은 스포트라이트가 부담이 될 법도 했지만, 그녀는 착실하게 단계를 밟아 성장했습니다. 브래드 길버트 코치를 영입한 후 더욱 공격적인 테니스를 장착하며 마침내 메이저 퀸의 자리에 올랐습니다.</p>
            `,
            signatureMatch: {
                title: '2023 US 오픈 결승 vs 아리나 사발렌카',
                date: '2023. 09. 10',
                description: '홈 관중들의 열광적인 응원을 등에 업고, 강력한 파워의 사발렌카를 상대로 짜릿한 2-1 역전승을 거뒀습니다. 그녀의 엄청난 수비력이 빛을 발한 경기이자, 미국의 새로운 테니스 아이콘 탄생을 알린 역사적인 순간입니다.'
            },
            recentForm: `
                <p><strong>"진화는 계속된다"</strong></p>
                <p>US 오픈 우승 이후에도 꾸준히 4강 이상의 성적을 내고 있습니다. 특히 서브 메커니즘을 수정하며 약점을 지워나가고 있어, 앞으로 얼마나 더 성장할지 기대되는 선수입니다.</p>
            `
        }
    },
    'elena-rybakina': {
        name: '엘레나 리바키나', nameEn: 'Elena Rybakina', country: 'Kazakhstan', countryFlag: '🇰🇿', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '차가운 평정심을 가진 "아이스 퀸". 강력하고 정교한 서브와 플랫한 스트로크로 윔블던 우승을 차지한 강타자입니다.',
        detailedProfile: {
            oneLineSummary: '얼음장처럼 차갑지만 불같이 뜨거운 샷, 윔블던을 정복한 "아이스 퀸".',
            whyNotable: `
                <p><strong>"무표정의 암살자"</strong></p>
                <p>엘레나 리바키나는 2022년 윔블던에서 우승하며 카자흐스탄 역사상 최초의 그랜드슬램 단식 챔피언이 되었습니다. 경기 중 어떤 상황에서도 표정 변화가 거의 없어 '아이스 퀸(Ice Queen)'이라는 별명을 가지고 있습니다.</p>
                <p>184cm의 큰 키에서 내리꽂는 서브와 군더더기 없는 깔끔한 스트로크는 '교과서적'이라는 평가를 받으며, 현재 여자 테니스계에서 가장 강력한 '빅3'(시비옹테크, 사발렌카, 리바키나)의 한 축을 담당하고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"빅 서버 (Big Server) + 공격적 베이스라이너"</strong></p>
                <p>리바키나의 테니스는 '간결함'과 '파워'로 요약됩니다. 쓸데없는 동작 없이 간결한 스윙으로 엄청난 파워를 만들어냅니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> WTA 투어 '에이스 퀸'입니다. 단순히 빠르기만 한 것이 아니라 코스 선택이 탁월하여 브레이크가 매우 어렵습니다.</li>
                    <li><strong>원투 펀치:</strong> 강한 서브 후 3구 공격으로 포인트를 끝내는 패턴이 주무기입니다.</li>
                    <li><strong>멘탈:</strong> 기쁠 때나 슬플 때나 평정심을 유지하는 포커페이스는 상대에게 큰 압박감을 줍니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 10, description: '현역 여자 선수 중 최고의 서브 능력.' },
                { name: '파워 (Power)', score: 9.5, description: '부드러운 스윙에서 나오는 묵직한 파워.' },
                { name: '멘탈 (Mental)', score: 9, description: '감정을 드러내지 않는 침착함이 강점.' },
                { name: '백핸드 (Backhand)', score: 9, description: '다운더라인 샷이 일품인 안정적인 백핸드.' },
                { name: '스피드 (Speed)', score: 8, description: '큰 키에 비해 준수한 움직임.' },
                { name: '넷 플레이 (Net Play)', score: 8.5, description: '공격적인 발리 능력도 갖추고 있음.' }
            ],
            growthStory: `
                <p>러시아 모스크바에서 태어났지만, 더 나은 지원을 받기 위해 2018년 카자흐스탄으로 국적을 변경했습니다. 이는 그녀의 테니스 인생을 바꾼 결정적인 선택이었습니다.</p>
                <p>카자흐스탄 테니스 연맹의 전폭적인 지원 속에 빠르게 성장한 그녀는, 23세의 나이에 테니스 성지 윔블던을 정복하며 세계 정상급 선수로 도약했습니다.</p>
            `,
            signatureMatch: {
                title: '2022 윔블던 결승 vs 온스 자베르',
                date: '2022. 07. 09',
                description: '첫 세트를 내주며 불안하게 출발했으나, 이후 특유의 침착함과 강력한 서브로 경기를 지배하며 2-1 역전승을 거뒀습니다. 우승 확정 순간에도 담담한 표정으로 화제가 되었던 그녀의 대표 경기입니다.'
            },
            recentForm: `
                <p><strong>"건강하면 최강"</strong></p>
                <p>잦은 질병과 부상이 발목을 잡을 때가 있지만, 컨디션이 온전할 때는 랭킹 1위 시비옹테크조차 두려워하는 가장 강력한 우승 후보입니다. 2024년에도 브리즈번, 아부다비 등에서 우승하며 건재함을 과시했습니다.</p>
            `
        }
    },
    'jessica-pegula': {
        name: '제시카 페굴라', nameEn: 'Jessica Pegula', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/jessica-pegula.png', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '꾸준함의 대명사. 화려하진 않지만 탄탄한 기본기와 영리한 경기 운영으로 투어 상위권을 꾸준히 유지하는 탑 플레이어입니다. 한국계 어머니를 둔 것으로도 유명합니다.',
        detailedProfile: {
            oneLineSummary: '화려하지 않지만 가장 단단한, 투어에서 가장 신뢰할 수 있는 "꾸준함의 아이콘".',
            whyNotable: `
                <p><strong>"편견을 실력으로 깬 노력파"</strong></p>
                <p>제시카 페굴라는 NFL 버팔로 빌스 구단주의 딸로, 엄청난 재벌가 상속녀라는 배경 때문에 데뷔 초에는 '취미로 테니스 친다'는 편견에 시달렸습니다. 하지만 그녀는 묵묵히 밑바닥 챌린저 투어부터 시작해 세계 랭킹 3위까지 오르며 오직 실력으로 자신을 증명했습니다.</p>
                <p>어머니가 한국계 입양아인 킴 페굴라(Kim Pegula)라 한국 팬들에게는 '하프 코리안'으로도 친숙하며, 실제로 김치와 한국 문화를 사랑하는 모습을 자주 보여줍니다.</p>
            `,
            playStyle: `
                <p><strong>"지능형 카운터 펀처 + 플랫 히터"</strong></p>
                <p>페굴라의 테니스는 '군더더기 없음' 그 자체입니다. 낮고 빠르게 깔리는 플랫성 스트로크로 상대의 시간을 빼앗고, 상대의 힘을 이용하는 카운터 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>안정성:</strong> 그녀의 가장 큰 무기입니다. 에러가 거의 없는 기계적인 스트로크로 상대를 질리게 만듭니다.</li>
                    <li><strong>리턴:</strong> 베이스라인에 바짝 붙어서 라이징 볼을 처리하는 리턴 능력은 투어 최상급입니다.</li>
                    <li><strong>복식:</strong> 고프와 함께 복식 세계 랭킹 1위를 찍을 만큼 네트 플레이와 경기 운영 능력이 뛰어납니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '안정성 (Consistency)', score: 10, description: '에러를 거의 하지 않는 정교함.' },
                { name: '리턴 (Return)', score: 9.5, description: '상대의 서브를 무력화시키는 빠른 박자.' },
                { name: '전술 (Tactics)', score: 9.5, description: '상대의 약점을 파고드는 영리함.' },
                { name: '멘탈 (Mental)', score: 9, description: '재벌가라는 배경을 잊게 만드는 헝그리 정신.' },
                { name: '백핸드 (Backhand)', score: 9, description: '낮게 깔리는 플랫 백핸드가 일품.' },
                { name: '서브 (Serve)', score: 7.5, description: '파워보다는 코스 위주, 다소 평범함.' }
            ],
            growthStory: `
                <p>부유한 환경이었지만 테니스 선수로서의 길은 순탄치 않았습니다. 잦은 고관절과 무릎 부상으로 20대 중반까지 빛을 보지 못했습니다.</p>
                <p>하지만 포기하지 않고 재활에 성공한 뒤, 2021년 호주 오픈 8강 진출을 기점으로 잠재력이 폭발했습니다. 27세라는 늦은 나이에 전성기를 맞이한 '대기만성'의 표본입니다.</p>
            `,
            signatureMatch: {
                title: '2023 몬트리올(캐나다 오픈) 결승 vs 류드밀라 삼소노바',
                date: '2023. 08. 14',
                description: '이전까지 4강에서 자주 미끄러졌던 징크스를 깨고 WTA 1000 시리즈 우승을 차진한 경기. 6-1, 6-0 이라는 압도적인 스코어로 상대를 제압하며 자신의 커리어 하이를 찍었습니다.'
            },
            recentForm: `
                <p><strong>"Top 5의 수문장"</strong></p>
                <p>슬램 우승은 아직 없지만, 마스터스급 대회에서는 꾸준히 결승에 오르며 랭킹 포인트를 쌓고 있습니다. 가장 기복 없는 경기력을 보여주는 선수 중 한 명입니다.</p>
            `
        }
    },
    'ons-jabeur': {
        name: '온스 자베르', nameEn: 'Ons Jabeur', country: 'Tunisia', countryFlag: '🇹🇳', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 마법사. 예측 불가능한 드롭샷과 창의적인 플레이 스타일로 팬들에게 즐거움을 선사하는 튀니지의 영웅입니다.',
        detailedProfile: {
            oneLineSummary: '아프리카의 자존심이자 코트 위의 마법사, 예측 불가능한 "행복 테니스"의 전도사.',
            whyNotable: `
                <p><strong>"아랍 여성 스포츠의 역사를 새로 쓰는 선구자"</strong></p>
                <p>온스 자베르는 아랍 및 북아프리카 선수 최초로 그랜드슬램 결승(윔블던, US 오픈)에 진출한 살아있는 역사입니다. 그녀의 성공은 단순한 개인의 성취를 넘어, 아랍권 여성들에게 "우리도 할 수 있다"는 희망의 메시지가 되었습니다.</p>
                <p>팬들에게 항상 웃음을 잃지 않는 유쾌한 성격으로 '행복부 장관(Minister of Happiness)'이라는 별명을 가지고 있으며, 투어에서 가장 사랑받는 선수 중 한 명입니다.</p>
            `,
            playStyle: `
                <p><strong>"창의적 올라운더 (Creative All-Rounder)"</strong></p>
                <p>자베르의 테니스는 '보는 맛'이 있습니다. 기계적인 랠리 대신, 끊임없이 구질을 변화시키고 허를 찌르는 드롭샷으로 상대를 흔들어 놓습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>드롭샷:</strong> 타의 추종을 불허하는 드롭샷 장인입니다. 베이스라인 깊숙이 공을 보내다 예고 없이 툭 떨어뜨리는 샷은 알고도 당할 수밖에 없습니다.</li>
                    <li><strong>슬라이스:</strong> 포핸드, 백핸드 가리지 않고 자유자재로 슬라이스를 구사해 상대의 리듬을 완전히 뺏습니다.</li>
                    <li><strong>변칙:</strong> 정석적인 플레이보다는 본능적이고 감각적인 샷을 즐겨, '코트 위의 마법사'로 불립니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '창의성 (Creativity)', score: 10, description: '상상할 수 없는 샷을 현실로 만드는 능력.' },
                { name: '드롭샷 (Drop Shot)', score: 10, description: '투어 최고의 터치 감각.' },
                { name: '포핸드 (Forehand)', score: 9, description: '파워보다는 각도와 코스가 일품.' },
                { name: '서브 (Serve)', score: 8.5, description: '키에 비해 꽤 강력하고 다양한 서브.' },
                { name: '멘탈 (Mental)', score: 8, description: '큰 경기 결승에서 부담감을 느끼는 편.' },
                { name: '체력 (Stamina)', score: 8, description: '긴 랠리보다는 빠른 승부를 선호.' }
            ],
            growthStory: `
                <p>튀니지의 작은 마을에서 3세 때 테니스를 시작했습니다. 열악한 인프라 속에서도 꿈을 키운 그녀는, 주니어 시절 프랑스 오픈 우승을 차지하며 재능을 알렸습니다.</p>
                <p>프로 초반에는 스폰서가 없어 힘든 시기를 겪었지만, 포기하지 않고 랭킹을 끌어올려 탑 텐에 진입했습니다. 이제는 튀니지의 국민 영웅이자 전 세계 테니스 팬들의 사랑을 받는 스타가 되었습니다.</p>
            `,
            signatureMatch: {
                title: '2022 윔블던 4강 vs 타티아나 마리아',
                date: '2022. 07. 07',
                description: '아랍/아프리카 선수 최초의 그랜드슬램 결승 진출을 확정 지은 역사적인 경기. 절친한 친구인 마리아와의 대결에서 승리한 후, 네트 앞에서 긴 포옹을 나누는 장면은 윔블던 역사상 가장 아름다운 스포츠맨십으로 기억됩니다.'
            },
            recentForm: `
                <p><strong>"마지막 퍼즐, 슬램 우승"</strong></p>
                <p>메이저 대회 준우승만 3번(윔블던 2회, US 오픈 1회)을 기록하며 우승 문턱에서 아쉬움을 삼켰습니다. 무릎 부상으로 잠시 주춤했지만, 여전히 클레이와 잔디 코트에서 가장 위협적인 선수입니다.</p>
            `
        }
    },
    'qinwen-zheng': {
        name: '정 친원', nameEn: 'Qinwen Zheng', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '중국의 새로운 에이스 "Queen Wen". 2024 호주 오픈 준우승자이자 2024 파리 올림픽 금메달리스트로, 리나의 뒤를 이어 아시아 테니스를 이끌어갈 강력한 서브와 포핸드의 소유자입니다.',
        detailedProfile: {
            oneLineSummary: '아시아 최초 올림픽 단식 금메달리스트, 대륙의 기상을 품은 "Queen Wen".',
            whyNotable: `
                <p><strong>"아시아 테니스의 새 역사를 쓴 금메달리스트"</strong></p>
                <p>정 친원은 2024 파리 올림픽에서 아시아 선수 최초로 테니스 단식 금메달을 획득하며 전설 리나(Li Na)를 넘어섰습니다. 'Queen Wen'이라는 별명처럼 코트 위에서 당당하고 카리스마 넘치는 모습을 보여주며, 중국을 넘어 전 세계적인 스타로 발돋움했습니다.</p>
                <p>2024 호주 오픈 준우승까지 차지하며 메이저 대회 경쟁력도 입증했습니다.</p>
            `,
            playStyle: `
                <p><strong>"파워풀한 공격형 베이스라이너"</strong></p>
                <p>강력한 신체 조건에서 나오는 파워가 압도적입니다. 서브와 포핸드 모두 남자 선수 못지않은 스피드와 회전을 보여줍니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> WTA 투어에서 에이스 1, 2위를 다툴 만큼 강력합니다. 첫 서브가 터지는 날에는 게임을 쉽게 풀어갑니다.</li>
                    <li><strong>포핸드:</strong> 헤비 탑스핀이 걸린 포핸드는 바운드 후 높게 튀어 올라 상대를 괴롭힙니다.</li>
                    <li><strong>멘탈:</strong> 올림픽 4강에서 세계 1위 시비옹테크를 꺾었을 때 보여준 집중력과 투지는 그녀가 큰 경기에 강한 '강심장'임을 증명했습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9.5, description: '투어 최정상급 에이스 생산 능력.' },
                { name: '포핸드 (Forehand)', score: 9.5, description: '묵직하고 파괴력 있는 탑스핀 포핸드.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '중요한 순간에 흔들리지 않는 대담함.' },
                { name: '체력 (Stamina)', score: 9, description: '3세트 접전에도 지치지 않는 체력.' },
                { name: '스피드 (Speed)', score: 8.5, description: '큰 키에 비해 준수한 기동력.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적이며 포핸드를 잘 받쳐줌.' }
            ],
            growthStory: `
                <p>중국 후베이성 출신으로 7세 때 테니스를 시작했습니다. 리나의 경기를 보고 테니스 선수의 꿈을 키웠으며, 리나의 전 코치였던 카를로스 로드리게스의 지도를 받기도 했습니다.</p>
                <p>스페인 바르셀로나로 유학을 떠나 기량을 갈고닦았으며, 2022년 WTA 신인상을 수상하며 혜성처럼 등장했습니다. 이후 매년 급성장하여 이제는 그랜드슬램 우승 후보 0순위로 꼽힙니다.</p>
            `,
            signatureMatch: {
                title: '2024 파리 올림픽 결승 vs 도나 베키치',
                date: '2024. 08. 03',
                description: '아시아 테니스 역사상 최고의 순간. 결승전 중압감을 이겨내고 2-0 완승을 거두며 시상대 가장 높은 곳에 섰습니다. 중국 전역을 열광의 도가니로 빠뜨린 역사적인 경기입니다.'
            },
            recentForm: `
                <p><strong>"세계 최정상급 레벨"</strong></p>
                <p>올림픽 금메달 이후 자신감이 절정에 달했습니다. 서브와 스트로크의 완성도가 더욱 높아졌으며, 이제는 어떤 상대를 만나도 주눅 들지 않고 자신의 플레이를 펼칩니다.</p>
            `
        }
    },
    'marketa-vondrousova': {
        name: '마르케타 본드로우소바', nameEn: 'Marketa Vondrousova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '2023 윔블던 챔피언. 왼손잡이 특유의 각도 깊은 서브와 정교한 드롭샷, 그리고 창의적인 플레이로 상대를 무너뜨리는 테크니션입니다.'
    },
    'maria-sakkari': {
        name: '마리아 사카리', nameEn: 'Maria Sakkari', country: 'Greece', countryFlag: '🇬🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '그리스의 스파르탄. 투어 최고 수준의 근육질 몸매에서 나오는 파워풀한 테니스와 쉽게 포기하지 않는 강인한 멘탈이 트레이드마크입니다.',
        detailedProfile: {
            oneLineSummary: '그리스 신화 속 전사 같은 피지컬, 지칠 줄 모르는 "스파르탄 우먼".',
            whyNotable: `
                <p><strong>"가장 강력한 피지컬을 가진 선수"</strong></p>
                <p>마리아 사카리는 WTA 투어에서 가장 뛰어난 체력을 가진 선수 중 한 명으로 꼽힙니다. '스파르탄(Spartan)'이라는 별명답게 근육질의 탄탄한 몸매와 지치지 않는 활동량으로 코트를 누빕니다. 치치파스와 함께 그리스 테니스의 황금기를 이끄는 국가대표 아이콘입니다.</p>
                <p>넷플릭스 '브레이크 포인트'에서도 비중 있게 다뤄질 만큼 스타성을 인정받고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>사카리의 테니스는 '힘'과 '활동량'으로 정의됩니다. 베이스라인 뒤에서 강력한 탑스핀 포핸드로 상대를 밀어붙이고, 어떤 공이든 쫓아가 받아내는 수비력으로 질식시킵니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>피지컬:</strong> 크로스핏 선수에 버금가는 근력과 체력으로 3세트 접전에서 더욱 강한 모습을 보입니다.</li>
                    <li><strong>포핸드:</strong> 남성 선수들처럼 무겁고 강하게 감기는 탑스핀 포핸드가 주무기입니다.</li>
                    <li><strong>서브:</strong> 키는 크지 않지만(172cm), 뛰어난 근력에서 나오는 킥 서브가 위력적입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '피지컬 (Physicality)', score: 10, description: 'WTA 최고의 근력과 체력.' },
                { name: '파워 (Power)', score: 9, description: '밀리지 않는 묵직한 스트로크.' },
                { name: '스피드 (Speed)', score: 9, description: '코트 커버리지가 매우 넓음.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '준결승 등 큰 무대 징크스가 있음.' },
                { name: '서브 (Serve)', score: 8, description: '킥 서브 활용도가 좋음.' },
                { name: '네트 플레이 (Net)', score: 7.5, description: '빈도가 높지 않지만 준수함.' }
            ],
            growthStory: `
                <p>테니스 선수였던 어머니의 영향으로 테니스를 시작했습니다. 18세에 바르셀로나로 유학을 떠나 체계적인 훈련을 받았으며, 2017년부터 꾸준히 랭킹을 끌어올려 그리스 여자 선수 최초로 Top 10에 진입했습니다.</p>
                <p>수많은 4강 탈락의 아픔을 겪었지만, 2023년 과달라하라 오픈(WTA 1000) 우승으로 그간의 설움을 씻어냈습니다.</p>
            `,
            signatureMatch: {
                title: '2021 프랑스 오픈 16강 vs 소피아 케닌',
                date: '2021. 06. 07',
                description: '전년도 준우승자이자 세계 4위인 케닌을 상대로 압도적인 파워를 뽐내며 2-0 완승을 거뒀습니다. 이 승리로 생애 첫 그랜드슬램 8강을 넘어 4강까지 진출하는 쾌거를 이뤘습니다.'
            },
            recentForm: `
                <p><strong>"Top 10의 터줏대감"</strong></p>
                <p>기복 없는 플레이로 꾸준히 상위권을 유지하고 있습니다. 새로운 코치 데이비드 윗과 함께 공격적인 플레이를 다듬으며 다시 한번 메이저 우승에 도전하고 있습니다.</p>
            `
        }
    },
    'jelena-ostapenko': {
        name: '옐레나 오스타펜코', nameEn: 'Jelena Ostapenko', country: 'Latvia', countryFlag: '🇱🇻', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 폭주기관차. 모든 공을 위너로 만들겠다는 듯한 공격적인 풀스윙 샷을 구사하며, 컨디션이 좋은 날에는 누구도 막을 수 없는 파괴력을 보여줍니다. 2017 롤랑가로스 챔피언.',
        detailedProfile: {
            oneLineSummary: '모 아니면 도, 들어가는 날은 아무도 막을 수 없는 "코트 위의 폭주기관차".',
            whyNotable: `
                <p><strong>"가장 예측 불가능한 선수"</strong></p>
                <p>옐레나 오스타펜코는 투어에서 가장 화끈한 공격 테니스를 구사합니다. 2017년 롤랑가로스에서 시드도 받지 못한 20세의 나이로 우승하며 세계를 놀라게 했습니다. 실수가 쏟아지다가도, 긁히는 날에는 세계 1위도 압도적인 스코어로 이겨버리는 도깨비 같은 매력의 소유자입니다.</p>
                <p>솔직하고 거침없는 성격과 화려한 패션으로도 많은 화제(와 논란)를 몰고 다닙니다.</p>
            `,
            playStyle: `
                <p><strong>"극단적인 공격형 (High Risk High Reward)"</strong></p>
                <p>수비는 생각하지 않습니다. 리턴부터 위너를 노리고 풀스윙을 날립니다. 볼 스도가 남자 선수들 평균보다 빠를 때도 있을 정도로 강력합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>스트로크:</strong> 포핸드, 백핸드 모두 플랫하게 때리며, 라인 근처를 집요하게 노립니다.</li>
                    <li><strong>리턴:</strong> 상대의 서브가 약하면 지체 없이 위너성 리턴을 날립니다.</li>
                    <li><strong>기복:</strong> 컨디션에 따라 위너 50개, 에러 50개를 기록하기도 하는 극단적인 경기를 보여줍니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: '남자 선수에 버금가는 샷 스피드.' },
                { name: '공격성 (Aggression)', score: 10, description: '무조건 공격 앞으로.' },
                { name: '서브 (Serve)', score: 7, description: '더블 폴트가 잦음.' },
                { name: '안정성 (Consistency)', score: 4, description: '극심한 기복이 약점.' },
                { name: '멘탈 (Mental)', score: 6, description: '감정 기복이 심함.' },
                { name: '수비 (Defense)', score: 5, description: '수비보다는 공격으로 해결하려 함.' }
            ],
            growthStory: `
                <p>라트비아 리가 출신으로, 어머니의 지도로 5세 때 테니스를 시작했습니다. 어릴 때 볼룸 댄스를 배운 덕분에 풋워크가 의외로 좋습니다.</p>
                <p>2017년 프랑스 오픈 깜짝 우승으로 스타덤에 올랐습니다. 이후 기복 논란에 시달렸지만, 복식에서도 그랜드슬램 타이틀을 따내며 다재다능함을 증명했습니다.</p>
            `,
            signatureMatch: {
                title: '2017 프랑스 오픈 결승 vs 시모나 할렙',
                date: '2017. 06. 10',
                description: '그녀의 인생을 바꿀 경기. 당시 최강의 수비력을 자랑하던 할렙을 상대로, 무려 54개의 위너(할렙 8개)를 쏟아부으며 2-1 역전승을 거뒀습니다. "공격이 최선의 수비"임을 증명한 명승부였습니다.'
            },
            recentForm: `
                <p><strong>"여전한 파괴력"</strong></p>
                <p>2024년 초반 2개 대회에서 우승하며 부활을 알렸습니다. 여전히 기복은 있지만, 긁히는 날의 오스타펜코는 투어에서 가장 두려운 존재입니다.</p>
            `
        }
    },
    'naomi-osaka': {
        name: '나오미 오사카', nameEn: 'Naomi Osaka', country: 'Japan', countryFlag: '🇯🇵', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '4번의 그랜드슬램 우승에 빛나는 하드 코트의 여왕. 압도적인 서브와 포핸드 파워를 갖췄으며, 코트 밖에서는 사회적 목소리를 내는 영향력 있는 아이콘입니다.',
        detailedProfile: {
            oneLineSummary: '아시아 최초 세계 랭킹 1위, 4번의 그랜드슬램을 정복한 "하드 코트의 여왕".',
            whyNotable: `
                <p><strong>"테니스의 아이콘이자 시대의 아이콘"</strong></p>
                <p>나오미 오사카는 단순히 테니스를 잘 치는 선수를 넘어섰습니다. 남녀 통틀어 아시아 국적 선수 최초로 세계 랭킹 1위에 올랐으며, 4번의 메이저 타이틀(US 오픈 2회, 호주 오픈 2회)을 따내며 하드 코트를 지배했습니다.</p>
                <p>또한 블라임 라이브스 매터(BLM) 운동 지지, 멘탈 헬스 이슈 공론화 등 코트 밖에서도 사회적 영향력을 행사하는 글로벌 아이콘입니다.</p>
            `,
            playStyle: `
                <p><strong>"파워 베이스라이너 (Power Baseliner)"</strong></p>
                <p>세레나 윌리엄스를 연상케 하는 압도적인 파워 테니스를 구사합니다. 특히 서브와 3구 공격으로 포인트를 끝내는 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 여자 선수 중 최고 수준의 서브 스피드(시속 200km 육박)를 자랑하며, 위기 상황에서 에이스로 탈출하는 능력이 뛰어납니다.</li>
                    <li><strong>포핸드:</strong> 타점이 빠르고 묵직한 포핸드 위너는 그녀의 전매특허입니다.</li>
                    <li><strong>집중력:</strong> 빅 포인트에서의 집중력이 매우 좋아, 브레이크 위기 관리 능력이 탁월합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: '투어 최정상급 스트로크 파워.' },
                { name: '서브 (Serve)', score: 9.5, description: '중요한 순간에 터지는 강서브.' },
                { name: '멘탈 (Mental)', score: 8, description: '큰 경기에 강하지만, 최근 멘탈 이슈 겪음.' },
                { name: '포핸드 (Forehand)', score: 9.5, description: '경기를 끝낼 수 있는 결정구.' },
                { name: '수비 (Defense)', score: 7.5, description: '공격에 비해 수비 커버리지는 평범.' },
                { name: '클레이/잔디 (Surface)', score: 6, description: '하드 코트 외에서는 성적이 저조함.' }
            ],
            growthStory: `
                <p>아이티 출신 아버지와 일본인 어머니 사이에서 태어났습니다. 3세 때 미국으로 이주해 테니스를 시작했습니다.</p>
                <p>2018년 인디언 웰스 우승으로 두각을 나타내더니, 같은 해 US 오픈에서 세레나 윌리엄스를 꺾고 우승하며 여제의 탄생을 알렸습니다. 이후 단기간에 4개의 메이저 타이틀을 휩쓸었습니다.</p>
            `,
            signatureMatch: {
                title: '2018 US 오픈 결승 vs 세레나 윌리엄스',
                date: '2018. 09. 08',
                description: '테니스 역사상 가장 드라마틱하고 논란이 많았던 결승전. 심판 판정 항의로 분위기가 뒤숭숭한 상황에서도, 20세의 오사카는 흔들리지 않고 자신의 우상인 세레나를 2-0으로 완파하며 생애 첫 메이저 우승을 차지했습니다.'
            },
            recentForm: `
                <p><strong>"엄마가 되어 돌아온 챔피언"</strong></p>
                <p>출산 후 2024년 복귀했습니다. 예전의 압도적인 기량은 아직 돌아오지 않았지만, 2024 프랑스 오픈에서 시비옹테크를 매치 포인트까지 몰아붙이는 등 클래스는 살아있음을 증명했습니다.</p>
            `
        }
    },
    'caroline-wozniacki': {
        name: '캐롤라인 보즈니아키', nameEn: 'Caroline Wozniacki', country: 'Denmark', countryFlag: '🇩🇰', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '덴마크의 철벽. 은퇴 후 두 아이의 엄마가 되어 복귀한 "슈퍼맘"으로, 전성기 시절의 견고한 수비력과 경기 운영 능력을 여전히 과시하고 있습니다.'
    },
    'angelique-kerber': {
        name: '안젤리크 케르버', nameEn: 'Angelique Kerber', country: 'Germany', countryFlag: '🇩🇪', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '독일의 레전드. 놀라운 각도의 카운터 샷과 끈질긴 수비로 그랜드슬램 3회 우승을 달성한 왼손잡이 전략가입니다. 파리 올림픽을 끝으로 은퇴를 선언했습니다.'
    },
    'elina-svitolina': {
        name: '엘리나 스비톨리나', nameEn: 'Elina Svitolina', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '우크라이나의 정신적 지주. 출산 후 복귀하여 윔블던 4강에 오르는 등 제2의 전성기를 보내고 있으며, 빠른 발과 안정적인 스트로크가 강점입니다.'
    },
    'victoria-azarenka': {
        name: '빅토리아 아자렌카', nameEn: 'Victoria Azarenka', country: 'Belarus', countryFlag: '🇧🇾', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '하드 코트의 강자. 호주 오픈 2회 우승자로서 강력한 리턴과 베이스라인 플레이로 오랫동안 정상권을 지키고 있는 베테랑 파워 히터입니다.'
    },
    'karolina-pliskova': {
        name: '카롤리나 플리스코바', nameEn: 'Karolina Pliskova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '서브 퀸. 투어에서 가장 많은 에이스를 기록하는 선수 중 한 명으로, 큰 키에서 내리꽂는 서브와 강력한 플랫 스트로크가 주무기입니다.'
    },
    'sloane-stephens': {
        name: '슬론 스티븐스', nameEn: 'Sloane Stephens', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '2017 US 오픈 챔피언. 부드러운 움직임과 강력한 포핸드, 그리고 뛰어난 수비력을 겸비한 올라운드 플레이어입니다.'
    },
    'madison-keys': {
        name: '매디슨 키스', nameEn: 'Madison Keys', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: 'WTA 투어 최고의 파워 히터 중 한 명. 묵직한 서브와 포핸드로 상대를 힘으로 압박하는 공격적인 스타일을 구사합니다.',
        detailedProfile: {
            oneLineSummary: 'WTA 최고 수준의 "헤비볼 히터", 들어가는 날은 아무도 막을 수 없는 파괴력.',
            whyNotable: `
                <p><strong>"가장 묵직한 공을 치는 선수"</strong></p>
                <p>매디슨 키스의 샷은 단순한 스피드를 넘어 '무게감'이 다릅니다. 남자 선수들에 버금가는 샷 평속을 기록할 정도로 압도적인 파워를 자랑합니다. 2017 US 오픈 결승에 오르며 미국 여자 테니스의 중심축으로 자리 잡았습니다.</p>
                <p>코트 밖에서는 동료 선수들을 살뜰히 챙기고 자선 활동에 앞장서는 따뜻한 리더십의 소유자입니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>복잡한 전술보다는 압도적인 힘으로 밀어붙이는 스타일입니다. 서브와 포핸드 한 방으로 포인트를 끝내는 것을 선호합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 그녀의 트레이드마크. 엄청난 스윙 스피드에서 나오는 포핸드 위너는 총알같이 빠릅니다.</li>
                    <li><strong>서브:</strong> 킥 서브와 플랫 서브 모두 강력하며, 서브 게임을 쉽게 지키는 편입니다.</li>
                    <li><strong>잔디 코트:</strong> 낮게 깔리는 빠른 공을 좋아해 잔디 코트에서 특히 강합니다(이스트본 2회 우승).</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: '투어에서 가장 무거운 공을 침.' },
                { name: '서브 (Serve)', score: 9.5, description: '강력한 서브권.' },
                { name: '포핸드 (Forehand)', score: 9.5, description: '결정력만큼은 최상급.' },
                { name: '안정성 (Consistency)', score: 6, description: '홈런(에러)이 많은 편.' },
                { name: '움직임 (Movement)', score: 7, description: '직선 움직임은 좋으나 좌우 수비는 약함.' },
                { name: '멘탈 (Mental)', score: 8, description: '긍정적이지만 중요할 때 흔들림.' }
            ],
            growthStory: `
                <p>어릴 때부터 '천재 소녀'로 불리며 14세에 프로에 데뷔했습니다. 린제이 데이븐포트 등 레전드들의 지도를 받으며 성장했습니다.</p>
                <p>2017년 US 오픈 준우승으로 잠재력을 폭발시켰고, 모든 그랜드슬램 대회에서 4강 이상의 성적을 거둔 몇 안 되는 선수 중 하나입니다.</p>
            `,
            signatureMatch: {
                title: '2023 US 오픈 8강 vs 마르케타 본드로우소바',
                date: '2023. 09. 06',
                description: '홈 팬들 앞에서 윔블던 챔피언 본드로우소바를 2-0으로 완파한 경기. 강력한 파워로 상대의 수비벽을 완전히 무너뜨리며 4강 진출에 성공했습니다.'
            },
            recentForm: `
                <p><strong>"여전한 우승 후보"</strong></p>
                <p>투어 생활 10년이 넘은 베테랑이 되었지만 파워는 여전합니다. 2024년 스트라스부르, 이스트본 등에서 우승 및 4강에 오르며 꾸준함을 과시하고 있습니다.</p>
            `
        }
    },
    'daria-kasatkina': {
        name: '다리아 카사트키나', nameEn: 'Daria Kasatkina', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 예술가. 파워보다는 다양한 스핀과 각도, 창의적인 샷 메이킹으로 승부하는 지능적인 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '파워 테니스 시대의 "반란군", 현란한 스핀과 전술로 상대를 무너뜨리는 테크니션.',
            whyNotable: `
                <p><strong>"코트 안팎의 진정한 자유로운 영혼"</strong></p>
                <p>다리아 카사트키나는 힘으로만 승부하는 현대 테니스에서 독보적인 '다양성'을 보여주는 선수입니다. 특히 인기 테니스 브이로그 'What The Vlog'를 운영하며 투어 생활의 비하인드 스토리를 팬들에게 솔직하게 공개해 큰 사랑을 받고 있습니다.</p>
                <p>또한 쉽지 않은 상황에서도 자신의 정체성과 목소리를 당당하게 내는 용기 있는 선수로 존경받고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"지능형 카운터 펀처 + 스핀 마스터"</strong></p>
                <p>파워는 약하지만, 남자 선수급의 회전량을 가진 포핸드와 정교한 슬라이스, 드롭샷으로 상대를 요리합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 라파엘 나달을 연상시키는 헤비 탑스핀 포핸드를 구사합니다. 공이 높게 튀어 올라 상대의 타점을 흔듭니다.</li>
                    <li><strong>점프 백핸드:</strong> 리턴이나 수비 상황에서 껑충 뛰어오르며 치는 백핸드 샷은 그녀의 시그니처입니다.</li>
                    <li><strong>전술:</strong> 상대의 약점을 파고드는 집요함과 코트의 길목을 차단하는 센수가 탁월합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '다양성 (Variety)', score: 10, description: '타의 추종을 불허하는 샷 셀렉션.' },
                { name: '스핀 (Spin)', score: 10, description: '엄청난 RPM의 포핸드.' },
                { name: '센스 (IQ)', score: 9.5, description: '상대의 수를 읽는 능력이 뛰어남.' },
                { name: '스피드 (Speed)', score: 9, description: '클레이 코트에서의 움직임이 특히 좋음.' },
                { name: '파워 (Power)', score: 5, description: '서브와 스트로크 파워는 약한 편.' },
                { name: '서브 (Serve)', score: 5, description: '느린 서브가 최대 약점.' }
            ],
            growthStory: `
                <p>러시아 톨리아티 출신으로, 형의 권유로 테니스를 시작했습니다. 2014년 프랑스 오픈 주니어 우승을 차지하며 유망주로 떠올랐습니다.</p>
                <p>성인 무대에서도 2018년 인디언 웰스 준우승, 2022년 프랑스 오픈 4강에 오르며 꾸준히 상위권을 유지하고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2018 인디언 웰스 4강 vs 비너스 윌리엄스',
                date: '2018. 03. 17',
                description: '전설 비너스를 상대로 명승부를 펼쳤습니다. 3세트 타이브레이크 접전 끝에 승리하며, 파워 히터를 상대로 어떻게 싸워야 하는지를 보여준 교과서적인 경기였습니다.'
            },
            recentForm: `
                <p><strong>"꾸준함의 힘"</strong></p>
                <p>2024년에도 여러 대회에서 결승에 오르며 Top 15 안팎의 랭킹을 유지하고 있습니다. 특히 잔디와 하드 코트에서도 결승에 진출하며 '올라운더'로서의 면모를 과시하고 있습니다.</p>
            `
        }
    },
    'beatriz-haddad-maia': {
        name: '베아트리스 하다드 마이아', nameEn: 'Beatriz Haddad Maia', country: 'Brazil', countryFlag: '🇧🇷', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '남미 여자 테니스의 자존심. 왼손잡이 특유의 까다로운 서브와 강력한 포핸드, 그리고 매 포인트 최선을 다하는 파이팅이 돋보입니다.'
    },
    'danielle-collins': {
        name: '다니엘 콜린스', nameEn: 'Danielle Collins', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: 'Danimal. 엄청난 승부욕과 공격적인 베이스라인 플레이로 2022 호주 오픈 준우승을 차지했습니다. 2024년을 끝으로 은퇴를 예고한 그녀의 마지막 불꽃을 주목하세요.'
    },
    'barbora-krejcikova': {
        name: '바르보라 크레이치코바', nameEn: 'Barbora Krejcikova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '단식과 복식을 모두 제패한 진정한 챔피언. 2021 롤랑가로스, 2024 윔블던 단식 우승자이자 골든 슬래머로, 우아하고 기술적인 플레이가 일품입니다.'
    },
    'petra-kvitova': {
        name: '페트라 크비토바', nameEn: 'Petra Kvitova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '윔블던 2회 우승에 빛나는 체코의 레전드. 왼손잡이 특유의 휘어지며 나가는 서브와 강력한 플랫 스트로크로 잔디 코트에서 특히 강한 면모를 보입니다.'
    },
    'belinda-bencic': {
        name: '벨린다 벤치치', nameEn: 'Belinda Bencic', country: 'Switzerland', countryFlag: '🇨🇭', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '도쿄 올림픽 금메달리스트. 빠른 타이밍에 공을 처리하여 상대의 시간을 빼앗는 플레이가 장기이며, 마르티나 힝기스를 잇는 스위스의 스타입니다.'
    },
    'bianca-andreescu': {
        name: '비앙카 안드레스쿠', nameEn: 'Bianca Andreescu', country: 'Canada', countryFlag: '🇨🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '2019 US 오픈 챔피언. 세레나 윌리엄스를 꺾고 우승한 저력의 선수로, 강력한 파워와 다양한 구질을 섞어 쓰는 능력이 탁월합니다.'
    },
    'emma-raducanu': {
        name: '엠마 라두카누', nameEn: 'Emma Raducanu', country: 'United Kingdom', countryFlag: '🇬🇧', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '기적의 아이콘. 2021 US 오픈에서 예선 통과자 최초로 무실세트 우승이라는 신화를 썼습니다. 깔끔한 기술과 스타성을 겸비한 영국의 희망입니다.',
        detailedProfile: {
            oneLineSummary: '예선 통과자 신화의 주인공, 전 세계가 주목하는 "영국의 신데렐라".',
            whyNotable: `
                <p><strong>"테니스 역사상 가장 위대한 신데렐라 스토리"</strong></p>
                <p>2021년 18세의 나이로 US 오픈에 예선부터 참가해, 단 한 세트도 내주지 않고(20세트 연속 승리) 우승을 차지했습니다. 예선 통과자의 메이저 우승은 테니스 역사상 전무후무한 기록입니다. 이 우승 하나로 그녀는 단숨에 전 세계적인 슈퍼스타가 되었습니다.</p>
                <p>뛰어난 실력뿐만 아니라 지적인 인터뷰 스킬, 다문화적 배경(루마니아/중국 혼혈, 영국 국적)으로 글로벌 브랜드들의 러브콜을 받는 아이콘입니다.</p>
            `,
            playStyle: `
                <p><strong>"지능적인 베이스라이너 (Aggressive Counter Puncher)"</strong></p>
                <p>라두카누의 테니스는 '깨끗함' 그 자체입니다. 무리해서 세게 치기보다는 상대의 힘을 이용해 코스 깊숙이 찔러 넣는 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>리턴:</strong> 그녀의 우승 원동력이었던 리턴 능력은 투어 최상급입니다. 베이스라인 안쪽으로 들어와 라이징 볼을 공략합니다.</li>
                    <li><strong>백핸드:</strong> 다운더라인 백핸드는 그녀의 시그니처 샷으로, 위기 상황에서 흐름을 바꿉니다.</li>
                    <li><strong>움직임:</strong> 물 흐르듯 유연한 코트 커버 능력을 갖췄습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '기술 (Technique)', score: 9.5, description: '교과서적인 깔끔한 폼.' },
                { name: '리턴 (Return)', score: 9.5, description: '공격적인 리턴이 일품.' },
                { name: '스타성 (Star Power)', score: 10, description: '전 세계가 주목하는 흥행 보증수표.' },
                { name: '백핸드 (Backhand)', score: 9, description: '가장 자신 있는 무기.' },
                { name: '체력 (Fitness)', score: 7, description: '잦은 부상이 발목을 잡음.' },
                { name: '서브 (Serve)', score: 7.5, description: '정확도는 좋으나 파워 보강 필요.' }
            ],
            growthStory: `
                <p>캐나다 토론토에서 태어나 2세 때 영국으로 이주했습니다. 학업과 운동을 병행하며 모범생으로 자랐고, 수학과 경제학 A레벨을 받을 정도로 머리가 좋습니다.</p>
                <p>2021년 윔블던 16강 진출로 가능성을 보여주더니, 곧이어 열린 US 오픈에서 테니스 역사를 새로 쓰며 여왕의 자리에 올랐습니다.</p>
            `,
            signatureMatch: {
                title: '2021 US 오픈 결승 vs 레일라 페르난데스',
                date: '2021. 09. 11',
                description: '10대들의 결승전으로 전 세계의 이목이 집중된 경기. 긴장되는 순간에도 침착하게 자신의 플레이를 펼치며 2-0 완승을 거뒀습니다. 우승 직후 보여준 환한 미소는 그녀의 트레이드마크가 되었습니다.'
            },
            recentForm: `
                <p><strong>"재도약을 위한 숨 고르기"</strong></p>
                <p>우승 이후 잦은 코치 교체와 손목/발목 부상 수술로 힘든 시간을 보냈습니다. 2024년 복귀 후 점차 경기 감각을 끌어올리고 있으며, 건강한 몸 상태를 유지한다면 언제든 다시 정상에 오를 수 있는 잠재력을 가졌습니다.</p>
            `,
            fanAppeal: `
                <p><strong>"테니스판 엠마 왓슨"</strong></p>
                <p>지적이고 우아한 이미지와 코트 위에서의 승부사 기질이 공존하는 반전 매력의 소유자입니다. 디올, 티파니, 포르쉐 등 럭셔리 브랜드의 앰버서더로 활동하며 패션 아이콘으로도 사랑받고 있습니다.</p>
            `
        }
    },
    'leylah-fernandez': {
        name: '레일라 페르난데스', nameEn: 'Leylah Fernandez', country: 'Canada', countryFlag: '🇨🇦', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '작은 고추가 맵다. 왜소한 체격에도 불구하고 빠른 발과 영리한 플레이, 그리고 지치지 않는 투지로 2021 US 오픈 준우승을 차지했습니다.',
        detailedProfile: {
            oneLineSummary: '작은 거인, 코트 위의 파이터 "레일라".',
            whyNotable: `
                <p><strong>"자이언트 킬러 (Giant Killer)"</strong></p>
                <p>168cm의 단신이지만, 자신보다 훨씬 크고 힘센 선수들을 잇달아 무너뜨리는 '다윗과 골리앗'의 승부를 보여줍니다. 2021년 US 오픈 결승 진출 과정에서 오사카, 케르버, 스비톨리나, 사발렌카 등 최정상급 선수들을 연파하며 전 세계에 이름을 각인시켰습니다.</p>
                <p>관중의 호응을 유도하고 매 포인트 포효하는 엄청난 파이팅 스피릿이 트레이드마크입니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 카운터 펀처 + 빠른 템포"</strong></p>
                <p>상대의 힘에 밀리지 않기 위해 베이스라인에 딱 붙어서 라이징 볼을 처리합니다. 박자를 뺏는 빠른 타이밍의 스트로크가 일품입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>왼손잡이 이점:</strong> 까다로운 왼손 앵글 샷과 서브로 상대를 코트 밖으로 밀어냅니다.</li>
                    <li><strong>타이밍:</strong> 공이 정점에 오르기 전에 치는 빠른 타이밍으로 상대의 준비 시간을 뺏습니다.</li>
                    <li><strong>네트 플레이:</strong> 복식 그랜드슬램 준우승 경험이 있을 정도로 발리 센스가 뛰어납니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '투지 (Fighting Spirit)', score: 10, description: '절대 포기하지 않는 악바리 근성.' },
                { name: '스피드 (Speed)', score: 9, description: '빠른 발로 코트 전체를 커버.' },
                { name: '타이밍 (Timing)', score: 9.5, description: '박자를 뺏는 탁월한 감각.' },
                { name: '멘탈 (Mental)', score: 9, description: '큰 무대에서도 주눅 들지 않음.' },
                { name: '파워 (Power)', score: 7, description: '체격적 한계로 파워는 다소 부족.' },
                { name: '서브 (Serve)', score: 7.5, description: '슬라이스 서브를 잘 활용함.' }
            ],
            growthStory: `
                <p>에콰도르 출신 축구 선수 아버지와 필리핀계 캐나다인 어머니 사이에서 태어났습니다. 어릴 때 '너무 작아서 테니스 선수로 성공할 수 없다'는 말을 들었지만, 이를 악물고 노력해 보란 듯이 세계적인 선수로 성장했습니다.</p>
                <p>가족의 헌신적인 뒷바라지가 있었으며, 동생 비앙카 페르난데스도 테니스 선수로 활동 중입니다.</p>
            `,
            signatureMatch: {
                title: '2021 US 오픈 4강 vs 아리나 사발렌카',
                date: '2021. 09. 10',
                description: '힘 대 기술의 대결. 당시 세계 2위 사발렌카의 무시무시한 파워에 맞서, 한 박자 빠른 공격과 끈질긴 수비로 2-1 승리를 거뒀습니다. 결승 진출을 확정 짓고 코트에 주저앉아 눈물 흘리는 모습은 명장면이었습니다.'
            },
            recentForm: `
                <p><strong>"복식과 단식 병행"</strong></p>
                <p>단식 랭킹은 30위권에 머물러 있지만, 빌리 진 킹 컵에서 캐나다의 첫 우승을 이끄는 등 국가대항전에서 특히 강한 모습을 보입니다. 2024년에도 꾸준히 상승세를 타고 있습니다.</p>
            `,
            fanAppeal: `
                <p><strong>"웃음과 눈물의 아이콘"</strong></p>
                <p>경기 중에는 매서운 눈빛으로 싸우지만, 인터뷰할 때는 해맑은 미소로 팬들을 무장해제 시킵니다. 다양한 문화적 배경 덕분에 남미와 아시아 팬들에게도 큰 사랑을 받고 있습니다.</p>
            `
        }
    },
    'mirra-andreeva': {
        name: '미라 안드레예바', nameEn: 'Mirra Andreeva', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: 'WTA의 슈퍼 틴에이저. 16세의 나이에 윔블던 16강, 롤랑가로스 4강(2024)에 오르며 천재성을 입증한, 여자 테니스의 차세대 지배자 후보입니다.',
        detailedProfile: {
            oneLineSummary: 'WTA를 뒤흔든 17세 천재 소녀, "제2의 마르티나 힝기스".',
            whyNotable: `
                <p><strong>"10대의 반란을 이끄는 선두주자"</strong></p>
                <p>2023년 15세의 나이로 마드리드 오픈 16강에 오르며 혜성처럼 등장했습니다. 이후 윔블던 16강, 2024년 롤랑가로스 4강까지 진출하며 '반짝 돌풍'이 아님을 증명했습니다.</p>
                <p>어린 나이가 믿기지 않는 노련한 경기 운영과 센스는 전설 마르티나 힝기스를 연상시키며, 차기 세계 1위 후보로 손색이 없습니다.</p>
            `,
            playStyle: `
                <p><strong>"천재적인 카운터 펀처 (Smart Counter Puncher)"</strong></p>
                <p>힘으로 제압하기보다는 상대의 힘을 역이용하고, 코트의 빈 곳을 정확히 찌르는 지능적인 테니스를 구사합니다. 공을 다루는 손목 감각이 타고났습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 안드레예바의 가장 강력한 무기입니다. 다운더라인 백핸드는 이미 투어 상위권 수준입니다.</li>
                    <li><strong>경기 운영:</strong> 상대의 움직임을 미리 읽고 대처하는 능력이 돋보입니다. 드롭샷과 로브를 적재적소에 섞어 씁니다.</li>
                    <li><strong>멘탈:</strong> 지고 있는 상황에서도 쉽게 무너지지 않는 투지를 보여주지만, 가끔 감정을 주체하지 못하는 모습은 숙제입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '센스 (Tennis IQ)', score: 10, description: '타고난 길목 차단과 코스 선택.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '날카롭고 정확한 최고 무기.' },
                { name: '수비 (Defense)', score: 9, description: '끈질기게 따라가서 받아냄.' },
                { name: '잠재력 (Potential)', score: 10, description: '10년 이상 투어를 지배할 재목.' },
                { name: '경험 (Experience)', score: 4, description: '아직 투어 경험이 부족함.' },
                { name: '서브 (Serve)', score: 7, description: '파워와 다양성을 키워야 함.' }
            ],
            growthStory: `
                <p>러시아 크라스노야르스크 출신으로, 언니 에리카 안드레예바와 함께 자매 테니스 선수로 유명합니다. 프랑스 칸의 엘리트 테니스 센터에서 훈련하며 빠르게 성장했습니다.</p>
                <p>주니어 무대를 평정하고 프로에 데뷔하자마자 탑 랭커들을 연파하며 '무서운 10대'의 등장을 알렸습니다.</p>
            `,
            signatureMatch: {
                title: '2024 롤랑가로스 8강 vs 아리나 사발렌카',
                date: '2024. 06. 05',
                description: '세계를 놀라게 한 경기. 몸 상태가 좋지 않았던 사발렌카를 상대로 영리하게 코트를 넓게 사용하며 2-1 역전승을 거두고, 생애 첫 메이저 4강에 진출했습니다. 최연소 그랜드슬램 4강 기록(1997년 힝기스 이후)을 세웠습니다.'
            },
            recentForm: `
                <p><strong>"거침없는 상승세"</strong></p>
                <p>WTA 500 대회 등 투어 레벨에서도 꾸준히 성적을 내고 있습니다. 파워가 붙고 경험이 쌓인다면 2-3년 안에 메이저 우승도 가능하다는 평가입니다.</p>
            `
        }
    },
    'linda-noskova': {
        name: '린다 노스코바', nameEn: 'Linda Noskova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '체코의 10대 돌풍 주역. 2024 호주 오픈에서 세계 1위 시비옹테크를 꺾으며 파란을 일으킨 선수로, 강력한 포핸드와 침착한 경기 운영이 강점입니다.'
    },
    'marta-kostyuk': {
        name: '마르타 코스튜크', nameEn: 'Marta Kostyuk', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '우크라이나의 차세대 에이스. 주니어 시절부터 두각을 나타냈으며, 공격적인 플레이와 감정을 솔직하게 드러내는 스타성으로 주목받고 있습니다.'
    },

    // --- Added Male Players (Roadmap Completion) ---
    'shang-juncheng': {
        name: '상 쥔청', nameEn: 'Shang Juncheng', country: 'China', countryFlag: '🇨🇳', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '중국의 10대 슈퍼 루키. 빠른 발과 센스 있는 왼손잡이 플레이로 프로 무대에서 빠르게 적응하고 있으며, 중국 테니스의 미래로 불립니다.'
    },
    'duje-ajdukovic': {
        name: '두예 아이두코비치', nameEn: 'Duje Ajdukovic', country: 'Croatia', countryFlag: '🇭🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '크로아티아의 신예. 강력한 투핸드 백핸드와 공격적인 스타일을 갖췄으며, 챌린저 무대를 평정하고 ATP 투어에 도전장을 내밀었습니다.'
    },
    'dominic-thiem': {
        name: '도미니크 팀', nameEn: 'Dominic Thiem', country: 'Austria', countryFlag: '🇦🇹', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '클레이 코트의 왕자이자 US 오픈 챔피언. 강력한 원핸드 백핸드와 엄청난 회전량의 탑스핀 스트로크로 빅3를 위협했던 선수입니다.'
    },
    'fabio-fognini': {
        name: '파비오 포니니', nameEn: 'Fabio Fognini', country: 'Italy', countryFlag: '🇮🇹', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 악동이자 천재. 코트 위를 산책하듯 걷다가 갑자기 터뜨리는 레이저 같은 위너가 일품이며, 몬테카를로 마스터스 우승자입니다.'
    },
    'reilly-opelka': {
        name: '라일리 오펠카', nameEn: 'Reilly Opelka', country: 'United States', countryFlag: '🇺🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '211cm의 초장신 서브 봇. 2층에서 내려꽂는 듯한 압도적인 서브와 강력한 포핸드로 상대를 무력화시키는 파워 테니스의 정점입니다.'
    },
    'marin-cilic': {
        name: '마린 칠리치', nameEn: 'Marin Cilic', country: 'Croatia', countryFlag: '🇭🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '2014 US 오픈 챔피언. 큰 키에서 나오는 강력한 서브와 플랫한 스트로크가 강점인 베테랑입니다.'
    },
    'milos-raonic': {
        name: '밀로스 라오니치', nameEn: 'Milos Raonic', country: 'Canada', countryFlag: '🇨🇦', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '캐나다의 미사일맨. 투어에서 가장 강력하고 빠른 서브를 구사하는 선수 중 하나로, 윔블던 준우승을 차지한 바 있는 빅 서버입니다.'
    },
    'nick-kyrgios': {
        name: '닉 키리오스', nameEn: 'Nick Kyrgios', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 악동이자 천재. 예측 불가능한 플레이와 강력한 서브, 그리고 쇼맨십으로 관중을 사로잡는 스타 플레이어입니다.'
    },
    'richard-gasquet': {
        name: '리샤르 가스케', nameEn: 'Richard Gasquet', country: 'France', countryFlag: '🇫🇷', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '예술적인 원핸드 백핸드의 소유자. 테니스 역사상 가장 아름다운 백핸드 폼을 가진 선수 중 하나로 꼽힙니다.'
    },
    'diego-schwartzman': {
        name: '디에고 슈와르츠만', nameEn: 'Diego Schwartzman', country: 'Argentina', countryFlag: '🇦🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '"El Peque" (작은 거인). 투어 최단신이지만 가장 빠른 발과 최고의 리턴 능력을 가졌으며, 끈질긴 랠리로 거구들을 쓰러뜨리는 다윗입니다.'
    },
    'david-goffin': {
        name: '다비드 고핀', nameEn: 'David Goffin', country: 'Belgium', countryFlag: '🇧🇪', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '벨기에의 테크니션. 왜소한 체격이지만 박자 빠른 스트로크와 뛰어난 코트 커버력으로 상대를 제압하는, 지능적이고 우아한 플레이어입니다.'
    },
    'thanasi-kokkinakis': {
        name: '타나시 코키나키스', nameEn: 'Thanasi Kokkinakis', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '호주의 재능. 키리오스와 절친이자 복식 파트너로, 강력한 서브와 포핸드, 그리고 스타성을 겸비한 선수입니다.'
    },
    'hugo-gaston': {
        name: '위고 가스통', nameEn: 'Hugo Gaston', country: 'France', countryFlag: '🇫🇷', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '프랑스의 드롭샷 마스터. 작은 체구지만 독창적이고 변칙적인 플레이로 거인들을 농락하며 관중들을 매료시키는 아티스트입니다.'
    },
    'luca-nardi': {
        name: '루카 나르디', nameEn: 'Luca Nardi', country: 'Italy', countryFlag: '🇮🇹', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 숨은 진주. 조코비치를 꺾는 이변을 연출하며 세계적인 주목을 받았으며, 부드러운 손감각과 공격 본능을 가진 유망주입니다.'
    },
    'dino-prizmic': {
        name: '디노 프리즈미치', nameEn: 'Dino Prizmic', country: 'Croatia', countryFlag: '🇭🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '크로아티아의 강철 멘탈. 주니어 롤랑가로스 챔피언 출신으로, 어떤 상황에서도 포기하지 않는 투지와 끈질긴 랠리가 강점입니다.'
    },
    'coleman-wong': {
        name: '콜먼 웡', nameEn: 'Coleman Wong', country: 'Hong Kong', countryFlag: '🇭🇰', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '홍콩 테니스의 역사. 나달 아카데미에서 훈련받은 유망주로, 191cm의 좋은 신체 조건과 공격적인 테니스로 아시아 테니스의 미래를 밝히고 있습니다.'
    },

    // --- Added Female Players (Batch 2 - Enriched) ---
    'dayana-yastremska': {
        name: '다야나 야스트렘스카', nameEn: 'Dayana Yastremska', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '폭발적인 공격력을 자랑하는 우크라이나의 파워 히터. 2024 호주 오픈에서 예선 통과자 신분으로 4강까지 진출하는 돌풍을 일으키며 세계를 놀라게 했습니다.'
    },
    'anna-kalinskaya': {
        name: '안나 칼린스카야', nameEn: 'Anna Kalinskaya', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '군더더기 없는 깔끔한 스트로크가 특징인 선수. 최근 두바이 챔피언십 결승 진출 등 투어 무대에서 기량이 만개하며 다크호스로 떠올랐습니다.'
    },
    'jasmine-paolini': {
        name: '자스민 파올리니', nameEn: 'Jasmine Paolini', country: 'Italy', countryFlag: '🇮🇹', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '작은 거인. 163cm의 단신이지만 빠른 발과 지칠 줄 모르는 체력으로 2024년 롤랑가로스와 윔블던 결승에 진출하며 세계 톱 랭커로 도약했습니다.'
    },
    'sorana-cirstea': {
        name: '소라나 크르스테아', nameEn: 'Sorana Cirstea', country: 'Romania', countryFlag: '🇷🇴', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '루마니아의 베테랑. 공격적인 베이스라인 플레이를 구사하며, 투어 경력 내내 꾸준히 상위권을 위협하는 저력을 보여줍니다.'
    },
    'anastasia-potapova': {
        name: '아나스타샤 포타포바', nameEn: 'Anastasia Potapova', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '주니어 세계 1위 출신의 재능. 강한 승부욕과 파이팅 넘치는 플레이로 코트 위에서 존재감을 발휘하는 영건입니다.'
    },
    'ekaterina-alexandrova': {
        name: '에카테리나 알렉산드로바', nameEn: 'Ekaterina Alexandrova', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '낮고 빠른 플랫성 타구가 일품인 선수. 특히 실내 코트에서 강한 면모를 보이며, 리듬을 탔을 때는 톱 랭커들도 막기 힘든 공격력을 뽐냅니다.'
    },
    'liudmila-samsonova': {
        name: '류드밀라 삼소노바', nameEn: 'Liudmila Samsonova', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 서브와 포핸드를 앞세운 공격형 플레이어. 하드 코트에서 특히 위력적이며, WTA 투어 타이틀을 여러 차례 차지한 실력자입니다.'
    },
    'veronika-kudermetova': {
        name: '베로니카 쿠데르메토바', nameEn: 'Veronika Kudermetova', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '단식과 복식 모두 세계 수준인 올라운더. 안정적인 스트로크와 네트 플레이 능력을 겸비하여 어떤 상황에서도 견고한 경기를 펼칩니다.'
    },
    'elise-mertens': {
        name: '엘리스 메르텐스', nameEn: 'Elise Mertens', country: 'Belgium', countryFlag: '🇧🇪', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '벨기에 테니스의 계보를 잇는 선수. 기복 없는 꾸준함과 뛰어난 수비력이 강점이며, 복식에서는 세계 랭킹 1위를 기록한 바 있습니다.'
    },
    'donna-vekic': {
        name: '돈나 베키치', nameEn: 'Donna Vekic', country: 'Croatia', countryFlag: '🇭🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 서브와 포핸드를 겸비한 크로아티아의 스타. 2024 파리 올림픽 은메달리스트로, 오랜 부상을 딛고 제2의 전성기를 맞이했습니다.'
    },
    'marie-bouzkova': {
        name: '마리 부즈코바', nameEn: 'Marie Bouzkova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 에너자이저. 끈질긴 수비와 지치지 않는 체력으로 상대를 지치게 만들며, 항상 미소를 잃지 않는 스포츠맨십으로 사랑받습니다.'
    },
    'katerina-siniakova': {
        name: '카테리나 시니아코바', nameEn: 'Katerina Siniakova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '현역 최고의 복식 여제 중 한 명. 그랜드슬램 복식 전관왕(골든 슬램)을 달성했으며, 단식에서도 특유의 투지와 네트 플레이로 경쟁력을 보여줍니다.'
    },
    'caroline-garcia': {
        name: '카롤린 가르시아', nameEn: 'Caroline Garcia', country: 'France', countryFlag: '🇫🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '공격적인 리턴 포지스("Fly with Caro")과 다이내믹한 플레이가 특징입니다. WTA 파이널스 우승 경험이 있는 프랑스의 에이스입니다.'
    },
    'anhelina-kalinina': {
        name: '안헬리나 칼리니나', nameEn: 'Anhelina Kalinina', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '우크라이나 테니스의 주축. 클레이 코트에서 강점을 보이며, 탄탄한 기본기를 바탕으로 로마 마스터스 결승에 오르는 저력을 보여주었습니다.'
    },
    'lesia-tsurenko': {
        name: '레시아 추렌코', nameEn: 'Lesia Tsurenko', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '투어 경험이 풍부한 베테랑. 부상을 자주 겪으면서도 오뚝이처럼 다시 일어서는 정신력의 소유자로, 카운터 펀치 능력이 뛰어납니다.'
    },
    'magda-linette': {
        name: '마그다 리네트', nameEn: 'Magda Linette', country: 'Poland', countryFlag: '🇵🇱', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '성실함의 대명사. 30대에 접어들어 2023 호주 오픈 4강에 진출하며 커리어 하이를 찍은 대기만성형 플레이어입니다.'
    },
    'sofia-kenin': {
        name: '소피아 케닌', nameEn: 'Sofia Kenin', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '2020 호주 오픈 챔피언. 작은 체구에도 불구하고 뛰어난 타이밍과 코트 커버력, 그리고 강한 승부근성이 돋보이는 선수입니다.'
    },
    'paula-badosa': {
        name: '파울라 바도사', nameEn: 'Paula Badosa', country: 'Spain', countryFlag: '🇪🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 베이스라인 플레이가 강점인 스페인의 스타. 부상을 딛고 다시 랭킹을 끌어올리고 있는 저력의 선수입니다.'
    },
    'karolina-muchova': {
        name: '카롤리나 무호바', nameEn: 'Karolina Muchova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '올라운드 플레이어의 정석. 다양한 구질과 네트 플레이, 슬라이스를 자유자재로 구사하며 "테니스를 가장 예쁘게 치는 선수" 중 한 명으로 꼽힙니다. 2023 롤랑가로스 준우승자.'
    },
    'ajla-tomljanovic': {
        name: '아일라 톰얀로비치', nameEn: 'Ajla Tomljanovic', country: 'Australia', countryFlag: '🇦🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 그라운드 스트로크를 가진 호주의 간판. 세레나 윌리엄스의 은퇴 경기 상대이자 승자로 역사에 남았으며, 메이저 대회에서 꾸준히 8강권에 도전하는 실력자입니다.'
    },
    'camila-giorgi': {
        name: '카밀라 조르지', nameEn: 'Camila Giorgi', country: 'Italy', countryFlag: '🇮🇹', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 하드 히터. 작은 체구에서 뿜어져 나오는 폭발적인 스트로크 파워는 투어 최고 수준이며, 공격적인 스타일로 정평이 나 있습니다.'
    },
    'wang-xinyu': {
        name: '왕 신유', nameEn: 'Wang Xinyu', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '중국 테니스의 차세대 주자 "중국의 샤라포바". 182cm의 장신에서 나오는 시원한 스트로크가 강점이며, 복식에서도 그랜드슬램 우승을 차지했습니다.'
    },
    'wang-xiyu': {
        name: '왕 시위', nameEn: 'Wang Xiyu', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '강력한 왼손 포핸드를 가진 중국의 기대주. 2018 US 오픈 주니어 챔피언 출신으로, 파워풀한 테니스를 구사합니다.'
    },
    'zhu-lin': {
        name: '주 린', nameEn: 'Zhu Lin', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '대기만성형 플레이어. 꾸준한 노력 끝에 2023 호주 오픈 16강, 투어 첫 우승을 달성하며 전성기를 맞이했습니다. '
    },
    'yuan-yue': {
        name: '위안 위에', nameEn: 'Yuan Yue', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '공격적인 플레이가 돋보이는 중국 선수. 2024년 투어 첫 우승을 차지하며 세계 랭킹을 빠르게 끌어올리고 있습니다.'
    },
    'diane-parry': {
        name: '디안 파리', nameEn: 'Diane Parry', country: 'France', countryFlag: '🇫🇷', gender: 'female', plays: 'Right-handed', backhand: 'One-handed',
        longBio: 'WTA 투어에서 보기 드문 원핸드 백핸드 구사자. 우아한 폼과 클래식한 테니스 스타일로 주목받는 프랑스의 유망주입니다.'
    },
    'clara-burel': {
        name: '클라라 뷔렐', nameEn: 'Clara Burel', country: 'France', countryFlag: '🇫🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '프랑스의 영 건. 주니어 세계 1위 출신으로, 안정적인 경기 운영과 영리한 플레이로 성인 무대에서도 두각을 나타내고 있습니다.'
    },
    'varvara-gracheva': {
        name: '바르바라 그라체바', nameEn: 'Varvara Gracheva', country: 'France', countryFlag: '🇫🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '러시아에서 프랑스로 국적을 변경한 선수. 다양한 구질을 섞어 쓰는 까다로운 스트로크로 상대를 괴롭히는 스타일입니다.'
    },
    'tatjana-maria': {
        name: '타티아나 마리아', nameEn: 'Tatjana Maria', country: 'Germany', countryFlag: '🇩🇪', gender: 'female', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '슬라이스 마스터. 포핸드와 백핸드 모두에서 자유자재로 구사하는 슬라이스로 상대를 혼란에 빠뜨리는 독특한 스타일의 베테랑입니다. 두 아이의 엄마이자 2022 윔블던 4강 신화의 주인공.'
    },
    'laura-siegemund': {
        name: '로라 시그문드', nameEn: 'Laura Siegemund', country: 'Germany', countryFlag: '🇩🇪', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '변칙 플레이의 여왕. 드롭샷, 네트 대시 등 다양한 전술로 상대를 흔드는 지능적인 플레이가 일품이며, 복식에서도 그랜드슬램 챔피언입니다.'
    },

    // --- Added Male (Bonus) ---
    'hong-seong-chan': {
        name: '홍성찬', nameEn: 'Seong-chan Hong', country: 'Korea', countryFlag: '🇰🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '대한민국의 테니스 국가대표. "홍대리"라는 별명처럼 데이비스컵 등 국가대항전에서 놀라운 투혼과 승부사 기질을 발휘하며 한국 테니스의 허리를 책임지고 있습니다.'
    }
};

export const getPlayerSlugs = () => Object.keys(PLAYERS_DB);

export const getPlayerBySlug = (slug: string) => PLAYERS_DB[slug];

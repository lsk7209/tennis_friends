
// 블로그 카테고리 그룹 매핑
export const CATEGORY_GROUPS = {
    SKILLS: {
        id: 'skills',
        label: '기술 (Skills)',
        categories: ['테니스 서브', '서브 리턴', '테니스 포핸드', '테니스 백핸드', '백핸드', '테니스 발리', '테니스 풋워크', '테니스 기술', '테니스기술'],
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    },
    STRATEGY: {
        id: 'strategy',
        label: '전략 & 멘탈',
        categories: ['테니스 전술', '테니스 경기', '테니스 멘탈', '테니스 루틴', '테니스 복식', '테니스 점수', '테니스 상식', '테니스 역사'],
        color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
    },
    GEAR: {
        id: 'gear',
        label: '장비 (Gear)',
        categories: ['테니스 라켓', '테니스 장비', '테니스 용품', '테니스 신발', '테니스 코트'],
        color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
    },
    HEALTH: {
        id: 'health',
        label: '피트니스 & 건강',
        categories: ['테니스 부상', '테니스 건강', '테니스 회복'],
        color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    },
    SITUATION: {
        id: 'situation',
        label: '상황별 팁',
        categories: ['테니스 초보자', '테니스 중급자', '테니스 상급자', '겨울 테니스', '가을 테니스', '비 오는 날 테니스'],
        color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    },
    PRO: {
        id: 'pro',
        label: '선수 분석',
        categories: ['선수 프로필'],
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
    }
};

export const getCategoryGroup = (category: string) => {
    for (const group of Object.values(CATEGORY_GROUPS)) {
        if (group.categories.includes(category)) {
            return group;
        }
    }
    return null;
};

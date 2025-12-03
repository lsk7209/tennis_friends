import { Metadata } from 'next';
import PlayStyleTestClient from './PlayStyleTestClient';

export const metadata: Metadata = {
    title: '테니스 플레이 스타일 테스트 - 나의 테니스 MBTI 찾기 | TennisFriends',
    description: '14가지 문항으로 알아보는 나의 테니스 플레이 스타일! 공격형, 수비형, 올라운더형 등 나에게 맞는 유형을 찾고 맞춤형 전술과 훈련법을 추천받으세요.',
    keywords: ['테니스 플레이 스타일', '테니스 MBTI', '테니스 성격 테스트', '테니스 전술', '테니스 훈련', '공격형 테니스', '수비형 테니스'],
    openGraph: {
        title: '테니스 플레이 스타일 테스트 - 나의 테니스 MBTI 찾기',
        description: '당신의 테니스 DNA는 무엇인가요? 14가지 질문으로 알아보는 나의 플레이 스타일과 맞춤형 전략!',
        type: 'website',
        url: 'https://tennisfriends.co.kr/utility/play-style-test',
    },
};

export default function PlayStyleTestPage() {
    return <PlayStyleTestClient />;
}

import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '이용약관 | 테니스프렌즈',
    description: '테니스프렌즈 서비스 이용약관입니다. 서비스 이용 조건과 회원의 권리 및 의무를 안내합니다.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:py-16">
                {/* Header */}
                <header className="mb-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
                        이용약관
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        테니스프렌즈 서비스 이용에 관한 약관입니다.
                    </p>
                </header>

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                    <section>
                        <p className="leading-relaxed">
                            본 약관은 <strong>테니스프렌즈</strong>(이하 &quot;회사&quot;라 함)가 제공하는 온라인 서비스(이하 &quot;서비스&quot;라 함)의 이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.
                        </p>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제1조 (목적)
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            본 약관은 회사가 운영하는 웹사이트 및 관련 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임 사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                        </p>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제2조 (정의)
                        </h2>
                        <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                            <li>&quot;서비스&quot;란 회사가 제공하는 테니스 관련 유틸리티, 블로그, 선수 정보, 커뮤니티 등 일체의 온라인 서비스를 말합니다.</li>
                            <li>&quot;이용자&quot;란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 모든 사람을 말합니다.</li>
                            <li>&quot;회원&quot;이란 회사에 개인정보를 제공하여 회원등록을 한 이용자를 말합니다.</li>
                            <li>&quot;콘텐츠&quot;란 서비스 내에서 제공되는 텍스트, 이미지, 동영상, 데이터 등 모든 정보를 말합니다.</li>
                        </ol>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제3조 (약관의 효력 및 변경)
                        </h2>
                        <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                            <li>본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</li>
                            <li>회사는 관련 법령을 위반하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경된 약관은 적용일자 7일 전부터 서비스 내에 공지합니다.</li>
                            <li>이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단하고 탈퇴할 수 있습니다.</li>
                        </ol>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제4조 (서비스의 제공)
                        </h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">회사가 제공하는 서비스는 다음과 같습니다.</p>
                        <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                            <li>테니스 실력 진단 및 분석 도구 (NTRP 테스트, 플레이 스타일 진단 등)</li>
                            <li>테니스 장비 추천 및 계산 도구 (스트링 텐션 계산기, 장비 추천 등)</li>
                            <li>테니스 관련 블로그 콘텐츠 및 가이드</li>
                            <li>프로 테니스 선수 프로필 및 정보</li>
                            <li>훈련 계획 수립 및 건강 관리 도구</li>
                            <li>기타 테니스 관련 유틸리티 서비스</li>
                        </ol>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제5조 (이용자의 의무)
                        </h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">이용자는 다음 행위를 하여서는 안 됩니다.</p>
                        <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                            <li>타인의 정보를 도용하는 행위</li>
                            <li>회사의 서비스 운영을 방해하는 행위</li>
                            <li>서비스를 이용하여 법령 또는 공서양속에 위반하는 행위</li>
                            <li>회사의 지식재산권을 침해하는 행위</li>
                            <li>서비스의 콘텐츠를 무단으로 복제, 배포, 전송하는 행위</li>
                        </ol>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제6조 (면책 조항)
                        </h2>
                        <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                            <li>서비스에서 제공하는 테니스 실력 진단, 부상 위험 예측, 영양 가이드 등의 결과는 참고 용도로만 활용되어야 하며, 전문적인 의료·코칭 조언을 대체하지 않습니다.</li>
                            <li>회사는 천재지변, 시스템 장애 등 불가항력으로 인한 서비스 중단에 대해 책임을 지지 않습니다.</li>
                            <li>이용자가 서비스를 이용하여 기대하는 수익을 얻지 못하거나 서비스를 통해 얻은 자료로 인해 손해를 입은 경우 회사는 이에 대해 책임을 지지 않습니다.</li>
                        </ol>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제7조 (지식재산권)
                        </h2>
                        <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                            <li>서비스 내 회사가 제작한 콘텐츠에 대한 저작권 및 기타 지식재산권은 회사에 귀속됩니다.</li>
                            <li>이용자는 서비스를 이용하면서 얻은 정보를 회사의 사전 승인 없이 상업적으로 이용하거나 제3자에게 제공할 수 없습니다.</li>
                        </ol>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제8조 (분쟁 해결)
                        </h2>
                        <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                            <li>서비스 이용과 관련하여 분쟁이 발생한 경우, 회사와 이용자는 상호 협의하여 원만하게 해결하도록 노력합니다.</li>
                            <li>본 약관에 명시되지 않은 사항에 대해서는 관련 법령에 따릅니다.</li>
                        </ol>
                    </section>

                    <section className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            본 약관은 <strong>2025년 1월 1일</strong>부터 시행합니다.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

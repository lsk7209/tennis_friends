import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '개인정보처리방침 | 테니스프렌즈',
    description: '테니스프렌즈의 개인정보처리방침을 확인하세요. 회원의 개인정보 보호를 위한 정책과 권리를 안내합니다.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:py-16">
                {/* Header */}
                <header className="mb-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
                        개인정보처리방침
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        테니스프렌즈는 이용자의 소중한 개인정보를 안전하게 보호합니다.
                    </p>
                </header>

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                    <section>
                        <p className="leading-relaxed">
                            <strong>테니스프렌즈</strong>(이하 "회사"라 함)는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법령에 따라 이용자의 개인정보를 보호하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
                        </p>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제1조 (수집하는 개인정보 항목 및 수집방법)
                        </h2>
                        <p className="mb-4">회사는 서비스 제공을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.</p>
                        <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                            <li>
                                <strong>회원가입 및 관리:</strong> 닉네임, 프로필 사진, 생년월일, 성별, 테니스 구력(NTRP), 휴대전화번호
                            </li>
                            <li>
                                <strong>서비스 이용 과정:</strong> 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 기기 정보
                            </li>
                            <li>
                                <strong>권한 기반 수집 정보:</strong>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                    <li><strong>카메라/사진:</strong> 프로필 사진 등록 및 매치 정보 등록을 위한 이미지 촬영 및 첨부</li>
                                    <li><strong>저장공간:</strong> 사진 및 파일 저장을 위한 접근</li>
                                    <li><strong>SMS/전화:</strong> 본인 인증 및 회원가입 시 휴대전화번호 확인</li>
                                </ul>
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제2조 (개인정보의 수집 및 이용목적)
                        </h2>
                        <p className="mb-4">회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>
                                <strong>서비스 제공:</strong> 테니스 매치 매칭, 채팅 서비스, 내 주변 매치 찾기 등 핵심 기능 제공
                            </li>
                            <li>
                                <strong>회원 관리:</strong> 본인 확인, 개인 식별, 부정이용 방지, 가입 의사 확인
                            </li>
                            <li>
                                <strong>신규 서비스 개발 및 마케팅:</strong> 신규 기능 개발, 이벤트 정보 및 광고성 정보 제공(동의 시)
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제3조 (개인정보의 보유 및 이용기간)
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우에는 일정 기간 동안 보존합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제4조 (이용자 및 법정대리인의 권리와 그 행사방법)
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입 해지를 요청할 수 있습니다.
                        </p>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제5조 (개인정보보호 책임자)
                        </h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">
                            회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-950 p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                            <div className="flex-1">
                                <strong>담당자:</strong> 테니스프렌즈 관리자
                            </div>
                            <div className="flex-1">
                                <strong>연락처:</strong> info@tennisfrens.com
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                            제6조 (개인정보 처리방침 변경)
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            이 개인정보처리방침은 <strong>2026년 2월 4일</strong>부터 적용됩니다.
                        </p>
                    </section>
                </div>

                <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Tennis Friends. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

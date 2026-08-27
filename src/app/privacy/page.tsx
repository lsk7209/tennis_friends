import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 테니스프렌즈",
  description:
    "테니스프렌즈의 웹 로그 분석, 기기 내 저장 정보, 쿠키와 이용자 권리를 안내합니다.",
  alternates: {
    canonical: "https://tennisfrens.com/privacy",
  },
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
              <strong>테니스프렌즈</strong>(이하 "회사"라 함)는 정보통신망
              이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법령에
              따라 이용자의 개인정보를 보호하고, 이와 관련한 고충을 신속하고
              원활하게 처리할 수 있도록 하기 위하여 다음과 같이
              개인정보처리방침을 수립·공개합니다.
            </p>
          </section>

          <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
              제1조 (수집하는 개인정보 항목 및 수집방법)
            </h2>
            <p className="mb-4">
              테니스프렌즈는 회원가입이나 로그인을 제공하지 않습니다. 사이트
              이용 과정에서 다음 정보가 처리될 수 있습니다.
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Google Analytics:</strong> 접속 페이지, 방문 시간,
                유입 경로, 기기·브라우저 정보와 카페 이동 버튼 클릭 기록
              </li>
              <li>
                <strong>기기 내 저장:</strong> 익명 세션 식별자, 도구·테스트
                이용 기록, NTRP 결과와 최근 방문 기록. 이 정보는 이용자의
                브라우저 저장소에만 보관되며 회원 계정이나 공용 데이터베이스로
                전송되지 않습니다.
              </li>
              <li>
                <strong>수집하지 않는 정보:</strong> 이름, 전화번호, 프로필
                사진, 생년월일, 카메라·SMS·전화 권한과 회원가입 정보
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
              제2조 (개인정보의 수집 및 이용목적)
            </h2>
            <p className="mb-4">
              처리되는 정보는 다음 목적에만 사용합니다.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>기능 제공:</strong> 테스트 진행 상태와 결과, 로컬 이용
                기록을 같은 기기에서 표시
              </li>
              <li>
                <strong>서비스 개선:</strong> 페이지와 도구 이용 흐름, 오류와
                이탈 구간 파악
              </li>
              <li>
                <strong>전환 측정:</strong> 네이버 카페 이동 버튼의 위치별 클릭
                성과 확인
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
              제3조 (개인정보의 보유 및 이용기간)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              기기 내 기록은 브라우저 저장소에 최대 200건까지 유지되며 이용자가
              브라우저 사이트 데이터 또는 로컬 저장소를 삭제하면 함께
              삭제됩니다. Google Analytics 정보의 보유기간과 삭제 기준은
              Google의 정책 및 해당 속성 설정을 따릅니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
              제4조 (이용자 및 법정대리인의 권리와 그 행사방법)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              이용자는 브라우저 설정에서 쿠키를 제한하거나 사이트 데이터를
              삭제할 수 있습니다. Google Analytics 수집을 원하지 않는 경우
              Google Analytics 차단 브라우저 부가기능 또는 브라우저의 추적 방지
              기능을 사용할 수 있습니다. 본 사이트에는 탈퇴가 필요한 회원
              계정이 없습니다.
            </p>
          </section>

          <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
              제5조 (개인정보보호 책임자)
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
              처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와
              같이 개인정보 보호책임자를 지정하고 있습니다.
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

          <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
              제6조 (웹 로그 분석 및 쿠키)
            </h2>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              본 사이트는 광고를 제공하지 않으며, 서비스 이용 흐름과 네이버 카페
              이동 성과를 파악하기 위해 Google Analytics를 사용할 수 있습니다.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>
                웹 로그 분석 과정에서 접속 페이지, 이용 시간, 기기·브라우저 정보,
                카페 이동 버튼 클릭 같은 이용 기록이 처리될 수 있습니다.
              </li>
              <li>
                이용자는{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  Google 개인정보처리방침
                </a>
                에서 관련 처리 기준을 확인할 수 있습니다.
              </li>
              <li>
                이용자는 브라우저 설정에서 쿠키 저장을 제한할 수 있습니다. 이
                경우에도 사이트의 주요 콘텐츠는 열람할 수 있습니다.
              </li>
              <li>
                네이버 카페 등 외부 사이트로 이동한 뒤의 개인정보 처리는 해당
                서비스의 개인정보처리방침을 따릅니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
              제7조 (개인정보 처리방침 변경)
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              이 개인정보처리방침은 <strong>2026년 8월 27일</strong>부터
              적용됩니다.
            </p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Tennis Friends. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Primary line */}
        <div className="h-1 w-full bg-primary/30">
          <div className="h-1 w-1/3 bg-primary"></div>
        </div>

        {/* Footer content */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-gray-900 dark:text-white">
            © {new Date().getFullYear()} TennisFriends. All Rights Reserved.
          </p>

          {/* Policy links */}
          <div className="flex gap-x-6 gap-y-2 flex-wrap justify-center">
            <Link
              href="/about"
              className="text-sm text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              소개
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              문의하기
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              이용 약관
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              개인정보 처리방침
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pb-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            본 사이트의 NTRP 진단, 부상 위험 평가, 영양 가이드 등은 일반적인
            참고 자료이며 전문가의 코칭·의료 진단을 대체하지 않습니다. 구체적인
            상담이 필요하시면 반드시 자격을 갖춘 전문가와 상의하세요.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

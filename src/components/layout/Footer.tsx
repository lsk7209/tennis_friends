import React from 'react';
import Link from 'next/link';

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
          <p className="text-sm text-gray-900 dark:text-white">© 2025 TennisFriends. All Rights Reserved.</p>

          {/* Policy links */}
          <div className="flex gap-x-6 gap-y-2 flex-wrap justify-center">
            <Link href="/terms" className="text-sm text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              이용 약관
            </Link>
            <Link href="/privacy" className="text-sm text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              개인정보 처리방침
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

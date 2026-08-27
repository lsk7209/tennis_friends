'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, BookOpen, Trophy, Home, MessageCircle } from 'lucide-react';
import NaverCafeLink from '@/components/NaverCafeLink';

const navItems = [
  { href: '/', icon: Home, label: '홈' },
  { href: '/utility', icon: Settings, label: '도구' },
  { href: '/blog', icon: BookOpen, label: '블로그' },
  { href: '/players', icon: Trophy, label: '선수' },
];

export default function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 md:hidden">
      <div className="flex justify-around items-center h-16 pb-[env(safe-area-inset-bottom)]">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className={`flex flex-col items-center justify-center flex-1 py-2 transition-colors ${
                active
                  ? '!text-blue-600 dark:!text-blue-400'
                  : '!text-gray-500 dark:!text-gray-300'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] mt-1 font-medium">{item.label}</span>
            </Link>
          );
        })}
        <NaverCafeLink
          ctaLocation="mobile_bottom_nav"
          linkText="카페"
          aria-label="네이버 카페 테니스프렌즈 새 창에서 열기"
          className="flex flex-1 flex-col items-center justify-center py-2 !text-emerald-700 dark:!text-accent-volt"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span className="mt-1 text-[10px] font-bold">카페</span>
        </NaverCafeLink>
      </div>
    </nav>
  );
}

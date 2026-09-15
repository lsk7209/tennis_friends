import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CTAProps {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
    emoji?: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function CTA({
  title = "테니스 실력 향상을 위한 전문 도구를 만나보세요",
  description = "NTRP 실력 테스트부터 개인 맞춤 훈련 플랜까지. 데이터 기반 분석으로 체계적인 테니스 성장 로드맵을 만들어드립니다.",
  primaryButton = {
    text: "실력 테스트 시작하기",
    href: "/utility/ntrp-test",
    emoji: "🏓"
  },
  secondaryButton = {
    text: "모든 도구 보기",
    href: "/utility"
  }
}: CTAProps) {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-8 rounded-xl border border-blue-200 dark:border-blue-800 mt-12">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {title.includes('전문 도구') ? (
            <>테니스 실력 향상을 위한 <span className="text-blue-600 dark:text-blue-400">전문 도구</span>를 만나보세요</>
          ) : (
            title
          )}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"><Link href={primaryButton.href}>
              {primaryButton.emoji && <span className="mr-2">{primaryButton.emoji}</span>}
              {primaryButton.text}
            </Link></Button>
          {secondaryButton && (
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"><Link href={secondaryButton.href}>
                {secondaryButton.text}
              </Link></Button>
          )}
        </div>
      </div>
    </section>
  );
}

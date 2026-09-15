'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type AccessibleErrorStateProps = {
  title: string;
  description: string;
  actionLabel: string;
  actionHref?: string;
  onAction?: () => void;
  icon?: ReactNode;
  className?: string;
  actionClassName?: string;
};

export function AccessibleErrorState({
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
  icon,
  className = 'bg-white',
  actionClassName,
}: AccessibleErrorStateProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 ${className}`}
      aria-labelledby="utility-error-title"
      aria-describedby="utility-error-description"
    >
      <div className="text-center" role="alert">
        {icon}
        <h1
          id="utility-error-title"
          ref={headingRef}
          tabIndex={-1}
          className="mb-2 text-2xl font-bold text-gray-900 outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-4"
        >
          {title}
        </h1>
        <p id="utility-error-description" className="mb-6 text-gray-600">
          {description}
        </p>
        {actionHref ? (
          <Button asChild className={actionClassName}>
            <Link href={actionHref}>{actionLabel}</Link>
          </Button>
        ) : (
          <Button onClick={onAction} className={actionClassName}>
            {actionLabel}
          </Button>
        )}
      </div>
    </section>
  );
}

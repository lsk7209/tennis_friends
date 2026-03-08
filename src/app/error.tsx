'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6 text-red-400">!</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          문제가 발생했습니다
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          일시적인 오류가 발생했습니다. 다시 시도해 주세요.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}

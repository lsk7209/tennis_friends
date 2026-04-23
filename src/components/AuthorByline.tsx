import React from "react";
import Link from "next/link";

interface AuthorBylineProps {
  author?: string;
  authorHref?: string;
  bio?: string;
  publishedAt: string;
  updatedAt?: string;
}

const AuthorByline: React.FC<AuthorBylineProps> = ({
  author = "TennisFriends 편집팀",
  authorHref = "/about",
  bio = "테니스 실력 향상과 경기력 분석 자료를 정리하는 편집팀입니다.",
  publishedAt,
  updatedAt,
}) => {
  return (
    <div className="flex items-start gap-3 py-4 my-6 border-y border-gray-200 dark:border-white/10">
      <div className="flex-1">
        <div className="font-semibold text-gray-900 dark:text-text-light">
          <Link
            href={authorHref}
            className="hover:text-primary transition-colors"
          >
            {author}
          </Link>
        </div>
        {bio && (
          <p className="text-sm text-gray-600 dark:text-text-muted mt-1">
            {bio}
          </p>
        )}
        <div className="text-xs text-gray-500 dark:text-text-muted/80 mt-2 flex flex-wrap gap-x-3">
          <time dateTime={publishedAt}>게시일: {publishedAt}</time>
          {updatedAt && updatedAt !== publishedAt && (
            <time dateTime={updatedAt}>수정일: {updatedAt}</time>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorByline;

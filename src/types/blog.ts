// 블로그 포스트 타입 정의
export interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  badge?: string;
  category: string;
  date: string;
  readTime: string;
  badgeColor?: string;
  categoryColor?: string;
}

export interface BlogPost extends BlogPostData {
  description: string;
  tags: string[];
  content: string;
  author: string;
  summary: string;
  highlight: string;
}


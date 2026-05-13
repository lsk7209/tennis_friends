import type { BlogPostData } from "@/types/blog";

type PublishableBlogPost = BlogPostData & {
  scheduledAt?: string;
};

const SEOUL_DATE_SUFFIX = "T00:00:00+09:00";

function toPublishTime(post: PublishableBlogPost): number {
  const publishDate = post.scheduledAt || post.date;
  const normalizedDate = publishDate.includes("T")
    ? publishDate
    : `${publishDate}${SEOUL_DATE_SUFFIX}`;
  const timestamp = Date.parse(normalizedDate);

  return Number.isNaN(timestamp) ? 0 : timestamp;
}

export function getBlogPublishDate(post: PublishableBlogPost) {
  return new Date(toPublishTime(post));
}

export function isPublishedBlogPost(
  post: PublishableBlogPost,
  now = new Date(),
) {
  return toPublishTime(post) <= now.getTime();
}

export function getPublishedBlogPosts<T extends PublishableBlogPost>(
  posts: readonly T[],
  now = new Date(),
) {
  return posts.filter((post) => isPublishedBlogPost(post, now));
}

export function sortBlogPostsByPublishTime<T extends PublishableBlogPost>(
  posts: readonly T[],
) {
  return [...posts].sort((a, b) => toPublishTime(b) - toPublishTime(a));
}

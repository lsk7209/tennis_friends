import type { BlogPostData } from "@/types/blog";

type PublishableBlogPost = BlogPostData & {
  scheduledAt?: string;
};

const SEOUL_DATE_SUFFIX = "T00:00:00+09:00";

function toPublishTime(post: PublishableBlogPost): number | null {
  const publishDate = post.scheduledAt || post.date;
  const normalizedDate = publishDate.includes("T")
    ? publishDate
    : `${publishDate}${SEOUL_DATE_SUFFIX}`;
  const timestamp = Date.parse(normalizedDate);

  return Number.isNaN(timestamp) ? null : timestamp;
}

export function getBlogPublishDate(post: PublishableBlogPost) {
  const timestamp = toPublishTime(post);
  return new Date(timestamp ?? Number.NaN);
}

export function isPublishedBlogPost(
  post: PublishableBlogPost,
  now = new Date(),
) {
  const timestamp = toPublishTime(post);
  return (
    post.publicationState !== "draft" &&
    post.publicationState !== "private" &&
    timestamp !== null &&
    timestamp <= now.getTime()
  );
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
  return [...posts].sort(
    (a, b) => (toPublishTime(b) ?? -Infinity) - (toPublishTime(a) ?? -Infinity),
  );
}

export function paginatePublishedBlogPosts<T>(
  posts: readonly T[],
  requestedPage: number,
  postsPerPage: number,
) {
  if (!Number.isInteger(postsPerPage) || postsPerPage < 1) {
    throw new RangeError("postsPerPage must be a positive integer");
  }

  const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage));
  const outOfRange =
    !Number.isInteger(requestedPage) ||
    requestedPage < 1 ||
    requestedPage > totalPages;
  const start = outOfRange ? 0 : (requestedPage - 1) * postsPerPage;

  return {
    posts: outOfRange ? [] : posts.slice(start, start + postsPerPage),
    currentPage: requestedPage,
    totalPages,
    totalPosts: posts.length,
    outOfRange,
  };
}

export function getBlogPageHref(page: number) {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

export function getPaginationWindow(currentPage: number, totalPages: number) {
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  return Array.from({ length: Math.max(0, end - start + 1) }, (_, index) =>
    getBlogPageHref(start + index),
  );
}

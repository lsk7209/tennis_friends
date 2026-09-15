import { allBlogPosts } from "@/data/blog-posts";
import {
  getBlogPublishDate,
  getPublishedBlogPosts,
  paginatePublishedBlogPosts,
} from "@/lib/blog-publish";
import { isIndexableBlogSlug } from "@/lib/blog-quality";
import {
  BADGE_COLORS,
  BADGE_LABELS,
  CATEGORY_COLORS,
  POSTS_PER_PAGE,
} from "@/lib/constants";

export type BlogIndexPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  badge: string;
  badgeColor: string;
  categoryColor: string;
};

function getPublishedIndexPosts(): BlogIndexPost[] {
  return getPublishedBlogPosts(allBlogPosts)
    .filter((post) => isIndexableBlogSlug(post.slug))
    .sort(
      (a, b) =>
        getBlogPublishDate(b).getTime() - getBlogPublishDate(a).getTime(),
    )
    .map((post, index) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      date: getBlogPublishDate(post).toISOString().slice(0, 10),
      readTime: post.readTime || `${8 + (index % 5) * 2}분`,
      badge: BADGE_LABELS[index % BADGE_LABELS.length],
      badgeColor: BADGE_COLORS[index % BADGE_COLORS.length],
      categoryColor: CATEGORY_COLORS[index % CATEGORY_COLORS.length],
    }));
}

export function getBlogIndexPageCount(): number {
  return Math.max(1, Math.ceil(getPublishedIndexPosts().length / POSTS_PER_PAGE));
}

export function getBlogIndexPageCapacity(): number {
  return Math.max(
    1,
    Math.ceil(
      allBlogPosts.filter((post) => isIndexableBlogSlug(post.slug)).length /
        POSTS_PER_PAGE,
    ),
  );
}

export function getBlogIndexPage(page: number) {
  const posts = getPublishedIndexPosts();
  return paginatePublishedBlogPosts(posts, page, POSTS_PER_PAGE);
}

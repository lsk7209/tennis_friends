import { NextResponse, type NextRequest } from "next/server";
import { allBlogPosts } from "@/data/blog-posts";
import { isPublishedBlogPost } from "@/lib/blog-publish";
import { isIndexableBlogSlug } from "@/lib/blog-quality";

const BLOG_PATH_PREFIX = "/blog/";
const NO_INDEX_HEADERS = {
  "x-robots-tag": "noindex",
};

function getBlogSlug(pathname: string) {
  if (!pathname.startsWith(BLOG_PATH_PREFIX)) {
    return null;
  }

  const slug = pathname.slice(BLOG_PATH_PREFIX.length).replace(/\/$/, "");

  return slug && !slug.includes("/") ? decodeURIComponent(slug) : null;
}

export function proxy(request: NextRequest) {
  const slug = getBlogSlug(request.nextUrl.pathname);

  if (!slug) {
    return NextResponse.next();
  }

  const post = allBlogPosts.find((item) => item.slug === slug);

  if (post && !isPublishedBlogPost(post)) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: NO_INDEX_HEADERS,
    });
  }

  // Let Next.js resolve exact custom pages before the dynamic [slug] route.
  // Rewriting every known slug to the shared renderer hid custom articles and
  // could produce an empty body when the shared content map had no entry.
  const response = NextResponse.next();

  if (!isIndexableBlogSlug(slug)) {
    response.headers.set("x-robots-tag", "noindex, follow");
  }

  return response;
}

export const config = {
  matcher: ["/blog/:slug*"],
};

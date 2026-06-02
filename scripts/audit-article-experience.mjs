import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const BLOG_PAGE = "src/app/blog/[slug]/page.tsx";
const BLOG_RENDER_PAGE = "src/app/blog-render/[slug]/page.tsx";
const PROXY = "src/proxy.ts";

const findings = [];

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function hasMojibake(value) {
  return /[\uFFFD]|\?\?\?|\?[\uAC00-\uD7AF\u4E00-\u9FFF\uF900-\uFAFF]|[\uF900-\uFAFF]/.test(value);
}

function countIncludes(source, needles) {
  return needles.filter((needle) => source.includes(needle)).length;
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

const blogPage = readProjectFile(BLOG_PAGE);
const blogRenderPage = readProjectFile(BLOG_RENDER_PAGE);
const proxy = readProjectFile(PROXY);

const articleRequirements = [
  {
    issue: "article title h1 missing",
    ok: blogPage.includes("itemProp=\"headline\"") && blogPage.includes("<h1"),
  },
  {
    issue: "article subtitle/description missing",
    ok:
      blogPage.includes("itemProp=\"description\"") &&
      blogPage.includes("{post.excerpt}"),
  },
  {
    issue: "metadata description is not built from rich content",
    ok:
      blogPage.includes("buildSeoDescription(") &&
      blogPage.includes("contentData?.summary") &&
      blogPage.includes("contentData?.highlight"),
  },
  {
    issue: "canonical metadata missing",
    ok: blogPage.includes("alternates: { canonical }"),
  },
  {
    issue: "indexability is not tied to quality gate",
    ok:
      blogPage.includes("isIndexableBlogSlug(post.slug)") &&
      blogPage.includes("robots:"),
  },
  {
    issue: "BlogPosting schema missing",
    ok:
      blogPage.includes("<EnhancedBlogPostSchema") &&
      blogPage.includes("articleBody={enrichedPost.content"),
  },
  {
    issue: "breadcrumb schema missing",
    ok: blogPage.includes("<BreadcrumbSchema items={breadcrumbItems}"),
  },
  {
    issue: "summary block missing",
    ok:
      blogPage.includes('id="summary-heading"') &&
      blogPage.includes("{enrichedPost.summary}"),
  },
  {
    issue: "key point block missing",
    ok: blogPage.includes("{enrichedPost.highlight}"),
  },
  {
    issue: "table of contents missing",
    ok:
      blogPage.includes('aria-label="Table of contents"') &&
      blogPage.includes('href="#article-content"'),
  },
  {
    issue: "FAQ/AEO section missing",
    ok:
      blogPage.includes("<FAQSection") &&
      blogPage.includes("contentData?.faq?.map"),
  },
  {
    issue: "related blog links missing",
    ok:
      blogPage.includes("getRelatedBlogPosts(") &&
      blogPage.includes("<RelatedContent") &&
      blogPage.includes('type="blog"'),
  },
  {
    issue: "related utility links missing",
    ok:
      blogPage.includes("getRelatedUtilityLinks(") &&
      blogPage.includes("relatedTools.map") &&
      blogPage.includes("href={tool.href}"),
  },
  {
    issue: "tag keyword chips missing",
    ok: blogPage.includes('itemProp="keywords"') && blogPage.includes("enrichedPost.tags"),
  },
  {
    issue: "mobile table wrapper missing",
    ok:
      blogPage.includes('replace(/<table/g') &&
      blogPage.includes('class="table-wrapper"'),
  },
  {
    issue: "middle ad split after headings missing",
    ok:
      blogPage.includes("MIDDLE_AD_AFTER_HEADING_COUNT") &&
      blogPage.includes("splitContentForMiddleAd(processedContent)"),
  },
];

for (const requirement of articleRequirements) {
  assert(requirement.ok, { scope: "article page", issue: requirement.issue });
}

const adSlots = [
  "NEXT_PUBLIC_ADSENSE_ARTICLE_TOP_SLOT",
  "NEXT_PUBLIC_ADSENSE_ARTICLE_MIDDLE_SLOT",
  "NEXT_PUBLIC_ADSENSE_ARTICLE_BOTTOM_SLOT",
  "5442683582",
  "4809500982",
  "8552062650",
];

assert(countIncludes(blogPage, adSlots) === adSlots.length, {
  scope: "article ads",
  issue: "article page does not include all required ad slot bindings and fallbacks",
  expected: adSlots,
});

assert((blogPage.match(/<AdSenseSlot/g) || []).length >= 3, {
  scope: "article ads",
  issue: "article page does not render three ad slot placements",
});

assert(!hasMojibake(blogPage), {
  scope: "article source",
  issue: "article page contains mojibake marker",
});

assert(
  blogRenderPage.includes('from "@/app/blog/[slug]/page"') &&
    blogRenderPage.includes("generateMetadata"),
  {
    scope: "blog render route",
    issue: "rewrite target does not re-export canonical blog page",
  },
);

assert(proxy.includes("`/blog-render/${encodeURIComponent(slug)}`"), {
  scope: "proxy",
  issue: "blog proxy rewrite to blog-render route missing",
});

assert(proxy.includes('response.headers.set("x-robots-tag", "noindex, follow")'), {
  scope: "proxy",
  issue: "low-quality blog noindex header guard missing",
});

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  checkedRequirements: articleRequirements.length + 5,
  findings,
};

fs.writeFileSync(
  path.join(REPORTS_DIR, "article-experience-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));

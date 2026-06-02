import { BLOG_CONTENT_PART1 } from "./part1";
import { BLOG_CONTENT_PART2 } from "./part2";
import { BLOG_CONTENT_PART3 } from "./part3";
import { BLOG_CONTENT_PART4_NEW30 } from "./part4-new30";
import { BLOG_CONTENT_PART5_SCHEDULED } from "./part5-scheduled";
import { BLOG_CONTENT_PART6_GENERATED } from "./part6-generated";
import { BLOG_CONTENT_PART7_GENERATED } from "./part7-generated";
import { BLOG_CONTENT_PART8_BULK_01 } from "./part8-bulk-01";
import { BLOG_CONTENT_PART8_BULK_02 } from "./part8-bulk-02";
import { BLOG_CONTENT_PART8_BULK_03 } from "./part8-bulk-03";
import { BLOG_CONTENT_PART8_BULK_04 } from "./part8-bulk-04";
import { BLOG_CONTENT_PART9_SCHEDULED_100 } from "./part9-scheduled-100";
import { BLOG_CONTENT_PART10_SCHEDULED_300 } from "./part10-scheduled-300";
import { BLOG_CONTENT_ARTICLE_WRITER_300 } from "./part11-article-writer-300";
import { BLOG_CONTENT_PART12_ARTICLE_WRITER_300 } from "./part12-article-writer-300";
import { BLOG_CONTENT_PART13_OPTIMIZED } from "./part13-optimized";
import { BLOG_CONTENT_PART14_TITLE100 } from "./part14-title100";
import { BLOG_CONTENT_PART16_QUALITY_REWRITES } from "./part16-quality-rewrites";
import { BLOG_CONTENT_PART17_QUALITY_REWRITES } from "./part17-quality-rewrites";
import { BLOG_CONTENT_PART18_QUALITY_REWRITES } from "./part18-quality-rewrites";
import { BLOG_CONTENT_PART19_QUALITY_REWRITES } from "./part19-quality-rewrites";
import { BLOG_CONTENT_PART20_QUALITY_REWRITES } from "./part20-quality-rewrites";
import { BLOG_CONTENT_PART21_QUALITY_REWRITES } from "./part21-quality-rewrites";
import { BLOG_CONTENT_PART22_QUALITY_REWRITES } from "./part22-quality-rewrites";
import { BLOG_CONTENT_PART23_QUALITY_REWRITES } from "./part23-quality-rewrites";
import { BLOG_CONTENT_PART24_QUALITY_REWRITES } from "./part24-quality-rewrites";
import { BLOG_CONTENT_PART25_QUALITY_REWRITES } from "./part25-quality-rewrites";
import { BLOG_CONTENT_PART26_QUALITY_REWRITES } from "./part26-quality-rewrites";

type BlogContentEntry = {
  content: string;
  tags: string[];
  summary: string;
  highlight: string;
  faq?: { question: string; answer: string }[];
};

export const blogContentMap: Record<string, BlogContentEntry> = {
  ...BLOG_CONTENT_PART1,
  ...BLOG_CONTENT_PART2,
  ...BLOG_CONTENT_PART3,
  ...BLOG_CONTENT_PART4_NEW30,
  ...BLOG_CONTENT_PART5_SCHEDULED,
  ...BLOG_CONTENT_PART6_GENERATED,
  ...BLOG_CONTENT_PART7_GENERATED,
  ...BLOG_CONTENT_PART8_BULK_01,
  ...BLOG_CONTENT_PART8_BULK_02,
  ...BLOG_CONTENT_PART8_BULK_03,
  ...BLOG_CONTENT_PART8_BULK_04,
  ...BLOG_CONTENT_PART9_SCHEDULED_100,
  ...BLOG_CONTENT_PART10_SCHEDULED_300,
  ...BLOG_CONTENT_ARTICLE_WRITER_300,
  ...BLOG_CONTENT_PART12_ARTICLE_WRITER_300,
  ...BLOG_CONTENT_PART13_OPTIMIZED,
  ...BLOG_CONTENT_PART14_TITLE100,
  ...BLOG_CONTENT_PART16_QUALITY_REWRITES,
  ...BLOG_CONTENT_PART17_QUALITY_REWRITES,
  ...BLOG_CONTENT_PART18_QUALITY_REWRITES,
  ...BLOG_CONTENT_PART19_QUALITY_REWRITES,
  ...BLOG_CONTENT_PART20_QUALITY_REWRITES,
  ...BLOG_CONTENT_PART21_QUALITY_REWRITES,
  ...BLOG_CONTENT_PART22_QUALITY_REWRITES,
  ...BLOG_CONTENT_PART23_QUALITY_REWRITES,
  ...BLOG_CONTENT_PART24_QUALITY_REWRITES,
  ...BLOG_CONTENT_PART25_QUALITY_REWRITES,
  ...BLOG_CONTENT_PART26_QUALITY_REWRITES,
};

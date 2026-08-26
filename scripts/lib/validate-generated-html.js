"use strict";

const ALLOWED_TAGS = new Set([
  "h2", "h3", "p", "ul", "ol", "li", "strong", "em", "br",
]);
const FORBIDDEN_CONTENT = /```|<\/?(?:script|style|iframe|object|embed|svg|math|form|input|button|a|img)\b|javascript:|data:text\/html|on[a-z]+\s*=|\$\{/i;

function validateGeneratedHtml(html, { minHeadings = 1, maxLength = 50_000 } = {}) {
  if (typeof html !== "string" || !html.trim()) {
    throw new Error("Generated HTML is empty");
  }
  if (html.length > maxLength) {
    throw new Error(`Generated HTML exceeds ${maxLength} characters`);
  }
  if (FORBIDDEN_CONTENT.test(html)) {
    throw new Error("Generated HTML contains forbidden executable content");
  }

  const tags = [...html.matchAll(/<\s*(\/?)\s*([a-z0-9-]+)([^>]*)>/gi)];
  const openTags = [];
  for (const [, closing, rawName, rawAttributes] of tags) {
    const name = rawName.toLowerCase();
    if (!ALLOWED_TAGS.has(name)) {
      throw new Error(`Generated HTML contains disallowed tag <${name}>`);
    }
    const attributes = rawAttributes.replace(/\/$/, "").trim();
    if (!closing && attributes) {
      throw new Error(`Generated HTML attributes are not allowed on <${name}>`);
    }
    if (name === "br") continue;
    if (closing) {
      if (openTags.pop() !== name) {
        throw new Error(`Generated HTML has an unbalanced </${name}> tag`);
      }
    } else {
      openTags.push(name);
    }
  }
  if (openTags.length > 0) {
    throw new Error(`Generated HTML has an unclosed <${openTags.at(-1)}> tag`);
  }

  const headingCount = tags.filter(([, closing, name]) =>
    !closing && /^h[23]$/i.test(name),
  ).length;
  if (headingCount < minHeadings) {
    throw new Error(`Generated HTML needs at least ${minHeadings} headings`);
  }

  return html.trim();
}

module.exports = { ALLOWED_TAGS, validateGeneratedHtml };

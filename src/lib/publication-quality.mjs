const BLOCKED_STATUSES = new Set(["blocked", "rejected", "do-not-publish"]);
const SENSITIVE_PATTERN = /[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}|(?:^|\D)01[016789][^0-9]*\d{3,4}[^0-9]*\d{4}(?:\D|$)/;

export function evaluatePublicationCandidate(candidate, knownRoutes = new Set()) {
  const hardErrors = [];
  const warnings = [];
  if (!candidate || typeof candidate !== "object") hardErrors.push("invalid_structure");
  if (!candidate?.slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(candidate.slug)) hardErrors.push("invalid_slug");
  if (!candidate?.title || typeof candidate.title !== "string") hardErrors.push("missing_title");
  if (BLOCKED_STATUSES.has(candidate?.status)) hardErrors.push("blocked_status");
  if (typeof candidate?.body !== "string" || !candidate.body.trim()) hardErrors.push("missing_body");
  if (SENSITIVE_PATTERN.test(candidate?.body ?? "")) hardErrors.push("sensitive_data");
  if (/전문가\s*검수|의사\s*검수|코치\s*검수/.test(candidate?.body ?? "") && !candidate?.reviewEvidence) {
    hardErrors.push("unsupported_review_claim");
  }
  for (const [, route] of (candidate?.body ?? "").matchAll(/\[[^\]]+\]\((\/[^)#?]+)[^)]*\)/g)) {
    if (knownRoutes.size && !knownRoutes.has(route)) hardErrors.push(`broken_internal_link:${route}`);
  }
  if ((candidate?.body ?? "").length < 800) warnings.push("short_body");
  if ((candidate?.title ?? "").length > 70) warnings.push("long_title");
  if (!/https?:\/\//.test(candidate?.body ?? "")) warnings.push("no_external_source");
  return { hardErrors: [...new Set(hardErrors)], warnings: [...new Set(warnings)] };
}

export function assertPublishable(candidate, knownRoutes) {
  const result = evaluatePublicationCandidate(candidate, knownRoutes);
  if (result.hardErrors.length) throw new Error(`Publication blocked: ${result.hardErrors.join(", ")}`);
  return result;
}

/**
 * External analytics and advertising are disabled for ordinary local, test,
 * and preview builds. Production delivery must identify itself explicitly.
 */
export function isProductionExternalEffectsEnabled(): boolean {
  return (
    process.env.NEXT_PUBLIC_EXTERNAL_EFFECTS === "production" ||
    process.env.VERCEL_ENV === "production"
  );
}

/** Ad delivery is a stricter gate than analytics: enable only after certified
 * CMP, TCF version, regional behavior, and account/site assignment are verified. */
export function isAdsConsentReady(): boolean {
  return isProductionExternalEffectsEnabled() && process.env.NEXT_PUBLIC_ADS_CONSENT_READY === "verified";
}

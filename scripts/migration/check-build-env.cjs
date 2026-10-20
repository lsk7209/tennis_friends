const stage = process.env.NEXT_PUBLIC_DEPLOYMENT_STAGE;
if (!['staging', 'production'].includes(stage)) throw new Error('Explicit deployment stage required');
if (process.env.NEXT_PUBLIC_SITE_URL !== 'https://tennisfrens.com') throw new Error('Canonical origin changed');
if (process.env.GITHUB_PAGES === 'true' || process.env.STATIC_EXPORT === 'true') throw new Error('Mirror mode forbidden');
if (process.env.NEXT_PUBLIC_ADS_CONSENT_READY === 'verified') throw new Error('Migration does not authorize ad activation');
if (stage === 'staging' && process.env.NEXT_PUBLIC_EXTERNAL_EFFECTS !== 'disabled') throw new Error('Staging analytics must be disabled');
if (stage === 'production' && process.env.NEXT_PUBLIC_EXTERNAL_EFFECTS !== 'production') throw new Error('Production analytics must be explicit');
console.log('Migration build environment verified');

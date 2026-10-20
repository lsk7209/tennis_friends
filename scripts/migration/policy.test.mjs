import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { isProductionExternalEffectsEnabled, isAdsConsentReady } from '../../src/lib/external-effects.ts';
const keys = ['NEXT_PUBLIC_DEPLOYMENT_STAGE','NEXT_PUBLIC_EXTERNAL_EFFECTS','VERCEL_ENV','NEXT_PUBLIC_ADS_CONSENT_READY'];
test('staging fails closed even with Vercel production and verified ads flags', () => {
  const prior = Object.fromEntries(keys.map(k => [k,process.env[k]]));
  try {
    process.env.NEXT_PUBLIC_DEPLOYMENT_STAGE='staging';
    process.env.NEXT_PUBLIC_EXTERNAL_EFFECTS='production';
    process.env.VERCEL_ENV='production';
    process.env.NEXT_PUBLIC_ADS_CONSENT_READY='verified';
    assert.equal(isProductionExternalEffectsEnabled(),false);
    assert.equal(isAdsConsentReady(),false);
    process.env.NEXT_PUBLIC_DEPLOYMENT_STAGE='production';
    process.env.NEXT_PUBLIC_ADS_CONSENT_READY='unverified';
    delete process.env.VERCEL_ENV;
    assert.equal(isProductionExternalEffectsEnabled(),true);
    assert.equal(isAdsConsentReady(),false);
    process.env.NEXT_PUBLIC_EXTERNAL_EFFECTS='disabled';
    process.env.VERCEL_ENV='production';
    assert.equal(isProductionExternalEffectsEnabled(),false);
  } finally {for (const k of keys) {if(prior[k]===undefined) delete process.env[k]; else process.env[k]=prior[k];}}
});
test('build refuses mirror flags, wrong canonical and unverified ad enablement', () => {
  const env={...process.env,NEXT_PUBLIC_DEPLOYMENT_STAGE:'staging',NEXT_PUBLIC_EXTERNAL_EFFECTS:'disabled',NEXT_PUBLIC_SITE_URL:'https://tennisfrens.com',NEXT_PUBLIC_ADS_CONSENT_READY:'unverified',GITHUB_PAGES:'false',STATIC_EXPORT:'false'};
  const run = changes => spawnSync(process.execPath,['scripts/migration/check-build-env.cjs'],{env:{...env,...changes}}).status;
  assert.equal(run({}),0);
  for(const changes of [{STATIC_EXPORT:'true'},{GITHUB_PAGES:'true'},{NEXT_PUBLIC_SITE_URL:'https://example.invalid'},{NEXT_PUBLIC_ADS_CONSENT_READY:'verified'},{NEXT_PUBLIC_EXTERNAL_EFFECTS:'production'}]) assert.notEqual(run(changes),0);
});

import fs from 'node:fs';

const read = (file) => fs.readFileSync(file, 'utf8');
const layout = read('src/app/layout.tsx');
const privacy = read('src/app/privacy/page.tsx');
const effects = read('src/lib/external-effects.ts');
const adsTxt = read('public/ads.txt').trim();
const contract = read('docs/tennisfrens-audit/ADS_CONSENT_CONTRACT.md');
const client = 'ca-pub-3050601904412736';
const failures = [];

if (!layout.includes(client) || !layout.includes('adsbygoogle.js')) failures.push('AdSense loader binding missing');
if (!layout.includes('adsConsentReady &&') || !effects.includes('NEXT_PUBLIC_ADS_CONSENT_READY === "verified"')) failures.push('verified CMP fail-closed gate missing');
if (adsTxt !== 'google.com, pub-3050601904412736, DIRECT, f08c47fec0942fa0') failures.push('ads.txt binding mismatch');
if (!privacy.includes('광고 승인, 실제 광고 송출 여부, 지역별 동의 요구사항')) failures.push('privacy disclosure missing');
for (const token of ['TCF v2.3', 'NOT_VERIFIED', '13554116', '16942036', '동의 철회']) {
  if (!contract.includes(token)) failures.push(`consent contract missing ${token}`);
}

const report = {
  generatedAt: new Date().toISOString(),
  status: failures.length ? 'FAIL' : 'PASS',
  sourceBinding: failures.length ? 'INVALID' : 'VERIFIED',
  adsenseAccountApproval: null,
  siteAssignment: null,
  productionAdDelivery: null,
  certifiedCmp: null,
  tcfVersion: null,
  regionalRuntimeBehavior: null,
  deploymentReadiness: 'NOT_READY_ACCOUNT_AND_CMP_EVIDENCE_REQUIRED',
  failures,
};

fs.writeFileSync('docs/reports/ads-consent-contract-audit-latest.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;

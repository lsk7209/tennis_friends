import fs from 'node:fs';

const workflow = fs.readFileSync('.github/workflows/quality.yml', 'utf8');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const failures = [];

for (const token of ['pull_request:', 'workflow_dispatch:', 'npm ci', 'npm run verify', 'timeout-minutes:']) {
  if (!workflow.includes(token)) failures.push(`quality workflow missing ${token}`);
}
if (/^\s*schedule:/m.test(workflow)) failures.push('quality workflow must not activate an unapproved schedule');
if (!packageJson.scripts.verify?.includes('lint') || !packageJson.scripts.verify?.includes('type-check') || !packageJson.scripts.verify?.includes('build')) {
  failures.push('verify script must include lint, type-check, and build');
}

const report = {
  generatedAt: new Date().toISOString(),
  status: failures.length ? 'FAIL' : 'PASS',
  triggers: ['pull_request', 'workflow_dispatch'],
  scheduled: false,
  command: 'npm run verify',
  exceptionPolicy: 'any non-zero audit, lint, typecheck, or build exit fails the job',
  failures,
};
fs.writeFileSync('docs/reports/quality-workflow-audit-latest.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;

"""Validate a frozen source manifest and, explicitly, build an isolated CI image."""

import argparse
import gzip
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import shutil
import subprocess
import tempfile
import time
import urllib.error
import urllib.request

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / '.github/release/ovh-source-manifest.json'
OUTPUT = ROOT / 'release-artifacts'
REVISION = 'caecd5f9a76c021d72b00910f2ae789458ac90ca'
NODE_IMAGE = 'node@sha256:d6aa754f16b3197301076f047b5def2f02ea1dbbc2ca920407d46d7ec7f87b20'
MEMORY = 4 * 1024**3


def run(*args):
    return subprocess.check_output(args, text=True).strip()


def validate_manifest():
    record = json.loads(MANIFEST.read_text(encoding='utf-8'))
    files = record.get('files')
    if record.get('baseSha') != REVISION or not isinstance(files, dict) or not files:
        raise RuntimeError('invalid frozen source manifest/base SHA')
    for name, expected in files.items():
        if not isinstance(name, str):
            raise RuntimeError('manifest path must be text')
        path = PurePosixPath(name)
        if (not path.parts or path.is_absolute() or '..' in path.parts
                or '\\' in name or str(path) != name or not isinstance(expected, str)
                or len(expected) != 64 or any(c not in '0123456789abcdef' for c in expected)):
            raise RuntimeError(f'invalid manifest entry: {name}')
        if not (path.parts[0] in ('src', 'public', 'scripts') or name in (
                'Dockerfile', '.dockerignore', 'compose.production.yaml', 'package.json',
                'package-lock.json', 'next.config.ts', 'tsconfig.json', 'postcss.config.mjs',
                'eslint.config.mjs', 'next-env.d.ts')):
            raise RuntimeError(f'file outside source allowlist: {name}')
        if (path.name == '.env' or path.name.startswith('.env.')
                or path.suffix in ('.pem', '.key', '.p12', '.pfx', '.log', '.pyc',
                                   '.tar', '.tgz', '.gz', '.zip')
                or any(part in ('production-evidence', '__pycache__', 'release-artifacts')
                       for part in path.parts)):
            raise RuntimeError(f'excluded source path: {name}')
        source = ROOT / name
        if any(part.is_symlink() for part in (source, *source.parents) if part != ROOT.parent) or not source.is_file():
            raise RuntimeError(f'missing or symlinked source: {name}')
        if hashlib.sha256(source.read_bytes()).hexdigest() != expected:
            raise RuntimeError(f'frozen source changed: {name}')
    digest = hashlib.sha256(json.dumps(files, sort_keys=True).encode()).hexdigest()
    if record.get('sourceDigest') != digest:
        raise RuntimeError('source manifest digest mismatch')
    for required in ('Dockerfile', '.dockerignore', 'package.json', 'package-lock.json',
                     'scripts/migration/check-build-env.cjs', 'scripts/migration/healthcheck.cjs'):
        if required not in files:
            raise RuntimeError(f'required build file absent: {required}')
    if 'NEXT_PUBLIC_ADS_CONSENT_READY=unverified' not in (ROOT / 'Dockerfile').read_text(encoding='utf-8'):
        raise RuntimeError('Dockerfile consent gate changed')
    return record, digest


def http_check(port, path, status, markers=(), no_store=False):
    request = urllib.request.Request(f'http://127.0.0.1:{port}{path}')
    try:
        response = urllib.request.urlopen(request, timeout=30)
    except urllib.error.HTTPError as error:
        response = error
    with response:
        body = response.read().decode('utf-8', errors='replace')
        if response.status != status or any(marker not in body for marker in markers):
            raise RuntimeError(f'smoke mismatch: {path}, HTTP {response.status}')
        if no_store and 'no-store' not in response.headers.get('Cache-Control', '').lower():
            raise RuntimeError(f'missing no-store: {path}')


def smoke(image):
    name = 'tennisfriends-ci-smoke-' + os.urandom(6).hex()
    container = None
    try:
        container = run('docker', 'run', '-d', '--name', name, '--memory', '1g', '--cpus', '1',
                        '--cap-drop', 'ALL', '--security-opt', 'no-new-privileges',
                        '--pids-limit', '128', '-p', '127.0.0.1::3000', image)
        actual = json.loads(run('docker', 'inspect', container))[0]
        limits = actual['HostConfig']
        if (actual['Image'] != json.loads(run('docker', 'image', 'inspect', image))[0]['Id']
                or limits['Memory'] != 1024**3 or limits['NanoCpus'] != 10**9
                or limits['PidsLimit'] != 128 or 'ALL' not in limits['CapDrop']
                or 'no-new-privileges' not in limits['SecurityOpt']):
            raise RuntimeError('smoke container isolation differs')
        port = run('docker', 'port', container, '3000/tcp').rsplit(':', 1)[-1]
        last_error = None
        for _ in range(60):
            try:
                http_check(port, '/', 200, ('data-external-effects="production"',))
                break
            except (RuntimeError, urllib.error.URLError) as error:
                last_error = error
                time.sleep(2)
        else:
            raise RuntimeError(f'smoke container did not become ready: {last_error}') from last_error
        for slug, marker in (
                ('tennis-elbow-load-management-match-application', 'merseycare.nhs.uk/elbow-pain'),
                ('tennis-knee-footwork-load-monthly-review', 'www.nhs.uk/symptoms/knee-pain'),
                ('tf-title100-injury-recovery-076', 'www.nhs.uk/symptoms/knee-pain')):
            http_check(port, '/blog/' + slug, 200, ('2026년 10월 20일', marker))
        http_check(port, '/players/hubert-hurkacz', 200, ('2021년', '2023년'))
        http_check(port, '/players/andrey-rublev', 200, ('2023년', '몬테카를로'))
        http_check(port, '/migration-does-not-exist', 404, no_store=True)
        http_check(port, '/blog/nov26-ntrp-observation-plan', 404, no_store=True)
        rss = run('docker', 'exec', container, 'node', '-e',
                  "let x=require('fs').readFileSync('/sys/fs/cgroup/memory.stat','utf8');console.log(x.match(/^anon (\\d+)/m)?.[1]||'')")
        return int(rss)
    except Exception as error:
        if container:
            logs = subprocess.run(['docker', 'logs', container], capture_output=True, text=True)
            (OUTPUT / 'smoke.log').write_text(logs.stdout + logs.stderr, encoding='utf-8')
        (OUTPUT / 'smoke-failure.json').write_text(json.dumps({
            'image': image, 'container': container, 'errorType': type(error).__name__,
            'error': str(error)}, indent=2) + '\n', encoding='utf-8')
        raise
    finally:
        if container:
            subprocess.run(['docker', 'rm', '-f', container], check=False, capture_output=True)


def build(record, digest):
    if os.name != 'posix' or not os.environ.get('GITHUB_SHA'):
        raise RuntimeError('--build requires the GitHub Linux runner')
    available_kib = int(next(line.split()[1] for line in Path('/proc/meminfo').read_text().splitlines()
                             if line.startswith('MemAvailable:')))
    if available_kib < 5.5 * 1024**2:
        raise RuntimeError('CI build requires 5.5 GiB available RAM')
    if shutil.disk_usage(ROOT).free < 15 * 1024**3:
        raise RuntimeError('CI build requires 15 GiB free disk')
    builder = 'tennisfriends-ci-' + digest[:12]
    image = 'ovh-tennisfriends-production:caecd5f-' + digest[:12]
    OUTPUT.mkdir(exist_ok=True)
    log_path = OUTPUT / 'build.log'
    start = time.monotonic()
    with tempfile.TemporaryDirectory(prefix='tennisfriends-ci-') as temporary:
        context = Path(temporary)
        for name in record['files']:
            destination = context / name
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(ROOT / name, destination)
            if hashlib.sha256(destination.read_bytes()).hexdigest() != record['files'][name]:
                raise RuntimeError(f'build context changed during copy: {name}')
        if run('docker', 'buildx', 'ls').find(builder) >= 0:
            raise RuntimeError('dedicated builder already exists')
        run('docker', 'buildx', 'create', '--name', builder, '--driver', 'docker-container',
            '--driver-opt', 'memory=4g,cpu-quota=200000,cpu-period=100000')
        run('docker', 'buildx', 'inspect', builder, '--bootstrap')
        details = json.loads(run('docker', 'inspect', 'buildx_buildkit_' + builder + '0'))[0]
        host = details['HostConfig']
        if (host['Memory'], host['CpuQuota'], host['CpuPeriod']) != (MEMORY, 200000, 100000):
            raise RuntimeError('dedicated BuildKit resource limits differ')
        with log_path.open('w', encoding='utf-8') as log:
            result = subprocess.run(['docker', 'buildx', 'build', '--builder', builder,
                '--platform', 'linux/amd64', '--load', '--progress', 'plain',
                '--build-arg', 'NODE_IMAGE=' + NODE_IMAGE, '--build-arg', 'REVISION=' + REVISION,
                '--build-arg', 'DEPLOYMENT_STAGE=production', '--build-arg', 'EXTERNAL_EFFECTS=production',
                '--tag', image, str(context)], stdout=log, stderr=subprocess.STDOUT)
    measurement = {'exit': result.returncode, 'image': image, 'sourceDigest': digest,
                   'elapsedSeconds': round(time.monotonic() - start, 2), 'nodeImage': NODE_IMAGE,
                   'builderMemoryBytes': host['Memory'], 'builderCpuQuota': host['CpuQuota'],
                   'builderCpuPeriod': host['CpuPeriod'], 'ciCommitSha': os.environ['GITHUB_SHA'],
                   'buildLog': log_path.name}
    if result.returncode:
        (OUTPUT / 'build-measurements-ci.json').write_text(json.dumps(measurement, indent=2) + '\n')
        raise RuntimeError('CI image build failed; build.log retained')
    details = json.loads(run('docker', 'image', 'inspect', image))[0]
    measurement.update(imageId=details['Id'], imageBytes=details['Size'],
                       runtimeUser=details['Config']['User'])
    if (details['Config']['User'] != '1001:1001'
            or details['Config']['Labels'].get('org.opencontainers.image.revision') != REVISION
            or not details['Id'].startswith('sha256:') or len(details['Id']) != 71):
        raise RuntimeError('runtime image identity/user differs')
    measurement['exit'] = 1
    (OUTPUT / 'build-measurements-ci.json').write_text(json.dumps(measurement, indent=2) + '\n', encoding='utf-8')
    measurement['smokeRssBytes'] = smoke(image)
    archive = OUTPUT / ('image-' + digest[:12] + '.tar.gz')
    with archive.open('wb') as raw:
        with gzip.GzipFile(fileobj=raw, mode='wb', filename='', compresslevel=1, mtime=0) as compressed:
            process = subprocess.Popen(['docker', 'save', image], stdout=subprocess.PIPE)
            shutil.copyfileobj(process.stdout, compressed, 1024 * 1024)
            if process.wait() != 0:
                raise RuntimeError('docker save failed')
    with archive.open('rb') as raw:
        archive_sha = hashlib.file_digest(raw, 'sha256').hexdigest()
    measurement['exit'] = 0
    request = {'image': image, 'imageId': details['Id'], 'sourceDigest': digest,
               'archiveBytes': archive.stat().st_size, 'archiveSha256': archive_sha,
               'measurement': measurement}
    for filename, value in (('build-measurements-ci.json', measurement), ('import-request.json', request)):
        (OUTPUT / filename).write_text(json.dumps(value, indent=2) + '\n', encoding='utf-8')
    shutil.copyfile(MANIFEST, OUTPUT / 'ovh-source-manifest.json')
    print(json.dumps({'image': image, 'imageId': details['Id'], 'archiveSha256': archive_sha}))


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--build', action='store_true', help='build only on the isolated CI runner')
    args = parser.parse_args()
    manifest, source_digest = validate_manifest()
    if args.build:
        build(manifest, source_digest)
    else:
        print(json.dumps({'status': 'VALID', 'sourceDigest': source_digest,
                          'files': len(manifest['files'])}))

"""Freeze production source and build it in the capped local WSL BuildKit."""

import hashlib
import json
from pathlib import Path
import subprocess
import tarfile
import time

ROOT = Path(__file__).resolve().parents[2]
EVIDENCE = ROOT / 'scripts/migration/production-evidence'
WSL = ['wsl', '-d', 'ContentOS-Dev', '--']
BUILDER = 'tennisfriends-local-bounded'
NODE_IMAGE = 'node@sha256:d6aa754f16b3197301076f047b5def2f02ea1dbbc2ca920407d46d7ec7f87b20'
REVISION = 'caecd5f9a76c021d72b00910f2ae789458ac90ca'


def linux_path(path):
    path = path.resolve()
    return '/mnt/' + path.drive[0].lower() + path.as_posix()[2:]


def run(args):
    return subprocess.run(args, check=True, capture_output=True, text=True).stdout.strip()


def main():
    files = []
    for folder in ('src', 'public', 'scripts'):
        files.extend(p for p in (ROOT / folder).rglob('*') if p.is_file() and not p.is_symlink()
                     and '__pycache__' not in p.parts and 'production-evidence' not in p.parts)
    for name in ('Dockerfile', '.dockerignore', 'compose.production.yaml', 'package.json',
                 'package-lock.json', 'next.config.ts', 'tsconfig.json', 'postcss.config.mjs',
                 'eslint.config.mjs', 'next-env.d.ts'):
        if (ROOT / name).is_file():
            files.append(ROOT / name)
    manifest = {p.relative_to(ROOT).as_posix(): hashlib.sha256(p.read_bytes()).hexdigest()
                for p in files}
    digest = hashlib.sha256(json.dumps(manifest, sort_keys=True).encode()).hexdigest()
    EVIDENCE.mkdir(exist_ok=True)
    archive = EVIDENCE / ('source-' + digest[:12] + '.tgz')
    if archive.exists():
        raise RuntimeError('frozen source archive already exists; inspect before retry')
    with tarfile.open(archive, 'w:gz') as tar:
        for path in files:
            tar.add(path, arcname=path.relative_to(ROOT).as_posix(), recursive=False)
    with tarfile.open(archive) as tar:
        captured = {member.name: hashlib.sha256(tar.extractfile(member).read()).hexdigest()
                    for member in tar.getmembers()}
    if captured != manifest:
        raise RuntimeError('archive differs from source manifest; no build attempted')
    source = '/tmp/tennisfriends-production/source-' + digest[:12]
    if subprocess.run(WSL + ['test', '-e', source]).returncode == 0:
        raise RuntimeError('source path already exists; inspect before retry')
    run(WSL + ['mkdir', '-p', source])
    run(WSL + ['tar', '-xzf', linux_path(archive), '-C', source])
    manifest_record = {'baseSha': REVISION, 'sourceDigest': digest, 'files': manifest,
                       'archiveSha256': hashlib.sha256(archive.read_bytes()).hexdigest(),
                       'localSource': source}
    (EVIDENCE / 'source-manifest-local.json').write_text(json.dumps(manifest_record, indent=2) + '\n')
    builder = json.loads(run(WSL + ['docker', 'inspect', 'buildx_buildkit_' + BUILDER + '0']))[0]
    host = builder['HostConfig']
    if host['Memory'] != 4 * 1024**3 or host['CpuQuota'] != 200000 or host['CpuPeriod'] != 100000:
        raise RuntimeError('local BuildKit limits changed')
    image = 'ovh-tennisfriends-production:caecd5f-' + digest[:12]
    log_path = EVIDENCE / ('build-local-' + digest[:12] + '.log')
    start = time.monotonic()
    with log_path.open('w') as log:
        process = subprocess.Popen(WSL + ['docker', 'buildx', 'build', '--builder', BUILDER,
            '--platform', 'linux/amd64', '--load', '--progress', 'plain',
            '--build-arg', 'NODE_IMAGE=' + NODE_IMAGE, '--build-arg', 'REVISION=' + REVISION,
            '--build-arg', 'DEPLOYMENT_STAGE=production', '--build-arg', 'EXTERNAL_EFFECTS=production',
            '--tag', image, source], stdout=log, stderr=subprocess.STDOUT)
        process.wait()
    result = {'exit': process.returncode, 'elapsedSeconds': round(time.monotonic() - start, 2),
              'image': image, 'sourceDigest': digest, 'nodeImage': NODE_IMAGE,
              'builderMemoryBytes': host['Memory'], 'builderCpuQuota': host['CpuQuota'],
              'builderCpuPeriod': host['CpuPeriod'], 'buildLog': str(log_path)}
    if process.returncode == 0:
        details = json.loads(run(WSL + ['docker', 'image', 'inspect', image]))[0]
        result.update({'imageId': details['Id'], 'imageBytes': details['Size'],
                       'runtimeUser': details['Config']['User']})
    (EVIDENCE / 'build-measurements-local.json').write_text(json.dumps(result, indent=2) + '\n')
    print(json.dumps(result))
    if process.returncode:
        raise RuntimeError('local production image build failed; log retained')


if __name__ == '__main__':
    main()

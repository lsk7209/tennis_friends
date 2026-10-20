"""Transfer a measured WSL image archive and load only that image on ovh1."""

import gzip
import hashlib
import json
from pathlib import Path
import shutil
import subprocess

ROOT = Path(__file__).resolve().parents[2]
EVIDENCE = ROOT / 'scripts/migration/production-evidence'
REMOTE = '/opt/tennisfriends-production'
WSL = ['wsl', '-d', 'ContentOS-Dev', '--']
SSH = ['ssh', '-F', 'C:/Users/dlatj/.ssh/ovh1_config', 'ovh1']
SCP = ['scp', '-F', 'C:/Users/dlatj/.ssh/ovh1_config']


def run(args):
    result = subprocess.run(args, capture_output=True, text=True, timeout=900)
    if result.returncode:
        raise RuntimeError(f'{args[0]} failed ({result.returncode}): {result.stderr[-600:]}')
    return result.stdout.strip()


def main():
    measurement = json.loads((EVIDENCE / 'build-measurements-local.json').read_text())
    if measurement.get('exit') != 0 or not measurement.get('imageId'):
        raise RuntimeError('verified local build is unavailable')
    digest = measurement['sourceDigest']
    image = measurement['image']
    if image != 'ovh-tennisfriends-production:caecd5f-' + digest[:12]:
        raise RuntimeError('production tag and source digest differ')
    local = json.loads(run(WSL + ['docker', 'image', 'inspect', image]))[0]
    if local['Id'] != measurement['imageId']:
        raise RuntimeError('local image ID changed')
    archive = EVIDENCE / ('image-' + digest[:12] + '.tar.gz')
    if archive.exists():
        raise RuntimeError('image archive exists; inspect before retry')
    process = subprocess.Popen(WSL + ['docker', 'save', image], stdout=subprocess.PIPE,
                               stderr=subprocess.DEVNULL)
    with archive.open('wb') as file:
        with gzip.GzipFile(fileobj=file, mode='wb', compresslevel=1, mtime=0) as compressed:
            shutil.copyfileobj(process.stdout, compressed, 1024 * 1024)
    if process.wait() != 0:
        raise RuntimeError('local docker save failed; inspect archive before retry')
    with archive.open('rb') as file:
        archive_sha = hashlib.file_digest(file, 'sha256').hexdigest()
    request = {'image': image, 'imageId': measurement['imageId'], 'sourceDigest': digest,
               'archiveBytes': archive.stat().st_size, 'archiveSha256': archive_sha,
               'measurement': measurement}
    (EVIDENCE / 'import-request.json').write_text(json.dumps(request, indent=2) + '\n')
    run(SCP + [str(archive), 'ovh1:' + REMOTE + '/' + archive.name])
    run(SCP + [str(EVIDENCE / 'import-request.json'), 'ovh1:' + REMOTE + '/import-request.json'])
    run(SCP + [str(ROOT / 'scripts/migration/import-production.remote.py'),
               'ovh1:' + REMOTE + '/import-production.remote.py'])
    result = run(SSH + ['sudo -n python3 ' + REMOTE + '/import-production.remote.py'])
    print(result)


if __name__ == '__main__':
    main()

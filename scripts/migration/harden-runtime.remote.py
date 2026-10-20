#!/usr/bin/env python3
"""Build a bounded runtime-only overlay from the exact deployed staging image."""
import argparse
import fcntl
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import tarfile
import time

ROOT = Path('/opt/tennisfriends-staging')
PARENT_ID = 'sha256:62aed28f5e4da39daa81ceb3c8a93333ceab0d67388f3c42e909b0d231f8e605'
PARENT_TAG = 'ovh-tennisfriends-staging:caecd5f-b652651f79b4'
DOCKERFILE = ROOT / 'Dockerfile.runtime-hardening'
EVIDENCE = ROOT / 'runtime-hardening-measurements.json'
PREVIOUS = ROOT / 'build-measurements.pre-hardening.json'
BUILDER = 'ovh-autodeploy-bounded'


def output(args):
    return subprocess.check_output(args, text=True, timeout=50).strip()


def digest(data):
    return hashlib.sha256(data).hexdigest()


def make_oci_layout(destination):
    destination.mkdir(mode=0o700)
    blobs = destination / 'blobs' / 'sha256'
    blobs.mkdir(parents=True)
    process = subprocess.Popen(['docker', 'image', 'save', PARENT_TAG], stdout=subprocess.PIPE)
    try:
        with tarfile.open(fileobj=process.stdout, mode='r|') as archive:
            for member in archive:
                if not member.isfile():
                    continue
                if member.name in ('index.json', 'oci-layout'):
                    (destination / member.name).write_bytes(archive.extractfile(member).read())
                    continue
                if not member.name.startswith('blobs/sha256/'):
                    continue
                expected = member.name.removeprefix('blobs/sha256/')
                if len(expected) != 64 or any(char not in '0123456789abcdef' for char in expected):
                    raise RuntimeError('unexpected OCI blob path in parent export')
                source = archive.extractfile(member)
                temporary = blobs / ('tmp-' + expected)
                sha = hashlib.sha256()
                with temporary.open('wb') as target:
                    while chunk := source.read(1024 * 1024):
                        sha.update(chunk)
                        target.write(chunk)
                if sha.hexdigest() != expected:
                    raise RuntimeError('OCI blob hash differs from parent export path')
                os.replace(temporary, blobs / expected)
    finally:
        process.stdout.close()
        if process.wait(timeout=30):
            raise RuntimeError('docker image save failed')
    index = json.loads((destination / 'index.json').read_text())
    manifests = index.get('manifests', [])
    if len(manifests) != 1 or manifests[0].get('digest') != PARENT_ID:
        raise RuntimeError('OCI index does not point to exact deployed parent digest')
    manifest = json.loads((blobs / PARENT_ID.split(':')[1]).read_text())
    for descriptor in [manifest['config'], *manifest['layers']]:
        path = blobs / descriptor['digest'].split(':')[1]
        if not path.is_file() or path.stat().st_size != descriptor['size']:
            raise RuntimeError('OCI parent descriptor is missing or truncated')
    manifests[0]['annotations'] = {'org.opencontainers.image.ref.name': 'parent'}
    (destination / 'index.json').write_text(json.dumps(index, separators=(',', ':')))
    return PARENT_ID


def container_output(image, command):
    return output(['docker', 'run', '--rm', '--network', 'none', '--entrypoint', command[0],
                   image, *command[1:]])


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--dockerfile-sha256', required=True)
    args = parser.parse_args()
    if os.uname().nodename != 'vps-ce781f0f':
        raise RuntimeError('unexpected build host')
    if EVIDENCE.exists() or PREVIOUS.exists():
        raise RuntimeError('existing hardening checkpoint requires inspection')
    dockerfile_sha = digest(DOCKERFILE.read_bytes())
    if dockerfile_sha != args.dockerfile_sha256:
        raise RuntimeError('transferred runtime Dockerfile hash mismatch')
    measurement = json.loads((ROOT / 'build-measurements.json').read_text())
    if (measurement.get('exit') != 0 or measurement.get('imageId') != PARENT_ID
            or measurement.get('image') != PARENT_TAG):
        raise RuntimeError('current completed build is not exact deployed parent image')
    parent = json.loads(output(['docker', 'image', 'inspect', PARENT_TAG]))[0]
    if parent['Id'] != PARENT_ID:
        raise RuntimeError('parent tag no longer selects exact image ID')
    ids = output(['docker', 'ps', '-q', '--filter', 'label=coolify.serviceUuid=lyal757eaqr0vxhthel4svmw']).split()
    if len(ids) != 1 or json.loads(output(['docker', 'inspect', ids[0]]))[0]['Image'] != PARENT_ID:
        raise RuntimeError('exact parent image is not the sole running staging service')
    locks = ['/run/lock/tennisfriends-build.lock', '/run/lock/localgeo-build.lock',
             '/run/lock/temon-build.lock', '/run/lock/localgeo-deploy.lock',
             '/run/lock/todaypharm-deploy.lock', '/run/ovh-petjigi-build.lock',
             '/run/temon-production-deploy.lock']
    for config in Path('/etc/ovh-auto-deploy').glob('*.json'):
        for key, value in json.loads(config.read_text()).items():
            if 'lock' in key.lower():
                locks.extend([value] if isinstance(value, str) else value if isinstance(value, list) else [])
    handles = []
    for name in sorted(set(locks)):
        handle = os.open(name, os.O_CREAT | os.O_RDWR, 0o600)
        fcntl.flock(handle, fcntl.LOCK_EX | fcntl.LOCK_NB)
        handles.append(handle)
    available = int(next(line.split()[1] for line in Path('/proc/meminfo').read_text().splitlines()
                         if line.startswith('MemAvailable:')))
    if available < 5 * 1024 * 1024 or shutil.disk_usage(ROOT).free < 15 * 1024**3:
        raise RuntimeError('insufficient RAM or disk for bounded hardening build')
    builder = json.loads(output(['docker', 'inspect', 'buildx_buildkit_ovh-autodeploy-bounded0']))[0]
    if builder['HostConfig']['Memory'] != 4 * 1024**3:
        raise RuntimeError('bounded BuildKit worker limit changed')
    source_digest = measurement['sourceDigest']
    combined = digest((source_digest + '\n' + dockerfile_sha + '\n' + PARENT_ID).encode())
    tag = 'ovh-tennisfriends-staging:caecd5f-' + source_digest[:12] + '-h' + dockerfile_sha[:12]
    if subprocess.run(['docker', 'image', 'inspect', tag], stdout=subprocess.DEVNULL,
                      stderr=subprocess.DEVNULL).returncode == 0:
        raise RuntimeError('target hardening image tag already exists')
    node_before = container_output(PARENT_TAG, ['node', '--version'])
    server_before = container_output(PARENT_TAG, ['sha256sum', '/app/server.js']).split()[0]
    layout = ROOT / ('harden-parent-oci-' + PARENT_ID[7:19])
    if layout.exists():
        raise RuntimeError('parent OCI layout already exists; inspect before retry')
    start = time.monotonic()
    manifest_digest = make_oci_layout(layout)
    context = ROOT / 'harden-empty-context'
    context.mkdir(exist_ok=True)
    build = ['docker', 'buildx', 'build', '--builder', BUILDER, '--load', '--progress', 'plain',
             '--build-context', 'tennisfriends_parent=oci-layout://' + str(layout) + '@' + manifest_digest,
             '--build-arg', 'PARENT_IMAGE_ID=' + PARENT_ID,
             '--build-arg', 'HARDENING_DIGEST=' + dockerfile_sha,
             '--build-arg', 'COMBINED_SOURCE_DIGEST=' + combined,
             '--tag', tag, '--file', str(DOCKERFILE), str(context)]
    with (ROOT / 'runtime-hardening-build.log').open('w') as log:
        result = subprocess.run(build, stdout=log, stderr=subprocess.STDOUT)
    if result.returncode:
        raise RuntimeError('bounded runtime build failed; exact log retained')
    hardened = json.loads(output(['docker', 'image', 'inspect', tag]))[0]
    for field in ('User', 'Cmd', 'Entrypoint', 'WorkingDir', 'ExposedPorts', 'Healthcheck'):
        if hardened['Config'].get(field) != parent['Config'].get(field):
            raise RuntimeError(f'runtime image field changed unexpectedly: {field}')
    if hardened['Config']['User'] != '1001:1001':
        raise RuntimeError('runtime user changed')
    if hardened['Config']['Labels'].get('org.opencontainers.image.base.digest') != PARENT_ID:
        raise RuntimeError('hardening parent label absent')
    perl = container_output(tag, ['dpkg-query', '-W', '-f=${Version}', 'perl-base'])
    if not perl.startswith('5.36.0-7+deb12u') or int(perl.split('u')[-1]) < 4:
        raise RuntimeError('perl-base fix version not present')
    if container_output(tag, ['node', '--version']) != node_before:
        raise RuntimeError('Node runtime version changed')
    if container_output(tag, ['sha256sum', '/app/server.js']).split()[0] != server_before:
        raise RuntimeError('app server bytes changed')
    container_output(tag, ['sh', '-c', 'test ! -e /usr/local/lib/node_modules/npm && '
                     'test ! -e /usr/local/bin/npm && test ! -e /usr/local/bin/npx'])
    elapsed = round(time.monotonic() - start, 2)
    evidence = {'exit': 0, 'elapsedSeconds': elapsed, 'parentImageId': PARENT_ID,
                'parentImageTag': PARENT_TAG, 'parentSourceDigest': source_digest,
                'hardeningDigest': dockerfile_sha, 'runtimeDockerfileSha256': dockerfile_sha,
                'sourceDigest': source_digest, 'combinedSourceDigest': combined,
                'parentOciManifestDigest': manifest_digest,
                'image': tag, 'imageId': hardened['Id'], 'imageBytes': hardened['Size'],
                'perlBaseVersion': perl, 'nodeVersion': node_before, 'serverSha256': server_before,
                'builderMemoryBytes': builder['HostConfig']['Memory']}
    EVIDENCE.write_text(json.dumps(evidence, indent=2) + '\n')
    PREVIOUS.write_text(json.dumps(measurement, indent=2) + '\n')
    current = dict(measurement)
    current.update({key: evidence[key] for key in ['parentImageId', 'parentImageTag',
        'parentSourceDigest', 'hardeningDigest', 'runtimeDockerfileSha256', 'combinedSourceDigest',
        'image', 'imageId', 'imageBytes', 'perlBaseVersion']})
    temporary = ROOT / '.build-measurements-hardening-tmp.json'
    temporary.write_text(json.dumps(current, indent=2) + '\n')
    os.replace(temporary, ROOT / 'build-measurements.json')
    print(json.dumps(evidence, sort_keys=True))


if __name__ == '__main__':
    main()

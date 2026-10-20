#!/usr/bin/env python3
"""Transfer the runtime-only overlay and run the bounded build on ovh1."""
import hashlib
import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[2]
REMOTE = '/opt/tennisfriends-staging'
SSH = ['ssh', '-F', 'C:/Users/dlatj/.ssh/ovh1_config', 'ovh1']
SCP = ['scp', '-F', 'C:/Users/dlatj/.ssh/ovh1_config']


def run(args, timeout):
    result = subprocess.run(args, capture_output=True, text=True, timeout=timeout)
    if result.returncode:
        raise RuntimeError(f'{args[0]} failed with exit {result.returncode}: {result.stderr[-800:]}')
    return result.stdout.strip()


def main():
    dockerfile = ROOT / 'Dockerfile.runtime-hardening'
    remote_script = ROOT / 'scripts/migration/harden-runtime.remote.py'
    expected = hashlib.sha256(dockerfile.read_bytes()).hexdigest()
    run(SCP + [str(dockerfile), 'ovh1:' + REMOTE + '/Dockerfile.runtime-hardening'], 60)
    run(SCP + [str(remote_script), 'ovh1:' + REMOTE + '/harden-runtime.remote.py'], 60)
    result = json.loads(run(SSH + ['sudo -n python3 ' + REMOTE + '/harden-runtime.remote.py'
                                  + ' --dockerfile-sha256 ' + expected], 1200))
    if result.get('exit') != 0 or result.get('runtimeDockerfileSha256') != expected:
        raise RuntimeError('runtime build evidence did not match transferred Dockerfile')
    evidence = ROOT / 'scripts/migration/harden-runtime-evidence.json'
    evidence.write_text(json.dumps(result, indent=2) + '\n')
    print(json.dumps({key: result[key] for key in ['parentImageId', 'imageId', 'image',
        'perlBaseVersion', 'nodeVersion', 'elapsedSeconds', 'sourceDigest',
        'combinedSourceDigest']}, sort_keys=True))


if __name__ == '__main__':
    main()

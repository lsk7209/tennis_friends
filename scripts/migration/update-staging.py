#!/usr/bin/env python3
"""Use a temporary Coolify API session to update only existing staging service.

Do not invoke until the new root build-measurements.json exists on ovh1.
"""
import argparse
import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[2]
REMOTE = '/opt/tennisfriends-staging'
SESSION = '/tmp/tennisfriends-coolify-session.php'
SSH = ['ssh', '-F', 'C:/Users/dlatj/.ssh/ovh1_config', 'ovh1']
SCP = ['scp', '-F', 'C:/Users/dlatj/.ssh/ovh1_config']


def run(argv, timeout=60):
    result = subprocess.run(argv, capture_output=True, text=True, timeout=timeout)
    if result.returncode:
        raise RuntimeError(f'{argv[0]} failed with exit {result.returncode}: {result.stderr[-600:]}')
    return result.stdout.strip()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('action', choices=['deploy', 'rollback'])
    args = parser.parse_args()
    script = ROOT / 'scripts/migration/update-staging.remote.py'
    session = ROOT / 'scripts/migration/coolify-session.php'
    run(SCP + [str(script), 'ovh1:' + REMOTE + '/update-staging.remote.py'])
    run(SCP + [str(session), 'ovh1:' + REMOTE + '/coolify-session.php'])
    run(SSH + ['sudo -n docker cp ' + REMOTE + '/coolify-session.php coolify:' + SESSION])
    run(SSH + ['sudo -n test ! -e ' + REMOTE + '/api-token'])
    started = False
    error = None
    result = None
    try:
        run(SSH + ['sudo -n docker exec coolify php ' + SESSION])
        started = True
        run(SSH + ['sudo -n docker cp coolify:/tmp/tennisfriends-api-token ' + REMOTE + '/api-token'])
        run(SSH + ['sudo -n chmod 600 ' + REMOTE + '/api-token'])
        output = run(SSH + ['sudo -n python3 ' + REMOTE + '/update-staging.remote.py --' + args.action], timeout=320)
        result = json.loads(output)
    except Exception as caught:
        error = caught
    finally:
        if started:
            try:
                run(SSH + ['sudo -n docker exec coolify php ' + SESSION + ' cleanup'])
            except Exception as caught:
                error = RuntimeError(f'Coolify session cleanup failed: {caught}; original error: {error}')
            run(SSH + ['sudo -n rm -f ' + REMOTE + '/api-token'])
    if error:
        raise error
    print(json.dumps(result, sort_keys=True))


if __name__ == '__main__':
    main()

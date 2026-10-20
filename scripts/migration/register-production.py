"""Register a separate loopback-only production service after a verified build."""

import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[2]
REMOTE = '/opt/tennisfriends-production'
SSH = ['ssh', '-F', 'C:/Users/dlatj/.ssh/ovh1_config', 'ovh1']
SCP = ['scp', '-F', 'C:/Users/dlatj/.ssh/ovh1_config']


def run(args, *, input_text=None):
    result = subprocess.run(args, input=input_text, text=True, capture_output=True, timeout=300)
    if result.returncode:
        raise RuntimeError(f'{args[0]} failed ({result.returncode}): {result.stderr[-600:]}')
    return result.stdout.strip()


def main():
    measurement = json.loads(run(SSH + ['sudo -n cat ' + REMOTE + '/build-measurements.json']))
    image = measurement.get('image')
    image_id = measurement.get('imageId')
    if measurement.get('exit') != 0 or not isinstance(image, str) or not image.startswith('ovh-tennisfriends-production:'):
        raise RuntimeError('A successful dedicated production image is required')
    if not isinstance(image_id, str) or not image_id.startswith('sha256:'):
        raise RuntimeError('Measured production image identity is missing')
    run(SSH + ['sudo -n test ! -e ' + REMOTE + '/api-token'])
    if ':18092 ' in run(SSH + ['sudo -n ss -lnt']):
        raise RuntimeError('private production port 18092 is already in use')

    code = (ROOT / 'scripts/migration/register-production.remote.py').read_text()
    code = code.replace("'__IMAGE__'", repr(image)).replace("'__IMAGE_ID__'", repr(image_id))
    compile(code, 'register-production.remote.py', 'exec')
    session = ROOT / 'scripts/migration/coolify-session-production.php'
    run(SSH + ['sudo -n tee ' + REMOTE + '/register-production.remote.py >/dev/null'], input_text=code)
    run(SCP + [str(session), 'ovh1:' + REMOTE + '/coolify-session-production.php'])
    run(SSH + ['sudo -n docker cp ' + REMOTE + '/coolify-session-production.php coolify:/tmp/tennisfriends-production-coolify-session.php'])
    run(SSH + ['sudo -n docker exec coolify php -l /tmp/tennisfriends-production-coolify-session.php'])
    runtime = ('NODE_ENV=production\nNEXT_PUBLIC_SITE_URL=https://tennisfrens.com\n'
               'NEXT_PUBLIC_EXTERNAL_EFFECTS=production\nNEXT_PUBLIC_DEPLOYMENT_STAGE=production\n'
               'NEXT_PUBLIC_ADS_CONSENT_READY=unverified\n')
    run(SSH + ['sudo -n tee ' + REMOTE + '/runtime.env >/dev/null'], input_text=runtime)
    run(SSH + ['sudo -n chmod 600 ' + REMOTE + '/runtime.env'])
    started = False
    try:
        print(run(SSH + ['sudo -n docker exec coolify php /tmp/tennisfriends-production-coolify-session.php']))
        started = True
        run(SSH + ['sudo -n docker cp coolify:/tmp/tennisfriends-production-api-token ' + REMOTE + '/api-token'])
        run(SSH + ['sudo -n chmod 600 ' + REMOTE + '/api-token'])
        print(run(SSH + ['sudo -n python3 ' + REMOTE + '/register-production.remote.py --inspect']))
        print(run(SSH + ['sudo -n python3 ' + REMOTE + '/register-production.remote.py --create --server-uuid nuwltz1ql1nzzkwdj1l844l1']))
        print(run(SSH + ['sudo -n python3 ' + REMOTE + '/register-production.remote.py --start']))
        record = run(SSH + ['sudo -n cat ' + REMOTE + '/coolify-ids.json'])
        evidence = ROOT / 'scripts/migration/production-evidence'
        evidence.mkdir(exist_ok=True)
        (evidence / 'coolify-ids.json').write_text(record + '\n')
        (evidence / 'build-measurements.json').write_text(json.dumps(measurement, indent=2) + '\n')
    finally:
        if started:
            try:
                print(run(SSH + ['sudo -n docker exec coolify php /tmp/tennisfriends-production-coolify-session.php cleanup']))
            finally:
                run(SSH + ['sudo -n rm -f ' + REMOTE + '/api-token'])


if __name__ == '__main__':
    main()

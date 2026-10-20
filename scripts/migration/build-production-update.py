"""Build a replacement production image, restoring only own staging if a gate needs it."""

import json
from pathlib import Path
import subprocess
import time

ROOT = Path(__file__).resolve().parents[2]
SSH = ['ssh', '-F', 'C:/Users/dlatj/.ssh/ovh1_config', 'ovh1']
STAGING_SERVICE = 'lyal757eaqr0vxhthel4svmw'
GATE_KIB = 5632 * 1024


def remote(command):
    result = subprocess.run(SSH + [command], capture_output=True, text=True, timeout=60)
    if result.returncode:
        raise RuntimeError(f'remote command failed ({result.returncode}): {result.stderr[-500:]}')
    return result.stdout.strip()


def inspect(container_id):
    return json.loads(remote('sudo -n docker inspect ' + container_id))[0]


def available_kib():
    line = next(line for line in remote('cat /proc/meminfo').splitlines() if line.startswith('MemAvailable:'))
    return int(line.split()[1])


def baseline():
    for attempt in range(3):
        ids = remote('sudo -n docker ps -q').split()
        try:
            return {item['Id']: item for item in json.loads(remote('sudo -n docker inspect ' + ' '.join(ids)))}
        except RuntimeError:
            if attempt == 2:
                raise
    raise RuntimeError('container baseline remained unstable')


def main():
    evidence = ROOT / 'scripts/migration/production-evidence'
    evidence.mkdir(exist_ok=True)
    before = baseline()
    stage_ids = remote('sudo -n docker ps -aq --filter label=coolify.serviceUuid=' + STAGING_SERVICE).split()
    if len(stage_ids) != 1:
        raise RuntimeError('expected exactly one own staging container')
    stage = inspect(stage_ids[0])
    labels = stage['Config']['Labels']
    if (labels.get('coolify.serviceUuid') != STAGING_SERVICE or
            labels.get('com.docker.compose.service') != 'web' or
            stage['State'].get('Health', {}).get('Status') != 'healthy' or
            stage['HostConfig']['PortBindings'] != {'3000/tcp': [{'HostIp': '127.0.0.1', 'HostPort': '18091'}]}):
        raise RuntimeError('staging identity, health, or private port changed')
    initial_available = available_kib()
    stopped = False
    record = {'initialAvailableKiB': initial_available, 'requiredKiB': GATE_KIB,
              'stagingContainerId': stage['Id'], 'stagingStartedAtBefore': stage['State']['StartedAt'],
              'stagingImageId': stage['Image'], 'stagingTemporarilyStopped': False}
    try:
        if initial_available < GATE_KIB:
            stopped = True
            remote('sudo -n docker stop --time 20 ' + stage['Id'])
            record['stagingTemporarilyStopped'] = True
        record['availableBeforeBuildKiB'] = available_kib()
        if record['availableBeforeBuildKiB'] < GATE_KIB:
            raise RuntimeError('5.5 GiB memory gate remains unavailable')
        subprocess.run(['python', str(ROOT / 'scripts/migration/build-production.py')], check=True)
        record['buildSucceeded'] = True
    finally:
        restore_error = None
        if stopped:
            current = inspect(stage['Id'])
            if not current['State']['Running']:
                remote('sudo -n docker start ' + stage['Id'])
            deadline = time.monotonic() + 180
            while time.monotonic() < deadline:
                current = inspect(stage['Id'])
                if current['State'].get('Health', {}).get('Status') == 'healthy':
                    break
                time.sleep(3)
            if current['State'].get('Health', {}).get('Status') != 'healthy':
                record['stagingRestoredHealthy'] = False
                restore_error = RuntimeError('own staging did not regain healthy status')
            else:
                record['stagingRestoredHealthy'] = True
            record['stagingStartedAtAfter'] = current['State']['StartedAt']
        after = {cid: inspect(cid) for cid in before if cid != stage['Id']}
        record['otherContainerChanges'] = [
            {'id': cid, 'name': item['Name']}
            for cid, item in before.items() if cid != stage['Id'] and
            (after[cid]['State']['StartedAt'] != item['State']['StartedAt'] or
             after[cid]['RestartCount'] != item['RestartCount'] or not after[cid]['State']['Running'])
        ]
        (evidence / 'build-update-resource-lifecycle.json').write_text(json.dumps(record, indent=2) + '\n')
        if restore_error:
            raise restore_error
    print(json.dumps(record))


if __name__ == '__main__':
    main()

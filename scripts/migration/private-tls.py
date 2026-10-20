#!/usr/bin/env python3
"""Run guarded private TLS apply/status/rollback on ovh1 and retain safe evidence."""
import argparse
import json
from pathlib import Path
import subprocess
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parents[2]
REMOTE = '/opt/tennisfriends-staging/private-tls.remote.py'
SCRIPT = Path(__file__).with_name('private-tls.remote.py')
EVIDENCE = ROOT / 'docs/vps-migration/tennisfriends/evidence/tls-private-staging.json'
SSH = ['ssh', '-F', 'C:/Users/dlatj/.ssh/ovh1_config', 'ovh1']
SCP = ['scp', '-F', 'C:/Users/dlatj/.ssh/ovh1_config']


def run(args):
    result = subprocess.run(args, capture_output=True, text=True, timeout=75)
    if result.returncode:
        raise RuntimeError(f'{args[0]} failed (exit {result.returncode}): {result.stderr[-800:]}')
    return result.stdout


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('action', choices=['apply', 'status', 'rollback'])
    args = parser.parse_args()
    history = json.loads(EVIDENCE.read_text()) if EVIDENCE.exists() else {'events': []}
    command = ['sudo', '-n', 'python3', REMOTE, args.action]
    if history['events']:
        baseline = history['events'][0]['baselineConfigSha256']
        command += ['--baseline-hash', baseline]
    if args.action == 'rollback':
        if not history['events'] or history['events'][-1]['action'] == 'rollback':
            raise RuntimeError('rollback requires an active recorded apply')
        if any(event.get('networkAttachedByThisRun') for event in history['events']):
            command.append('--disconnect-network')
    run(SCP + [str(SCRIPT), 'ovh1:' + REMOTE])
    result = json.loads(run(SSH + [' '.join(command)]))
    if result['result'] != 'PASS':
        raise RuntimeError('remote verification failed')
    if history['events']:
        first = history['events'][0]
        for field in ('baselineConfigSha256', 'caddyStartedAt', 'privateListener'):
            if result[field] != first[field]:
                raise RuntimeError(f'{field} changed from first observation')
    result['observedAtUtc'] = datetime.now(timezone.utc).isoformat()
    history['events'].append(result)
    EVIDENCE.write_text(json.dumps(history, indent=2) + '\n')
    print(json.dumps(result, sort_keys=True))


if __name__ == '__main__':
    main()

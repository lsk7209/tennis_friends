#!/usr/bin/env python3
"""Scoped TennisFriends production DNS-01 bootstrap on ovh1."""
import argparse
from datetime import datetime, timezone
import json
from pathlib import Path
import subprocess

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
REMOTE = '/opt/tennisfriends-production'
EVIDENCE = ROOT / 'docs/vps-migration/tennisfriends/evidence/tls-production.json'
SSH = ['ssh', '-F', 'C:/Users/dlatj/.ssh/ovh1_config', 'ovh1']
SCP = ['scp', '-F', 'C:/Users/dlatj/.ssh/ovh1_config']


def run(args, timeout=30):
    result = subprocess.run(args, capture_output=True, text=True, timeout=timeout)
    if result.returncode:
        raise RuntimeError(result.stderr[-800:] or f'{args[0]} exit {result.returncode}')
    return result.stdout.strip()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('action', choices=['prepare', 'request', 'challenges', 'approve',
                                           'certificate', 'route-status', 'route-apply',
                                           'route-rollback', 'route-auto'])
    parser.add_argument('--domain', choices=['tennisfrens.com', 'www.tennisfrens.com'])
    args = parser.parse_args()
    if args.action == 'prepare':
        for name in ['production-tls-auth.remote.py', 'production-tls-approve.remote.py']:
            run(SCP + [str(HERE / name), f'ovh1:{REMOTE}/{name}'])
        run(SSH + [f'sudo -n chmod 700 {REMOTE}/production-tls-auth.remote.py {REMOTE}/production-tls-approve.remote.py'])
        print('PASS: scoped DNS hooks installed')
    elif args.action == 'request':
        command = ('sudo -n certbot certonly --manual --preferred-challenges dns '
                   f'--manual-auth-hook {REMOTE}/production-tls-auth.remote.py '
                   '--non-interactive --agree-tos --register-unsafely-without-email '
                   '--cert-name tennisfriends-bootstrap -d tennisfrens.com -d www.tennisfrens.com')
        print(run(SSH + [command], timeout=2100))
    elif args.action == 'challenges':
        print(run(SSH + [f'sudo -n cat {REMOTE}/production-tls-challenges.json']))
    elif args.action == 'approve':
        if not args.domain:
            parser.error('--domain is required for approve')
        print(run(SSH + [f'sudo -n python3 {REMOTE}/production-tls-approve.remote.py {args.domain}']))
    elif args.action.startswith('route-'):
        name = 'production-tls.remote.py'
        run(SCP + [str(HERE / name), f'ovh1:{REMOTE}/{name}'])
        action = args.action.removeprefix('route-')
        result = json.loads(run(SSH + [f'sudo -n python3 {REMOTE}/{name} {action}'], timeout=390))
        if result.get('result') != 'PASS':
            raise RuntimeError('production TLS route verification failed')
        result['observedAtUtc'] = datetime.now(timezone.utc).isoformat()
        EVIDENCE.parent.mkdir(parents=True, exist_ok=True)
        history = json.loads(EVIDENCE.read_text()) if EVIDENCE.exists() else {'events': []}
        history['events'].append(result)
        EVIDENCE.write_text(json.dumps(history, indent=2) + '\n')
        print(json.dumps(result, sort_keys=True))
    else:
        data = run(SSH + ["sudo -n certbot certificates --cert-name tennisfriends-bootstrap 2>&1"])
        print('\n'.join(line for line in data.splitlines() if
                        'Domains:' in line or 'Expiry Date:' in line or 'Certificate Name:' in line))


if __name__ == '__main__':
    main()

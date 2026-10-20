#!/usr/bin/env python3
"""Add or remove TennisFriends TLS solely on the dedicated Docker network.

Runs on ovh1 as root. The Caddy admin API is reached from inside its container;
the full config and CA certificate are held in memory or a temporary file only.
"""
import argparse
import copy
import hashlib
import json
import subprocess
import tempfile
from pathlib import Path

ROOT = Path('/opt/tennisfriends-staging')
SERVICE = 'lyal757eaqr0vxhthel4svmw'
CADDY = 'todaypharm-production-ingress-1'
NETWORK = 'tennisfriends-coolify-staging-private'
SERVER = 'tennisfriends_staging'
HOST = 'tennisfriendsstaging.local'
UPSTREAM = 'web-lyal757eaqr0vxhthel4svmw:3000'
ADMIN = 'http://127.0.0.1:2019'


def command(args, data=None):
    result = subprocess.run(args, input=data, capture_output=True, timeout=40)
    if result.returncode:
        raise RuntimeError(f'{args[0]} command failed with exit {result.returncode}')
    return result.stdout


def inspect(cid):
    return json.loads(command(['docker', 'inspect', cid]))[0]


def api(method, path, payload=None):
    args = ['docker', 'exec', '-i', CADDY, 'curl', '-fsS', '-X', method]
    if payload is not None:
        args += ['-H', 'Content-Type: application/json', '--data-binary', '@-']
    return command(args + [ADMIN + path], json.dumps(payload).encode() if payload is not None else None)


def config():
    return json.loads(api('GET', '/config/'))


def digest(value):
    return hashlib.sha256(json.dumps(value, sort_keys=True, separators=(',', ':')).encode()).hexdigest()


def owned_policy():
    return {'subjects': [HOST], 'issuers': [{'module': 'internal'}]}


def owned_server(ip):
    return {
        'listen': [ip + ':18491'],
        'routes': [{'match': [{'host': [HOST]}], 'handle': [{'handler': 'reverse_proxy',
                   'upstreams': [{'dial': UPSTREAM}]}], 'terminal': True}],
        'tls_connection_policies': [{}],
        'automatic_https': {'disable_redirects': True},
    }


def stripped(cfg, server, policy):
    result = copy.deepcopy(cfg)
    servers = result['apps']['http']['servers']
    if SERVER in servers:
        if servers[SERVER] != server:
            raise RuntimeError('existing staging server does not match owned shape')
        del servers[SERVER]
    automation = result['apps']['tls'].get('automation')
    if automation is None:
        return result
    policies = automation['policies']
    matches = [i for i, item in enumerate(policies) if item == policy]
    if len(matches) > 1 or (matches and matches[0] != 0):
        raise RuntimeError('staging TLS policy is ambiguous or moved')
    if matches:
        del policies[0]
        if not automation:
            del result['apps']['tls']['automation']
        elif automation == {'policies': []}:
            del result['apps']['tls']['automation']
    return result


def identity():
    measurement = json.loads((ROOT / 'build-measurements.json').read_text())
    image_id = measurement.get('imageId')
    if measurement.get('exit') != 0 or not isinstance(image_id, str) or not image_id.startswith('sha256:'):
        raise RuntimeError('completed staging image measurement unavailable')
    ids = command(['docker', 'ps', '-q', '--filter', 'label=coolify.serviceUuid=' + SERVICE]).decode().split()
    if len(ids) != 1:
        raise RuntimeError('expected one running container for exact staging service')
    app, caddy = inspect(ids[0]), inspect(CADDY)
    labels = app['Config']['Labels']
    assert labels.get('coolify.serviceUuid') == SERVICE
    assert labels.get('com.docker.compose.project') == SERVICE
    assert labels.get('com.docker.compose.service') == 'web'
    assert app['Image'] == image_id and app['Config']['Image'] == measurement.get('image')
    assert app['State']['Health']['Status'] == 'healthy'
    assert app['HostConfig']['PortBindings']['3000/tcp'] == [{'HostIp': '127.0.0.1', 'HostPort': '18091'}]
    assert NETWORK in app['NetworkSettings']['Networks']
    assert SERVICE in app['NetworkSettings']['Networks']
    assert UPSTREAM.split(':')[0] in app['NetworkSettings']['Networks'][NETWORK]['DNSNames']
    assert caddy['State']['Running'] and caddy['Config']['Cmd'][:2] == ['caddy', 'run']
    assert set(caddy['HostConfig']['PortBindings']) == {'80/tcp', '443/tcp'}
    assert caddy['HostConfig']['PortBindings']['80/tcp'] == [{'HostIp': '0.0.0.0', 'HostPort': '80'}]
    assert caddy['HostConfig']['PortBindings']['443/tcp'] == [{'HostIp': '0.0.0.0', 'HostPort': '443'}]
    return app, caddy


def verify_tls(ip):
    info = json.loads(api('GET', '/pki/ca/local'))
    root = info['root_certificate']
    if 'BEGIN CERTIFICATE' not in root:
        raise RuntimeError('local CA root certificate unavailable')
    with tempfile.TemporaryDirectory(prefix='tennisfriends-tls-') as directory:
        ca = Path(directory) / 'ca.pem'
        ca.write_text(root)
        response = command(['curl', '-fsS', '--max-time', '25', '--cacert', str(ca),
                            '--resolve', f'{HOST}:18491:{ip}', '-o', '/dev/null',
                            '-w', '%{http_code} %{ssl_verify_result}',
                            f'https://{HOST}:18491/']).decode().strip()
    if response != '200 0':
        raise RuntimeError('CA-verified staging request did not return HTTP 200')
    return {'httpStatus': 200, 'sslVerifyResult': 0,
            'caSha256': hashlib.sha256(root.encode()).hexdigest()}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('action', choices=['apply', 'rollback', 'status'])
    parser.add_argument('--baseline-hash')
    parser.add_argument('--disconnect-network', action='store_true')
    args = parser.parse_args()
    app, caddy = identity()
    start = caddy['State']['StartedAt']
    attached_before = NETWORK in caddy['NetworkSettings']['Networks']
    attached_here = False
    created_here = False
    if args.action == 'apply' and not attached_before:
        command(['docker', 'network', 'connect', NETWORK, CADDY])
        attached_here = True
        caddy = inspect(CADDY)
    try:
        network = caddy['NetworkSettings']['Networks'].get(NETWORK)
        if not network:
            raise RuntimeError('Caddy is not on dedicated private network')
        ip = network['IPAddress']
        server, policy = owned_server(ip), owned_policy()
        before = config()
        base_hash = digest(stripped(before, server, policy))
        if args.baseline_hash and args.baseline_hash != base_hash:
            raise RuntimeError('baseline config hash differs; refusing mutation')
        exists = SERVER in before['apps']['http']['servers']
        automation_before = before['apps']['tls'].get('automation')
        policy_exists = bool(automation_before and automation_before.get('policies', [])[:1] == [policy])
        if exists != policy_exists:
            raise RuntimeError('partial staging config; inspect manually')
        if args.action == 'apply' and not exists:
            if automation_before is None:
                api('PUT', '/config/apps/tls/automation', {'policies': [policy]})
            else:
                api('PUT', '/config/apps/tls/automation/policies/0', policy)
            try:
                api('PUT', '/config/apps/http/servers/' + SERVER, server)
            except Exception:
                api('DELETE', '/config/apps/tls/automation' if automation_before is None else '/config/apps/tls/automation/policies/0')
                raise
            created_here = True
        elif args.action == 'rollback' and exists:
            api('DELETE', '/config/apps/http/servers/' + SERVER)
            api('DELETE', '/config/apps/tls/automation' if automation_before == {'policies': [policy]} else '/config/apps/tls/automation/policies/0')
        after = config()
        if digest(stripped(after, server, policy)) != base_hash:
            raise RuntimeError('non-staging Caddy config changed')
        if inspect(CADDY)['State']['StartedAt'] != start:
            raise RuntimeError('Caddy container restarted')
        tls = verify_tls(ip) if args.action != 'rollback' and SERVER in after['apps']['http']['servers'] else None
        if args.action == 'rollback' and args.disconnect_network and NETWORK in inspect(CADDY)['NetworkSettings']['Networks']:
            command(['docker', 'network', 'disconnect', NETWORK, CADDY])
        print(json.dumps({'result': 'PASS', 'action': args.action, 'baselineConfigSha256': base_hash,
                          'activeConfigSha256': digest(after), 'caddyStartedAt': start,
                          'appStartedAt': app['State']['StartedAt'], 'appImage': app['Image'],
                          'privateNetwork': NETWORK, 'privateListener': ip + ':18491',
                          'networkAttachedByThisRun': attached_here,
                          'tls': tls, 'persistence': 'API addition requires reapply after Caddyfile restart'},
                         sort_keys=True))
    except Exception:
        if created_here:
            try:
                live = config()
                if live['apps']['http']['servers'].get(SERVER) == server:
                    api('DELETE', '/config/apps/http/servers/' + SERVER)
                automation_live = live['apps']['tls'].get('automation', {})
                if automation_live.get('policies', [])[:1] == [policy]:
                    api('DELETE', '/config/apps/tls/automation' if automation_live == {'policies': [policy]} else '/config/apps/tls/automation/policies/0')
            except Exception:
                # Preserve the network if a route may still need its upstream.
                raise RuntimeError('apply failed and automatic Caddy rollback failed; manual inspection required')
        if attached_here:
            # Only undo this run's network attachment; never touch pre-existing links.
            try:
                command(['docker', 'network', 'disconnect', NETWORK, CADDY])
            except Exception:
                pass
        raise


if __name__ == '__main__':
    main()

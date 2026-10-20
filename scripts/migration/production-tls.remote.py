#!/usr/bin/env python3
"""Guarded additive production Caddy route; run on ovh1 as root.

The active Caddy JSON is merged with the Caddyfile adaptation so the existing
API-only staging server survives the live load. The Caddyfile remains the
startup source; staging still needs its existing reapply procedure on restart.
"""
import argparse
import base64
import copy
import hashlib
import json
from pathlib import Path
import shutil
import socket
import subprocess
import tempfile
import time

ROOT = Path('/opt/tennisfriends-production')
CADDY = 'todaypharm-production-ingress-1'
CADDYFILE = Path('/opt/todaypharm-production/Caddyfile')
TLS_DIR = Path('/opt/todaypharm-production/tls')
NETWORK = 'tennisfriends-coolify-production-private'
STAGE_SERVER = 'tennisfriends_staging'
STAGE_POLICY = {'subjects': ['tennisfriendsstaging.local'], 'issuers': [{'module': 'internal'}]}
CERT_NAME = 'tennisfriends-bootstrap'
CERT_FILES = {'fullchain.pem': 'tennisfriends.fullchain.pem',
              'privkey.pem': 'tennisfriends.privkey.pem'}
STATE = ROOT / 'production-tls-rollback.json'


def command(args, data=None, timeout=45):
    p = subprocess.run(args, input=data, capture_output=True, timeout=timeout)
    if p.returncode:
        raise RuntimeError(f'{args[0]} failed (exit {p.returncode})')
    return p.stdout


def digest(value):
    if isinstance(value, bytes):
        data = value
    else:
        data = json.dumps(value, sort_keys=True, separators=(',', ':')).encode()
    return hashlib.sha256(data).hexdigest()


def inspect(container):
    return json.loads(command(['docker', 'inspect', container]))[0]


def api(method, path, value=None):
    args = ['docker', 'exec', '-i', CADDY, 'curl', '-fsS', '-X', method]
    if value is not None:
        args += ['-H', 'Content-Type: application/json', '--data-binary', '@-']
    data = json.dumps(value).encode() if value is not None else None
    return command(args + ['http://127.0.0.1:2019' + path], data)


def live_config():
    return json.loads(api('GET', '/config/'))


def adapt(content):
    with tempfile.TemporaryDirectory(prefix='tennisfriends-caddy-') as directory:
        source = Path(directory) / 'candidate.Caddyfile'
        source.write_bytes(content)
        remote = '/tmp/tennisfriends-production-candidate.Caddyfile'
        command(['docker', 'cp', str(source), CADDY + ':' + remote])
        try:
            result = command(['docker', 'exec', CADDY, 'caddy', 'adapt',
                              '--config', remote])
        finally:
            command(['docker', 'exec', CADDY, 'rm', '-f', remote])
    def normalize(value):
        if isinstance(value, str):
            return value.replace(remote, '/etc/caddy/Caddyfile')
        if isinstance(value, list):
            return [normalize(item) for item in value]
        if isinstance(value, dict):
            return {key: normalize(item) for key, item in value.items()}
        return value
    return normalize(json.loads(result))


def without_stage(config, stage):
    result = copy.deepcopy(config)
    servers = result['apps']['http']['servers']
    if servers.pop(STAGE_SERVER, None) != stage:
        raise RuntimeError('private staging server differs from saved exact object')
    policies = result['apps']['tls']['automation']['policies']
    if not policies or policies[0] != STAGE_POLICY:
        raise RuntimeError('private staging TLS policy differs from owned shape')
    del policies[0]
    if not policies:
        del result['apps']['tls']['automation']
    return result


def with_stage(config, stage):
    result = copy.deepcopy(config)
    servers = result['apps']['http']['servers']
    if STAGE_SERVER in servers:
        raise RuntimeError('candidate unexpectedly defines staging server')
    servers[STAGE_SERVER] = stage
    tls = result['apps'].setdefault('tls', {})
    tls.setdefault('automation', {}).setdefault('policies', []).insert(0, STAGE_POLICY)
    return result


def diff_paths(left, right, prefix=''):
    if left == right:
        return []
    if isinstance(left, dict) and isinstance(right, dict):
        result = []
        for key in sorted(set(left) | set(right)):
            if key not in left or key not in right:
                result.append(prefix + '/' + key)
            else:
                result.extend(diff_paths(left[key], right[key], prefix + '/' + key))
        return result
    if isinstance(left, list) and isinstance(right, list) and len(left) == len(right):
        result = []
        for index, (a, b) in enumerate(zip(left, right)):
            result.extend(diff_paths(a, b, prefix + '/' + str(index)))
        return result
    return [prefix]


def app_identity():
    ids = json.loads((ROOT / 'coolify-ids.json').read_text())
    measurement = json.loads((ROOT / 'build-measurements.json').read_text())
    uuid = ids['service_uuid']
    matches = command(['docker', 'ps', '-q', '--filter', 'label=coolify.serviceUuid=' + uuid]).decode().split()
    if len(matches) != 1:
        raise RuntimeError('expected exactly one own production service container')
    app = inspect(matches[0])
    if (app['Image'] != measurement['imageId'] or
            app['State']['Health']['Status'] != 'healthy' or
            app['HostConfig']['PortBindings']['3000/tcp'] !=
            [{'HostIp': '127.0.0.1', 'HostPort': '18092'}] or
            NETWORK not in app['NetworkSettings']['Networks']):
        raise RuntimeError('production app identity or health does not match')
    host = 'web-' + uuid
    if host not in app['NetworkSettings']['Networks'][NETWORK]['DNSNames']:
        raise RuntimeError('production app DNS alias absent')
    result = command(['curl', '-fsS', '--max-time', '15', '-o', '/dev/null',
                      '-w', '%{http_code}', 'http://127.0.0.1:18092/']).decode()
    if result != '200':
        raise RuntimeError('private production HTTP root is not 200')
    return host + ':3000', app


def block(upstream):
    return ('\n# TennisFriends production migration (owned additive block)\n'
            'tennisfrens.com {\n'
            '    tls /certs/tennisfriends.fullchain.pem /certs/tennisfriends.privkey.pem\n'
            f'    reverse_proxy {upstream}\n'
            '}\n'
            'www.tennisfrens.com {\n'
            '    tls /certs/tennisfriends.fullchain.pem /certs/tennisfriends.privkey.pem\n'
            '    redir https://tennisfrens.com{uri} 308\n'
            '}\n')


def verify_public(prefer_auto=False):
    results = {}
    for host, expected in [('tennisfrens.com', '200'), ('www.tennisfrens.com', '308')]:
        response = command(['curl', '-sS', '--max-time', '30', '--resolve',
                            host + ':443:127.0.0.1', '-o', '/dev/null',
                            '-w', '%{http_code} %{ssl_verify_result} %{redirect_url}',
                            'https://' + host + '/']).decode().strip().split(' ', 2)
        if response[:2] != [expected, '0']:
            raise RuntimeError('trusted production TLS smoke failed for ' + host)
        if host.startswith('www.') and response[2] != 'https://tennisfrens.com/':
            raise RuntimeError('www redirect target mismatch')
        results[host] = {'status': int(expected), 'tlsVerify': 0}
    return results


def write_file_in_place(path, data):
    with path.open('wb') as target:
        target.write(data)
        target.flush()


def restore(state):
    current = live_config()
    expected = state.get('autoConfigSha256') or state.get('appliedConfigSha256')
    if expected and digest(current) != expected:
        raise RuntimeError('active config changed after production apply; refuse rollback')
    saved = state['previousActiveConfig']
    api('POST', '/load', saved)
    write_file_in_place(CADDYFILE, base64.b64decode(state['previousCaddyfileBase64']))
    if digest(live_config()) != digest(saved):
        raise RuntimeError('rollback active config did not match saved exact config')
    if state['networkAttachedByThisRun']:
        command(['docker', 'network', 'disconnect', NETWORK, CADDY])
    for target in CERT_FILES.values():
        path = TLS_DIR / target
        if path.exists():
            path.unlink()
    STATE.unlink()


def check_cutover_dns():
    expected = '51.79.206.71'
    result = {}
    for host in ['tennisfrens.com', 'www.tennisfrens.com']:
        addresses = sorted({row[4][0] for row in socket.getaddrinfo(host, 443,
                                                                     family=socket.AF_INET)})
        if addresses != [expected]:
            raise RuntimeError('public DNS does not point exclusively to own VPS: ' + host)
        result[host] = addresses
    return result


def handoff_auto(before_file, before_live, stage, upstream, started):
    if not STATE.is_file():
        raise RuntimeError('bootstrap route apply record absent')
    state = json.loads(STATE.read_text())
    if digest(before_live) != state['appliedConfigSha256'] or \
            digest(before_file) != state['appliedCaddyfileSha256'] or \
            started != state['caddyStartedAt']:
        raise RuntimeError('bootstrap Caddy state differs from exact owned apply')
    dns = check_cutover_dns()
    static = block(upstream).encode()
    if not before_file.endswith(static):
        raise RuntimeError('Caddyfile no longer ends with exact owned production block')
    auto_block = static.replace(
        b'    tls /certs/tennisfriends.fullchain.pem /certs/tennisfriends.privkey.pem\n', b'')
    candidate_file = before_file[:-len(static)] + auto_block
    candidate = with_stage(adapt(candidate_file), stage)
    renewal = Path('/etc/letsencrypt/renewal/tennisfriends-bootstrap.conf')
    disabled = ROOT / 'tennisfriends-bootstrap.renewal.disabled.conf'
    if not renewal.is_file() or disabled.exists():
        raise RuntimeError('manual DNS renewal profile changed unexpectedly')
    write_file_in_place(CADDYFILE, candidate_file)
    try:
        api('POST', '/load', candidate)
        if digest(live_config()) != digest(candidate):
            raise RuntimeError('Caddy automatic TLS config did not load exactly')
        managed = []
        for _ in range(60):
            managed = command(['docker', 'exec', CADDY, 'find', '/data/caddy/certificates',
                               '-type', 'f', '-name', 'tennisfrens.com.crt']).decode().splitlines()
            if managed:
                break
            time.sleep(5)
        if not managed:
            raise RuntimeError('Caddy-managed production certificate was not stored')
        smoke = verify_public()
        if inspect(CADDY)['State']['StartedAt'] != started:
            raise RuntimeError('shared Caddy container restarted')
        renewal.rename(disabled)
        state.update({'autoConfigSha256': digest(candidate),
                      'autoCaddyfileSha256': digest(candidate_file),
                      'manualRenewalDisabled': True})
        STATE.write_text(json.dumps(state) + '\n')
        STATE.chmod(0o600)
        return {'result': 'PASS', 'action': 'auto', 'cutoverDns': dns,
                'caddyStartedAt': started, 'activeConfigSha256': digest(candidate),
                'caddyfileSha256': digest(candidate_file), 'stagingServerSha256': digest(stage),
                'trustedTls': smoke, 'managedCertificatePresent': True,
                'manualDnsRenewalDisabled': True}
    except Exception:
        if digest(live_config()) == digest(candidate):
            api('POST', '/load', before_live)
        write_file_in_place(CADDYFILE, before_file)
        if digest(live_config()) != digest(before_live):
            raise RuntimeError('automatic TLS handoff failed and bootstrap rollback failed')
        raise


def cert_ready():
    base = Path('/etc/letsencrypt/live') / CERT_NAME
    for source in CERT_FILES:
        if not (base / source).is_file():
            raise RuntimeError('bootstrap certificate absent: ' + source)
    cert = command(['openssl', 'x509', '-in', str(base / 'fullchain.pem'), '-noout',
                    '-checkend', '604800', '-ext', 'subjectAltName']).decode()
    if 'DNS:tennisfrens.com' not in cert or 'DNS:www.tennisfrens.com' not in cert:
        raise RuntimeError('bootstrap certificate SAN or lifetime mismatch')
    return base


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('action', choices=['status', 'apply', 'rollback', 'auto'])
    args = parser.parse_args()
    caddy = inspect(CADDY)
    if not caddy['State']['Running'] or caddy['Config']['Cmd'][:2] != ['caddy', 'run']:
        raise RuntimeError('shared ingress identity changed')
    started = caddy['State']['StartedAt']
    if args.action == 'rollback':
        if not STATE.is_file():
            raise RuntimeError('no owned production TLS apply to roll back')
        state = json.loads(STATE.read_text())
        if started != state['caddyStartedAt']:
            raise RuntimeError('shared Caddy container restarted; refuse blind rollback')
        restore(state)
        print(json.dumps({'result': 'PASS', 'action': 'rollback',
                          'restoredConfigSha256': digest(state['previousActiveConfig']),
                          'caddyStartedAt': started}))
        return
    upstream, app = app_identity()
    before_file = CADDYFILE.read_bytes()
    before_live = live_config()
    stage = before_live['apps']['http']['servers'][STAGE_SERVER]
    adapted_before = adapt(before_file)
    stripped = without_stage(before_live, stage)
    if digest(stripped) != digest(adapted_before):
        raise RuntimeError('active config differs from Caddyfile adaptation at ' +
                           ', '.join(diff_paths(stripped, adapted_before)[:12]))
    existing = STATE.is_file()
    if args.action in ('status', 'apply') and 'tennisfrens.com' in before_file.decode():
        if args.action == 'apply' or not existing:
            raise RuntimeError('production domain already appears in shared Caddyfile')
    if not existing or not json.loads(STATE.read_text()).get('manualRenewalDisabled'):
        cert_ready()
    summary = {'result': 'PASS', 'action': args.action, 'caddyStartedAt': started,
               'caddyfileSha256': digest(before_file), 'activeConfigSha256': digest(before_live),
               'stagingServerSha256': digest(stage), 'appImageId': app['Image'],
               'upstream': upstream, 'productionNetwork': NETWORK}
    if args.action == 'status':
        print(json.dumps(summary, sort_keys=True))
        return
    if args.action == 'auto':
        print(json.dumps(handoff_auto(before_file, before_live, stage, upstream, started), sort_keys=True))
        return
    if existing:
        raise RuntimeError('production TLS route already recorded')
    # The certificate copy and private network attach are the only preparatory
    # mutations. They are undone if the candidate cannot be loaded and smoked.
    caddy_network = NETWORK in caddy['NetworkSettings']['Networks']
    attached = not caddy_network
    if attached:
        command(['docker', 'network', 'connect', NETWORK, CADDY])
    copied = []
    state = None
    try:
        cert_dir = cert_ready()
        for source, name in CERT_FILES.items():
            target = TLS_DIR / name
            if target.exists():
                raise RuntimeError('own bootstrap cert destination already exists')
            shutil.copyfile(cert_dir / source, target)
            target.chmod(0o600)
            copied.append(target)
        candidate_file = before_file + block(upstream).encode()
        candidate_base = adapt(candidate_file)
        candidate = with_stage(candidate_base, stage)
        if digest(live_config()) != digest(before_live) or CADDYFILE.read_bytes() != before_file:
            raise RuntimeError('shared Caddy config changed during preparation')
        state = {'caddyStartedAt': started, 'networkAttachedByThisRun': attached,
                 'previousCaddyfileBase64': base64.b64encode(before_file).decode(),
                 'previousActiveConfig': before_live,
                 'previousCaddyfileSha256': digest(before_file),
                 'previousActiveConfigSha256': digest(before_live),
                 'appliedConfigSha256': digest(candidate),
                 'appliedCaddyfileSha256': digest(candidate_file),
                 'upstream': upstream, 'appImageId': app['Image']}
        STATE.write_text(json.dumps(state) + '\n')
        STATE.chmod(0o600)
        write_file_in_place(CADDYFILE, candidate_file)
        api('POST', '/load', candidate)
        if digest(live_config()) != digest(candidate):
            raise RuntimeError('active config does not match exact merged candidate')
        if inspect(CADDY)['State']['StartedAt'] != started:
            raise RuntimeError('shared Caddy container restarted')
        summary.update({'result': 'PASS', 'action': 'apply',
                        'appliedConfigSha256': digest(candidate),
                        'appliedCaddyfileSha256': digest(candidate_file),
                        'networkAttachedByThisRun': attached,
                        'trustedTls': verify_public()})
        print(json.dumps(summary, sort_keys=True))
    except Exception:
        if state:
            try:
                if digest(live_config()) == state['appliedConfigSha256']:
                    restore(state)
                elif digest(live_config()) == state['previousActiveConfigSha256']:
                    write_file_in_place(CADDYFILE, before_file)
                    STATE.unlink(missing_ok=True)
                    if attached:
                        command(['docker', 'network', 'disconnect', NETWORK, CADDY])
                    for target in copied:
                        target.unlink(missing_ok=True)
                else:
                    raise RuntimeError('shared config changed during failed apply; manual inspection required')
            except Exception as rollback_error:
                raise RuntimeError('production apply failed and automatic rollback failed') from rollback_error
        else:
            if attached:
                command(['docker', 'network', 'disconnect', NETWORK, CADDY])
            for target in copied:
                target.unlink(missing_ok=True)
        raise


if __name__ == '__main__':
    main()

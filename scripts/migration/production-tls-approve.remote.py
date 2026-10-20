#!/usr/bin/env python3
"""Approve one public DNS-01 value only after each authoritative server returns it."""
import json
from pathlib import Path
import subprocess
import sys

ROOT = Path('/opt/tennisfriends-production')
SERVERS = ['ns1.hosting.co.kr', 'ns2.hosting.co.kr',
           'ns3.hosting.co.kr', 'ns4.hosting.co.kr']
items = json.loads((ROOT / 'production-tls-challenges.json').read_text())
matches = [item for item in items if item['domain'] == sys.argv[1]]
if len(matches) != 1:
    raise SystemExit('expected exactly one outstanding challenge for domain')
item = matches[0]
for server in SERVERS:
    result = subprocess.run(['dig', '+short', 'TXT', item['recordName'], '@' + server],
                            capture_output=True, text=True, check=True, timeout=10)
    values = [line.strip().strip('"') for line in result.stdout.splitlines()]
    if item['value'] not in values:
        raise SystemExit('TXT not yet present at authoritative server ' + server)
approval = ROOT / ('production-tls-approved-' + item['key'] + '.json')
approval.write_text(json.dumps(item))
approval.chmod(0o600)
print(json.dumps({'result': 'PASS', 'domain': item['domain'],
                  'recordName': item['recordName'], 'authoritativeServers': SERVERS}))

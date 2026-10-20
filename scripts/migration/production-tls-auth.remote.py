#!/usr/bin/env python3
"""Certbot DNS-01 hook: publish public TXT proof and wait for verified approval."""
import hashlib
import json
import os
from pathlib import Path
import time

ROOT = Path('/opt/tennisfriends-production')
ALLOWED = {'tennisfrens.com', 'www.tennisfrens.com'}
domain = os.environ['CERTBOT_DOMAIN']
value = os.environ['CERTBOT_VALIDATION']
if domain not in ALLOWED or not value or not value.isascii():
    raise SystemExit('unexpected DNS challenge')
key = hashlib.sha256((domain + '\0' + value).encode()).hexdigest()[:16]
challenge = {'domain': domain, 'recordName': '_acme-challenge.' + domain,
             'value': value, 'key': key}
path = ROOT / 'production-tls-challenges.json'
items = json.loads(path.read_text()) if path.exists() else []
if not any(item['key'] == key for item in items):
    items.append(challenge)
    temp = path.with_suffix('.tmp')
    temp.write_text(json.dumps(items, indent=2) + '\n')
    temp.chmod(0o600)
    temp.replace(path)
approval = ROOT / ('production-tls-approved-' + key + '.json')
for _ in range(1800):
    if approval.exists() and json.loads(approval.read_text()) == challenge:
        raise SystemExit(0)
    time.sleep(1)
raise SystemExit('authoritative DNS proof not approved within 30 minutes')

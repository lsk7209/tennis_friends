"""Read-only, secret-free production rollback snapshot inventory."""
import hashlib
import json
from pathlib import Path
import subprocess

ROOT = Path('/opt/tennisfriends-production')
files = [ROOT / 'update-production-rollback.json',
         ROOT / 'update-production-rollback-60ddf3010574.json']
rows = []
for path in files:
    record = json.loads(path.read_text())
    assert hashlib.sha256(record['oldRawCompose'].encode()).hexdigest() == record['oldRawSha256']
    image = json.loads(subprocess.check_output(['docker', 'image', 'inspect', record['oldImageTag']], text=True))[0]
    assert image['Id'] == record['oldImageId']
    rows.append({'path': str(path), **{key: value for key, value in record.items()
                                        if key != 'oldRawCompose'}, 'oldImageRetained': True})
result = {'snapshots': rows,
          'hostTokenAbsent': not (ROOT / 'api-token').exists(),
          'coolifyTokenAbsent': subprocess.run(['docker', 'exec', 'coolify', 'test', '!', '-e',
              '/tmp/tennisfriends-production-api-token']).returncode == 0}
php = ("require '/var/www/html/vendor/autoload.php';"
       "$app=require '/var/www/html/bootstrap/app.php';"
       "$app->make(Illuminate\\Contracts\\Console\\Kernel::class)->bootstrap();"
       "echo json_encode(['temporary_token_count'=>"
       "Laravel\\Sanctum\\PersonalAccessToken::where('name','tennisfriends-production-temporary')->count(),"
       "'api_enabled'=>App\\Models\\InstanceSettings::get()->is_api_enabled]);")
result['coolifySession'] = json.loads(subprocess.check_output(
    ['docker', 'exec', 'coolify', 'php', '-r', php], text=True))
assert result['hostTokenAbsent'] and result['coolifyTokenAbsent']
assert result['coolifySession']['temporary_token_count'] == 0
print(json.dumps(result, indent=2))

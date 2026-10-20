<?php
// A temporary, local-only management session; restore exactly the prior setting.
require '/var/www/html/vendor/autoload.php';
$app = require '/var/www/html/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();
$path = '/tmp/tennisfriends-production-api-session.json';
$tokenPath = '/tmp/tennisfriends-production-api-token';
umask(0077);
$lock = fopen('/tmp/tennisfriends-production-api-session.lock', 'c');
if ($lock === false || !flock($lock, LOCK_EX) || !chmod('/tmp/tennisfriends-production-api-session.lock', 0600)) throw new RuntimeException('Cannot lock protected session');
$settings = App\Models\InstanceSettings::get();
if (($argv[1] ?? '') === 'cleanup') {
    $record = json_decode(file_get_contents($path), true, flags: JSON_THROW_ON_ERROR);
    $token = Laravel\Sanctum\PersonalAccessToken::find($record['token_id']);
    if ($token && $token->name !== 'tennisfriends-production-temporary') throw new RuntimeException('Token identity changed');
    if ($token && !$token->delete()) throw new RuntimeException('Exact temporary token revoke failed; record retained');
    if (!$settings->update(['is_api_enabled' => $record['api_enabled']])) throw new RuntimeException('Prior API state restore failed; record retained');
    if (!unlink($tokenPath) || !unlink($path)) throw new RuntimeException('Own session file cleanup failed');
    echo "OWN_TOKEN_REVOKED_PREVIOUS_API_SETTING_RESTORED\n";
    exit;
}
if (file_exists($path) || file_exists($tokenPath)) throw new RuntimeException('Own session already exists');
$team = App\Models\Team::findOrFail(0);
$user = App\Models\User::findOrFail(0);
if (!$user->teams()->where('teams.id', $team->id)->exists()) throw new RuntimeException('Team membership not verified');
session(['currentTeam' => $team]);
$token = $user->createToken('tennisfriends-production-temporary', ['read', 'write', 'deploy'], now()->addHour());
$token->accessToken->forceFill(['team_id' => $team->id])->save();
$createdFiles = [];
$priorApiEnabled = $settings->is_api_enabled;
$apiAttempted = false;
try {
    foreach ([$path => json_encode(['token_id' => $token->accessToken->id, 'api_enabled' => $settings->is_api_enabled]), $tokenPath => $token->plainTextToken] as $file => $value) {
        $handle = fopen($file, 'x');
        if ($handle === false) throw new RuntimeException('Cannot create protected session file');
        $createdFiles[] = $file;
        try {
            if (fwrite($handle, $value) !== strlen($value) || !fflush($handle)) throw new RuntimeException('Cannot persist protected session file');
        } finally { fclose($handle); }
        if (!chmod($file, 0600)) throw new RuntimeException('Cannot protect session file');
    }
    $apiAttempted = true;
    if (!$settings->update(['is_api_enabled' => true])) throw new RuntimeException('Cannot enable temporary API');
} catch (Throwable $error) {
    $token->accessToken->delete();
    if ($apiAttempted && !$settings->update(['is_api_enabled' => $priorApiEnabled])) throw new RuntimeException('API restore failed; own session record retained');
    foreach ($createdFiles as $file) if (file_exists($file)) unlink($file);
    throw $error;
}
echo "TEMPORARY_LOCAL_SESSION_READY\n";

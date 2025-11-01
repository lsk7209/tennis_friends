$blogPath = "d:\cousorai\web\6_tennis\tennis-friends\src\app\blog"
$foldersToDelete = @(
    "backhand-swing-correction",
    "backhand-technique-mastery",
    "best-tennis-rackets-2024",
    "common-tennis-racket-mistakes",
    "concentration-during-matches",
    "court-type-comparison",
    "doubles-tennis-strategy",
    "drop-shot-lob-guide",
    "forehand-body-balance",
    "forehand-mastery-guide",
    "knee-protection-exercises",
    "mid-match-tactical-changes",
    "net-play-mastery",
    "opponent-analysis-strategy",
    "racket-care-mistakes",
    "racket-weight-styles",
    "seoul-best-tennis-courts",
    "serve-technique-complete-guide",
    "serve-technique-improvement",
    "shoulder-injury-prevention",
    "string-replacement-guide",
    "string-tension-feel-guide",
    "tennis-apparel-guide",
    "tennis-backhand-master-guide",
    "tennis-beginner-guide",
    "tennis-common-mistakes",
    "tennis-core-strength",
    "tennis-court-strategies",
    "tennis-diet-guide",
    "tennis-elbow-prevention",
    "tennis-equipment-guide",
    "tennis-equipment-maintenance",
    "tennis-fitness-conditioning",
    "tennis-fitness-conditioning-final",
    "tennis-flexibility-training",
    "tennis-footwork-basics",
    "tennis-forehand-master-guide",
    "tennis-grip-replacement",
    "tennis-injury-prevention",
    "tennis-injury-prevention-exercises",
    "tennis-mental-game",
    "tennis-mental-techniques",
    "tennis-nutrition-guide",
    "tennis-pressure-situations",
    "tennis-serve-master-guide",
    "tennis-shoes-selection-guide",
    "tennis-strategy-basics",
    "tennis-stretching-routine",
    "tennis-string-guide",
    "tennis-string-tension",
    "tennis-umpire-rules",
    "tennis-volley-masterclass",
    "tennis-warmup-routine",
    "tournament-preparation-guide",
    "volley-technique-masterclass",
    "volley-technique-perfection",
    "winter-tennis-training"
)

foreach ($folder in $foldersToDelete) {
    $fullPath = Join-Path $blogPath $folder
    if (Test-Path $fullPath) {
        Remove-Item -Recurse -Force $fullPath
        Write-Host "Deleted: $folder"
    } else {
        Write-Host "Not found: $folder"
    }
}

Write-Host "Blog post deletion completed!"

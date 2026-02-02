$files = Get-ChildItem -Path src/app/blog -Filter page.tsx -Recurse
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match '\{tag\}') {
        $content = $content -replace '\{tag\}', '테니스 선수'
        # Also fix the multiline quotes around it if they exist
        $content = $content -replace 'category="\s*\n\s*테니스 선수\s*\n\s*"', 'category="테니스 선수"'
        [IO.File]::WriteAllText($file.FullName, $content)
        Write-Host "Fixed: $($file.FullName)"
    }
}

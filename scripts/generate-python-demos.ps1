$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot

function Run-Demo($dir, $cmd) {
  Push-Location $dir
  try {
    Write-Host "==> $dir"
    Invoke-Expression $cmd
  } finally {
    Pop-Location
  }
}

Run-Demo (Join-Path $repoRoot "python_demos\fastapi_crud_openapi") "python scripts/export_openapi.py"
Run-Demo (Join-Path $repoRoot "python_demos\django_drf_crud_openapi") "python scripts/export_openapi.py"
Run-Demo (Join-Path $repoRoot "python_demos\data_analysis_kpis") "python generate_report.py"


$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root
Write-Host "Abriendo copia local en http://localhost:4173/"
Start-Process "http://localhost:4173/"
node server.mjs

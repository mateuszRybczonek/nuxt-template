#!/usr/bin/env bash
set -euo pipefail

# ──────────────────────────────────────────────
# Initialize a new project from the nuxt-template
# Usage: ./scripts/init-project.sh
# ──────────────────────────────────────────────

kRed='\033[0;31m'
kGreen='\033[0;32m'
kCyan='\033[0;36m'
kBold='\033[1m'
kReset='\033[0m'

log() { echo -e "${kCyan}➜${kReset} $1"; }
success() { echo -e "${kGreen}✔${kReset} $1"; }
error() { echo -e "${kRed}✖${kReset} $1" >&2; exit 1; }

# Resolve project root (script lives in scripts/)
kProjectRoot="$(cd "$(dirname "$0")/.." && pwd)"
cd "$kProjectRoot"

# ── Prompts ──────────────────────────────────

echo -e "\n${kBold}🚀 New Project Setup${kReset}\n"

read -rp "Project name (kebab-case, e.g. my-app): " kProjectName
[[ -z "$kProjectName" ]] && error "Project name is required"
[[ ! "$kProjectName" =~ ^[a-z][a-z0-9-]*$ ]] && error "Project name must be kebab-case (lowercase letters, numbers, hyphens)"

read -rp "npm scope (e.g. @my-org, leave empty for none): " kScope
kScope="${kScope#@}" # strip leading @ if provided

read -rp "App title (shown in browser tab, e.g. My App): " kAppTitle
[[ -z "$kAppTitle" ]] && kAppTitle="$kProjectName"

read -rp "Dev API host [http://localhost:3001]: " kDevApiHost
kDevApiHost="${kDevApiHost:-http://localhost:3001}"

read -rp "Prod API host [https://your-api.com]: " kProdApiHost
kProdApiHost="${kProdApiHost:-https://your-api.com}"

# Build the full package name
if [[ -n "$kScope" ]]; then
  kPackageName="@${kScope}/${kProjectName}"
else
  kPackageName="$kProjectName"
fi

echo ""
log "Package name: ${kBold}${kPackageName}${kReset}"
log "App title:    ${kBold}${kAppTitle}${kReset}"
log "Dev API:      ${kBold}${kDevApiHost}${kReset}"
log "Prod API:     ${kBold}${kProdApiHost}${kReset}"
echo ""
read -rp "Continue? [Y/n] " kConfirm
[[ "${kConfirm:-Y}" =~ ^[Nn] ]] && { echo "Aborted."; exit 0; }

# ── Apply changes ────────────────────────────

log "Updating package.json..."
# Use node to safely modify JSON
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.name = '${kPackageName}';
pkg.version = '0.1.0';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
"
success "package.json updated"

log "Updating nuxt.config.ts..."
sed -i '' "s|title: 'Your App Name'|title: '${kAppTitle}'|" nuxt.config.ts
sed -i '' "s|const kDevApiHost = '.*'|const kDevApiHost = '${kDevApiHost}'|" nuxt.config.ts
sed -i '' "s|const kProdApiHost = '.*'|const kProdApiHost = '${kProdApiHost}'|" nuxt.config.ts
success "nuxt.config.ts updated"

log "Resetting git history..."
rm -rf .git
git init -q
git add -A
git commit -q -m "Initial commit: ${kProjectName} setup"
success "Fresh git history created"

log "Installing dependencies..."
pnpm install
success "Dependencies installed"

# ── Self-destruct ────────────────────────────
log "Cleaning up init script..."
rm -f scripts/init-project.sh
rmdir scripts 2>/dev/null || true # remove dir only if empty
git add -A
git commit -q -m "chore: remove init script"
success "Init script removed"

echo -e "\n${kGreen}${kBold}✨ Project ${kPackageName} is ready!${kReset}"
echo -e "   Run ${kCyan}pnpm dev${kReset} to start developing.\n"

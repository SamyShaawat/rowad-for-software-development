#!/bin/bash
# nx test:deploy — Pre-deployment checks (typecheck + lint + build)
# Usage: ./scripts/test-deploy.sh  OR  pnpm nx test:deploy rowad

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🚀 Running Deployment Pre-Checks"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 1: Type checking
echo "Step 1/3 — Type checking..."
npx tsc --noEmit --pretty
echo "✅ Type checking passed."
echo ""

# Step 2: Linting
echo "Step 2/3 — Linting..."
pnpm nx lint rowad
echo "✅ Linting passed."
echo ""

# Step 3: Build
echo "Step 3/3 — Building..."
pnpm nx build rowad
echo "✅ Build successful."
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅ All deployment pre-checks passed!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

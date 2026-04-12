#!/bin/bash
# nx test:ci — Full CI pipeline (typecheck + lint + build + E2E)
# Usage: ./scripts/test-ci.sh  OR  pnpm nx test:ci rowad

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🔄 Running Full CI Pipeline"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 1: Type checking
echo "Step 1/4 — Type checking..."
npx tsc --noEmit --pretty
echo "✅ Type checking passed."
echo ""

# Step 2: Linting
echo "Step 2/4 — Linting..."
pnpm nx lint rowad
echo "✅ Linting passed."
echo ""

# Step 3: Build
echo "Step 3/4 — Building..."
pnpm nx build rowad
echo "✅ Build successful."
echo ""

# Step 4: E2E tests
echo "Step 4/4 — E2E tests..."
pnpm playwright test
echo "✅ E2E tests passed."
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅ All CI checks passed!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

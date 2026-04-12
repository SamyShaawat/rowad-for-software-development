#!/bin/bash
# nx test:build — Typecheck + Lint + Build
# Usage: ./scripts/test-build.sh  OR  pnpm nx test:build rowad

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🏗️  Running Build Test (Typecheck + Lint + Build)"
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
echo "  ✅ Build test passed — code is clean."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

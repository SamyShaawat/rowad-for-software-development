#!/bin/bash
# nx test:all — Run ALL tests (typecheck + lint + errors + build + E2E)
# Usage: ./scripts/test-all.sh  OR  pnpm nx test:all rowad

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🧪 Running ALL Tests"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 1: Type checking
echo "Step 1/5 — Type checking..."
npx tsc --noEmit --pretty
echo "✅ Type checking passed."
echo ""

# Step 2: Linting
echo "Step 2/5 — Linting..."
pnpm nx lint rowad
echo "✅ Linting passed."
echo ""

# Step 3: Error scan
echo "Step 3/5 — Error scanning..."
ERRORS=$(npx tsc --noEmit 2>&1 | grep -i "error" || true)
if [ -z "$ERRORS" ]; then
  echo "✅ No errors found."
else
  echo "❌ Found errors:"
  echo "$ERRORS"
  exit 1
fi
echo ""

# Step 4: Build
echo "Step 4/5 — Building..."
pnpm nx build rowad
echo "✅ Build successful."
echo ""

# Step 5: E2E tests
echo "Step 5/5 — E2E tests..."
pnpm playwright test
echo "✅ E2E tests passed."
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅ All tests passed successfully!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

#!/bin/bash
# nx clean — Remove build artifacts and test reports
# Usage: ./scripts/clean.sh  OR  pnpm nx clean rowad

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🧹 Cleaning Build Artifacts"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "Removing dist/..."
rm -rf dist/

echo "Removing .next/..."
rm -rf .next/

echo "Removing build/..."
rm -rf build/

echo "Removing playwright-report/..."
rm -rf playwright-report/

echo "Removing test-results/..."
rm -rf test-results/

echo ""
echo "✅ Clean complete — all build artifacts removed."

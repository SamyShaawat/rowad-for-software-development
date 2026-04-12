#!/bin/bash
# nx test:e2e — Playwright E2E tests
# Usage: ./scripts/test-e2e.sh  OR  pnpm nx test:e2e rowad

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🧪 Running E2E Tests (Playwright)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

pnpm playwright test

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ E2E tests passed — all scenarios green."
else
  echo ""
  echo "❌ E2E tests failed — check playwright-report/ for details."
  exit 1
fi

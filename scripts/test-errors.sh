#!/bin/bash
# nx test:errors — Check for TypeScript compilation errors only
# Usage: ./scripts/test-errors.sh  OR  pnpm nx test:errors rowad

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🔎 Scanning for TypeScript Errors"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

ERRORS=$(npx tsc --noEmit --pretty 2>&1 | grep -i "error" || true)

if [ -z "$ERRORS" ]; then
  echo "✅ No TypeScript errors found — code is clean."
else
  echo "❌ Found TypeScript errors:"
  echo ""
  npx tsc --noEmit --pretty 2>&1 | grep -E "error TS|Found [0-9]+ error"
  echo ""
  echo "Fix these errors before committing."
  exit 1
fi

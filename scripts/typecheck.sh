#!/bin/bash
# nx typecheck — TypeScript type checking
# Usage: ./scripts/typecheck.sh  OR  pnpm nx typecheck rowad

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🔤 Running TypeScript Type Checking"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

npx tsc --noEmit --pretty

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Type checking passed — no type errors found."
else
  echo ""
  echo "❌ Type checking failed — fix errors before committing."
  exit 1
fi

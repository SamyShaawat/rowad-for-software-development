#!/bin/bash
# nx lint — ESLint code quality checks
# Usage: ./scripts/lint.sh  OR  pnpm nx lint rowad

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🔍 Running ESLint"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

pnpm nx lint rowad

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Linting passed — no lint errors found."
else
  echo ""
  echo "❌ Linting failed — run 'pnpm nx lint:fix rowad' to auto-fix."
  exit 1
fi

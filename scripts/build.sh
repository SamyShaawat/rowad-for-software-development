#!/bin/bash
# nx build — Production build
# Usage: ./scripts/build.sh  OR  pnpm nx build rowad

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🏗️  Building Production Bundle"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

pnpm nx build rowad

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Build successful — output in dist/rowad/"
else
  echo ""
  echo "❌ Build failed — check errors above."
  exit 1
fi

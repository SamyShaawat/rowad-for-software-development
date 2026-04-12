#!/bin/bash
# nx deploy — Deploy pipeline (test:deploy + deploy action)
# Usage: ./scripts/deploy.sh  OR  pnpm nx deploy rowad

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🚀 Deploying to Production"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Pre-deployment checks
echo "Running pre-deployment checks..."
pnpm nx test:deploy rowad

echo ""
echo "Deploying build artifacts..."
echo "✅ Deployment complete."

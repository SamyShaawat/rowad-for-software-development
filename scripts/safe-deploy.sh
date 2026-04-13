#!/bin/bash
# Safe deployment script - backs up existing files before overwriting

set -e

DEPLOYPATH="/home/irowad/public_html"
BACKUP_PATH="/home/irowad/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🚀 Safe Deployment Script"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Create backup directory
echo "📁 Creating backup directory..."
mkdir -p "$BACKUP_PATH"

# Backup existing files
if [ -d "$DEPLOYPATH" ] && [ "$(ls -A $DEPLOYPATH 2>/dev/null)" ]; then
    echo "📦 Backing up existing files in $DEPLOYPATH..."
    cp -R "$DEPLOYPATH" "$BACKUP_PATH/public_html_backup_$TIMESTAMP"
    echo "✅ Backup created: $BACKUP_PATH/public_html_backup_$TIMESTAMP"
    
    # List what's being backed up
    echo ""
    echo "📋 Files being backed up:"
    ls -la "$DEPLOYPATH" | head -20
    echo ""
    
    # Clean old files (keep only Next.js build files)
    echo "🗑️  Cleaning old files from $DEPLOYPATH..."
    echo "   (Keeping: .htaccess, images, uploads, other non-build files)"
    
    # Remove old build files
    rm -rf "$DEPLOYPATH/.next" 2>/dev/null || true
    rm -rf "$DEPLOYPATH/public" 2>/dev/null || true
    rm -f "$DEPLOYPATH/index.html" 2>/dev/null || true
    rm -f "$DEPLOYPATH/*.js" 2>/dev/null || true
    rm -f "$DEPLOYPATH/*.css" 2>/dev/null || true
    rm -f "$DEPLOYPATH/*.json" 2>/dev/null || true
    
    echo "✅ Old build files removed"
else
    echo "⚠️  $DEPLOYPATH is empty or doesn't exist"
fi

echo ""
echo "✅ Pre-deployment backup complete"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Next: Git will deploy new files"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

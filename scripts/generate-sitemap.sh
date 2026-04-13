#!/bin/bash
# =============================================================================
# generate-sitemap.sh - Dynamic sitemap.xml generator for Rowad static export
# =============================================================================
# This script generates a professional sitemap.xml based on the build output.
# It scans the build directory for HTML files and creates a proper XML sitemap.
# Should run AFTER `nx build rowad` and AFTER `generate-error-pages.sh`.
#
# Usage: bash scripts/generate-sitemap.sh
# =============================================================================

set -e

# ── Configuration ─────────────────────────────────────────────────────────────
BUILD_DIR="build"
SITEMAP_FILE="$BUILD_DIR/sitemap.xml"
BASE_URL="https://rowad.com"
TODAY=$(date +%Y-%m-%d)

# ── Validate Build Directory ─────────────────────────────────────────────────
if [ ! -d "$BUILD_DIR" ]; then
  echo "❌ Build directory '$BUILD_DIR' not found. Run 'pnpm build' first!"
  exit 1
fi

echo "🗺️  Generating sitemap.xml for $BASE_URL..."

# ── Define Routes with Priority and Change Frequency ─────────────────────────
# Format: "path|priority|changefreq"
# Leave path empty for homepage
declare -a ROUTES=(
  "|1.0|weekly"
  "about|0.8|monthly"
  "services|0.9|monthly"
  "clients|0.7|monthly"
  "contact|0.6|yearly"
)

# ── Generate XML Header ──────────────────────────────────────────────────────
cat > "$SITEMAP_FILE" << 'HEADER'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

HEADER

# ── Generate URL Entries ─────────────────────────────────────────────────────
for route_info in "${ROUTES[@]}"; do
  IFS='|' read -r path priority changefreq <<< "$route_info"

  # Build the full URL
  if [ -z "$path" ]; then
    url="$BASE_URL/"
  else
    url="$BASE_URL/$path"
  fi

  # Write the URL entry
  cat >> "$SITEMAP_FILE" << EOF
  <url>
    <loc>$url</loc>
    <lastmod>$TODAY</lastmod>
    <changefreq>$changefreq</changefreq>
    <priority>$priority</priority>
  </url>

EOF

  echo "   ✅ Added: $url (priority: $priority, frequency: $changefreq)"
done

# ── Scan for Additional Pages (Dynamic Detection) ────────────────────────────
# Look for HTML files in subdirectories that aren't in our explicit list
echo ""
echo "🔍 Scanning for additional pages in build directory..."

for html_file in $(find "$BUILD_DIR" -name "*.html" -not -name "404.html" -not -name "500.html" -not -name "403.html" | sort); do
  # Get relative path from build dir
  rel_path="${html_file#$BUILD_DIR/}"

  # Skip index.html (homepage already handled)
  if [ "$rel_path" = "index.html" ]; then
    continue
  fi

  # Extract directory path for nested pages
  dir_path=$(dirname "$rel_path")

  # Skip if it's a known route or in special directories
  if [[ "$dir_path" == "." ]] || [[ "$dir_path" == *"_"* ]] || [[ "$dir_path" == "images"* ]] || [[ "$dir_path" == "fonts"* ]]; then
    continue
  fi

  # Convert directory path to URL
  url_path=$(echo "$dir_path" | sed 's|/index||g')
  full_url="$BASE_URL/$url_path"

  # Check if already in sitemap
  if grep -q "<loc>$full_url</loc>" "$SITEMAP_FILE"; then
    echo "   ⏭️  Skipped (already in sitemap): $full_url"
    continue
  fi

  # Add with lower priority
  cat >> "$SITEMAP_FILE" << EOF
  <url>
    <loc>$full_url</loc>
    <lastmod>$TODAY</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

EOF

  echo "   ✅ Auto-detected: $full_url"
done

# ── Close XML ─────────────────────────────────────────────────────────────────
echo "</urlset>" >> "$SITEMAP_FILE"

# ── Summary ───────────────────────────────────────────────────────────────────
echo ""
echo "✅ Sitemap generated successfully at: $SITEMAP_FILE"
echo "   Total routes: ${#ROUTES[@]} explicit + auto-detected pages"
echo "   Base URL: $BASE_URL"
echo ""
echo "📋 Routes in sitemap:"
for route_info in "${ROUTES[@]}"; do
  IFS='|' read -r path priority changefreq <<< "$route_info"
  if [ -z "$path" ]; then
    echo "   • $BASE_URL/ (priority: $priority)"
  else
    echo "   • $BASE_URL/$path (priority: $priority)"
  fi
done
echo ""
echo "🔗 Don't forget to submit to:"
echo "   • Google Search Console: https://search.google.com/search-console"
echo "   • Bing Webmaster Tools: https://www.bing.com/webmasters"
echo "   • robots.txt already references: $BASE_URL/sitemap.xml"

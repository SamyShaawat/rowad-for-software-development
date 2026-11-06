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
# lastmod: date of the last commit, so redeploying without changes does not change it
TODAY=$(git log -1 --format=%cs 2>/dev/null || date +%Y-%m-%d)

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
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

HEADER

# ── Generate URL Entries: English and Arabic, each linking to both (hreflang) ─
# sitemap.txt: the same pages as plain text, one URL per line (an old copy on the server listed
# redirecting URLs such as /about-us)
: > "$BUILD_DIR/sitemap.txt"

for route_info in "${ROUTES[@]}"; do
  IFS='|' read -r path priority changefreq <<< "$route_info"

  # English keeps today's URLs; Arabic lives under /ar
  if [ -z "$path" ]; then
    en_url="$BASE_URL/"
    ar_url="$BASE_URL/ar"
  else
    en_url="$BASE_URL/$path"
    ar_url="$BASE_URL/ar/$path"
  fi

  for loc in "$en_url" "$ar_url"; do
    cat >> "$SITEMAP_FILE" << EOF
  <url>
    <loc>$loc</loc>
    <xhtml:link rel="alternate" hreflang="en" href="$en_url"/>
    <xhtml:link rel="alternate" hreflang="ar" href="$ar_url"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="$en_url"/>
    <lastmod>$TODAY</lastmod>
    <changefreq>$changefreq</changefreq>
    <priority>$priority</priority>
  </url>

EOF
  done

  printf '%s\n%s\n' "$en_url" "$ar_url" >> "$BUILD_DIR/sitemap.txt"
  echo "   ✅ Added: $en_url and $ar_url (priority: $priority, frequency: $changefreq)"
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
  if [[ "$dir_path" == "." ]] || [[ "$dir_path" == *"_"* ]] || [[ "$dir_path" == "images"* ]] || [[ "$dir_path" == "fonts"* ]] || [[ "$dir_path" == "ar"* ]]; then
    # ar/* pages are listed explicitly above (with their hreflang links), so the scan skips them
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

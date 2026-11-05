#!/usr/bin/env bash
# Print files that were deployed last time (old manifest) but are not in this build (new manifest).
# Only ever lists paths we deployed before, so server-only files are never touched.
# Usage: stale-files.sh old-manifest.txt new-manifest.txt
set -euo pipefail
comm -23 <(sort -u "$1") <(sort -u "$2") | grep -vE '^$|^/|(^|/)\.\.(/|$)' || true

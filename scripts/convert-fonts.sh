#!/usr/bin/env bash
# Convert all OTF fonts in public/featureicons/sf-pro-display to WOFF2 using pyftsubset
# Requirements: pip install fonttools

set -euo pipefail

SRC_DIR="public/featureicons/sf-pro-display"
DEST_DIR="public/fonts/sf-pro-display"

mkdir -p "$DEST_DIR"

shopt -s nullglob
for otf in "$SRC_DIR"/*.OTF "$SRC_DIR"/*.otf; do
  filename=$(basename "$otf")
  name="${filename%.*}"
  out="$DEST_DIR/${name}.woff2"
  echo "Converting $otf -> $out"
  # Use pyftsubset to create a WOFF2 flavored font containing all glyphs
  pyftsubset "$otf" \
    --output-file="$out" \
    --flavor=woff2 \
    --glyphs="*" \
    --layout-features='*' \
    --no-hinting || {
      echo "pyftsubset failed for $otf" >&2
      exit 1
    }
done

echo "Conversion complete. Please verify files in $DEST_DIR"

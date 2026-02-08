#!/usr/bin/env bash
# Safely remove OTF fonts after verifying WOFF2 conversion.

set -euo pipefail

SRC_DIR="public/featureicons/sf-pro-display"
BACKUP_DIR="public/featureicons/sf-pro-display-backup-$(date +%s)"
WOFF_DIR="public/fonts/sf-pro-display"

if [ ! -d "$WOFF_DIR" ]; then
  echo "No WOFF2 directory found at $WOFF_DIR. Run conversion first." >&2
  exit 1
fi

read -p "This will move OTF files to backup ($BACKUP_DIR). Continue? [y/N] " yn
case "$yn" in
  [Yy]*)
    mkdir -p "$BACKUP_DIR"
    shopt -s nullglob
    for f in "$SRC_DIR"/*.OTF "$SRC_DIR"/*.otf; do
      echo "Moving $f -> $BACKUP_DIR/"
      mv "$f" "$BACKUP_DIR/"
    done
    echo "OTF files moved to $BACKUP_DIR. Verify site works and delete backup when ready.";
    ;;
  *)
    echo "Aborted. No files changed.";
    exit 0;
    ;;
esac

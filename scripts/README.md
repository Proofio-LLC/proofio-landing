Font conversion helper scripts

1) Convert OTF -> WOFF2

Requires Python fonttools (pyftsubset):

```bash
pip install fonttools
```

Then run:

```bash
./scripts/convert-fonts.sh
```

2) Remove OTFs after verification

This will move OTF files to a timestamped backup directory (safe rollback):

```bash
./scripts/remove-otf.sh
```

Notes:
- The conversion step writes WOFF2s to `public/fonts/sf-pro-display/` which `layout.tsx`
  prefers. Do not delete OTFs until you verified the site.

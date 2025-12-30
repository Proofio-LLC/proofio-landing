# Vercel Deployment Guide

## Voraussetzungen

1. GitHub Repository mit deinem Code
2. Vercel Account (kostenlos)
3. Sanity CMS Projekt (optional, für Blog)

## Deployment-Schritte

### 1. GitHub Repository

Stelle sicher, dass dein Code auf GitHub ist:

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Vercel Import

1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke auf "Add New..." → "Project"
3. Importiere dein GitHub Repository
4. Vercel erkennt automatisch Next.js

### 3. Environment Variables

Füge diese Environment Variables in Vercel hinzu:

**Settings → Environment Variables:**

```
NEXT_PUBLIC_SANITY_PROJECT_ID=deine-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

**Wichtig:** 
- Setze diese für alle Environments (Production, Preview, Development)
- Nach dem Hinzufügen muss ein neuer Deployment getriggert werden

### 4. Build Settings

Vercel erkennt automatisch:
- **Framework:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### 5. Deploy

1. Klicke auf "Deploy"
2. Warte auf den Build (ca. 2-3 Minuten)
3. Deine Seite ist live! 🎉

## Nach dem Deployment

### Custom Domain

1. Gehe zu **Settings → Domains**
2. Füge deine Domain hinzu
3. Folge den DNS-Anweisungen

### Environment Variables aktualisieren

1. Gehe zu **Settings → Environment Variables**
2. Bearbeite oder füge neue Variablen hinzu
3. Trigger einen neuen Deployment

## Troubleshooting

### Build schlägt fehl

- Prüfe die Build-Logs in Vercel
- Stelle sicher, dass alle Environment Variables gesetzt sind
- Prüfe, ob alle Dependencies in `package.json` sind

### Sanity Fehler

- Stelle sicher, dass `NEXT_PUBLIC_SANITY_PROJECT_ID` und `NEXT_PUBLIC_SANITY_DATASET` gesetzt sind
- Prüfe, ob das Dataset in Sanity existiert
- Die Seite funktioniert auch ohne Sanity (Blog zeigt dann keine Posts)

### Performance

- Vercel optimiert automatisch für Performance
- Bilder werden über Vercel's Image Optimization geladen
- Static Pages werden automatisch gecached

## Monitoring

- **Analytics:** Vercel Analytics (optional aktivieren)
- **Logs:** Verfügbar im Vercel Dashboard
- **Deployments:** Alle Deployments werden gespeichert


# 🎯 Proofio - API-First Review Aggregation Platform

Ein modernes SaaS-System zum Sammeln, Normalisieren und Analysieren von Bewertungen aus verschiedenen Quellen.

## ✨ Features

### 🔌 Multi-Source Integration

- **Apple App Store** - iOS App Reviews
- **Google Play Store** - Android App Reviews
- **Trustpilot** - Business Reviews
- **Google Reviews** - Google Maps Bewertungen
- **Erweiterbar** - Einfaches Hinzufügen neuer Quellen

### 📊 Smart Analytics

- **Normalisierung** - Einheitliches Datenformat für alle Quellen
- **Sentiment-Analyse** - Automatische Klassifizierung (positive/neutral/negative)
- **Review-Clustering** - Keyword-basierte Kategorisierung
- **Aggregationen** - Durchschnittsbewertung, Rating-Verteilung, Trends

### 🚀 REST API

- **Public API** - Sichere API mit Key-basierter Authentifizierung
- **CORS-Ready** - Nutzbar von jedem Frontend
- **Rate Limiting** - Schutz vor Missbrauch
- **Query-Filter** - Nach Datum, Rating, Sentiment, Source filtern

### 🎨 Embed Widget

- **Framework-agnostisch** - Funktioniert mit jedem Framework
- **Responsive** - Mobile-optimiert
- **Themes** - Light & Dark Mode
- **Anpassbar** - Verschiedene Konfigurations-Optionen

## 🏗️ Architektur

```
proofio-de/
├── app/                    # Next.js App Directory
│   ├── api/               # REST API Endpoints
│   │   ├── projects/      # Project Management
│   │   ├── sources/       # Source Management
│   │   ├── reviews/       # Review Retrieval
│   │   ├── aggregations/  # Statistics & Metrics
│   │   ├── clusters/      # Review Clustering
│   │   ├── sync/          # Manual Sync Trigger
│   │   └── cron/          # Scheduled Ingestion
│   ├── demo/              # Widget Demo Page
│   └── page.tsx           # Landing Page
├── lib/
│   ├── adapters/          # Source Adapters (Plugin Pattern)
│   │   ├── base.ts        # Abstract Base Adapter
│   │   ├── app-store.ts   # Apple App Store
│   │   ├── google-play.ts # Google Play Store
│   │   ├── trustpilot.ts  # Trustpilot
│   │   └── google-reviews.ts # Google Reviews
│   ├── services/          # Business Logic
│   │   ├── ingestion.ts   # Review Ingestion Service
│   │   ├── clustering.ts  # Clustering & Sentiment
│   │   └── aggregation.ts # Statistics Service
│   ├── prisma/            # Database Client
│   └── utils/             # Helper Functions
├── prisma/
│   └── schema.prisma      # Database Schema
├── public/
│   └── widget.js          # Embedable Widget
└── scripts/
    └── cron-ingestion.ts  # Standalone Cron Job
```

## 📦 Installation

### Schnellstart

```bash
# 1. Dependencies installieren
npm install

# 2. Datenbank initialisieren
npx prisma generate
npx prisma db push

# 3. Optional: Demo-Daten erstellen
npm run db:seed

# 4. Development Server starten
npm run dev
```

Öffne http://localhost:3000 🎉

### 📖 Detaillierte Setup-Anleitung

Für eine **Schritt-für-Schritt Anleitung** (inkl. Deployment, Cron-Setup, Widget-Integration) siehe:

👉 **[SETUP.md](./SETUP.md)** - Kompletter Setup-Guide von Installation bis Go-Live

## 🚀 Quick Start

### 1. Projekt erstellen

```bash
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{"name": "Mein Projekt"}'
```

Response:

```json
{
  "project": {
    "id": "clx...",
    "name": "Mein Projekt",
    "apiKey": "clx...",
    "createdAt": "2024-12-15T..."
  }
}
```

### 2. Source hinzufügen

**App Store:**

```bash
curl -X POST http://localhost:3000/api/sources \
  -H "Content-Type: application/json" \
  -d '{
    "projectId": "YOUR_PROJECT_ID",
    "type": "APP_STORE",
    "config": {
      "appId": "123456789",
      "country": "de"
    }
  }'
```

**Google Play:**

```bash
curl -X POST http://localhost:3000/api/sources \
  -H "Content-Type: application/json" \
  -d '{
    "projectId": "YOUR_PROJECT_ID",
    "type": "GOOGLE_PLAY",
    "config": {
      "packageName": "com.example.app",
      "language": "de"
    }
  }'
```

### 3. Reviews synchronisieren

```bash
curl -X POST http://localhost:3000/api/sync \
  -H "Content-Type: application/json" \
  -d '{"projectId": "YOUR_PROJECT_ID"}'
```

### 4. Reviews abrufen

```bash
curl http://localhost:3000/api/reviews \
  -H "x-api-key: YOUR_API_KEY"
```

Query Parameters:

- `limit` - Anzahl (Standard: 10)
- `offset` - Pagination
- `since` - Datum (ISO 8601)
- `source` - Source ID
- `sentiment` - positive|neutral|negative
- `minRating` - Mindestbewertung (1-5)
- `maxRating` - Maximalbewertung (1-5)

### 5. Aggregationen abrufen

```bash
curl http://localhost:3000/api/aggregations \
  -H "x-api-key: YOUR_API_KEY"
```

Response:

```json
{
  "aggregation": {
    "totalReviews": 42,
    "averageRating": 4.3,
    "ratingDistribution": {
      "1": 2,
      "2": 3,
      "3": 5,
      "4": 12,
      "5": 20
    },
    "latestReviews": [...]
  },
  "sentiments": {
    "positive": 28,
    "neutral": 10,
    "negative": 4
  },
  "trend": {
    "current": { "averageRating": 4.5, "count": 15 },
    "previous": { "averageRating": 4.2, "count": 12 },
    "change": { "rating": 0.3, "count": 3 }
  }
}
```

### 6. Cluster abrufen

```bash
curl http://localhost:3000/api/clusters \
  -H "x-api-key: YOUR_API_KEY"
```

## 🎨 Widget Integration

### Quick Start

```html
<div id="proofio-widget" data-api-key="YOUR_API_KEY"></div>
<script src="https://your-domain.com/widget.js"></script>
```

Das Widget funktioniert auf **jeder Website** - WordPress, Next.js, React, Vue, Webflow, Shopify, statisches HTML, etc.

### Filter & Display Optionen

```html
<div id="proofio-widget" data-api-key="YOUR_API_KEY" <!-- Anzahl & Filter -->
  data-limit="10" data-min-rating="4" data-sentiment="positive"
  data-language="de" data-show-verified-only="true"

  <!-- Layout & Styling -->
  data-theme="light" data-layout="grid" data-columns="2"
  data-show-aggregation="true"

  <!-- Display Optionen -->
  data-hide-author-avatar="false" data-max-text-length="200" >
</div>
<script src="https://your-domain.com/widget.js"></script>
```

### 📖 Vollständige Widget-Dokumentation

Siehe **[WIDGET.md](./WIDGET.md)** für:

- ✅ **Alle Konfigurations-Optionen** (20+ Optionen)
- ✅ **Platform-spezifische Guides**: WordPress, Next.js, React, Vue, Svelte, Shopify, Webflow, Wix
- ✅ **Custom Styling** mit CSS Variablen
- ✅ **Beispiel-Konfigurationen** für verschiedene Use Cases
- ✅ **Troubleshooting & Best Practices**

### Programmatische Verwendung

```javascript
const widget = new ProofioWidget(document.getElementById("my-widget"));
```

## ⚙️ Automatische Synchronisierung

### Option 1: Vercel Cron (Empfohlen für Vercel)

Erstelle `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron",
      "schedule": "0 * * * *"
    }
  ]
}
```

### Option 2: Externe Cron-Services

Nutze Services wie [cron-job.org](https://cron-job.org):

- URL: `https://your-domain.com/api/cron?secret=YOUR_SECRET`
- Schedule: `0 * * * *` (jede Stunde)

### Option 3: System Cron

```bash
# Crontab bearbeiten
crontab -e

# Jede Stunde ausführen
0 * * * * cd /path/to/proofio-de && ts-node scripts/cron-ingestion.ts
```

## 🗄️ Datenmodell

### Project

- `id` - Unique ID
- `name` - Project Name
- `apiKey` - API Key für Public API
- `createdAt`, `updatedAt`

### Source

- `id` - Unique ID
- `projectId` - Zugehöriges Project
- `type` - Source Type (APP_STORE, GOOGLE_PLAY, etc.)
- `config` - JSON Config für Adapter
- `isActive` - Aktiv/Inaktiv
- `lastSyncAt` - Letzter Sync

### Review

- `id` - Unique ID
- `projectId`, `sourceId` - Zugehörigkeit
- `externalId` - Original ID von Source
- `rating` - 1-5 Sterne (normalisiert)
- `text`, `title` - Review Content
- `authorName`, `authorAvatar` - Autor
- `language` - ISO 639-1 Code
- `reviewDate` - Original Datum
- `verified` - Verifizierter Kauf
- `keywords` - JSON Array
- `sentiment` - positive|neutral|negative
- `cluster` - Kategorie

## 🔧 Eigene Source-Adapter erstellen

```typescript
// lib/adapters/my-source.ts
import { SourceType } from "@prisma/client";
import { BaseAdapter } from "./base";
import { z } from "zod";

const MySourceConfigSchema = z.object({
  apiKey: z.string(),
  // ... weitere Config-Felder
});

export class MySourceAdapter extends BaseAdapter {
  type = SourceType.CUSTOM;

  validateConfig(config: unknown) {
    return MySourceConfigSchema.parse(config);
  }

  async fetchReviews(config, since?) {
    const validConfig = this.validateConfig(config);

    // Fetch Reviews von deiner Quelle
    const rawReviews = await fetchFromMySource(validConfig);

    // Normalisiere auf NormalizedReview Format
    return rawReviews.map((raw) => ({
      externalId: raw.id,
      rating: this.normalizeRating(raw.stars, 5),
      text: raw.comment,
      authorName: raw.user,
      language: this.extractLanguage(raw.comment),
      reviewDate: new Date(raw.date),
      sourceUrl: raw.url,
      verified: raw.verified,
    }));
  }
}
```

Registrierung in `lib/adapters/index.ts`:

```typescript
import { MySourceAdapter } from "./my-source";

export class AdapterFactory {
  private static adapters = new Map([
    // ... existing adapters
    [SourceType.CUSTOM, new MySourceAdapter()],
  ]);
}
```

## 📊 Database Management

```bash
# Prisma Studio öffnen (GUI)
npm run db:studio

# Schema ändern und DB aktualisieren
npm run db:push

# Migration erstellen (Production)
npx prisma migrate dev --name my_migration
```

## 🧪 Testing

### API Tests mit curl

Siehe `tests/api-test.sh` für vollständige Test-Suite.

### Widget Test

Besuche `/demo` für Live-Preview des Widgets.

## 🚀 Deployment

### Vercel (Empfohlen)

1. Repository mit Vercel verbinden
2. Environment Variables setzen:
   - `DATABASE_URL` - Datenbank (z.B. Supabase, PlanetScale)
3. Deploy!

### Docker

```bash
# Build
docker build -t proofio .

# Run
docker run -p 3000:3000 -e DATABASE_URL="..." proofio
```

## 🔐 Security

- **API Keys** - Automatisch generierte UUIDs
- **CORS** - Konfigurierbar in `lib/utils/api.ts`
- **Rate Limiting** - TODO: Implementierung mit `@upstash/ratelimit`
- **Input Validation** - Zod Schemas
- **SQL Injection** - Prisma schützt automatisch

## 📈 Performance

- **Indexierung** - Optimierte DB-Indizes auf häufigen Queries
- **Caching** - TODO: Redis für API-Responses
- **Pagination** - Offset-based Pagination
- **Lazy Loading** - Widget lädt asynchron

## 🤝 Contributing

Contributions sind willkommen! Bitte:

1. Fork das Repository
2. Feature Branch erstellen (`git checkout -b feature/amazing`)
3. Commit Changes (`git commit -m 'Add amazing feature'`)
4. Push to Branch (`git push origin feature/amazing`)
5. Pull Request öffnen

## 📄 License

MIT License - siehe [LICENSE](LICENSE)

## 🙏 Credits

Built with:

- [Next.js 16](https://nextjs.org)
- [Prisma](https://prisma.io)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Zod](https://zod.dev)

---

**Proofio** - Entwickelt mit ❤️ für besseres Review-Management

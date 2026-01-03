# Proofio - Features & Limits Übersicht

Diese Dokumentation listet alle Features, Limits und Unterschiede zwischen den verschiedenen Plänen auf.

## 📋 Pläne

- **STARTER** (Free) - Kostenloser Plan
- **GROWTH** - €29/Monat
- **SCALE** - €99/Monat

---

## 🔢 Limits pro Plan

### STARTER (Free)

- **Projekte**: 1
- **Sources**: 2
- **Reviews pro Monat**: 500
- **API Requests**: 1.000

### GROWTH

- **Projekte**: 5
- **Sources**: 20
- **Reviews pro Monat**: 10.000
- **API Requests**: 50.000

### SCALE

- **Projekte**: Unbegrenzt (Infinity)
- **Sources**: Unbegrenzt (Infinity)
- **Reviews pro Monat**: 100.000
- **API Requests**: Unbegrenzt (Infinity)

---

## ✨ Features nach Plan

### 📊 Dashboard & Analytics

#### STARTER (Free)

- ✅ Dashboard mit Übersicht
- ✅ Review-Liste anzeigen
- ✅ Filterung nach Rating, Sentiment, Datum
- ✅ Sortierung (neueste, älteste, höchste, niedrigste)
- ✅ Suche in Reviews
- ✅ Aggregationen (Rating-Verteilung, Sentiment-Verteilung)
- ✅ Trends & Statistiken
- ✅ Insights-Seite mit Charts
- ✅ Zeitfilter (7d, 30d, 90d, alle)
- ✅ Source-Breakdown
- ✅ Review-Volumen-Analyse
- ✅ Top Topics
- ✅ Key Takeaways
- ✅ Recent Changes
- ❌ **AI Summaries** (geblurrt, nicht verfügbar)
- ❌ **AI Key Insights** (geblurrt, nicht verfügbar)
- ❌ **AI Trends & Signals** (geblurrt, nicht verfügbar)
- ❌ **AI Topics** (geblurrt, nicht verfügbar)
- ✅ AdBlock-Widgets werden angezeigt

#### GROWTH & SCALE

- ✅ Alle Features von STARTER
- ✅ **AI Summaries** (vollständig verfügbar)
- ✅ **AI Key Insights** (vollständig verfügbar)
- ✅ **AI Trends & Signals** (vollständig verfügbar)
- ✅ **AI Topics** (vollständig verfügbar)
- ❌ Keine AdBlock-Widgets

---

### 📁 Projekte

#### STARTER (Free)

- ✅ 1 Projekt erstellen
- ✅ Projekt bearbeiten
- ✅ Projekt löschen
- ✅ Projekt-Details anzeigen
- ✅ Projekt-ID anzeigen & kopieren
- ✅ Projekt-Beschreibung
- ✅ API-Key generieren & anzeigen
- ❌ Limit-Reached Notification bei Versuch, mehr als 1 Projekt zu erstellen

#### GROWTH

- ✅ 5 Projekte erstellen
- ✅ Alle Features von STARTER
- ❌ Limit-Reached Notification bei Versuch, mehr als 5 Projekte zu erstellen

#### SCALE

- ✅ Unbegrenzte Projekte
- ✅ Alle Features von GROWTH

---

### 🔌 Sources (Review-Quellen)

#### STARTER (Free)

- ✅ 2 Sources pro Projekt (Limit definiert, aber aktuell nicht implementiert)
- ✅ Source hinzufügen (App Store, Google Play, Trustpilot, Google Reviews)
- ✅ Source bearbeiten
- ✅ Source löschen
- ✅ Source synchronisieren (manuell)
- ✅ Letzte Sync-Zeit anzeigen
- ✅ Source-Status (aktiv/inaktiv)
- ⚠️ **Hinweis:** Source-Limit-Check ist aktuell nicht implementiert (nur in PLAN_LIMITS definiert)

#### GROWTH

- ✅ 20 Sources pro Projekt (Limit definiert, aber aktuell nicht implementiert)
- ✅ Alle Features von STARTER

#### SCALE

- ✅ Unbegrenzte Sources
- ✅ Alle Features von GROWTH

---

### 🤖 AI Features

#### STARTER (Free)

- ❌ **AI Summaries** - Nicht verfügbar
  - API blockiert mit 403 Error
  - UI zeigt geblurrten Content mit Upgrade-CTA
  - Cron Job überspringt STARTER-Projekte
  - Test-Endpunkt blockiert STARTER-User
- ❌ **AI Key Insights** - Nicht verfügbar
- ❌ **AI Trends & Signals** - Nicht verfügbar
- ❌ **AI Topics** - Nicht verfügbar

#### GROWTH & SCALE

- ✅ **AI Summaries** - Vollständig verfügbar
  - Automatische tägliche Generierung (Cron Job)
  - Manuelle Generierung über Test-Endpunkt
  - Anzeige in Insights-Seite
  - Caching in Firestore
  - Regenerierung nur bei neuen Reviews
- ✅ **AI Key Insights** - Vollständig verfügbar
- ✅ **AI Trends & Signals** - Vollständig verfügbar
- ✅ **AI Topics** - Vollständig verfügbar

**Technische Details:**

- Model: `gpt-4.1-nano-2025-04-14`
- Batch-Job: Täglich um 9 Uhr (kombiniert mit Review Sync)
- Review-Filter: Letzte 30 Tage, max. 100 Reviews
- Sprache: Englisch

---

### 📧 Notifications

#### Alle Pläne (STARTER, GROWTH, SCALE)

- ✅ **In-App Notifications** - Vollständig verfügbar
  - NEW_REVIEW
  - SYNC_COMPLETE
  - SYNC_ERROR
  - LIMIT_REACHED
  - PROJECT_CREATED
  - SOURCE_ADDED
  - TEAM_INVITATION
- ✅ **Email Notifications** - Vollständig verfügbar
  - Konfigurierbar in Settings
  - New Reviews (optional)
  - Negative Reviews (optional)
  - Sync Complete (immer)
  - Sync Error (immer)
  - Weekly Report (optional)
- ✅ **Weekly Reports** - Vollständig verfügbar
  - Automatische Generierung jeden Montag
  - Email-Versand (wenn aktiviert in Settings)
  - Enthält: Review-Statistiken, Trends, Rating-Verteilung
  - Verfügbar für alle Pläne (keine Plan-Prüfung)

**Email-Service:**

- Provider: Resend
- From: `Proofio Updates <noreply@updates.proofio.app>`
- Templates: Professionell gestaltet mit Logo & Favicon

---

### 👥 Team Features

#### STARTER (Free)

- ❌ **Team Members** - Nicht verfügbar
  - Team-Tab in Settings ist ausgeblendet
  - Keine Einladungen möglich
  - Keine Rollen-Verwaltung

#### GROWTH & SCALE

- ✅ **Team Members** - Vollständig verfügbar
  - Team-Mitglieder einladen
  - Rollen verwalten (Admin, Member)
  - Projekt-spezifische Zugriffe
  - Team-Mitglieder entfernen
  - Einladungen verwalten

**Rollen:**

- **Owner**: Vollzugriff auf Organisation
- **Admin**: Kann Team-Mitglieder verwalten
- **Member**: Eingeschränkter Zugriff (nur zugewiesene Projekte)

---

### 🎨 Widgets

#### Alle Pläne (STARTER, GROWTH, SCALE)

- ✅ **Widgets** - Vollständig verfügbar
  - Widget erstellen
  - Widget bearbeiten
  - Widget löschen
  - Widget-Typen:
    - Stars Badge
    - Reviews Grid
    - Reviews Carousel
    - Testimonials
    - Trust Badge
  - Widget-Export (HTML, WordPress, Shopify, Next.js, React, Webflow, Wix)
  - Widget-Konfiguration (Filter, Style, Layout)
  - Widget-Vorschau
  - Widget-Embed-Code generieren

**Hinweis:** Keine Plan-Prüfung für Widgets - alle User können Widgets erstellen und nutzen.

---

### 🔌 API Features

#### STARTER (Free)

- ✅ Public API verfügbar
- ✅ API-Key generieren
- ✅ 1.000 API Requests pro Monat (Rate Limiting)
- ❌ Limit-Reached bei Überschreitung (429 Error)
- ✅ Logo wird in API-Responses angezeigt (`showLogo: true`)

#### GROWTH

- ✅ Public API verfügbar
- ✅ 50.000 API Requests pro Monat (Rate Limiting)
- ❌ Kein Logo in API-Responses (`showLogo: false`)

#### SCALE

- ✅ Public API verfügbar
- ✅ 100.000 API Requests pro Monat (Rate Limiting)
- ❌ Kein Logo in API-Responses (`showLogo: false`)

**API Endpoints:**

- `/api/v1/public/reviews` - Reviews abrufen
- `/api/v1/public/aggregations` - Aggregationen abrufen
- `/api/v1/public/clusters` - Review-Cluster abrufen
- Rate Limiting: Implementiert in `lib/middleware/rate-limit.ts`
- Rate Limit Headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

**Hinweis:** Die API Rate Limits in `lib/middleware/rate-limit.ts` unterscheiden sich leicht von `PLAN_LIMITS`:

- SCALE: 100.000 Requests/Monat (nicht unbegrenzt wie in PLAN_LIMITS)

### ⚙️ Settings

#### Alle Pläne (STARTER, GROWTH, SCALE)

- ✅ **Profile Settings**
  - Name ändern
  - Telefonnummer
  - Adresse (Straße, Stadt, PLZ)
  - Region auswählen
  - Sprache (DE/EN)
- ✅ **Organization Settings** (nur Owner)
  - Organisationsname
  - Adresse
  - Land
  - Website
  - Tax ID / VAT ID
- ✅ **Notification Preferences**
  - Email bei neuen Reviews
  - Email bei negativen Reviews
  - Weekly Report aktivieren/deaktivieren
- ✅ **Security Settings**
  - Passwort ändern
  - 2FA aktivieren/deaktivieren
- ✅ **Billing Settings**
  - Aktuellen Plan anzeigen
  - Plan upgraden/downgraden
  - Stripe Portal öffnen (für Paid-Pläne)
  - Abrechnungsintervall (monatlich/jährlich)

#### GROWTH & SCALE (zusätzlich)

- ✅ **Team Settings**
  - Team-Mitglieder verwalten
  - Einladungen senden
  - Rollen zuweisen
  - Projekt-Zugriffe verwalten

---

### 🎯 UI Features & Restrictions

#### STARTER (Free)

- ✅ Vollständiger Dashboard-Zugriff
- ✅ Alle Seiten verfügbar (außer Team-Management)
- ❌ **AI Summaries Section** - Geblurrt mit Upgrade-CTA
  - Blur-Effekt auf Content
  - "Upgrade to unlock AI Insights" Button
  - Link zu Billing-Seite
- ✅ Upgrade-CTA in Sidebar
- ✅ AdBlock-Widgets auf Reviews- und Insights-Seite

#### GROWTH & SCALE

- ✅ Vollständiger Dashboard-Zugriff
- ✅ Alle Seiten verfügbar
- ✅ AI Summaries vollständig sichtbar
- ❌ Keine AdBlock-Widgets
- ❌ Keine Upgrade-CTAs

---

### 🔐 Admin Features

#### Alle Pläne

- ✅ **Admin Panel** - Nur für User mit `admin: true` Flag
  - Notification Testing (In-App & Email)
  - API Testing mit Templates
  - Projekt-Auswahl für API-Tests
  - Realistische Mock-Daten für Tests

**Hinweis:** Admin-Flag ist unabhängig vom Plan - kann manuell in Firestore gesetzt werden.

---

### 📊 Reporting & Analytics

#### Alle Pläne (STARTER, GROWTH, SCALE)

- ✅ **Weekly Reports** - Vollständig verfügbar
  - Automatische Generierung jeden Montag
  - Email-Versand (wenn aktiviert)
  - Enthält:
    - Review-Statistiken der letzten 7 Tage
    - Vergleich zur Vorwoche
    - Rating-Verteilung
    - Sentiment-Verteilung
    - Trends (Rating-Änderung, Review-Anzahl-Änderung)
    - Pro Projekt
  - Professionelles Email-Template

**Hinweis:** Weekly Reports sind für alle Pläne verfügbar - keine Plan-Prüfung.

---

### 🚫 Limit-Erreichung

#### Alle Pläne

Wenn ein Limit erreicht wird:

- ❌ **Projekt-Limit**: Fehler beim Erstellen (403), Notification `LIMIT_REACHED`
- ⚠️ **Source-Limit**: Definiert in PLAN_LIMITS, aber aktuell **nicht implementiert** (keine Prüfung beim Erstellen)
- ⚠️ **Review-Limit**: Definiert in PLAN_LIMITS, aber aktuell **nicht implementiert** (keine harte Blockade)
- ❌ **API-Limit**: Rate Limiting greift (429 Error), Headers zeigen Remaining/Reset

**Notifications:**

- `LIMIT_REACHED` wird automatisch erstellt (nur für Projekte)
- Enthält: Limit-Typ, aktueller Count, Upgrade-Empfehlung

---

## 📝 Zusammenfassung

### Was Free-User (STARTER) können:

- ✅ 1 Projekt, 2 Sources, 500 Reviews/Monat, 1.000 API Requests
- ✅ Dashboard, Analytics, Insights (ohne AI)
- ✅ Reviews anzeigen, filtern, suchen
- ✅ Sources synchronisieren
- ✅ Widgets erstellen
- ✅ Notifications (In-App & Email)
- ✅ Weekly Reports
- ✅ Settings (Profile, Organization, Notifications, Security, Billing)
- ✅ Public API (mit Logo in Responses)
- ❌ AI Features (geblurrt)
- ❌ Team Management
- ✅ Werbung

### Was Paid-User (GROWTH & SCALE) zusätzlich können:

- ✅ Mehr Limits (5/∞ Projekte, 20/∞ Sources, 10k/100k Reviews, 50k/100k API Requests)
- ✅ **AI Summaries** (vollständig)
- ✅ **Team Management**
- ✅ Public API (ohne Logo in Responses)
- ❌ Werbefrei

### Was nur SCALE-User können:

- ✅ Unbegrenzte Projekte
- ✅ Unbegrenzte Sources
- ⚠️ API Requests: 100.000/Monat (nicht unbegrenzt, siehe Rate Limiting)

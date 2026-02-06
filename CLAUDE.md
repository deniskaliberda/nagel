# Nagel Paul – E-Commerce Shop (Phase 1)

## Projekt-Überblick

Wir bauen einen modernen E-Commerce-Shop für **Nagel Paul (JPS GmbH & Co. KG)**, einen spezialisierten Fachhändler für Druckluft- und Akku-Nagler, Befestigungstechnik und das innovative LignoLoc-Holznagelsystem. Der Shop ersetzt einen veralteten Shopware-Shop.

### Geschäftskontext
- **Branche:** Befestigungstechnik (Nagler, Tacker, Nägel, Klammern, Schrauben)
- **Zielgruppe:** Handwerker (Zimmerer, Dachdecker, Trockenbauer, Schreiner), Baufirmen, ambitionierte Heimwerker
- **Besonderheit:** Einer der wenigen deutschen Händler mit dem kompletten LignoLoc-Holznagel-Sortiment (nachhaltige Holznägel statt Stahl)
- **Marken:** HiKOKI (Metabo HPT), Paslode, Prebena, BeA, Haubold, Senco, Fasco, Beck (LignoLoc)
- **Standort:** München-Umgebung, Versand deutschlandweit
- **Kunden:** ~10.000+, davon viele B2B-Stammkunden

### Das Kernproblem das wir lösen
Handwerker denken in **Anwendungen** ("Ich muss Dachlatten befestigen"), nicht in Produktnummern ("CN 16 Grad konisch verzinkt"). Der alte Shop zwingt Kunden, die exakte Produktbezeichnung zu kennen. Der neue Shop muss **beide Wege** zum Produkt bieten: klassisch nach Produktkategorie UND nach Anwendung/Gewerk.

## Tech Stack

### Backend
- **Medusa.js v2** – Headless E-Commerce Backend
- **PostgreSQL** – Datenbank (via Railway oder Supabase)
- **Node.js 20+** – Runtime

### Frontend
- **Next.js 14+** – React Framework mit App Router
- **TypeScript** – Durchgehend typisiert
- **Tailwind CSS** – Utility-First Styling
- **Meilisearch** – Produktsuche mit Autocomplete und Tippfehlertoleranz

### Infrastruktur
- **Vercel** – Hosting & Deployment
- **Stripe** – Zahlungsabwicklung (Kreditkarte, PayPal, SEPA, Klarna)
- **Resend** – Transaktionale E-Mails
- **Cloudinary** oder **Vercel Blob** – Bildverwaltung

## Monorepo-Struktur

```
nagel-paul/
├── CLAUDE.md                    # Diese Datei
├── package.json                 # Workspace-Root
├── turbo.json                   # Turborepo Config
│
├── apps/
│   ├── storefront/              # Next.js 14+ Frontend
│   │   ├── app/                 # App Router
│   │   │   ├── (shop)/          # Shop-Routen-Gruppe
│   │   │   │   ├── page.tsx                    # Startseite
│   │   │   │   ├── produkte/                   # /produkte – Alle Produkte
│   │   │   │   │   ├── [category]/             # /produkte/nagler
│   │   │   │   │   │   └── [product]/          # /produkte/nagler/hikoki-nr90gc1
│   │   │   │   ├── anwendungen/                # /anwendungen – Nach Gewerk
│   │   │   │   │   ├── [gewerk]/               # /anwendungen/zimmerer
│   │   │   │   │   │   └── [anwendung]/        # /anwendungen/zimmerer/dachlatten
│   │   │   │   ├── marken/                     # /marken – Markenübersicht
│   │   │   │   │   └── [brand]/                # /marken/hikoki
│   │   │   │   ├── lignoloc/                   # /lignoloc – LignoLoc Themenwelt
│   │   │   │   ├── warenkorb/                  # /warenkorb
│   │   │   │   ├── checkout/                   # /checkout (Multi-Step)
│   │   │   │   └── suche/                      # /suche?q=...
│   │   │   ├── layout.tsx
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── ui/              # Basis-UI (Button, Input, Card, Badge...)
│   │   │   ├── shop/            # Shop-spezifisch (ProductCard, FilterBar...)
│   │   │   ├── navigation/      # Header, MegaMenu, MobileNav, Breadcrumbs
│   │   │   ├── checkout/        # CheckoutSteps, PaymentForm...
│   │   │   └── layout/          # Footer, Container, Section...
│   │   ├── lib/
│   │   │   ├── medusa.ts        # Medusa SDK Client
│   │   │   ├── meilisearch.ts   # Search Client
│   │   │   ├── utils.ts         # Hilfsfunktionen
│   │   │   └── types.ts         # Shared Types
│   │   ├── hooks/               # Custom React Hooks
│   │   ├── public/              # Statische Assets
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   └── tsconfig.json
│   │
│   └── backend/                 # Medusa v2 Backend
│       ├── src/
│       │   ├── modules/         # Custom Medusa Modules
│       │   │   ├── compatibility/    # Geräte-Nagel-Kompatibilität
│       │   │   └── application/      # Anwendungsbereiche/Gewerke
│       │   ├── api/             # Custom API Routes
│       │   ├── subscribers/     # Event Subscribers
│       │   ├── workflows/       # Medusa Workflows
│       │   └── scripts/         # Seed/Migration Scripts
│       │       └── seed-products.ts  # Produktimport aus Shopware
│       ├── medusa-config.ts
│       └── tsconfig.json
│
├── packages/
│   ├── shared/                  # Geteilte Types & Utils
│   │   ├── types/
│   │   │   ├── product.ts       # Produkttypen
│   │   │   ├── compatibility.ts # Kompatibilitätstypen
│   │   │   └── application.ts   # Anwendungsbereich-Typen
│   │   └── utils/
│   └── email-templates/         # React Email Templates
│       ├── order-confirmation.tsx
│       ├── shipping-notification.tsx
│       └── welcome.tsx
│
├── data/
│   ├── products/                # Exportierte Shopware-Daten (CSV/JSON)
│   ├── compatibility-matrix.json # Welcher Nagel passt in welchen Nagler
│   ├── applications.json        # Gewerk → Anwendung → Produkt Mapping
│   └── seo-metadata.json        # Title/Description pro Seite
│
└── scripts/
    ├── import-products.ts       # Shopware → Medusa Migration
    ├── generate-seo.ts          # SEO-Metadaten generieren
    └── seed-compatibility.ts    # Kompatibilitätsdaten importieren
```

## Datenmodell

### Produkt-Hierarchie
```
Produktkategorien (klassisch):
├── Nagler & Tacker
│   ├── Druckluft-Nagler
│   ├── Akku-Nagler
│   ├── Gas-Nagler
│   └── Tacker (Druckluft / Akku)
├── Befestigungsmittel
│   ├── Streifennägel
│   ├── Coilnägel
│   ├── Brads & Pins
│   ├── Klammern
│   ├── LignoLoc Holznägel
│   └── Schrauben
├── Zubehör
│   ├── Kompressoren
│   ├── Schläuche & Kupplungen
│   ├── Akkus & Ladegeräte
│   └── Ersatzteile
└── Arbeitsschutz
    ├── Gehörschutz
    └── Schutzbrillen

Anwendungsbereiche (neu – das ist unser USP):
├── Zimmerer
│   ├── Dachlatten befestigen → [passende Nagler + Nägel]
│   ├── Schalung nageln → [passende Nagler + Nägel]
│   ├── Holzrahmenbau → [passende Nagler + Nägel + LignoLoc Option]
│   └── Balkenverbindungen → [passende Produkte]
├── Dachdecker
│   ├── Dachpappe befestigen → [Tacker + Klammern]
│   ├── Dämmplatten nageln → [Nagler + Breitkopfstifte + LignoLoc]
│   └── Lattung → [Coilnagler + Nägel]
├── Trockenbauer
│   ├── Unterkonstruktion → [Nagler + Nägel]
│   ├── Dämmung befestigen → [Tacker + Klammern]
│   └── Profile verbinden → [Schrauben]
├── Schreiner / Tischler
│   ├── Möbelbau → [Brads + Pins, Tacker]
│   ├── Leisten & Zierprofile → [Micro-Pinner]
│   └── Plattenwerkstoffe → [Klammern, Brads]
├── Bodenleger
│   ├── Parkett → [Parkettklammern + Tacker]
│   └── Sockelleisten → [Brads]
└── Heimwerker
    ├── Allround-Befestigung → [Kombi-Nagler Empfehlung]
    └── Holzprojekte → [Einsteigergeräte]
```

### Kompatibilitätsmatrix
Jedes Gerät hat eine Liste kompatibler Befestigungsmittel. Diese Relation ist KRITISCH für die Beratungsfunktion.

```typescript
interface Compatibility {
  device: Product;           // z.B. HiKOKI NR1890DBCL
  fasteners: {
    product: Product;        // z.B. Streifennägel 50-90mm
    isRecommended: boolean;  // Empfohlen oder nur kompatibel
    notes?: string;          // z.B. "Nur mit Adapter"
  }[];
}

interface ApplicationMapping {
  gewerk: string;            // z.B. "Zimmerer"
  anwendung: string;         // z.B. "Dachlatten befestigen"
  description: string;       // Fachliche Erklärung
  recommendedProducts: {
    category: 'device' | 'fastener' | 'accessory';
    product: Product;
    reason: string;          // Warum dieses Produkt
    lignolocAlternative?: Product; // Nachhaltige Alternative
  }[];
}
```

## Design-Richtlinien

### Farbpalette
```css
/* Primär – Industriell / Professionell */
--primary: #1a1a2e;          /* Dunkles Navy – Header, Akzente */
--primary-light: #16213e;
--accent: #e94560;           /* Rot – CTAs, Highlights, Angebote */
--accent-hover: #c81e45;

/* Sekundär – Vertrauen */
--success: #0f9d58;          /* Grün – Verfügbar, LignoLoc Badge */
--warning: #f4b400;          /* Gelb – Wenige auf Lager */
--info: #4285f4;             /* Blau – Info, Links */

/* Neutral */
--bg: #ffffff;
--bg-alt: #f5f5f7;           /* Leichtes Grau – Sektionshintergrund */
--text: #1a1a1a;
--text-muted: #6b7280;
--border: #e5e7eb;

/* LignoLoc Spezial */
--lignoloc: #2d5016;         /* Nachhaltiges Grün */
--lignoloc-light: #ecfccb;   /* Hintergrund für LignoLoc-Badges */
```

### Typografie
- **Headlines:** Inter oder DM Sans (modern, gut lesbar)
- **Body:** Inter (sauber, professionell)
- **Monospace:** JetBrains Mono (für technische Daten, Artikelnummern)

### Komponentenstil
- Klare, aufgeräumte Optik – kein visueller Lärm
- Großzügiger Weißraum
- Produktbilder prominent (min. 400x400px)
- Technische Daten in übersichtlichen Tabellen
- LignoLoc-Produkte immer mit grünem Badge kennzeichnen
- Trust-Elemente: "Seit über 40 Jahren", Markenlogos, Lieferversprechen
- Mobile-First: 60%+ der Handwerker surfen am Handy

## SEO-Anforderungen

### Technisch
- Server-Side Rendering (SSR) oder Static Generation (SSG) für alle Produktseiten
- `generateMetadata()` in jeder page.tsx
- JSON-LD Schema.org auf JEDER Seite:
  - Startseite: `Organization` + `LocalBusiness` + `WebSite` (mit `SearchAction`)
  - Produktseiten: `Product` (mit `offers`, `brand`, `image`, `aggregateRating`)
  - Kategorieseiten: `CollectionPage` + `BreadcrumbList`
  - Anwendungsseiten: `HowTo` oder `Article` + `BreadcrumbList`
- Automatische XML-Sitemap (`/sitemap.xml`)
- `robots.txt` korrekt konfiguriert
- Canonical URLs auf jeder Seite
- Open Graph + Twitter Card Meta-Tags
- `<link rel="alternate" hreflang="de" />`

### URL-Struktur
```
/                                    → Startseite
/produkte                            → Produktübersicht
/produkte/nagler                     → Kategorie: Nagler
/produkte/nagler/hikoki-nr1890dbcl   → Produktdetail
/anwendungen                         → Anwendungsübersicht
/anwendungen/zimmerer                → Gewerk: Zimmerer
/anwendungen/zimmerer/dachlatten     → Anwendung mit Empfehlungen
/marken                              → Markenübersicht
/marken/hikoki                       → Alle HiKOKI-Produkte
/lignoloc                            → LignoLoc Themenwelt
/warenkorb                           → Warenkorb
/checkout                            → Checkout
/suche?q=dachlatten+nagler           → Suchergebnisse
```

### Content pro Produktseite (EINZIGARTIG – kein Duplicate Content!)
Jede Produktseite MUSS enthalten:
1. Einzigartiger Beschreibungstext (min. 150 Wörter)
2. Technische Daten als strukturierte Tabelle
3. Kompatibilitätshinweise ("Passende Nägel für diesen Nagler")
4. Anwendungsempfehlung ("Ideal für: Dachlatten, Schalung, Holzrahmenbau")
5. LignoLoc-Alternative falls vorhanden ("Nachhaltige Option: LignoLoc Holznägel")

## Wichtige Seiten im Detail

### 1. Startseite
- Hero: Claim + CTA ("Finden Sie das richtige Werkzeug" → Konfigurator oder Suche)
- Schnelleinstieg-Grid: Die 6 Gewerke als klickbare Karten
- Bestseller-Karussell (Top 8 Produkte)
- LignoLoc-Feature-Sektion (Nachhaltigkeit hervorheben)
- Marken-Logobar (HiKOKI, Paslode, Prebena, BeA, etc.)
- Trust-Bar: "40+ Jahre Erfahrung" | "Fachberatung" | "Schneller Versand"

### 2. Mega-Menü / Navigation
Zwei Tabs im Hauptmenü:

**Tab "Produkte":**
```
Nagler & Tacker          Befestigungsmittel       Zubehör
├── Druckluft-Nagler     ├── Streifennägel        ├── Kompressoren
├── Akku-Nagler          ├── Coilnägel            ├── Schläuche
├── Gas-Nagler           ├── Brads & Pins         ├── Akkus
└── Tacker               ├── Klammern             └── Ersatzteile
                         ├── LignoLoc
                         └── Schrauben
```

**Tab "Nach Anwendung":**
```
Zimmerer          Dachdecker        Trockenbauer      Schreiner       Bodenleger
├── Dachlatten    ├── Dachpappe     ├── UK-Montage    ├── Möbelbau    ├── Parkett
├── Schalung      ├── Dämmplatten   ├── Dämmung       ├── Leisten     └── Sockelleisten
├── Holzrahmen    └── Lattung       └── Profile       └── Platten
└── Balken
```

### 3. Produktdetailseite
Layout:
```
[Bildergalerie]              [Produktinfo]
                             - Name, Marke, Artikelnr.
                             - Preis (UVP durchgestrichen wenn günstiger)
                             - Verfügbarkeit
                             - Menge + "In den Warenkorb"
                             - LignoLoc-Badge (falls zutreffend)

[Tab: Beschreibung]  [Tab: Technische Daten]  [Tab: Kompatibilität]  [Tab: Downloads]

[Sektion: "Passend dazu" – kompatible Nägel/Geräte]
[Sektion: "Für diese Anwendungen geeignet" – verlinkte Anwendungsbereiche]
```

### 4. Anwendungsseite (z.B. /anwendungen/zimmerer/dachlatten)
- Fachlicher Einleitungstext (was ist zu beachten, welche Normen gelten)
- Empfohlene Kombination: Gerät + Befestigungsmittel + Zubehör
- Optional: LignoLoc-Alternative hervorgehoben
- Vergleichstabelle der Optionen
- "Unsicher? Kontaktieren Sie uns" CTA

### 5. LignoLoc Themenwelt (/lignoloc)
- Was sind Holznägel? Einfache Erklärung
- Vorteile: CO2-Bilanz, keine Wärmebrücken, recyclebar, Brandverhalten
- Auszeichnungen und Zertifizierungen
- Referenzprojekte (BUGA-Pavillon etc.)
- Alle LignoLoc-Produkte als Grid
- Kompatible Geräte
- FAQ

### 6. Warenkorb & Checkout
- Slide-Over Warenkorb (öffnet von rechts)
- Checkout: Multi-Step (Adresse → Versand → Zahlung → Bestätigung)
- Versandoptionen: Standard (DHL), Express, Palettenversand (ab X kg), Abholung
- Zahlungsarten: Kreditkarte, PayPal, SEPA-Lastschrift, Rechnung (Klarna)
- Bestellübersicht mit allen Details

## Code-Konventionen

### TypeScript
- Strict mode aktiviert
- Keine `any` Types – immer explizit typisieren
- Interfaces für alle Datenstrukturen in `packages/shared/types/`
- Zod für Runtime-Validierung von API-Responses

### React / Next.js
- Server Components als Standard, Client Components nur wo nötig (interaktive UI)
- `"use client"` nur in Komponenten die State, Effects oder Browser-APIs nutzen
- Fetching in Server Components mit Medusa SDK
- Loading States mit `loading.tsx` und Skeleton-Komponenten
- Error Boundaries mit `error.tsx`
- Dynamische Imports für schwere Komponenten (z.B. Bildergalerie)

### Styling
- Tailwind CSS mit konsistenten Design-Tokens
- Keine Inline-Styles, kein CSS-in-JS
- Responsive: Mobile-First (`sm:`, `md:`, `lg:`, `xl:`)
- Dark Mode: Nicht in Phase 1 (later)
- Animations: Sparsam, `framer-motion` nur wo nötig

### Datei-Benennung
- Komponenten: PascalCase (`ProductCard.tsx`)
- Hooks: camelCase mit `use` Prefix (`useCart.ts`)
- Utils: camelCase (`formatPrice.ts`)
- Types: PascalCase (`Product.ts`)
- Konstanten: UPPER_SNAKE_CASE in eigenen Dateien

## Befehle

```bash
# Development
pnpm dev                    # Startet Frontend + Backend
pnpm dev:storefront         # Nur Frontend
pnpm dev:backend            # Nur Medusa Backend

# Build & Deploy
pnpm build                  # Baut alles
pnpm lint                   # ESLint + TypeScript Check
pnpm type-check             # Nur TypeScript

# Datenbank & Migration
pnpm db:migrate             # Medusa Migrations ausführen
pnpm db:seed                # Testdaten laden
pnpm import:products        # Shopware-Daten importieren
pnpm import:compatibility   # Kompatibilitätsdaten laden
```

## Qualitätskriterien

- **Lighthouse Score:** >90 auf allen Seiten (Performance, Accessibility, SEO, Best Practices)
- **Core Web Vitals:** LCP <2.5s, FID <100ms, CLS <0.1
- **Responsive:** Perfekt auf 320px bis 2560px
- **TypeScript:** Keine Errors, Strict Mode
- **Accessibility:** WCAG 2.1 AA Konformität
- **SEO:** Jede Seite hat unique Title, Description, Schema.org, OG Tags

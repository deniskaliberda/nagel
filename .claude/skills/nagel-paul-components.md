# Nagel Paul – Component Library

## Basis-Komponenten

### Button
```tsx
// Varianten: primary (rot), secondary (outline), ghost, lignoloc (grün)
<Button variant="primary" size="lg">In den Warenkorb</Button>
<Button variant="lignoloc" size="md">Nachhaltige Alternative ansehen</Button>
```

### ProductCard
```tsx
<ProductCard
  product={product}
  showCompatibility={true}    // Zeigt "Passend für: Nagler XY"
  showLignolocBadge={true}    // LignoLoc Badge wenn zutreffend
  showQuickAdd={true}         // Schnell-Hinzufügen Button
/>
```

### CompatibilityBadge
```tsx
// Zeigt an, ob Nagel in Nagler passt
<CompatibilityBadge
  status="compatible"          // compatible | recommended | incompatible
  deviceName="HiKOKI NR1890"
/>
```

### ApplicationCard
```tsx
// Klickbare Karte für Anwendungsbereiche
<ApplicationCard
  gewerk="Zimmerer"
  anwendung="Dachlatten befestigen"
  icon={<HammerIcon />}
  productCount={12}
/>
```

### PriceDisplay
```tsx
// Zeigt Preis mit optionalem UVP-Durchstreichpreis
<PriceDisplay
  price={89.90}
  compareAtPrice={109.00}     // UVP durchgestrichen
  unit="Stück"                // oder "pro 1000 Stk.", "pro Rolle"
  showMwst={true}             // "inkl. 19% MwSt."
/>
```

### TechSpecsTable
```tsx
// Strukturierte technische Daten
<TechSpecsTable specs={[
  { label: "Magazinwinkel", value: "21°" },
  { label: "Nagellänge", value: "50-90mm" },
  { label: "Nageldicke", value: "2,8-3,1mm" },
  { label: "Magazinkapazität", value: "60 Nägel" },
  { label: "Gewicht", value: "3,2 kg" },
  { label: "Antrieb", value: "Druckluft 5-8 bar" },
]} />
```

### Navigation
```
MegaMenu:
├── Tab "Produkte" → Produktkategorien in Spalten
├── Tab "Anwendungen" → Gewerke in Spalten mit Anwendungen
├── "Marken" → Dropdown mit Logos
├── "LignoLoc" → Direktlink zur Themenwelt
└── Suche → Expandable Search mit Autocomplete

Mobile:
├── Hamburger → Drawer von links
├── Suche → Eigener Button in Header
├── Warenkorb → Icon mit Badge (Anzahl)
└── Account → Falls eingeloggt
```

## Layout-Patterns

### Kategorieseite
```
[Breadcrumb]
[H1: Kategoriename]
[Filter-Sidebar (Desktop) / Filter-Button (Mobile)]
[Sortierung: Relevanz | Preis aufsteigend | Preis absteigend | Beliebtheit | Neu]
[Produkt-Grid: 3 Spalten Desktop, 2 Tablet, 1 Mobile]
[Pagination oder Infinite Scroll]
```

### Produktseite
```
[Breadcrumb]
[2-Spalten-Layout Desktop]
  Links: Bildergalerie (Thumbnails + Zoom)
  Rechts:
    - Marke (verlinkt)
    - H1: Produktname
    - Bewertungs-Sterne (später)
    - Preis + MwSt-Hinweis
    - Verfügbarkeit (Grün/Gelb/Rot)
    - Menge-Selector + "In den Warenkorb"
    - Trust-Icons (Versand, Rückgabe, Fachberatung)
[Tabs: Beschreibung | Technische Daten | Kompatibilität | Downloads]
[Sektion: Passende Produkte]
[Sektion: Für diese Anwendungen]
```

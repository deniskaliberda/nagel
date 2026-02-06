import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { formatPrice } from "@/lib/utils";

type ProductPageProps = {
  params: Promise<{ category: string; product: string }>;
};

/* ------------------------------------------------------------------ *
 * Sample product data (HiKOKI NR1890DBCL as default showcase)
 * ------------------------------------------------------------------ */

const CATEGORY_NAMES: Record<string, string> = {
  "druckluft-nagler": "Druckluft-Nagler",
  "akku-nagler": "Akku-Nagler",
  "gas-nagler": "Gas-Nagler",
  tacker: "Tacker",
  streifennaegel: "Streifennägel",
  coilnaegel: "Coilnägel",
  "brads-pins": "Brads & Pins",
  klammern: "Klammern",
  lignoloc: "LignoLoc Holznägel",
  schrauben: "Schrauben",
  kompressoren: "Kompressoren",
  zubehoer: "Zubehör & Ersatzteile",
};

interface SampleProduct {
  slug: string;
  categorySlug: string;
  title: string;
  brand: string;
  brandSlug: string;
  articleNumber: string;
  price: number;
  compareAtPrice?: number;
  isLignoLoc: boolean;
  availability: "in_stock" | "low_stock" | "out_of_stock";
  shortDescription: string;
  description: string;
  techSpecs: Array<{ label: string; value: string }>;
  compatibleProducts: Array<{
    slug: string;
    categorySlug: string;
    title: string;
    brand: string;
    price: number;
    isLignoLoc: boolean;
  }>;
  applications: Array<{
    gewerk: string;
    gewerkLabel: string;
    anwendung: string;
    anwendungLabel: string;
  }>;
  downloads: Array<{ name: string; type: string; size: string }>;
}

const SAMPLE_PRODUCTS: Record<string, SampleProduct> = {
  "hikoki-nr1890dbcl": {
    slug: "hikoki-nr1890dbcl",
    categorySlug: "akku-nagler",
    title: "HiKOKI NR1890DBCL Akku-Streifennagler 18V 5,0 Ah",
    brand: "HiKOKI",
    brandSlug: "hikoki",
    articleNumber: "NR1890DBCL",
    price: 59900,
    compareAtPrice: 69900,
    isLignoLoc: false,
    availability: "in_stock",
    shortDescription:
      "Der HiKOKI NR1890DBCL ist ein leistungsstarker 18V Akku-Streifennagler für den professionellen Einsatz im Holzbau. Kabellos und kompressorlos nageln mit der Kraft eines Druckluft-Naglers.",
    description: `Der HiKOKI NR1890DBCL ist der meistverkaufte Akku-Streifennagler in Deutschland und setzt Maßstäbe in Sachen Leistung und Zuverlässigkeit. Mit seinem bürstenlosen 18V-Motor treibt er 50 bis 90 mm lange Streifennägel (21° Magazinierung) zuverlässig in Weich- und Hartholz ein – ganz ohne Kompressor und Schlauch.

Das Gerät überzeugt durch seine Eintreibtiefenverstellung, die per Drehrad stufenlos einstellbar ist. Der Einzelschuss- und Kontaktauslösungsmodus ermöglicht sowohl präzises Einzelnageln als auch schnelles Seriennageln. Das Magazin fasst bis zu 64 Nägel und lässt sich werkzeuglos nachladen.

Dank des geringen Gewichts von nur 3,7 kg (mit 5,0-Ah-Akku) und des ergonomischen Griffdesigns ermüdet der Anwender auch bei langen Arbeitstagen nicht. Der Nagler wird im praktischen Transportkoffer mit zwei 5,0-Ah-Akkus und Ladegerät geliefert.

Ideal geeignet für Zimmerer, Dachdecker und Holzbauer, die flexibel ohne Druckluft arbeiten möchten. Die Eintreibenergie reicht aus, um Dachlatten, Schalungen und Holzrahmenwände professionell zu nageln.`,
    techSpecs: [
      { label: "Antrieb", value: "18V Li-Ion (bürstenlos)" },
      { label: "Nagellänge", value: "50 – 90 mm" },
      { label: "Nageltyp", value: "21° Kunststoff-Streifennägel" },
      { label: "Magazinkapazität", value: "64 Nägel" },
      { label: "Eintreibtiefe", value: "Stufenlos verstellbar" },
      { label: "Auslösung", value: "Einzelschuss / Kontaktauslösung" },
      { label: "Gewicht (mit Akku)", value: "3,7 kg" },
      { label: "Nageldurchmesser", value: "2,87 – 3,33 mm" },
      { label: "Betriebsdruck", value: "Nicht zutreffend (Akku)" },
      { label: "Schalldruckpegel", value: "92 dB(A)" },
      { label: "Lieferumfang", value: "2x 5,0 Ah Akku, Ladegerät, Koffer" },
      { label: "EAN", value: "4966376326587" },
    ],
    compatibleProducts: [
      {
        slug: "prebena-rk28-80-nk",
        categorySlug: "streifennaegel",
        title: "Prebena Streifennägel RK 28/80 NK verzinkt",
        brand: "Prebena",
        price: 3490,
        isLignoLoc: false,
      },
      {
        slug: "prebena-rk28-65-bk",
        categorySlug: "streifennaegel",
        title: "Prebena Streifennägel RK 28/65 BK blank",
        brand: "Prebena",
        price: 2990,
        isLignoLoc: false,
      },
      {
        slug: "hikoki-streifennaegel-rk-21-75-nk",
        categorySlug: "streifennaegel",
        title: "HiKOKI Streifennägel 21° 75mm Ring verzinkt",
        brand: "HiKOKI",
        price: 3290,
        isLignoLoc: false,
      },
      {
        slug: "prebena-rk28-90-fvz",
        categorySlug: "streifennaegel",
        title: "Prebena Streifennägel RK 28/90 feuerverzinkt",
        brand: "Prebena",
        price: 4290,
        isLignoLoc: false,
      },
    ],
    applications: [
      {
        gewerk: "zimmerer",
        gewerkLabel: "Zimmerer",
        anwendung: "dachlatten",
        anwendungLabel: "Dachlatten befestigen",
      },
      {
        gewerk: "zimmerer",
        gewerkLabel: "Zimmerer",
        anwendung: "schalung",
        anwendungLabel: "Schalung nageln",
      },
      {
        gewerk: "zimmerer",
        gewerkLabel: "Zimmerer",
        anwendung: "holzrahmenbau",
        anwendungLabel: "Holzrahmenbau",
      },
      {
        gewerk: "dachdecker",
        gewerkLabel: "Dachdecker",
        anwendung: "lattung",
        anwendungLabel: "Lattung",
      },
    ],
    downloads: [
      { name: "Datenblatt NR1890DBCL", type: "PDF", size: "2,4 MB" },
      { name: "Bedienungsanleitung", type: "PDF", size: "5,1 MB" },
      { name: "EU-Konformitätserklärung", type: "PDF", size: "0,3 MB" },
    ],
  },
  "beck-fasco-f44-ac-lignoloc": {
    slug: "beck-fasco-f44-ac-lignoloc",
    categorySlug: "akku-nagler",
    title: "Beck FASCO F44 AC LignoLoc Holznagelgerät",
    brand: "Beck (LignoLoc)",
    brandSlug: "beck-lignoloc",
    articleNumber: "F44-AC-LL",
    price: 129900,
    isLignoLoc: true,
    availability: "in_stock",
    shortDescription:
      "Das weltweit erste Nagelgerät für Holznägel. Der Beck FASCO F44 AC treibt LignoLoc Holznägel aus verdichtetem Buchenholz ein – für 100 % nachhaltiges Befestigen ohne Stahl.",
    description: `Der Beck FASCO F44 AC ist das weltweit erste und einzige Nagelgerät, das speziell für die Verarbeitung von LignoLoc Holznägeln entwickelt wurde. Mit seinem leistungsstarken 18V-Akku-Antrieb treibt er Holznägel aus verdichtetem mitteleuropäischem Buchenholz in Holzwerkstoffe ein – ohne einen einzigen Stahlnagel.

Die Eintreibtechnologie wurde von Beck/FASCO in enger Zusammenarbeit mit dem Fraunhofer-Institut entwickelt. Die Holznägel werden durch eine spezielle Reibschweißtechnik beim Eintreiben unlösbar mit dem Werkstück verbunden. Das Ergebnis ist eine Verbindung, die stärker ist als eine herkömmliche Nagelverbindung.

Die Vorteile liegen auf der Hand: Keine Wärmebrücken in der Dämmebene, 66 % weniger CO₂-Emissionen als Stahlnägel, vollständig recyclebar und kompostierbar. Die bauaufsichtliche Zulassung (DIBt und ETA) ermöglicht den Einsatz in tragenden Holzkonstruktionen.

Das Gerät ist ideal für Zimmereien, die auf Nachhaltigkeit setzen, und für alle Bauprojekte, bei denen Wärmebrückenfreiheit gefordert ist – etwa in Passivhäusern und KfW-Effizienzhäusern.`,
    techSpecs: [
      { label: "Antrieb", value: "18V Li-Ion Akku" },
      { label: "Nagelmaterial", value: "Verdichtetes Buchenholz (LignoLoc)" },
      { label: "Nagellänge", value: "38 – 65 mm" },
      { label: "Nageldurchmesser", value: "3,7 mm" },
      { label: "Magazinkapazität", value: "40 Holznägel" },
      { label: "Eintreibverfahren", value: "Reibschweißtechnik" },
      { label: "Gewicht (mit Akku)", value: "4,2 kg" },
      { label: "Zulassungen", value: "DIBt Z-9.1-900, ETA-21/0504" },
      { label: "Lieferumfang", value: "2x 5,0 Ah Akku, Ladegerät, Koffer" },
    ],
    compatibleProducts: [
      {
        slug: "lignoloc-holznaegel-37x50",
        categorySlug: "lignoloc",
        title: "LignoLoc Holznägel 3,7 x 50 mm (2.000 Stk.)",
        brand: "Beck (LignoLoc)",
        price: 4900,
        isLignoLoc: true,
      },
      {
        slug: "lignoloc-holznaegel-37x38",
        categorySlug: "lignoloc",
        title: "LignoLoc Holznägel 3,7 x 38 mm (2.000 Stk.)",
        brand: "Beck (LignoLoc)",
        price: 4500,
        isLignoLoc: true,
      },
      {
        slug: "lignoloc-holznaegel-37x55",
        categorySlug: "lignoloc",
        title: "LignoLoc Holznägel 3,7 x 55 mm (2.000 Stk.)",
        brand: "Beck (LignoLoc)",
        price: 5200,
        isLignoLoc: true,
      },
      {
        slug: "lignoloc-holznaegel-37x65",
        categorySlug: "lignoloc",
        title: "LignoLoc Holznägel 3,7 x 65 mm (2.000 Stk.)",
        brand: "Beck (LignoLoc)",
        price: 5800,
        isLignoLoc: true,
      },
    ],
    applications: [
      {
        gewerk: "zimmerer",
        gewerkLabel: "Zimmerer",
        anwendung: "holzrahmenbau",
        anwendungLabel: "Holzrahmenbau",
      },
      {
        gewerk: "dachdecker",
        gewerkLabel: "Dachdecker",
        anwendung: "daemmplatten",
        anwendungLabel: "Dämmplatten nageln",
      },
      {
        gewerk: "zimmerer",
        gewerkLabel: "Zimmerer",
        anwendung: "dachlatten",
        anwendungLabel: "Dachlatten befestigen",
      },
    ],
    downloads: [
      { name: "Datenblatt F44 AC LignoLoc", type: "PDF", size: "3,1 MB" },
      { name: "LignoLoc Zulassung DIBt", type: "PDF", size: "1,2 MB" },
      { name: "LignoLoc Nachhaltigkeitsbericht", type: "PDF", size: "4,8 MB" },
    ],
  },
};

function getProduct(slug: string): SampleProduct {
  if (SAMPLE_PRODUCTS[slug]) return SAMPLE_PRODUCTS[slug];

  // Fallback: generate a realistic-looking product from the slug
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    slug,
    categorySlug: "akku-nagler",
    title,
    brand: "HiKOKI",
    brandSlug: "hikoki",
    articleNumber: slug.toUpperCase().slice(0, 12),
    price: 29900,
    isLignoLoc: false,
    availability: "in_stock",
    shortDescription: `${title} – professionelle Befestigungstechnik für den Profi-Einsatz. Robust, zuverlässig und leistungsstark.`,
    description: `${title} von HiKOKI ist ein hochwertiges Werkzeug für professionelle Anwender im Handwerk und auf der Baustelle. Das Gerät überzeugt durch seine solide Verarbeitung, ergonomisches Design und zuverlässige Leistung im Dauereinsatz.\n\nIdeal für Zimmerer, Dachdecker und Trockenbauer, die Wert auf Qualität und Zuverlässigkeit legen. Die bewährte Technik sorgt für konstante Eintreibergebnisse und hohe Produktivität auf der Baustelle.`,
    techSpecs: [
      { label: "Antrieb", value: "18V Li-Ion" },
      { label: "Gewicht", value: "3,5 kg" },
      { label: "Magazinkapazität", value: "50 Stk." },
    ],
    compatibleProducts: [
      { slug: "prebena-rk28-80-nk", categorySlug: "streifennaegel", title: "Prebena Streifennägel RK 28/80 NK verzinkt", brand: "Prebena", price: 3490, isLignoLoc: false },
      { slug: "prebena-rk28-65-bk", categorySlug: "streifennaegel", title: "Prebena Streifennägel RK 28/65 BK blank", brand: "Prebena", price: 2990, isLignoLoc: false },
      { slug: "hikoki-streifennaegel-rk-21-75-nk", categorySlug: "streifennaegel", title: "HiKOKI Streifennägel 21° 75mm Ring verzinkt", brand: "HiKOKI", price: 3290, isLignoLoc: false },
      { slug: "prebena-rk28-90-fvz", categorySlug: "streifennaegel", title: "Prebena Streifennägel RK 28/90 feuerverzinkt", brand: "Prebena", price: 4290, isLignoLoc: false },
    ],
    applications: [
      { gewerk: "zimmerer", gewerkLabel: "Zimmerer", anwendung: "dachlatten", anwendungLabel: "Dachlatten befestigen" },
      { gewerk: "zimmerer", gewerkLabel: "Zimmerer", anwendung: "schalung", anwendungLabel: "Schalung nageln" },
    ],
    downloads: [
      { name: "Datenblatt", type: "PDF", size: "1,5 MB" },
    ],
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { category, product: productSlug } = await params;
  const product = getProduct(productSlug);
  const categoryName = CATEGORY_NAMES[category] ?? category.replace(/-/g, " ");

  return {
    title: `${product.title} kaufen | ${product.brand}`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.title} | Nagel Paul`,
      description: product.shortDescription,
      type: "website",
      locale: "de_DE",
    },
    alternates: {
      canonical: `https://nagel-paul.de/produkte/${category}/${productSlug}`,
    },
  };
}

function ProductJsonLd({ product, category }: { product: SampleProduct; category: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.shortDescription,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    sku: product.articleNumber,
    url: `https://nagel-paul.de/produkte/${category}/${product.slug}`,
    offers: {
      "@type": "Offer",
      url: `https://nagel-paul.de/produkte/${category}/${product.slug}`,
      priceCurrency: "EUR",
      price: (product.price / 100).toFixed(2),
      availability:
        product.availability === "in_stock"
          ? "https://schema.org/InStock"
          : product.availability === "low_stock"
            ? "https://schema.org/LimitedAvailability"
            : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Nagel Paul – JPS GmbH & Co. KG",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, product: productSlug } = await params;
  const product = getProduct(productSlug);
  const categoryName = CATEGORY_NAMES[category] ?? category.replace(/-/g, " ");
  const hasDiscount =
    product.compareAtPrice !== undefined &&
    product.compareAtPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.compareAtPrice! - product.price) / product.compareAtPrice!) *
          100
      )
    : 0;

  return (
    <main className="min-h-screen">
      <ProductJsonLd product={product} category={category} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Produkte", href: "/produkte" },
            { label: categoryName, href: `/produkte/${category}` },
            { label: product.title, href: `/produkte/${category}/${product.slug}` },
          ]}
        />

        {/* Product Top Section: Two-column layout */}
        <div className="grid gap-8 pt-4 pb-12 lg:grid-cols-2 lg:gap-12">
          {/* Left: Image Gallery Placeholder */}
          <div>
            {/* Main image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-gray-100">
              <div className="flex h-full items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.5}
                  stroke="currentColor"
                  className="h-24 w-24 text-gray-300"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                  />
                </svg>
              </div>

              {/* Badges */}
              <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                {product.isLignoLoc && (
                  <span className="inline-flex items-center rounded-full bg-lignoloc-light px-3 py-1 text-sm font-semibold text-lignoloc">
                    LignoLoc
                  </span>
                )}
                {hasDiscount && (
                  <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-semibold text-white">
                    -{discountPercent}%
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`aspect-square overflow-hidden rounded-lg border-2 bg-gray-100 ${
                    i === 0 ? "border-primary" : "border-border"
                  }`}
                >
                  <div className="flex h-full items-center justify-center">
                    <svg
                      className="h-6 w-6 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Brand */}
            <Link
              href={`/marken/${product.brandSlug}`}
              className="text-sm font-semibold uppercase tracking-wider text-text-muted transition-colors hover:text-accent"
            >
              {product.brand}
            </Link>

            {/* Title */}
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              {product.title}
            </h1>

            {/* Article number */}
            <p className="mt-1 font-mono text-sm text-text-muted">
              Art.-Nr.: {product.articleNumber}
            </p>

            {/* LignoLoc Badge */}
            {product.isLignoLoc && (
              <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-lignoloc-light px-3 py-2">
                <svg
                  className="h-5 w-5 text-lignoloc"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.312 3.188a.75.75 0 01.218.53v.782c0 3.177-1.395 5.93-3.634 7.7A7.97 7.97 0 017.75 14h-.009a.75.75 0 01-.53-1.28l.28-.28a6.472 6.472 0 003.45-3.95 6.505 6.505 0 00-3.95 3.45l-.28.28A.75.75 0 015.43 11.69 7.97 7.97 0 017.2 7.546c1.77-2.239 4.523-3.634 7.7-3.634h.782a.75.75 0 01.53.218l.1.058zM4.75 15.5a.75.75 0 01-.75-.75 3.25 3.25 0 013.25-3.25.75.75 0 01.75.75A3.25 3.25 0 014.75 15.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold text-lignoloc">
                  LignoLoc-kompatibel – Nachhaltiges Befestigen mit Holznägeln
                </span>
              </div>
            )}

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-3">
              <span
                className={`text-3xl font-bold ${hasDiscount ? "text-accent" : "text-primary"}`}
              >
                {formatPrice(product.price)}
              </span>
              {hasDiscount && product.compareAtPrice && (
                <span className="text-lg text-text-muted line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
            <p className="mt-0.5 text-sm text-text-muted">
              inkl. MwSt. zzgl. Versandkosten
            </p>

            {/* Availability */}
            <div className="mt-4 flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  product.availability === "in_stock"
                    ? "bg-success"
                    : product.availability === "low_stock"
                      ? "bg-warning"
                      : "bg-gray-300"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  product.availability === "in_stock"
                    ? "text-success"
                    : product.availability === "low_stock"
                      ? "text-yellow-700"
                      : "text-text-muted"
                }`}
              >
                {product.availability === "in_stock"
                  ? "Auf Lager – Lieferzeit 1-3 Werktage"
                  : product.availability === "low_stock"
                    ? "Nur noch wenige verfügbar"
                    : "Derzeit nicht verfügbar"}
              </span>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-6 flex items-center gap-3">
              {/* Quantity selector area */}
              <div className="flex items-center rounded-lg border border-border">
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center text-text-muted transition-colors hover:text-primary"
                  aria-label="Menge verringern"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                  </svg>
                </button>
                <span className="flex h-12 w-12 items-center justify-center border-x border-border text-center font-semibold text-primary">
                  1
                </span>
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center text-text-muted transition-colors hover:text-primary"
                  aria-label="Menge erhöhen"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>

              {/* Add to cart button */}
              <button
                type="button"
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-base font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                In den Warenkorb
              </button>
            </div>

            {/* Trust Icons */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center gap-1 rounded-lg border border-border p-3 text-center">
                <svg className="h-5 w-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <span className="text-xs font-medium text-text-muted">Schneller Versand</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-lg border border-border p-3 text-center">
                <svg className="h-5 w-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs font-medium text-text-muted">Fachhandel-Garantie</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-lg border border-border p-3 text-center">
                <svg className="h-5 w-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xs font-medium text-text-muted">Fachberatung</span>
              </div>
            </div>

            {/* Short description */}
            <p className="mt-6 text-sm leading-relaxed text-text-muted">
              {product.shortDescription}
            </p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-border">
          {/* Tab navigation */}
          <div className="flex overflow-x-auto border-b border-border">
            {[
              { id: "beschreibung", label: "Beschreibung" },
              { id: "technische-daten", label: "Technische Daten" },
              { id: "kompatibilitaet", label: "Kompatibilität" },
              { id: "downloads", label: "Downloads" },
            ].map((tab, index) => (
              <button
                key={tab.id}
                type="button"
                className={`whitespace-nowrap px-6 py-4 text-sm font-medium transition-colors ${
                  index === 0
                    ? "border-b-2 border-accent text-accent"
                    : "text-text-muted hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content: Beschreibung (shown by default) */}
          <div className="py-8">
            <div className="prose prose-sm max-w-none">
              <h2 className="text-xl font-bold text-primary">
                Produktbeschreibung
              </h2>
              {product.description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="mt-4 leading-relaxed text-text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Tab Content: Technische Daten */}
          <div className="border-t border-border py-8">
            <h2 className="mb-6 text-xl font-bold text-primary">
              Technische Daten
            </h2>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <tbody>
                  {product.techSpecs.map((spec, i) => (
                    <tr
                      key={spec.label}
                      className={i % 2 === 0 ? "bg-bg-alt" : "bg-white"}
                    >
                      <td className="px-4 py-3 font-medium text-primary">
                        {spec.label}
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-text-muted">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tab Content: Kompatibilität */}
          <div className="border-t border-border py-8">
            <h2 className="mb-2 text-xl font-bold text-primary">
              Kompatible Befestigungsmittel
            </h2>
            <p className="mb-6 text-sm text-text-muted">
              Diese Nägel und Befestigungsmittel sind mit dem{" "}
              {product.title} kompatibel und von uns empfohlen.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.compatibleProducts.map((cp) => (
                <Link
                  key={cp.slug}
                  href={`/produkte/${cp.categorySlug}/${cp.slug}`}
                  className="group flex flex-col rounded-lg border border-border bg-white p-4 transition-all hover:shadow-md"
                >
                  <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                    <div className="flex h-full items-center justify-center">
                      <svg
                        className="h-8 w-8 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                        />
                      </svg>
                    </div>
                    {cp.isLignoLoc && (
                      <span className="absolute left-2 top-2 rounded-full bg-lignoloc-light px-2 py-0.5 text-xs font-semibold text-lignoloc">
                        LignoLoc
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                    {cp.brand}
                  </span>
                  <span className="mt-0.5 line-clamp-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                    {cp.title}
                  </span>
                  <span className="mt-auto pt-2 text-sm font-bold text-primary">
                    {formatPrice(cp.price)}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Tab Content: Downloads */}
          <div className="border-t border-border py-8">
            <h2 className="mb-6 text-xl font-bold text-primary">
              Downloads &amp; Dokumente
            </h2>
            <div className="space-y-3">
              {product.downloads.map((dl) => (
                <div
                  key={dl.name}
                  className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-bg-alt"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">
                        {dl.name}
                      </p>
                      <p className="text-xs text-text-muted">
                        {dl.type} – {dl.size}
                      </p>
                    </div>
                  </div>
                  <svg className="h-5 w-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Passend dazu Section */}
        <section className="border-t border-border py-12">
          <h2 className="mb-2 text-2xl font-bold text-primary">
            Passend dazu
          </h2>
          <p className="mb-6 text-sm text-text-muted">
            Kompatible Nägel und Zubehör für den {product.title}
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {product.compatibleProducts.map((cp) => (
              <Link
                key={cp.slug}
                href={`/produkte/${cp.categorySlug}/${cp.slug}`}
                className="group rounded-lg border border-border bg-white p-4 transition-all hover:shadow-md"
              >
                <div className="relative mb-3 aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <div className="flex h-full items-center justify-center">
                    <svg
                      className="h-8 w-8 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                      />
                    </svg>
                  </div>
                  {cp.isLignoLoc && (
                    <span className="absolute left-2 top-2 rounded-full bg-lignoloc-light px-2 py-0.5 text-xs font-semibold text-lignoloc">
                      LignoLoc
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  {cp.brand}
                </p>
                <p className="mt-0.5 line-clamp-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                  {cp.title}
                </p>
                <p className="mt-2 text-sm font-bold text-primary">
                  {formatPrice(cp.price)}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Für diese Anwendungen geeignet */}
        <section className="border-t border-border py-12">
          <h2 className="mb-2 text-2xl font-bold text-primary">
            Für diese Anwendungen geeignet
          </h2>
          <p className="mb-6 text-sm text-text-muted">
            Dieses Gerät ist ideal für folgende Einsatzbereiche:
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {product.applications.map((app) => (
              <Link
                key={`${app.gewerk}-${app.anwendung}`}
                href={`/anwendungen/${app.gewerk}/${app.anwendung}`}
                className="group flex items-center gap-3 rounded-lg border border-border bg-white p-4 transition-all hover:border-accent/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bg-alt text-sm font-bold text-primary">
                  {app.gewerkLabel.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                    {app.gewerkLabel}
                  </p>
                  <p className="truncate text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                    {app.anwendungLabel}
                  </p>
                </div>
                <svg
                  className="ml-auto h-4 w-4 shrink-0 text-text-muted transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom spacing */}
        <div className="mb-16" />
      </div>
    </main>
  );
}

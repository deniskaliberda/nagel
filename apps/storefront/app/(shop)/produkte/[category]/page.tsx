import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { formatPrice } from "@/lib/utils";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

const CATEGORY_DATA: Record<
  string,
  {
    name: string;
    description: string;
    metaDescription: string;
  }
> = {
  "druckluft-nagler": {
    name: "Druckluft-Nagler",
    description:
      "Druckluft-Nagler sind die Arbeitstiere auf jeder Baustelle. Mit konstanter Leistung und hoher Eintreibkraft eignen sie sich besonders für den Dauereinsatz im Zimmerei- und Dachdeckerhandwerk. Unsere Druckluft-Streifennagler und Coilnagler von HiKOKI, Prebena und BeA verarbeiten Nagellängen von 50 bis 130 mm und sind für die harten Anforderungen auf der Baustelle gebaut.",
    metaDescription:
      "Druckluft-Nagler von HiKOKI, Prebena, BeA und Haubold. Streifennagler und Coilnagler für Zimmerer, Dachdecker und Trockenbauer. Jetzt bestellen.",
  },
  "akku-nagler": {
    name: "Akku-Nagler",
    description:
      "Akku-Nagler bieten maximale Flexibilität ohne Schlauch und Kompressor. Die neueste Generation 18V-Nagler von HiKOKI und Senco erreicht Eintreibkräfte, die Druckluftgeräten in nichts nachstehen. Ideal für Montagearbeiten, Holzrahmenbau und überall dort, wo kein Stromanschluss verfügbar ist. Einige Modelle sind auch LignoLoc-kompatibel für nachhaltiges Befestigen mit Holznägeln.",
    metaDescription:
      "Akku-Nagler 18V von HiKOKI, Senco und Beck. Kabellos nageln ohne Kompressor. Auch LignoLoc-kompatible Modelle. Fachhandel-Beratung inklusive.",
  },
  "gas-nagler": {
    name: "Gas-Nagler",
    description:
      "Gas-Nagler kombinieren die Unabhängigkeit von Druckluft mit sofortiger Einsatzbereitschaft. Der Paslode IM90i ist der Klassiker auf deutschen Baustellen und überzeugt durch geringes Gewicht und schnelle Schussfolge. Ideal für Zimmerer und Dachdecker, die häufig den Standort wechseln und sofort loslegen müssen.",
    metaDescription:
      "Gas-Nagler von Paslode und weiteren Marken. Sofort einsatzbereit ohne Kompressor. Perfekt für mobile Einsätze auf der Baustelle.",
  },
  tacker: {
    name: "Tacker",
    description:
      "Professionelle Druckluft- und Akku-Tacker für Klammern, Brads und Pins. Ob für Polsterarbeiten, Dämmplatten-Befestigung, Dachpappe oder Holzverkleidungen – wir führen Tacker von BeA, Prebena und Senco für jeden Anwendungsbereich. Von der feinen 18-Gauge-Klammer bis zur schweren Bauklammer.",
    metaDescription:
      "Professionelle Tacker von BeA, Prebena und Senco. Druckluft- und Akku-Tacker für Klammern und Brads. Für Handwerk und Industrie.",
  },
  streifennaegel: {
    name: "Streifennägel",
    description:
      "Streifennägel (D-Kopf und Rundkopf) in 20°, 21°, 28° und 34° Magazinierung für alle gängigen Streifennagler. Verfügbar in blank, verzinkt, feuerverzinkt und Edelstahl. Von 50 mm bis 130 mm Länge. Passend für HiKOKI, Paslode, Prebena, BeA und weitere Marken. Achten Sie auf die richtige Neigung und Verbindungsart für Ihr Gerät.",
    metaDescription:
      "Streifennägel 20°, 21°, 28° und 34° für alle Nagler-Marken. Blank, verzinkt und Edelstahl. Von 50 bis 130 mm. Große Auswahl, schnelle Lieferung.",
  },
  coilnaegel: {
    name: "Coilnägel",
    description:
      "Coilnägel (Drahtcoil und Kunststoffcoil) für Coilnagler. Durch die runde Magazinierung passen mehr Nägel ins Magazin – ideal für den Dauereinsatz. Erhältlich in Ring, Schrauben und glatt, von 25 mm bis 130 mm Länge. Passend für Bostitch, Max, Prebena, Senco und weitere Coilnagler.",
    metaDescription:
      "Coilnägel für alle gängigen Coilnagler. Ring, Schrauben und glatt. 25 bis 130 mm. Drahtcoil und Kunststoffcoil verfügbar.",
  },
  "brads-pins": {
    name: "Brads & Pins",
    description:
      "Brads (Stauchkopfnägel) und Pins (kopflose Stifte) für feine Befestigungsarbeiten. 18-Gauge Brads und 23-Gauge Pins für Leisten, Zierprofile, Möbelbau und Verglasungen. Nahezu unsichtbare Befestigung ohne Nachlackieren. Verfügbar in 15 bis 64 mm Länge, passend für Senco, Prebena, BeA und weitere Bradnagler.",
    metaDescription:
      "Brads und Pins 18-Gauge und 23-Gauge für unsichtbare Befestigung. Für Möbelbau, Leisten und Zierprofile. 15 bis 64 mm Länge.",
  },
  klammern: {
    name: "Klammern",
    description:
      "Heftklammern und Bauklammern für professionelle Tacker. Von der feinen Polsterklammer bis zur schweren Bauklammer für Unterkonstruktionen. Schmalrücken, Breitrücken und Sonderklammern für Dachpappe, Dampfbremsen und Folien. Passend für BeA, Prebena, Senco, Haubold und weitere Marken.",
    metaDescription:
      "Professionelle Klammern für alle Tacker-Marken. Schmalrücken, Breitrücken und Bauklammern. Für Polster, Dach, Boden und Trockenbau.",
  },
  lignoloc: {
    name: "LignoLoc Holznägel",
    description:
      "LignoLoc Holznägel sind die nachhaltige Revolution in der Befestigungstechnik. Aus verdichtetem mitteleuropäischem Buchenholz gefertigt, erzeugen sie keine Wärmebrücken und sind vollständig recyclebar. Bauaufsichtlich zugelassen (DIBt und ETA), 66 % weniger CO₂ als Stahlnägel. Kompatibel mit dem Beck FASCO F44 AC Nagelgerät.",
    metaDescription:
      "LignoLoc Holznägel – nachhaltige Befestigung aus Buchenholz. 66 % weniger CO₂, keine Wärmebrücken. Bauaufsichtlich zugelassen. Jetzt entdecken.",
  },
  schrauben: {
    name: "Schrauben",
    description:
      "Magazinierte Schrauben und Schraubenmagazine für professionelle Verschraubungssysteme. Für Trockenbau-Unterkonstruktionen, Holzverbindungen und Profilbefestigungen. Kompatibel mit Senco DuraSpin und weiteren Magazinschraubern. Schnellere Verarbeitung als Einzelschrauben bei gleichbleibender Qualität.",
    metaDescription:
      "Magazinierte Schrauben für Trockenbau und Holzbau. Für Senco DuraSpin und weitere Systeme. Professionelle Verschraubungstechnik.",
  },
  kompressoren: {
    name: "Kompressoren",
    description:
      "Baukompressoren und Werkstattkompressoren für den Betrieb von Druckluft-Naglern und Tackern. Leise Flüsterkompressoren für die Werkstatt und robuste Baukompressoren für die Baustelle. HiKOKI und Prebena Kompressoren mit 8 bis 20 Bar und 6 bis 50 Liter Kesselvolumen.",
    metaDescription:
      "Kompressoren für Druckluft-Nagler von HiKOKI und Prebena. Baukompressoren und Flüsterkompressoren. 8 bis 20 Bar, 6 bis 50 Liter.",
  },
  zubehoer: {
    name: "Zubehör & Ersatzteile",
    description:
      "Zubehör und Ersatzteile für Nagler, Tacker und Kompressoren. Druckluftschläuche, Kupplungen, Öler, Akkus, Ladegeräte und Original-Verschleißteile. Halten Sie Ihre Geräte in Schuss mit dem richtigen Zubehör von HiKOKI, Paslode, Prebena und weiteren Herstellern.",
    metaDescription:
      "Zubehör und Ersatzteile für Nagler und Tacker. Schläuche, Kupplungen, Akkus und Verschleißteile. Original-Ersatzteile aller Marken.",
  },
};

const CATEGORY_PRODUCTS: Record<
  string,
  Array<{
    slug: string;
    title: string;
    brand: string;
    price: number;
    compareAtPrice?: number;
    isLignoLoc: boolean;
    availability: "in_stock" | "low_stock" | "out_of_stock";
  }>
> = {
  "druckluft-nagler": [
    { slug: "hikoki-nr90gc1", title: "HiKOKI NR90GC1 Druckluft-Streifennagler 50-90mm", brand: "HiKOKI", price: 32900, isLignoLoc: false, availability: "low_stock" },
    { slug: "prebena-7xr-rk90", title: "Prebena 7XR-RK90 Druckluft-Streifennagler", brand: "Prebena", price: 45900, isLignoLoc: false, availability: "in_stock" },
    { slug: "bea-r130-934c", title: "BeA R130-934C Druckluft-Streifennagler 100-130mm", brand: "BeA", price: 58900, isLignoLoc: false, availability: "in_stock" },
    { slug: "haubold-rn65-a", title: "Haubold RN65 A Druckluft-Coilnagler", brand: "Haubold", price: 52900, isLignoLoc: false, availability: "in_stock" },
    { slug: "prebena-cnp-65", title: "Prebena CNP-65 Druckluft-Coilnagler 32-65mm", brand: "Prebena", price: 38900, isLignoLoc: false, availability: "in_stock" },
    { slug: "hikoki-nv90ab2", title: "HiKOKI NV90AB2 Druckluft-Coilnagler 45-90mm", brand: "HiKOKI", price: 41900, isLignoLoc: false, availability: "in_stock" },
  ],
  "akku-nagler": [
    { slug: "hikoki-nr1890dbcl", title: "HiKOKI NR1890DBCL Akku-Streifennagler 18V", brand: "HiKOKI", price: 59900, compareAtPrice: 69900, isLignoLoc: false, availability: "in_stock" },
    { slug: "senco-finishpro-18mg", title: "Senco FinishPro 18Mg Akku-Bradnagler 18V", brand: "Senco", price: 39900, isLignoLoc: false, availability: "in_stock" },
    { slug: "beck-fasco-f44-ac-lignoloc", title: "Beck FASCO F44 AC LignoLoc Holznagelgerät", brand: "Beck (LignoLoc)", price: 129900, isLignoLoc: true, availability: "in_stock" },
    { slug: "hikoki-np18dsl", title: "HiKOKI NP18DSL 18V Akku-Stiftnagler 23 Ga", brand: "HiKOKI", price: 34900, isLignoLoc: false, availability: "in_stock" },
    { slug: "senco-fusion-f-15xp", title: "Senco FUSION F-15XP Akku-Bradnagler 18 Ga", brand: "Senco", price: 44900, isLignoLoc: false, availability: "low_stock" },
    { slug: "hikoki-nr1890dc", title: "HiKOKI NR1890DC 18V Akku-Streifennagler Brushless", brand: "HiKOKI", price: 64900, isLignoLoc: false, availability: "in_stock" },
  ],
  "gas-nagler": [
    { slug: "paslode-im90i", title: "Paslode IM90i Li Gasnagler im Koffer", brand: "Paslode", price: 89900, isLignoLoc: false, availability: "in_stock" },
    { slug: "paslode-im350-plus", title: "Paslode IM350+ Li Gasnagler Streifennagler", brand: "Paslode", price: 94900, isLignoLoc: false, availability: "in_stock" },
    { slug: "paslode-im65-li", title: "Paslode IM65 Li Gasnagler Bradnagler 16 Ga", brand: "Paslode", price: 79900, isLignoLoc: false, availability: "low_stock" },
    { slug: "paslode-im45-gn", title: "Paslode IM45 GN Gasnagler für Dachpappe", brand: "Paslode", price: 97900, isLignoLoc: false, availability: "in_stock" },
  ],
};

function getProductsForCategory(categorySlug: string) {
  return (
    CATEGORY_PRODUCTS[categorySlug] ?? [
      { slug: "beispiel-1", title: "Beispielprodukt 1", brand: "HiKOKI", price: 29900, isLignoLoc: false, availability: "in_stock" as const },
      { slug: "beispiel-2", title: "Beispielprodukt 2", brand: "Prebena", price: 19900, isLignoLoc: false, availability: "in_stock" as const },
      { slug: "beispiel-3", title: "Beispielprodukt 3", brand: "BeA", price: 39900, isLignoLoc: false, availability: "in_stock" as const },
    ]
  );
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const data = CATEGORY_DATA[category];
  const name = data?.name ?? category.replace(/-/g, " ");

  return {
    title: `${name} kaufen – Professionelle Befestigungstechnik`,
    description:
      data?.metaDescription ??
      `${name} vom Fachhändler Nagel Paul. Professionelle Befestigungstechnik für Handwerk und Industrie. Große Auswahl, schneller Versand.`,
    openGraph: {
      title: `${name} | Nagel Paul`,
      description:
        data?.metaDescription ?? `${name} – professionelle Befestigungstechnik von Nagel Paul.`,
      type: "website",
      locale: "de_DE",
    },
    alternates: {
      canonical: `https://nagel-paul.de/produkte/${category}`,
    },
  };
}

function CategoryJsonLd({ category, name }: { category: string; name: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name,
        description: CATEGORY_DATA[category]?.description ?? `${name} von Nagel Paul`,
        url: `https://nagel-paul.de/produkte/${category}`,
        isPartOf: {
          "@type": "WebSite",
          name: "Nagel Paul",
          url: "https://nagel-paul.de",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: "https://nagel-paul.de",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Produkte",
            item: "https://nagel-paul.de/produkte",
          },
          {
            "@type": "ListItem",
            position: 3,
            name,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const data = CATEGORY_DATA[category];
  const categoryName = data?.name ?? category.replace(/-/g, " ");
  const description = data?.description ?? null;
  const products = getProductsForCategory(category);
  const isLignoLocCategory = category === "lignoloc";

  return (
    <main className="min-h-screen">
      <CategoryJsonLd category={category} name={categoryName} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Produkte", href: "/produkte" },
            { label: categoryName, href: `/produkte/${category}` },
          ]}
        />

        {/* Header */}
        <div className="pb-8 pt-4">
          <div className="flex items-center gap-3">
            {isLignoLocCategory && (
              <span className="inline-flex items-center rounded-full bg-lignoloc-light px-3 py-1 text-sm font-semibold text-lignoloc">
                Nachhaltig
              </span>
            )}
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {categoryName}
          </h1>
          {description && (
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
              {description}
            </p>
          )}
        </div>

        {/* Filter + Sort Area */}
        <div className="mb-8 rounded-lg border-2 border-dashed border-border bg-bg-alt p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 text-text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span className="text-sm font-medium text-text-muted">
                Filter &amp; Sortierung
              </span>
            </div>
            <span className="text-sm text-text-muted">
              {products.length} Produkte
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {products.map((product) => {
            const href = `/produkte/${category}/${product.slug}`;
            const hasDiscount =
              product.compareAtPrice !== undefined &&
              product.compareAtPrice > product.price;

            return (
              <article
                key={product.slug}
                className="group relative flex flex-col rounded-lg border border-border bg-white transition-shadow duration-200 hover:shadow-lg"
              >
                <Link href={href} className="flex flex-1 flex-col">
                  {/* Image area */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-t-lg bg-gray-100">
                    <div className="flex h-full items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="h-12 w-12 text-gray-300"
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
                    <div className="absolute left-2 top-2 flex flex-col gap-1">
                      {product.isLignoLoc && (
                        <span className="inline-flex items-center rounded-full bg-lignoloc-light px-2.5 py-0.5 text-xs font-semibold text-lignoloc">
                          LignoLoc
                        </span>
                      )}
                      {hasDiscount && (
                        <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white">
                          Angebot
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-1.5 p-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      {product.brand}
                    </span>
                    <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-primary transition-colors duration-150 group-hover:text-accent">
                      {product.title}
                    </h3>
                    <div className="mt-auto flex items-baseline gap-2 pt-2">
                      <span
                        className={`text-base font-bold ${hasDiscount ? "text-accent" : "text-primary"}`}
                      >
                        {formatPrice(product.price)}
                      </span>
                      {hasDiscount && product.compareAtPrice && (
                        <span className="text-sm text-text-muted line-through">
                          {formatPrice(product.compareAtPrice)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          product.availability === "in_stock"
                            ? "bg-success"
                            : product.availability === "low_stock"
                              ? "bg-warning"
                              : "bg-gray-300"
                        }`}
                      />
                      <span className="text-xs text-text-muted">
                        {product.availability === "in_stock"
                          ? "Auf Lager"
                          : product.availability === "low_stock"
                            ? "Wenige verfügbar"
                            : "Nicht verfügbar"}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Quick add */}
                {product.availability !== "out_of_stock" && (
                  <div className="px-4 pb-4">
                    <button
                      type="button"
                      className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      In den Warenkorb
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* LignoLoc Banner for non-LignoLoc categories */}
        {!isLignoLocCategory && (
          <div className="mt-12 rounded-xl bg-gradient-to-r from-lignoloc to-[#1a3a0a] p-6 sm:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="inline-flex items-center rounded-full bg-lignoloc-light px-2.5 py-0.5 text-xs font-semibold text-lignoloc">
                  Nachhaltige Alternative
                </span>
                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Kennen Sie schon LignoLoc Holznägel?
                </h2>
                <p className="mt-1 text-sm text-green-100">
                  66 % weniger CO₂, keine Wärmebrücken, bauaufsichtlich
                  zugelassen.
                </p>
              </div>
              <Link
                href="/produkte/lignoloc"
                className="inline-flex shrink-0 items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-lignoloc transition-colors hover:bg-green-50"
              >
                LignoLoc entdecken
                <svg
                  className="ml-1.5 h-4 w-4"
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
            </div>
          </div>
        )}

        {/* Bottom spacing */}
        <div className="mb-16" />
      </div>
    </main>
  );
}

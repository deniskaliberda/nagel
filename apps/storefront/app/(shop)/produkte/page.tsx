import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Alle Produkte – Nagler, Befestigungsmittel & Zubehör",
  description:
    "Entdecken Sie unser komplettes Sortiment an professioneller Befestigungstechnik: Druckluft- und Akku-Nagler, Streifennägel, Coilnägel, Klammern, LignoLoc Holznägel und Zubehör von HiKOKI, Paslode, Prebena, BeA und weiteren Marken.",
  openGraph: {
    title: "Alle Produkte | Nagel Paul",
    description:
      "Professionelle Befestigungstechnik: Nagler, Tacker, Nägel, Klammern und LignoLoc Holznägel. Jetzt entdecken.",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://nagel-paul.de/produkte",
  },
};

const CATEGORIES = [
  {
    slug: "druckluft-nagler",
    label: "Druckluft-Nagler",
    count: 24,
  },
  {
    slug: "akku-nagler",
    label: "Akku-Nagler",
    count: 18,
  },
  {
    slug: "gas-nagler",
    label: "Gas-Nagler",
    count: 8,
  },
  {
    slug: "tacker",
    label: "Tacker",
    count: 15,
  },
  {
    slug: "streifennaegel",
    label: "Streifennägel",
    count: 42,
  },
  {
    slug: "coilnaegel",
    label: "Coilnägel",
    count: 36,
  },
  {
    slug: "brads-pins",
    label: "Brads & Pins",
    count: 28,
  },
  {
    slug: "klammern",
    label: "Klammern",
    count: 31,
  },
  {
    slug: "lignoloc",
    label: "LignoLoc Holznägel",
    count: 12,
  },
  {
    slug: "schrauben",
    label: "Schrauben",
    count: 20,
  },
  {
    slug: "kompressoren",
    label: "Kompressoren",
    count: 9,
  },
  {
    slug: "zubehoer",
    label: "Zubehör & Ersatzteile",
    count: 34,
  },
];

const SAMPLE_PRODUCTS = [
  {
    slug: "hikoki-nr1890dbcl",
    categorySlug: "akku-nagler",
    title: "HiKOKI NR1890DBCL Akku-Streifennagler 18V",
    brand: "HiKOKI",
    price: 59900,
    compareAtPrice: 69900,
    isLignoLoc: false,
    availability: "in_stock" as const,
  },
  {
    slug: "paslode-im90i",
    categorySlug: "gas-nagler",
    title: "Paslode IM90i Li Gasnagler im Koffer",
    brand: "Paslode",
    price: 89900,
    isLignoLoc: false,
    availability: "in_stock" as const,
  },
  {
    slug: "prebena-rk28-80-nk",
    categorySlug: "streifennaegel",
    title: "Prebena Streifennägel RK 28/80 NK verzinkt",
    brand: "Prebena",
    price: 3490,
    isLignoLoc: false,
    availability: "in_stock" as const,
  },
  {
    slug: "bea-sks-650-228",
    categorySlug: "druckluft-nagler",
    title: "BeA SKS 650-228 Druckluft-Klammergerät",
    brand: "BeA",
    price: 44900,
    isLignoLoc: false,
    availability: "in_stock" as const,
  },
  {
    slug: "beck-fasco-f44-ac-lignoloc",
    categorySlug: "akku-nagler",
    title: "Beck FASCO F44 AC LignoLoc Holznagelgerät",
    brand: "Beck (LignoLoc)",
    price: 129900,
    isLignoLoc: true,
    availability: "in_stock" as const,
  },
  {
    slug: "lignoloc-holznaegel-37x50",
    categorySlug: "lignoloc",
    title: "LignoLoc Holznägel 3,7 x 50 mm (Paket 2.000 Stk.)",
    brand: "Beck (LignoLoc)",
    price: 4900,
    isLignoLoc: true,
    availability: "in_stock" as const,
  },
  {
    slug: "hikoki-nr90gc1",
    categorySlug: "druckluft-nagler",
    title: "HiKOKI NR90GC1 Druckluft-Streifennagler 50-90mm",
    brand: "HiKOKI",
    price: 32900,
    isLignoLoc: false,
    availability: "low_stock" as const,
  },
  {
    slug: "senco-finishpro-18mg",
    categorySlug: "akku-nagler",
    title: "Senco FinishPro 18Mg Akku-Bradnagler 18V",
    brand: "Senco",
    price: 39900,
    isLignoLoc: false,
    availability: "in_stock" as const,
  },
  {
    slug: "prebena-coilnaegel-cn-25-50-nk",
    categorySlug: "coilnaegel",
    title: "Prebena Coilnägel CN 25/50 NK Ring verzinkt",
    brand: "Prebena",
    price: 2890,
    isLignoLoc: false,
    availability: "in_stock" as const,
  },
  {
    slug: "haubold-rn65-a",
    categorySlug: "druckluft-nagler",
    title: "Haubold RN65 A Druckluft-Coilnagler",
    brand: "Haubold",
    price: 52900,
    isLignoLoc: false,
    availability: "in_stock" as const,
  },
  {
    slug: "paslode-klammern-s16-32mm",
    categorySlug: "klammern",
    title: "Paslode Klammern S16 1,6 x 32 mm verzinkt",
    brand: "Paslode",
    price: 1890,
    isLignoLoc: false,
    availability: "in_stock" as const,
  },
  {
    slug: "hikoki-ec-1445h",
    categorySlug: "kompressoren",
    title: "HiKOKI EC 1445H Kompressor 14 Bar / 45 Liter",
    brand: "HiKOKI",
    price: 69900,
    compareAtPrice: 79900,
    isLignoLoc: false,
    availability: "low_stock" as const,
  },
];

function ProductsJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Alle Produkte",
        description:
          "Komplettes Sortiment an professioneller Befestigungstechnik von Nagel Paul.",
        url: "https://nagel-paul.de/produkte",
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
            name: "Alle Produkte",
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

export default function ProduktePage() {
  return (
    <main className="min-h-screen">
      <ProductsJsonLd />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Produkte", href: "/produkte" }]} />

        {/* Header */}
        <div className="pb-8 pt-4">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Alle Produkte
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-text-muted">
            Entdecken Sie unser umfassendes Sortiment an professioneller
            Befestigungstechnik. Von Druckluft- und Akku-Naglern über
            Streifennägel und Coilnägel bis hin zu den innovativen LignoLoc
            Holznägeln.
          </p>
        </div>

        {/* Category Quick Links */}
        <div className="mb-8">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Kategorien
          </h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/produkte/${cat.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
              >
                {cat.label}
                <span className="text-xs text-text-muted">({cat.count})</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Filter Bar Placeholder */}
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
              {SAMPLE_PRODUCTS.length} Produkte
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SAMPLE_PRODUCTS.map((product) => {
            const href = `/produkte/${product.categorySlug}/${product.slug}`;
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
                <div className="px-4 pb-4">
                  <button
                    type="button"
                    className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    In den Warenkorb
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-12 mb-16 flex items-center justify-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
            1
          </span>
          <Link
            href="/produkte?seite=2"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
          >
            2
          </Link>
          <Link
            href="/produkte?seite=3"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
          >
            3
          </Link>
          <span className="px-2 text-text-muted">...</span>
          <Link
            href="/produkte?seite=12"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
          >
            12
          </Link>
          <Link
            href="/produkte?seite=2"
            className="flex h-10 items-center justify-center rounded-lg border border-border px-3 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
          >
            Weiter
            <svg
              className="ml-1 h-4 w-4"
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
    </main>
  );
}

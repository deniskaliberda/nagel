import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { ProductGrid } from "./ProductGrid";

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
  { slug: "druckluft-nagler", label: "Druckluft-Nagler", count: 24 },
  { slug: "akku-nagler", label: "Akku-Nagler", count: 18 },
  { slug: "gas-nagler", label: "Gas-Nagler", count: 8 },
  { slug: "tacker", label: "Tacker", count: 15 },
  { slug: "streifennaegel", label: "Streifennägel", count: 42 },
  { slug: "coilnaegel", label: "Coilnägel", count: 36 },
  { slug: "brads-pins", label: "Brads & Pins", count: 28 },
  { slug: "klammern", label: "Klammern", count: 31 },
  { slug: "lignoloc", label: "LignoLoc Holznägel", count: 12 },
  { slug: "schrauben", label: "Schrauben", count: 20 },
  { slug: "kompressoren", label: "Kompressoren", count: 9 },
  { slug: "zubehoer", label: "Zubehör & Ersatzteile", count: 34 },
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

        {/* Product Grid (client component with cart integration) */}
        <ProductGrid />

        {/* Pagination */}
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
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/navigation/Breadcrumbs"
import { formatPrice } from "@/lib/utils"

type BrandPageProps = {
  params: Promise<{ brand: string }>
}

const BRAND_DATA: Record<
  string,
  {
    name: string
    subtitle: string
    description: string
    metaDescription: string
    isLignoLoc?: boolean
    categories: string[]
    products: Array<{
      slug: string
      category: string
      title: string
      price: number
      compareAtPrice?: number
      isLignoLoc: boolean
      availability: "in_stock" | "low_stock" | "out_of_stock"
    }>
  }
> = {
  hikoki: {
    name: "HiKOKI",
    subtitle: "ehemals Hitachi / Metabo HPT",
    description:
      "HiKOKI (ehemals Hitachi Power Tools) ist einer der führenden Hersteller von Akku- und Druckluft-Naglern. Mit der Multi-Volt-Technologie bieten die 36V-Geräte Leistung auf Benzin-Niveau – kabellos. Von der Baustelle bis zur Werkstatt setzen Profis weltweit auf die Zuverlässigkeit und Innovation von HiKOKI. Als autorisierter Fachhändler bieten wir das komplette Sortiment mit fachkundiger Beratung.",
    metaDescription:
      "HiKOKI Nagler und Befestigungstechnik kaufen. Akku-Nagler, Druckluft-Nagler, Kompressoren und Zubehör. Autorisierter Fachhändler mit Beratung.",
    categories: ["Akku-Nagler", "Druckluft-Nagler", "Kompressoren", "Akkus & Ladegeräte"],
    products: [
      { slug: "hikoki-nr1890dbcl", category: "akku-nagler", title: "HiKOKI NR1890DBCL Akku-Streifennagler 18V", price: 59900, compareAtPrice: 69900, isLignoLoc: false, availability: "in_stock" },
      { slug: "hikoki-nr1890dc", category: "akku-nagler", title: "HiKOKI NR1890DC 18V Akku-Streifennagler Brushless", price: 64900, isLignoLoc: false, availability: "in_stock" },
      { slug: "hikoki-np18dsl", category: "akku-nagler", title: "HiKOKI NP18DSL 18V Akku-Stiftnagler 23 Ga", price: 34900, isLignoLoc: false, availability: "in_stock" },
      { slug: "hikoki-nr90gc1", category: "druckluft-nagler", title: "HiKOKI NR90GC1 Druckluft-Streifennagler 50-90mm", price: 32900, isLignoLoc: false, availability: "low_stock" },
      { slug: "hikoki-nv90ab2", category: "druckluft-nagler", title: "HiKOKI NV90AB2 Druckluft-Coilnagler 45-90mm", price: 41900, isLignoLoc: false, availability: "in_stock" },
    ],
  },
  paslode: {
    name: "Paslode",
    subtitle: "by ITW",
    description:
      "Paslode ist der Erfinder des Gasnailers und seit Jahrzehnten die Referenz für kabellose Nagler auf der Baustelle. Die IM-Serie wird weltweit von Zimmerern geschätzt. Kein Kompressor, kein Kabel – einfach einschalten und loslegen. Paslode-Geräte überzeugen durch ihr geringes Gewicht, die schnelle Schussfolge und die bewährte Gastechnik.",
    metaDescription:
      "Paslode Gasnagler und Streifennagler kaufen. IM90i, IM350+, IM65 und mehr. Autorisierter Fachhändler mit Beratung und schnellem Versand.",
    categories: ["Gas-Nagler", "Akku-Nagler", "Streifennägel", "Brads"],
    products: [
      { slug: "paslode-im90i", category: "gas-nagler", title: "Paslode IM90i Li Gasnagler im Koffer", price: 89900, isLignoLoc: false, availability: "in_stock" },
      { slug: "paslode-im350-plus", category: "gas-nagler", title: "Paslode IM350+ Li Gasnagler Streifennagler", price: 94900, isLignoLoc: false, availability: "in_stock" },
      { slug: "paslode-im65-li", category: "gas-nagler", title: "Paslode IM65 Li Gasnagler Bradnagler 16 Ga", price: 79900, isLignoLoc: false, availability: "low_stock" },
      { slug: "paslode-im45-gn", category: "gas-nagler", title: "Paslode IM45 GN Gasnagler für Dachpappe", price: 97900, isLignoLoc: false, availability: "in_stock" },
    ],
  },
  prebena: {
    name: "Prebena",
    subtitle: "Made in Germany",
    description:
      "Prebena steht für deutsche Qualität in der Befestigungstechnik. Das Familienunternehmen aus Schöneck fertigt seit 1951 Druckluft-Nagler und Tacker sowie die passenden Befestigungsmittel. Von der feinen Klammer bis zum schweren Streifennagel – Prebena bietet Lösungen für jeden Einsatzbereich. Als langjähriger Partner führen wir das komplette Prebena-Sortiment.",
    metaDescription:
      "Prebena Nagler und Tacker kaufen. Druckluft-Nagler, Tacker, Streifennägel und Klammern – Made in Germany. Fachhandel mit Beratung.",
    categories: ["Druckluft-Nagler", "Tacker", "Streifennägel", "Klammern"],
    products: [
      { slug: "prebena-7xr-rk90", category: "druckluft-nagler", title: "Prebena 7XR-RK90 Druckluft-Streifennagler", price: 45900, isLignoLoc: false, availability: "in_stock" },
      { slug: "prebena-cnp-65", category: "druckluft-nagler", title: "Prebena CNP-65 Druckluft-Coilnagler 32-65mm", price: 38900, isLignoLoc: false, availability: "in_stock" },
    ],
  },
  bea: {
    name: "BeA",
    subtitle: "Joh. Friedrich Behrens AG",
    description:
      "BeA (Behrens) ist ein traditionsreicher Hersteller von Befestigungssystemen mit über 100 Jahren Erfahrung. Besonders im Bereich industrieller Tacker und Klammern ist BeA weltweit führend. Die Druckluft-Geräte überzeugen durch Robustheit und Langlebigkeit – gemacht für den täglichen Dauereinsatz auf der Baustelle und in der Industrie.",
    metaDescription:
      "BeA Tacker und Nagler kaufen. Druckluft-Nagler, industrielle Tacker, Klammern und Brads. Über 100 Jahre Qualität. Fachhandel-Beratung.",
    categories: ["Druckluft-Nagler", "Tacker", "Klammern", "Brads"],
    products: [
      { slug: "bea-r130-934c", category: "druckluft-nagler", title: "BeA R130-934C Druckluft-Streifennagler 100-130mm", price: 58900, isLignoLoc: false, availability: "in_stock" },
    ],
  },
  haubold: {
    name: "Haubold",
    subtitle: "by ITW",
    description:
      "Haubold bietet hochwertige Druckluft-Befestigungssysteme für den professionellen Einsatz. Besonders Brads, Pins und Klammern in höchster Qualität zeichnen die Marke aus. Haubold-Geräte sind die erste Wahl für Schreiner und Tischler, die Wert auf präzise, nahezu unsichtbare Befestigung legen.",
    metaDescription:
      "Haubold Druckluft-Nagler und Tacker. Brads, Pins und Klammern in Profi-Qualität. Für Schreiner, Tischler und Innenausbau.",
    categories: ["Druckluft-Nagler", "Brads & Pins", "Klammern"],
    products: [
      { slug: "haubold-rn65-a", category: "druckluft-nagler", title: "Haubold RN65 A Druckluft-Coilnagler", price: 52900, isLignoLoc: false, availability: "in_stock" },
    ],
  },
  senco: {
    name: "Senco",
    subtitle: "by Kyocera",
    description:
      "Senco hat den pneumatischen Nagler erfunden und steht seit 1951 für Innovation in der Befestigungstechnik. Die Fusion-Technologie verbindet Akku und Druckluft in einem System. Senco DuraSpin Magazinschrauber und FinishPro Bradnagler sind bei Trocken- und Innenausbauern besonders beliebt.",
    metaDescription:
      "Senco Nagler und Tacker kaufen. Akku-Nagler, Druckluft-Nagler, DuraSpin Schrauber. Erfinder des pneumatischen Naglers seit 1951.",
    categories: ["Akku-Nagler", "Druckluft-Nagler", "Tacker", "Schrauber"],
    products: [
      { slug: "senco-finishpro-18mg", category: "akku-nagler", title: "Senco FinishPro 18Mg Akku-Bradnagler 18V", price: 39900, isLignoLoc: false, availability: "in_stock" },
      { slug: "senco-fusion-f-15xp", category: "akku-nagler", title: "Senco FUSION F-15XP Akku-Bradnagler 18 Ga", price: 44900, isLignoLoc: false, availability: "low_stock" },
    ],
  },
  fasco: {
    name: "Fasco",
    subtitle: "by Beck",
    description:
      "Fasco (Beck Fastener Group) ist der Hersteller der LignoLoc-kompatiblen Nagler. Das Schweizer Unternehmen ist Technologieführer bei Holznagel-Verarbeitungsgeräten. Der FASCO F44 AC ist das weltweit erste Nagelgerät, das magazinierte Holznägel vollautomatisch verarbeiten kann – ein Meilenstein für nachhaltiges Bauen.",
    metaDescription:
      "Fasco LignoLoc Nagelgeräte kaufen. FASCO F44 AC Holznagelgerät und Zubehör. Technologieführer für nachhaltige Befestigung.",
    categories: ["LignoLoc Geräte", "Akku-Nagler"],
    isLignoLoc: true,
    products: [
      { slug: "beck-fasco-f44-ac-lignoloc", category: "akku-nagler", title: "Beck FASCO F44 AC LignoLoc Holznagelgerät", price: 129900, isLignoLoc: true, availability: "in_stock" },
    ],
  },
  "beck--lignoloc-": {
    name: "Beck (LignoLoc)",
    subtitle: "Holznagel-Technologie",
    description:
      "Beck ist der Erfinder und Hersteller der LignoLoc Holznägel – der weltweit ersten magazinierten Holznägel für maschinelle Verarbeitung. Nachhaltige Befestigung aus verdichtetem mitteleuropäischem Buchenholz. 66 % weniger CO₂ als Stahlnägel, keine Wärmebrücken, vollständig recyclebar und bauaufsichtlich zugelassen (DIBt und ETA).",
    metaDescription:
      "Beck LignoLoc Holznägel kaufen. Nachhaltige Befestigung aus Buchenholz. 66 % weniger CO₂, bauaufsichtlich zugelassen. Komplettsortiment.",
    categories: ["LignoLoc Holznägel", "LignoLoc Geräte"],
    isLignoLoc: true,
    products: [
      { slug: "beck-fasco-f44-ac-lignoloc", category: "akku-nagler", title: "Beck FASCO F44 AC LignoLoc Holznagelgerät", price: 129900, isLignoLoc: true, availability: "in_stock" },
    ],
  },
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { brand } = await params
  const data = BRAND_DATA[brand]
  if (!data) return { title: "Marke nicht gefunden" }

  return {
    title: `${data.name} – ${data.subtitle} | Nagel Paul`,
    description: data.metaDescription,
    openGraph: {
      title: `${data.name} Produkte | Nagel Paul`,
      description: data.metaDescription,
      type: "website",
      locale: "de_DE",
    },
    alternates: {
      canonical: `https://nagel-paul.de/marken/${brand}`,
    },
  }
}

function BrandJsonLd({ brand, data }: { brand: string; data: (typeof BRAND_DATA)[string] }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${data.name} Produkte`,
        description: data.description,
        url: `https://nagel-paul.de/marken/${brand}`,
        isPartOf: {
          "@type": "WebSite",
          name: "Nagel Paul",
          url: "https://nagel-paul.de",
        },
      },
      {
        "@type": "Brand",
        name: data.name,
        description: data.description,
        url: `https://nagel-paul.de/marken/${brand}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: "https://nagel-paul.de" },
          { "@type": "ListItem", position: 2, name: "Marken", item: "https://nagel-paul.de/marken" },
          { "@type": "ListItem", position: 3, name: data.name },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { brand } = await params
  const data = BRAND_DATA[brand]
  if (!data) notFound()

  return (
    <main className="min-h-screen">
      <BrandJsonLd brand={brand} data={data} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Marken", href: "/marken" },
            { label: data.name, href: `/marken/${brand}` },
          ]}
        />

        {/* Brand header */}
        <div className="pb-8 pt-4">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#f5f5f7] text-xl font-bold text-[#1a1a2e]">
              {data.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  {data.name}
                </h1>
                {data.isLignoLoc && (
                  <span className="inline-flex items-center rounded-full bg-lignoloc-light px-3 py-1 text-sm font-semibold text-lignoloc">
                    LignoLoc
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-text-muted">{data.subtitle}</p>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-muted">
            {data.description}
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-2">
          {data.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-[#f5f5f7] px-3 py-1.5 text-sm font-medium text-text-muted"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Products */}
        <h2 className="mb-6 text-xl font-bold text-primary">
          Alle {data.name} Produkte ({data.products.length})
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {data.products.map((product) => {
            const href = `/produkte/${product.category}/${product.slug}`
            const hasDiscount =
              product.compareAtPrice !== undefined && product.compareAtPrice > product.price

            return (
              <article
                key={product.slug}
                className="group relative flex flex-col rounded-lg border border-border bg-white transition-shadow duration-200 hover:shadow-lg"
              >
                <Link href={href} className="flex flex-1 flex-col">
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

                  <div className="flex flex-1 flex-col gap-1.5 p-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      {data.name}
                    </span>
                    <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-primary transition-colors duration-150 group-hover:text-accent">
                      {product.title}
                    </h3>
                    <div className="mt-auto flex items-baseline gap-2 pt-2">
                      <span className={`text-base font-bold ${hasDiscount ? "text-accent" : "text-primary"}`}>
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
            )
          })}
        </div>

        <div className="mb-16 mt-12 text-center">
          <Link
            href="/marken"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Alle Marken anzeigen
          </Link>
        </div>
      </div>
    </main>
  )
}

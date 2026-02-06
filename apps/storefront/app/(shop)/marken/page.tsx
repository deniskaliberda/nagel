import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Unsere Marken – HiKOKI, Paslode, Prebena, BeA & mehr | Nagel Paul",
  description:
    "Qualitätsmarken für Profis: HiKOKI (Metabo HPT), Paslode, Prebena, BeA, Haubold, Senco, Fasco und Beck LignoLoc. Alle Marken bei Nagel Paul.",
}

const brands = [
  {
    slug: "hikoki",
    name: "HiKOKI",
    subtitle: "ehemals Hitachi / Metabo HPT",
    description:
      "HiKOKI (ehemals Hitachi Power Tools) ist einer der führenden Hersteller von Akku- und Druckluft-Naglern. Mit der Multi-Volt-Technologie bieten die 36V-Geräte Leistung auf Benzin-Niveau – kabellos.",
    productCount: 24,
    categories: ["Akku-Nagler", "Druckluft-Nagler", "Akkus & Ladegeräte"],
  },
  {
    slug: "paslode",
    name: "Paslode",
    subtitle: "by ITW",
    description:
      "Paslode ist der Erfinder des Gasnailers und seit Jahrzehnten die Referenz für kabellose Nagler auf der Baustelle. Die IM-Serie wird weltweit von Zimmerern geschätzt.",
    productCount: 18,
    categories: ["Gas-Nagler", "Akku-Nagler", "Streifennägel", "Brads"],
  },
  {
    slug: "prebena",
    name: "Prebena",
    subtitle: "Made in Germany",
    description:
      "Prebena steht für deutsche Qualität in der Befestigungstechnik. Das Familienunternehmen aus Schöneck fertigt seit 1951 Druckluft-Nagler und Tacker sowie die passenden Befestigungsmittel.",
    productCount: 42,
    categories: ["Druckluft-Nagler", "Tacker", "Streifennägel", "Klammern"],
  },
  {
    slug: "bea",
    name: "BeA",
    subtitle: "Joh. Friedrich Behrens AG",
    description:
      "BeA (Behrens) ist ein traditionsreicher Hersteller von Befestigungssystemen. Besonders im Bereich industrieller Tacker und Klammern ist BeA weltweit führend.",
    productCount: 35,
    categories: ["Druckluft-Nagler", "Tacker", "Klammern", "Brads"],
  },
  {
    slug: "haubold",
    name: "Haubold",
    subtitle: "by ITW",
    description:
      "Haubold bietet hochwertige Druckluft-Befestigungssysteme für den professionellen Einsatz. Besonders Brads, Pins und Klammern in höchster Qualität.",
    productCount: 28,
    categories: ["Druckluft-Nagler", "Brads & Pins", "Klammern"],
  },
  {
    slug: "senco",
    name: "Senco",
    subtitle: "by Kyocera",
    description:
      "Senco hat den pneumatischen Nagler erfunden und steht seit 1951 für Innovation in der Befestigungstechnik. Die Fusion-Technologie verbindet Akku und Druckluft.",
    productCount: 20,
    categories: ["Akku-Nagler", "Druckluft-Nagler", "Tacker"],
  },
  {
    slug: "fasco",
    name: "Fasco",
    subtitle: "by Beck",
    description:
      "Fasco (Beck Fastener Group) ist der Hersteller der LignoLoc-kompatiblen Nagler. Das Schweizer Unternehmen ist Technologieführer bei Holznagel-Verarbeitungsgeräten.",
    productCount: 12,
    categories: ["Akku-Nagler", "LignoLoc Geräte"],
    isLignoLoc: true,
  },
  {
    slug: "beck--lignoloc-",
    name: "Beck (LignoLoc)",
    subtitle: "Holznagel-Technologie",
    description:
      "Beck ist der Erfinder und Hersteller der LignoLoc Holznägel – der weltweit ersten magazinierten Holznägel für maschinelle Verarbeitung. Nachhaltige Befestigung aus Buchenholz.",
    productCount: 8,
    categories: ["LignoLoc Holznägel", "LignoLoc Geräte"],
    isLignoLoc: true,
  },
]

export default function MarkenPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-[#6b7280]">
          <li><Link href="/" className="hover:text-[#1a1a1a]">Home</Link></li>
          <li><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
          <li className="font-medium text-[#1a1a1a]">Marken</li>
        </ol>
      </nav>

      {/* Header */}
      <section className="bg-white pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
            Unsere Marken
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[#6b7280]">
            Wir führen ausschließlich Qualitätsmarken, denen Profis vertrauen.
            Von der Baustelle bis zur Werkstatt – unsere Partner stehen für
            Zuverlässigkeit, Innovation und Langlebigkeit.
          </p>
        </div>
      </section>

      {/* Brand cards */}
      <section className="bg-[#f5f5f7] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/marken/${brand.slug}`}
                className={`group rounded-xl border bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                  "isLignoLoc" in brand && brand.isLignoLoc
                    ? "border-[#2d5016]/30 hover:border-[#2d5016]"
                    : "border-[#e5e7eb] hover:border-[#e94560]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-bold text-[#1a1a1a]">
                        {brand.name}
                      </h2>
                      {"isLignoLoc" in brand && brand.isLignoLoc && (
                        <span className="rounded-full bg-[#ecfccb] px-2 py-0.5 text-xs font-semibold text-[#2d5016]">
                          LignoLoc
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#6b7280]">{brand.subtitle}</p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#f5f5f7] text-sm font-bold text-[#1a1a2e]">
                    {brand.name.charAt(0)}
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#6b7280]">
                  {brand.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {brand.categories.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-xs text-[#6b7280]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-[#6b7280]">
                    {brand.productCount} Produkte
                  </span>
                  <span className="text-sm font-medium text-[#e94560] group-hover:underline">
                    Alle Produkte ansehen →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

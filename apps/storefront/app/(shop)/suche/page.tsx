import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Suche | Nagel Paul",
  description: "Durchsuchen Sie das gesamte Sortiment von Nagel Paul – Nagler, Befestigungsmittel und Zubehör schnell finden.",
}

export default function SuchePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Search header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1a1a1a]">Suche</h1>
          <div className="mt-4">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                placeholder="Nagler, Nägel, Klammern, Marken..."
                className="w-full rounded-xl border border-[#e5e7eb] bg-white py-4 pl-12 pr-4 text-lg focus:border-[#e94560] focus:outline-none focus:ring-2 focus:ring-[#e94560]/20"
              />
            </div>
          </div>
        </div>

        {/* Popular searches */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-[#1a1a1a]">Beliebte Suchen</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Akku-Nagler",
              "Streifennägel",
              "HiKOKI",
              "LignoLoc",
              "Dachlatten Nagler",
              "Coilnägel",
              "Paslode IM90i",
              "Druckluft-Tacker",
              "Brads 18G",
              "Kompressor",
            ].map((term) => (
              <Link
                key={term}
                href={`/suche?q=${encodeURIComponent(term)}`}
                className="rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-sm text-[#1a1a1a] transition-all hover:border-[#e94560] hover:text-[#e94560]"
              >
                {term}
              </Link>
            ))}
          </div>
        </section>

        {/* Browse by category */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-[#1a1a1a]">
            Oder stöbern Sie nach Kategorie
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {[
              { label: "Druckluft-Nagler", href: "/produkte/druckluft-nagler" },
              { label: "Akku-Nagler", href: "/produkte/akku-nagler" },
              { label: "Gas-Nagler", href: "/produkte/gas-nagler" },
              { label: "Tacker", href: "/produkte/tacker" },
              { label: "Streifennägel", href: "/produkte/streifennaegel" },
              { label: "Coilnägel", href: "/produkte/coilnaegel" },
              { label: "Brads & Pins", href: "/produkte/brads" },
              { label: "Klammern", href: "/produkte/klammern" },
              { label: "LignoLoc Holznägel", href: "/produkte/lignoloc" },
              { label: "Kompressoren", href: "/produkte/kompressoren" },
              { label: "Akkus & Ladegeräte", href: "/produkte/akkus" },
              { label: "Ersatzteile", href: "/produkte/ersatzteile" },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="rounded-lg border border-[#e5e7eb] bg-white p-4 text-sm font-medium text-[#1a1a1a] transition-all hover:border-[#e94560] hover:shadow-md"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { HomeBestsellers } from "./HomeBestsellers"

export const metadata: Metadata = {
  title: "Nagel Paul – Ihr Fachhandel für Nagler, Befestigungstechnik & LignoLoc",
  description:
    "Nagler, Tacker, Nägel & Klammern vom Fachmann. HiKOKI, Paslode, Prebena, BeA & LignoLoc Holznägel. Seit über 40 Jahren Ihr Partner für Befestigungstechnik.",
  openGraph: {
    title: "Nagel Paul – Ihr Fachhandel für Befestigungstechnik",
    description:
      "Professionelle Befestigungslösungen für Handwerk und Industrie. Druckluft- und Akku-Nagler, Nägel, Klammern und LignoLoc Holznägel.",
    type: "website",
    locale: "de_DE",
  },
}

const gewerke = [
  {
    id: "zimmerer",
    label: "Zimmerer",
    description: "Dachlatten, Schalung, Holzrahmenbau",
    icon: "🏗️",
    color: "bg-amber-50 border-amber-200",
    textColor: "text-amber-900",
  },
  {
    id: "dachdecker",
    label: "Dachdecker",
    description: "Dachpappe, Dämmplatten, Lattung",
    icon: "🏠",
    color: "bg-red-50 border-red-200",
    textColor: "text-red-900",
  },
  {
    id: "trockenbauer",
    label: "Trockenbauer",
    description: "Unterkonstruktion, Dämmung, Profile",
    icon: "🧱",
    color: "bg-blue-50 border-blue-200",
    textColor: "text-blue-900",
  },
  {
    id: "schreiner",
    label: "Schreiner",
    description: "Möbelbau, Leisten, Plattenwerkstoffe",
    icon: "🪚",
    color: "bg-orange-50 border-orange-200",
    textColor: "text-orange-900",
  },
  {
    id: "bodenleger",
    label: "Bodenleger",
    description: "Parkett, Sockelleisten",
    icon: "🪵",
    color: "bg-emerald-50 border-emerald-200",
    textColor: "text-emerald-900",
  },
  {
    id: "heimwerker",
    label: "Heimwerker",
    description: "Allround-Befestigung, Holzprojekte",
    icon: "🔨",
    color: "bg-purple-50 border-purple-200",
    textColor: "text-purple-900",
  },
]

const brands = [
  "HiKOKI",
  "Paslode",
  "Prebena",
  "BeA",
  "Haubold",
  "Senco",
  "Fasco",
  "Beck (LignoLoc)",
]

function HomeJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Nagel Paul – JPS GmbH & Co. KG",
        url: "https://nagel-paul.de",
        description:
          "Fachhändler für Druckluft- und Akku-Nagler, Befestigungstechnik und LignoLoc-Holznagelsystem",
      },
      {
        "@type": "WebSite",
        name: "Nagel Paul",
        url: "https://nagel-paul.de",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://nagel-paul.de/suche?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
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

export default function HomePage() {
  return (
    <main>
      <HomeJsonLd />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1a1a2e]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#e94560]">
              Seit über 40 Jahren
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Finden Sie das richtige Werkzeug für Ihr Gewerk
            </h1>
            <p className="mt-6 text-lg text-gray-300 sm:text-xl">
              Professionelle Befestigungstechnik für Zimmerer, Dachdecker,
              Trockenbauer und Schreiner. Nagler, Tacker und Befestigungsmittel
              von den führenden Marken.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/produkte"
                className="inline-flex items-center justify-center rounded-lg bg-[#e94560] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#c81e45]"
              >
                Alle Produkte entdecken
              </Link>
              <Link
                href="/anwendungen"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Nach Anwendung suchen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f7]">
                <svg className="h-5 w-5 text-[#1a1a2e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a1a1a]">40+ Jahre Erfahrung</p>
                <p className="text-xs text-[#6b7280]">Fachhändler seit 1983</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f7]">
                <svg className="h-5 w-5 text-[#1a1a2e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a1a1a]">Fachberatung</p>
                <p className="text-xs text-[#6b7280]">Experten beraten Sie</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f7]">
                <svg className="h-5 w-5 text-[#1a1a2e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a1a1a]">Schneller Versand</p>
                <p className="text-xs text-[#6b7280]">Deutschlandweit via DHL</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f7]">
                <svg className="h-5 w-5 text-[#0f9d58]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0f9d58]">LignoLoc Partner</p>
                <p className="text-xs text-[#6b7280]">Nachhaltige Holznägel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gewerk Grid */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="text-2xl font-bold text-[#1a1a1a] md:text-3xl lg:text-4xl">
              Was ist Ihr Gewerk?
            </h2>
            <p className="mt-3 text-lg text-[#6b7280]">
              Wir empfehlen Ihnen die passenden Werkzeuge und Befestigungsmittel
              für Ihre Anwendung
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
            {gewerke.map((gewerk) => (
              <Link
                key={gewerk.id}
                href={`/anwendungen/${gewerk.id}`}
                className={`group rounded-xl border-2 p-6 transition-all hover:shadow-lg hover:-translate-y-0.5 ${gewerk.color}`}
              >
                <span className="text-3xl">{gewerk.icon}</span>
                <h3
                  className={`mt-3 text-lg font-bold ${gewerk.textColor}`}
                >
                  {gewerk.label}
                </h3>
                <p className="mt-1 text-sm text-[#6b7280]">
                  {gewerk.description}
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-[#e94560] group-hover:gap-2 transition-all">
                  Produkte ansehen
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestseller */}
      <HomeBestsellers />

      {/* LignoLoc Feature Section */}
      <section className="bg-gradient-to-br from-[#2d5016] to-[#1a3a0a] py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#ecfccb] px-3 py-1 text-sm font-semibold text-[#2d5016]">
                Nachhaltige Innovation
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                LignoLoc Holznägel
              </h2>
              <p className="mt-4 text-lg text-green-100">
                Die Revolution in der Befestigungstechnik: Nägel aus verdichtetem
                Buchenholz statt Stahl. 66% weniger CO₂, keine Wärmebrücken,
                bauaufsichtlich zugelassen.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "66% weniger CO₂-Emissionen als Stahlnägel",
                  "Keine Wärmebrücken – ideal für Dämmung",
                  "Bauaufsichtlich zugelassen (DIBt + ETA)",
                  "Recyclebar und kompostierbar",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ecfccb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-100">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/lignoloc"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-[#2d5016] transition-colors hover:bg-green-50"
                >
                  Mehr erfahren
                </Link>
                <Link
                  href="/produkte/lignoloc"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  LignoLoc Produkte
                </Link>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#1a3a0a]">
              {/* Placeholder for LignoLoc hero image */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl">🌿</span>
                  <p className="mt-4 text-lg font-medium text-green-200">
                    LignoLoc Holznägel
                  </p>
                  <p className="text-sm text-green-300">
                    Aus mitteleuropäischem Buchenholz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-xl font-bold text-[#1a1a1a] md:text-2xl">
            Unsere Marken
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
            {brands.map((brand) => (
              <Link
                key={brand}
                href={`/marken/${brand.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-")}`}
                className="flex h-20 items-center justify-center rounded-lg border border-[#e5e7eb] bg-white px-4 text-center text-sm font-semibold text-[#1a1a2e] transition-all hover:border-[#e94560] hover:shadow-md"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f5f5f7] py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] md:text-3xl">
            Nicht sicher, welches Werkzeug Sie brauchen?
          </h2>
          <p className="mt-4 text-lg text-[#6b7280]">
            Unsere Experten beraten Sie gerne. Seit über 40 Jahren helfen wir
            Handwerkern, das richtige Werkzeug für ihre Anwendung zu finden.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/anwendungen"
              className="inline-flex items-center justify-center rounded-lg bg-[#e94560] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#c81e45]"
            >
              Produkte nach Anwendung finden
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#1a1a2e] px-6 py-3 text-base font-semibold text-[#1a1a2e] transition-colors hover:bg-[#1a1a2e] hover:text-white"
            >
              Fachberatung kontaktieren
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

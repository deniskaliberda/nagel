import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LignoLoc Holznägel – Nachhaltige Befestigung aus Buchenholz | Nagel Paul",
  description:
    "LignoLoc Holznägel: 66% weniger CO₂, keine Wärmebrücken, bauaufsichtlich zugelassen. Die nachhaltige Revolution in der Befestigungstechnik. Jetzt bei Nagel Paul kaufen.",
  openGraph: {
    title: "LignoLoc Holznägel – Die nachhaltige Befestigungslösung",
    description:
      "Nägel aus verdichtetem Buchenholz: 66% weniger CO₂, keine Wärmebrücken, 50 Jahre bauaufsichtliche Zulassung.",
    type: "website",
    locale: "de_DE",
  },
}

const lignolocProducts = [
  {
    title: "LignoLoc Holznägel 3,7 x 38mm",
    slug: "lignoloc-holznaegel-37x38",
    price: 3990,
    use: "Lattung, leichte Beplankung",
  },
  {
    title: "LignoLoc Holznägel 3,7 x 50mm",
    slug: "lignoloc-holznaegel-37x50",
    price: 4490,
    use: "Dachlatten, Schalung",
  },
  {
    title: "LignoLoc Holznägel 3,7 x 65mm",
    slug: "lignoloc-holznaegel-37x65",
    price: 4990,
    use: "Holzrahmenbau, Konstruktion",
  },
  {
    title: "LignoLoc Holznägel 3,7 x 80mm",
    slug: "lignoloc-holznaegel-37x80",
    price: 5990,
    use: "Schwere Konstruktion, Balken",
  },
  {
    title: "LignoLoc Holznägel 4,7 x 65mm",
    slug: "lignoloc-holznaegel-47x65",
    price: 5490,
    use: "Dickere Verbindungen, Holzbau",
  },
  {
    title: "LignoLoc Holznägel 4,7 x 80mm",
    slug: "lignoloc-holznaegel-47x80",
    price: 6490,
    use: "Schwerer Holzbau, Tragwerk",
  },
]

const compatibleDevices = [
  {
    title: "Beck FASCO F44 AC LignoLoc",
    description: "Der erste Akku-Nagler speziell für LignoLoc Holznägel. 18V Multi-Volt System.",
    slug: "beck-fasco-f44-ac-lignoloc",
    category: "akku-nagler",
    price: 129900,
  },
  {
    title: "Beck FASCO F58 AC LignoLoc",
    description: "Für längere LignoLoc Holznägel bis 80mm. Optimiert für schweren Holzbau.",
    slug: "beck-fasco-f58-ac-lignoloc",
    category: "akku-nagler",
    price: 149900,
  },
]

const faqItems = [
  {
    question: "Was sind LignoLoc Holznägel?",
    answer:
      "LignoLoc sind die weltweit ersten magazinierten Holznägel für die maschinelle Verarbeitung. Sie bestehen aus verdichtetem mitteleuropäischem Buchenholz mit einer Dichte von 1.400 kg/m³ und werden mit speziellen LignoLoc-Naglern verarbeitet.",
  },
  {
    question: "Wie funktioniert die Verbindung?",
    answer:
      "Beim Eintreiben des Holznagels entsteht durch Reibung kurzzeitig eine Temperatur, die die Holzoberfläche plastifiziert. Es kommt zu einer Art Reibschweißen – der Nagel verschweißt sich mit dem umgebenden Holz und erzeugt eine extrem feste Verbindung.",
  },
  {
    question: "Sind LignoLoc Holznägel bauaufsichtlich zugelassen?",
    answer:
      "Ja. LignoLoc verfügt über eine allgemeine bauaufsichtliche Zulassung (DIBt) sowie eine Europäische Technische Bewertung (ETA) mit einer Nutzungsdauer von 50 Jahren.",
  },
  {
    question: "Welche Vorteile haben Holznägel gegenüber Stahlnägeln?",
    answer:
      "66% weniger CO₂-Emissionen in der Herstellung, keine Wärmebrücken (wichtig bei Dämmarbeiten), keine Korrosion, recyclebar und kompostierbar, kontrolliertes Brandverhalten (berechenbarer als Stahl), keine Metalldetektorprobleme.",
  },
  {
    question: "Kann ich LignoLoc in jedem Nagler verwenden?",
    answer:
      "Nein. LignoLoc Holznägel benötigen spezielle LignoLoc-kompatible Nagler von Beck/FASCO. Herkömmliche Nagler sind nicht geeignet, da der Eintriebsvorgang speziell abgestimmt sein muss.",
  },
  {
    question: "Für welche Anwendungen eignen sich LignoLoc?",
    answer:
      "LignoLoc eignet sich für Holzrahmenbau, Dachlatten, Schalung, Dämmplattenaufbereitung, Holzverkleidungen und überall dort, wo Wärmebrücken vermieden werden sollen. Besonders im ökologischen und nachhaltigen Bauen ist LignoLoc die erste Wahl.",
  },
]

function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(priceInCents / 100)
}

function LignoLocJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "LignoLoc Holznägel – Nachhaltige Befestigung aus Buchenholz",
    description:
      "Alles über LignoLoc Holznägel: Vorteile, Anwendungen, technische Daten und kompatible Geräte.",
    publisher: {
      "@type": "Organization",
      name: "Nagel Paul – JPS GmbH & Co. KG",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function LignoLocPage() {
  return (
    <main>
      <LignoLocJsonLd />

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-[#6b7280]">
          <li><Link href="/" className="hover:text-[#1a1a1a]">Home</Link></li>
          <li><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
          <li className="font-medium text-[#2d5016]">LignoLoc</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2d5016] to-[#1a3a0a]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-[#ecfccb] px-3 py-1 text-sm font-semibold text-[#2d5016]">
              Nachhaltige Innovation
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              LignoLoc Holznägel
            </h1>
            <p className="mt-2 text-xl text-green-200">
              Die weltweit ersten magazinierten Holznägel
            </p>
            <p className="mt-6 text-lg text-green-100">
              Aus verdichtetem mitteleuropäischem Buchenholz – 66% weniger CO₂ als
              Stahlnägel, keine Wärmebrücken, bauaufsichtlich zugelassen für 50 Jahre.
              Die Revolution in der nachhaltigen Befestigungstechnik.
            </p>
          </div>
        </div>
      </section>

      {/* What are LignoLoc? */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a]">
                Was sind Holznägel?
              </h2>
              <p className="mt-4 text-lg text-[#6b7280]">
                LignoLoc Holznägel bestehen aus verdichtetem Buchenholz mit einer
                beeindruckenden Dichte von 1.400 kg/m³ – das ist härter als viele
                Tropenhölzer. Sie werden magaziniert geliefert und mit speziellen
                LignoLoc-Naglern maschinell verarbeitet.
              </p>
              <p className="mt-4 text-lg text-[#6b7280]">
                Beim Eintreiben entsteht durch Reibung kurzzeitig eine Temperatur,
                die die Holzoberfläche plastifiziert. Es kommt zu einer Art
                <strong className="text-[#1a1a1a]"> Reibschweißen</strong> – der Nagel
                verschweißt sich mit dem umgebenden Holz und erzeugt eine extrem feste
                Verbindung, die mit Stahlnägeln vergleichbar ist.
              </p>
            </div>
            <div className="aspect-video overflow-hidden rounded-2xl bg-[#ecfccb]">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl">🌿</span>
                  <p className="mt-3 font-medium text-[#2d5016]">
                    Verdichtetes Buchenholz
                  </p>
                  <p className="text-sm text-[#2d5016]/70">1.400 kg/m³ Dichte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-[#f5f5f7] py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#1a1a1a]">
            Vorteile gegenüber Stahlnägeln
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "66% weniger CO₂",
                description:
                  "Die Herstellung von LignoLoc verursacht 66% weniger CO₂-Emissionen als vergleichbare Stahlnägel. Aus nachwachsendem Rohstoff.",
                icon: "🌍",
              },
              {
                title: "Keine Wärmebrücken",
                description:
                  "Holz leitet Wärme 400x schlechter als Stahl. Ideal bei Dämmarbeiten – keine Wärmebrücken, die den U-Wert verschlechtern.",
                icon: "🌡️",
              },
              {
                title: "Bauaufsichtlich zugelassen",
                description:
                  "Allgemeine bauaufsichtliche Zulassung (DIBt) und Europäische Technische Bewertung (ETA) mit 50 Jahren Nutzungsdauer.",
                icon: "✅",
              },
              {
                title: "Kontrolliertes Brandverhalten",
                description:
                  "Holz verkohlt kontrolliert und berechenbar – im Gegensatz zu Stahl, der bei Hitze plötzlich seine Tragfähigkeit verliert.",
                icon: "🔥",
              },
              {
                title: "Recyclebar & kompostierbar",
                description:
                  "Am Ende der Nutzungsdauer können LignoLoc-Verbindungen einfach zerkleinert und kompostiert oder thermisch verwertet werden.",
                icon: "♻️",
              },
              {
                title: "Keine Korrosion",
                description:
                  "Holz rostet nicht. Ideal für feuchte Umgebungen, Außenanwendungen und überall dort, wo Korrosion ein Problem ist.",
                icon: "💧",
              },
            ].map((advantage) => (
              <div
                key={advantage.title}
                className="rounded-xl border border-[#e5e7eb] bg-white p-6"
              >
                <span className="text-3xl">{advantage.icon}</span>
                <h3 className="mt-3 text-lg font-bold text-[#1a1a1a]">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-sm text-[#6b7280]">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Projects */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#1a1a1a]">
            Referenzprojekte
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-[#6b7280]">
            LignoLoc wird bereits in anspruchsvollen Bauprojekten eingesetzt
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "BUGA Holz-Pavillon",
                location: "Heilbronn",
                description:
                  "Der preisgekrönte BUGA-Pavillon wurde vollständig mit LignoLoc Holznägeln verbunden – ein Meilenstein für nachhaltiges Bauen.",
              },
              {
                title: "Forschungsprojekt Holzbau",
                location: "TU München",
                description:
                  "In Zusammenarbeit mit der TU München wurde die Langzeittragfähigkeit von LignoLoc-Verbindungen über 50 Jahre nachgewiesen.",
              },
              {
                title: "Ökologische Siedlung",
                location: "Vorarlberg, Österreich",
                description:
                  "Komplette Holzrahmenbau-Siedlung mit LignoLoc – konsequent metallfreie Konstruktion für maximale Nachhaltigkeit.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-xl border border-[#e5e7eb]"
              >
                <div className="aspect-video bg-[#ecfccb]">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-4xl">🏗️</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#2d5016]">
                    {project.location}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-[#1a1a1a]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6b7280]">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-[#f5f5f7] py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#1a1a1a]">
            LignoLoc Holznägel
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[#6b7280]">
            Alle verfügbaren Abmessungen
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lignolocProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/produkte/lignoloc/${product.slug}`}
                className="group rounded-xl border-2 border-[#2d5016]/20 bg-white p-5 transition-all hover:border-[#2d5016] hover:shadow-lg"
              >
                <div className="aspect-square rounded-lg bg-[#ecfccb]">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-4xl">🌿</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-[#ecfccb] px-2 py-0.5 text-xs font-semibold text-[#2d5016]">
                    LignoLoc
                  </span>
                  <h3 className="mt-2 font-bold text-[#1a1a1a] group-hover:text-[#2d5016]">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#6b7280]">{product.use}</p>
                  <p className="mt-3 text-xl font-bold text-[#1a1a1a]">
                    {formatPrice(product.price)}
                  </p>
                  <p className="text-xs text-[#6b7280]">inkl. MwSt.</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#1a1a1a]">
            Kompatible Geräte
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[#6b7280]">
            LignoLoc Holznägel benötigen spezielle Nagler – herkömmliche Geräte
            sind nicht geeignet
          </p>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            {compatibleDevices.map((device) => (
              <Link
                key={device.slug}
                href={`/produkte/${device.category}/${device.slug}`}
                className="group rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all hover:border-[#2d5016] hover:shadow-lg"
              >
                <div className="aspect-square rounded-lg bg-gray-100">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-4xl">🔧</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-[#ecfccb] px-2 py-0.5 text-xs font-semibold text-[#2d5016]">
                    LignoLoc kompatibel
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-[#1a1a1a] group-hover:text-[#2d5016]">
                    {device.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#6b7280]">
                    {device.description}
                  </p>
                  <p className="mt-3 text-xl font-bold text-[#1a1a1a]">
                    {formatPrice(device.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f5f7] py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#1a1a1a]">
            Häufige Fragen zu LignoLoc
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-[#e5e7eb] bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 text-left font-semibold text-[#1a1a1a] [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-[#6b7280] transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-[#6b7280]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d5016] py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Bereit für nachhaltiges Befestigen?
          </h2>
          <p className="mt-4 text-lg text-green-100">
            Unsere Experten beraten Sie gerne zu LignoLoc Holznägeln und den
            passenden Geräten für Ihre Anwendung.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-[#2d5016] transition-colors hover:bg-green-50"
            >
              Beratung anfordern
            </Link>
            <Link
              href="/produkte/lignoloc"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Alle LignoLoc Produkte
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

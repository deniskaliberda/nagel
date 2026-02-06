import type { Metadata } from "next"
import Link from "next/link"

interface AnwendungData {
  gewerkLabel: string
  name: string
  description: string
  expertText: string[]
  normen?: string
  recommendedDevice: {
    title: string
    brand: string
    slug: string
    category: string
    price: number
    reason: string
    specs: string[]
  }
  recommendedFastener: {
    title: string
    brand: string
    slug: string
    category: string
    price: number
    reason: string
    specs: string[]
  }
  recommendedAccessory?: {
    title: string
    brand: string
    slug: string
    category: string
    price: number
    reason: string
  }
  lignolocAlternative?: {
    title: string
    slug: string
    price: number
    reason: string
  }
  alternativeProducts: {
    title: string
    brand: string
    slug: string
    category: string
    price: number
    note: string
  }[]
}

const anwendungenData: Record<string, Record<string, AnwendungData>> = {
  zimmerer: {
    dachlatten: {
      gewerkLabel: "Zimmerer",
      name: "Dachlatten befestigen",
      description:
        "Die Befestigung von Dachlatten auf Sparren ist eine der häufigsten Anwendungen im Zimmererhandwerk. Die richtige Wahl von Nagler und Nägeln ist entscheidend für eine sichere und effiziente Arbeit.",
      expertText: [
        "Dachlatten werden in der Regel auf Sparren befestigt und dienen als Unterkonstruktion für die Dacheindeckung. Je nach Dachart und Sparrenabstand kommen unterschiedliche Lattenquerschnitte zum Einsatz – typisch sind 30x50mm oder 40x60mm Latten aus Fichte oder Tanne.",
        "Für die Befestigung eignen sich Streifennagler mit Nägeln im Bereich 50-90mm Länge, abhängig von der Lattenstärke und Sparrentiefe. Der Nagel muss mindestens 30mm in den Sparren eindringen, um eine ausreichende Auszugsfestigkeit zu gewährleisten. Bei 30mm Latten und 30mm Mindesteinschlagtiefe sind also Nägel ab 60mm Länge erforderlich.",
        "Auf dem Dach empfehlen wir Akku-Nagler, da sie unabhängig von Kompressor und Schlauch arbeiten. Das spart Zeit beim Aufbau und erhöht die Sicherheit auf der Dachfläche. Alternativ sind Gas-Nagler eine bewährte Option – sie bieten hohe Leistung bei voller Mobilität.",
      ],
      normen: "DIN 1052, Eurocode 5 (DIN EN 1995)",
      recommendedDevice: {
        title: "HiKOKI NR1890DBCL Akku-Streifennagler",
        brand: "HiKOKI",
        slug: "hikoki-nr1890dbcl",
        category: "akku-nagler",
        price: 59900,
        reason:
          "Leistungsstärkster Akku-Streifennagler am Markt. 18V/36V Multi-Volt für maximale Eintreibkraft. Ideal für Dachlatten bis 90mm Nagellänge.",
        specs: [
          "Nagellänge: 50-90mm",
          "Magazinwinkel: 34°",
          "Gewicht: 3,6 kg",
          "Akku: 18V Multi-Volt",
        ],
      },
      recommendedFastener: {
        title: "Streifennägel 34° 2,8 x 75mm ring verzinkt",
        brand: "Prebena",
        slug: "prebena-streifennaegel-28x75-ring",
        category: "streifennaegel",
        price: 2990,
        reason:
          "Ringnägel für maximale Auszugsfestigkeit. Feuerverzinkt für Außenanwendung. 34° Magazinwinkel passend für HiKOKI-Nagler.",
        specs: [
          "Durchmesser: 2,8mm",
          "Länge: 75mm",
          "Magazinwinkel: 34°",
          "Oberfläche: feuerverzinkt",
        ],
      },
      recommendedAccessory: {
        title: "HiKOKI BSL36A18 Multi-Volt Akku 5.0Ah",
        brand: "HiKOKI",
        slug: "hikoki-bsl36a18-akku",
        category: "akkus",
        price: 12900,
        reason:
          "Zusatzakku für unterbrechungsfreies Arbeiten. 5.0Ah Kapazität reicht für ca. 800 Nägel pro Ladung.",
      },
      lignolocAlternative: {
        title: "LignoLoc Holznägel 3,7 x 65mm",
        slug: "lignoloc-holznaegel-37x65",
        price: 4990,
        reason:
          "Nachhaltige Alternative ohne Wärmebrücken. Besonders sinnvoll bei gedämmten Dachkonstruktionen, wo Stahlnägel als Wärmebrücke wirken. Benötigt LignoLoc-kompatiblen Nagler.",
      },
      alternativeProducts: [
        {
          title: "Paslode IM90i Li Gasnagler",
          brand: "Paslode",
          slug: "paslode-im90i",
          category: "gas-nagler",
          price: 89900,
          note: "Gas-Alternative: bewährt, höheres Nagelgewicht pro Ladung",
        },
        {
          title: "HiKOKI NR90GC1 Druckluft-Streifennagler",
          brand: "HiKOKI",
          slug: "hikoki-nr90gc1",
          category: "druckluft-nagler",
          price: 32900,
          note: "Günstigere Druckluft-Variante (Kompressor erforderlich)",
        },
      ],
    },
    schalung: {
      gewerkLabel: "Zimmerer",
      name: "Schalung nageln",
      description:
        "Schalungsbretter für Beton oder Dachschalung werden mit leistungsstarken Naglern befestigt. Je nach Holzdicke sind verschiedene Nagellängen erforderlich.",
      expertText: [
        "Schalungsarbeiten erfordern schnelles, zuverlässiges Nageln großer Flächen. Ob Beton-Schalung auf der Baustelle oder Dachschalung als Alternative zur Lattung – die Anforderungen an das Werkzeug sind hoch.",
        "Für Schalungsbretter bis 24mm Dicke empfehlen sich Nägel mit 50-65mm Länge. Bei dickeren Brettern oder Beplankung auf Unterkonstruktion sind 75-90mm Nägel notwendig. Coilnagler bieten hier den Vorteil einer höheren Magazinkapazität (200-300 Nägel vs. 60 bei Streifennaglern).",
        "Bei großflächiger Verschalung lohnt sich ein Coilnagler wegen der geringeren Nachladefrequenz. Für gemischte Arbeiten am Dach empfehlen wir einen Streifennagler – er ist vielseitiger einsetzbar.",
      ],
      normen: "DIN 1052, Eurocode 5",
      recommendedDevice: {
        title: "HiKOKI NV90AB Druckluft-Coilnagler",
        brand: "HiKOKI",
        slug: "hikoki-nv90ab",
        category: "druckluft-nagler",
        price: 44900,
        reason: "Coilnagler mit 300 Nägel Magazinkapazität. Ideal für großflächige Schalungsarbeiten ohne ständiges Nachladen.",
        specs: ["Nagellänge: 45-90mm", "Magazin: Coil, 300 Nägel", "Gewicht: 2,9 kg", "Antrieb: Druckluft 5-8 bar"],
      },
      recommendedFastener: {
        title: "Coilnägel 2,5 x 65mm ring verzinkt",
        brand: "Prebena",
        slug: "prebena-coilnaegel-25x65",
        category: "coilnaegel",
        price: 3490,
        reason: "Ringnägel im Coil-Magazin für maximale Effizienz. 300 Nägel pro Coil.",
        specs: ["Durchmesser: 2,5mm", "Länge: 65mm", "Coil: 15°", "Oberfläche: feuerverzinkt"],
      },
      alternativeProducts: [],
    },
  },
  dachdecker: {
    dachpappe: {
      gewerkLabel: "Dachdecker",
      name: "Dachpappe befestigen",
      description:
        "Dachpappe und Bitumenbahnen werden mit Breitkopfklammern und Druckluft-Tackern fixiert. Die richtige Klammerbreite ist entscheidend für die Haltbarkeit.",
      expertText: [
        "Die Befestigung von Dachpappe und Bitumenbahnen auf Holzschalung erfolgt mit Breitkopfklammern. Diese haben einen breiten Rücken, der die Bahn flächig niederdrückt, ohne sie zu durchstanzen.",
        "Verwenden Sie Klammern mit mindestens 10mm Rückenbreite und einer Länge von 19-25mm je nach Untergrund. Bei weicherem Holz genügen kürzere Klammern, bei Hartholz oder mehrlagiger Verlegung sollten Sie längere wählen.",
        "Druckluft-Tacker sind hier die erste Wahl, da sie leicht und schnell sind. Der Klammerabstand sollte an den Bahnrändern ca. 10cm betragen, in der Fläche 15-20cm.",
      ],
      recommendedDevice: {
        title: "Prebena Druckluft-Tacker 4C-Z50",
        brand: "Prebena",
        slug: "prebena-4c-z50",
        category: "tacker",
        price: 29900,
        reason: "Robuster Breitrücken-Tacker für Dacharbeiten. Zuverlässig auch bei niedrigen Temperaturen.",
        specs: ["Klammernbreite: 12,8mm", "Klammernlänge: 16-50mm", "Gewicht: 1,8 kg", "Antrieb: Druckluft"],
      },
      recommendedFastener: {
        title: "Breitrückenklammern 12,8 x 25mm verzinkt",
        brand: "Prebena",
        slug: "prebena-klammern-128x25",
        category: "klammern",
        price: 1290,
        reason: "Breiter Rücken verhindert Durchstanzen der Dachpappe. Verzinkt für Außeneinsatz.",
        specs: ["Breite: 12,8mm", "Länge: 25mm", "Draht: 1,0mm", "Oberfläche: verzinkt"],
      },
      alternativeProducts: [],
    },
  },
}

function formatPrice(cents: number): string {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(cents / 100)
}

function getAnwendungData(gewerk: string, anwendung: string): AnwendungData | null {
  return anwendungenData[gewerk]?.[anwendung] ?? null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ gewerk: string; anwendung: string }>
}): Promise<Metadata> {
  const { gewerk, anwendung } = await params
  const data = getAnwendungData(gewerk, anwendung)

  if (!data) {
    const anwendungName = anwendung.replace(/-/g, " ")
    return {
      title: `${anwendungName} | Nagel Paul`,
      description: `Empfohlene Produkte für ${anwendungName} bei Nagel Paul.`,
    }
  }

  return {
    title: `${data.name} – Empfohlene Werkzeuge & Befestigungsmittel | Nagel Paul`,
    description: `${data.description} Finden Sie die passenden Nagler und Nägel für ${data.name} bei Nagel Paul.`,
    openGraph: {
      title: `${data.name} – ${data.gewerkLabel}`,
      description: data.description,
      type: "article",
      locale: "de_DE",
    },
  }
}

function AnwendungJsonLd({
  data,
  gewerk,
  anwendung,
}: {
  data: AnwendungData
  gewerk: string
  anwendung: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: data.name,
        description: data.description,
        publisher: {
          "@type": "Organization",
          name: "Nagel Paul – JPS GmbH & Co. KG",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://nagel-paul.de" },
          { "@type": "ListItem", position: 2, name: "Anwendungen", item: "https://nagel-paul.de/anwendungen" },
          { "@type": "ListItem", position: 3, name: data.gewerkLabel, item: `https://nagel-paul.de/anwendungen/${gewerk}` },
          { "@type": "ListItem", position: 4, name: data.name, item: `https://nagel-paul.de/anwendungen/${gewerk}/${anwendung}` },
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

export default async function AnwendungPage({
  params,
}: {
  params: Promise<{ gewerk: string; anwendung: string }>
}) {
  const { gewerk, anwendung } = await params
  const data = getAnwendungData(gewerk, anwendung)

  if (!data) {
    const anwendungName = anwendung.replace(/-/g, " ")
    const gewerkName = gewerk.replace(/-/g, " ")

    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-[#6b7280]">
              <li><Link href="/" className="hover:text-[#1a1a1a]">Home</Link></li>
              <li><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
              <li><Link href="/anwendungen" className="hover:text-[#1a1a1a]">Anwendungen</Link></li>
              <li><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
              <li><Link href={`/anwendungen/${gewerk}`} className="capitalize hover:text-[#1a1a1a]">{gewerkName}</Link></li>
              <li><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
              <li className="font-medium capitalize text-[#1a1a1a]">{anwendungName}</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold capitalize text-[#1a1a1a]">{anwendungName}</h1>
          <p className="mt-4 text-lg text-[#6b7280]">
            Detaillierte Produktempfehlungen für diese Anwendung werden in Kürze verfügbar sein.
            Kontaktieren Sie uns gerne für eine persönliche Fachberatung.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-flex rounded-lg bg-[#e94560] px-6 py-3 text-sm font-semibold text-white hover:bg-[#c81e45]"
          >
            Fachberatung kontaktieren
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      <AnwendungJsonLd data={data} gewerk={gewerk} anwendung={anwendung} />

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-[#6b7280]">
          <li><Link href="/" className="hover:text-[#1a1a1a]">Home</Link></li>
          <li><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
          <li><Link href="/anwendungen" className="hover:text-[#1a1a1a]">Anwendungen</Link></li>
          <li><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
          <li><Link href={`/anwendungen/${gewerk}`} className="hover:text-[#1a1a1a]">{data.gewerkLabel}</Link></li>
          <li><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
          <li className="font-medium text-[#1a1a1a]">{data.name}</li>
        </ol>
      </nav>

      {/* Header */}
      <section className="bg-white pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-[#6b7280]">
            {data.gewerkLabel}
          </span>
          <h1 className="mt-3 text-3xl font-bold text-[#1a1a1a] md:text-4xl">
            {data.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[#6b7280]">
            {data.description}
          </p>
          {data.normen && (
            <p className="mt-2 text-sm text-[#6b7280]">
              Relevante Normen: <span className="font-medium text-[#1a1a1a]">{data.normen}</span>
            </p>
          )}
        </div>
      </section>

      {/* Expert text */}
      <section className="bg-[#f5f5f7] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-[#1a1a1a]">
              Das sollten Sie wissen
            </h2>
            <div className="space-y-4">
              {data.expertText.map((paragraph, i) => (
                <p key={i} className="text-[#6b7280] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Combination */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-2xl font-bold text-[#1a1a1a]">
            Unsere Empfehlung
          </h2>
          <p className="mb-8 text-[#6b7280]">
            Die optimale Kombination für {data.name.toLowerCase()}
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Device */}
            <div className="rounded-xl border-2 border-[#e94560]/20 bg-white p-6">
              <span className="inline-flex items-center rounded-full bg-[#e94560]/10 px-2.5 py-0.5 text-xs font-semibold text-[#e94560]">
                Gerät
              </span>
              <div className="mt-4 aspect-square rounded-lg bg-gray-100">
                <div className="flex h-full items-center justify-center">
                  <span className="text-4xl">🔧</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-[#6b7280]">{data.recommendedDevice.brand}</p>
                <h3 className="mt-1 font-bold text-[#1a1a1a]">
                  {data.recommendedDevice.title}
                </h3>
                <p className="mt-2 text-sm text-[#6b7280]">
                  {data.recommendedDevice.reason}
                </p>
                <ul className="mt-3 space-y-1">
                  {data.recommendedDevice.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-[#6b7280]">
                      <svg className="h-3 w-3 text-[#0f9d58]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-[#1a1a1a]">
                    {formatPrice(data.recommendedDevice.price)}
                  </span>
                  <Link
                    href={`/produkte/${data.recommendedDevice.category}/${data.recommendedDevice.slug}`}
                    className="rounded-lg bg-[#e94560] px-4 py-2 text-sm font-semibold text-white hover:bg-[#c81e45]"
                  >
                    Ansehen
                  </Link>
                </div>
              </div>
            </div>

            {/* Fastener */}
            <div className="rounded-xl border-2 border-[#4285f4]/20 bg-white p-6">
              <span className="inline-flex items-center rounded-full bg-[#4285f4]/10 px-2.5 py-0.5 text-xs font-semibold text-[#4285f4]">
                Befestigungsmittel
              </span>
              <div className="mt-4 aspect-square rounded-lg bg-gray-100">
                <div className="flex h-full items-center justify-center">
                  <span className="text-4xl">📌</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-[#6b7280]">{data.recommendedFastener.brand}</p>
                <h3 className="mt-1 font-bold text-[#1a1a1a]">
                  {data.recommendedFastener.title}
                </h3>
                <p className="mt-2 text-sm text-[#6b7280]">
                  {data.recommendedFastener.reason}
                </p>
                <ul className="mt-3 space-y-1">
                  {data.recommendedFastener.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-[#6b7280]">
                      <svg className="h-3 w-3 text-[#0f9d58]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-[#1a1a1a]">
                    {formatPrice(data.recommendedFastener.price)}
                  </span>
                  <Link
                    href={`/produkte/${data.recommendedFastener.category}/${data.recommendedFastener.slug}`}
                    className="rounded-lg bg-[#4285f4] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3367d6]"
                  >
                    Ansehen
                  </Link>
                </div>
              </div>
            </div>

            {/* Accessory */}
            {data.recommendedAccessory && (
              <div className="rounded-xl border-2 border-[#6b7280]/20 bg-white p-6">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-[#6b7280]">
                  Zubehör
                </span>
                <div className="mt-4 aspect-square rounded-lg bg-gray-100">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-4xl">🔋</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-[#6b7280]">{data.recommendedAccessory.brand}</p>
                  <h3 className="mt-1 font-bold text-[#1a1a1a]">
                    {data.recommendedAccessory.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6b7280]">
                    {data.recommendedAccessory.reason}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-[#1a1a1a]">
                      {formatPrice(data.recommendedAccessory.price)}
                    </span>
                    <Link
                      href={`/produkte/${data.recommendedAccessory.category}/${data.recommendedAccessory.slug}`}
                      className="rounded-lg border border-[#e5e7eb] px-4 py-2 text-sm font-semibold text-[#1a1a1a] hover:bg-gray-50"
                    >
                      Ansehen
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* LignoLoc Alternative */}
      {data.lignolocAlternative && (
        <section className="bg-gradient-to-r from-[#2d5016] to-[#1a3a0a] py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full bg-[#ecfccb] px-3 py-1 text-xs font-semibold text-[#2d5016]">
                  Nachhaltige Alternative
                </span>
                <h2 className="mt-3 text-2xl font-bold text-white">
                  {data.lignolocAlternative.title}
                </h2>
                <p className="mt-2 text-green-100">
                  {data.lignolocAlternative.reason}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-white">
                  {formatPrice(data.lignolocAlternative.price)}
                </span>
                <Link
                  href={`/produkte/lignoloc/${data.lignolocAlternative.slug}`}
                  className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#2d5016] hover:bg-green-50"
                >
                  LignoLoc ansehen
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Alternative Products */}
      {data.alternativeProducts.length > 0 && (
        <section className="bg-[#f5f5f7] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-bold text-[#1a1a1a]">
              Weitere Optionen
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {data.alternativeProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/produkte/${product.category}/${product.slug}`}
                  className="group flex gap-4 rounded-xl border border-[#e5e7eb] bg-white p-4 transition-all hover:shadow-md"
                >
                  <div className="h-24 w-24 flex-shrink-0 rounded-lg bg-gray-100" />
                  <div>
                    <p className="text-xs text-[#6b7280]">{product.brand}</p>
                    <h3 className="font-semibold text-[#1a1a1a] group-hover:text-[#e94560]">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#6b7280]">{product.note}</p>
                    <p className="mt-2 font-bold text-[#1a1a1a]">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            Nicht sicher, welche Kombination die richtige ist?
          </h2>
          <p className="mt-3 text-[#6b7280]">
            Unsere Fachberater kennen sich mit {data.name.toLowerCase()} bestens aus und
            helfen Ihnen, die optimale Lösung für Ihr Projekt zu finden.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/kontakt"
              className="inline-flex rounded-lg bg-[#e94560] px-6 py-3 text-sm font-semibold text-white hover:bg-[#c81e45]"
            >
              Beratung anfordern
            </Link>
            <Link
              href={`/anwendungen/${gewerk}`}
              className="inline-flex rounded-lg border-2 border-[#1a1a2e] px-6 py-3 text-sm font-semibold text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white"
            >
              Alle {data.gewerkLabel}-Anwendungen
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

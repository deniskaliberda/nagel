import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Über uns – Seit über 40 Jahren Ihr Fachhandel für Befestigungstechnik | Nagel Paul",
  description:
    "Nagel Paul (JPS GmbH & Co. KG) – Ihr Spezialist für Druckluft- und Akku-Nagler, Befestigungstechnik und LignoLoc Holznägel. Familienunternehmen bei München mit über 40 Jahren Erfahrung.",
}

export default function UeberUnsPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <nav
        className="mx-auto max-w-4xl px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center gap-2 text-sm text-[#6b7280]">
          <li>
            <Link href="/" className="hover:text-[#1a1a1a]">
              Home
            </Link>
          </li>
          <li>
            <svg
              className="h-4 w-4"
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
          </li>
          <li className="font-medium text-[#1a1a1a]">Über uns</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Über Nagel Paul
        </h1>
        <p className="mt-4 text-lg text-[#6b7280]">
          Seit über 40 Jahren steht Nagel Paul für kompetente Fachberatung und
          ein umfassendes Sortiment in der Befestigungstechnik. Als
          Familienunternehmen im Raum München verbinden wir Tradition mit
          Innovation – und sind heute einer der führenden Fachhändler
          Deutschlands für Nagler, Tacker und professionelle
          Befestigungslösungen.
        </p>

        {/* History */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            Unsere Geschichte
          </h2>
          <div className="mt-4 space-y-4 text-[#6b7280]">
            <p>
              Was in den 1980er Jahren als kleiner Fachhandel für
              Druckluftwerkzeuge begann, hat sich zu einem der umfassendsten
              Spezialisten für Befestigungstechnik in Deutschland entwickelt.
              Die JPS GmbH &amp; Co. KG – bekannt unter der Marke Nagel Paul –
              wurde als Familienunternehmen gegründet und wird bis heute mit
              derselben Leidenschaft geführt.
            </p>
            <p>
              Von Anfang an war unser Anspruch klar: Wir wollen nicht einfach
              nur Werkzeuge verkaufen, sondern unseren Kunden die passende
              Lösung für ihre Anwendung bieten. Denn wer auf der Baustelle oder
              in der Werkstatt arbeitet, braucht Zuverlässigkeit – bei den
              Produkten ebenso wie bei der Beratung.
            </p>
            <p>
              Heute betreuen wir über 10.000 Kunden deutschlandweit, darunter
              Zimmereien, Dachdeckerbetriebe, Trockenbaufirmen, Schreinereien
              und Baufirmen jeder Größe. Unser Sortiment umfasst die führenden
              Marken der Branche: HiKOKI, Paslode, Prebena, BeA, Haubold,
              Senco, Fasco und Beck (LignoLoc).
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            Wofür wir stehen
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Fachkompetenz",
                text: "Unser Team besteht aus ausgebildeten Fachleuten mit praktischer Erfahrung im Handwerk. Wir kennen jede Anwendung, jedes Gerät und jedes Befestigungsmittel – und beraten Sie ehrlich und herstellerunabhängig.",
              },
              {
                title: "Vollsortiment",
                text: "Von der einzelnen Klammer bis zum kompletten Druckluftsystem: Wir führen alles, was Sie für professionelle Befestigungstechnik brauchen. Über 5.000 Artikel von den führenden Marken der Branche.",
              },
              {
                title: "Zuverlässigkeit",
                text: "Schnelle Lieferung, faire Preise, ehrliche Beratung. Unsere B2B-Stammkunden schätzen die unkomplizierte Zusammenarbeit und die Verlässlichkeit, die einen guten Fachhandel ausmacht.",
              },
              {
                title: "Innovation",
                text: "Als einer der wenigen deutschen Händler führen wir das komplette LignoLoc-Holznagel-Sortiment. Wir beobachten den Markt, testen neue Produkte und bringen die besten Innovationen zu Ihnen.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-[#e5e7eb] p-5"
              >
                <h3 className="font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#6b7280]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Facts */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            Nagel Paul in Zahlen
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "40+", label: "Jahre Erfahrung" },
              { value: "10.000+", label: "Kunden" },
              { value: "5.000+", label: "Artikel" },
              { value: "8", label: "Premiummarken" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg bg-[#f5f5f7] p-4 text-center"
              >
                <p className="text-2xl font-bold text-[#e94560]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[#6b7280]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specialization */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            Unsere Spezialisierung
          </h2>
          <p className="mt-3 text-[#6b7280]">
            Befestigungstechnik ist unser Kerngeschäft – und das seit über vier
            Jahrzehnten. Wir haben uns bewusst auf diesen Bereich spezialisiert,
            weil wir glauben, dass tiefes Fachwissen mehr wert ist als ein
            breites, aber oberflächliches Sortiment.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Druckluft-Nagler und Tacker aller führenden Hersteller",
              "Akku-Nagler: Kabellos nageln mit modernster Technologie",
              "Gas-Nagler: Die bewährte Lösung für maximale Mobilität",
              "Befestigungsmittel: Streifennägel, Coilnägel, Brads, Pins, Klammern und Schrauben",
              "LignoLoc Holznägel: Die nachhaltige Revolution in der Befestigungstechnik",
              "Kompressoren, Schläuche, Kupplungen und Zubehör",
              "Ersatzteile und Verschleißteile für alle geführten Marken",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#e94560]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[#1a1a1a]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Authorized Dealer */}
        <section className="mt-10 rounded-lg bg-[#f5f5f7] p-6">
          <h2 className="text-xl font-bold text-[#1a1a1a]">
            Autorisierter Fachhändler
          </h2>
          <p className="mt-3 text-sm text-[#6b7280]">
            Nagel Paul ist autorisierter Fachhändler für alle geführten Marken.
            Das bedeutet für Sie: Sie erhalten ausschließlich Originalware mit
            voller Herstellergarantie, Zugang zu Ersatzteilen und den
            qualifizierten Service, den nur ein autorisierter Partner bieten
            kann. Wir werden regelmäßig von unseren Herstellerpartnern geschult
            und sind immer auf dem neuesten Stand der Technik.
          </p>
        </section>

        {/* LignoLoc */}
        <section className="mt-10 rounded-lg border-2 border-[#2d5016]/20 bg-[#ecfccb]/30 p-6">
          <span className="inline-flex items-center rounded-full bg-[#ecfccb] px-2.5 py-0.5 text-xs font-semibold text-[#2d5016]">
            Nachhaltige Innovation
          </span>
          <h2 className="mt-3 text-xl font-bold text-[#1a1a1a]">
            LignoLoc-Kompetenz bei Nagel Paul
          </h2>
          <p className="mt-3 text-sm text-[#6b7280]">
            Als einer der wenigen deutschen Händler führen wir das komplette
            LignoLoc-Sortiment: Holznägel in allen verfügbaren Abmessungen
            sowie die kompatiblen Nagler von Beck/FASCO. Wir beraten Sie
            umfassend zum Einsatz von LignoLoc in Ihren Projekten – vom
            Holzrahmenbau bis zur Dämmung.
          </p>
          <Link
            href="/lignoloc"
            className="mt-4 inline-flex items-center text-sm font-medium text-[#2d5016] hover:underline"
          >
            Mehr über LignoLoc erfahren →
          </Link>
        </section>

        {/* CTA */}
        <section className="mt-10 rounded-lg bg-[#1a1a2e] p-6 text-white sm:p-8">
          <h2 className="text-xl font-bold">
            Lernen Sie uns kennen
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Ob persönliche Beratung, Großbestellung oder einfach eine Frage zu
            unseren Produkten – wir freuen uns auf den Kontakt mit Ihnen.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-lg bg-[#e94560] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#c81e45]"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/beratung"
              className="inline-flex items-center rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Fachberatung
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

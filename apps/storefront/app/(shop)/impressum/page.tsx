import type { Metadata } from "next"
import Breadcrumbs from "@/components/navigation/Breadcrumbs"

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der JPS GmbH & Co. KG (Nagel Paul) – Angaben gemäß § 5 TMG.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
}

export default function ImpressumPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Impressum", href: "/impressum" }]} />
      </div>

      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary">Impressum</h1>
        <p className="mt-2 text-sm text-text-muted">Angaben gemäß § 5 TMG</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-700">
          <section>
            <h2 className="text-lg font-semibold text-primary">Anbieter</h2>
            <address className="mt-3 not-italic">
              <p className="font-medium">JPS GmbH &amp; Co. KG</p>
              <p>Nagel Paul – Fachhandel für Befestigungstechnik</p>
              <p className="mt-2">Musterstraße 1</p>
              <p>85xxx München-Umgebung</p>
              <p>Deutschland</p>
            </address>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">Kontakt</h2>
            <div className="mt-3 space-y-1">
              <p>Telefon: 089 / 904 29 28 0</p>
              <p>E-Mail: info@nagel-paul.de</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">Vertretungsberechtigte Gesellschafter</h2>
            <p className="mt-3">
              Persönlich haftende Gesellschafterin: JPS Verwaltungs GmbH<br />
              Geschäftsführer: [Name des Geschäftsführers]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">Handelsregister</h2>
            <div className="mt-3 space-y-1">
              <p>Registergericht: Amtsgericht München</p>
              <p>Registernummer: HRA XXXXX</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">Umsatzsteuer-Identifikationsnummer</h2>
            <p className="mt-3">
              USt-IdNr. gemäß § 27a Umsatzsteuergesetz: DE XXXXXXXXX
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">Streitschlichtung</h2>
            <p className="mt-3">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">Haftung für Inhalte</h2>
            <p className="mt-3">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">Haftung für Links</h2>
            <p className="mt-3">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">Urheberrecht</h2>
            <p className="mt-3">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
              gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}

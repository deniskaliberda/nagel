import type { Metadata } from "next"
import Breadcrumbs from "@/components/navigation/Breadcrumbs"

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB)",
  description: "AGB der JPS GmbH & Co. KG (Nagel Paul) – Allgemeine Geschäftsbedingungen für den Online-Shop.",
  alternates: { canonical: "/agb" },
  robots: { index: true, follow: true },
}

export default function AGBPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "AGB", href: "/agb" }]} />
      </div>

      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary">Allgemeine Geschäftsbedingungen</h1>
        <p className="mt-2 text-sm text-text-muted">Stand: Februar 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-700">
          <section>
            <h2 className="text-lg font-semibold text-primary">§ 1 Geltungsbereich</h2>
            <p className="mt-3">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die über den
              Online-Shop der JPS GmbH &amp; Co. KG (nachfolgend &quot;Verkäufer&quot;) geschlossen
              werden. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der
              Verkäufer stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">§ 2 Vertragsschluss</h2>
            <p className="mt-3">
              Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot,
              sondern eine Aufforderung zur Bestellung dar. Mit dem Absenden der Bestellung geben Sie
              ein verbindliches Angebot ab. Die Auftragsbestätigung per E-Mail stellt die Annahme
              Ihres Angebots dar.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">§ 3 Preise und Zahlung</h2>
            <p className="mt-3">
              Alle angegebenen Preise sind Endpreise und enthalten die gesetzliche Mehrwertsteuer.
              Versandkosten werden gesondert ausgewiesen und sind vom Kunden zu tragen.
              Folgende Zahlungsarten stehen zur Verfügung:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Kreditkarte (Visa, Mastercard)</li>
              <li>PayPal</li>
              <li>SEPA-Lastschrift</li>
              <li>Kauf auf Rechnung (über Klarna)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">§ 4 Lieferung und Versand</h2>
            <p className="mt-3">
              Die Lieferung erfolgt deutschlandweit per DHL. Für schwere oder sperrige Artikel wird
              ggf. ein Palettenversand organisiert. Standardlieferzeit beträgt 2–5 Werktage.
              Expresslieferung ist gegen Aufpreis möglich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">§ 5 Eigentumsvorbehalt</h2>
            <p className="mt-3">
              Die Ware bleibt bis zur vollständigen Bezahlung Eigentum des Verkäufers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">§ 6 Gewährleistung</h2>
            <p className="mt-3">
              Es gelten die gesetzlichen Gewährleistungsrechte. Bei gebrauchten Waren beträgt die
              Gewährleistungsfrist ein Jahr ab Lieferung. Bei neuen Waren gelten die gesetzlichen
              Gewährleistungsfristen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">§ 7 Widerrufsrecht</h2>
            <p className="mt-3">
              Verbraucher haben ein 14-tägiges Widerrufsrecht. Details entnehmen Sie bitte unserer
              gesonderten Widerrufsbelehrung.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">§ 8 Haftung</h2>
            <p className="mt-3">
              Der Verkäufer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Bei leichter
              Fahrlässigkeit haftet der Verkäufer nur bei Verletzung wesentlicher Vertragspflichten
              und nur für den vorhersehbaren, typischerweise eintretenden Schaden.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">§ 9 Schlussbestimmungen</h2>
            <p className="mt-3">
              Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für alle
              Streitigkeiten aus diesem Vertragsverhältnis ist München, sofern der Kunde Kaufmann
              ist oder keinen allgemeinen Gerichtsstand in Deutschland hat.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}

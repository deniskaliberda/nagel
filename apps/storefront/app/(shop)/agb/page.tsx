import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB) | Nagel Paul",
  description:
    "Allgemeine Geschäftsbedingungen der JPS GmbH & Co. KG (Nagel Paul) für den Online-Shop. Regelungen zu Bestellung, Preisen, Lieferung, Zahlung, Gewährleistung und Haftung.",
}

export default function AGBPage() {
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
          <li className="font-medium text-[#1a1a1a]">AGB</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="mt-4 text-sm text-[#6b7280]">
          der JPS GmbH &amp; Co. KG (Nagel Paul) für den Online-Shop
          www.nagel-paul.de – Stand: Januar 2025
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-[#6b7280]">
          {/* § 1 */}
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a]">
              § 1 Geltungsbereich
            </h2>
            <div className="mt-3 space-y-2">
              <p>
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend &quot;AGB&quot;)
                der JPS GmbH &amp; Co. KG, Musterstra&szlig;e 12, 85748
                Garching bei München (nachfolgend &quot;Verkäufer&quot;), gelten für alle
                Verträge, die ein Verbraucher oder Unternehmer (nachfolgend
                &quot;Kunde&quot;) mit dem Verkäufer über den Online-Shop
                www.nagel-paul.de abschlie&szlig;t.
              </p>
              <p>
                (2) Für Verträge mit Unternehmern im Sinne von § 14 BGB gelten
                diese AGB in ihrer jeweils gültigen Fassung auch als
                Rahmenvereinbarung für künftige Verträge, ohne dass der
                Verkäufer in jedem Einzelfall erneut auf sie hinweisen muss.
              </p>
              <p>
                (3) Abweichende, entgegenstehende oder ergänzende AGB des
                Kunden werden nur dann Vertragsbestandteil, wenn der Verkäufer
                ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
              </p>
            </div>
          </section>

          {/* § 2 */}
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a]">
              § 2 Vertragsschluss
            </h2>
            <div className="mt-3 space-y-2">
              <p>
                (1) Die Darstellung der Produkte im Online-Shop stellt kein
                rechtlich bindendes Angebot, sondern eine Aufforderung zur
                Abgabe einer Bestellung dar (invitatio ad offerendum).
              </p>
              <p>
                (2) Durch Anklicken des Buttons &quot;Zahlungspflichtig bestellen&quot;
                gibt der Kunde ein verbindliches Kaufangebot ab. Unmittelbar
                nach Absenden der Bestellung erhält der Kunde eine
                automatische Eingangsbestätigung per E-Mail, die noch keine
                Annahme des Angebots darstellt.
              </p>
              <p>
                (3) Der Vertrag kommt zustande, wenn der Verkäufer die
                Bestellung durch eine Auftragsbestätigung per E-Mail annimmt
                oder die Ware liefert.
              </p>
            </div>
          </section>

          {/* § 3 */}
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a]">
              § 3 Preise und Zahlung
            </h2>
            <div className="mt-3 space-y-2">
              <p>
                (1) Alle im Online-Shop angegebenen Preise sind Endpreise und
                verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
                Versandkosten werden gesondert ausgewiesen und kommen zum
                Warenpreis hinzu, sofern nicht ausdrücklich anders angegeben.
              </p>
              <p>
                (2) Ab einem Bestellwert von 149,00 € (brutto) erfolgt die
                Lieferung innerhalb Deutschlands per DHL Standardversand
                versandkostenfrei.
              </p>
              <p>
                (3) Dem Kunden stehen folgende Zahlungsarten zur Verfügung:
                Kreditkarte (Visa, Mastercard), PayPal, SEPA-Lastschrift und
                Kauf auf Rechnung (über Klarna). Der Verkäufer behält sich vor,
                einzelne Zahlungsarten im Einzelfall auszuschlie&szlig;en.
              </p>
              <p>
                (4) Bei Kauf auf Rechnung (Klarna) beträgt das Zahlungsziel
                14 Tage ab Rechnungsdatum. Für B2B-Kunden können abweichende
                Zahlungsziele vereinbart werden.
              </p>
              <p>
                (5) Gerät der Kunde in Zahlungsverzug, ist der Verkäufer
                berechtigt, Verzugszinsen in Höhe von 5 Prozentpunkten über
                dem Basiszinssatz (bei Verbrauchern) bzw. 9 Prozentpunkten
                über dem Basiszinssatz (bei Unternehmern) zu verlangen.
              </p>
            </div>
          </section>

          {/* § 4 */}
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a]">
              § 4 Lieferung und Versand
            </h2>
            <div className="mt-3 space-y-2">
              <p>
                (1) Die Lieferung erfolgt an die vom Kunden angegebene
                Lieferadresse innerhalb Deutschlands. Der Versand erfolgt in
                der Regel über DHL. Bei schweren oder sperrigen Artikeln
                behält sich der Verkäufer den Versand per Spedition vor.
              </p>
              <p>
                (2) Die Lieferzeit beträgt, sofern auf der Produktseite nicht
                anders angegeben, 2–3 Werktage (Standardversand) bzw. 1
                Werktag (Expressversand, bei Bestellung bis 14:00 Uhr
                werktags).
              </p>
              <p>
                (3) Ist die bestellte Ware vorübergehend nicht verfügbar,
                informiert der Verkäufer den Kunden unverzüglich. Bei einer
                Lieferverzögerung von mehr als 14 Tagen hat der Kunde das
                Recht, vom Vertrag zurückzutreten.
              </p>
              <p>
                (4) Teillieferungen sind zulässig, soweit dies dem Kunden
                zumutbar ist. Zusätzliche Versandkosten entstehen dem Kunden
                durch Teillieferungen nicht.
              </p>
              <p>
                (5) Die Gefahr des zufälligen Untergangs und der zufälligen
                Verschlechterung der Ware geht bei Verbrauchern mit der
                Übergabe an den Kunden über. Bei Unternehmern geht die Gefahr
                mit Übergabe an den Spediteur bzw. das Transportunternehmen
                über.
              </p>
            </div>
          </section>

          {/* § 5 */}
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a]">
              § 5 Eigentumsvorbehalt
            </h2>
            <div className="mt-3 space-y-2">
              <p>
                Die gelieferte Ware bleibt bis zur vollständigen Bezahlung
                Eigentum des Verkäufers. Bei Unternehmern behält sich der
                Verkäufer das Eigentum bis zur vollständigen Begleichung aller
                Forderungen aus der laufenden Geschäftsbeziehung vor.
              </p>
            </div>
          </section>

          {/* § 6 */}
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a]">
              § 6 Widerrufsrecht
            </h2>
            <div className="mt-3 space-y-2">
              <p>
                Verbraucher haben ein 14-tägiges Widerrufsrecht. Die
                ausführliche Widerrufsbelehrung und das Muster-Widerrufsformular
                finden Sie auf unserer Seite{" "}
                <Link
                  href="/widerruf"
                  className="text-[#e94560] hover:underline"
                >
                  Widerrufsbelehrung
                </Link>
                .
              </p>
            </div>
          </section>

          {/* § 7 */}
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a]">
              § 7 Gewährleistung
            </h2>
            <div className="mt-3 space-y-2">
              <p>
                (1) Es gelten die gesetzlichen Gewährleistungsrechte.
                Gegenüber Verbrauchern beträgt die Gewährleistungsfrist 24
                Monate ab Übergabe der Ware.
              </p>
              <p>
                (2) Bei gebrauchten Waren gegenüber Unternehmern wird die
                Gewährleistungsfrist auf 12 Monate verkürzt.
              </p>
              <p>
                (3) Eventuelle Garantien des Herstellers bestehen neben den
                gesetzlichen Gewährleistungsrechten und schränken diese nicht
                ein.
              </p>
              <p>
                (4) Der Kunde wird gebeten, offensichtliche Mängel der
                gelieferten Ware innerhalb von 14 Tagen nach Lieferung
                anzuzeigen. Unterbleibt die Mängelrüge, hat dies keinen
                Einfluss auf die gesetzlichen Gewährleistungsansprüche des
                Verbrauchers.
              </p>
            </div>
          </section>

          {/* § 8 */}
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a]">
              § 8 Haftung
            </h2>
            <div className="mt-3 space-y-2">
              <p>
                (1) Der Verkäufer haftet unbeschränkt für Vorsatz und grobe
                Fahrlässigkeit sowie für Schäden aus der Verletzung des
                Lebens, des Körpers oder der Gesundheit.
              </p>
              <p>
                (2) Bei leicht fahrlässiger Verletzung wesentlicher
                Vertragspflichten (Kardinalpflichten) ist die Haftung des
                Verkäufers auf den typischerweise vorhersehbaren Schaden
                begrenzt.
              </p>
              <p>
                (3) Im Übrigen ist die Haftung des Verkäufers für leichte
                Fahrlässigkeit ausgeschlossen. Dies gilt nicht für Ansprüche
                nach dem Produkthaftungsgesetz.
              </p>
            </div>
          </section>

          {/* § 9 */}
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a]">
              § 9 Datenschutz
            </h2>
            <div className="mt-3 space-y-2">
              <p>
                Der Verkäufer verarbeitet personenbezogene Daten des Kunden
                zweckgebunden und gemäß den gesetzlichen Bestimmungen.
                Ausführliche Informationen finden Sie in unserer{" "}
                <Link
                  href="/datenschutz"
                  className="text-[#e94560] hover:underline"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
          </section>

          {/* § 10 */}
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a]">
              § 10 Streitbeilegung
            </h2>
            <div className="mt-3 space-y-2">
              <p>
                (1) Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  className="text-[#e94560] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                (2) Der Verkäufer ist nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          {/* § 11 */}
          <section>
            <h2 className="text-lg font-bold text-[#1a1a1a]">
              § 11 Schlussbestimmungen
            </h2>
            <div className="mt-3 space-y-2">
              <p>
                (1) Es gilt das Recht der Bundesrepublik Deutschland unter
                Ausschluss des UN-Kaufrechts (CISG). Bei Verbrauchern gilt
                diese Rechtswahl nur insoweit, als nicht zwingende
                Verbraucherschutzvorschriften des Staates, in dem der
                Verbraucher seinen gewöhnlichen Aufenthalt hat, entgegenstehen.
              </p>
              <p>
                (2) Gerichtsstand für alle Streitigkeiten aus dem
                Vertragsverhältnis mit Unternehmern ist der Sitz des
                Verkäufers.
              </p>
              <p>
                (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein
                oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen
                unberührt.
              </p>
            </div>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-10 flex flex-wrap gap-4 border-t border-[#e5e7eb] pt-6 text-sm">
          <Link
            href="/widerruf"
            className="text-[#e94560] hover:underline"
          >
            Widerrufsbelehrung →
          </Link>
          <Link
            href="/datenschutz"
            className="text-[#e94560] hover:underline"
          >
            Datenschutzerklärung →
          </Link>
          <Link
            href="/impressum"
            className="text-[#e94560] hover:underline"
          >
            Impressum →
          </Link>
        </div>
      </div>
    </main>
  )
}

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Impressum – JPS GmbH & Co. KG | Nagel Paul",
  description:
    "Impressum der JPS GmbH & Co. KG (Nagel Paul). Angaben gemäß § 5 TMG: Geschäftsführung, Handelsregister, USt-IdNr., Kontaktdaten und verantwortliche Stelle.",
}

export default function ImpressumPage() {
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
          <li className="font-medium text-[#1a1a1a]">Impressum</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Impressum
        </h1>
        <p className="mt-4 text-sm text-[#6b7280]">
          Angaben gemäß § 5 TMG
        </p>

        <div className="mt-8 space-y-8">
          {/* Company Details */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              Anbieter und verantwortlich für den Inhalt
            </h2>
            <div className="mt-3 text-[#1a1a1a]">
              <p className="font-semibold">JPS GmbH &amp; Co. KG</p>
              <p>Handelsmarke: Nagel Paul</p>
              <p className="mt-2">Musterstra&szlig;e 12</p>
              <p>85748 Garching bei München</p>
              <p>Deutschland</p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">Kontakt</h2>
            <div className="mt-3 space-y-1 text-[#1a1a1a]">
              <p>
                Telefon:{" "}
                <a
                  href="tel:+498912345678"
                  className="text-[#e94560] hover:underline"
                >
                  +49 (0) 89 / 123 456 78
                </a>
              </p>
              <p>
                Fax: +49 (0) 89 / 123 456 79
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@nagel-paul.de"
                  className="text-[#e94560] hover:underline"
                >
                  info@nagel-paul.de
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.nagel-paul.de"
                  className="text-[#e94560] hover:underline"
                >
                  www.nagel-paul.de
                </a>
              </p>
            </div>
          </section>

          {/* Representation */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              Vertretungsberechtigt
            </h2>
            <div className="mt-3 text-[#1a1a1a]">
              <p>
                Persönlich haftende Gesellschafterin: JPS Verwaltungs GmbH
              </p>
              <p>
                Geschäftsführer: [Name des Geschäftsführers]
              </p>
            </div>
          </section>

          {/* Registration */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              Handelsregister
            </h2>
            <div className="mt-3 space-y-1 text-[#1a1a1a]">
              <p>
                Registergericht: Amtsgericht München
              </p>
              <p>
                Registernummer: HRA [XXXXX]
              </p>
              <p className="mt-2 text-sm text-[#6b7280]">
                Persönlich haftende Gesellschafterin: JPS Verwaltungs GmbH,
                Sitz München, Amtsgericht München, HRB [XXXXX]
              </p>
            </div>
          </section>

          {/* Tax IDs */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <div className="mt-3 text-[#1a1a1a]">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
              </p>
              <p className="mt-1 font-mono font-semibold">DE [XXXXXXXXX]</p>
            </div>
          </section>

          {/* Professional Regulation */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              Berufsrechtliche Angaben
            </h2>
            <div className="mt-3 space-y-1 text-[#1a1a1a]">
              <p>
                Zuständige Kammer: IHK für München und Oberbayern
              </p>
              <p>
                Max-Joseph-Stra&szlig;e 2, 80333 München
              </p>
              <p>
                <a
                  href="https://www.ihk-muenchen.de"
                  className="text-[#e94560] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ihk-muenchen.de
                </a>
              </p>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              Streitschlichtung
            </h2>
            <div className="mt-3 space-y-3 text-sm text-[#6b7280]">
              <p>
                Die Europäische Kommission stellt eine Plattform zur
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
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          {/* Editorial Responsibility */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <div className="mt-3 text-[#1a1a1a]">
              <p>[Name des Verantwortlichen]</p>
              <p>JPS GmbH &amp; Co. KG</p>
              <p>Musterstra&szlig;e 12</p>
              <p>85748 Garching bei München</p>
            </div>
          </section>

          {/* Liability */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              Haftungsausschluss
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold text-[#1a1a1a]">
                  Haftung für Inhalte
                </h3>
                <p className="mt-1 text-sm text-[#6b7280]">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                  Nutzung von Informationen nach den allgemeinen Gesetzen
                  bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                  jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                  Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1a1a1a]">
                  Haftung für Links
                </h3>
                <p className="mt-1 text-sm text-[#6b7280]">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich. Die
                  verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                  mögliche Rechtsverstö&szlig;e überprüft. Rechtswidrige
                  Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten
                  ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                  nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                  werden wir derartige Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1a1a1a]">Urheberrecht</h3>
                <p className="mt-1 text-sm text-[#6b7280]">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke
                  auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                  Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung au&szlig;erhalb der Grenzen des
                  Urheberrechtes bedürfen der schriftlichen Zustimmung des
                  jeweiligen Autors bzw. Erstellers. Downloads und Kopien
                  dieser Seite sind nur für den privaten, nicht kommerziellen
                  Gebrauch gestattet.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-10 flex flex-wrap gap-4 border-t border-[#e5e7eb] pt-6 text-sm">
          <Link
            href="/datenschutz"
            className="text-[#e94560] hover:underline"
          >
            Datenschutzerklärung →
          </Link>
          <Link href="/agb" className="text-[#e94560] hover:underline">
            AGB →
          </Link>
          <Link
            href="/widerruf"
            className="text-[#e94560] hover:underline"
          >
            Widerrufsbelehrung →
          </Link>
        </div>
      </div>
    </main>
  )
}

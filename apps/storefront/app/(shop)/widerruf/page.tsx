import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Widerrufsbelehrung – 14 Tage Widerrufsrecht | Nagel Paul",
  description:
    "Widerrufsbelehrung der JPS GmbH & Co. KG (Nagel Paul). Informationen zum 14-tägigen Widerrufsrecht, Widerrufsfrist, Folgen des Widerrufs und Muster-Widerrufsformular.",
}

export default function WiderrufPage() {
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
          <li className="font-medium text-[#1a1a1a]">Widerrufsbelehrung</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Widerrufsbelehrung
        </h1>
        <p className="mt-4 text-sm text-[#6b7280]">
          Nachfolgende Widerrufsbelehrung gilt für Verbraucher im Sinne von
          § 13 BGB.
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-[#6b7280]">
          {/* Right to Cancel */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              Widerrufsrecht
            </h2>
            <p className="mt-3">
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von
              Gründen diesen Vertrag zu widerrufen.
            </p>
            <p className="mt-2">
              Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie
              oder ein von Ihnen benannter Dritter, der nicht der Beförderer
              ist, die Waren in Besitz genommen haben bzw. hat.
            </p>
            <p className="mt-2">
              Bei einem Vertrag über mehrere Waren, die im Rahmen einer
              einheitlichen Bestellung bestellt und getrennt geliefert werden,
              beginnt die Widerrufsfrist an dem Tag, an dem Sie oder ein von
              Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte
              Ware in Besitz genommen haben bzw. hat.
            </p>
            <p className="mt-2">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer
              eindeutigen Erklärung (z.B. ein mit der Post versandter Brief,
              Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu
              widerrufen, informieren:
            </p>
            <div className="mt-3 rounded-lg border border-[#e5e7eb] bg-[#f5f5f7] p-4 text-[#1a1a1a]">
              <p className="font-semibold">JPS GmbH &amp; Co. KG</p>
              <p>Musterstra&szlig;e 12</p>
              <p>85748 Garching bei München</p>
              <p className="mt-2">
                Telefon: +49 (0) 89 / 123 456 78
              </p>
              <p>Fax: +49 (0) 89 / 123 456 79</p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:widerruf@nagel-paul.de"
                  className="text-[#e94560] hover:underline"
                >
                  widerruf@nagel-paul.de
                </a>
              </p>
            </div>
            <p className="mt-3">
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
              Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
              Widerrufsfrist absenden.
            </p>
          </section>

          {/* Consequences */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              Folgen des Widerrufs
            </h2>
            <p className="mt-3">
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
              Zahlungen, die wir von Ihnen erhalten haben, einschlie&szlig;lich
              der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
              daraus ergeben, dass Sie eine andere Art der Lieferung als die
              von uns angebotene, günstigste Standardlieferung gewählt haben),
              unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
              zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses
              Vertrags bei uns eingegangen ist.
            </p>
            <p className="mt-2">
              Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das
              Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei
              denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in
              keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte
              berechnet.
            </p>
            <p className="mt-2">
              Wir können die Rückzahlung verweigern, bis wir die Waren wieder
              zurückerhalten haben oder bis Sie den Nachweis erbracht haben,
              dass Sie die Waren zurückgesandt haben, je nachdem, welches der
              frühere Zeitpunkt ist.
            </p>
            <p className="mt-2">
              Sie haben die Waren unverzüglich und in jedem Fall spätestens
              binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den
              Widerruf dieses Vertrags unterrichten, an uns zurückzusenden
              oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor
              Ablauf der Frist von vierzehn Tagen absenden.
            </p>
            <p className="mt-2">
              <strong className="text-[#1a1a1a]">
                Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
              </strong>
            </p>
            <p className="mt-2">
              Sie müssen für einen etwaigen Wertverlust der Waren nur
              aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der
              Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht
              notwendigen Umgang mit ihnen zurückzuführen ist.
            </p>
          </section>

          {/* Exclusions */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              Ausschluss des Widerrufsrechts
            </h2>
            <p className="mt-3">
              Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von
              Waren, die nicht vorgefertigt sind und für deren Herstellung
              eine individuelle Auswahl oder Bestimmung durch den Verbraucher
              ma&szlig;geblich ist oder die eindeutig auf die persönlichen
              Bedürfnisse des Verbrauchers zugeschnitten sind.
            </p>
            <p className="mt-2">
              Das Widerrufsrecht erlischt ferner bei Verträgen zur Lieferung
              versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder
              der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre
              Versiegelung nach der Lieferung entfernt wurde.
            </p>
          </section>

          {/* Model Form */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              Muster-Widerrufsformular
            </h2>
            <p className="mt-3">
              (Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses
              Formular aus und senden Sie es zurück.)
            </p>
            <div className="mt-4 rounded-lg border border-[#e5e7eb] bg-[#f5f5f7] p-5">
              <p className="text-[#1a1a1a]">An:</p>
              <p className="mt-1 text-[#1a1a1a]">
                JPS GmbH &amp; Co. KG
                <br />
                Musterstra&szlig;e 12
                <br />
                85748 Garching bei München
                <br />
                E-Mail: widerruf@nagel-paul.de
              </p>

              <div className="mt-4 space-y-3 text-[#1a1a1a]">
                <p>
                  Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
                  abgeschlossenen Vertrag über den Kauf der folgenden Waren
                  (*) / die Erbringung der folgenden Dienstleistung (*):
                </p>
                <div className="border-b border-dashed border-[#6b7280] py-2">
                  &nbsp;
                </div>

                <p>Bestellt am (*) / erhalten am (*):</p>
                <div className="border-b border-dashed border-[#6b7280] py-2">
                  &nbsp;
                </div>

                <p>Name des/der Verbraucher(s):</p>
                <div className="border-b border-dashed border-[#6b7280] py-2">
                  &nbsp;
                </div>

                <p>Anschrift des/der Verbraucher(s):</p>
                <div className="border-b border-dashed border-[#6b7280] py-2">
                  &nbsp;
                </div>

                <div className="pt-2">
                  <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
                  <div className="border-b border-dashed border-[#6b7280] py-4">
                    &nbsp;
                  </div>
                </div>

                <p>Datum:</p>
                <div className="border-b border-dashed border-[#6b7280] py-2">
                  &nbsp;
                </div>

                <p className="text-xs text-[#6b7280]">
                  (*) Unzutreffendes streichen.
                </p>
              </div>
            </div>
          </section>

          {/* Practical Tips */}
          <section className="rounded-lg border-l-4 border-[#e94560] bg-[#f5f5f7] p-5">
            <h3 className="font-bold text-[#1a1a1a]">
              Praktische Hinweise zur Rücksendung
            </h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#e94560]">-</span>
                <span>
                  Bitte melden Sie den Widerruf vorab per E-Mail an{" "}
                  <a
                    href="mailto:widerruf@nagel-paul.de"
                    className="text-[#e94560] hover:underline"
                  >
                    widerruf@nagel-paul.de
                  </a>{" "}
                  an und nennen Sie Ihre Bestellnummer.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#e94560]">-</span>
                <span>
                  Verpacken Sie die Ware sorgfältig für den Rücktransport,
                  möglichst in der Originalverpackung.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#e94560]">-</span>
                <span>
                  Verwenden Sie für die Rücksendung einen versicherten
                  Paketdienst und bewahren Sie den Einlieferungsbeleg auf.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#e94560]">-</span>
                <span>
                  Bitte beachten Sie, dass das erweiterte Rückgaberecht von
                  30 Tagen (siehe{" "}
                  <Link
                    href="/rueckgabe"
                    className="text-[#e94560] hover:underline"
                  >
                    Rückgabe &amp; Reklamation
                  </Link>
                  ) über das gesetzliche Widerrufsrecht hinausgeht.
                </span>
              </li>
            </ul>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-10 flex flex-wrap gap-4 border-t border-[#e5e7eb] pt-6 text-sm">
          <Link
            href="/rueckgabe"
            className="text-[#e94560] hover:underline"
          >
            Rückgabe &amp; Reklamation →
          </Link>
          <Link href="/agb" className="text-[#e94560] hover:underline">
            AGB →
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

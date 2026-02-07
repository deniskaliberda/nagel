import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Datenschutzerklärung – DSGVO-konforme Datenverarbeitung | Nagel Paul",
  description:
    "Datenschutzerklärung der JPS GmbH & Co. KG (Nagel Paul). Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten gemäß DSGVO.",
}

export default function DatenschutzPage() {
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
          <li className="font-medium text-[#1a1a1a]">Datenschutzerklärung</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-4 text-sm text-[#6b7280]">
          Stand: Januar 2025
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-[#6b7280]">
          {/* 1. Overview */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="mt-4 font-semibold text-[#1a1a1a]">
              Allgemeine Hinweise
            </h3>
            <p className="mt-2">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer
              nachfolgend aufgeführten Datenschutzerklärung.
            </p>
            <h3 className="mt-4 font-semibold text-[#1a1a1a]">
              Datenerfassung auf dieser Website
            </h3>
            <p className="mt-2">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
              &quot;Verantwortliche Stelle&quot; in dieser Datenschutzerklärung
              entnehmen.
            </p>
            <p className="mt-2">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen (z.B. durch Eingabe in ein Kontaktformular oder bei
              einer Bestellung). Andere Daten werden automatisch oder nach
              Ihrer Einwilligung beim Besuch der Website durch unsere
              IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </section>

          {/* 2. Responsible Party */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              2. Verantwortliche Stelle
            </h2>
            <div className="mt-3 text-[#1a1a1a]">
              <p className="font-semibold">JPS GmbH &amp; Co. KG</p>
              <p>Musterstra&szlig;e 12</p>
              <p>85748 Garching bei München</p>
              <p className="mt-2">
                Telefon:{" "}
                <a
                  href="tel:+498912345678"
                  className="text-[#e94560] hover:underline"
                >
                  +49 (0) 89 / 123 456 78
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:datenschutz@nagel-paul.de"
                  className="text-[#e94560] hover:underline"
                >
                  datenschutz@nagel-paul.de
                </a>
              </p>
            </div>
            <p className="mt-3">
              Verantwortliche Stelle ist die natürliche oder juristische
              Person, die allein oder gemeinsam mit anderen über die Zwecke und
              Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          {/* 3. Data Protection Officer */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              3. Datenschutzbeauftragter
            </h2>
            <p className="mt-3">
              Wir haben für unser Unternehmen einen Datenschutzbeauftragten
              bestellt. Sie erreichen diesen unter:
            </p>
            <div className="mt-2 text-[#1a1a1a]">
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:datenschutz@nagel-paul.de"
                  className="text-[#e94560] hover:underline"
                >
                  datenschutz@nagel-paul.de
                </a>
              </p>
            </div>
          </section>

          {/* 4. Your Rights */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              4. Ihre Rechte
            </h2>
            <p className="mt-3">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem
              ein Recht, die Berichtigung oder Löschung dieser Daten zu
              verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
              erteilt haben, können Sie diese Einwilligung jederzeit für die
              Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter
              bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen.
            </p>
            <p className="mt-3">Im Einzelnen stehen Ihnen folgende Rechte zu:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                <strong className="text-[#1a1a1a]">Auskunftsrecht</strong>{" "}
                (Art. 15 DSGVO)
              </li>
              <li>
                <strong className="text-[#1a1a1a]">
                  Recht auf Berichtigung
                </strong>{" "}
                (Art. 16 DSGVO)
              </li>
              <li>
                <strong className="text-[#1a1a1a]">Recht auf Löschung</strong>{" "}
                (Art. 17 DSGVO)
              </li>
              <li>
                <strong className="text-[#1a1a1a]">
                  Recht auf Einschränkung der Verarbeitung
                </strong>{" "}
                (Art. 18 DSGVO)
              </li>
              <li>
                <strong className="text-[#1a1a1a]">
                  Recht auf Datenübertragbarkeit
                </strong>{" "}
                (Art. 20 DSGVO)
              </li>
              <li>
                <strong className="text-[#1a1a1a]">Widerspruchsrecht</strong>{" "}
                (Art. 21 DSGVO)
              </li>
            </ul>
            <p className="mt-3">
              Ferner steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu (Bayerisches Landesamt für
              Datenschutzaufsicht).
            </p>
          </section>

          {/* 5. Data Collection on the Website */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              5. Datenerfassung auf dieser Website
            </h2>

            <h3 className="mt-4 font-semibold text-[#1a1a1a]">
              Server-Log-Dateien
            </h3>
            <p className="mt-2">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind: Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer URL,
              Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage
              und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen
              Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="mt-4 font-semibold text-[#1a1a1a]">
              Kontaktformular
            </h3>
            <p className="mt-2">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
              werden Ihre Angaben aus dem Formular inklusive der von Ihnen
              dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
              und für den Fall von Anschlussfragen bei uns gespeichert. Diese
              Daten geben wir nicht ohne Ihre Einwilligung weiter.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Ma&szlig;nahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse).
            </p>

            <h3 className="mt-4 font-semibold text-[#1a1a1a]">
              Bestellungen im Online-Shop
            </h3>
            <p className="mt-2">
              Bei einer Bestellung erheben wir folgende Daten: Name, Anschrift,
              E-Mail-Adresse, Telefonnummer (optional), Zahlungsdaten. Diese
              Daten sind zur Vertragserfüllung erforderlich (Art. 6 Abs. 1
              lit. b DSGVO). Wir speichern Ihre Bestelldaten für die
              gesetzlich vorgeschriebene Aufbewahrungsdauer (in der Regel 10
              Jahre gemäß Handels- und Steuerrecht).
            </p>
          </section>

          {/* 6. Cookies */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              6. Cookies
            </h2>
            <p className="mt-3">
              Unsere Website verwendet Cookies. Cookies sind kleine
              Textdateien, die auf Ihrem Endgerät gespeichert werden und die
              Ihr Browser speichert. Die meisten der von uns verwendeten
              Cookies sind sogenannte &quot;Session-Cookies&quot;, die nach Ende Ihres
              Besuchs automatisch gelöscht werden. Andere Cookies bleiben auf
              Ihrem Endgerät gespeichert, bis Sie diese löschen.
            </p>
            <p className="mt-2">
              <strong className="text-[#1a1a1a]">
                Technisch notwendige Cookies:
              </strong>{" "}
              Diese Cookies sind für den Betrieb der Website erforderlich
              (z.B. Warenkorb-Funktion, Session-Verwaltung). Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="mt-2">
              <strong className="text-[#1a1a1a]">Analyse-Cookies:</strong>{" "}
              Analyse-Cookies werden nur mit Ihrer ausdrücklichen Einwilligung
              gesetzt (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre
              Einwilligung jederzeit über unseren Cookie-Banner widerrufen.
            </p>
          </section>

          {/* 7. Payment Providers */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              7. Zahlungsanbieter
            </h2>

            <h3 className="mt-4 font-semibold text-[#1a1a1a]">Stripe</h3>
            <p className="mt-2">
              Für die Abwicklung von Kreditkartenzahlungen nutzen wir den
              Dienst Stripe (Stripe Inc., 510 Townsend Street, San Francisco,
              CA 94103, USA). Ihre Zahlungsdaten werden direkt an Stripe
              übermittelt und nicht auf unseren Servern gespeichert.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Weitere
              Informationen finden Sie in der Datenschutzerklärung von Stripe:
              https://stripe.com/de/privacy
            </p>

            <h3 className="mt-4 font-semibold text-[#1a1a1a]">PayPal</h3>
            <p className="mt-2">
              Bei Zahlung via PayPal werden Ihre Zahlungsdaten an PayPal
              (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449
              Luxembourg übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
              DSGVO.
            </p>

            <h3 className="mt-4 font-semibold text-[#1a1a1a]">Klarna</h3>
            <p className="mt-2">
              Bei Kauf auf Rechnung über Klarna (Klarna Bank AB, Sveavägen 46,
              111 34 Stockholm, Schweden) werden die für die Bonitätsprüfung
              und Zahlungsabwicklung erforderlichen Daten an Klarna
              übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          {/* 8. Newsletter */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              8. Newsletter
            </h2>
            <p className="mt-3">
              Wenn Sie den auf der Website angebotenen Newsletter beziehen
              möchten, benötigen wir von Ihnen eine E-Mail-Adresse. Die
              Anmeldung erfolgt im sogenannten Double-Opt-in-Verfahren.
              Rechtsgrundlage für die Verarbeitung der Daten nach Anmeldung
              zum Newsletter ist Art. 6 Abs. 1 lit. a DSGVO. Sie können den
              Newsletter jederzeit über den Abmeldelink in jeder
              Newsletter-E-Mail abbestellen.
            </p>
            <p className="mt-2">
              Für den Versand des Newsletters nutzen wir Resend (Resend Inc.).
              Die E-Mail-Adressen unserer Newsletterempfänger werden auf den
              Servern von Resend gespeichert.
            </p>
          </section>

          {/* 9. Hosting */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              9. Hosting
            </h2>
            <p className="mt-3">
              Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133,
              Walnut, CA 91789, USA) gehostet. Beim Besuch unserer Website
              erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adresse.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Für den Transfer
              personenbezogener Daten in die USA bestehen
              Standardvertragsklauseln der EU-Kommission.
            </p>
          </section>

          {/* 10. Data Security */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              10. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p className="mt-3">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel
              Bestellungen, eine SSL- bzw. TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt
              und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          {/* 11. Changes */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              11. Änderung dieser Datenschutzerklärung
            </h2>
            <p className="mt-3">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
              damit sie stets den aktuellen rechtlichen Anforderungen
              entspricht oder um Änderungen unserer Leistungen umzusetzen.
              Für Ihren erneuten Besuch gilt dann die neue
              Datenschutzerklärung.
            </p>
          </section>

          {/* Contact for Data Protection */}
          <section className="rounded-lg border border-[#e5e7eb] bg-[#f5f5f7] p-5">
            <h3 className="font-semibold text-[#1a1a1a]">
              Fragen zum Datenschutz?
            </h3>
            <p className="mt-2">
              Wenn Sie Fragen zur Verarbeitung Ihrer persönlichen Daten
              haben, wenden Sie sich bitte an unseren Datenschutzbeauftragten:
            </p>
            <p className="mt-2">
              <a
                href="mailto:datenschutz@nagel-paul.de"
                className="font-medium text-[#e94560] hover:underline"
              >
                datenschutz@nagel-paul.de
              </a>
            </p>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-10 flex flex-wrap gap-4 border-t border-[#e5e7eb] pt-6 text-sm">
          <Link
            href="/impressum"
            className="text-[#e94560] hover:underline"
          >
            Impressum →
          </Link>
          <Link href="/agb" className="text-[#e94560] hover:underline">
            AGB →
          </Link>
        </div>
      </div>
    </main>
  )
}

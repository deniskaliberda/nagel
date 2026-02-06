import Link from "next/link"

const footerLinks = {
  produkte: {
    title: "Produkte",
    links: [
      { label: "Druckluft-Nagler", href: "/produkte/druckluft-nagler" },
      { label: "Akku-Nagler", href: "/produkte/akku-nagler" },
      { label: "Gas-Nagler", href: "/produkte/gas-nagler" },
      { label: "Tacker", href: "/produkte/tacker" },
      { label: "Streifennägel", href: "/produkte/streifennaegel" },
      { label: "Coilnägel", href: "/produkte/coilnaegel" },
      { label: "LignoLoc Holznägel", href: "/produkte/lignoloc" },
      { label: "Alle Produkte", href: "/produkte" },
    ],
  },
  anwendungen: {
    title: "Nach Anwendung",
    links: [
      { label: "Zimmerer", href: "/anwendungen/zimmerer" },
      { label: "Dachdecker", href: "/anwendungen/dachdecker" },
      { label: "Trockenbauer", href: "/anwendungen/trockenbauer" },
      { label: "Schreiner", href: "/anwendungen/schreiner" },
      { label: "Bodenleger", href: "/anwendungen/bodenleger" },
      { label: "Heimwerker", href: "/anwendungen/heimwerker" },
    ],
  },
  service: {
    title: "Service",
    links: [
      { label: "Fachberatung", href: "/beratung" },
      { label: "Versand & Lieferung", href: "/versand" },
      { label: "Rückgabe & Reklamation", href: "/rueckgabe" },
      { label: "FAQ", href: "/faq" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  unternehmen: {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
      { label: "Widerrufsbelehrung", href: "/widerruf" },
    ],
  },
}

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

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      {/* Brand bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="mb-3 text-center text-sm text-gray-400">
            Unsere Marken
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <span>Seit über 40 Jahren</span>
              <span className="hidden sm:inline">|</span>
              <span>Fachberatung vom Experten</span>
              <span className="hidden sm:inline">|</span>
              <span>Schneller Versand</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Sichere Zahlung:</span>
              <span>Kreditkarte</span>
              <span>PayPal</span>
              <span>SEPA</span>
              <span>Rechnung</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Nagel Paul – JPS GmbH &amp; Co.
            KG. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

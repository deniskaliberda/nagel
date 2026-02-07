import type { Metadata } from "next"
import Breadcrumbs from "@/components/navigation/Breadcrumbs"

export const metadata: Metadata = {
  title: "Widerrufsbelehrung",
  description: "Widerrufsbelehrung der JPS GmbH & Co. KG (Nagel Paul) – Informationen zu Ihrem Widerrufsrecht.",
  alternates: { canonical: "/widerruf" },
  robots: { index: true, follow: true },
}

export default function WiderrufPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Widerrufsbelehrung", href: "/widerruf" }]} />
      </div>

      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary">Widerrufsbelehrung</h1>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-700">
          <section>
            <h2 className="text-lg font-semibold text-primary">Widerrufsrecht</h2>
            <p className="mt-3">
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu
              widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein
              von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz
              genommen haben bzw. hat.
            </p>
            <p className="mt-3">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung
              (z.B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen
              Vertrag zu widerrufen, informieren.
            </p>
            <div className="mt-3 rounded-lg bg-bg-alt p-4">
              <p className="font-medium">Kontakt für den Widerruf:</p>
              <p className="mt-1">JPS GmbH &amp; Co. KG</p>
              <p>E-Mail: info@nagel-paul.de</p>
              <p>Telefon: 089 / 904 29 28 0</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">Folgen des Widerrufs</h2>
            <p className="mt-3">
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen
              erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten,
              die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns
              angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens
              binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren
              Widerruf dieses Vertrags bei uns eingegangen ist.
            </p>
            <p className="mt-3">
              Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
              ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich
              etwas anderes vereinbart.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">Rücksendung</h2>
            <p className="mt-3">
              Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab
              dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns
              zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf
              der Frist von vierzehn Tagen absenden. Sie tragen die unmittelbaren Kosten der
              Rücksendung der Waren.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}

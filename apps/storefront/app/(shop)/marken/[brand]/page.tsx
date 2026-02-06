import type { Metadata } from "next"
import Link from "next/link"

const brandData: Record<string, { name: string; description: string }> = {
  hikoki: { name: "HiKOKI", description: "HiKOKI (ehemals Hitachi Power Tools) steht für leistungsstarke Akku- und Druckluft-Nagler mit der innovativen Multi-Volt-Technologie." },
  paslode: { name: "Paslode", description: "Paslode ist der Erfinder des Gasnailers und Referenz für kabellose Befestigungstechnik auf der Baustelle." },
  prebena: { name: "Prebena", description: "Prebena – deutsche Qualität seit 1951. Druckluft-Nagler, Tacker und Befestigungsmittel aus eigener Fertigung." },
  bea: { name: "BeA", description: "BeA (Behrens) ist weltweit führend bei industriellen Tackern, Klammern und Befestigungssystemen." },
  haubold: { name: "Haubold", description: "Haubold bietet professionelle Druckluft-Befestigungssysteme für Brads, Pins und Klammern." },
  senco: { name: "Senco", description: "Senco hat den pneumatischen Nagler erfunden und steht seit 1951 für Innovation in der Befestigungstechnik." },
  fasco: { name: "Fasco", description: "Fasco (Beck Fastener Group) ist Technologieführer für LignoLoc-kompatible Nagler und Holznagel-Verarbeitung." },
  "beck--lignoloc-": { name: "Beck (LignoLoc)", description: "Beck ist der Erfinder der LignoLoc Holznägel – nachhaltige Befestigung aus verdichtetem Buchenholz." },
}

const sampleProducts = [
  { title: "Akku-Streifennagler 18V", price: 59900, category: "akku-nagler" },
  { title: "Druckluft-Nagler 50-90mm", price: 32900, category: "druckluft-nagler" },
  { title: "Streifennägel 2,8x75mm", price: 2490, category: "streifennaegel" },
  { title: "Coilnägel 2,5x50mm", price: 1990, category: "coilnaegel" },
  { title: "Brads 18G 40mm", price: 890, category: "brads" },
  { title: "Kompressor 24L", price: 19900, category: "kompressoren" },
]

function formatPrice(cents: number): string {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(cents / 100)
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand } = await params
  const data = brandData[brand]
  const name = data?.name ?? brand

  return {
    title: `${name} – Alle Produkte | Nagel Paul`,
    description: `${name} Nagler, Befestigungsmittel und Zubehör bei Nagel Paul kaufen. ${data?.description ?? ""}`,
  }
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params
  const data = brandData[brand]
  const name = data?.name ?? brand

  return (
    <main>
      <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-[#6b7280]">
          <li><Link href="/" className="hover:text-[#1a1a1a]">Home</Link></li>
          <li><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
          <li><Link href="/marken" className="hover:text-[#1a1a1a]">Marken</Link></li>
          <li><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
          <li className="font-medium text-[#1a1a1a]">{name}</li>
        </ol>
      </nav>

      <section className="bg-white pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">{name}</h1>
          {data?.description && (
            <p className="mt-4 max-w-3xl text-lg text-[#6b7280]">{data.description}</p>
          )}
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-[#6b7280]">{sampleProducts.length} Produkte</p>
            <select className="rounded-lg border border-[#e5e7eb] bg-white px-3 py-2 text-sm text-[#1a1a1a]">
              <option>Relevanz</option>
              <option>Preis aufsteigend</option>
              <option>Preis absteigend</option>
              <option>Beliebtheit</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
            {sampleProducts.map((product) => (
              <Link
                key={product.title}
                href={`/produkte/${product.category}/${brand}-product`}
                className="group rounded-xl border border-[#e5e7eb] bg-white p-4 transition-all hover:shadow-lg"
              >
                <div className="aspect-square rounded-lg bg-gray-100" />
                <div className="mt-3">
                  <p className="text-xs text-[#6b7280]">{name}</p>
                  <h3 className="mt-0.5 text-sm font-medium text-[#1a1a1a] group-hover:text-[#e94560]">
                    {name} {product.title}
                  </h3>
                  <p className="mt-2 text-lg font-bold text-[#1a1a1a]">{formatPrice(product.price)}</p>
                  <p className="text-xs text-[#6b7280]">inkl. MwSt.</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

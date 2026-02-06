import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f7] px-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-[#e94560]">404</p>
        <h1 className="mt-4 text-2xl font-bold text-[#1a1a1a]">Seite nicht gefunden</h1>
        <p className="mt-2 text-[#6b7280]">
          Die angeforderte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-[#e94560] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c81e45]"
          >
            Zur Startseite
          </Link>
          <Link
            href="/produkte"
            className="rounded-lg border border-[#e5e7eb] bg-white px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:border-[#e94560]"
          >
            Produkte ansehen
          </Link>
        </div>
      </div>
    </main>
  )
}

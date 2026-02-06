export default function ProduktLoading() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-4 h-4 w-32 animate-pulse rounded bg-[#e5e7eb]" />
        <div className="mb-2 h-8 w-64 animate-pulse rounded-lg bg-[#e5e7eb]" />
        <div className="mb-8 h-4 w-96 animate-pulse rounded bg-[#e5e7eb]" />
        <div className="mb-6 flex gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-10 w-28 animate-pulse rounded-lg bg-[#e5e7eb]" />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <div className="mb-4 aspect-square animate-pulse rounded-lg bg-[#e5e7eb]" />
              <div className="mb-2 h-3 w-16 animate-pulse rounded bg-[#e5e7eb]" />
              <div className="mb-1 h-4 w-full animate-pulse rounded bg-[#e5e7eb]" />
              <div className="mb-3 h-4 w-2/3 animate-pulse rounded bg-[#e5e7eb]" />
              <div className="h-5 w-20 animate-pulse rounded bg-[#e5e7eb]" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default function AnwendungenLoading() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-2 h-8 w-72 animate-pulse rounded-lg bg-[#e5e7eb]" />
        <div className="mb-8 h-4 w-[32rem] animate-pulse rounded bg-[#e5e7eb]" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-[#e5e7eb] bg-white p-6">
              <div className="mb-3 h-12 w-12 animate-pulse rounded-lg bg-[#e5e7eb]" />
              <div className="mb-2 h-6 w-32 animate-pulse rounded bg-[#e5e7eb]" />
              <div className="mb-4 h-4 w-full animate-pulse rounded bg-[#e5e7eb]" />
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="h-3 w-3/4 animate-pulse rounded bg-[#e5e7eb]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

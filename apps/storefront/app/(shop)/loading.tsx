export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="mb-8 space-y-3">
          <div className="h-8 w-48 animate-pulse rounded-lg bg-[#e5e7eb]" />
          <div className="h-4 w-96 animate-pulse rounded bg-[#e5e7eb]" />
        </div>
        {/* Grid skeleton */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
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

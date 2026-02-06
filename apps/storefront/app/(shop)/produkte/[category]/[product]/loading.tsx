export default function ProductDetailLoading() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 h-4 w-48 animate-pulse rounded bg-[#e5e7eb]" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="aspect-square animate-pulse rounded-xl bg-[#e5e7eb]" />
          <div className="space-y-4">
            <div className="h-3 w-20 animate-pulse rounded bg-[#e5e7eb]" />
            <div className="h-8 w-3/4 animate-pulse rounded-lg bg-[#e5e7eb]" />
            <div className="h-4 w-32 animate-pulse rounded bg-[#e5e7eb]" />
            <div className="h-10 w-36 animate-pulse rounded-lg bg-[#e5e7eb]" />
            <div className="h-4 w-24 animate-pulse rounded bg-[#e5e7eb]" />
            <div className="mt-6 h-12 w-full animate-pulse rounded-lg bg-[#e5e7eb]" />
          </div>
        </div>
        <div className="mt-12 space-y-4">
          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 w-32 animate-pulse rounded-lg bg-[#e5e7eb]" />
            ))}
          </div>
          <div className="space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 w-full animate-pulse rounded bg-[#e5e7eb]" />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

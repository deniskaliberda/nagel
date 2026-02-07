import type { Metadata } from "next"
import { Suspense } from "react"
import { SearchPageClient } from "@/components/shop/SearchPageClient"

export const metadata: Metadata = {
  title: "Suche | Nagel Paul",
  description: "Durchsuchen Sie das gesamte Sortiment von Nagel Paul – Nagler, Befestigungsmittel und Zubehör schnell finden.",
}

export default function SuchePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <Suspense fallback={
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="h-10 w-48 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 h-14 w-full animate-pulse rounded-xl bg-gray-200" />
        </div>
      }>
        <SearchPageClient />
      </Suspense>
    </main>
  )
}

import type { Metadata } from "next"
import { Suspense } from "react"
import { SucheContent } from "./SucheContent"

export const metadata: Metadata = {
  title: "Suche | Nagel Paul",
  description: "Durchsuchen Sie das gesamte Sortiment von Nagel Paul – Nagler, Befestigungsmittel und Zubehör schnell finden.",
}

export default function SuchePage() {
  return (
    <Suspense>
      <SucheContent />
    </Suspense>
  )
}

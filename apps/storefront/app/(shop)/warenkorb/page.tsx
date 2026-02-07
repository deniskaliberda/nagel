import type { Metadata } from "next"
import { WarenkorbContent } from "./WarenkorbContent"

export const metadata: Metadata = {
  title: "Warenkorb | Nagel Paul",
  description: "Ihr Warenkorb bei Nagel Paul. Prüfen Sie Ihre Auswahl und gehen Sie zur Kasse.",
}

export default function WarenkorbPage() {
  return <WarenkorbContent />
}

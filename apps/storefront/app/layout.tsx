import type { Metadata } from "next"
import { ClientShell } from "@/components/providers/ClientShell"
import Header from "@/components/navigation/Header"
import { Footer } from "@/components/layout/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Nagel Paul – Ihr Fachhandel für Befestigungstechnik",
    template: "%s | Nagel Paul",
  },
  description:
    "Nagel Paul – Ihr zuverlässiger Partner für professionelle Befestigungstechnik. Nagler, Tacker, Nägel, Klammern und innovative LignoLoc Holznägel für Handwerk und Industrie.",
  keywords: [
    "Befestigungstechnik",
    "Nagler",
    "Tacker",
    "Nägel",
    "Klammern",
    "LignoLoc",
    "Holznägel",
    "HiKOKI",
    "Paslode",
    "Prebena",
    "BeA",
    "Nagel Paul",
  ],
  metadataBase: new URL("https://nagel-paul.de"),
  alternates: {
    canonical: "/",
    languages: { "de-DE": "/" },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Nagel Paul",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="flex min-h-screen flex-col font-sans antialiased" style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>
        <ClientShell>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </ClientShell>
      </body>
    </html>
  )
}

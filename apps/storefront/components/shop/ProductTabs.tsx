"use client"

import { useState } from "react"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"

interface TechSpec {
  label: string
  value: string
}

interface CompatibleProduct {
  slug: string
  categorySlug: string
  title: string
  brand: string
  price: number
  isLignoLoc: boolean
}

interface Download {
  name: string
  type: string
  size: string
}

interface ProductTabsProps {
  title: string
  description: string
  techSpecs: TechSpec[]
  compatibleProducts: CompatibleProduct[]
  downloads: Download[]
}

const TABS = [
  { id: "beschreibung", label: "Beschreibung" },
  { id: "technische-daten", label: "Technische Daten" },
  { id: "kompatibilitaet", label: "Kompatibilität" },
  { id: "downloads", label: "Downloads" },
] as const

type TabId = (typeof TABS)[number]["id"]

export function ProductTabs({
  title,
  description,
  techSpecs,
  compatibleProducts,
  downloads,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("beschreibung")

  return (
    <div className="border-t border-border">
      {/* Tab navigation */}
      <div className="flex overflow-x-auto border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-accent text-accent"
                : "text-text-muted hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "beschreibung" && (
        <div className="py-8">
          <div className="prose prose-sm max-w-none">
            <h2 className="text-xl font-bold text-primary">
              Produktbeschreibung
            </h2>
            {description.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mt-4 leading-relaxed text-text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}

      {activeTab === "technische-daten" && (
        <div className="py-8">
          <h2 className="mb-6 text-xl font-bold text-primary">
            Technische Daten
          </h2>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {techSpecs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={i % 2 === 0 ? "bg-bg-alt" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-medium text-primary">
                      {spec.label}
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-text-muted">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "kompatibilitaet" && (
        <div className="py-8">
          <h2 className="mb-2 text-xl font-bold text-primary">
            Kompatible Befestigungsmittel
          </h2>
          <p className="mb-6 text-sm text-text-muted">
            Diese Nägel und Befestigungsmittel sind mit dem{" "}
            {title} kompatibel und von uns empfohlen.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {compatibleProducts.map((cp) => (
              <Link
                key={cp.slug}
                href={`/produkte/${cp.categorySlug}/${cp.slug}`}
                className="group flex flex-col rounded-lg border border-border bg-white p-4 transition-all hover:shadow-md"
              >
                <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                  <div className="flex h-full items-center justify-center">
                    <svg
                      className="h-8 w-8 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                      />
                    </svg>
                  </div>
                  {cp.isLignoLoc && (
                    <span className="absolute left-2 top-2 rounded-full bg-lignoloc-light px-2 py-0.5 text-xs font-semibold text-lignoloc">
                      LignoLoc
                    </span>
                  )}
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  {cp.brand}
                </span>
                <span className="mt-0.5 line-clamp-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                  {cp.title}
                </span>
                <span className="mt-auto pt-2 text-sm font-bold text-primary">
                  {formatPrice(cp.price)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {activeTab === "downloads" && (
        <div className="py-8">
          <h2 className="mb-6 text-xl font-bold text-primary">
            Downloads &amp; Dokumente
          </h2>
          <div className="space-y-3">
            {downloads.map((dl) => (
              <div
                key={dl.name}
                className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-bg-alt"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary">
                      {dl.name}
                    </p>
                    <p className="text-xs text-text-muted">
                      {dl.type} – {dl.size}
                    </p>
                  </div>
                </div>
                <svg className="h-5 w-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

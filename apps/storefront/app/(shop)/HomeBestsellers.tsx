"use client"

import Link from "next/link"
import { ProductCard, type ProductCardProduct } from "@/components/shop/ProductCard"

const BESTSELLER_PRODUCTS: ProductCardProduct[] = [
  {
    title: "HiKOKI NR1890DBCL Akku-Streifennagler",
    brand: "HiKOKI",
    price: 59900,
    compareAtPrice: 69900,
    slug: "hikoki-nr1890dbcl",
    categorySlug: "akku-nagler",
    isLignoLoc: false,
    availability: "in_stock",
  },
  {
    title: "Paslode IM90i Gasnagler",
    brand: "Paslode",
    price: 89900,
    slug: "paslode-im90i",
    categorySlug: "gas-nagler",
    isLignoLoc: false,
    availability: "in_stock",
  },
  {
    title: "Prebena Streifennägel RK 28/80 NK",
    brand: "Prebena",
    price: 3490,
    slug: "prebena-rk28-80-nk",
    categorySlug: "streifennaegel",
    isLignoLoc: false,
    availability: "in_stock",
  },
  {
    title: "BeA Druckluft-Nagler SKS 650-228",
    brand: "BeA",
    price: 44900,
    slug: "bea-sks-650-228",
    categorySlug: "druckluft-nagler",
    isLignoLoc: false,
    availability: "in_stock",
  },
  {
    title: "Beck FASCO F44 AC LignoLoc",
    brand: "Beck (LignoLoc)",
    price: 129900,
    slug: "beck-fasco-f44-ac-lignoloc",
    categorySlug: "akku-nagler",
    isLignoLoc: true,
    availability: "in_stock",
  },
  {
    title: "LignoLoc Holznägel 3,7 x 50mm",
    brand: "Beck (LignoLoc)",
    price: 4900,
    slug: "lignoloc-holznaegel-37x50",
    categorySlug: "lignoloc",
    isLignoLoc: true,
    availability: "in_stock",
  },
  {
    title: "HiKOKI NR90GC1 Druckluft-Streifennagler",
    brand: "HiKOKI",
    price: 32900,
    slug: "hikoki-nr90gc1",
    categorySlug: "druckluft-nagler",
    isLignoLoc: false,
    availability: "low_stock",
  },
  {
    title: "Senco Finish Pro 18Mg Akku-Bradnagler",
    brand: "Senco",
    price: 39900,
    slug: "senco-finishpro-18mg",
    categorySlug: "akku-nagler",
    isLignoLoc: false,
    availability: "in_stock",
  },
]

export function HomeBestsellers() {
  return (
    <section className="bg-[#f5f5f7] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between md:mb-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] md:text-3xl">
              Bestseller
            </h2>
            <p className="mt-2 text-[#6b7280]">
              Unsere beliebtesten Produkte
            </p>
          </div>
          <Link
            href="/produkte"
            className="hidden text-sm font-medium text-[#e94560] hover:underline sm:inline-flex sm:items-center"
          >
            Alle Produkte
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {BESTSELLER_PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/produkte"
            className="inline-flex items-center text-sm font-medium text-[#e94560]"
          >
            Alle Produkte ansehen
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

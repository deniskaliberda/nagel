"use client";

import { useState } from "react";
import { ProductCard, type ProductCardProduct } from "@/components/shop/ProductCard";
import { FilterBar } from "@/components/shop/FilterBar";

const SAMPLE_PRODUCTS: ProductCardProduct[] = [
  {
    slug: "hikoki-nr1890dbcl",
    categorySlug: "akku-nagler",
    title: "HiKOKI NR1890DBCL Akku-Streifennagler 18V",
    brand: "HiKOKI",
    price: 59900,
    compareAtPrice: 69900,
    isLignoLoc: false,
    availability: "in_stock",
  },
  {
    slug: "paslode-im90i",
    categorySlug: "gas-nagler",
    title: "Paslode IM90i Li Gasnagler im Koffer",
    brand: "Paslode",
    price: 89900,
    isLignoLoc: false,
    availability: "in_stock",
  },
  {
    slug: "prebena-rk28-80-nk",
    categorySlug: "streifennaegel",
    title: "Prebena Streifennägel RK 28/80 NK verzinkt",
    brand: "Prebena",
    price: 3490,
    isLignoLoc: false,
    availability: "in_stock",
  },
  {
    slug: "bea-sks-650-228",
    categorySlug: "druckluft-nagler",
    title: "BeA SKS 650-228 Druckluft-Klammergerät",
    brand: "BeA",
    price: 44900,
    isLignoLoc: false,
    availability: "in_stock",
  },
  {
    slug: "beck-fasco-f44-ac-lignoloc",
    categorySlug: "akku-nagler",
    title: "Beck FASCO F44 AC LignoLoc Holznagelgerät",
    brand: "Beck (LignoLoc)",
    price: 129900,
    isLignoLoc: true,
    availability: "in_stock",
  },
  {
    slug: "lignoloc-holznaegel-37x50",
    categorySlug: "lignoloc",
    title: "LignoLoc Holznägel 3,7 x 50 mm (Paket 2.000 Stk.)",
    brand: "Beck (LignoLoc)",
    price: 4900,
    isLignoLoc: true,
    availability: "in_stock",
  },
  {
    slug: "hikoki-nr90gc1",
    categorySlug: "druckluft-nagler",
    title: "HiKOKI NR90GC1 Druckluft-Streifennagler 50-90mm",
    brand: "HiKOKI",
    price: 32900,
    isLignoLoc: false,
    availability: "low_stock",
  },
  {
    slug: "senco-finishpro-18mg",
    categorySlug: "akku-nagler",
    title: "Senco FinishPro 18Mg Akku-Bradnagler 18V",
    brand: "Senco",
    price: 39900,
    isLignoLoc: false,
    availability: "in_stock",
  },
  {
    slug: "prebena-coilnaegel-cn-25-50-nk",
    categorySlug: "coilnaegel",
    title: "Prebena Coilnägel CN 25/50 NK Ring verzinkt",
    brand: "Prebena",
    price: 2890,
    isLignoLoc: false,
    availability: "in_stock",
  },
  {
    slug: "haubold-rn65-a",
    categorySlug: "druckluft-nagler",
    title: "Haubold RN65 A Druckluft-Coilnagler",
    brand: "Haubold",
    price: 52900,
    isLignoLoc: false,
    availability: "in_stock",
  },
  {
    slug: "paslode-klammern-s16-32mm",
    categorySlug: "klammern",
    title: "Paslode Klammern S16 1,6 x 32 mm verzinkt",
    brand: "Paslode",
    price: 1890,
    isLignoLoc: false,
    availability: "in_stock",
  },
  {
    slug: "hikoki-ec-1445h",
    categorySlug: "kompressoren",
    title: "HiKOKI EC 1445H Kompressor 14 Bar / 45 Liter",
    brand: "HiKOKI",
    price: 69900,
    compareAtPrice: 79900,
    isLignoLoc: false,
    availability: "low_stock",
  },
];

const AVAILABLE_BRANDS = ["HiKOKI", "Paslode", "Prebena", "BeA", "Beck (LignoLoc)", "Senco", "Haubold"];
const AVAILABLE_DRIVES = ["Akku", "Druckluft", "Gas"];

type SortOption = "relevanz" | "preis_asc" | "preis_desc" | "beliebtheit" | "neu";

interface FilterState {
  sort: SortOption;
  brands: string[];
  priceMin: number | null;
  priceMax: number | null;
  drives: string[];
  inStockOnly: boolean;
}

export function ProductGrid() {
  const [filters, setFilters] = useState<FilterState>({
    sort: "relevanz",
    brands: [],
    priceMin: null,
    priceMax: null,
    drives: [],
    inStockOnly: false,
  });

  let filtered = [...SAMPLE_PRODUCTS];

  // Apply brand filter
  if (filters.brands.length > 0) {
    filtered = filtered.filter((p) => filters.brands.includes(p.brand));
  }

  // Apply price filter
  if (filters.priceMin !== null) {
    filtered = filtered.filter((p) => p.price >= filters.priceMin! * 100);
  }
  if (filters.priceMax !== null) {
    filtered = filtered.filter((p) => p.price <= filters.priceMax! * 100);
  }

  // Apply stock filter
  if (filters.inStockOnly) {
    filtered = filtered.filter((p) => p.availability !== "out_of_stock");
  }

  // Apply sort
  if (filters.sort === "preis_asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (filters.sort === "preis_desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="mb-8">
        <FilterBar
          availableBrands={AVAILABLE_BRANDS}
          availableDrives={AVAILABLE_DRIVES}
          onFilterChange={(f) => setFilters(f)}
        />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-text-muted">
          {filtered.length} Produkte
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-xl border border-border bg-white p-12 text-center">
          <p className="text-lg font-medium text-primary">Keine Produkte gefunden</p>
          <p className="mt-2 text-text-muted">Versuchen Sie andere Filtereinstellungen.</p>
        </div>
      )}
    </>
  );
}

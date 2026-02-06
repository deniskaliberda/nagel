"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

type SortOption =
  | "relevanz"
  | "preis_asc"
  | "preis_desc"
  | "beliebtheit"
  | "neu";

interface FilterState {
  sort: SortOption;
  brands: string[];
  priceMin: number | null;
  priceMax: number | null;
  drives: string[];
  inStockOnly: boolean;
}

interface FilterBarProps {
  availableBrands: string[];
  availableDrives: string[];
  onFilterChange?: (filters: FilterState) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "relevanz", label: "Relevanz" },
  { value: "preis_asc", label: "Preis aufsteigend" },
  { value: "preis_desc", label: "Preis absteigend" },
  { value: "beliebtheit", label: "Beliebtheit" },
  { value: "neu", label: "Neu" },
];

function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function FilterBar({
  availableBrands,
  availableDrives,
  onFilterChange,
}: FilterBarProps) {
  const [filters, setFilters] = useState<FilterState>({
    sort: "relevanz",
    brands: [],
    priceMin: null,
    priceMax: null,
    drives: [],
    inStockOnly: false,
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const updateFilters = useCallback(
    (update: Partial<FilterState>) => {
      setFilters((prev) => {
        const next = { ...prev, ...update };
        onFilterChange?.(next);
        return next;
      });
    },
    [onFilterChange]
  );

  const toggleArrayItem = useCallback(
    (key: "brands" | "drives", value: string) => {
      setFilters((prev) => {
        const current = prev[key];
        const next = current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value];
        const updated = { ...prev, [key]: next };
        onFilterChange?.(updated);
        return updated;
      });
    },
    [onFilterChange]
  );

  const activeFilterCount =
    filters.brands.length +
    filters.drives.length +
    (filters.priceMin !== null ? 1 : 0) +
    (filters.priceMax !== null ? 1 : 0) +
    (filters.inStockOnly ? 1 : 0);

  const filterContent = (
    <div className="flex flex-col gap-6">
      {/* Sort */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="filter-sort"
          className="text-sm font-semibold text-primary"
        >
          Sortierung
        </label>
        <div className="relative">
          <select
            id="filter-sort"
            value={filters.sort}
            onChange={(e) =>
              updateFilters({ sort: e.target.value as SortOption })
            }
            className="w-full appearance-none rounded-md border border-border bg-white py-2 pl-3 pr-8 text-sm text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon />
          </div>
        </div>
      </div>

      {/* Brand checkboxes */}
      {availableBrands.length > 0 && (
        <fieldset className="flex flex-col gap-2">
          <legend className="text-sm font-semibold text-primary">Marke</legend>
          <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto">
            {availableBrands.map((brand) => (
              <label
                key={brand}
                className="flex cursor-pointer items-center gap-2 text-sm text-primary hover:text-accent"
              >
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => toggleArrayItem("brands", brand)}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                {brand}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {/* Price range */}
      <fieldset className="flex flex-col gap-2">
        <legend className="text-sm font-semibold text-primary">
          Preis (EUR)
        </legend>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            min={0}
            value={filters.priceMin ?? ""}
            onChange={(e) =>
              updateFilters({
                priceMin: e.target.value ? Number(e.target.value) : null,
              })
            }
            className="w-full rounded-md border border-border px-3 py-2 text-sm text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            aria-label="Mindestpreis"
          />
          <span className="text-text-muted" aria-hidden="true">
            &ndash;
          </span>
          <input
            type="number"
            placeholder="Max"
            min={0}
            value={filters.priceMax ?? ""}
            onChange={(e) =>
              updateFilters({
                priceMax: e.target.value ? Number(e.target.value) : null,
              })
            }
            className="w-full rounded-md border border-border px-3 py-2 text-sm text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            aria-label="Maximalpreis"
          />
        </div>
      </fieldset>

      {/* Drive type checkboxes */}
      {availableDrives.length > 0 && (
        <fieldset className="flex flex-col gap-2">
          <legend className="text-sm font-semibold text-primary">
            Antrieb
          </legend>
          <div className="flex flex-col gap-1.5">
            {availableDrives.map((drive) => (
              <label
                key={drive}
                className="flex cursor-pointer items-center gap-2 text-sm text-primary hover:text-accent"
              >
                <input
                  type="checkbox"
                  checked={filters.drives.includes(drive)}
                  onChange={() => toggleArrayItem("drives", drive)}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                {drive}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {/* Availability toggle */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-primary">
          Nur verfügbare Artikel
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={filters.inStockOnly}
          onClick={() => updateFilters({ inStockOnly: !filters.inStockOnly })}
          className={cn(
            "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            filters.inStockOnly ? "bg-primary" : "bg-gray-200"
          )}
        >
          <span
            className={cn(
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm ring-0 transition-transform duration-200",
              filters.inStockOnly ? "translate-x-5" : "translate-x-0"
            )}
          />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop filter bar */}
      <div className="hidden rounded-lg border border-border bg-white p-4 md:block">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 xl:grid-cols-5">
          {/* Sort dropdown */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="desktop-sort"
              className="text-xs font-semibold uppercase tracking-wider text-text-muted"
            >
              Sortierung
            </label>
            <div className="relative">
              <select
                id="desktop-sort"
                value={filters.sort}
                onChange={(e) =>
                  updateFilters({ sort: e.target.value as SortOption })
                }
                className="w-full appearance-none rounded-md border border-border bg-white py-2 pl-3 pr-8 text-sm text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon />
              </div>
            </div>
          </div>

          {/* Brand dropdown */}
          {availableBrands.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Marke
              </span>
              <DropdownCheckboxes
                items={availableBrands}
                selected={filters.brands}
                onToggle={(brand) => toggleArrayItem("brands", brand)}
                placeholder="Alle Marken"
              />
            </div>
          )}

          {/* Drive dropdown */}
          {availableDrives.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Antrieb
              </span>
              <DropdownCheckboxes
                items={availableDrives}
                selected={filters.drives}
                onToggle={(drive) => toggleArrayItem("drives", drive)}
                placeholder="Alle Antriebe"
              />
            </div>
          )}

          {/* Price range */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Preis (EUR)
            </span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                min={0}
                value={filters.priceMin ?? ""}
                onChange={(e) =>
                  updateFilters({
                    priceMin: e.target.value ? Number(e.target.value) : null,
                  })
                }
                className="w-full rounded-md border border-border px-3 py-2 text-sm text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                aria-label="Mindestpreis"
              />
              <span className="text-text-muted">&ndash;</span>
              <input
                type="number"
                placeholder="Max"
                min={0}
                value={filters.priceMax ?? ""}
                onChange={(e) =>
                  updateFilters({
                    priceMax: e.target.value ? Number(e.target.value) : null,
                  })
                }
                className="w-full rounded-md border border-border px-3 py-2 text-sm text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                aria-label="Maximalpreis"
              />
            </div>
          </div>

          {/* Availability toggle */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Verfügbarkeit
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={filters.inStockOnly}
              onClick={() =>
                updateFilters({ inStockOnly: !filters.inStockOnly })
              }
              className="flex items-center gap-2 self-start rounded-md border border-border px-3 py-2 text-sm text-primary transition-colors hover:border-primary/40"
            >
              <span
                className={cn(
                  "relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 border-transparent transition-colors duration-200",
                  filters.inStockOnly ? "bg-primary" : "bg-gray-200"
                )}
              >
                <span
                  className={cn(
                    "pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200",
                    filters.inStockOnly ? "translate-x-4" : "translate-x-0"
                  )}
                />
              </span>
              <span>Nur verfügbar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile filter button */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/40"
        >
          <FilterIcon />
          <span>Filter</span>
          {activeFilterCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Sort select on mobile */}
        <div className="relative flex-1">
          <select
            value={filters.sort}
            onChange={(e) =>
              updateFilters({ sort: e.target.value as SortOption })
            }
            className="w-full appearance-none rounded-md border border-border bg-white py-2 pl-3 pr-8 text-sm text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            aria-label="Sortierung"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon />
          </div>
        </div>
      </div>

      {/* Mobile slide-over panel */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h2 className="text-lg font-semibold text-primary">Filter</h2>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-md p-1 text-text-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Filter schließen"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {filterContent}
            </div>

            {/* Footer */}
            <div className="border-t border-border p-4">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Ergebnisse anzeigen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------
 * Internal: dropdown with checkboxes for desktop filter bar
 * ------------------------------------------------------------------ */

interface DropdownCheckboxesProps {
  items: string[];
  selected: string[];
  onToggle: (item: string) => void;
  placeholder: string;
}

function DropdownCheckboxes({
  items,
  selected,
  onToggle,
  placeholder,
}: DropdownCheckboxesProps) {
  const [open, setOpen] = useState(false);

  const label =
    selected.length === 0
      ? placeholder
      : selected.length === 1
        ? selected[0]
        : `${selected.length} ausgewählt`;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-md border border-border bg-white px-3 py-2 text-sm text-primary transition-colors hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        aria-expanded={open}
      >
        <span className={selected.length === 0 ? "text-text-muted" : ""}>
          {label}
        </span>
        <ChevronDownIcon />
      </button>

      {open && (
        <>
          {/* Click-away layer */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div className="absolute left-0 top-full z-20 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-border bg-white py-1 shadow-lg">
            {items.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm text-primary hover:bg-bg-alt"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(item)}
                  onChange={() => onToggle(item)}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                {item}
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

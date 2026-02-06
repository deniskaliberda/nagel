"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  cartCount: number;
}

interface AccordionSection {
  title: string;
  groups: {
    heading: string;
    links: { label: string; href: string; highlight?: boolean }[];
  }[];
}

const produkteSection: AccordionSection = {
  title: "Produkte",
  groups: [
    {
      heading: "Nagler & Tacker",
      links: [
        { label: "Druckluft-Nagler", href: "/produkte/druckluft-nagler" },
        { label: "Akku-Nagler", href: "/produkte/akku-nagler" },
        { label: "Gas-Nagler", href: "/produkte/gas-nagler" },
        { label: "Tacker", href: "/produkte/tacker" },
      ],
    },
    {
      heading: "Befestigungsmittel",
      links: [
        { label: "Streifennägel", href: "/produkte/streifennaegel" },
        { label: "Coilnägel", href: "/produkte/coilnaegel" },
        { label: "Brads & Pins", href: "/produkte/brads-pins" },
        { label: "Klammern", href: "/produkte/klammern" },
        { label: "LignoLoc Holznägel", href: "/produkte/lignoloc", highlight: true },
        { label: "Schrauben", href: "/produkte/schrauben" },
      ],
    },
    {
      heading: "Zubehör",
      links: [
        { label: "Kompressoren", href: "/produkte/kompressoren" },
        { label: "Schläuche & Kupplungen", href: "/produkte/schlaeuche" },
        { label: "Akkus & Ladegeräte", href: "/produkte/akkus-ladegeraete" },
        { label: "Ersatzteile", href: "/produkte/ersatzteile" },
      ],
    },
  ],
};

const anwendungenSection: AccordionSection = {
  title: "Anwendungen",
  groups: [
    {
      heading: "Zimmerer",
      links: [
        { label: "Dachlatten", href: "/anwendungen/zimmerer/dachlatten" },
        { label: "Schalung", href: "/anwendungen/zimmerer/schalung" },
        { label: "Holzrahmenbau", href: "/anwendungen/zimmerer/holzrahmen" },
        { label: "Balkenverbindungen", href: "/anwendungen/zimmerer/balken" },
      ],
    },
    {
      heading: "Dachdecker",
      links: [
        { label: "Dachpappe", href: "/anwendungen/dachdecker/dachpappe" },
        { label: "Dämmplatten", href: "/anwendungen/dachdecker/daemmplatten" },
        { label: "Lattung", href: "/anwendungen/dachdecker/lattung" },
      ],
    },
    {
      heading: "Trockenbauer",
      links: [
        { label: "UK-Montage", href: "/anwendungen/trockenbauer/uk-montage" },
        { label: "Dämmung", href: "/anwendungen/trockenbauer/daemmung" },
        { label: "Profile", href: "/anwendungen/trockenbauer/profile" },
      ],
    },
    {
      heading: "Schreiner",
      links: [
        { label: "Möbelbau", href: "/anwendungen/schreiner/moebelbau" },
        { label: "Leisten & Zierprofile", href: "/anwendungen/schreiner/leisten" },
        { label: "Plattenwerkstoffe", href: "/anwendungen/schreiner/platten" },
      ],
    },
    {
      heading: "Bodenleger",
      links: [
        { label: "Parkett", href: "/anwendungen/bodenleger/parkett" },
        { label: "Sockelleisten", href: "/anwendungen/bodenleger/sockelleisten" },
      ],
    },
  ],
};

export default function MobileNav({ isOpen, onClose, cartCount }: MobileNavProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onClose();
      window.location.href = `/suche?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const sections = [produkteSection, anwendungenSection];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Hauptnavigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="text-lg font-bold text-primary">Menü</span>
          <button
            onClick={onClose}
            className="p-2 text-text-muted hover:text-primary transition-colors"
            aria-label="Menü schließen"
          >
            {/* Close X icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="border-b border-border px-4 py-3">
          <form onSubmit={handleSearchSubmit} role="search">
            <div className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Produkte suchen..."
                className="w-full rounded-lg border border-border py-2 pl-10 pr-4 text-sm text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                aria-label="Produkte suchen"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </form>
        </div>

        {/* Navigation content */}
        <nav className="flex-1 overflow-y-auto" aria-label="Hauptnavigation">
          <ul className="divide-y divide-border">
            {sections.map((section) => {
              const isExpanded = expandedSections.has(section.title);
              return (
                <li key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-semibold text-primary hover:bg-bg-alt transition-colors"
                    aria-expanded={isExpanded}
                  >
                    {section.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-bg-alt px-4 pb-3">
                      {section.groups.map((group) => (
                        <div key={group.heading} className="mb-3 last:mb-0">
                          <h4 className="mb-1.5 pt-2 text-xs font-bold uppercase tracking-wider text-text-muted">
                            {group.heading}
                          </h4>
                          <ul className="space-y-1">
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className={`block rounded py-1.5 pl-2 text-sm transition-colors ${
                                    link.highlight
                                      ? "font-semibold text-lignoloc hover:bg-lignoloc-light"
                                      : "text-primary hover:bg-white"
                                  }`}
                                  onClick={onClose}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}

            {/* Direct links */}
            <li>
              <Link
                href="/marken"
                className="block px-4 py-3 text-base font-semibold text-primary hover:bg-bg-alt transition-colors"
                onClick={onClose}
              >
                Marken
              </Link>
            </li>
            <li>
              <Link
                href="/lignoloc"
                className="block px-4 py-3 text-base font-semibold text-lignoloc hover:bg-lignoloc-light transition-colors"
                onClick={onClose}
              >
                LignoLoc
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer with cart link */}
        <div className="border-t border-border px-4 py-4">
          <Link
            href="/warenkorb"
            className="flex items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
            onClick={onClose}
          >
            {/* Shopping bag icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            Warenkorb{cartCount > 0 ? ` (${cartCount})` : ""}
          </Link>
        </div>
      </div>
    </>
  );
}

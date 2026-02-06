"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";

type ActiveTab = "produkte" | "anwendungen" | null;

interface MegaMenuProps {
  activeTab: ActiveTab;
  onClose: () => void;
}

interface NavLinkItem {
  label: string;
  href: string;
  highlight?: boolean;
}

interface NavColumn {
  title: string;
  links: NavLinkItem[];
}

const produkteColumns: NavColumn[] = [
  {
    title: "Nagler & Tacker",
    links: [
      { label: "Druckluft-Nagler", href: "/produkte/druckluft-nagler" },
      { label: "Akku-Nagler", href: "/produkte/akku-nagler" },
      { label: "Gas-Nagler", href: "/produkte/gas-nagler" },
      { label: "Tacker", href: "/produkte/tacker" },
    ],
  },
  {
    title: "Befestigungsmittel",
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
    title: "Zubehör",
    links: [
      { label: "Kompressoren", href: "/produkte/kompressoren" },
      { label: "Schläuche & Kupplungen", href: "/produkte/schlaeuche" },
      { label: "Akkus & Ladegeräte", href: "/produkte/akkus-ladegeraete" },
      { label: "Ersatzteile", href: "/produkte/ersatzteile" },
    ],
  },
];

const anwendungenColumns: NavColumn[] = [
  {
    title: "Zimmerer",
    links: [
      { label: "Dachlatten", href: "/anwendungen/zimmerer/dachlatten" },
      { label: "Schalung", href: "/anwendungen/zimmerer/schalung" },
      { label: "Holzrahmenbau", href: "/anwendungen/zimmerer/holzrahmen" },
      { label: "Balkenverbindungen", href: "/anwendungen/zimmerer/balken" },
    ],
  },
  {
    title: "Dachdecker",
    links: [
      { label: "Dachpappe", href: "/anwendungen/dachdecker/dachpappe" },
      { label: "Dämmplatten", href: "/anwendungen/dachdecker/daemmplatten" },
      { label: "Lattung", href: "/anwendungen/dachdecker/lattung" },
    ],
  },
  {
    title: "Trockenbauer",
    links: [
      { label: "UK-Montage", href: "/anwendungen/trockenbauer/uk-montage" },
      { label: "Dämmung", href: "/anwendungen/trockenbauer/daemmung" },
      { label: "Profile", href: "/anwendungen/trockenbauer/profile" },
    ],
  },
  {
    title: "Schreiner",
    links: [
      { label: "Möbelbau", href: "/anwendungen/schreiner/moebelbau" },
      { label: "Leisten & Zierprofile", href: "/anwendungen/schreiner/leisten" },
      { label: "Plattenwerkstoffe", href: "/anwendungen/schreiner/platten" },
    ],
  },
  {
    title: "Bodenleger",
    links: [
      { label: "Parkett", href: "/anwendungen/bodenleger/parkett" },
      { label: "Sockelleisten", href: "/anwendungen/bodenleger/sockelleisten" },
    ],
  },
];

export default function MegaMenu({ activeTab, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (activeTab) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeTab, handleKeyDown, handleClickOutside]);

  const columns = activeTab === "produkte" ? produkteColumns : anwendungenColumns;
  const isOpen = activeTab !== null;

  return (
    <div
      ref={menuRef}
      className={`absolute left-0 right-0 top-full z-50 bg-white shadow-lg border-t border-border transition-all duration-200 ease-in-out ${
        isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-2 invisible pointer-events-none"
      }`}
      role="menu"
      aria-label={
        activeTab === "produkte"
          ? "Produktkategorien"
          : "Anwendungsbereiche"
      }
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div
          className={`grid gap-8 ${
            activeTab === "anwendungen"
              ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
                {column.title}
              </h3>
              <ul className="space-y-2" role="none">
                {column.links.map((link) => (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      className={`block text-sm transition-colors ${
                        link.highlight
                          ? "font-semibold text-lignoloc hover:text-lignoloc/80"
                          : "text-text-muted hover:text-accent"
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
        {/* Footer links for the mega menu */}
        <div className="mt-8 border-t border-border pt-4">
          {activeTab === "produkte" ? (
            <Link
              href="/produkte"
              className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              onClick={onClose}
            >
              Alle Produkte anzeigen &rarr;
            </Link>
          ) : (
            <Link
              href="/anwendungen"
              className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              onClick={onClose}
            >
              Alle Anwendungsbereiche anzeigen &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export type { ActiveTab };

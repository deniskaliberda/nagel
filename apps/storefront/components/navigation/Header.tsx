"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import type { ActiveTab } from "./MegaMenu";
import MobileNav from "./MobileNav";
import CartIndicator from "./CartIndicator";

export default function Header() {
  const [activeTab, setActiveTab] = useState<ActiveTab>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // TODO: Replace with real cart state from context/store
  const cartCount = 0;

  const handleTabToggle = useCallback(
    (tab: ActiveTab) => {
      setActiveTab((current) => (current === tab ? null : tab));
    },
    []
  );

  const closeMegaMenu = useCallback(() => {
    setActiveTab(null);
  }, []);

  const openMobileNav = useCallback(() => {
    setMobileNavOpen(true);
  }, []);

  const closeMobileNav = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-30 w-full">
      {/* Top bar - hidden on mobile */}
      <div className="hidden bg-primary text-white sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs sm:px-6 lg:px-8">
          <span className="flex items-center gap-1.5">
            {/* Phone icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Fachberatung: 089 / XXX XXX
          </span>
          <span>Seit über 40 Jahren Ihr Fachhändler</span>
        </div>
      </div>

      {/* Main bar */}
      <div className="relative border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Mobile: hamburger */}
          <button
            onClick={openMobileNav}
            className="p-2 text-primary hover:text-accent transition-colors lg:hidden"
            aria-label="Menü öffnen"
            aria-expanded={mobileNavOpen}
          >
            {/* Hamburger icon */}
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
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-primary sm:text-2xl"
            aria-label="Nagel Paul - Startseite"
          >
            NAGEL PAUL
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            role="navigation"
            aria-label="Hauptnavigation"
          >
            <button
              onClick={() => handleTabToggle("produkte")}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === "produkte"
                  ? "bg-bg-alt text-accent"
                  : "text-primary hover:bg-bg-alt hover:text-accent"
              }`}
              aria-expanded={activeTab === "produkte"}
              aria-haspopup="true"
            >
              Produkte
            </button>
            <button
              onClick={() => handleTabToggle("anwendungen")}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === "anwendungen"
                  ? "bg-bg-alt text-accent"
                  : "text-primary hover:bg-bg-alt hover:text-accent"
              }`}
              aria-expanded={activeTab === "anwendungen"}
              aria-haspopup="true"
            >
              Anwendungen
            </button>
            <Link
              href="/marken"
              className="rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-bg-alt hover:text-accent transition-colors"
              onClick={closeMegaMenu}
            >
              Marken
            </Link>
            <Link
              href="/lignoloc"
              className="rounded-md px-3 py-2 text-sm font-semibold text-lignoloc hover:bg-lignoloc-light transition-colors"
              onClick={closeMegaMenu}
            >
              LignoLoc
            </Link>
          </nav>

          {/* Right side: search + cart */}
          <div className="flex items-center gap-1">
            {/* Search button */}
            <Link
              href="/suche"
              className="p-2 text-primary hover:text-accent transition-colors"
              aria-label="Suche"
            >
              {/* Search / magnifier icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </Link>

            {/* Cart */}
            <CartIndicator count={cartCount} />
          </div>
        </div>

        {/* Mega menu (desktop only) */}
        <div className="hidden lg:block">
          <MegaMenu activeTab={activeTab} onClose={closeMegaMenu} />
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={closeMobileNav}
        cartCount={cartCount}
      />
    </header>
  );
}

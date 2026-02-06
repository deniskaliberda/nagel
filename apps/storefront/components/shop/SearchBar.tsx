"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const RECENT_SEARCHES_KEY = "nagel-paul-recent-searches";
const MAX_RECENT_SEARCHES = 5;

const SUGGESTION_CATEGORIES = [
  { label: "Nagler & Tacker", href: "/produkte/nagler" },
  { label: "Befestigungsmittel", href: "/produkte/befestigungsmittel" },
  { label: "LignoLoc Holznägel", href: "/lignoloc" },
  { label: "Zubehör", href: "/produkte/zubehoer" },
];

function SearchIcon() {
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
        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 text-text-muted"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 text-text-muted"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function getRecentSearches(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (!stored) return [];
    const parsed: unknown = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      return parsed.filter(
        (item): item is string => typeof item === "string"
      );
    }
    return [];
  } catch {
    return [];
  }
}

function addRecentSearch(query: string): void {
  if (typeof window === "undefined") return;
  const trimmed = query.trim();
  if (!trimmed) return;
  try {
    const current = getRecentSearches();
    const filtered = current.filter(
      (item) => item.toLowerCase() !== trimmed.toLowerCase()
    );
    const updated = [trimmed, ...filtered].slice(0, MAX_RECENT_SEARCHES);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
  } catch {
    // localStorage may be unavailable
  }
}

export function SearchBar({
  placeholder = "Produkte suchen...",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const showDropdown = isFocused && query.length === 0;
  const totalItems =
    recentSearches.length + SUGGESTION_CATEGORIES.length;

  useEffect(() => {
    if (isFocused) {
      setRecentSearches(getRecentSearches());
    }
  }, [isFocused]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = useCallback(
    (searchQuery?: string) => {
      const value = searchQuery ?? query;
      const trimmed = value.trim();
      if (!trimmed) return;
      addRecentSearch(trimmed);
      onSearch?.(trimmed);
      setIsFocused(false);
      inputRef.current?.blur();
    },
    [query, onSearch]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!showDropdown) {
        if (event.key === "Enter") {
          event.preventDefault();
          handleSubmit();
        }
        if (event.key === "Escape") {
          setIsFocused(false);
          inputRef.current?.blur();
        }
        return;
      }

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev < totalItems - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev > 0 ? prev - 1 : totalItems - 1
          );
          break;
        case "Enter":
          event.preventDefault();
          if (highlightedIndex >= 0) {
            if (highlightedIndex < recentSearches.length) {
              const selected = recentSearches[highlightedIndex];
              setQuery(selected);
              handleSubmit(selected);
            } else {
              const categoryIndex =
                highlightedIndex - recentSearches.length;
              const category = SUGGESTION_CATEGORIES[categoryIndex];
              if (category) {
                window.location.href = category.href;
              }
            }
          } else {
            handleSubmit();
          }
          break;
        case "Escape":
          setIsFocused(false);
          inputRef.current?.blur();
          break;
      }
    },
    [showDropdown, highlightedIndex, totalItems, recentSearches, handleSubmit]
  );

  return (
    <div ref={containerRef} className="relative w-full" role="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="relative"
      >
        <label htmlFor="search-input" className="sr-only">
          Produktsuche
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon />
          </div>
          <input
            ref={inputRef}
            id="search-input"
            type="search"
            autoComplete="off"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setHighlightedIndex(-1);
            }}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={cn(
              "w-full rounded-lg border bg-white py-2.5 pl-10 pr-4 text-sm text-primary placeholder:text-text-muted transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary/20",
              isFocused
                ? "border-primary shadow-sm"
                : "border-border hover:border-primary/40"
            )}
            role="combobox"
            aria-expanded={showDropdown}
            aria-controls="search-dropdown"
            aria-activedescendant={
              highlightedIndex >= 0
                ? `search-option-${highlightedIndex}`
                : undefined
            }
          />
        </div>
      </form>

      {/* Dropdown */}
      {showDropdown && (
        <div
          id="search-dropdown"
          role="listbox"
          className="absolute left-0 top-full z-30 mt-1 w-full overflow-hidden rounded-lg border border-border bg-white shadow-lg"
        >
          {/* Recent searches */}
          {recentSearches.length > 0 && (
            <div className="border-b border-border px-3 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Letzte Suchen
              </span>
              <ul className="mt-1.5">
                {recentSearches.map((search, index) => (
                  <li key={search}>
                    <button
                      type="button"
                      id={`search-option-${index}`}
                      role="option"
                      aria-selected={highlightedIndex === index}
                      onClick={() => {
                        setQuery(search);
                        handleSubmit(search);
                      }}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-primary transition-colors",
                        highlightedIndex === index
                          ? "bg-bg-alt"
                          : "hover:bg-bg-alt"
                      )}
                    >
                      <ClockIcon />
                      <span>{search}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Suggestion categories */}
          <div className="px-3 py-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Kategorien
            </span>
            <ul className="mt-1.5">
              {SUGGESTION_CATEGORIES.map((category, index) => {
                const optionIndex = recentSearches.length + index;
                return (
                  <li key={category.href}>
                    <a
                      id={`search-option-${optionIndex}`}
                      role="option"
                      aria-selected={highlightedIndex === optionIndex}
                      href={category.href}
                      className={cn(
                        "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm text-primary transition-colors",
                        highlightedIndex === optionIndex
                          ? "bg-bg-alt"
                          : "hover:bg-bg-alt"
                      )}
                    >
                      <span>{category.label}</span>
                      <ArrowRightIcon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

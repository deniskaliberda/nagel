"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface CartIndicatorProps {
  count: number;
}

export default function CartIndicator({ count }: CartIndicatorProps) {
  const badgeRef = useRef<HTMLSpanElement>(null);
  const prevCountRef = useRef(count);

  useEffect(() => {
    if (count !== prevCountRef.current && count > 0 && badgeRef.current) {
      badgeRef.current.classList.remove("animate-bounce-once");
      // Force reflow to restart animation
      void badgeRef.current.offsetWidth;
      badgeRef.current.classList.add("animate-bounce-once");
    }
    prevCountRef.current = count;
  }, [count]);

  return (
    <Link
      href="/warenkorb"
      className="relative inline-flex items-center justify-center p-2 text-primary hover:text-accent transition-colors"
      aria-label={`Warenkorb${count > 0 ? `, ${count} Artikel` : ", leer"}`}
    >
      {/* Shopping bag SVG */}
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
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
      {count > 0 && (
        <span
          ref={badgeRef}
          className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-xs font-bold leading-none"
          style={{
            animationDuration: "0.4s",
            animationTimingFunction: "ease-in-out",
          }}
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}

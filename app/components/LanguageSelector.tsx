"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const languages = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
    href: "/",
  },
  {
    code: "ar",
    label: "Arabic",
    nativeLabel: "العربية",
    href: "/ar",
  },
];

function Flag({ code }: { code: string }) {
  // 🇬🇧 United Kingdom
  if (code === "en") {
    return (
      <svg
        className="language-flag-svg"
        viewBox="0 0 60 40"
        aria-hidden="true"
      >
        <rect width="60" height="40" fill="#012169" />

        {/* White diagonals */}
        <path
          d="M0 0L60 40M60 0L0 40"
          stroke="#FFFFFF"
          strokeWidth="8"
        />

        {/* Red diagonals */}
        <path
          d="M0 0L60 40M60 0L0 40"
          stroke="#C8102E"
          strokeWidth="4"
        />

        {/* White cross */}
        <path
          d="M30 0V40M0 20H60"
          stroke="#FFFFFF"
          strokeWidth="13"
        />

        {/* Red cross */}
        <path
          d="M30 0V40M0 20H60"
          stroke="#C8102E"
          strokeWidth="7"
        />
      </svg>
    );
  }

  // 🇪🇬 Egypt
  if (code === "ar") {
    return (
      <svg
        className="language-flag-svg"
        viewBox="0 0 60 40"
        aria-hidden="true"
      >
        {/* Red */}
        <rect
          x="0"
          y="0"
          width="60"
          height="13.33"
          fill="#CE1126"
        />

        {/* White */}
        <rect
          x="0"
          y="13.33"
          width="60"
          height="13.34"
          fill="#FFFFFF"
        />

        {/* Black */}
        <rect
          x="0"
          y="26.67"
          width="60"
          height="13.33"
          fill="#000000"
        />

        {/* Eagle - simplified */}
        <g transform="translate(30 20)">
          <path
            d="M-8-3 L-4-7 L0-4 L4-7 L8-3 L6 4 L0 7 L-6 4 Z"
            fill="#C09300"
          />

          <path
            d="M-5 0 L5 0 L4 4 L0 6 L-4 4 Z"
            fill="#C09300"
          />

          <rect
            x="-1.2"
            y="-2"
            width="2.4"
            height="7"
            fill="#C09300"
          />
        </g>
      </svg>
    );
  }

  return null;
}

export default function LanguageSelector({
  mobile = false,
  onSelect,
}: {
  mobile?: boolean;
  onSelect?: () => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  if (open) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [open]);

  const isArabic =
    pathname === "/ar" || pathname.startsWith("/ar/");

  const currentLanguage = isArabic
    ? languages.find((language) => language.code === "ar")!
    : languages.find((language) => language.code === "en")!;

  const otherLanguages = languages.filter(
    (language) => language.code !== currentLanguage.code
  );

  if (mobile) {
    return (
      <div className="mobile-language-selector">
        <button
          type="button"
          className="mobile-action mobile-language-trigger"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          <span className="mobile-action-icon">
            <Flag code={currentLanguage.code} />
          </span>

          <span>{currentLanguage.nativeLabel}</span>

          <span className="mobile-language-chevron">
            {open ? "⌃" : "›"}
          </span>
        </button>

        {open && (
          <div className="mobile-language-options">
            {otherLanguages.map((language) => (
              <Link
                key={language.code}
                href={language.href}
                onClick={onSelect}
              >
                <Flag code={language.code} />
                <span>{language.nativeLabel}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
     <div
    ref={menuRef}
    className="language-selector"
  >
      <button
        type="button"
        className="language-switch"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <Flag code={currentLanguage.code} />

        <span>{currentLanguage.nativeLabel}</span>

        <span className="language-chevron">
          {open ? "⌃" : "⌄"}
        </span>
      </button>

      {open && (
        <div className="language-menu">
          {otherLanguages.map((language) => (
            <Link
              key={language.code}
              href={language.href}
              onClick={onSelect}
            >
              <Flag code={language.code} />
              <span>{language.nativeLabel}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
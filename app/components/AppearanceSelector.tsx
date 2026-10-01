"use client";

import { useEffect, useRef, useState } from "react";
import { useNASMCTheme } from "@/app/theme-provider";


const options = [
  {
    value: "light",
    label: "Light",
    icon: "☀",
  },
  {
    value: "dark",
    label: "Dark",
    icon: "☾",
  },
  {
    value: "system",
    label: "System",
    icon: "◐",
  },
];

export default function AppearanceSelector({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  const { theme, setTheme } = useNASMCTheme();
  const chooseTheme = (
  value: "light" | "dark" | "system"
) => {
  sessionStorage.setItem("nasmc-theme-session", value);
  setTheme(value);
  setOpen(false);
};

  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme || "system";

  const currentOption =
    options.find((option) => option.value === currentTheme) ||
    options[2];

  if (mobile) {
    return (
      <div className="mobile-appearance-selector">
        <button
          type="button"
          className="mobile-action mobile-appearance-trigger"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          <span className="mobile-action-icon">
            {currentOption.icon}
          </span>

          <span>Appearance</span>

          <span className="mobile-appearance-current">
            {currentOption.label}
          </span>

          <span className="mobile-language-chevron">
            {open ? "⌃" : "›"}
          </span>
        </button>

        {open && (
          <div className="mobile-appearance-options">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={
                  currentTheme === option.value
                    ? "active"
                    : ""
                }
                onClick={() => {
                  chooseTheme(option.value);
                }}
              >
                <span>{option.icon}</span>

                <span>{option.label}</span>

                {currentTheme === option.value && (
                  <span className="appearance-check">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
  ref={menuRef}
  className="appearance-selector"
>
      <button
        type="button"
        className="appearance-button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Appearance"
        title="Appearance"
      >
        <span>{currentOption.icon}</span>
      </button>

      {open && (
        <div className="appearance-menu">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={
                currentTheme === option.value
                  ? "active"
                  : ""
              }
              onClick={() => {
                chooseTheme(option.value);
              }}
            >
              <span>{option.icon}</span>

              <span>{option.label}</span>

              {currentTheme === option.value && (
                <span className="appearance-check">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
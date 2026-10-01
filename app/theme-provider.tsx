"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const THEME_KEY = "nasmc-theme-session";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useNASMCTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useNASMCTheme must be used inside ThemeProvider"
    );
  }

  return context;
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // مهم: نبدأ بـ system ونرندر الصفحة فورًا
  const [theme, setTheme] = useState<Theme>("system");

  useLayoutEffect(() => {
  const savedTheme = sessionStorage.getItem(THEME_KEY);

  const initialTheme: Theme =
    savedTheme === "light" ||
    savedTheme === "dark" ||
    savedTheme === "system"
      ? savedTheme
      : "system";

  setTheme(initialTheme);

  const effectiveTheme =
    initialTheme === "system"
      ? getSystemTheme()
      : initialTheme;

  document.documentElement.classList.toggle(
    "dark",
    effectiveTheme === "dark"
  );
}, []);

  useEffect(() => {
    const applyTheme = () => {
      const effectiveTheme =
        theme === "system" ? getSystemTheme() : theme;

      document.documentElement.classList.toggle(
        "dark",
        effectiveTheme === "dark"
      );
    };

    applyTheme();

    if (theme === "system") {
      const mediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      mediaQuery.addEventListener("change", applyTheme);

      return () => {
        mediaQuery.removeEventListener("change", applyTheme);
      };
    }
  }, [theme]);

  useEffect(() => {
    sessionStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
(() => {
  try {
    const key = "nasmc-theme-session";
    const saved = sessionStorage.getItem(key);

    let theme = "system";

    if (
      saved === "light" ||
      saved === "dark" ||
      saved === "system"
    ) {
      theme = saved;
    }

    const isDark =
      theme === "dark" ||
      (
        theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );

    document.documentElement.classList.toggle("dark", isDark);

    // Tell CSS that the correct theme has been applied
    document.documentElement.classList.add("theme-ready");
  } catch {
    const isDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.add("theme-ready");
  }
})();
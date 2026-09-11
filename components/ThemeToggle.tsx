"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="theme-toggle inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:text-foreground hover:border-accent"
    >
      <Sun className="theme-icon theme-icon-sun h-4 w-4" />
      <Moon className="theme-icon theme-icon-moon h-4 w-4" />
    </button>
  );
}

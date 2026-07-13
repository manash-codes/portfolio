"use client";

import { useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggle = () => {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next); setTheme(next);
  };
  return <button
    type="button"
    className="theme-toggle"
    onClick={toggle}
    aria-label="Toggle color theme"
  >
    {theme === "dark" ? "Theme" : "Theme"}
  </button>;
}

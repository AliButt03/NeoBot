import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

const themes = [
  {
    bg: "#020617",
    surface: "#020617",
    card: "#020617",
    text: "#f8fafc",
    muted: "#94a3b8",
    accent: "#38bdf8",
  },
  {
    bg: "#0f172a",
    surface: "#020617",
    card: "#020617",
    text: "#e5e7eb",
    muted: "#9ca3af",
    accent: "#22c55e",
  },
  {
    bg: "#111827",
    surface: "#020617",
    card: "#020617",
    text: "#f9fafb",
    muted: "#a1a1aa",
    accent: "#f97316",
  },
  {
    bg: "#1e293b",
    surface: "#020617",
    card: "#020617",
    text: "#f1f5f9",
    muted: "#cbd5f5",
    accent: "#a855f7",
  },
  {
    bg: "#0b1020",
    surface: "#020617",
    card: "#020617",
    text: "#e0f2fe",
    muted: "#7dd3fc",
    accent: "#06b6d4",
  },
  {
    bg: "#120b1f",
    surface: "#020617",
    card: "#020617",
    text: "#fdf4ff",
    muted: "#d8b4fe",
    accent: "#ec4899",
  },
  {
    bg: "#0a1a14",
    surface: "#020617",
    card: "#020617",
    text: "#ecfeff",
    muted: "#67e8f9",
    accent: "#14b8a6",
  },
  {
    bg: "#1a130b",
    surface: "#020617",
    card: "#020617",
    text: "#fffbeb",
    muted: "#fde68a",
    accent: "#f59e0b",
  },
];

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes[0]);

  const randomTheme = () => {
    setTheme(themes[Math.floor(Math.random() * themes.length)]);
  };

  return (
    <ThemeContext.Provider value={{ theme, randomTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

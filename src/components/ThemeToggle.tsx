
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      className="absolute top-4 right-4 md:top-8 md:right-8 z-50 bg-transparent border border-border rounded-full p-2 transition hover:bg-secondary focus:outline-none"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-foreground transition-all" />
      ) : (
        <Moon className="w-5 h-5 text-foreground transition-all" />
      )}
    </button>
  );
}

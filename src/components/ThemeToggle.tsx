
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    // Apply theme to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label="Toggle theme"
      className="absolute top-4 right-4 md:top-8 md:right-8 z-50 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 transition-all duration-200 hover:bg-background hover:scale-110 focus:outline-none shadow-lg"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-foreground transition-all" />
      ) : (
        <Moon className="w-5 h-5 text-foreground transition-all" />
      )}
    </button>
  );
}

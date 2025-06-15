
import { useEffect, useState } from "react";
import { Moon, Sun, Terminal } from "lucide-react";

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
    <div className="fixed top-4 right-4 z-50 font-mono">
      {/* Compact Terminal Window */}
      <div className="border border-border rounded bg-card shadow-lg overflow-hidden w-32">
        {/* Mini Terminal Header */}
        <div className="flex items-center bg-muted px-2 py-1 border-b border-border">
          <div className="flex gap-0.5">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center gap-1 ml-1.5">
            <Terminal className="w-2.5 h-2.5 text-primary" />
            <span className="text-xs font-medium">theme</span>
          </div>
        </div>
        
        {/* Compact Terminal Content */}
        <div className="p-1.5 space-y-0.5">
          <div className="flex items-center gap-1">
            <span className="text-primary text-xs">$</span>
            <span className="text-xs font-medium text-primary">{theme}</span>
          </div>
          
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1 w-full p-1 rounded text-xs bg-muted/50 border border-border/50 hover:border-primary/30 hover:bg-muted transition-all duration-200 group"
          >
            <span className="text-primary">$</span>
            <span>toggle</span>
            <div className="ml-auto">
              {theme === "dark" ? (
                <Sun className="w-2.5 h-2.5 text-muted-foreground group-hover:text-primary transition-colors" />
              ) : (
                <Moon className="w-2.5 h-2.5 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

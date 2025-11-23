import { Menu, Terminal, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Skills", href: "/skills" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-40 font-mono">
      {/* Linux Terminal-style navbar */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center justify-between bg-muted px-4 py-2 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">user@portfolio:~$</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-primary h-8 w-8 p-0 text-muted-foreground"
              >
                {isOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-4 space-y-3 bg-background/95 backdrop-blur-sm">
            {/* Command line with brand */}
            <div className="flex items-center gap-2">
              <span className="text-green-500 font-bold">➜</span>
              <span className="text-blue-400 font-medium">~</span>
              <a
                href="/"
                className="text-primary font-bold hover:text-primary/80 transition-colors"
              >
                ./portfolio
              </a>
            </div>

            {/* Desktop Navigation - Command style */}
            <div className="hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500 font-bold">➜</span>
                <span className="text-blue-400 font-medium">navigation</span>
                <span className="text-muted-foreground">ls -la</span>
              </div>
              <div className="ml-6 flex flex-wrap gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="px-3 py-1 text-sm bg-muted border border-border rounded hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 text-muted-foreground hover:text-primary font-mono"
                  >
                    ./{item.title.toLowerCase()}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500 font-bold">➜</span>
                  <span className="text-blue-400 font-medium">menu</span>
                  <span className="text-muted-foreground">
                    cat navigation.txt
                  </span>
                </div>
                <div className="ml-6 space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 text-sm bg-muted border border-border rounded hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 text-muted-foreground hover:text-primary font-mono"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-green-500 font-bold">{">"}</span>
                      ./{item.title.toLowerCase()}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Command prompt cursor */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-green-500 font-bold">➜</span>
              <span className="text-blue-400 font-medium">~</span>
              <span className="animate-pulse text-primary font-bold">▋</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

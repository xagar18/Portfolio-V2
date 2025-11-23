import { Contact, FileText, Folder, Home } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Skills",
    url: "/skills",
    icon: FileText,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Folder,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Contact,
  },
];

export function AppSidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <>
      {/* Backdrop for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 z-50 bg-background border-r border-border/10 transition-all duration-300 overflow-hidden ${
          open ? "w-64" : "w-0 md:w-16"
        }`}
      >
        <div className={`h-full ${open ? "px-3 py-4" : "md:px-2 md:py-4"}`}>
          <nav className="space-y-1">
            {items.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                onClick={() => setOpen(false)}
                className={`flex items-center rounded-md transition-colors hover:bg-accent/50 text-foreground ${
                  open ? "gap-3 px-3 py-2" : "md:justify-center md:p-3"
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span
                  className={`text-sm whitespace-nowrap transition-opacity duration-300 ${
                    open ? "opacity-100" : "opacity-0 w-0 md:hidden"
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

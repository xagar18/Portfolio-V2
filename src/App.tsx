import { AppSidebar } from "@/components/app-sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import Contact from "@/pages/Contact";
import Main from "@/pages/Main";
import NotFound from "@/pages/NotFound";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <main className="flex-1 min-h-screen relative transition-all duration-200">
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

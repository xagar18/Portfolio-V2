import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
// import { Toaster } from "@/components/ui/toaster";
import { AppSidebar } from "@/components/app-sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Contact from "@/pages/Contact";
import Main from "@/pages/Main";
import NotFound from "@/pages/NotFound";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* <Toaster /> */}
      <Sonner />
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <main className="flex-1 min-h-screen relative transition-all duration-200">
            <div className="fixed top-4 z-50 transition-all duration-200 peer-data-[state=collapsed]:left-4 peer-data-[state=expanded]:left-[calc(16rem+1rem)]">
              <SidebarTrigger className="h-8 w-8" />
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
      </SidebarProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

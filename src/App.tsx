import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import Veterinario from "./pages/Veterinario";
import Acessorios from "./pages/Acessorios";
import Caes from "./pages/Caes";
import Cuidadores from "./pages/Cuidadores";
import Sobre from "./pages/Sobre";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/caes" element={<Caes />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/veterinario" element={<Veterinario />} />
          <Route path="/acessorios" element={<Acessorios />} />
          <Route path="/cuidadores" element={<Cuidadores />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Cães", href: "/caes" },
    { label: "Acessórios", href: "/acessorios" },
    { label: "Veterinário", href: "/veterinario" },
    { label: "Cuidadores", href: "/cuidadores" },
    { label: "Galeria", href: "/galeria" },
    { label: "Contacto", href: "/contacto" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 rounded-full border-4 border-white bg-white flex items-center justify-center">
                <img src="/logo_petpace.jpeg" alt="Logo PET PALACE" className="w-12 h-12 object-contain" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-0 animate-slide-up drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)] font-[Inter,sans-serif] tracking-tight whitespace-nowrap">
                  <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)] animate-gradient-x">
                    PET PALACE
                  </span>
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-primary/10"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-primary/10"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Namibe</span>
            </div>
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold rounded-lg hover-lift"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contactar
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-strong rounded-lg mt-2 border border-foreground/10">
              {navItems.map((item) => (
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-primary/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-primary/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <div className="pt-4 border-t border-foreground/10 mt-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contactar Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
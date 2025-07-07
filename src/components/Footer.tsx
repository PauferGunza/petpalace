import { Heart, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Namibe Pet Palace</h3>
                <p className="text-xs text-muted-foreground">Província do Namibe</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              O seu destino completo para cães de qualidade, acessórios e cuidados veterinários na província do Namibe, Angola.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2">
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#caes" className="hover:text-primary transition-colors">Venda de Cães</a></li>
              <li><a href="#acessorios" className="hover:text-primary transition-colors">Acessórios para Pets</a></li>
              <li><a href="#veterinario" className="hover:text-primary transition-colors">Consultas Veterinárias</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Vacinação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cirurgias</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cuidados Preventivos</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Como Comprar</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Devolução</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Rua Principal, Moçâmedes<br />Província do Namibe, Angola</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+244 923 456 789</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>info@namibepetpalace.ao</span>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-4 p-3 glass rounded-lg">
              <h5 className="font-semibold text-foreground text-sm mb-2">Horário de Funcionamento</h5>
              <div className="text-xs text-muted-foreground space-y-1">
                <div className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>8:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>8:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Namibe Pet Palace. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>em Angola</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
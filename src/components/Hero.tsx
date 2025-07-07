import { Button } from "@/components/ui/button";
import { Heart, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-fade-in">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Província do Namibe, Angola</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="block text-foreground drop-shadow-lg">Namibe</span>
          <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Pet Palace
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md animate-slide-up" style={{ animationDelay: '0.2s' }}>
          O seu destino completo para <strong>cães de qualidade</strong>, acessórios especializados e cuidados veterinários na província do Namibe
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-strong px-4 py-2 rounded-lg">
            <span className="text-sm font-semibold text-primary">🐕 Cães de Raça</span>
          </div>
          <div className="glass-strong px-4 py-2 rounded-lg">
            <span className="text-sm font-semibold text-primary">🛍️ Acessórios</span>
          </div>
          <div className="glass-strong px-4 py-2 rounded-lg">
            <span className="text-sm font-semibold text-primary">🏥 Consultas Veterinárias</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            onClick={() => document.getElementById('caes')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-button group hover-lift bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-elegant hover:shadow-hover transition-all duration-300"
          >
            <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Explorar Cães
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('veterinario')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-strong border-2 border-primary/30 hover:border-primary text-foreground hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-xl hover-lift transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Agendar Consulta
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-foreground/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm text-foreground/70 mb-4">Confiado por famílias em todo o Namibe</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-xs text-foreground/60">Cães Vendidos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-xs text-foreground/60">Famílias Felizes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-xs text-foreground/60">Consultas/Mês</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
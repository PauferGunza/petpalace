import { Button } from "@/components/ui/button";
import { Heart, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12">
      <div className="max-w-4xl w-full mx-auto z-10">
        {/* Location Badge ainda mais à direita */}
        <div className="flex w-full justify-end">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full animate-fade-in shadow-lg mt-4 mb-8 sm:mt-8 sm:mb-10 mr-0 sm:mr-8 lg:mr-16">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-white">Província do Namibe, Angola</span>
          </div>
        </div>
        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 sm:mb-8 animate-slide-up drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)] font-sans tracking-tight text-center">
          <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)] animate-gradient-x">
            PET PALACE
          </span>
        </h1>
        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl text-white mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] font-medium text-center" style={{ animationDelay: '0.2s' }}>
          O seu destino completo para <strong>cães de qualidade</strong>, acessórios especializados e cuidados veterinários na província do Namibe
        </p>
        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-strong px-3 py-2 sm:px-4 rounded-lg">
            <span className="text-xs sm:text-sm font-semibold text-primary">🐕 Cães de Raça</span>
          </div>
          <div className="glass-strong px-3 py-2 sm:px-4 rounded-lg">
            <span className="text-xs sm:text-sm font-semibold text-primary">🛍️ Acessórios</span>
          </div>
          <div className="glass-strong px-3 py-2 sm:px-4 rounded-lg">
            <span className="text-xs sm:text-sm font-semibold text-primary">🏥 Consultas Veterinárias</span>
          </div>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up w-full" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            onClick={() => document.getElementById('caes')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-button group hover-lift bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-500 hover:from-pink-500 hover:to-orange-400 text-white px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] border-0 w-full sm:w-auto"
          >
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-pulse" />
            Explorar Cães
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('veterinario')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-strong border-2 border-orange-300 hover:border-pink-400 text-white hover:bg-orange-400/20 px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-xl font-bold rounded-2xl hover-lift transition-all duration-300 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] hover:scale-105 w-full sm:w-auto"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
            Agendar Consulta
          </Button>
        </div>
        {/* Trust Indicators */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-foreground/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-xs sm:text-sm text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-center">Confiado por famílias em todo o Namibe</p>
          <div className="flex justify-center items-center gap-4 sm:gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-primary">500+</div>
              <div className="text-xs text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Cães Vendidos</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-primary">200+</div>
              <div className="text-xs text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Famílias Felizes</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-primary">50+</div>
              <div className="text-xs text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Consultas/Mês</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
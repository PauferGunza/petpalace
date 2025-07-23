import VideoBackground from "@/components/VideoBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DogShowcase from "@/components/DogShowcase";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Video Background */}
      <VideoBackground videoId="cvbWvtSsAC0" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section */}
        <Services />
        
        {/* Dog Showcase */}
        <DogShowcase />
        
        {/* Veterinarian Section */}
        <section id="veterinario" className="py-20 px-4 bg-card/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Cuidados Veterinários Especializados
            </h2>
            <p className="text-lg text-white mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Agende consultas com os melhores veterinários da província do Namibe. 
              Cuidados de qualidade para o seu melhor amigo.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glow text-white px-8 py-3 rounded-lg font-semibold hover-lift drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              <Phone className="w-5 h-5 mr-2" />
              Agendar Consulta Veterinária
            </Button>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

import VideoBackground from "@/components/VideoBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DogShowcase from "@/components/DogShowcase";
import Footer from "@/components/Footer";

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
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, Star } from "lucide-react";
import { useDogs } from "@/hooks/useDogs";
import { useToast } from "@/hooks/use-toast";

const DogShowcase = () => {
  const { data: dogs, isLoading } = useDogs();
  const { toast } = useToast();

  const handleInterest = (dogName: string) => {
    toast({
      title: "Interesse registrado!",
      description: `Seu interesse em ${dogName} foi registrado. Entraremos em contacto em breve.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getBreedDisplayName = (breed: string) => {
    const breedNames: { [key: string]: string } = {
      'pastor_alemao': 'Pastor Alemão',
      'golden_retriever': 'Golden Retriever',
      'labrador': 'Labrador',
      'rottweiler': 'Rottweiler',
      'outro': 'Outro'
    };
    return breedNames[breed] || breed;
  };

  // Show featured dogs (first 3)
  const featuredDogs = dogs?.slice(0, 3) || [];

  return (
    <section className="py-20 px-4" id="caes">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cães em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos cães disponíveis na província do Namibe.
          </p>
        </div>

        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground">Carregando cães disponíveis...</p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredDogs.map((dog) => (
            <Card key={dog.id} className="glass-strong hover-lift group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-4 text-6xl flex items-center justify-center">
                  🐕
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {dog.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {getBreedDisplayName(dog.breed)} • {Math.floor(dog.age_months / 12)} anos
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-foreground/80 mb-4">
                  {dog.description || `${getBreedDisplayName(dog.breed)} de alta qualidade`}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {dog.vaccinated && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Vacinado
                    </Badge>
                  )}
                  {dog.pedigree && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Pedigree
                    </Badge>
                  )}
                </div>

                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-primary">{formatPrice(dog.price)}</div>
                </div>

                <div className="space-y-2">
                  <Button 
                    onClick={() => handleInterest(dog.name)}
                    className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold hover-lift"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Tenho Interesse
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center glass-strong rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Mais de {dogs?.length || 4} Cães Disponíveis
          </h3>
          <p className="text-muted-foreground mb-6">
            Explore nosso catálogo completo no Namibe.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 rounded-lg font-semibold hover-lift"
          >
            Ver Todos os Cães
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DogShowcase;
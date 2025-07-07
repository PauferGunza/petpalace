import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Phone, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDogsByBreed } from "@/hooks/useDogs";
import { useToast } from "@/hooks/use-toast";

const DogsPage = () => {
  const [selectedBreed, setSelectedBreed] = useState<"all" | import("@/hooks/useDogs").DogBreed>("all");
  const { data: dogs, isLoading } = useDogsByBreed(selectedBreed);
  const { toast } = useToast();

  const handleContactSeller = (dogName: string) => {
    toast({
      title: "Interesse em " + dogName,
      description: "Entre em contacto connosco para mais informações sobre este cão.",
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
      'bulldog': 'Bulldog',
      'poodle': 'Poodle',
      'rottweiler': 'Rottweiler',
      'doberman': 'Doberman',
      'husky': 'Husky',
      'beagle': 'Beagle',
      'boxer': 'Boxer',
      'outro': 'Outro'
    };
    return breedNames[breed] || breed;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground">Carregando cães disponíveis...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Cães Disponíveis no Namibe
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre o seu companheiro perfeito. Todos os nossos cães são vacinados, 
            com pedigree e garantia de saúde.
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-4 mb-8">
          <Filter className="w-5 h-5 text-primary" />
          <Select value={selectedBreed} onValueChange={(value) => setSelectedBreed(value as any)}>
            <SelectTrigger className="w-64 glass">
              <SelectValue placeholder="Filtrar por raça" />
            </SelectTrigger>
            <SelectContent className="glass-strong">
              <SelectItem value="all">Todas as Raças</SelectItem>
              <SelectItem value="pastor_alemao">Pastor Alemão</SelectItem>
              <SelectItem value="golden_retriever">Golden Retriever</SelectItem>
              <SelectItem value="labrador">Labrador</SelectItem>
              <SelectItem value="rottweiler">Rottweiler</SelectItem>
              <SelectItem value="bulldog">Bulldog</SelectItem>
              <SelectItem value="poodle">Poodle</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Dogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogs?.map((dog) => (
            <Card key={dog.id} className="glass-strong hover-lift group">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  {dog.image_url ? (
                    <img 
                      src={dog.image_url} 
                      alt={dog.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-muted-foreground text-center">
                      <Heart className="w-12 h-12 mx-auto mb-2" />
                      <p>Foto em breve</p>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {dog.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary">
                    {formatPrice(dog.price)}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Dog Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {getBreedDisplayName(dog.breed)}
                    </Badge>
                    <Badge variant="outline">
                      {dog.size.charAt(0).toUpperCase() + dog.size.slice(1)}
                    </Badge>
                    <Badge variant="outline">
                      {dog.gender === 'macho' ? 'Macho' : 'Fêmea'}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    <strong>Idade:</strong> {Math.floor(dog.age_months / 12)} anos e {dog.age_months % 12} meses
                  </p>
                  
                  {dog.description && (
                    <p className="text-sm text-foreground/80">
                      {dog.description}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-4 text-sm">
                    {dog.vaccinated && (
                      <Badge className="bg-green-500/20 text-green-700">
                        ✓ Vacinado
                      </Badge>
                    )}
                    {dog.pedigree && (
                      <Badge className="bg-blue-500/20 text-blue-700">
                        ✓ Pedigree
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold hover-lift"
                    onClick={() => handleContactSeller(dog.name)}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Tenho Interesse
                  </Button>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Província do Namibe</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center glass-strong rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Interessado em algum dos nossos cães?
          </h3>
          <p className="text-muted-foreground mb-6">
            Entre em contacto connosco para agendar uma visita ou obter mais informações
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 rounded-lg font-semibold hover-lift"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contactar Agora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DogsPage;
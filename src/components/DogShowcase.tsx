import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, MapPin } from "lucide-react";

const DogShowcase = () => {
  const dogs = [
    {
      id: 1,
      name: "Golden Retriever",
      age: "3 meses",
      price: "250.000 Kz",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
      description: "Cão dócil, ideal para famílias com crianças",
      features: ["Vacinado", "Pedigree", "Microchip"],
      rating: 5,
      available: true
    },
    {
      id: 2,
      name: "Pastor Alemão",
      age: "4 meses",
      price: "300.000 Kz",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=300&fit=crop",
      description: "Excelente cão de guarda, leal e inteligente",
      features: ["Vacinado", "Pedigree", "Treinado"],
      rating: 5,
      available: true
    },
    {
      id: 3,
      name: "Labrador",
      age: "2 meses",
      price: "200.000 Kz",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop",
      description: "Companheiro perfeito, muito carinhoso",
      features: ["Vacinado", "Pedigree", "Socializado"],
      rating: 5,
      available: false
    },
    {
      id: 4,
      name: "Husky Siberiano",
      age: "5 meses",
      price: "350.000 Kz",
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop",
      description: "Enérgico e aventureiro, ideal para pessoas ativas",
      features: ["Vacinado", "Pedigree", "Atletico"],
      rating: 4,
      available: true
    },
    {
      id: 5,
      name: "Bulldog Francês",
      age: "3 meses",
      price: "400.000 Kz",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
      description: "Pequeno, charmoso e perfeito para apartamentos",
      features: ["Vacinado", "Pedigree", "Compacto"],
      rating: 5,
      available: true
    },
    {
      id: 6,
      name: "Border Collie",
      age: "4 meses",
      price: "280.000 Kz",
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop",
      description: "Muito inteligente, ótimo para treinamentos",
      features: ["Vacinado", "Pedigree", "Inteligente"],
      rating: 5,
      available: true
    }
  ];

  return (
    <section className="py-20 px-4" id="caes">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cães Disponíveis no Namibe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre o companheiro perfeito para sua família. Todos os nossos cães 
            vêm com garantia de saúde e documentação completa.
          </p>
        </div>

        {/* Dogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogs.map((dog) => (
            <Card key={dog.id} className="glass-strong hover-lift group overflow-hidden">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={dog.image} 
                  alt={dog.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  {dog.available ? (
                    <Badge className="bg-green-500 text-white">Disponível</Badge>
                  ) : (
                    <Badge variant="destructive">Vendido</Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="w-8 h-8 p-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                  >
                    <Heart className="w-4 h-4 text-white" />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {dog.name}
                  </CardTitle>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < dog.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {dog.age} • {dog.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {dog.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-primary">{dog.price}</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Namibe</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground font-semibold rounded-lg hover-lift"
                    disabled={!dog.available}
                  >
                    {dog.available ? 'Comprar' : 'Indisponível'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass border-primary/30 hover:border-primary text-foreground hover:bg-primary/10"
                  >
                    Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="glass-strong border-2 border-primary/30 hover:border-primary text-foreground hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-xl hover-lift"
          >
            Ver Mais Cães Disponíveis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DogShowcase;
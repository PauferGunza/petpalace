import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useDogs } from "@/hooks/useDogs";
import { Heart, Star } from "lucide-react";

const PopularDogsCards = () => {
  const { data: dogs, isLoading } = useDogs();
  // Simulação: pegar os 3 primeiros como "mais populares"
  const popularDogs = dogs?.slice(0, 3) || [];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Cães em Destaque
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Conheça alguns dos nossos cães disponíveis na província do Namibe.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="col-span-3 text-center text-muted-foreground">Carregando cães populares...</div>
          ) : (
            popularDogs.map((dog) => (
              <Card key={dog.id} className="hover-lift group cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 text-6xl flex items-center justify-center">
                    🐕
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {dog.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {dog.breed.charAt(0).toUpperCase() + dog.breed.slice(1)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 mb-4">
                    {dog.description || "Cão de alta qualidade"}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {dog.vaccinated && (
                      <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded text-xs"><Star className="w-3 h-3 mr-1" /> Vacinado</span>
                    )}
                    {dog.pedigree && (
                      <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"><Star className="w-3 h-3 mr-1" /> Pedigree</span>
                    )}
                  </div>
                  <div className="text-center mb-2">
                    <span className="text-lg font-bold text-primary">{dog.price?.toLocaleString("pt-AO", { style: "currency", currency: "AOA", minimumFractionDigits: 0 })}</span>
                  </div>
                  <button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold rounded-lg py-2 mt-2 flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4" /> Tenho Interesse
                  </button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularDogsCards; 
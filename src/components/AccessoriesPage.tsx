import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Package, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAccessoriesByCategory } from "@/hooks/useAccessories";
import { useToast } from "@/hooks/use-toast";

const AccessoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | import("@/hooks/useAccessories").AccessoryCategory>("all");
  const { data: accessories, isLoading } = useAccessoriesByCategory(selectedCategory);
  const { toast } = useToast();

  const handleAddToCart = (accessoryName: string) => {
    toast({
      title: "Adicionado ao carrinho",
      description: `${accessoryName} foi adicionado ao seu carrinho.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getCategoryDisplayName = (category: string) => {
    const categoryNames: { [key: string]: string } = {
      'racao': 'Ração',
      'brinquedos': 'Brinquedos',
      'coleiras': 'Coleiras',
      'camas': 'Camas',
      'higiene': 'Higiene',
      'outro': 'Outros'
    };
    return categoryNames[category] || category;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground">Carregando acessórios disponíveis...</p>
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
            Acessórios para o seu Pet
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que o seu cão precisa para ser feliz e saudável. 
            Produtos de qualidade premium disponíveis no Namibe.
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-4 mb-8">
          <Filter className="w-5 h-5 text-primary" />
          <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as any)}>
            <SelectTrigger className="w-64 glass">
              <SelectValue placeholder="Filtrar por categoria" />
            </SelectTrigger>
            <SelectContent className="glass-strong">
              <SelectItem value="all">Todas as Categorias</SelectItem>
              <SelectItem value="racao">Ração</SelectItem>
              <SelectItem value="brinquedos">Brinquedos</SelectItem>
              <SelectItem value="coleiras">Coleiras</SelectItem>
              <SelectItem value="camas">Camas</SelectItem>
              <SelectItem value="higiene">Higiene</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Accessories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {accessories?.map((accessory) => (
            <Card key={accessory.id} className="glass-strong hover-lift group">
              <CardHeader className="pb-4">
                <div className="w-full h-40 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  {accessory.image_url ? (
                    <img 
                      src={accessory.image_url} 
                      alt={accessory.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-muted-foreground text-center">
                      <Package className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs">Foto em breve</p>
                    </div>
                  )}
                </div>
                
                <CardTitle className="text-lg font-bold text-foreground leading-tight">
                  {accessory.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Product Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {getCategoryDisplayName(accessory.category)}
                    </Badge>
                    <div className="text-xl font-bold text-primary">
                      {formatPrice(accessory.price)}
                    </div>
                  </div>
                  
                  {accessory.brand && (
                    <p className="text-sm text-muted-foreground">
                      <strong>Marca:</strong> {accessory.brand}
                    </p>
                  )}
                  
                  {accessory.description && (
                    <p className="text-sm text-foreground/80 line-clamp-2">
                      {accessory.description}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Stock: {accessory.stock_quantity}
                    </span>
                    {accessory.stock_quantity > 0 ? (
                      <Badge className="bg-green-500/20 text-green-700">
                        Disponível
                      </Badge>
                    ) : (
                      <Badge variant="destructive">
                        Esgotado
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <Button 
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold hover-lift"
                  onClick={() => handleAddToCart(accessory.name)}
                  disabled={accessory.stock_quantity === 0}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  {accessory.stock_quantity > 0 ? "Adicionar ao Carrinho" : "Esgotado"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {accessories?.length === 0 && (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhum acessório encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente filtrar por uma categoria diferente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccessoriesPage;
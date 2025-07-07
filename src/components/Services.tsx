import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Stethoscope, Calendar, MapPin, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cães de Qualidade",
      description: "Cães de raça pura com pedigree, vacinação completa e garantia de saúde. Todas as raças disponíveis.",
      features: ["Pedigree certificado", "Vacinação completa", "Garantia de saúde", "Suporte pós-venda"],
      price: "A partir de 150.000 Kz",
      color: "text-red-500"
    },
    {
      icon: ShoppingBag,
      title: "Acessórios Premium",
      description: "Tudo que o seu cão precisa: rações premium, brinquedos, coleiras, camas e muito mais.",
      features: ["Rações importadas", "Brinquedos educativos", "Coleiras personalizadas", "Camas confortáveis"],
      price: "A partir de 5.000 Kz",
      color: "text-blue-500"
    },
    {
      icon: Stethoscope,
      title: "Cuidados Veterinários",
      description: "Consultas com veterinários especializados, vacinação, cirurgias e cuidados preventivos.",
      features: ["Consultas especializadas", "Vacinação completa", "Cirurgias", "Cuidados preventivos"],
      price: "Consulta: 8.000 Kz",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços no Namibe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para o seu melhor amigo, 
            com qualidade e cuidado que você pode confiar na província do Namibe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="glass-strong hover-lift group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold rounded-lg hover-lift"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location Highlight */}
        <div className="glass-strong rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Localização Privilegiada</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Estamos estrategicamente localizados na província do Namibe para melhor servir 
            você e seu companheiro de quatro patas. Venha nos visitar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 rounded-lg font-semibold hover-lift"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Visita
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-primary/30 hover:border-primary text-foreground hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold hover-lift"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Ver Localização
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
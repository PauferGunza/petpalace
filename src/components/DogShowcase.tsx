import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, Star } from "lucide-react";
import { useDogs } from "@/hooks/useDogs";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const DogShowcase = () => {
  const { data: dogs, isLoading } = useDogs();
  const { toast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDog, setModalDog] = useState(null);

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

  // Dados das raças para o modal
  const breedDetails = [
    {
      img: "/douber%20alem%C3%A3.webp",
      title: "Dogue Alemão",
      subtitle: "O gigante gentil",
      qualidades: "Dócil, protetor, muito apegado à família.",
      curiosidade: "Apesar do tamanho, é calmo e adora companhia!",
      detalhes: "O Dogue Alemão é uma das maiores raças do mundo, conhecido por sua imponência e temperamento dócil. Ideal para famílias que buscam um cão protetor e carinhoso.",
    },
    {
      img: "/caes-rottweiler-800x533.jpg",
      title: "Rottweiler",
      subtitle: "Força e lealdade",
      qualidades: "Protetor, corajoso, excelente cão de guarda.",
      curiosidade: "Muito inteligente e aprende comandos com facilidade.",
      detalhes: "O Rottweiler é um cão de guarda por excelência, leal e muito protetor. Com socialização adequada, é um ótimo companheiro para toda a família.",
    },
    {
      img: "/pastor-alemao-conheca-algumas-curiosidades-sobre-a-raca.jpg",
      title: "Pastor Alemão",
      subtitle: "Inteligência e versatilidade",
      qualidades: "Obediente, protetor, ótimo para famílias e trabalho.",
      curiosidade: "Muito usado em serviços policiais e de resgate.",
      detalhes: "O Pastor Alemão é uma das raças mais inteligentes e versáteis, sendo utilizado em diversas funções, desde cão de companhia até cão policial.",
    },
    {
      img: "/aisiberciano.jpg",
      title: "Lobo Checo",
      subtitle: "Beleza selvagem",
      qualidades: "Independente, resistente, aparência marcante.",
      curiosidade: "Precisa de espaço e muita atividade física.",
      detalhes: "O Lobo Checo é uma raça exótica, com aparência marcante e personalidade forte. Ideal para quem busca um cão diferente e com energia de sobra.",
    },
  ];

  return (
    <section className="py-20 px-4" id="caes">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Cães em Destaque
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Conheça alguns dos nossos cães disponíveis na província do Namibe.
          </p>
        </div>
        {/* Cards dos cães Luna, Rex e Max com imagens .avif */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="hover-lift group cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500 flex items-center justify-center bg-muted">
                <img src="/max.avif" alt="Pastor Alemão" className="w-full h-full object-cover" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Max</CardTitle>
              <CardDescription className="text-muted-foreground">Pastor Alemão</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-foreground/80 mb-2">Idade: 8 meses</p>
              <p className="text-sm text-foreground/80 mb-2">Personalidade: Protetor, leal e brincalhão.</p>
              <p className="text-xs text-orange-500 mb-4 italic">Curiosidade: Adora brincar com crianças e aprende comandos rápido!</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-2 mt-2">Quero saber mais</Button>
            </CardContent>
          </Card>
          <Card className="hover-lift group cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500 flex items-center justify-center bg-muted">
                <img src="/luna.avif" alt="Golden Retriever" className="w-full h-full object-cover" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Luna</CardTitle>
              <CardDescription className="text-muted-foreground">Golden Retriever</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-foreground/80 mb-2">Idade: 6 meses</p>
              <p className="text-sm text-foreground/80 mb-2">Personalidade: Carinhosa, sociável e muito dócil.</p>
              <p className="text-xs text-orange-500 mb-4 italic">Curiosidade: Ama água e é perfeita para famílias!</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-2 mt-2">Quero saber mais</Button>
            </CardContent>
          </Card>
          <Card className="hover-lift group cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500 flex items-center justify-center bg-muted">
                <img src="/rex.avif" alt="Labrador" className="w-full h-full object-cover" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Rex</CardTitle>
              <CardDescription className="text-muted-foreground">Labrador</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-foreground/80 mb-2">Idade: 1 ano</p>
              <p className="text-sm text-foreground/80 mb-2">Personalidade: Brincalhão, inteligente e companheiro.</p>
              <p className="text-xs text-orange-500 mb-4 italic">Curiosidade: Gosta de passeios longos e é ótimo com outros animais!</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-2 mt-2">Quero saber mais</Button>
            </CardContent>
          </Card>
        </div>

        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground">Carregando cães disponíveis...</p>
          </div>
        )}

        {/* Título acima dos 4 cards */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Veja alguns dos cães que você pode encontrar na plataforma
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Saiba um pouco sobre eles antes de comprar ou vender. Clique em "Quero saber mais" para detalhes completos!
          </p>
        </div>
        {/* 4 cards de raças com foto, qualidades e curiosidade */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {breedDetails.map((dog, idx) => (
            <Card key={dog.title} className="hover-lift group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500 flex items-center justify-center bg-muted">
                  <img src={dog.img} alt={dog.title} className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{dog.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{dog.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-foreground/80 mb-2">Qualidades: {dog.qualidades}</p>
                <p className="text-xs text-orange-500 mb-4 italic">Curiosidade: {dog.curiosidade}</p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-2 mt-2" onClick={() => { setModalDog(dog); setModalOpen(true); }}>Quero saber mais</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Modal de detalhes */}
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="max-w-md mx-auto">
            {modalDog && (
              <>
                <DialogHeader>
                  <DialogTitle>{modalDog.title}</DialogTitle>
                  <DialogDescription>{modalDog.subtitle}</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center gap-4 mt-2">
                  <img src={modalDog.img} alt={modalDog.title} className="w-40 h-40 rounded-full object-cover border-4 border-orange-500" />
                  <p className="text-sm text-foreground/80"><strong>Qualidades:</strong> {modalDog.qualidades}</p>
                  <p className="text-sm text-orange-500 italic"><strong>Curiosidade:</strong> {modalDog.curiosidade}</p>
                  <p className="text-base text-foreground mt-2">{modalDog.detalhes}</p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-2 mt-2" onClick={() => setModalOpen(false)}>Fechar</Button>
                  <Button variant="outline" className="mt-2" onClick={() => window.location.href='/galeria'}>Ver todas as raças</Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <div className="text-center glass-strong rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Temos vários cães à espera de você!
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
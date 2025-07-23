import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import VideoBackground from "@/components/VideoBackground";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const breeds = [
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

const Galeria = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDog, setModalDog] = useState(null);

  return (
    <div className="min-h-screen relative">
      {/* Video de fundo */}
      <VideoBackground videoId="cvbWvtSsAC0" />
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      {/* Cabeçalho */}
      <Navigation />
      <main>
        <section className="py-20 px-4 min-h-screen relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                Galeria de Raças de Cães
              </h1>
              <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Descubra as principais raças de cães do mundo. Clique em "Saber mais" para ver detalhes de cada uma!
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {breeds.map((dog) => (
                <Card key={dog.title} className="hover-lift group cursor-pointer bg-black/60 border-none">
                  <CardHeader className="text-center pb-4">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500 flex items-center justify-center bg-muted">
                      <img src={dog.img} alt={dog.title} className="w-full h-full object-cover" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">{dog.title}</CardTitle>
                    <CardDescription className="text-orange-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">{dog.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-white mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">Qualidades: {dog.qualidades}</p>
                    <p className="text-xs text-orange-400 mb-4 italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">Curiosidade: {dog.curiosidade}</p>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-2 mt-2" onClick={() => { setModalDog(dog); setModalOpen(true); }}>Saber mais</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-xl text-orange-400 mt-12 text-center font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              Mais raças de cães serão adicionadas futuramente à plataforma aqui na galeria.<br />
              <span className="text-2xl text-white font-extrabold block mt-2">Aguarde novidades incríveis para encontrar ou vender o seu cão dos sonhos!</span>
            </p>
            {/* Modal de detalhes */}
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
              <DialogContent className="max-w-md mx-auto bg-black/90">
                {modalDog && (
                  <>
                    <DialogHeader>
                      <DialogTitle className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">{modalDog.title}</DialogTitle>
                      <DialogDescription className="text-orange-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">{modalDog.subtitle}</DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-center gap-4 mt-2">
                      <img src={modalDog.img} alt={modalDog.title} className="w-40 h-40 rounded-full object-cover border-4 border-orange-500" />
                      <p className="text-sm text-white"><strong>Qualidades:</strong> {modalDog.qualidades}</p>
                      <p className="text-sm text-orange-400 italic"><strong>Curiosidade:</strong> {modalDog.curiosidade}</p>
                      <p className="text-base text-white mt-2">{modalDog.detalhes}</p>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-2 mt-2" onClick={() => setModalOpen(false)}>Fechar</Button>
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </main>
      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Galeria; 
import VideoBackground from "@/components/VideoBackground";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Star, PawPrint } from "lucide-react";

const caes = [
  {
    nome: "Max",
    raca: "Pastor Alemão",
    idade: "8 meses",
    descricao: "Protetor, leal e brincalhão. Ideal para famílias e quem busca segurança.",
    curiosidade: "Adora crianças e aprende comandos rápido!",
    imagem: "/max.avif"
  },
  {
    nome: "Luna",
    raca: "Golden Retriever",
    idade: "6 meses",
    descricao: "Carinhosa, sociável e muito dócil. Companheira perfeita para todas as idades.",
    curiosidade: "Ama água e é perfeita para famílias!",
    imagem: "/luna.avif"
  },
  {
    nome: "Rex",
    raca: "Labrador",
    idade: "1 ano",
    descricao: "Brincalhão, inteligente e companheiro. Ótimo para quem busca alegria e energia.",
    curiosidade: "Gosta de passeios longos e é ótimo com outros animais!",
    imagem: "/rex.avif"
  },
  {
    nome: "Bella",
    raca: "Dogue Alemão",
    idade: "10 meses",
    descricao: "Gentil, imponente e muito apegada à família. Surpreende pelo tamanho e doçura.",
    curiosidade: "Apesar do porte, é calma e adora companhia!",
    imagem: "/douber%20alem%C3%A3.webp"
  },
];

const Caes = () => {
  return (
    <div className="min-h-screen relative">
      <VideoBackground videoId="cvbWvtSsAC0" />
      <div className="absolute inset-0 bg-black/70 z-0" />
      <Navigation />
      <main>
        <section className="py-20 px-4 min-h-screen relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]">
                Encontre o cão que vai transformar sua vida
              </h1>
              <p className="text-xl text-orange-300 max-w-2xl mx-auto mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Não importa sua idade, estilo ou se nunca teve um pet: aqui você encontra amor, alegria e um amigo fiel para toda a vida. Adote felicidade!
              </p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-xl shadow-lg animate-bounce">
                Quero conhecer meu novo melhor amigo
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {caes.map((cao, idx) => (
                <div key={idx} className="bg-black/60 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform">
                  <img src={cao.imagem} alt={cao.nome} className="w-32 h-32 mb-4 object-cover rounded-full border-4 border-orange-500 shadow-lg" />
                  <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2"><PawPrint className="w-6 h-6 text-orange-400" /> {cao.nome}</h2>
                  <span className="text-orange-300 text-lg font-semibold mb-1">{cao.raca}</span>
                  <span className="text-white/80 text-sm mb-2">Idade: {cao.idade}</span>
                  <p className="text-white/90 mb-2">{cao.descricao}</p>
                  <p className="text-orange-400 italic mb-4">{cao.curiosidade}</p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg px-6 py-2 mt-2 text-lg shadow-md animate-pulse">
                    <Heart className="w-5 h-5 mr-2" /> Quero Adotar Alegria
                  </Button>
                  <Button variant="outline" className="mt-2 border-orange-400 text-orange-200 hover:bg-orange-500/20 hover:text-white font-semibold rounded-lg px-6 py-2">
                    <Star className="w-5 h-5 mr-2 text-orange-400" /> Ver Detalhes
                  </Button>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">Ainda não se decidiu?</h2>
              <p className="text-lg text-orange-300 mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">Venha conhecer pessoalmente, agende uma visita e sinta a energia de um verdadeiro amigo!</p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-xl shadow-lg">
                Agendar Visita Agora
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Caes; 
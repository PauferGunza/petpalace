import VideoBackground from "@/components/VideoBackground";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Bone, BedDouble, Dog, SprayCan, Link2 } from "lucide-react";
import { useState } from "react";

const categorias = [
  "Todos",
  "Ração",
  "Brinquedos",
  "Coleiras",
  "Camas",
  "Higiene"
];

const acessorios = [
  {
    nome: "Ração Premium 15kg",
    categoria: "Ração",
    preco: "25.000 Kz",
    descricao: "Ração premium para cães adultos de grande porte.",
    icone: Bone
  },
  {
    nome: "Coleira de Couro",
    categoria: "Coleiras",
    preco: "8.000 Kz",
    descricao: "Coleira de couro genuíno, resistente e elegante.",
    icone: Link2
  },
  {
    nome: "Cama Confortável",
    categoria: "Camas",
    preco: "12.000 Kz",
    descricao: "Cama macia e confortável para o seu pet.",
    icone: BedDouble
  },
  {
    nome: "Brinquedo Mordedor",
    categoria: "Brinquedos",
    preco: "3.500 Kz",
    descricao: "Brinquedo resistente para diversão e saúde bucal.",
    icone: Dog
  },
  {
    nome: "Shampoo Antipulgas",
    categoria: "Higiene",
    preco: "2.500 Kz",
    descricao: "Shampoo especial para higiene e proteção do seu cão.",
    icone: SprayCan
  },
];

const Acessorios = () => {
  const [filtro, setFiltro] = useState("Todos");

  const filtrados = filtro === "Todos" ? acessorios : acessorios.filter(a => a.categoria === filtro);

  return (
    <div className="min-h-screen relative">
      <VideoBackground videoId="cvbWvtSsAC0" />
      <div className="absolute inset-0 bg-black/70 z-0" />
      <Navigation />
      <main>
        <section className="py-20 px-4 min-h-screen relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                Acessórios para Cães
              </h1>
              <p className="text-lg text-orange-300 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Encontre acessórios de qualidade para o seu melhor amigo. Filtre por categoria e descubra novidades!
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {categorias.map(cat => (
                <Button key={cat} onClick={() => setFiltro(cat)} className={`px-6 py-2 rounded-full font-semibold ${filtro === cat ? 'bg-orange-500 text-white' : 'bg-white/20 text-orange-200 hover:bg-orange-500/80 hover:text-white'}`}>{cat}</Button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtrados.map((item, idx) => {
                const Icon = item.icone;
                return (
                  <div key={idx} className="bg-black/60 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                    <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-lg bg-white/80">
                      <Icon className="w-14 h-14 text-orange-500" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-1 flex items-center gap-2"><ShoppingBag className="w-5 h-5 text-orange-400" /> {item.nome}</h2>
                    <span className="text-orange-300 text-sm mb-2">{item.categoria}</span>
                    <p className="text-white/90 mb-2">{item.descricao}</p>
                    <div className="text-lg font-bold text-orange-400 mb-2">{item.preco}</div>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-2 mt-2">Tenho Interesse</Button>
                  </div>
                );
              })}
            </div>
            {filtrados.length === 0 && (
              <div className="text-center text-orange-200 mt-10 text-lg">Nenhum acessório encontrado para esta categoria.</div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Acessorios; 
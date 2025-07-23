import VideoBackground from "@/components/VideoBackground";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, PawPrint, Heart, Star, Phone } from "lucide-react";
import { useState } from "react";

const cuidadores = [
  {
    nome: "Ana Silva",
    especialidade: "Passeios e alimentação",
    avaliacao: 5,
    descricao: "Cuido do seu cão com carinho, passeios diários e alimentação na medida certa.",
    imagem: "https://randomuser.me/api/portraits/women/81.jpg", // mulher negra
    telefone: "+244 923 111 333"
  },
  {
    nome: "Carlos Mendes",
    especialidade: "Hospedagem e cuidados especiais",
    avaliacao: 4.8,
    descricao: "Hospedo cães em casa, com ambiente seguro e muito amor.",
    imagem: "https://randomuser.me/api/portraits/men/83.jpg", // homem negro
    telefone: "+244 924 222 555"
  },
  {
    nome: "Joana Costa",
    especialidade: "Passeios e brincadeiras",
    avaliacao: 4.9,
    descricao: "Levo seu cão para passear, brincar e gastar energia todos os dias!",
    imagem: "https://randomuser.me/api/portraits/women/65.jpg", // mulher negra
    telefone: "+244 923 333 777"
  },
];

const Cuidadores = () => {
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    tipo: "Quero contratar um cuidador",
    mensagem: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setSucesso(true);
    }, 1200);
  };

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
                Cuidadores & Passeadores de Cães
              </h1>
              <p className="text-xl text-orange-300 max-w-2xl mx-auto mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Vai viajar, trabalhar ou precisa de ajuda? Agora você pode deixar seu cão com quem realmente ama e entende de pets. Segurança, carinho e diversão garantidos!
              </p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-xl shadow-lg animate-bounce">
                Quero um cuidador para meu cão
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              {cuidadores.map((cuidador, idx) => (
                <div key={idx} className="bg-black/60 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform">
                  <img src={cuidador.imagem} alt={cuidador.nome} className="w-28 h-28 mb-4 object-cover rounded-full border-4 border-orange-500 shadow-lg" />
                  <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2"><User className="w-6 h-6 text-orange-400" /> {cuidador.nome}</h2>
                  <span className="text-orange-300 text-lg font-semibold mb-1">{cuidador.especialidade}</span>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(Math.floor(cuidador.avaliacao))].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400" />)}
                    {cuidador.avaliacao % 1 !== 0 && <Star className="w-5 h-5 text-yellow-400 opacity-50" />}
                    <span className="text-white/80 text-sm ml-2">{cuidador.avaliacao.toFixed(1)}</span>
                  </div>
                  <p className="text-white/90 mb-2">{cuidador.descricao}</p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Phone className="w-5 h-5 text-orange-400" />
                    <span className="text-orange-200 font-semibold">{cuidador.telefone}</span>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg px-6 py-2 mt-2 text-lg shadow-md animate-pulse">
                    <Heart className="w-5 h-5 mr-2" /> Quero Contratar
                  </Button>
                </div>
              ))}
            </div>
            <div className="max-w-lg mx-auto bg-black/60 rounded-2xl p-8 shadow-xl mt-8">
              <h2 className="text-2xl font-bold text-white mb-4 text-center flex items-center justify-center gap-2">
                <PawPrint className="w-6 h-6 text-orange-400" /> Solicite um cuidador ou cadastre-se
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-white font-semibold mb-1">Nome</label>
                  <input name="nome" value={form.nome} onChange={handleChange} type="text" className="w-full rounded-lg px-4 py-2 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Seu nome" required />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-1">Telefone</label>
                  <input name="telefone" value={form.telefone} onChange={handleChange} type="tel" className="w-full rounded-lg px-4 py-2 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Seu telefone" required />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-1">Tipo</label>
                  <select name="tipo" value={form.tipo} onChange={handleChange} className="w-full rounded-lg px-4 py-2 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400">
                    <option>Quero contratar um cuidador</option>
                    <option>Quero ser cuidador/passeador</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-1">Mensagem</label>
                  <textarea name="mensagem" value={form.mensagem} onChange={handleChange} className="w-full rounded-lg px-4 py-2 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400" rows={3} placeholder="Descreva sua necessidade ou experiência" required />
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg mt-2 text-lg" disabled={enviando}>{enviando ? 'Enviando...' : 'Enviar Solicitação'}</Button>
                {sucesso && <p className="text-green-400 text-center font-bold mt-2">Solicitação enviada! Em breve entraremos em contacto.</p>}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cuidadores; 

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";

const Sobre = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <VideoBackground videoId="cvbWvtSsAC0" />
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4 relative z-10">
        <div className="w-32 h-32 mb-6 rounded-full border-4 border-white bg-white flex items-center justify-center">
          <img src="/logo_petpace.jpeg" alt="Logo PET PALACE" className="w-28 h-28 object-contain" />
        </div>
        <div className="glass-strong max-w-4xl w-full mx-auto rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 border border-white/30 backdrop-blur-lg bg-black/70">
          {/* Texto e Missão */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] mb-6">Sobre o PET PALACE</h1>
            <p className="text-lg md:text-xl mb-6 text-white/90 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              O <span className="font-bold text-primary">PET PALACE</span> nasceu do amor pelos animais e do desejo de proporcionar o melhor cuidado e bem-estar para os pets da província do Namibe. Somos apaixonados por cães e acreditamos que cada animal merece carinho, respeito e um lar feliz.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">Nossa Missão</h2>
            <p className="mb-6 text-white/90 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Oferecer serviços de excelência, promovendo saúde, alegria e qualidade de vida para os animais de estimação e tranquilidade para seus tutores.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">Nossos Valores</h2>
            <ul className="list-disc list-inside mb-6 text-white/90 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              <li>Amor e respeito pelos animais</li>
              <li>Ética e responsabilidade</li>
              <li>Profissionalismo e dedicação</li>
              <li>Inovação e melhoria contínua</li>
            </ul>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">Nossa Equipe</h2>
            <p className="mb-4 text-white/90 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Contamos com uma equipe apaixonada, formada por veterinários, cuidadores e especialistas em bem-estar animal, sempre prontos para atender com carinho e competência.
            </p>
            <p className="text-white/90 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Venha nos conhecer e faça parte da nossa família! Seu pet merece o melhor.
            </p>
          </div>
          {/* Imagem decorativa com efeito de forma orgânica */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/aisiberciano.jpg"
              alt="Equipe PET PALACE"
              className="w-80 h-80 object-cover rounded-[60%_40%_60%_40%/50%_60%_40%_50%] shadow-2xl border-4 border-white/40 animate-float bg-white/10"
              style={{ maskImage: 'radial-gradient(circle at 60% 40%, white 80%, transparent 100%)' }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre; 
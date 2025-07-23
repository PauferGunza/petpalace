import VideoBackground from "@/components/VideoBackground";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from 'react';

const Contacto = () => {
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

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
          <div className="max-w-2xl mx-auto bg-black/70 rounded-2xl p-8 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">Contacto</h1>
            <p className="text-lg text-orange-300 mb-8 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Fale conosco para dúvidas, sugestões ou parcerias. Estamos prontos para ajudar você e seu pet!
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-white font-semibold mb-1">Nome</label>
                <input type="text" className="w-full rounded-lg px-4 py-2 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Seu nome" required />
              </div>
              <div>
                <label className="block text-white font-semibold mb-1">Email</label>
                <input type="email" className="w-full rounded-lg px-4 py-2 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="seu@email.com" required />
              </div>
              <div>
                <label className="block text-white font-semibold mb-1">Mensagem</label>
                <textarea className="w-full rounded-lg px-4 py-2 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400" rows={4} placeholder="Como podemos ajudar?" required />
              </div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg mt-2 text-lg" disabled={enviando}>{enviando ? 'Enviando...' : 'Enviar Mensagem'}</Button>
              {sucesso && <p className="text-green-400 text-center font-bold mt-2">Mensagem enviada! Em breve entraremos em contacto.</p>}
            </form>
            <div className="mt-10 text-center text-white/90 space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+244 923 456 789</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <a href="https://wa.me/244923456789" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-300 transition-colors">WhatsApp 1: +244 923 456 789</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <a href="https://wa.me/244924123456" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-300 transition-colors">WhatsApp 2: +244 924 123 456</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 text-orange-400" />
                <a href="mailto:info@namibepetpalace.ao" className="underline hover:text-orange-200 transition-colors">info@namibepetpalace.ao</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Rua Principal, Moçâmedes, Namibe</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto; 
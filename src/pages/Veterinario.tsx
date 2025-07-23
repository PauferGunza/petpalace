import VideoBackground from "@/components/VideoBackground";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Stethoscope, Phone, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";

const veterinarios = [
  {
    nome: "Clínica Vet Namibe",
    endereco: "Rua Central, Moçâmedes",
    telefone: "+244 923 111 222",
    especialidades: ["Clínica geral", "Vacinação", "Cirurgias"],
  },
  {
    nome: "Pet Saúde Animal",
    endereco: "Av. Principal, Namibe",
    telefone: "+244 924 333 444",
    especialidades: ["Consultas", "Exames laboratoriais", "Emergências"],
  },
];

const Veterinario = () => {
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    data: "",
    tipo: "Consulta Geral",
    numeroCaes: 1,
    mensagem: ""
  });

  const tiposConsulta = [
    "Consulta Geral",
    "Vacinação",
    "Cirurgia",
    "Emergência",
    "Exames Laboratoriais",
    "Outro"
  ];

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
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              Veterinários e Clínicas no Namibe
            </h1>
            <p className="text-lg text-orange-300 mb-10 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Encontre os melhores profissionais para cuidar do seu pet. Agende uma consulta facilmente!
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {veterinarios.map((vet) => (
                <div key={vet.nome} className="bg-black/60 rounded-2xl p-6 shadow-lg flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Stethoscope className="w-6 h-6 text-orange-400" />
                    <span className="text-xl font-bold text-white">{vet.nome}</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-200">
                    <MapPin className="w-4 h-4" />
                    <span>{vet.endereco}</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-200">
                    <Phone className="w-4 h-4" />
                    <span>{vet.telefone}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {vet.especialidades.map((esp) => (
                      <span key={esp} className="bg-orange-500/20 text-orange-200 px-3 py-1 rounded-full text-xs font-semibold">
                        {esp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-lg mx-auto bg-black/60 rounded-2xl p-8 shadow-xl mt-8">
              <h2 className="text-2xl font-bold text-white mb-4 text-center flex items-center justify-center gap-2">
                <Calendar className="w-6 h-6 text-orange-400" /> Agendar Consulta
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
                  <label className="block text-white font-semibold mb-1">Data da Consulta</label>
                  <input name="data" value={form.data} onChange={handleChange} type="date" className="w-full rounded-lg px-4 py-2 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400" required />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-1">Tipo de Consulta</label>
                  <select name="tipo" value={form.tipo} onChange={handleChange} className="w-full rounded-lg px-4 py-2 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400">
                    {tiposConsulta.map((tipo) => (
                      <option key={tipo} value={tipo}>{tipo}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-1">Número de Cães</label>
                  <input name="numeroCaes" value={form.numeroCaes} onChange={handleChange} type="number" min={1} max={10} className="w-full rounded-lg px-4 py-2 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400" required />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-1">Mensagem</label>
                  <textarea name="mensagem" value={form.mensagem} onChange={handleChange} className="w-full rounded-lg px-4 py-2 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400" rows={3} placeholder="Descreva o motivo da consulta ou detalhes adicionais" required />
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg mt-2 text-lg" disabled={enviando}>{enviando ? 'Enviando...' : 'Agendar Consulta'}</Button>
                {sucesso && <p className="text-green-400 text-center font-bold mt-2">Consulta agendada! Em breve entraremos em contacto.</p>}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Veterinario; 
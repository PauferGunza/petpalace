import { Heart, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import PopularDogsCards from "./PopularDogsCards";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-4 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 justify-center md:justify-start">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white bg-white flex items-center justify-center mx-auto md:mx-0">
              <img src="/logo_petpace.jpeg" alt="Logo PET PALACE" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">PET PALACE</h3>
            </div>
          </div>
          <div className="flex gap-2 justify-center md:justify-start">
            <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-orange-500 hover:bg-orange-600 text-white">
                <Instagram className="w-4 h-4" />
              </Button>
            <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-orange-500 hover:bg-orange-600 text-white">
                <Facebook className="w-4 h-4" />
              </Button>
          </div>
          <div className="flex flex-col gap-1 text-sm text-black items-center md:items-start">
            <span><Phone className="inline w-4 h-4 mr-1 text-orange-500" /> +244 923 456 789</span>
            <span><Mail className="inline w-4 h-4 mr-1 text-orange-500" /> info@namibepetpalace.ao</span>
          </div>
        </div>
        <div className="border-t border-border pt-2 mt-2 text-center text-xs text-white/70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              © 2024 PET PALACE. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
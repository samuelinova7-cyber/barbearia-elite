import { Instagram, Youtube, Phone, Send } from 'lucide-react';
import logo from './logo_elite.jpg';

export default function Footer() {
  return (
    <footer className="bg-black-deep border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logo} 
                alt="Elite Studio Barber Logo" 
                className="h-16 w-16 object-contain rounded-full"
              />
              <div className="text-2xl font-serif font-bold tracking-tighter">
                <span className="text-white-ice">ELITE</span>
                <span className="text-gold-elite ml-1 font-normal italic text-lg">STUDIO BARBER</span>
              </div>
            </div>
            <p className="text-gray-400 font-light max-w-sm leading-relaxed mb-8">
              A excelência em cada detalhe. Unindo a tradição da barbearia clássica 
              à modernidade do estilo Elite. Elevando a autoestima masculina desde 2018.
            </p>
            <div className="flex space-x-5">
              {[Instagram, Youtube, Phone].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-gold-elite hover:text-gold-elite transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-gold-elite text-xs font-bold uppercase tracking-widest mb-8">Links Rápidos</h5>
            <ul className="space-y-4">
              {['Início', 'Planos', 'Transplante', 'Serviços', 'Unidades'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-white-ice text-sm font-light transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-gold-elite text-xs font-bold uppercase tracking-widest mb-8">Newsletter</h5>
            <p className="text-gray-500 text-xs font-light mb-4 italic">Receba convites para eventos exclusivos de networking.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-xs font-light focus:outline-none focus:border-gold-elite transition-colors"
              />
              <button className="absolute right-2 top-2 w-10 h-10 rounded-full bg-gold-elite text-black-deep flex items-center justify-center">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-medium">
            © 2026 Elite Studio Barber. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-medium">
            Desenvolvido por <a href="#" className="text-gold-elite">Samuel Fragoso</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

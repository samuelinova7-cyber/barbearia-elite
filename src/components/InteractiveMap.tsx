import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function InteractiveMap() {
  return (
    <section className="py-24 bg-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-elite text-xs font-bold uppercase tracking-[0.3em] mb-4 text-center">Localização</h2>
          <h3 className="text-4xl lg:text-5xl font-serif text-white-ice text-center uppercase tracking-tighter">MAPA DA REGIÃO</h3>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl bg-black-deep/40"
        >
          {/* Iframe for Google Maps - Centered on Marechal Deodoro Area */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15705.578688463567!2d-35.8953!3d-9.7114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70146014e768e1b%3A0x70146014e768e1b!2sMarechal%20Deodoro%2C%20AL%2C%2057160-000!5e0!3m2!1spt-BR!2sbr!4v1713295800000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          
          <div className="absolute inset-x-8 bottom-8 z-10 flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
             <div className="flex flex-col gap-2 bg-black-deep/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl">
                <span className="text-gold-elite text-[10px] uppercase font-bold tracking-[0.2em] mb-2 block border-b border-gold-elite/20 pb-2">Unidades no Mapa</span>
                <div className="space-y-2">
                   <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gold-elite" />
                      <span className="text-white-ice text-xs font-medium">Taperaguá</span>
                   </div>
                   <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gold-elite/60" />
                      <span className="text-white-ice text-xs font-medium">Povoado Pedras</span>
                   </div>
                   <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gold-elite/40" />
                      <span className="text-white-ice text-xs font-medium">Praia do Francês</span>
                   </div>
                </div>
             </div>
             
             <div className="flex items-center space-x-4 bg-black-deep/80 backdrop-blur-xl px-8 py-5 rounded-2xl border border-gold-elite/20 shadow-2xl">
                <div className="w-10 h-10 bg-gold-elite rounded-full flex items-center justify-center text-black-deep">
                   <MapPin size={20} />
                </div>
                <div>
                   <span className="block text-white-ice text-sm font-bold uppercase tracking-widest">Marechal Deodoro, AL</span>
                   <span className="text-gold-elite text-[10px] uppercase font-bold tracking-[0.2em]">Referência em Estética Capilar</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

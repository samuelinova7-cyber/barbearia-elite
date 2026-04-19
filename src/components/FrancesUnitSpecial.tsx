import { motion } from 'motion/react';
import { MapPin, ExternalLink, Calendar } from 'lucide-react';

// Using the provided image name as path, assuming it will be available in the assets folder
const unitImage = "https://res.cloudinary.com/dqukldtq1/image/upload/v1776632434/WhatsApp_Image_2026-04-16_at_7.49.48_PM_twuuye.jpg";

export default function FrancesUnitSpecial() {
  return (
    <section id="unidade-frances" className="py-24 bg-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-elite/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[700px] rounded-[3rem] overflow-hidden border border-gold-elite/10 shadow-3xl shadow-gold-elite/5 group">
                <img 
                  src={unitImage} 
                  alt="Unidade Praia do Francês" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://picsum.photos/seed/praia-frances/1000/1400"; // Fallback
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="bg-black-deep/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                      <div className="flex items-center space-x-3 text-gold-elite mb-4">
                         <MapPin size={20} />
                         <span className="text-sm font-bold uppercase tracking-widest">Avenida Caravelas, Quadra B</span>
                      </div>
                      <h3 className="text-3xl font-serif text-white-ice uppercase tracking-tighter mb-2 shadow-text">UNIDADE PRAIA DO FRANCÊS</h3>
                      <p className="text-gray-400 text-sm font-light mb-6 uppercase tracking-wider">Edição de Luxo - Experiência Exclusiva</p>
                      
                      <button className="w-full gold-solid-btn py-5 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-3 group">
                         <Calendar size={18} />
                         <span>Consultar Preços Praia do Francês</span>
                      </button>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
               <h2 className="text-gold-elite text-xs font-bold uppercase tracking-[0.3em] mb-6">Exclusividade</h2>
               <h3 className="text-5xl lg:text-7xl font-serif text-white-ice uppercase tracking-tighter leading-none mb-10">
                 O TOPO DO <br />
                 ESTILO À <br />
                 <span className="text-gold-elite italic">BEIRA MAR</span>
               </h3>
               
               <p className="text-gray-400 font-light text-xl leading-relaxed italic mb-12">
                 "No coração do Francês, criamos um refúgio onde o luxo encontra a brisa do mar. Uma unidade pensada para quem exige o máximo em cuidado e ambiente."
               </p>
               
               <div className="grid grid-cols-1 gap-6 mb-12">
                  <div className="flex items-center space-x-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                     <div className="w-12 h-12 bg-gold-elite/10 rounded-full flex items-center justify-center text-gold-elite">
                        <ExternalLink size={24} />
                     </div>
                     <div>
                        <span className="block text-white-ice font-bold text-sm uppercase tracking-widest">Atendimento VIP</span>
                        <span className="text-gray-500 text-xs">Drinks e café premium incluídos.</span>
                     </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                     <div className="w-12 h-12 bg-gold-elite/10 rounded-full flex items-center justify-center text-gold-elite">
                        <Calendar size={24} />
                     </div>
                     <div>
                        <span className="block text-white-ice font-bold text-sm uppercase tracking-widest">Agenda Prioritária</span>
                        <span className="text-gray-500 text-xs">Horários flexíveis para sua comodidade.</span>
                     </div>
                  </div>
               </div>
               
               <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-medium border-t border-white/5 pt-8">
                 Elite Studio – Praia do Francês, Alagoas
               </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Unit } from '../types';

const units: Unit[] = [
  {
    name: 'Unidade Taperaguá',
    description: 'Localizada na Rodovia Edval Lemos, ao lado da Secretaria de Iluminação Pública.',
    image: 'https://res.cloudinary.com/dqukldtq1/image/upload/v1776634043/WhatsApp_Image_2026-04-18_at_3.22.37_PM_eci1aw.jpg',
    mapUrl: '#',
  },
  {
    name: 'Unidade Povoado Pedras',
    description: 'Situada na Galeria 2105, também na Rodovia Edval Lemos.',
    image: 'https://res.cloudinary.com/dqukldtq1/image/upload/v1776634043/WhatsApp_Image_2026-04-18_at_10.35.13_AM_mzvu4f.jpg',
    mapUrl: '#',
  },
  {
    name: 'Unidade Praia do Francês',
    description: 'Localizada na Avenida Caravelas, Quadra B.',
    image: 'https://res.cloudinary.com/dqukldtq1/image/upload/v1776634043/WhatsApp_Image_2026-04-18_at_11.44.51_AM_k3ckp7.jpg',
    mapUrl: '#',
  },
];

export default function Units() {
  return (
    <section id="unidades" className="py-24 bg-black-deep">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-elite text-xs font-bold uppercase tracking-[0.3em] mb-4">Presença</h2>
          <h3 className="text-4xl lg:text-5xl font-serif text-white-ice">NOSSAS UNIDADES</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {units.map((unit, idx) => (
            <motion.div
              key={unit.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group card-luxury p-4 rounded-[2rem] overflow-hidden"
            >
              <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                <img
                  src={unit.image}
                  alt={unit.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 h-12 w-12 bg-black-deep/50 backdrop-blur-md rounded-full flex items-center justify-center text-gold-elite border border-white/10 group-hover:bg-gold-elite group-hover:text-black-deep transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="flex items-center text-gold-elite text-[10px] font-bold uppercase tracking-widest mb-2">
                  <MapPin size={12} className="mr-1" />
                  Marechal Deodoro, AL
                </div>
                <h4 className="text-2xl font-serif text-white-ice mb-3">{unit.name}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 italic">{unit.description}</p>
                <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:border-gold-elite transition-all">
                  Como Chegar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

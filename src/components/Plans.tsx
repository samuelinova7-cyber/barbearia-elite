import { motion } from 'motion/react';
import { Plan } from '../types';
import { Check } from 'lucide-react';

const plans: Plan[] = [
  {
    id: 'silver',
    name: 'Corte ilimitado',
    price: '89,90',
    features: ['10% de descontos em produtos', '10% de descontos em serviços'],
  },
  {
    id: 'gold',
    name: 'Corte + Barba ilimitado',
    price: '159,90',
    popular: true,
    features: ['10% de descontos em produtos', '10% de descontos em serviços'],
  },
  {
    id: 'platinum',
    name: 'Barba ilimitada',
    price: '79,90',
    features: ['10% de descontos em produtos', '10% de descontos em serviços'],
  },
];

export default function PlansSection() {
  return (
    <section id="planos" className="py-24 bg-black-deep relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-gold-elite text-2xl lg:text-3xl font-bold uppercase tracking-tighter mb-2">Conheça Nossos</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-white-ice uppercase tracking-tighter">Planos de Elite</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative bg-black border border-white/5 rounded-[3rem] p-10 flex flex-col text-center transition-all duration-500 hover:scale-105 hover:bg-white/[0.02] shadow-2xl ${
                plan.popular ? 'py-14 border-gold-elite/20 ring-1 ring-gold-elite/10 lg:z-10 bg-black/40' : 'bg-black/60'
              }`}
            >
              <div className="absolute top-6 right-8 text-gold-elite/20 text-xl font-bold">...</div>
              
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white-ice leading-tight min-h-[64px] flex items-center justify-center">
                   <span className="text-gold-elite mr-2">{plan.name.split(' ')[0]}</span> {plan.name.split(' ').slice(1).join(' ')}
                </h4>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-start text-[10px] lg:text-xs text-gray-400 font-bold uppercase tracking-wider">
                    <div className="w-2 h-2 rounded-full bg-gold-elite mr-3 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold">Mensal</p>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gold-elite rounded-full py-4 px-2 relative shine-effect cursor-pointer group shadow-[0_8px_30px_rgba(212,175,55,0.2)]"
                >
                   <span className="text-white font-bold text-xl lg:text-2xl relative z-10">R${plan.price}*</span>
                   <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                   </div>
                </motion.div>
                <p className="text-[10px] text-gray-500 mt-4 font-bold uppercase tracking-widest">Todos os dias <br /> da semana</p>
              </div>
              
              <div className="absolute top-1/2 right-4 -translate-y-1/2 rotate-90 origin-right text-[8px] uppercase tracking-widest text-gray-700 font-bold">
                 • Pagamento único
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <motion.button 
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className="border-2 border-gold-elite px-12 py-5 rounded-2xl text-gold-elite font-bold text-lg uppercase tracking-widest transition-all hover:bg-gold-elite hover:text-black shadow-[0_0_30px_rgba(212,175,55,0.1)]"
           >
             Assine Agora
           </motion.button>
        </div>
      </div>
    </section>
  );
}

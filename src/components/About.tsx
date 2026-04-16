import { motion } from 'motion/react';
import ecosystemPhoto from './foto_experience.jpeg';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-black-deep relative overflow-hidden">
      {/* Decorative texture or glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-elite/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="absolute -inset-4 border border-gold-elite/20 rounded-2xl" />
            <img 
              src={ecosystemPhoto} 
              alt="Elite Studio Barber Ecosystem" 
              className="w-full h-full object-cover rounded-xl relative z-10 hover:scale-[1.02] transition-all duration-700 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-gold-elite text-xs font-bold uppercase tracking-[0.3em] mb-4 text-center lg:text-left">A Nossa História</h2>
            <h3 className="text-4xl lg:text-5xl font-serif text-white-ice mb-8 text-center lg:text-left">MAIS QUE UMA <br />BARBEARIA, UM ECOSSISTEMA.</h3>
            
            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
              <p>
                O Elite Studio Barber nasceu para elevar a autoestima do homem moderno em Marechal Deodoro. 
                Não somos apenas um lugar para cortar o cabelo; somos um ponto de conexão e networking.
              </p>
              <p>
                Cada detalhe da nossa infraestrutura foi projetado para oferecer o máximo conforto, 
                desde o aroma ambiente até a precisão milimétrica de cada degradê.
              </p>
              <blockquote className="border-l-2 border-gold-elite pl-6 italic text-gold-elite font-serif text-xl py-2 my-8">
                "A excelência não é um ato, mas um hábito."
              </blockquote>
              <p>
                Hoje, somos referência em Alagoas, expandindo para 3 unidades e formando novos 
                talentos através da nossa Academy.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <span className="block text-4xl font-serif text-gold-elite mb-2">10k+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Cortes Realizados</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-gold-elite mb-2">3</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Unidades Conceito</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

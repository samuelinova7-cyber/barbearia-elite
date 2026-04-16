import { motion } from 'motion/react';
import { Briefcase, FileText, ArrowRight } from 'lucide-react';

export default function WorkWithUs() {
  return (
    <section id="trabalhe-conosco" className="py-24 bg-black-deep relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-elite/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-gold-elite/10 px-6 py-2 rounded-full border border-gold-elite/20 mb-8">
              <Briefcase size={14} className="text-gold-elite" />
              <span className="text-gold-elite text-[10px] font-bold uppercase tracking-widest">Carreira Elite</span>
            </div>
            
            <h2 className="text-4xl lg:text-7xl font-serif text-white-ice uppercase tracking-tighter mb-8 shadow-gold-elite/10 drop-shadow-lg">
              FAÇA PARTE DO <br />NOSSO TIME
            </h2>
            
            <p className="text-gray-400 font-light text-lg lg:text-xl mb-12 leading-relaxed italic max-w-2xl mx-auto">
              "Buscamos talentos que respiram excelência e desejam elevar o padrão da barbearia em Alagoas."
            </p>

            <div className="flex flex-col items-center gap-6">
              <button className="gold-solid-btn w-full max-w-md px-12 py-6 rounded-2xl text-base font-bold uppercase tracking-widest flex items-center justify-center space-x-4 shadow-2xl shadow-gold-elite/20 group hover:scale-[1.02] transition-all">
                <FileText size={24} />
                <span>Exibir o Currículo</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">
                Sua jornada para o topo começa aqui.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

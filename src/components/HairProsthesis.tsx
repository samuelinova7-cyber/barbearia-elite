import { motion } from 'motion/react';
import { ShieldCheck, Waves, Info, MessageCircle, Droplet } from 'lucide-react';

export default function HairProsthesis() {
  const careSteps = [
    {
      icon: <Waves className="text-gold-elite" />,
      title: "Mar e Piscina",
      description: "Pode desfrutar sem medo! Nossas próteses são fixadas com adesivos de alta performance. Recomendamos apenas passar água doce após o banho de mar ou piscina para remover o sal ou cloro."
    },
    {
      icon: <Droplet className="text-gold-elite" />,
      title: "Higienização",
      description: "Lave como seu próprio cabelo, utilizando shampoos suaves e condicionadores recomendados para manter a maciez dos fios naturais da prótese."
    },
    {
      icon: <ShieldCheck className="text-gold-elite" />,
      title: "Durabilidade",
      description: "Com os cuidados certos, sua prótese mantém o aspecto natural por meses. A manutenção periódica garante a saúde do couro cabeludo e a fixação perfeita."
    }
  ];

  return (
    <section id="proteses" className="py-24 bg-black-deep relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gold-elite/10 border border-gold-elite/20 px-4 py-2 rounded-full mb-6">
            <Info size={14} className="text-gold-elite" />
            <span className="text-gold-elite text-xs font-bold uppercase tracking-widest">Guia Informativo</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-serif text-white-ice mb-8 uppercase tracking-tighter leading-tight">
            LIBERDADE TOTAL COM <br />
            <span className="text-gold-elite italic">PRÓTESES CAPILARES</span>
          </h2>
          
          <p className="text-gray-400 font-light text-xl mb-12 leading-relaxed italic mx-auto">
            "Recupere sua identidade e autoconfiança com a solução mais natural do mercado. Esqueça as restrições e viva intensamente."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {careSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:border-gold-elite/30 transition-all group"
            >
              <div className="p-4 bg-gold-elite/10 rounded-2xl mb-6 group-hover:bg-gold-elite/20 transition-colors">
                {step.icon}
              </div>
              <h4 className="text-white-ice font-serif text-2xl mb-3">{step.title}</h4>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button className="gold-solid-btn px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest flex items-center space-x-3 group shadow-2xl shadow-gold-elite/20">
            <MessageCircle size={20} />
            <span>Fale com o Especialista</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

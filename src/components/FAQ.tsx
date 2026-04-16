import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, Star } from 'lucide-react';

const faqs = [
  {
    q: 'Quais são os cortes de cabelo mais populares atualmente?',
    a: 'Atualmente, o Low Fade, Mid Fade e o Taper Fade são extremamente populares. Combinados com o topo texturizado ou o clássico Side Part, oferecem um visual moderno e limpo.'
  },
  {
    q: 'Quais são as tendências de barba para este ano?',
    a: 'A tendência principal é a "Viking Beard" bem aparada nas laterais e o "Stubble Beard" (barba por fazer) delineada. O foco está na hidratação e no alinhamento simétrico com o maxilar.'
  },
  {
    q: 'Quais são os cuidados essenciais para manter um corte impecável?',
    a: 'Recomendamos a manutenção a cada 15-20 dias, uso de pomadas finalizadoras de qualidade e lavagem com shampoos específicos para o seu tipo de fio para evitar oleosidade excessiva.'
  },
  {
    q: 'Quais tipos de barba combinam com diferentes formatos de rosto?',
    a: 'Rostos redondos pedem barbas mais angulares e compridas no queixo. Rostos quadrados combinam com barbas mais cheias mas arredondadas. Nossos especialistas realizam essa análise via visagismo.'
  },
  {
    q: 'Como escolher o corte ideal para o meu tipo de fio?',
    a: 'Tudo depende da densidade e textura. Cabelos grossos suportam melhor volumes altos, enquanto fios finos pedem cortes que criem ilusão de preenchimento. A consultoria presencial é fundamental.'
  },
  {
    q: 'Vantagens e desvantagens de barba longa vs aparada?',
    a: 'Barba longa traz imponência mas exige manutenção diária com óleos e balms. Barba aparada é prática e moderna, mas exige idas frequentes à barbearia para manter o desenho.'
  },
  {
    q: 'Quais técnicas de corte existem?',
    a: 'Trabalhamos com Point Cut, Slicing, Clipper Over Comb e o clássico degradê navalhado. Cada técnica é escolhida conforme o objetivo de movimento e peso do corte.'
  },
  {
    q: 'Como fazer a transição harmoniosa do curto para o longo?',
    a: 'O segredo é a paciência e a manutenção das laterais e nuca. Enquanto o topo cresce, mantemos o contorno limpo para que você não perca o estilo durante o processo.'
  },
  {
    q: 'Quais produtos são recomendados para a barba?',
    a: 'Shampoo específico para barba (pH neutro para o rosto), Balm para alinhar e hidratar os fios, e Óleo para nutrir e dar brilho à barba.'
  },
  {
    q: 'Cuidados com a barba após um transplante capilar?',
    a: 'O repouso absoluto da área doadora na nuca e cuidado extremo ao lavar. Evite atrito e use apenas os produtos recomendados pela nossa equipe de estética capilar avançada.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black-deep">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-gold-elite text-xs font-bold uppercase tracking-[0.3em] mb-4 text-center">Guia Elite</h2>
          <h3 className="text-4xl lg:text-5xl font-serif text-white-ice text-center uppercase tracking-tighter">REFERÊNCIA EM <br />CUIDADO MASCULINO</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/5 bg-white/[0.02] rounded-2xl px-6 lg:px-8">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-serif transition-colors mr-4 ${openIndex === idx ? 'text-gold-elite' : 'text-white-ice group-hover:text-gold-elite/70'}`}>
                  {faq.q}
                </span>
                {openIndex === idx ? <Minus className="text-gold-elite flex-shrink-0" /> : <Plus className="text-gray-600 flex-shrink-0" />}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-gray-400 font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-[2rem] bg-gold-elite/5 border border-gold-elite/10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
           <div className="absolute top-0 right-0 w-32 h-32 bg-gold-elite/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="flex items-center space-x-4 relative z-10">
            <div className="w-12 h-12 bg-gold-elite/20 rounded-full flex items-center justify-center text-gold-elite">
              <Star size={24} />
            </div>
            <div className="text-left">
              <span className="block text-white-ice font-bold text-lg">Google Experience</span>
              <span className="text-gold-elite text-xs font-bold tracking-widest uppercase">Padrão 5 Estrelas Confirmado</span>
            </div>
          </div>
          <button className="gold-solid-btn px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] relative z-10">
            Tire suas dúvidas no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

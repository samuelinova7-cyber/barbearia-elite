import { motion } from 'motion/react';
import { Service } from '../types';

const serviceCategories = [
  {
    category: "Cortes & Visagismo",
    items: [
      { name: 'Corte Social', price: '25,00' },
      { name: 'Corte Infantil', price: '20,00' },
      { name: 'Corte na Tesoura', price: '30,00' },
      { name: 'Degradê e Navalhado', price: '30,00' },
    ]
  },
  {
    category: "Estética Capilar & Barba",
    items: [
      { name: 'Barboterapia', price: '25,00' },
      { name: 'Prótese Capilar', price: 'Sob Consulta' },
      { name: 'Pigmentação (Barba e Cabelo)', price: '15,00' },
      { name: 'Sobrancelha', price: '10,00' },
    ]
  },
  {
    category: "Química & Tratamentos",
    items: [
      { name: 'Coloração', price: '30,00' },
      { name: 'Selagem', price: '40,00' },
      { name: 'Hidratação', price: '20,00' },
      { name: 'Alisamento', price: '40,00' },
      { name: 'Botox', price: '35,00' },
      { name: 'Limpeza de Pele', price: '20,00' },
    ]
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-elite text-xs font-bold uppercase tracking-[0.3em] mb-4 text-center">Menu</h2>
          <h3 className="text-4xl lg:text-5xl font-serif text-white-ice text-center uppercase tracking-tighter">TABELA DE SERVIÇOS</h3>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {serviceCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-gold-elite font-serif text-2xl font-bold border-b border-gold-elite/20 pb-4 mb-4">
                {cat.category}
              </h4>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-end border-b border-white/5 pb-2 group hover:border-gold-elite/30 transition-colors">
                    <span className="text-white-ice font-light text-sm lg:text-base group-hover:text-gold-elite transition-colors">{item.name}</span>
                    <div className="flex-grow border-b border-dotted border-white/10 mx-2 mb-1" />
                    <span className="text-gold-elite font-bold text-xs lg:text-sm">
                       {item.price === 'Sob Consulta' ? 'Consulta' : `R$ ${item.price}`}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-3xl bg-black-deep/50 border border-gold-elite/10 text-center max-w-4xl mx-auto">
          <h4 className="text-2xl font-serif font-bold text-gold-elite mb-4 uppercase tracking-widest">Atendimento Premium</h4>
          <p className="text-gray-400 font-light max-w-2xl mx-auto mb-8 leading-relaxed italic">
            "A excelência está nos detalhes. Cada serviço é uma consultoria de imagem personalizada para elevar seu padrão."
          </p>
          <button className="gold-solid-btn px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-gold-elite/10">
            Agendar Agora
          </button>
        </div>
      </div>
    </section>
  );
}

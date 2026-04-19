import { motion } from 'motion/react';
import { Star, Quote, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { useState, useRef } from 'react';

const reviews = [
  {
    author: "Ramon Nobre",
    role: "Local Guide",
    content: "É a melhor de toda a região! Atendimento único, pessoal descontraído e com muito profissionalismo. Super recomendo 👏🏼👏🏼👏🏼",
    stars: 5,
    date: "um ano atrás"
  },
  {
    author: "Jonathas Alves",
    role: "Cliente",
    content: "Atendimento excelente, ambiente agradável e profissionais de alta qualidade!",
    stars: 5,
    date: "um ano atrás"
  },
  {
    author: "Clevertoneval2",
    role: "Cliente VIP",
    content: "Salão top, marechal Deodoro tem ótimos profissionais em estética capilar e facial, obrigado pelo atendimento, meus filhos amaram, a atenção com eles, vocês são excelentes. Já sou cliente vip",
    stars: 5,
    date: "um ano atrás"
  },
  {
    author: "Junior Alok",
    role: "Cliente",
    content: "Os melhores do estado, corto com eles a 3 anos e a galera muito receptiva, ambiente muito bom e climatizado e preço bom, indico de verdade!!!",
    stars: 5,
    date: "um ano atrás"
  },
  {
    author: "Joao Carlos",
    role: "Cliente",
    content: "Ambiente super agradável, climatizado e confortável. Atendimento diferenciado com agilidade e precisão nos cortes e procedimentos capilares.",
    stars: 5,
    date: "um ano atrás"
  },
  {
    author: "Michael Douglas",
    role: "Local Guide",
    content: "Ótimo atendimento e agilidade! Ambiente confortável.",
    stars: 5,
    date: "um ano atrás"
  },
  {
    author: "Vinicius Rocha",
    role: "Cliente",
    content: "um ótimo ambiente, tratam bem os clientes, super atendimento! estão de parabéns",
    stars: 5,
    date: "um ano atrás"
  },
  {
    author: "Felipe Araújo",
    role: "Cliente",
    content: "Serviço de Qualidade, Ótimo atendimento… Cliente com toda certeza sai de lá satisfeito com os serviços dessa barbearia!!",
    stars: 5,
    date: "um ano atrás"
  },
  {
    author: "Tiago Gomes",
    role: "Cliente",
    content: "Barbearia bem localizada, ambiente aconchegante e higiênico. Atendimento rápido e humanizado, com certeza voltarei 👏🏻👏🏻",
    stars: 5,
    date: "um ano atrás"
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="comunidade" className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-elite text-xs font-bold uppercase tracking-[0.3em] mb-4">Experiência Real</h2>
          <h3 className="text-4xl lg:text-5xl font-serif text-white-ice uppercase tracking-tighter mb-8">AVALIAÇÕES NO GOOGLE</h3>
          
          {/* Unit Review Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
             <button className="gold-outline-btn px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center space-x-2">
                <span>Avaliar Manguaba</span>
                <ExternalLink size={14} />
             </button>
             <button className="gold-outline-btn px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center space-x-2">
                <span>Avaliar Caravelas</span>
                <ExternalLink size={14} />
             </button>
             <button className="gold-outline-btn px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center space-x-2">
                <span>Avaliar Trevo</span>
                <ExternalLink size={14} />
             </button>
          </div>
        </div>

        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-hidden no-scrollbar py-8"
          >
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 w-full md:w-[400px] card-luxury p-10 rounded-[2.5rem] relative"
              >
                <Quote className="absolute top-8 right-8 text-gold-elite/20 w-12 h-12" />
                
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-elite text-gold-elite" />
                  ))}
                </div>

                <p className="text-gray-300 font-light leading-relaxed mb-8 italic min-h-[100px]">
                  "{review.content}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div>
                    <span className="block text-white-ice font-serif font-bold text-lg">{review.author}</span>
                    <span className="text-gold-elite text-[10px] uppercase tracking-widest font-bold">{review.role}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Google</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons for Review Slider */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-black-deep/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-gold-elite opacity-0 group-hover:opacity-100 transition-all hover:bg-gold-elite hover:text-black-deep"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-black-deep/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-gold-elite opacity-0 group-hover:opacity-100 transition-all hover:bg-gold-elite hover:text-black-deep"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-16 text-center">
           <div className="inline-flex items-center space-x-2 bg-gold-elite/10 px-6 py-2 rounded-full border border-gold-elite/20">
              <Star className="fill-gold-elite text-gold-elite" size={14} />
              <span className="text-gold-elite text-[10px] font-bold uppercase tracking-widest">A barbearia mais bem avaliada de Alagoas</span>
           </div>
        </div>
      </div>
    </section>
  );
}

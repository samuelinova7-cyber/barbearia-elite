import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const photoProducts = "https://res.cloudinary.com/dqukldtq1/image/upload/v1776632431/Captura_de_tela_2026-04-16_170233_l2ujo3.png";

const products = [
  { name: 'Minoxidill', price: '90,00' },
  { name: 'Pasta Matte', price: '40,00' },
  { name: 'Pasta Caramelito', price: '40,00' },
  { name: 'Pasta Incolor', price: '40,00' },
  { name: 'Óleo para Barba', price: '40,00' },
  { name: 'Balm', price: '35,00' },
  { name: 'Shampoo para Barba', price: '35,00' },
  { name: 'Gel Cola', price: '35,00' },
  { name: 'Escova de Cabelo', price: '5,00' },
];

export default function Shop() {
  return (
    <section id="loja" className="py-24 bg-black-deep relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-gold-elite text-xs font-bold uppercase tracking-[0.3em] mb-4">Elite Brand</h2>
            <h3 className="text-4xl lg:text-5xl font-serif text-white-ice mb-12">LINHA DE CUIDADOS</h3>
            
            <div className="space-y-4 max-w-lg">
              {products.map((product) => (
                <div key={product.name} className="flex justify-between items-center border-b border-white/5 pb-3 group">
                  <span className="text-white-ice font-light group-hover:text-gold-elite transition-colors">{product.name}</span>
                  <div className="flex-grow border-b border-dotted border-white/10 mx-4 mb-1" />
                  <span className="text-gold-elite font-bold">R$ {product.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-center"
          >
            <div className="relative w-full aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2.5rem] mb-10 shadow-2xl border border-white/5">
              <img 
                src={photoProducts} 
                alt="Elite Products Display" 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black-deep/80 to-transparent p-10">
                <p className="text-white-ice font-serif text-2xl italic tracking-tight">"A finalização perfeita para o seu estilo está aqui."</p>
              </div>
            </div>

            <button className="gold-solid-btn w-full px-12 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest flex items-center justify-center space-x-3 shadow-xl shadow-gold-elite/10 group">
              <ShoppingBag size={20} />
              <span>Chame no Whats App</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import logo from './logo_elite.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with placeholder overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black-deep/80 z-10" />
        <img
          src="https://picsum.photos/seed/barber/1920/1080?blur=10"
          alt="Elite Studio Barber Hero"
          className="w-full h-full object-cover grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-gold-elite/10 border border-gold-elite/20 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-gold-elite rounded-full animate-pulse" />
              <span className="text-gold-elite text-xs font-bold uppercase tracking-widest">
                Referência em Cuidado Premium
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white-ice leading-[1.1] mb-8">
              Estilo Elite – <br />
              <span className="text-gold-elite italic font-normal">Modernidade,</span> <br />
              Cuidado e Tradição
            </h1>

            <p className="max-w-xl text-gray-400 text-lg lg:text-xl mb-12 font-light leading-relaxed">
              No Elite Studio Barber você tem cuidado premium para seu visual e barba. 
              Sinta a experiência de ser referência através do visagismo e da tradição.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="gold-solid-btn w-full sm:w-auto px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center group">
                Agendar Agora
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="gold-outline-btn w-full sm:w-auto px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest uppercase">
                Implantes
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full lg:w-auto"
          >
            <div className="relative aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden card-luxury group shadow-2xl shadow-gold-elite/5">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black-deep/90 via-black-deep/40 to-transparent h-1/2 z-10" />

              <div className="absolute inset-0 flex items-center justify-center p-12">
                <motion.div 
                  className="animate-float logo-reflection shine-effect rounded-full"
                >
                  <img 
                    src={logo} 
                    alt="Elite Logo" 
                    className="w-full h-full object-contain max-w-[280px] lg:max-w-[400px]"
                  />
                </motion.div>
              </div>

              {/* Tag Overlays */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[85%] z-20">
                <div className="glass px-6 py-4 rounded-2xl flex items-center justify-between border border-gold-elite/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gold-elite rounded-full flex items-center justify-center text-black-deep">
                      <img src={logo} alt="Mini Logo" className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <span className="block text-white-ice text-sm font-bold">Elite Studio Barber</span>
                      <span className="text-[10px] text-gold-elite uppercase tracking-widest font-bold">O Ser VIP é Padrão</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center text-white/40">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <div className="w-[1px] h-12 bg-gold-elite/30" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold-elite mt-4">Scroll</span>
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ShieldCheck, Zap, Scissors, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';
import videoSrc from './video_transplante.mp4';

export default function HairTransplant() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="transplante" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-elite/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-gold-elite text-xs font-bold uppercase tracking-[0.3em] mb-4">Elite Capilar</h2>
            <h3 className="text-4xl lg:text-5xl font-serif text-white-ice mb-8 uppercase tracking-tighter">TRANSPLANTE E ESTÉTICA AVANÇADA</h3>
            <p className="text-gray-400 font-light text-lg mb-8 italic leading-relaxed">
              "A tecnologia a serviço da sua imagem. Não tratamos apenas de fios, devolvemos a confiança de quem sabe onde quer chegar."
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-elite/20 flex items-center justify-center text-gold-elite flex-shrink-0">
                  <Scissors size={24} />
                </div>
                <div>
                  <h4 className="text-white-ice font-serif text-xl mb-1">Prótese Capilar Premium</h4>
                  <p className="text-gray-500 font-light text-sm">Base de micro-pele ultrafina com resultado imediato e naturalidade total.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-elite/20 flex items-center justify-center text-gold-elite flex-shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-white-ice font-serif text-xl mb-1">Consultoria Frontal</h4>
                  <p className="text-gray-500 font-light text-sm">Design estratégico da hairline baseado em visagismo para transplante capilar.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-elite/20 flex items-center justify-center text-gold-elite flex-shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-white-ice font-serif text-xl mb-1">Terapias de Fortalecimento</h4>
                  <p className="text-gray-500 font-light text-sm">Protocolos de alta frequência para revitalizar folículos e combater a queda.</p>
                </div>
              </div>
            </div>

            <button className="gold-solid-btn px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl shadow-gold-elite/20">
              Agendar Avaliação Capilar
            </button>
          </motion.div>

          {/* Right Column: Visual Container (VIDEO) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full lg:w-auto"
          >
            <div className="relative aspect-[9/16] max-h-[700px] mx-auto rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl group">
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-deep/60 via-transparent to-transparent pointer-events-none" />
              
              <button 
                onClick={toggleMute}
                className="absolute bottom-6 right-6 z-20 w-12 h-12 bg-black-deep/60 backdrop-blur-md rounded-full flex items-center justify-center text-gold-elite border border-white/10 hover:bg-gold-elite hover:text-black-deep transition-all"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>

              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-[10px] text-gold-elite font-bold uppercase tracking-[0.2em] bg-black-deep/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                  Resultado Real
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

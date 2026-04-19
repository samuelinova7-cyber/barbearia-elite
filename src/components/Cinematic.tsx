import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';

const videoSrc = "https://res.cloudinary.com/dqukldtq1/video/upload/v1776632442/SnapInsta.to_AQPafHimi0RgW5pSJi2g5K5nmI9KT58B7m-PcSDFpbUg57nA8hWe1xEJlul6siOusFXHVYQIR-RDUrXkg2vrMT35YZQwKqFANJrErhg_f0cwyv.mp4";

export default function Cinematic() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black-deep/40 z-10" />
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <button 
            onClick={toggleMute}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white/40 mb-8 cursor-pointer hover:bg-gold-elite/20 hover:text-gold-elite transition-all border border-white/5"
            title={isMuted ? "Ativar Áudio" : "Desativar Áudio"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <h2 className="text-4xl lg:text-7xl font-serif font-bold text-white-ice uppercase tracking-tighter drop-shadow-2xl">
            Sinta a Experiência
          </h2>
          <p className="mt-4 text-gold-elite tracking-[0.4em] uppercase text-sm font-semibold">
            Elite Studio Barber Concept
          </p>
        </motion.div>
      </div>
    </section>
  );
}

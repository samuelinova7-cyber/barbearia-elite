import { motion } from 'motion/react';
import { Instagram, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const videos = [
  'https://res.cloudinary.com/dqukldtq1/video/upload/v1776632432/SnapInsta.to_AQP7ESSLtHDFeLPRyFCd2zqFHnBNhcryaKje_tNXV-VRYc4o6-cdyALYCpjE34aPWOHJIaqM_rlINa9uj89eZMyrjb_l1p6r9ArlCec_s8qpt4.mp4',
  'https://res.cloudinary.com/dqukldtq1/video/upload/v1776632434/SnapInsta.to_AQPbGDTk4yGWnBGQ2i0N0S7PA5Ywx05nPkKEWN4ta4HMj8g_kuKJq-rKPReAXMxGex1zjZRe2koMCtraOOHSjrED5gz-IZJlIMjp7jM_wf6eme.mp4',
  'https://res.cloudinary.com/dqukldtq1/video/upload/v1776632438/SnapInsta.to_AQOX4z7CY9_trXDNTHSgJ37XejZoTI6yl6-hZD1Z0_pX0aPqwXb8ElDJrE3XbhhfTLz0Hmb-A-9qPOQTgqqZYo7QdvGsACb2sQA_Qig_zfgtau.mp4',
  'https://res.cloudinary.com/dqukldtq1/video/upload/v1776632439/SnapInsta.to_AQPz9ve37o0K0UoyAzCtX8kdywyQbBvTQwginTuoxSYMF820dkT4ewKMoBvMlReFA7j-q0QWXZwc97j-sG3l6GbM_gaygd2.mp4'
];

export default function InstagramSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const toggleMute = () => {
    videos.forEach((_, idx) => {
      if (videoRefs.current[idx]) {
        videoRefs.current[idx]!.muted = !isMuted;
      }
    });
    setIsMuted(!isMuted);
  };

  return (
    <section id="instagram" className="py-24 bg-black-deep overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h2 className="text-gold-elite text-xs font-bold uppercase tracking-[0.3em] mb-4">Social Media</h2>
          <h3 className="text-4xl lg:text-5xl font-serif text-white-ice uppercase tracking-tighter">SIGA NO INSTAGRAM</h3>
        </div>
        <a 
          href="https://www.instagram.com/elitestudiobarber_?igsh=dmR6emhjbm0yNGFo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="gold-solid-btn px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center space-x-2 shadow-lg shadow-gold-elite/10"
        >
          <Instagram size={18} />
          <span>@elitestudiobarber_</span>
        </a>
      </div>

      <div className="relative w-full">
        {/* Horizontal Marquee for Videos */}
        <div className="flex space-x-4 animate-marquee-slow py-4">
          {[...videos, ...videos].map((video, idx) => (
            <div 
              key={idx} 
              className="relative flex-shrink-0 w-[280px] lg:w-[350px] aspect-[9/16] rounded-3xl overflow-hidden border border-white/5 shadow-2xl group"
            >
              <video
                ref={el => videoRefs.current[idx % videos.length] = el}
                src={video}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none" />
              
              <div className="absolute top-4 right-4 z-20">
                 <Instagram className="text-white/40 group-hover:text-white transition-colors" size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* Global Sound Control (Less Evident) */}
        <div className="absolute bottom-8 right-12 z-40">
          <button 
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/30 hover:text-gold-elite hover:border-gold-elite/40 transition-all"
            title={isMuted ? "Ativar Áudio" : "Desativar Áudio"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
}

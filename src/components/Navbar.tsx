import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Youtube, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Planos', href: '#planos' },
    { name: 'Próteses', href: '#proteses' },
    { name: 'Estética', href: '#transplante' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Unidades', href: '#unidades' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="hidden lg:flex items-center space-x-6 flex-1">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase hover:text-gold-elite transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex-shrink-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-2xl font-serif font-bold tracking-tighter shine-effect px-4 py-1"
            >
              <span className="text-white-ice uppercase tracking-widest">ELITE</span>
              <span className="text-gold-elite ml-1 font-normal italic">STUDIO</span>
            </motion.div>
          </div>

          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-end">
            {navLinks.slice(4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase hover:text-gold-elite transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="gold-solid-btn px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Agendar Agora
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white-ice p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <div className="fixed top-[88px] lg:top-[104px] left-0 right-0 z-[45]">
         {/* Ticker placeholder - will be moved here in App.tsx or managed via CSS */}
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden glass flex flex-col items-center justify-center space-y-8 pt-20"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif tracking-widest uppercase hover:text-gold-elite transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="gold-solid-btn px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest">
              Agendar Agora
            </button>
            <div className="flex space-x-6 pt-8">
              <Instagram className="text-gold-elite" />
              <Youtube className="text-gold-elite" />
              <Phone className="text-gold-elite" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

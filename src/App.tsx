import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlansSection from './components/Plans';
import About from './components/About';
import Cinematic from './components/Cinematic';
import Shop from './components/Shop';
import Services from './components/Services';
import Units from './components/Units';
import HairProsthesis from './components/HairProsthesis';
import HairTransplant from './components/HairTransplant';
import FrancesUnitSpecial from './components/FrancesUnitSpecial';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import InformationTicker from './components/InformationTicker';
import InteractiveMap from './components/InteractiveMap';
import WorkWithUs from './components/WorkWithUs';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-black-deep selection:bg-gold-elite selection:text-black-deep scroll-smooth">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold-elite z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <InformationTicker />

      <main>
        <Hero />
        
        <div id="planos">
          <PlansSection />
        </div>

        <div id="sobre">
          <About />
        </div>

        <div id="proteses">
           <HairProsthesis />
        </div>

        <div id="transplante">
           <HairTransplant />
        </div>

        <Cinematic />

        <div id="loja">
          <Shop />
        </div>

        <FrancesUnitSpecial />

        <section id="servicos">
          <Services />
        </section>

        <Gallery />

        <Testimonials />

        <FAQ />

        <InteractiveMap />

        <Units />

        <WorkWithUs />
      </main>

      <Footer />
      
      {/* Floating CTA for Whatsapp */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white hover:brightness-110 transition-all"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.096 3.389l-.72 2.628 2.691-.706c.801.513 1.741.812 2.756.812 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-10.823-6.123zm3.669 8.273c.198.058.233.247.113.327-.032.022-.63.394-.997.417-.354.019-.652-.106-.975-.247-.508-.223-1.048-.593-1.463-1.008-.415-.415-.785-.955-1.008-1.463-.141-.323-.266-.621-.247-.975.023-.367.395-.965.417-.997.08-.12.269-.085.327.113.111.373.235.599.31.75.143.3.155.32.1.472-.055.152-.255.454-.347.538-.052.047-.073.097-.03.167.043.07.191.313.411.533.22.22.463.368.533.411.07.043.12.022.167-.03.084-.092.386-.292.538-.347.152-.055.172-.043.472.1.151.075.377.199.75.31z"/>
        </svg>
      </motion.a>
    </div>
  );
}

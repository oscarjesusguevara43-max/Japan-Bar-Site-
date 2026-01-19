import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/moody_high-end_bar_interior.png";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-4xl"
        >
          <span className="text-secondary tracking-[0.2em] text-sm md:text-base font-medium uppercase">
            Est. 2015 • Montréal
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-cinzel font-bold text-white tracking-tighter drop-shadow-2xl">
            Big in Japan
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
            Un rincón secreto en el corazón de Montréal. <br className="hidden md:block" />
            Cócteles artesanales, atmósfera íntima, alma japonesa.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white min-w-[180px] h-14 font-cinzel text-sm tracking-widest rounded-none border border-primary hover:border-primary/90"
              onClick={() => scrollTo("#reservations")}
            >
              RESERVAR MESA
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-black min-w-[180px] h-14 font-cinzel text-sm tracking-widest rounded-none"
              onClick={() => scrollTo("#menu")}
            >
              VER CARTA
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">Descubre</span>
      </motion.div>
    </section>
  );
}

import heroBg from "@assets/Screenshot_20260118-174214_(1)_1768847313856.jpg";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

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
            BIG IN JAPAN
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
            Un rincón secreto en el corazón de Montréal. <br className="hidden md:block" />
            Cócteles artesanales, atmósfera íntima, alma japonesa.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white min-w-[220px] h-14 font-cinzel text-sm tracking-widest rounded-none border border-primary hover:border-primary/90 transition-all active:scale-95"
              onClick={() => scrollTo("#reservations")}
              data-testid="button-reservar-hero"
            >
              RESERVAR MESA
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-black min-w-[220px] h-14 font-cinzel text-sm tracking-widest rounded-none transition-all active:scale-95"
              onClick={() => scrollTo("#menu")}
              data-testid="button-carta-hero"
            >
              VER CARTA
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => scrollTo("#about")}
      >
        <span className="text-xs uppercase tracking-widest">Descubre</span>
      </motion.div>
    </section>
  );
}

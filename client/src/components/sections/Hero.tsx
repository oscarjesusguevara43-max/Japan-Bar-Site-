import heroBg from "@assets/Screenshot_20260118-174214_(1)_1768847794315.jpg";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const makeCall = () => {
    window.location.href = "tel:+14383805658";
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background with explicit image handling */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Big in Japan Bar Interior"
          className="w-full h-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-black/50" />
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
            {t("hero.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white min-w-[220px] h-14 font-cinzel text-sm tracking-widest rounded-none border border-primary hover:border-primary/90 transition-all active:scale-95"
              onClick={() => scrollTo("#reservations")}
              data-testid="button-reservar-hero"
            >
              {t("hero.reserve")}
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-black min-w-[220px] h-14 font-cinzel text-sm tracking-widest rounded-none transition-all active:scale-95"
              onClick={() => scrollTo("#menu")}
              data-testid="button-carta-hero"
            >
              {t("hero.menu")}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Call Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+14383805658"
        className="fixed bottom-8 right-8 z-[100] bg-secondary text-black p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-secondary/90 transition-colors cursor-pointer"
        aria-label="Call Now"
      >
        <Phone className="h-7 w-7" />
        <span className="absolute -top-2 -right-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
        </span>
      </motion.a>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => scrollTo("#about")}
      >
        <span className="text-xs uppercase tracking-widest">{t("hero.discover")}</span>
      </motion.div>
    </section>
  );
}

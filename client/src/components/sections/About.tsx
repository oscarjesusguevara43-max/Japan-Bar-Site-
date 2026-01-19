import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import bartenderImg from "@assets/generated_images/japanese_bartender_mixing_drink.png";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Años de Historia", value: "10+" },
    { label: "Cócteles Creados", value: "100+" },
    { label: "Clientes Felices", value: "5k+" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-secondary font-cinzel tracking-widest">NUESTRA HISTORIA</span>
              <h2 className="text-4xl md:text-5xl font-cinzel text-white leading-tight">
                El Arte de la <br /> <span className="text-primary italic">Hospitalidad Invisible</span>
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              Escondido detrás de una puerta sin nombre en el Boulevard Saint-Laurent, Big in Japan no es solo un bar, es un santuario. 
              Desde 2015, hemos cultivado un espacio donde el tiempo se detiene y cada detalle importa.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Nuestra filosofía combina la precisión técnica de la coctelería japonesa con la calidez del alma de Montreal. 
              Cada bebida es una ceremonia, cada visita una experiencia íntima diseñada para los sentidos.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="block text-3xl md:text-4xl font-cinzel text-secondary font-bold">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
              <img 
                src={bartenderImg} 
                alt="Bartender mixing drink" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              {/* Frame decoration */}
              <div className="absolute inset-4 border border-white/20 z-20" />
            </div>
            
            {/* Quote card */}
            <div className="absolute -bottom-10 -left-10 bg-card border border-white/10 p-6 md:p-8 max-w-xs shadow-2xl hidden md:block z-30">
              <p className="font-cinzel text-primary text-xl mb-4">"</p>
              <p className="text-gray-300 italic font-light text-sm">
                El verdadero cóctel no se bebe, se siente. Es una pausa en el caos del mundo.
              </p>
              <p className="text-secondary text-xs mt-4 font-bold tracking-widest uppercase">— Hiroshi, Jefe de Barra</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

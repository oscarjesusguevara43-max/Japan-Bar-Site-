import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

type Category = "cocktails" | "sake" | "wine" | "food";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

const menuItems: Record<Category, MenuItem[]> = {
  cocktails: [
    { name: "Tokyo Old Fashioned", description: "Nikka Whisky From The Barrel, azúcar de Okinawa, amargos de yuzu", price: "$22" },
    { name: "Sakura Martini", description: "Roku Gin, sake infusionado con flor de cerezo, vermouth seco", price: "$19", tag: "Signature" },
    { name: "Kyoto Mule", description: "Vodka Haku, jengibre fresco, lima, pepino, soda", price: "$18" },
    { name: "Matcha Highball", description: "Whisky Toki, sirope de té matcha ceremonial, limón, soda", price: "$17" },
    { name: "Yuzu Sour", description: "Sake Junmai, licor de yuzu, clara de huevo, limón", price: "$18" },
    { name: "Smoked Plum Negroni", description: "Mezcal, Campari, Umeshu (vino de ciruela), humo de madera de cerezo", price: "$21" },
  ],
  sake: [
    { name: "Dassai 45", description: "Junmai Daiginjo - Afrutado, limpio, elegante", price: "$14 / $85" },
    { name: "Kubota Senju", description: "Ginjo - Seco, crujiente, notas minerales", price: "$12 / $70" },
    { name: "Hakkaisan", description: "Tokubetsu Junmai - Suave, equilibrado, final limpio", price: "$13 / $75" },
    { name: "Tozai Snow Maiden", description: "Junmai Nigori - Cremoso, textura rica, notas de melón", price: "$11 / $65" },
  ],
  wine: [
    { name: "Chablis, Domaine Laroche", description: "Bourgogne, Francia - Chardonnay", price: "$18 / $90" },
    { name: "Pinot Noir, Erath", description: "Oregon, USA - Frutos rojos, especias suaves", price: "$16 / $80" },
    { name: "Riesling, Dr. Loosen", description: "Mosel, Alemania - Semi-seco, acidez vibrante", price: "$14 / $70" },
  ],
  food: [
    { name: "Edamame Trufado", description: "Sal marina, aceite de trufa blanca", price: "$9" },
    { name: "Tataki de Atún", description: "Atún aleta azul, ponzu cítrico, sésamo tostado, microgreens", price: "$24", tag: "Popular" },
    { name: "Gyoza de Wagyu", description: "Relleno de carne Wagyu, salsa de soja y vinagre negro (5 pz)", price: "$18" },
    { name: "Karaage", description: "Pollo frito estilo japonés, mayonesa de yuzu kosho", price: "$16" },
    { name: "Brochetas Yakitori", description: "Selección del chef (3 pz), glaseado tare casero", price: "$15" },
  ]
};

const categories = [
  { id: "cocktails", label: "Cócteles de Autor" },
  { id: "sake", label: "Sake & Shochu" },
  { id: "wine", label: "Vinos Selectos" },
  { id: "food", label: "Izakaya Tapas" },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("cocktails");

  return (
    <section id="menu" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-secondary font-cinzel tracking-widest text-sm">NUESTRA CARTA</span>
          <h2 className="text-4xl md:text-5xl font-cinzel text-white">Sabores de Oriente</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-white/10 pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`pb-4 text-sm md:text-lg font-cinzel tracking-wider transition-all relative ${
                activeCategory === cat.id ? "text-secondary" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-secondary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto"
            >
              {menuItems[activeCategory].map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="flex justify-between items-baseline border-b border-white/10 pb-2 mb-2 group-hover:border-primary/50 transition-colors">
                    <h3 className="text-xl text-white font-medium flex items-center gap-3">
                      {item.name}
                      {item.tag && (
                        <span className="text-[10px] uppercase bg-primary/20 text-primary px-2 py-0.5 rounded border border-primary/20 font-bold tracking-wider">
                          {item.tag}
                        </span>
                      )}
                    </h3>
                    <span className="text-secondary font-cinzel font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm font-light italic">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-20">
          <Button 
            variant="outline" 
            className="border-secondary text-secondary hover:bg-secondary hover:text-black font-cinzel tracking-widest gap-2"
          >
            <Download size={16} />
            DESCARGAR CARTA COMPLETA (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}

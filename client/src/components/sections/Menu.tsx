import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

type Category = "bulles" | "blancs" | "rouges" | "bieres" | "sans_alcool" | "premium";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

const menuItems: Record<Category, MenuItem[]> = {
  bulles: [
    { name: "Cava, Parellada, Sumarroca, Espagne", description: "Culture biologique", price: "CAD 11.00" },
    { name: "Québec, Pommes, Cidrerie Chemin Des Sept", description: "Turbot Brut, Canada", price: "CAD 40.00" },
    { name: "Champagne, Pommery Brut Royal, France", description: "Classic selection", price: "CAD 20.00" },
    { name: "Champagne, Chardonnay, Pascale Doquet", description: "Premier Cru, France", price: "CAD 85.00" },
    { name: "Champagne, Chardonnay, Jacques Lassaigne", description: "Blanc De Blanc, France", price: "CAD 95.00" },
  ],
  blancs: [
    { name: "Macedoine, Assyrtiko/Alagousia, Epanomi", description: "Gerovassiliou, 2022, Grèce", price: "CAD 10.00" },
    { name: "Alsace, Pinot Blanc/Riesling, Trilogie", description: "Domaine Barmès-Buecher, 2018, France (Biodynamique)", price: "CAD 10.00" },
    { name: "Alsace, Pinot Blanc, La Mise Du Printemps", description: "Josmeyer, 2023, France (Culture biologique)", price: "CAD 12.00" },
    { name: "Meseta, Airen/Macabeo, Domaine Les Rassembleurs", description: "L'Orange, 2022 (Culture biologique)", price: "CAD 70.00" },
  ],
  rouges: [
    { name: "Toscana, Grenache/Carignan, Unlitro", description: "Ampeleia, 2022, Italie", price: "CAD 10.00" },
    { name: "Bourgogne, Pinot Noir, Vieilles Vignes", description: "Nicolas Potel, 2017, France", price: "CAD 12.00" },
    { name: "Loire, Cabernet Franc, Litron Bourgueil", description: "Nicolas Grosbois, 2021, France (Culture biologique)", price: "CAD 65.00" },
    { name: "Beaujolais, Gamay, Prémices Laurence Et Rémi", description: "Dufaitre, 2021, France (Culture biologique)", price: "CAD 60.00" },
  ],
  bieres: [
    { name: "Blonde", description: "Cerveza clara artesanal", price: "CAD 8.00" },
    { name: "Isa Des Chutes", description: "Session IPA", price: "CAD 9.00" },
    { name: "Noire", description: "Stout artesanal", price: "CAD 9.00" },
    { name: "Cidre", description: "Sidra artesanal de manzana", price: "CAD 8.50" },
  ],
  sans_alcool: [
    { name: "Jus D'orange", description: "Oranges fraichement pressées", price: "CAD 6.00" },
    { name: "Virgin Mule", description: "Lime, sirop de gingembre, soda, menthe", price: "CAD 10.00" },
    { name: "Limonade", description: "Citron, soda, sirop simple", price: "CAD 7.00" },
    { name: "Diabolo Menthe", description: "Sirop de menthe, citron, soda", price: "CAD 7.00" },
  ],
  premium: [
    { name: "Bulleit", description: "Bourbon, états-unis", price: "CAD 12.00" },
    { name: "Maker's Mark", description: "Bourbon, états-unis", price: "CAD 13.00" },
    { name: "Buffalo Trace", description: "Bourbon, états-unis", price: "CAD 12.00" },
    { name: "Lot 40", description: "Whiskie, canada", price: "CAD 11.00" },
    { name: "Knob Creek 9", description: "Bourbon, 9 ans, états-unis", price: "CAD 14.00" },
    { name: "Basil Hayden's", description: "Bourbon, états-unis", price: "CAD 15.00" },
    { name: "Woodford", description: "Bourbon, états-unis", price: "CAD 14.00" },
    { name: "Pike Creek", description: "Whiskie, canada", price: "CAD 12.00" },
    { name: "Gibson", description: "Whiskie, états-unis", price: "CAD 11.00" },
    { name: "Koval", description: "Bourbon, états-unis", price: "CAD 16.00" },
  ]
};

const categories = [
  { id: "bulles", label: "Bulles" },
  { id: "blancs", label: "Blancs" },
  { id: "rouges", label: "Rouges" },
  { id: "bieres", label: "Bières" },
  { id: "sans_alcool", label: "Sans Alcool" },
  { id: "premium", label: "Premium" },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("bulles");

  return (
    <section id="menu" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-secondary font-cinzel tracking-widest text-sm uppercase">Nuestra Carta</span>
          <h2 className="text-4xl md:text-5xl font-cinzel text-white">Selección de la Casa</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-white/10 pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`pb-4 text-xs md:text-base font-cinzel tracking-wider transition-all relative whitespace-nowrap ${
                activeCategory === cat.id ? "text-secondary" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {cat.label.toUpperCase()}
              {activeCategory === cat.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-secondary"
                />
              )}
            </button>
          ))}
        </div>

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
                    <h3 className="text-lg text-white font-medium flex items-center gap-3">
                      {item.name}
                    </h3>
                    <span className="text-secondary font-cinzel font-bold text-base whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                  <p className="text-gray-400 text-xs font-light italic">{item.description}</p>
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

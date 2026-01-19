import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

type TranslationKey = 
  | "hero.subtitle" 
  | "hero.reserve" 
  | "hero.menu" 
  | "hero.discover"
  | "nav.about"
  | "nav.menu"
  | "nav.gallery"
  | "nav.reservations"
  | "nav.history"
  | "menu.title"
  | "menu.subtitle"
  | "menu.showFull"
  | "menu.hideFull"
  | "about.tag"
  | "about.title"
  | "about.invisible"
  | "about.text1"
  | "about.text2"
  | "about.years"
  | "about.cocktails"
  | "about.clients"
  | "about.quote"
  | "about.author"
  | "footer.desc"
  | "footer.contact"
  | "footer.hours"
  | "footer.days"
  | "footer.closed"
  | "footer.rights";

const translations: Record<Language, Record<string, string>> = {
  en: {
    "hero.subtitle": "A secret corner in the heart of Montréal. Craft cocktails, intimate atmosphere, Japanese soul.",
    "hero.reserve": "BOOK A TABLE",
    "hero.menu": "VIEW MENU",
    "hero.discover": "Discover",
    "nav.about": "About",
    "nav.history": "History",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.reservations": "Reservations",
    "menu.title": "Our Selection",
    "menu.subtitle": "House Selection",
    "menu.showFull": "SHOW FULL MENU",
    "menu.hideFull": "HIDE MENU",
    "about.tag": "OUR STORY",
    "about.title": "The Art of",
    "about.invisible": "Invisible Hospitality",
    "about.text1": "Hidden behind an unmarked door on Saint-Laurent Boulevard, Big in Japan is not just a bar, it's a sanctuary. Since 2015, we have cultivated a space where time stops and every detail matters.",
    "about.text2": "Our philosophy combines the technical precision of Japanese bartending with the warmth of Montreal's soul. Each drink is a ceremony, each visit an intimate experience designed for the senses.",
    "about.years": "Years of History",
    "about.cocktails": "Cocktails Created",
    "about.clients": "Happy Clients",
    "about.quote": "A true cocktail is not just drunk, it is felt. It is a pause in the world's chaos.",
    "about.author": "Hiroshi, Head Bartender",
    "footer.desc": "A sanctuary of mixology and Japanese gastronomy in the heart of Montreal. Where tradition meets the night.",
    "footer.contact": "CONTACT",
    "footer.hours": "HOURS",
    "footer.days": "Wednesday – Sunday",
    "footer.closed": "Closed",
    "footer.rights": "All rights reserved."
  },
  fr: {
    "hero.subtitle": "Un coin secret au cœur de Montréal. Cocktails artisanaux, atmosphère intime, âme japonaise.",
    "hero.reserve": "RÉSERVER",
    "hero.menu": "VOIR LA CARTE",
    "hero.discover": "Découvrir",
    "nav.about": "À Propos",
    "nav.history": "Histoire",
    "nav.menu": "Menu",
    "nav.gallery": "Galerie",
    "nav.reservations": "Réservations",
    "menu.title": "Notre Sélection",
    "menu.subtitle": "Sélection de la Maison",
    "menu.showFull": "VOIR LA CARTE COMPLÈTE",
    "menu.hideFull": "CACHER LA CARTE",
    "about.tag": "NOTRE HISTOIRE",
    "about.title": "L'Art de l'",
    "about.invisible": "Hospitalité Invisible",
    "about.text1": "Situé derrière une porte modeste dans le Plateau, Big in Japan est plus qu'un simple bar à cocktails. C'est une expérience inspirée du minimalisme japonais et de l'élégance des bars classiques.",
    "about.text2": "Notre espace est conçu pour la conversation et le plaisir de boissons méticuleusement préparées, sous la douce lumière de dizaines de bougies et de bouteilles suspendues.",
    "about.years": "Ans d'Histoire",
    "about.cocktails": "Cocktails Créés",
    "about.clients": "Clients Heureux",
    "about.quote": "Le vrai cocktail ne se boit pas, il se ressent. C'est une pause dans le chaos du monde.",
    "about.author": "Hiroshi, Chef de Bar",
    "footer.desc": "Un sanctuaire de mixologie et de gastronomie japonaise au cœur de Montréal. Là où la tradition rencontre la nuit.",
    "footer.contact": "CONTACT",
    "footer.hours": "HORAIRES",
    "footer.days": "Mercredi – Dimanche",
    "footer.closed": "Fermé",
    "footer.rights": "Tous droits réservés."
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: TranslationKey) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

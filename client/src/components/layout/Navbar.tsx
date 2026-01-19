import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.history"), href: "#about" },
    { name: t("nav.menu"), href: "#menu" },
    { name: t("nav.gallery"), href: "#gallery" },
    { name: t("nav.reservations"), href: "#reservations" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-cinzel font-bold text-white tracking-wider" onClick={(e) => scrollToSection(e, "#hero")}>
          Big in <span className="text-primary">Japan</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium tracking-wide text-gray-300 hover:text-secondary transition-colors"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
          
          <button 
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            className="flex items-center gap-1 text-xs font-cinzel text-secondary hover:text-white transition-colors border-l border-white/10 pl-4"
          >
            <Globe size={14} />
            {language === "en" ? "FR" : "EN"}
          </button>

          <Button 
            className="bg-primary hover:bg-primary/90 text-white font-cinzel text-xs tracking-widest px-6"
            onClick={(e) => scrollToSection(e as any, "#reservations")}
          >
            {t("hero.reserve")}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            className="text-secondary"
          >
            <Globe size={20} />
          </button>
          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/5 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-cinzel text-gray-300 hover:text-secondary"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="bg-primary hover:bg-primary/90 text-white w-full mt-4"
                onClick={(e) => scrollToSection(e as any, "#reservations")}
              >
                {t("hero.reserve")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-3xl font-cinzel text-white">Big in <span className="text-primary">Japan</span></h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              {t("footer.desc")}
            </p>
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left space-y-6">
            <h4 className="text-lg font-cinzel text-secondary tracking-widest">{t("footer.contact")}</h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>4175 Boul. Saint-Laurent,<br />Montréal, QC H2W 1Y7, Canada</span>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+14383805658" className="hover:text-white transition-colors">+1 438-380-5658</a>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@biginjapan-bar.com" className="hover:text-white transition-colors">info@biginjapan-bar.com</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left space-y-6">
            <h4 className="text-lg font-cinzel text-secondary tracking-widest">{t("footer.hours")}</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-center md:justify-between border-b border-white/5 pb-2">
                <span>{t("footer.days")}</span>
                <span className="font-bold text-white ml-4">6:00 p.m. – 2:00 a.m.</span>
              </div>
              <div className="flex justify-center md:justify-between pt-2 opacity-50">
                <span>Monday – Tuesday</span>
                <span className="ml-4">{t("footer.closed")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Big in Japan Bar. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}

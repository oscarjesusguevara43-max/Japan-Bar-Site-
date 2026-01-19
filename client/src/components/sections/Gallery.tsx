import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import gallery1 from "@assets/generated_images/signature_red_cocktail.png";
import gallery2 from "@assets/generated_images/japanese_bar_details.png";
import gallery3 from "@assets/generated_images/moody_high-end_bar_interior.png";

const images = [
  { src: gallery1, alt: "Signature Cocktail", span: "md:col-span-1 md:row-span-2" },
  { src: gallery2, alt: "Interior Details", span: "md:col-span-1 md:row-span-1" },
  { src: gallery3, alt: "Bar Atmosphere", span: "md:col-span-2 md:row-span-1" },
  // Reusing images for layout demo purposes
  { src: gallery2, alt: "More Details", span: "md:col-span-1 md:row-span-1" },
  { src: gallery1, alt: "Another Cocktail", span: "md:col-span-1 md:row-span-1" },
  { src: gallery3, alt: "Night Vibe", span: "md:col-span-1 md:row-span-1" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-secondary font-cinzel tracking-widest text-sm">GALERÍA</span>
          <h2 className="text-4xl md:text-5xl font-cinzel text-white">La Experiencia Visual</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className={`relative overflow-hidden group cursor-pointer rounded-sm ${img.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-cinzel text-sm bg-black/50 px-3 py-1 backdrop-blur-sm border border-white/10">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage}
            alt="Fullscreen view"
            className="max-w-full max-h-[90vh] object-contain border border-white/10 box-shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

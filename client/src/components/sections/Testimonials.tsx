import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophie L.",
    text: "Absolutamente mágico. La atmósfera te transporta directamente a un callejón de Ginza. El Tokyo Old Fashioned es una obra de arte.",
    rating: 5
  },
  {
    name: "Marc-André D.",
    text: "El secreto mejor guardado de Saint-Laurent. Íntimo, oscuro y con un servicio impecable. Perfecto para impresionar en una cita.",
    rating: 5
  },
  {
    name: "Elena R.",
    text: "La comida es tan buena como los cócteles. El tataki de atún se deshace en la boca. Volveré sin duda.",
    rating: 5
  },
  {
    name: "James W.",
    text: "A true gem. The attention to detail is staggering, from the ice cubes to the lighting. A must-visit in Montreal.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-cinzel tracking-widest text-sm">TESTIMONIOS</span>
          <h2 className="text-3xl md:text-4xl font-cinzel text-white mt-2">Lo que dicen nuestros clientes</h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-6">
                <div className="bg-background border border-white/5 p-8 h-full flex flex-col justify-between rounded-sm hover:border-primary/30 transition-colors">
                  <div className="space-y-4">
                    <div className="flex text-secondary">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed italic">"{review.text}"</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <p className="font-cinzel text-white font-bold">{review.name}</p>
                    <p className="text-xs text-gray-500">Cliente Verificado</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-transparent border-white/10 text-white hover:bg-primary hover:border-primary" />
          <CarouselNext className="hidden md:flex bg-transparent border-white/10 text-white hover:bg-primary hover:border-primary" />
        </Carousel>
      </div>
    </section>
  );
}

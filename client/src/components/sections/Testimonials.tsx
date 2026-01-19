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
    name: "Sonia Sethi",
    text: "Big in Japan es una joya escondida en el corazón de Montreal. Desde el momento en que entras, te transportas a un mundo completamente diferente: iluminación tenue, velas por todas partes, cabinas acogedoras y un ambiente de bar clandestino relajado y moderno.",
    rating: 5
  },
  {
    name: "Mulan_314",
    text: "Un lugar discreto y acogedor, una joya escondida. Idea perfecta para una cita. Sin duda volvería. Las bebidas son buenas, a un precio razonable y el personal es muy amable.",
    rating: 5
  },
  {
    name: "Alex Wenman",
    text: "Con bebidas increíbles y un espacio súper íntimo, Big in Japan es un lugar genial para tomar cócteles. Nos encantó su estilo clandestino y también que no fue difícil de encontrar. Buen precio, excelente servicio y ambiente relajado.",
    rating: 5
  },
  {
    name: "Kris Vathsalan",
    text: "¡Uno de los bares más bonitos en los que he estado! Parecía un bar clandestino, con una puerta difícil de encontrar, pero una vez que entramos, el ambiente era genial y valió la pena. Los cócteles estaban DELICIOSOS y el servicio fue muy puntual.",
    rating: 5
  },
  {
    name: "Tristan Newton",
    text: "Una joya escondida increíble en Montreal. Uno de los mejores lugares que hemos visitado, sin duda.",
    rating: 5
  },
  {
    name: "Vina Nguyen",
    text: "Bebidas deliciosas a precios razonables y un servicio excelente. Es un espacio precioso una vez que entras y te sientas.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-cinzel tracking-widest text-sm uppercase">Testimonios</span>
          <h2 className="text-4xl md:text-5xl font-cinzel text-white mt-4 mb-2">What Our Guests Say</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex text-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-400 font-medium">4.8 on Google Reviews</span>
          </div>
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
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-6">
                <div className="bg-background border border-white/5 p-10 h-full flex flex-col justify-between rounded-sm hover:border-primary/30 transition-all duration-300 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex text-secondary">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed italic font-light">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/5">
                    <p className="font-cinzel text-white text-xl font-bold tracking-wider uppercase">
                      - {review.name}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 bg-transparent border-white/10 text-white hover:bg-primary hover:border-primary w-12 h-12" />
            <CarouselNext className="static translate-y-0 bg-transparent border-white/10 text-white hover:bg-primary hover:border-primary w-12 h-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

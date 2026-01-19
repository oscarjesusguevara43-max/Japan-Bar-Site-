import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Teléfono inválido"),
  date: z.string().min(1, "Fecha requerida"),
  time: z.string().min(1, "Hora requerida"),
  guests: z.string().min(1, "Número de invitados requerido"),
  notes: z.string().optional(),
});

export default function Reservations() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "¡Solicitud Recibida!",
      description: "Nos pondremos en contacto contigo pronto para confirmar tu mesa.",
      className: "bg-primary text-white border-none",
    });
    form.reset();
  }

  return (
    <section id="reservations" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <span className="text-secondary font-cinzel tracking-widest text-sm">RESERVACIONES</span>
          <h2 className="text-4xl md:text-5xl font-cinzel text-white">Asegura tu Velada</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Para grupos mayores de 6 personas o eventos privados, por favor contáctanos directamente por teléfono.
          </p>
        </div>

        <div className="bg-card border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-background/50 border-white/10 focus:border-secondary transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-background/50 border-white/10 focus:border-secondary transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 555-000-0000" {...field} className="bg-background/50 border-white/10 focus:border-secondary transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Invitados</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-white/10 focus:border-secondary text-gray-300">
                            <SelectValue placeholder="Seleccionar cantidad" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-white/10 text-gray-300">
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>{num} Personas</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Fecha</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} className="bg-background/50 border-white/10 focus:border-secondary transition-colors text-gray-300" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Hora</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-white/10 focus:border-secondary text-gray-300">
                            <SelectValue placeholder="Seleccionar hora" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-white/10 text-gray-300">
                          {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Notas Especiales (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Alergias, ocasión especial..." 
                        className="resize-none bg-background/50 border-white/10 focus:border-secondary transition-colors" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-cinzel h-12 text-lg tracking-wider">
                CONFIRMAR SOLICITUD
              </Button>
            </form>
          </Form>
          
          <div className="mt-8 text-center pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-2">¿Prefieres hablar con nosotros?</p>
            <a href="tel:+14383805658" className="text-secondary font-bold hover:text-white transition-colors text-lg font-cinzel">
              LLAMAR AL +1 438-380-5658
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

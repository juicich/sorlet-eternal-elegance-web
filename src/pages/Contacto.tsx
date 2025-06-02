import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos contactaremos contigo muy pronto.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      title: "Dirección",
      details: ["Salta 170", "Neuquen, Neuquen", "Argentina"],
      icon: "📍",
    },
    {
      title: "Teléfono",
      details: ["+54 299 447-2358", "WhatsApp: +54 9 299 523-8312"],
      icon: "📞",
    },
    {
      title: "Email",
      details: ["sorlet_novias@hotmail.com"],
      icon: "✉️",
    },
    {
      title: "Horarios",
      details: ["Lun a Vier: 8:30 - 12:30 y 16:00- 20:00", "Sab: 9:30 - 13:00"],
      icon: "🕐",
    },
  ];

  return (
    <div className="min-h-screen bg-sorlet-ivory">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Hero-contacto.jpg')",
          }}>
          <div className="absolute inset-0 bg-sorlet-charcoal/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 text-shadow animate-fade-in">
            Contacto
          </h1>
          <p className="text-lg md:text-xl text-sorlet-gold font-playfair italic animate-fade-in">
            Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-sorlet-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border-sorlet-gold/20">
              <CardContent className="p-8">
                <h2 className="font-playfair text-3xl font-bold text-sorlet-charcoal mb-6">
                  Envíanos un mensaje
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre" className="text-sorlet-charcoal">
                        Nombre
                      </Label>
                      <Input
                        id="nombre"
                        required
                        className="border-sorlet-gold/30 focus:border-sorlet-gold"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="apellido"
                        className="text-sorlet-charcoal">
                        Apellido
                      </Label>
                      <Input
                        id="apellido"
                        required
                        className="border-sorlet-gold/30 focus:border-sorlet-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sorlet-charcoal">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="border-sorlet-gold/30 focus:border-sorlet-gold"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefono" className="text-sorlet-charcoal">
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      className="border-sorlet-gold/30 focus:border-sorlet-gold"
                    />
                  </div>

                  <div>
                    <Label htmlFor="servicio" className="text-sorlet-charcoal">
                      Servicio de interés
                    </Label>
                    <Select>
                      <SelectTrigger className="border-sorlet-gold/30 focus:border-sorlet-gold">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vestidos-novia">
                          Vestidos de Novia
                        </SelectItem>
                        <SelectItem value="trajes-novio">
                          Trajes de Novio
                        </SelectItem>
                        <SelectItem value="vestidos-15">
                          Vestidos de 15 Años
                        </SelectItem>
                        <SelectItem value="vestidos-fiesta">
                          Vestidos de Fiesta
                        </SelectItem>
                        <SelectItem value="bijouterie">Accesorios</SelectItem>
                        <SelectItem value="consulta-general">
                          Consulta General
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="evento" className="text-sorlet-charcoal">
                      Fecha del evento (opcional)
                    </Label>
                    <Input
                      id="evento"
                      type="date"
                      className="border-sorlet-gold/30 focus:border-sorlet-gold"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje" className="text-sorlet-charcoal">
                      Mensaje
                    </Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos sobre tu evento y cómo podemos ayudarte..."
                      className="border-sorlet-gold/30 focus:border-sorlet-gold min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-sorlet-gold hover:bg-sorlet-gold-dark text-sorlet-charcoal font-semibold w-full py-3">
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-sorlet-charcoal mb-6">
                  Información de contacto
                </h2>
                <p className="text-lg text-sorlet-warm-gray leading-relaxed mb-8">
                  Te invitamos a visitarnos en nuestro showroom o contactarnos
                  para agendar una cita personalizada.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-white border-sorlet-gold/20 hover-lift">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">{info.icon}</div>
                      <h3 className="font-playfair text-lg font-semibold text-sorlet-charcoal mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-sorlet-warm-gray text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-sorlet-gold/10 border-sorlet-gold/30">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-sorlet-charcoal mb-3">
                    ¿Por qué elegirnos?
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Más de 40 años de experiencia",
                      "Atención personalizada y profesional",
                      "Amplia variedad de estilos y tallas",
                      "Ajustes y modificaciones incluidas",
                      "Asesoramiento completo para tu evento",
                    ].map((reason, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sorlet-warm-gray">
                        <div className="w-2 h-2 bg-sorlet-gold rounded-full mr-3"></div>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-sorlet-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sorlet-charcoal mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-lg text-sorlet-warm-gray">
              Encontranos en el corazón de Neuquén
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-white border-sorlet-gold/20">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-sorlet-charcoal mb-4">
                    Cómo llegar
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-sorlet-charcoal">
                        En transporte público:
                      </p>
                      <p className="text-sorlet-warm-gray">
                        Colectivos: 1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 16, 17,
                        18, 20, 21, 22, 23, 27, 28
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sorlet-charcoal">
                        En auto:
                      </p>
                      <p className="text-sorlet-warm-gray">
                        Estacionamiento medido y pago en la zona
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-sorlet-gold/10 border-sorlet-gold/30">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-sorlet-charcoal mb-4">
                    Recomendación especial
                  </h3>
                  <p className="text-sorlet-warm-gray leading-relaxed">
                    Se requiere cita previa solo para la prueba de los vestidos
                    de novia. Contáctanos
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-sorlet-warm-gray/20 rounded-lg h-96 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.6776811367584!2d-68.0604517!3d-38.9525097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33c5fccdb0e7%3A0x7661c0f587a07f95!2sSalta%20170%2C%20Q8300%20Neuqu%C3%A9n%2C%20Argentina!5e0!3m2!1ses!2sar!4v1710875821037!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Sorlet en Salta 170, Neuquén"></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;

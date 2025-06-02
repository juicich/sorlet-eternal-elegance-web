import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation as SwiperNavigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Vestidos = () => {
  const categories = [
    {
      title: "Vestidos de Novia",
      description: "Diseños únicos para el día más importante de tu vida",
      images: [
        "/images/Vestido-Novia.jpg",
        "/images/novia2.jpg",
        "/images/novia3.jpg",
        "/images/novia4.jpg",
        "/images/novia5.jpg",
        "/images/novia6.jpg",
      ],
      features: [
        "Diseños Nacionales",
        "Diseños importados exclusivos",
        "Puesta a medida",
      ],
    },
    {
      title: "Vestidos de 15 Años",
      description: "Convierte tu celebración de 15 años en un cuento de hadas",
      images: [
        "/images/15-años.jpg",
        "/images/15-2.jpg",
        "/images/15-3.jpg",
        "/images/15-4.jpg",
        "/images/15-5.jpg",
        "/images/15-6.jpg",
        "/images/15-7.jpg",
        "/images/15-8.jpg",
      ],
      features: [
        "Diseños nacionales",
        "Diseños importados exclusivos",
        "Conjuntos 2 y 3 piezas",
        "Asesoramiento personalizado",
      ],
    },
    {
      title: "Vestidos de Fiesta",
      description: "Elegancia y sofisticación para cada ocasión especial",
      images: [
        "/images/Vestido-fiesta.jpg",
        "/images/fiesta1.jpg",
        "/images/fiesta2.jpg",
        "/images/fiesta3.jpg",
        "/images/fiesta4.jpg",
        "/images/fiesta5.jpg",
        "/images/fiesta6.jpg",
        "/images/fiesta7.jpg",
      ],
      features: [
        "Vestidos largos y cortos",
        "Madrinas",
        "Eventos corporativos",
        "Graduaciones",
        "Cócteles",
        "Galas y premiaciones",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-sorlet-ivory">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Vestidos.jpg')",
          }}>
          <div className="absolute inset-0 bg-sorlet-charcoal/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 text-shadow animate-fade-in">
            Para ellas
          </h1>
          <p className="text-lg md:text-xl mb-6 text-sorlet-gold font-playfair italic animate-fade-in">
            Para cada momento especial de tu vida
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-sorlet-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sorlet-charcoal mb-4">
              Nuestras Colecciones
            </h2>
            <p className="text-lg text-sorlet-warm-gray max-w-3xl mx-auto">
              Cada vestido es único, diseñado para hacer de tu momento especial
              algo inolvidable
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover-lift bg-white border-sorlet-gold/20 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-auto overflow-hidden">
                    <Swiper
                      modules={[
                        SwiperNavigation,
                        Pagination,
                        Autoplay,
                        EffectFade,
                      ]}
                      navigation
                      pagination={{
                        clickable: true,
                        dynamicBullets: true,
                      }}
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      effect="fade"
                      fadeEffect={{ crossFade: true }}
                      speed={800}
                      loop={true}
                      className="w-full aspect-[3/4]">
                      {category.images.map((image, imageIndex) => (
                        <SwiperSlide
                          key={imageIndex}
                          className="flex items-center justify-center">
                          <div className="relative w-full h-full">
                            <img
                              src={image}
                              alt={`${category.title} - Imagen ${
                                imageIndex + 1
                              }`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="font-playfair text-2xl font-semibold text-sorlet-charcoal mb-3">
                      {category.title}
                    </h3>
                    <p className="text-sorlet-warm-gray mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-sorlet-warm-gray">
                          <div className="w-2 h-2 bg-sorlet-gold rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {category.title === "Vestidos de Novia" && (
                      <Button
                        asChild
                        className="bg-sorlet-gold hover:bg-sorlet-gold-dark text-sorlet-charcoal font-semibold w-full transition-all duration-300">
                        <Link to="/contacto">Solicitar Cita</Link>
                      </Button>
                    )}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-sorlet-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sorlet-charcoal mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-lg text-sorlet-warm-gray max-w-3xl mx-auto">
              Te acompañamos en cada paso para encontrar tu vestido perfecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consulta Inicial",
                description:
                  "Conversamos sobre tus gustos, evento y presupuesto",
              },
              {
                step: "2",
                title: "Selección",
                description:
                  "Te mostramos opciones personalizadas según tus preferencias",
              },
              {
                step: "3",
                title: "Pruebas",
                description:
                  "Realizamos las pruebas necesarias y ajustes perfectos",
              },
              {
                step: "4",
                title: "Entrega",
                description: "Recibes tu vestido perfecto para tu día especial",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-sorlet-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-playfair text-2xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-sorlet-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sorlet-warm-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sorlet-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sorlet-charcoal mb-6">
            ¿Lista para encontrar tu vestido?
          </h2>
          <p className="text-lg text-sorlet-warm-gray mb-8 leading-relaxed">
            Visítanos y déjanos ayudarte a encontrar el vestido de tus sueños
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-sorlet-gold hover:bg-sorlet-gold-dark text-sorlet-charcoal font-semibold px-8 py-3 transition-all duration-300">
              <Link to="/">Volver al Inicio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vestidos;

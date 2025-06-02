import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Accesorios = () => {
  const [viewportRef1, embla1] = useEmblaCarousel({ loop: true });
  const [viewportRef2, embla2] = useEmblaCarousel({ loop: true });
  const [viewportRef3, embla3] = useEmblaCarousel({ loop: true });
  const [viewportRef4, embla4] = useEmblaCarousel({ loop: true });

  const autoplay = useCallback((embla: any) => {
    if (!embla) return;
    embla.scrollNext();
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => autoplay(embla1), 2000);
    const interval2 = setInterval(() => autoplay(embla2), 2000);
    const interval3 = setInterval(() => autoplay(embla3), 2000);
    const interval4 = setInterval(() => autoplay(embla4), 2000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [autoplay, embla1, embla2, embla3, embla4]);

  const categories = [
    {
      title: "Bijouterie",
      description: "Complementos elegantes para realzar tu look",
      image: "/images/Hero-Bijouterie.jpg",
      items: [
        "Tocados",
        "Coronas",
        "Cintos bordados",
        "Anillos",
        "Aros",
        "Gargantillas",
      ],
      carousel: [
        "/images/Corona7.jpg",
        "/images/Corona1.jpg",
        "/images/Corona2.jpg",
        "/images/Corona3.jpg",
        "/images/Corona4.jpg",
        "/images/Corona5.jpg",
      ],
    },
    {
      title: "Velos",
      description: "Velos de novia para cada estilo",
      image: "/images/Velos.jpg",
      items: ["Velos cortos", "Velos largos", "Velos bordados"],
      carousel: [
        "/images/Velo1.jpg",
        "/images/Velo2.jpg",
        "/images/Velo3.jpg",
        "/images/Velo4.jpg",
        "/images/Velo5.jpg",
      ],
    },
    {
      title: "Ramos",
      description: "Ramos artificiales para novias y eventos",
      image: "/images/Ramos.jpg",
      items: [
        "Ramos de novia",
        "Ramos de 15 años",
        "Ramos para damas",
        "Tocados florales",
      ],
      carousel: [
        "/images/Ramo1.jpg",
        "/images/Ramo2.jpg",
        "/images/Ramo3.jpg",
        "/images/Ramo4.jpg",
        "/images/Ramo5.jpg",
      ],
    },
    {
      title: "Abrigos",
      description: "Elegantes complementos para cubrir tus hombros",
      image: "/images/Abrigos.jpg",
      items: ["Chalinas", "Stolas", "Saquitos"],
      carousel: [
        "/images/Chalina1.jpg",
        "/images/Chalina2.jpg",
        "/images/Chalina3.jpg",
        "/images/Chalina4.jpg",
      ],
    },
  ];

  const occasions = [
    {
      title: "Bodas",
      description: "Accesorios especiales para novias y invitadas",
      image:
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
    },
    {
      title: "15 Años",
      description: "Bijouterie elegante para quinceañeras",
      image: "/images/coronas-15.jpg",
    },
    {
      title: "Graduaciones",
      description: "Accesorios sofisticados para tu día de graduación",
      image: "/images/Vestido-egreso.jpg",
    },
    {
      title: "Eventos Especiales",
      description: "Para galas, premiaciones y ocasiones formales",
      image: "/images/Vestido-fiesta.jpg",
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
            backgroundImage: "url('/images/Hero-Bijouterie.jpg')",
          }}>
          <div className="absolute inset-0 bg-sorlet-charcoal/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-shadow animate-fade-in">
            Accesorios
          </h1>
          <p className="text-lg md:text-xl mb-6 text-sorlet-gold font-playfair italic animate-fade-in">
            Accesorios únicos para momentos especiales
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-sorlet-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sorlet-charcoal mb-4">
              Nuestra Colección
            </h2>
            <p className="text-lg text-sorlet-warm-gray max-w-3xl mx-auto">
              Accesorios cuidadosamente seleccionados para complementar tu look
              en ocasiones especiales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className={`hover-lift bg-white border-sorlet-gold/20 overflow-hidden ${
                  index === 0 || index === 1 || index === 2 || index === 3
                    ? "lg:col-span-2"
                    : ""
                }`}>
                <div
                  className={`relative overflow-hidden ${
                    index === 0 || index === 1 || index === 2 || index === 3
                      ? "h-96"
                      : "h-48"
                  }`}>
                  {(index === 0 || index === 1 || index === 2 || index === 3) &&
                  category.carousel ? (
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {category.carousel.map((image, i) => (
                          <CarouselItem key={i}>
                            <img
                              src={image}
                              alt={`${category.title} ${i + 1}`}
                              className={`w-full h-full ${
                                image.includes("Velo") ||
                                image.includes("Corona") ||
                                image.includes("Ramo") ||
                                image.includes("Chalina")
                                  ? "object-contain object-top max-h-[500px]"
                                  : "object-contain"
                              }`}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4" />
                      <CarouselNext className="right-4" />
                    </Carousel>
                  ) : (
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-sorlet-charcoal mb-3">
                    {category.title}
                  </h3>
                  <p className="text-sorlet-warm-gray mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-sm text-sorlet-warm-gray">
                        <div className="w-1.5 h-1.5 bg-sorlet-gold rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-20 bg-sorlet-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sorlet-charcoal mb-4">
              Para Cada Ocasión
            </h2>
            <p className="text-lg text-sorlet-warm-gray max-w-3xl mx-auto">
              Tenemos los accesorios perfectos para cada momento especial de tu
              vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occasion, index) => (
              <Card
                key={index}
                className="hover-lift bg-white border-sorlet-gold/20 overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={occasion.image}
                    alt={occasion.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-playfair text-lg font-semibold text-sorlet-charcoal mb-2">
                    {occasion.title}
                  </h3>
                  <p className="text-sorlet-warm-gray text-sm leading-relaxed">
                    {occasion.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-sorlet-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sorlet-charcoal mb-4">
              Calidad y Elegancia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Materiales Premium",
                description:
                  "Oro, plata, perlas naturales y cristales de alta calidad",
                icon: "💎",
              },
              {
                title: "Diseños Únicos",
                description: "Piezas exclusivas y diseños personalizados",
                icon: "✨",
              },
              {
                title: "Asesoramiento",
                description: "Te ayudamos a elegir los accesorios perfectos",
                icon: "👑",
              },
              {
                title: "Garantía",
                description: "Garantía de calidad en todas nuestras piezas",
                icon: "🏆",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-sorlet-gold/20 text-center p-6 hover-lift">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-playfair text-xl font-semibold text-sorlet-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-sorlet-warm-gray leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Care Tips Section */}
      <section className="py-20 bg-sorlet-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sorlet-charcoal mb-4">
              Cuidado de tus Accesorios
            </h2>
            <p className="text-lg text-sorlet-warm-gray">
              Consejos para mantener tus accesorios siempre perfectos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Almacenamiento",
                tips: [
                  "Guarda cada pieza por separado",
                  "Usa cajas con compartimentos",
                  "Evita la humedad excesiva",
                  "Mantén alejado de la luz directa",
                ],
              },
              {
                title: "Limpieza",
                tips: [
                  "Limpia con paño suave después de usar",
                  "Usa productos específicos para cada material",
                  "Evita productos químicos agresivos",
                  "Lleva a limpiar profesionalmente si es necesario",
                ],
              },
            ].map((section, index) => (
              <Card key={index} className="bg-white border-sorlet-gold/20 p-6">
                <h3 className="font-playfair text-xl font-semibold text-sorlet-charcoal mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, tipIndex) => (
                    <li
                      key={tipIndex}
                      className="flex items-start text-sorlet-warm-gray">
                      <div className="w-2 h-2 bg-sorlet-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sorlet-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sorlet-charcoal mb-6">
            Encuentra tus accesorios perfectos
          </h2>
          <p className="text-lg text-sorlet-warm-gray mb-8 leading-relaxed">
            Visitanos y descubre nuestra colección completa de accesorios
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-sorlet-gold hover:bg-sorlet-gold-dark text-sorlet-charcoal font-semibold px-8 py-3">
              <Link to="/">Volver al Inicio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accesorios;

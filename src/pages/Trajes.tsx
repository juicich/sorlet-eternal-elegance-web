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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Trajes = () => {
  const zapatosImages = [
    "/images/Zapatos.jpg",
    "/images/Zapatos1.jpg",
    "/images/Zapatos2.jpg",
    "/images/Cintos.jpg",
    "/images/Cintos1.jpg",
  ];

  const camisasImages = [
    "/images/Camisas.jpg",
    "/images/Camisas1.jpg",
    "/images/Chalecos.jpg",
    "/images/Chalecos1.jpg",
    "/images/Corbatas.jpg",
    "/images/Corbatas1.jpg",
    "/images/Corbatas2.jpg",
    "/images/Moños.jpg",
    "/images/Moños1.jpg",
    "/images/Moños2.jpg",
  ];

  const services = [
    {
      title: "Venta de Trajes",
      description: "Trajes de alta calidad para personalizar tu estilo",
      image: "/images/Trajes.jpg",
      features: [
        "Trajes clásicos",
        "Smokings elegantes",
        "Tallas especiales",
        "Garantía de calidad",
      ],
    },
    {
      title: "Alquiler de Trajes",
      description: "La opción perfecta para eventos especiales",
      image: "/images/Traje-Alquiler.jpg",
      features: [
        "Smoking completo",
        "Ambos",
        "Accesorios incluidos",
        "Limpieza incluida",
      ],
    },
  ];

  const styles = [
    {
      name: "Smoking Clásico",
      description: "El traje perfecto para eventos formales",
      image: "/images/Smoking-Clasico.jpg",
      objectPosition: "top",
    },
    {
      name: "Traje Moderno",
      description: "Diseño contemporáneo para el hombre actual",
      image: "/images/Traje-Moderno.jpg",
      objectPosition: "top",
    },
    {
      name: "Traje Slim Fit",
      description: "Corte ajustado para un look más estilizado",
      image: "/images/Slim-Fit.jpg",
      objectPosition: "top",
    },
    {
      name: "Smoking de Gala",
      description: "Para ocasiones especiales y eventos de etiqueta",
      image: "/images/Smoking-Gala.jpg",
      objectPosition: "top",
    },
    {
      name: "Frac",
      description: "La máxima expresión de la elegancia formal",
      image: "/images/Frac.jpg",
      objectPosition: "top",
    },
    {
      name: "Jaquet",
      description: "Estilo versátil para eventos formales",
      image: "/images/jaquet.jpeg",
    },
    {
      name: "Zapatos y Cintos",
      description: "El complemento perfecto para tu atuendo",
      images: zapatosImages,
      objectPosition: "top",
    },
    {
      name: "Camisas y accesorios",
      description: "Detalles que marcan la diferencia",
      images: camisasImages,
      objectPosition: "top",
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
            backgroundImage: "url('/images/Hero-Trajes.jpg')",
          }}>
          <div className="absolute inset-0 bg-sorlet-charcoal/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 text-shadow animate-fade-in">
            Para ellos
          </h1>
          <p className="text-lg md:text-xl mb-6 text-sorlet-gold font-playfair italic animate-fade-in">
            Elegancia y distinción para tu día especial
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-sorlet-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sorlet-charcoal mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-sorlet-warm-gray max-w-3xl mx-auto">
              Ofrecemos opciones flexibles para que luzcas impecable en tu
              evento especial
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-lift bg-white border-sorlet-gold/20 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold text-sorlet-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sorlet-warm-gray mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-sorlet-warm-gray">
                        <div className="w-2 h-2 bg-sorlet-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-20 bg-sorlet-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sorlet-charcoal mb-4">
              Estilos Disponibles
            </h2>
            <p className="text-lg text-sorlet-warm-gray max-w-3xl mx-auto">
              Encuentra el estilo que mejor se adapte a tu personalidad y
              ocasión
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((style, index) => (
              <Card
                key={index}
                className="hover-lift bg-white border-sorlet-gold/20 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  {style.images ? (
                    <div className="relative aspect-[3/4] bg-white">
                      <Swiper
                        modules={[
                          SwiperNavigation,
                          Pagination,
                          Autoplay,
                          EffectFade,
                        ]}
                        effect="fade"
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
                        loop={true}
                        className="h-full">
                        {style.images.map((image, imageIndex) => (
                          <SwiperSlide
                            key={imageIndex}
                            className="flex items-center justify-center bg-white">
                            <img
                              src={image}
                              alt={`${style.name} ${imageIndex + 1}`}
                              className="w-full h-full object-cover"
                              style={{
                                objectPosition:
                                  style.objectPosition || "center",
                              }}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  ) : (
                    <img
                      src={style.image}
                      alt={style.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      style={{
                        objectPosition: style.objectPosition || "center",
                      }}
                    />
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-playfair text-lg font-semibold text-sorlet-charcoal mb-2">
                    {style.name}
                  </h3>
                  <p className="text-sorlet-warm-gray text-sm leading-relaxed">
                    {style.description}
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
              ¿Por qué elegir Sorlet?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Atención Personalizada",
                description:
                  "Asesoramiento profesional para encontrar el traje perfecto según tu estilo y ocasión",
                icon: "👔",
              },
              {
                title: "Ajustes Incluidos",
                description:
                  "Modificaciones y ajustes profesionales para un calce perfecto",
                icon: "✂️",
              },
              {
                title: "Precio y Calidad Garantizada",
                description:
                  "Trabajamos con las mejores marcas y materiales del mercado",
                icon: "⭐",
              },
              {
                title: "Accesorios Completos",
                description:
                  "Corbatas, moños, gemelos y todos los accesorios necesarios",
                icon: "🎀",
              },
              {
                title: "Experiencia de 40 Años",
                description:
                  "Décadas de experiencia garantizan el mejor resultado",
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

      {/* CTA Section */}
      <section className="py-20 bg-sorlet-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sorlet-charcoal mb-6">
            ¿Listo para lucir impecable?
          </h2>
          <p className="text-lg text-sorlet-warm-gray mb-8 leading-relaxed">
            Visitanos y proba nuestros trajes y smokings
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

export default Trajes;

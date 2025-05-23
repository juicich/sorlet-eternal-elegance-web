
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Bijouterie = () => {
  const categories = [
    {
      title: "Aretes y Pendientes",
      description: "Elegantes diseños para complementar tu look nupcial",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      items: ["Perlas clásicas", "Cristales Swarovski", "Oro y plata", "Diseños vintage"]
    },
    {
      title: "Collares y Gargantillas",
      description: "Piezas únicas que realzan tu escote y vestido",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      items: ["Perlas naturales", "Cadenas delicadas", "Colgantes especiales", "Sets coordinados"]
    },
    {
      title: "Pulseras y Brazaletes",
      description: "Accesorios delicados para tus muñecas",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
      items: ["Pulseras de perlas", "Brazaletes dorados", "Diseños minimalistas", "Piezas vintage"]
    },
    {
      title: "Tiaras y Diademas",
      description: "Corona tu día especial con elegancia real",
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=400&h=400&fit=crop",
      items: ["Tiaras de cristal", "Diademas florales", "Coronas de perlas", "Accesorios para el cabello"]
    },
    {
      title: "Anillos Especiales",
      description: "Anillos de compromiso y alianzas únicas",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      items: ["Solitarios clásicos", "Anillos de compromiso", "Alianzas matrimoniales", "Diseños personalizados"]
    },
    {
      title: "Sets Completos",
      description: "Conjuntos coordinados para un look perfecto",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
      items: ["Sets de perlas", "Coordinados dorados", "Conjuntos temáticos", "Colecciones especiales"]
    }
  ];

  const occasions = [
    {
      title: "Bodas",
      description: "Accesorios especiales para novias y invitadas",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop"
    },
    {
      title: "15 Años",
      description: "Bijouterie elegante para quinceañeras",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop"
    },
    {
      title: "Graduaciones",
      description: "Accesorios sofisticados para tu día de graduación",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop"
    },
    {
      title: "Eventos Especiales",
      description: "Para galas, premiaciones y ocasiones formales",
      image: "https://images.unsplash.com/photo-1566479179817-c0e3c16f0df3?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-sorlet-ivory">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=1920&h=600&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-sorlet-charcoal/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 text-shadow animate-fade-in">
            Bijouterie
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
              Accesorios cuidadosamente seleccionados para complementar tu look en ocasiones especiales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover-lift bg-white border-sorlet-gold/20 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
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
                      <li key={itemIndex} className="flex items-center text-sm text-sorlet-warm-gray">
                        <div className="w-1.5 h-1.5 bg-sorlet-gold rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-sorlet-gold text-sorlet-gold hover:bg-sorlet-gold hover:text-white w-full"
                  >
                    <Link to="/contacto">Ver Colección</Link>
                  </Button>
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
              Tenemos la bijouterie perfecta para cada momento especial de tu vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occasion, index) => (
              <Card key={index} className="hover-lift bg-white border-sorlet-gold/20 overflow-hidden">
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
                description: "Oro, plata, perlas naturales y cristales de alta calidad",
                icon: "💎"
              },
              {
                title: "Diseños Únicos",
                description: "Piezas exclusivas y diseños personalizados",
                icon: "✨"
              },
              {
                title: "Asesoramiento",
                description: "Te ayudamos a elegir los accesorios perfectos",
                icon: "👑"
              },
              {
                title: "Garantía",
                description: "Garantía de calidad en todas nuestras piezas",
                icon: "🏆"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-white border-sorlet-gold/20 text-center p-6 hover-lift">
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
              Cuidado de tu Bijouterie
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
                  "Mantén alejado de la luz directa"
                ]
              },
              {
                title: "Limpieza",
                tips: [
                  "Limpia con paño suave después de usar",
                  "Usa productos específicos para cada material",
                  "Evita productos químicos agresivos",
                  "Lleva a limpiar profesionalmente si es necesario"
                ]
              }
            ].map((section, index) => (
              <Card key={index} className="bg-white border-sorlet-gold/20 p-6">
                <h3 className="font-playfair text-xl font-semibold text-sorlet-charcoal mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-sorlet-warm-gray">
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
            Visita nuestro showroom y descubre nuestra colección completa de bijouterie
          </p>
          <div className="space-x-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-sorlet-gold hover:bg-sorlet-gold-dark text-sorlet-charcoal font-semibold px-8 py-3"
            >
              <Link to="/contacto">Visitar Showroom</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-sorlet-gold text-sorlet-charcoal hover:bg-sorlet-gold hover:text-white px-8 py-3"
            >
              <Link to="/">Volver al Inicio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bijouterie;

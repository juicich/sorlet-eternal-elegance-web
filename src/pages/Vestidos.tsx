
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Vestidos = () => {
  const categories = [
    {
      title: "Vestidos de Novia",
      description: "Diseños únicos para el día más importante de tu vida",
      image: "https://images.unsplash.com/photo-1594736797933-d0a9ba25a32a?w=500&h=600&fit=crop",
      features: ["Diseños exclusivos", "Tallas especiales", "Modificaciones incluidas", "Probadores privados"]
    },
    {
      title: "Vestidos de 15 Años",
      description: "Convierte tu celebración de 15 años en un cuento de hadas",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop",
      features: ["Estilo princesa", "Colores únicos", "Accesorios incluidos", "Asesoramiento personalizado"]
    },
    {
      title: "Vestidos de Fiesta",
      description: "Elegancia y sofisticación para cada ocasión especial",
      image: "https://images.unsplash.com/photo-1566479179817-c0e3c16f0df3?w=500&h=600&fit=crop",
      features: ["Eventos corporativos", "Graduaciones", "Cócteles", "Galas y premiaciones"]
    },
    {
      title: "Vestidos de Egreso",
      description: "Celebra tu graduación con el vestido perfecto",
      image: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=500&h=600&fit=crop",
      features: ["Estilos juveniles", "Colores vibrantes", "Cómodos y elegantes", "Precios especiales"]
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
            backgroundImage: "url('https://images.unsplash.com/photo-1583995479203-1748389ffe2c?w=1920&h=600&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-sorlet-charcoal/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 text-shadow animate-fade-in">
            Vestidos
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
              Cada vestido es único, diseñado para hacer de tu momento especial algo inolvidable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover-lift bg-white border-sorlet-gold/20 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <h3 className="font-playfair text-2xl font-semibold text-sorlet-charcoal mb-3">
                      {category.title}
                    </h3>
                    <p className="text-sorlet-warm-gray mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-sorlet-warm-gray">
                          <div className="w-2 h-2 bg-sorlet-gold rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      className="bg-sorlet-gold hover:bg-sorlet-gold-dark text-sorlet-charcoal font-semibold w-full"
                    >
                      <Link to="/contacto">Solicitar Cita</Link>
                    </Button>
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
                description: "Conversamos sobre tus gustos, evento y presupuesto"
              },
              {
                step: "2",
                title: "Selección",
                description: "Te mostramos opciones personalizadas según tus preferencias"
              },
              {
                step: "3",
                title: "Pruebas",
                description: "Realizamos las pruebas necesarias y ajustes perfectos"
              },
              {
                step: "4",
                title: "Entrega",
                description: "Recibes tu vestido perfecto para tu día especial"
              }
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
            ¿Lista para encontrar tu vestido perfecto?
          </h2>
          <p className="text-lg text-sorlet-warm-gray mb-8 leading-relaxed">
            Agenda una cita personalizada y déjanos ayudarte a encontrar el vestido de tus sueños
          </p>
          <div className="space-x-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-sorlet-gold hover:bg-sorlet-gold-dark text-sorlet-charcoal font-semibold px-8 py-3"
            >
              <Link to="/contacto">Agendar Cita</Link>
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

export default Vestidos;

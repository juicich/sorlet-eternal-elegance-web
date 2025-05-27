import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Vestidos de Novia, 15 Años y Fiestas",
      description:
        "Colección exclusiva de vestidos de novia, 15 años y fiestas con diseños únicos y elegantes",
      image: "/images/Hero-Vestidos.jpg",
      link: "/vestidos",
    },
    {
      title: "Trajes de Novio",
      description:
        "Smokings, trajes clásicos y ambos para que el novio luzca impecable",
      image: "/images/Hero-Trajes.jpg",
      link: "/trajes",
    },
    {
      title: "Accesorios",
      description: "Complementos exclusivos para complementar tu look especial",
      image: "/images/Bijou1.jpg",
      link: "/bijouterie",
    },
  ];

  return (
    <div className="min-h-screen bg-sorlet-ivory">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Hero-Index.jpg')",
          }}>
          <div className="absolute inset-0 bg-sorlet-charcoal/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-shadow animate-fade-in">
            Sorlet
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sorlet-gold font-playfair italic animate-fade-in">
            "El recuerdo de un día para toda la vida"
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Más de 40 años de experiencia creando momentos inolvidables con la
            mayor variedad de prendas elegantes para ese dia tan especial y con
            todos los accesorios que lo acompañan
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-sorlet-gold hover:bg-sorlet-gold-dark text-sorlet-charcoal font-semibold px-8 py-3">
              <Link to="/vestidos">Ver Colecciones</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-sorlet-gold hover:bg-sorlet-gold-dark text-sorlet-charcoal font-semibold px-8 py-3">
              <Link to="/contacto">Contactanos</Link>
            </Button>
          </div>
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
              Especializados en crear momentos únicos e inolvidables para tus
              eventos más importantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-sorlet-charcoal/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-sorlet-charcoal mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sorlet-warm-gray mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-sorlet-gold text-sorlet-gold hover:bg-sorlet-gold hover:text-white w-full">
                    <Link to={service.link}>Ver Más</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-sorlet-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-sorlet-charcoal">
                Más de 40 años de experiencia
              </h2>
              <p className="text-lg text-sorlet-warm-gray leading-relaxed">
                Desde 1983, Sorlet se ha consolidado como referente en el
                mercado nupcial y de eventos especiales. Nuestra experiencia y
                dedicación nos han permitido ser testigos y protagonistas de
                miles de momentos únicos.
              </p>
              <p className="text-lg text-sorlet-warm-gray leading-relaxed">
                Ofrecemos una atención personalizada y profesional, garantizando
                que cada cliente encuentre exactamente lo que busca para su día
                especial.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-sorlet-gold mb-2">
                    40+
                  </div>
                  <div className="text-sorlet-warm-gray">
                    Años de experiencia
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-sorlet-gold mb-2">
                    5000+
                  </div>
                  <div className="text-sorlet-warm-gray">
                    Clientes satisfechos
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Atelier.jpg"
                alt="Atelier Sorlet"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-sorlet-gold p-6 rounded-lg shadow-xl">
                <p className="font-playfair text-white font-semibold text-lg">
                  Calidad y elegancia en cada detalle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

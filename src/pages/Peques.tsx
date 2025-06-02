import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Peques = () => {
  const categories = [
    {
      title: "Trajes de Comunión",
      description:
        "Elegantes trajes para el día especial de la Primera Comunión",
      images: [
        { src: "/images/Comunion.jpg", alt: "Traje de Comunión" },
        { src: "/images/Peque1.jpg", alt: "Traje de Comunión Clásico" },
      ],
    },
    {
      title: "Trajes de Bautismo",
      description: "Hermosos conjuntos para celebrar el bautismo",
      images: [
        { src: "/images/Bautismo1.jpg", alt: "Traje de Bautismo" },
        { src: "/images/Bautismo2.jpg", alt: "Conjunto de Bautismo" },
      ],
    },
    {
      title: "Trajes para Eventos",
      description: "Trajes y conjuntos elegantes para ocasiones especiales",
      images: [
        { src: "/images/Peque4.jpg", alt: "Traje para Eventos" },
        { src: "/images/Peque2.jpg", alt: "Traje para Eventos Especiales" },
        { src: "/images/Peque3.jpg", alt: "Traje para Eventos Formales" },
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Hero-Peques.jpg')",
          }}>
          <div className="absolute inset-0 bg-sorlet-charcoal/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Trajes para Peques
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Elegancia y estilo para los momentos más especiales de los más
            pequeños
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-sorlet-ivory">
        <div className="container mx-auto px-4">
          {categories.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h2 className="font-playfair text-3xl font-bold text-sorlet-charcoal mb-6">
                {category.title}
              </h2>
              <p className="text-lg text-sorlet-warm-gray mb-8">
                {category.description}
              </p>
              <div
                className={`grid gap-8 ${
                  category.images.length === 2
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center lg:px-32"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}>
                {category.images.map((image, imgIndex) => (
                  <Card
                    key={imgIndex}
                    className="overflow-hidden hover:shadow-lg transition-shadow w-full">
                    <CardContent className="p-0">
                      <div className="relative aspect-[3/4]">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="container mx-auto px-4 mt-16">
          <div className="bg-sorlet-cream rounded-lg p-8 text-center">
            <h3 className="font-playfair text-2xl font-bold text-sorlet-charcoal mb-4">
              ¿Necesitas ayuda para elegir?
            </h3>
            <p className="text-lg text-sorlet-warm-gray mb-6">
              Nuestro equipo está disponible para asesorarte y encontrar el
              traje perfecto para esa ocasión especial
            </p>
            <a
              href="/contacto"
              className="inline-block bg-sorlet-gold hover:bg-sorlet-gold-dark text-white font-semibold px-8 py-3 rounded-md transition-colors">
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Peques;

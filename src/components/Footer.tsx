
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sorlet-charcoal text-sorlet-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-sorlet-gold">
              Sorlet
            </h3>
            <p className="text-sorlet-ivory/80 leading-relaxed">
              Más de 40 años especializados en vestidos de novia, trajes de novio, 
              vestidos de 15 años, vestidos de fiesta y bijouterie para bodas y eventos.
            </p>
            <p className="text-sorlet-gold font-playfair italic">
              "El recuerdo de un día para toda la vida"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-sorlet-gold">
              Nuestros Servicios
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/vestidos" 
                  className="text-sorlet-ivory/80 hover:text-sorlet-gold transition-colors duration-200"
                >
                  Vestidos de Novia
                </Link>
              </li>
              <li>
                <Link 
                  to="/trajes" 
                  className="text-sorlet-ivory/80 hover:text-sorlet-gold transition-colors duration-200"
                >
                  Trajes de Novio
                </Link>
              </li>
              <li>
                <Link 
                  to="/vestidos" 
                  className="text-sorlet-ivory/80 hover:text-sorlet-gold transition-colors duration-200"
                >
                  Vestidos de 15 Años
                </Link>
              </li>
              <li>
                <Link 
                  to="/vestidos" 
                  className="text-sorlet-ivory/80 hover:text-sorlet-gold transition-colors duration-200"
                >
                  Vestidos de Fiesta
                </Link>
              </li>
              <li>
                <Link 
                  to="/bijouterie" 
                  className="text-sorlet-ivory/80 hover:text-sorlet-gold transition-colors duration-200"
                >
                  Bijouterie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-sorlet-gold">
              Contacto
            </h4>
            <div className="space-y-3 text-sorlet-ivory/80">
              <div>
                <p className="font-medium">Dirección:</p>
                <p>Av. Corrientes 1234, CABA</p>
                <p>Buenos Aires, Argentina</p>
              </div>
              <div>
                <p className="font-medium">Teléfono:</p>
                <p>+54 11 4567-8900</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p>info@sorlet.com.ar</p>
              </div>
              <div>
                <p className="font-medium">Horarios:</p>
                <p>Lun a Sáb: 10:00 - 19:00</p>
                <p>Dom: 14:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-sorlet-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sorlet-ivory/60 text-sm">
              © 2024 Sorlet. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/contacto" 
                className="text-sorlet-ivory/60 hover:text-sorlet-gold text-sm transition-colors duration-200"
              >
                Términos y Condiciones
              </Link>
              <Link 
                to="/contacto" 
                className="text-sorlet-ivory/60 hover:text-sorlet-gold text-sm transition-colors duration-200"
              >
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

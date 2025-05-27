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
              Más de 40 años especializados en vestidos de novia, trajes de
              novio, vestidos de 15 años, vestidos de fiesta y accesorios para
              bodas y eventos.
            </p>
            <p className="text-sorlet-gold font-playfair italic mb-4">
              "El recuerdo de un día para toda la vida"
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Sorlet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sorlet-ivory/80 hover:text-sorlet-gold transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/sorletnovias"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sorlet-ivory/80 hover:text-sorlet-gold transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
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
                  className="text-sorlet-ivory/80 hover:text-sorlet-gold transition-colors duration-200">
                  Vestidos de Novia
                </Link>
              </li>
              <li>
                <Link
                  to="/trajes"
                  className="text-sorlet-ivory/80 hover:text-sorlet-gold transition-colors duration-200">
                  Trajes de Novio
                </Link>
              </li>
              <li>
                <Link
                  to="/vestidos"
                  className="text-sorlet-ivory/80 hover:text-sorlet-gold transition-colors duration-200">
                  Vestidos de 15 Años
                </Link>
              </li>
              <li>
                <Link
                  to="/vestidos"
                  className="text-sorlet-ivory/80 hover:text-sorlet-gold transition-colors duration-200">
                  Vestidos de Fiesta
                </Link>
              </li>
              <li>
                <Link
                  to="/bijouterie"
                  className="text-sorlet-ivory/80 hover:text-sorlet-gold transition-colors duration-200">
                  Accesorios
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
                <p>Salta 170</p>
                <p>Neuquen, Neuquen</p>
              </div>
              <div>
                <p className="font-medium">Teléfono:</p>
                <p>+54 299 447-2358</p>
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
                className="text-sorlet-ivory/60 hover:text-sorlet-gold text-sm transition-colors duration-200">
                Términos y Condiciones
              </Link>
              <Link
                to="/contacto"
                className="text-sorlet-ivory/60 hover:text-sorlet-gold text-sm transition-colors duration-200">
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

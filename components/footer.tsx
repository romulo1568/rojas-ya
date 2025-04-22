import Link from "next/link";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Rojas Ya</h3>
            <p className="text-gray-400">
              Tu minimarket de confianza con los mejores productos y precios
              para toda la familia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/RojasMasNasca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#d31a2c] transition-colors"
              >
                <SiFacebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/rojasmassnazca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#d31a2c] transition-colors"
              >
                <SiInstagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#d31a2c] transition-colors"
              >
                <SiX size={20} />
                <span className="sr-only">X</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Abarrotes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bebidas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Limpieza
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Productos Frescos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Av. Los Maestros, San Carlos, Nasca</p>
              <p>+51 974 607 772</p>
              <p>rojasya.central@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Rojas Ya. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

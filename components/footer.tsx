import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Concretos y Asfaltos Cerro Blanco</h3>
            <p className="text-gray-400">
              Soluciones integrales en materiales de construcción para proyectos de infraestructura y edificación.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-400 hover:text-[#e8b643] transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#areas"
                  className="text-gray-400 hover:text-[#e8b643] transition-colors"
                >
                  Áreas de Negocio
                </Link>
              </li>
              <li>
                <Link
                  href="#proyectos"
                  className="text-gray-400 hover:text-[#e8b643] transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-[#e8b643] transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Calle Los Heraldos s/n distrito de Vista Alegre</p>
              <p>+51 968 886 615</p>
              <p>ventas@concretoscerroblanco.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Concretos y Asfaltos Cerro Blanco. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

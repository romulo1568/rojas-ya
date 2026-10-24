"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Definir tipos para productos de concreto
type ConcreteType = "convencional" | "estructural" | "autocompactante" | "especial";

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const categories = [
    { id: "convencional" as ConcreteType, name: "Concreto Convencional" },
    { id: "estructural" as ConcreteType, name: "Concreto Estructural" },
    { id: "autocompactante" as ConcreteType, name: "Autocompactante" },
    { id: "especial" as ConcreteType, name: "Especiales" },
  ];

  const concreteProducts: Record<
    ConcreteType,
    { name: string; description: string; uses: string[] }[]
  > = {
    convencional: [
      {
        name: "Concreto Convencional f'c 150 kg/cm²",
        description: "Para estructuras ligeras, pavimentos y obras civiles generales.",
        uses: ["Zapatas simples", "Pavimentos de bajo tráfico", "Muros de contención"]
      },
      {
        name: "Concreto Convencional f'c 200 kg/cm²",
        description: "Ideal para viviendas, edificios pequeños y obras residenciales.",
        uses: ["Viviendas de 1-3 pisos", "Cimentaciones medianas", "Muros estructurales"]
      },
      {
        name: "Concreto Convencional f'c 250 kg/cm²",
        description: "Para estructuras medianas y obras comerciales.",
        uses: ["Edificios de 4-6 pisos", "Muros de carga", "Entrepisos"]
      },
    ],
    estructural: [
      {
        name: "Concreto Estructural f'c 300 kg/cm²",
        description: "Para edificios de mediana altura y puentes pequeños.",
        uses: ["Edificios de 7-10 pisos", "Puentes pequeños", "Torres"]
      },
      {
        name: "Concreto Estructural f'c 350 kg/cm²",
        description: "Estructuras de alta resistencia y carga pesada.",
        uses: ["Edificios de gran altura", "Puentes de mediana envergadura", "Cimentaciones profundas"]
      },
      {
        name: "Concreto Estructural f'c 400 kg/cm²",
        description: "Proyectos de infraestructura y edificios de alta gama.",
        uses: ["Torres de gran altura", "Puentes grandes", "Instalaciones industriales"]
      },
    ],
    autocompactante: [
      {
        name: "Concreto Autocompactante (SCC)",
        description: "Fluye por gravedad, llena encofrados sin vibración.",
        uses: ["Elementos con refuerzo denso", "Encofrados complejos", "Pisos industrializados"]
      },
      {
        name: "SCC de Alta Resistencia",
        description: "Autocompactante con f'c hasta 500 kg/cm².",
        uses: ["Columnas de alta resistencia", "Muros estructurales delgados", "Elementos prefabricados"]
      },
    ],
    especial: [
      {
        name: "Concreto Impermeable",
        description: "Resistente a la penetración de agua.",
        uses: ["Tanques de agua", "Piscinas", "Sótanos y muros de contención"]
      },
      {
        name: "Concreto Fibra de Acero",
        description: "Aumenta la resistencia a la tracción y la tenacidad.",
        uses: ["Pavimentos industriales", "Losas de concreto", "Pistas de aeropuertos"]
      },
      {
        name: "Concreto Ligero",
        description: "Bajo peso para reducir carga estructural.",
        uses: ["Entrepisos", "Muros divisorios", "Elementos prefabricados"]
      },
    ],
  };

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 dark:text-white"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            Tipos de <span className="text-[#e8b643]">Concreto</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-[#e8b643] mx-auto mb-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Amplia variedad de concretos premezclados para todo tipo de proyectos de construcción.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Tabs defaultValue="convencional" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 dark:bg-gray-700">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-[#e8b643] data-[state=active]:text-gray-900"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(concreteProducts).map(
              ([categoryId, productsList]) => (
                <TabsContent key={categoryId} value={categoryId}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productsList.map((product, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300"
                      >
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {product.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                            Aplicaciones:
                          </h4>
                          <ul className="space-y-1">
                            {product.uses.map((use, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#e8b643]"></span>
                                {use}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              )
            )}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

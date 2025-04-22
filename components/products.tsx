"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

// Definir un tipo para las categorías de productos
type ProductCategory = "abarrotes" | "bebidas" | "limpieza" | "lacteos";

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Modificar la definición de categories para usar el tipo
  const categories = [
    { id: "abarrotes" as ProductCategory, name: "Abarrotes" },
    { id: "bebidas" as ProductCategory, name: "Bebidas" },
    { id: "limpieza" as ProductCategory, name: "Limpieza" },
    { id: "lacteos" as ProductCategory, name: "Lácteos y Quesos" },
  ];

  // Modificar la definición de products para usar el tipo
  const products: Record<
    ProductCategory,
    { name: string; price: string; image: string }[]
  > = {
    abarrotes: [
      {
        name: "Rompe Olla - 1Kg",
        price: "S/ 5.89",
        image: "/images/abarrotes1.png",
      },
      {
        name: "La Patrona - 750ml",
        price: "S/ 9.49",
        image: "/images/abarrotes2.webp",
      },
      {
        name: "Don Maximo Tallarines - 500gr",
        price: "S/ 3.19",
        image: "/images/abarrotes3.png",
      },
      {
        name: "La Nasqueña - Filete Caballa",
        price: "S/ 6.79",
        image: "/images/abarrotes4.png",
      },
    ],
    bebidas: [
      {
        name: "Awita - 20L",
        price: "S/ 10.49",
        image: "/images/bebidas1.png",
      },
      {
        name: "Pepsi - 2L",
        price: "S/ 5.89",
        image: "/images/bebidas2.png",
      },
      {
        name: "Kiwifresh - 500ml",
        price: "S/ 1.19",
        image: "/images/bebidas3.png",
      },
      {
        name: "Pilsen - 600ml",
        price: "S/ 6.49",
        image: "/images/bebidas4.png",
      },
    ],
    limpieza: [
      {
        name: "Paracas Premium - 4und",
        price: "S/ 7.89",
        image: "/images/limpieza1.png",
      },
      {
        name: "Dkasa Lavanda - 4Lt",
        price: "S/ 12.89",
        image: "/images/limpieza2.png",
      },
      {
        name: "Jabón Antibacterial - Leche",
        price: "S/ 1.49",
        image: "/images/limpieza3.png",
      },
      {
        name: "Marsella - 2Kg",
        price: "S/ 12.89",
        image: "/images/limpieza4.png",
      },
    ],
    lacteos: [
      {
        name: "Leche Gloria - 390gr",
        price: "S/ 2.49",
        image: "/images/lacteos1.webp",
      },
      {
        name: "Danlac Maracumango - 900g",
        price: "S/ 11.49",
        image: "/images/lacteos2.png",
      },
      {
        name: "Manty - 300g",
        price: "S/ 5.59",
        image: "/images/lacteos3.png",
      },
      {
        name: "Mozarella Bonlé - 250gr",
        price: "S/ 12.49",
        image: "/images/lacteos4.png",
      },
    ],
  };

  // Modificar la definición de productImages para usar el tipo
  const productImages: Record<ProductCategory, string[]> = {
    abarrotes: [
      "/images/abarrotes1.png",
      "/images/abarrotes2.webp",
      "/images/abarrotes3.png",
      "/images/abarrotes4.png",
    ],
    bebidas: [
      "/images/bebidas1.png",
      "/images/bebidas2.png",
      "/images/bebidas3.png",
      "/images/bebidas4.png",
    ],
    limpieza: [
      "/images/limpieza1.png",
      "/images/limpieza2.png",
      "/images/limpieza3.png",
      "/images/limpieza4.png",
    ],
    lacteos: [
      "/images/lacteos1.webp",
      "/images/lacteos2.png",
      "/images/lacteos3.png",
      "/images/lacteos4.png",
    ],
  };

  return (
    <section id="products" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            Nuestros <span className="text-[#d31a2c]">Productos</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-[#d31a2c] mx-auto mb-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ofrecemos una amplia variedad de productos de calidad para
            satisfacer todas tus necesidades diarias.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Tabs defaultValue="abarrotes" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-[#d31a2c] data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(products).map(
              ([categoryId, categoryProducts], categoryIndex) => (
                <TabsContent key={categoryId} value={categoryId}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryProducts.map((product, index) => (
                      <Card
                        key={index}
                        className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white cursor-pointer"
                      >
                        <div className="aspect-square relative w-full h-64">
                          <Image
                            src={
                              productImages[categoryId as ProductCategory][
                                index
                              ] || "/placeholder.svg"
                            }
                            alt={product.name}
                            layout="fill" // Asegura que la imagen se ajuste al contenedor
                            className="object-contain" // Mantiene la imagen dentro del contenedor sin recortarla
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-lg mb-1">
                            {product.name}
                          </h3>
                          <p className="text-[#d31a2c] font-bold mb-3">
                            {product.price}
                          </p>
                          <Button className="w-full bg-[#d31a2c] hover:bg-[#b01522]">
                            Ver Detalles
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              )
            )}
          </Tabs>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button className="bg-[#d31a2c] hover:bg-[#b01522] text-white px-8 py-6 text-lg">
            Ver Todos los Productos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

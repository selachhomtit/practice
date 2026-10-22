"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product, products } from "@/lib/product";

export default function Home() {
  const [selected, setSelected] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setSelected([...selected, product]);
  };

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-8 p-6">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={addProduct} />
        ))}
      </section>

      <section className="flex flex-wrap gap-4">
        {selected.map((product, index) => (
          <div
            key={index}
            className="w-52 rounded-2xl border border-gray-200 bg-white p-3"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-32 w-full rounded-xl object-cover"
            />
            <h3 className="mt-2 font-bold">{product.name}</h3>
            <p className="text-pink-600">
              $ {product.price}{" "}
              <span className="text-sm text-gray-500 line-through">
                $ {product.oldPrice}
              </span>
            </p>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

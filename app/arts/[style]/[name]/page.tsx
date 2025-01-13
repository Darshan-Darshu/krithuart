import Product from "@/components/Product";
import { db } from "@/lib/db";
import React from "react";

async function ProductsPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  if (!name) return;
  const products = await db.product.findMany({
    where: {
      collection: name,
    },
  });

  return (
    <div className="lg:max-w-[60vw] mx-auto px-3 lg:px-0  mt-4">
      <h1 className="text-3xl lg:text-4xl text-[#787676] ">Products</h1>
      <span className="text-sm ml-1 text-gray-700">Searched: {name}</span>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6">
        {products.map(({ image, title, price, id }) => (
          <Product key={id} image={image} title={title} price={price} id={id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;

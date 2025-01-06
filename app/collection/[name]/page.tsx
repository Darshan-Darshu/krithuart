import Product from "@/components/Product";
import { db } from "@/lib/db";
import React from "react";

async function ProductsPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  console.log(name);
  if (!name) return;
  const products = await db.product.findMany({
    where: {
      collection: name,
    },
  });

  return (
    <div className="lg:max-w-[60vw] mx-auto grid grid-cols-2 md:grid-cols-3 px-3 lg:px-0 lg:grid-cols-4 gap-2 mt-4">
      {products.map(({ image, title, price, id }) => (
        <Product key={id} image={image} title={title} price={price} />
      ))}
    </div>
  );
}

export default ProductsPage;

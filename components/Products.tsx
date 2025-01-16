import { getProducts } from "@/utils/productUtils";
import React from "react";
import Product from "./Product";

async function Products() {
  const products = await getProducts();

  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:mt-6 mt-0 px-3 lg:px-0">
      {products.map(({ image, title, price, id }) => (
        <Product
          key={id}
          image={image[0]}
          title={title}
          price={price}
          id={id}
        />
      ))}
    </div>
  );
}

export default Products;

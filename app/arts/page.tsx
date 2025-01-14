import Product from "@/components/Product";
import StyleArt from "@/components/StyleArt";
import { db } from "@/lib/db";

async function page() {
  const products = await db.product.findMany();
  return (
    <div className="lg:max-w-[60vw] mx-auto">
      <StyleArt />
      <h1 className="text-3xl lg:text-4xl text-[#787676] pt-2 px-3 lg:px-0 lg:pt-0">
        All Products
      </h1>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:mt-6 mt-0 px-3 lg:px-0">
        {products.map(({ image, title, price, id }) => (
          <Product key={id} image={image} title={title} price={price} id={id} />
        ))}
      </div>
    </div>
  );
}

export default page;

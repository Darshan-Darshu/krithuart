import { Merriweather, Nunito } from "next/font/google";
import { Button } from "./ui/button";
import Product from "./Product";
import { getProducts } from "@/utils/productUtils";
import Link from "next/link";

const playfair = Merriweather({
  weight: "400",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: "500",
  subsets: ["latin"],
});

async function HomeProducts() {
  const products = await getProducts();
  return (
    <div
      className={`lg:max-w-[60vw] mx-auto pt-4 md:pt-12 pb-4 px-3 lg:px-0 ${playfair.className}`}
    >
      <h1 className="text-3xl lg:text-4xl text-[#787676] ">
        Products that distinguish your home.
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 mt-4">
        {products.map(
          ({ image, title, price, id }, i) =>
            i < 4 && (
              <Product
                key={id}
                image={image[0]}
                title={title}
                price={price}
                id={id}
              />
            )
        )}
      </div>
      <div className="flex items-center justify-center mt-4">
        <Link
          href="/arts"
          className="bg-[#787676] text-white py-4 md:py-6 px-6 md:px-8 rounded-[4px] drop-shadow-md shadow-2xl"
        >
          View all
        </Link>
      </div>
    </div>
  );
}

export default HomeProducts;

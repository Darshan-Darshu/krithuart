import Products from "@/components/Products";
import StyleArt from "@/components/StyleArt";
import { Suspense } from "react";

async function page() {
  return (
    <div className="lg:max-w-[60vw] mx-auto">
      <Suspense fallback={<p>Styleing Loading</p>}>
        <StyleArt />
      </Suspense>
      <h1 className="text-3xl lg:text-4xl text-[#787676] pt-2 px-3 lg:px-0 lg:pt-0">
        All Products
      </h1>
      <Suspense fallback={<p>Products Loading</p>}>
        <Products />
      </Suspense>
    </div>
  );
}

export default page;

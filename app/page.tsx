import Banner from "@/components/Banner";
import HomeProducts from "@/components/HomeProducts";
import StyleArt from "@/components/StyleArt";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="">
      <Banner />
      <div className="lg:max-w-[60vw] mx-auto lg:pt-12 lg:pb-4 pt-2 ">
        <h1 className="text-3xl lg:text-4xl text-[#787676] ml-3 lg:ml-0 mb-2 lg:mb-0">
          Style
        </h1>
        <Suspense fallback={<p>Styleing Loading</p>}>
          <StyleArt />
        </Suspense>
      </div>
      <Suspense fallback={<p>Home Products Loading</p>}>
        <HomeProducts />
      </Suspense>
    </div>
  );
}

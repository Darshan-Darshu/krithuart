import Banner from "@/components/Banner";
import HomeProducts from "@/components/HomeProducts";
import StyleArt from "@/components/StyleArt";

export default async function Home() {
  return (
    <div className="">
      <Banner />
      <div className="lg:max-w-[60vw] mx-auto pt-12 pb-4">
        <h1 className="text-3xl lg:text-4xl text-[#787676] ml-3 lg:ml-0 mb-2 lg:mb-0">
          Style
        </h1>
        <StyleArt />
      </div>
      <HomeProducts />
    </div>
  );
}

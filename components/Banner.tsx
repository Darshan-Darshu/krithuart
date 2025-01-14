import { Playfair_Display, Nunito } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: "500",
  subsets: ["latin"],
});

function Banner() {
  return (
    <div className="lg:h-[calc(100vh-120px)] w-screen relative overflow-hidden">
      <img
        src="https://www.novomagic.com/cdn/shop/products/TC_06518-Edit.jpg?v=1647951574&width=2000"
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-[140px] flex flex-col w-screen items-center justify-center">
        <h1
          className={`text-4xl lg:text-6xl text-white ${playfair.className} uppercase`}
        >
          Web App Name
        </h1>
        <p className="mt-2 mb-4 text-[11px] uppercase text-[#eaeaea]">
          subtitle
        </p>
        <Link
          href="/arts"
          className={`bg-white text-black py-3 px-6 rounded-[4px] shadow-md ${nunito.className}`}
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Banner;

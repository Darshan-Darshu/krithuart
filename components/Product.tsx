import { Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const nunito = Nunito({
  weight: "500",
  subsets: ["latin"],
});

function Product({
  image,
  title,
  price,
  id,
}: {
  image: string;
  title: string;
  price: string;
  id: string;
}) {
  return (
    <Link href={`/product/${id}`} className="mt-4 lg:mt-0">
      <Image
        src={`https://drive.google.com/thumbnail?id=${image}`}
        alt={title}
        width={800}
        height={800}
        className="w-full h-[220px] md:h-[250px] lg:h-[300px] object-cover"
      />
      <h1
        className={`text-gray-500 text-sm mt-2 mb-3 capitalize ${nunito.className}`}
      >
        {title}
      </h1>
      <p className="text-gray-400">INR {price}.00</p>
    </Link>
  );
}

export default Product;

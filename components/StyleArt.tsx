import { getStyles } from "@/utils/productUtils";
import { Merriweather } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const playfair = Merriweather({
  weight: "400",
  subsets: ["latin"],
});

async function StyleArt() {
  const styles = await getStyles();
  return (
    <div
      className={`lg:max-w-[60vw] mx-auto lg:pt-6 lg:pb-4 lg:px-0 ${playfair.className}`}
    >
      <div className="grid grid-cols-5">
        {styles.map((style) => (
          <Link href={`/arts/${style.name}`} key={style.id} className="group">
            <div className="xl:w-40 xl:h-40 lg:w-28 lg:h-28 md:w-28 md:h-28 w-[56px] h-[56px] rounded-full border flex items-center justify-center transition-all duration-200 ease-in-out border-gray-300 p-1 mt-2 ml-4 group-hover:scale-105">
              <Image
                src={`https://drive.google.com/thumbnail?id=${style.image}`}
                alt={style.name}
                width={800}
                height={800}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="xl:w-48 lg:w-36 md:w-36 w-[90px] text-center pt-2 md:text-sm text-[7px] text-gray-500 capitalize group-hover:text-gray-800 transition-all duration-200 ease-in-out">
              {style.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default StyleArt;

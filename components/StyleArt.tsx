import { db } from "@/lib/db";
import { Merriweather } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const playfair = Merriweather({
  weight: "400",
  subsets: ["latin"],
});

async function StyleArt() {
  const styles = await db.style.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  return (
    <div
      className={`lg:max-w-[60vw] mx-auto pt-6 pb-4 px-3 lg:px-0 ${playfair.className}`}
    >
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 grid-cols-2">
        {styles.map((style) => (
          <Link href={`/arts/${style.name}`} key={style.id} className="group">
            <div className="lg:w-44 lg:h-44 md:w-32 md:h-32 w-32 h-32 rounded-full border flex items-center justify-center transition-all duration-200 ease-in-out border-gray-300 p-1 mt-2 ml-4 group-hover:scale-105">
              <Image
                src={`https://drive.google.com/thumbnail?id=${style.image}`}
                alt={style.name}
                width={800}
                height={800}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="lg:w-52 md:w-40 w-40 text-center pt-2 text-sm text-gray-500 capitalize group-hover:text-gray-800 transition-all duration-200 ease-in-out">
              {style.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default StyleArt;

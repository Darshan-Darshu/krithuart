import Collections from "@/components/Collections";
import { Playfair_Display, Nunito } from "next/font/google";

const playfair = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: "600",
  subsets: ["latin"],
});

function CollectionPage() {
  return (
    <div className="lg:max-w-[60vw] mx-auto mt-4 px-4 lg:px-0">
      <h1 className={`${nunito.className} text-gray-600 text-4xl`}>
        Collections
      </h1>
      <Collections />
    </div>
  );
}

export default CollectionPage;

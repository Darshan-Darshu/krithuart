import Collections from "@/components/Collections";
import StyleArt from "@/components/StyleArt";
import { db } from "@/lib/db";

async function ArtPage({
  params,
  searchParams,
}: {
  params: Promise<{ style: string }>;
  searchParams: Promise<{}>;
}) {
  const { style } = await params;
  if (!style) return;
  const collections = await db.collection.findMany({
    where: {
      style,
    },
  });
  return (
    <div className="lg:max-w-[60vw] mx-auto mt-4 px-4 lg:px-0">
      <StyleArt />
      <div>
        <h1 className="text-3xl lg:text-4xl text-[#787676] ">Collection</h1>
        <span className="text-sm ml-1 text-gray-700">Searched: {style}</span>
        <Collections collections={collections} />
      </div>
    </div>
  );
}

export default ArtPage;

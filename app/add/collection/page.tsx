import AddCollection from "@/components/AddCollection";
import { db } from "@/lib/db";

function CollectionPage() {
  const stylePromise = db.style.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return <AddCollection stylePromise={stylePromise} />;
}

export default CollectionPage;

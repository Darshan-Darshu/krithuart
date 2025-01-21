import AddCollection from "@/components/AddCollection";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

async function CollectionPage() {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;

  const admin = process.env.ADMIN;
  if (email !== admin) return notFound();
  const stylePromise = db.style.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return <AddCollection stylePromise={stylePromise} />;
}

export default CollectionPage;

import { db } from "@/lib/db";
import { unstable_cache } from "next/cache";

export const getStyles = unstable_cache(
  async () =>
    await db.style.findMany({
      orderBy: {
        createdAt: "asc",
      },
    }),

  ["stle"],
  { revalidate: 60 * 60 * 24 }
);

export const getProducts = unstable_cache(
  async () =>
    await db.product.findMany({
      orderBy: {
        createdAt: "asc",
      },
    }),
  ["product"],
  { revalidate: 60 * 60 * 24 }
);

export const getCollections = unstable_cache(
  async (style: string) =>
    await db.collection.findMany({
      where: {
        style,
      },
    }),

  ["collection"],
  { revalidate: 60 * 60 * 24 }
);
export const getProductById = unstable_cache(
  async (id: string) =>
    await db.product.findUnique({
      where: {
        id,
      },
    }),
  ["productId"],
  { revalidate: 60 * 60 * 24 }
);

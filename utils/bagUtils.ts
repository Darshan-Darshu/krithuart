import { db } from "@/lib/db";
import { unstable_cache } from "next/cache";

export const getBagByEmail = unstable_cache(
  async (email: string) =>
    await db.bag.findMany({
      where: {
        email,
      },
    }),
  ["bagid"],
  { tags: ["bag"], revalidate: 3600 }
);

export const getProductById = unstable_cache(
  async (id: string) =>
    await db.product.findUnique({
      where: {
        id,
      },
    }),
  ["productid"],
  { revalidate: 3600 }
);

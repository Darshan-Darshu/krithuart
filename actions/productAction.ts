"use server";

import { db } from "@/lib/db";

export const addProduct = async (data: {
  title: string;
  price: string;
  description: string;
  image: string;
  collection: string;
}) => {
  const res = await db.product.create({
    data,
  });

  console.log(res);
};

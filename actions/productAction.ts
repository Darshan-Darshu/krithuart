"use server";

import { db } from "@/lib/db";

export const addProduct = async (data: {
  title: string;
  price: string;
  description: string;
  image: string[];
  collection: string;
  feature: string[];
  specs: {};
  availability: string;
}) => {
  console.log(data);
  const res = await db.product.create({
    data,
  });

  console.log(res);
};

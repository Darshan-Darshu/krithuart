"use server";

import { db } from "@/lib/db";

export const addCollection = async (
  name: string,
  image: string,
  style: string
) => {
  const data = {
    name,
    image,
    style,
  };
  const res = await db.collection.create({
    data,
  });

  return res;
};

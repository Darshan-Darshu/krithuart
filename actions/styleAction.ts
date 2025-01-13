"use server";

import { db } from "@/lib/db";

export const addStyle = async (name: string, image: string) => {
  const data = {
    name,
    image,
  };
  const res = await db.style.create({
    data,
  });

  return res;
};

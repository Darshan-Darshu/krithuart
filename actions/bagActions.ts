"use server";

import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { JsonValue } from "@prisma/client/runtime/library";
import { revalidateTag } from "next/cache";

export const addToBag = async (
  productId: string,
  price: string,
  add: boolean
) => {
  const bagId = Math.random().toString();
  const priceInt = Number(price);
  const { userId } = await auth();
  if (!productId) return;

  if (!userId) return;

  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;
  if (!email) return;

  const bags = await db.bag.findMany({
    where: {
      email,
    },
  });

  if (!bags.length) {
    const products = { productId, qty: 1, createdAt: new Date() };
    const totalPrice = priceInt * 1;
    const data = {
      bagId,
      products: [products],
      email,
      totalPrice,
    };
    const res = await db.bag.create({
      data,
    });

    revalidateTag("bag");
    return res;
  }

  let isProduct: any;

  if (bags.length) {
    isProduct = bags[0]?.products?.find(
      (product: any) => product?.productId === productId
    );
  }

  if (!isProduct) {
    const products = { productId, qty: 1, createdAt: new Date() };

    const updateProduct: any = [...bags[0].products, products];

    const res = await db.bag.update({
      where: { id: bags[0].id },
      data: {
        products: updateProduct,
        totalPrice: priceInt + bags[0].totalPrice,
      },
    });
    revalidateTag("bag");

    return res;
  }

  // const qty = {};

  const products: any = bags[0].products.filter(
    (product: any) => product.productId !== productId
  );
  let totalPrice = priceInt + bags[0].totalPrice;
  let updatedProduct: any = {
    productId,
    qty: isProduct.qty + 1,
    createdAt: isProduct.createdAt,
  };

  if (!add) {
    totalPrice = bags[0].totalPrice - priceInt;
    updatedProduct = {
      productId,
      qty: isProduct.qty - 1,
      createdAt: isProduct.createdAt,
    };
  }

  const res = await db.bag.update({
    where: { id: bags[0].id },
    data: {
      products: [...products, updatedProduct],
      totalPrice,
    },
  });
  revalidateTag("bag");

  return res;
};

export const deleteBag = async (productId: string, priceQty: number) => {
  const { userId } = await auth();
  if (!productId) return;

  if (!userId) return;

  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;
  if (!email) return;

  const bags = await db.bag.findMany({
    where: {
      email,
    },
  });

  if (!bags.length) return;

  const products: any = bags[0]?.products?.filter(
    (product: any) => product?.productId !== productId
  );
  const totalPrice = bags[0].totalPrice - priceQty;
  const res = await db.bag.update({
    where: { id: bags[0].id },
    data: {
      products,
      totalPrice,
    },
  });
  revalidateTag("bag");
};

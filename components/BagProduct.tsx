import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getProductById } from "@/utils/bagUtils";
import { Product } from "@prisma/client";
import QtyUpdate from "./QtyUpdate";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DeleteButton from "./DeleteButton";
async function BagProduct({
  bagProduct,
}: {
  bagProduct: { productId: string; qty: number };
}) {
  const product: any = await getProductById(bagProduct.productId);
  const priceQty = Number(product.price) * bagProduct.qty;
  return (
    <>
      <Card>
        <CardContent className="p-4 group">
          <div className="flex items-center space-x-4 group-has-[[data-pending]]:animate-pulse">
            <Image
              src={`https://drive.google.com/thumbnail?id=${product.image[0]}`}
              alt={product.title}
              width={80}
              height={80}
              className="rounded-md"
            />
            <div className="flex-grow">
              <h2 className="text-lg font-semibold capitalize">
                {product.title}
              </h2>
              <p className="text-gray-600">
                INR {Number(product.price).toFixed(2)}
              </p>
            </div>

            <QtyUpdate
              qty={bagProduct.qty}
              productId={bagProduct.productId}
              price={product.price}
            />
            <div className="flex items-center space-x-4">
              <p className="font-semibold">INR {priceQty.toFixed(2)}</p>
              <DeleteButton
                productId={bagProduct.productId}
                priceQty={priceQty}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default BagProduct;

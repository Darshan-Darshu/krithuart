"use client";

import { addToBag } from "@/actions/bagActions";
import { Button } from "@/components/ui/button";
import { SignIn, SignInButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import { useTransition } from "react";

function AddToBag({ productId, price }: { productId: string; price: string }) {
  const [isLoading, startTransition] = useTransition();
  const { isLoaded, isSignedIn, user } = useUser();

  const addToCartHandler = async () => {
    // Simulate API call
    startTransition(async () => {
      await addToBag(productId, price, true);
    });
    //   alert(`Product ${product.id} added to cart!`);
  };
  return (
    <>
      <Button
        onClick={addToCartHandler}
        disabled={isLoading || !isSignedIn || !isLoaded}
        className="w-full md:w-auto disabled:cursor-not-allowed"
      >
        {isLoading ? "Adding to Cart..." : "Add to Cart"}
      </Button>
      {!user && (
        <div className="flex items-center space-x-2">
          <p className="text-[11px] text-gray-700">
            please signin to add the product to bag
          </p>
          <div className="text-blue-300 text-sm underline">
            <SignInButton
              mode="modal"
              fallbackRedirectUrl={`/product/${productId}`}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default AddToBag;

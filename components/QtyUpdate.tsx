"use client";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addToBag } from "@/actions/bagActions";
import { useOptimistic, useTransition } from "react";

function QtyUpdate({
  qty,
  productId,
  price,
}: {
  qty: number;
  productId: string;
  price: string;
}) {
  const [isLoading, startTransition] = useTransition();
  const [optimisticState, addOptimistic] = useOptimistic(
    qty,
    (currentState, optimisticValue: number) => (qty = qty + optimisticValue)
  );

  const handleAddQty = () => {
    startTransition(async () => {
      addOptimistic(1);
      await addToBag(productId, price, true);
    });
  };
  const handleMinusQty = () => {
    if (qty <= 1) return;
    startTransition(async () => {
      addOptimistic(-1);
      await addToBag(productId, price, false);
    });
  };
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        disabled={qty <= 1}
        onClick={handleMinusQty}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <p className="w-6 text-center">{optimisticState}</p>
      <Button
        variant="outline"
        // disabled={isLoading}
        size="icon"
        onClick={handleAddQty}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default QtyUpdate;

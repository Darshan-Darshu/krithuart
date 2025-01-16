"use client";

import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { deleteBag } from "@/actions/bagActions";
import { useTransition } from "react";
import { useToast } from "@/hooks/use-toast";

function DeleteButton({
  productId,
  priceQty,
}: {
  productId: string;
  priceQty: number;
}) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleDelete = async () => {
    startTransition(async () => {
      await deleteBag(productId, priceQty);
      toast({
        title: "Product deleted successfully",
        description: "",
      });
    });
  };
  return (
    <Button
      variant="destructive"
      disabled={isPending}
      size="icon"
      onClick={handleDelete}
      data-pending={isPending ? "" : undefined}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}

export default DeleteButton;

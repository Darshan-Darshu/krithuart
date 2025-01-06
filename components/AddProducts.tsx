import { addProduct } from "@/actions/productAction";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";

export function AddProducts() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const title = formData.get("name")?.toString();
    const image = formData.get("image")?.toString();
    const price = formData.get("price")?.toString();
    const collection = formData.get("collection")?.toString();
    const description = formData.get("description")?.toString();

    if (!title || !image || !price || !collection || !description)
      return alert("Please enter required field");

    await addProduct({ title, image, price, collection, description });
    // https://drive.google.com/file/d/147KK60mmhLiqToVaBqYXCM_U0GwDVgMY/view?usp=drive_link
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusIcon className="h-5 w-5 text-gray-800" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>Admin can add products to shop</DialogDescription>
        </DialogHeader>
        <form action={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Product Name
              </Label>
              <Input id="name" name="name" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image Id
              </Label>
              <Input id="image" name="image" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input id="price" name="price" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="collection" className="text-right">
                Collection
              </Label>
              <Input
                id="collection"
                name="collection"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

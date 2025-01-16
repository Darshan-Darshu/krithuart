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
    const image1 = formData.get("image1")?.toString();
    const image2 = formData.get("image2")?.toString();
    const feature = formData.get("feature")?.toString();
    const feature1 = formData.get("feature1")?.toString();
    const price = formData.get("price")?.toString();
    const collection = formData.get("collection")?.toString();
    const description = formData.get("description")?.toString();
    const specs = formData.get("specs")?.toString();
    const availability = formData.get("availability")?.toString();

    if (
      !title ||
      !image1 ||
      !price ||
      !collection ||
      !description ||
      !feature ||
      !specs ||
      !availability
    ) {
      console.log(title, image1, feature, price, collection, description);
      return;
    }

    const images = [image1];
    const features = [feature];

    if (image2) {
      images.push(image2);
    }

    if (feature1) {
      features.push(feature1);
    }

    await addProduct({
      title,
      image: images,
      feature: features,
      price,
      collection,
      description,
      specs: {},
      availability: availability,
    });
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
              <Label htmlFor="image1" className="text-right">
                Image Id 1
              </Label>
              <Input
                id="image1"
                name="image1"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image2" className="text-right">
                Image Id 2
              </Label>
              <Input id="image2" name="image2" className="col-span-3" />
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="feature" className="text-right">
                Feature
              </Label>
              <Input
                id="feature"
                name="feature"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="feature1" className="text-right">
                Feature 1
              </Label>
              <Input
                id="feature1"
                name="feature1"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="specs" className="text-right">
                specs
              </Label>
              <Input id="specs" name="specs" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="availability" className="text-right">
                Availability
              </Label>
              <Input
                id="availability"
                name="availability"
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

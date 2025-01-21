"use client";

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
import { useUser } from "@clerk/nextjs";
import { PlusIcon } from "lucide-react";
import { useState, useTransition } from "react";

export function AddProducts() {
  const [isPending, startTranstion] = useTransition();
  const { isLoaded, isSignedIn, user } = useUser();
  const [addImage, setAddImage] = useState(0);
  const [addFeature, setAddFeature] = useState(0);
  const [addSpecs, setAddSpecs] = useState(0);

  if (!isSignedIn) return;
  const email = user?.primaryEmailAddress?.emailAddress;
  const admin = process.env.NEXT_PUBLIC_ADMIN;
  if (email !== admin) return;
  const handleSubmit = async (formData: FormData) => {
    const title = formData.get("name")?.toString();
    const image1 = formData.get("image")?.toString();
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
    const specsData = {
      material: "Mesh and high-grade plastic",
      color: "Black",
      dimensions: '26"W x 26"D x 38-42"H',
      weightCapacity: "300 lbs",
    };

    if (addImage) {
      Array(addImage)
        .fill("")
        .map((_, i) => {
          const image2 = formData.get(`image${i + 1}`)?.toString();

          image2 && images.push(image2);
        });
    }

    if (addFeature) {
      Array(addFeature)
        .fill("")
        .map((_, i) => {
          const image2 = formData.get(`feature${i + 1}`)?.toString();

          image2 && features.push(image2);
        });
    }

    startTranstion(
      async () =>
        await addProduct({
          title,
          image: images,
          feature: features,
          price,
          collection,
          description,
          specs: {},
          availability: availability,
        })
    );
    // https://drive.google.com/file/d/147KK60mmhLiqToVaBqYXCM_U0GwDVgMY/view?usp=drive_link
  };

  const addImageHandler = async () => {
    setAddImage(addImage + 1);
  };
  const addFeatureHandler = async () => {
    setAddFeature(addFeature + 1);
  };
  const addSpecsHandler = async () => {
    setAddSpecs(addSpecs + 1);
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
            {Array(addImage)
              .fill("")
              .map((_, i) => (
                <div key={i} className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={`image${i + 1}`} className="text-right">
                    Image Id {i + 1}
                  </Label>
                  <Input
                    id={`image${i + 1}`}
                    name={`image${i + 1}`}
                    className="col-span-3"
                  />
                </div>
              ))}
            <p
              onClick={addImageHandler}
              className="-my-2 text-end text-blue-500 underline cursor-pointer"
            >
              Add
            </p>
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
            {Array(addFeature)
              .fill("")
              .map((_, i) => (
                <div key={i} className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={`feature${i + 1}`} className="text-right">
                    Feature {i + 1}
                  </Label>
                  <Input
                    id={`feature${i + 1}`}
                    name={`feature${i + 1}`}
                    className="col-span-3"
                  />
                </div>
              ))}
            <p
              onClick={addFeatureHandler}
              className="-my-2 text-end text-blue-500 underline cursor-pointer"
            >
              Add
            </p>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="specs" className="text-right">
                Specs
              </Label>
              <Input id="specs" name="specs" className="col-span-3" required />
            </div>
            {/* {Array(addSpecs)
              .fill("")
              .map((_, i) => (
                <div key={i} className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={`specs${i + 1}`} className="text-right">
                    Specs {i + 1}
                  </Label>
                  <Input
                    id={`specs${i + 1}`}
                    name={`specs${i + 1}`}
                    className="col-span-3"
                  />
                </div>
              ))}
            <p
              onClick={addSpecsHandler}
              className="-my-2 text-end text-blue-500 underline cursor-pointer"
            >
              Add
            </p> */}
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
            <Button type="submit" disabled={isPending}>
              {isPending ? "Adding Product..." : "Add"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

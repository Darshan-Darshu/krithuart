"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addStyle } from "@/actions/styleAction";
import { PrismaPromise, Style } from "@prisma/client";
import { use, useState } from "react";
import { addCollection } from "@/actions/collectionAction";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  image: z.string(),
  style: z.string(),
});

type Props = {
  stylePromise: PrismaPromise<Style[]>;
};

function AddCollection({ stylePromise }: Props) {
  const [selectedstyle, setStyle] = useState("");
  const styles = use(stylePromise);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: "",
      style: "",
    },
  });

  function onSubmit({ image, name }: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(style);
    if (!image || !name || !selectedstyle) return;

    const res = addCollection(name.trim(), image.trim(), selectedstyle.trim());
  }
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="w-[400px] h-[400px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Collection Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} required />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Url Id</FormLabel>
                  <FormControl>
                    <Input placeholder="image " {...field} required />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col">
              <label className="text-sm mb-2">Select Style</label>
              <select
                value={selectedstyle}
                onChange={(e) => setStyle(e.target.value)}
                className="border rounded-[4px] p-2 text-sm text-gray-600"
              >
                {styles.map((style) => (
                  <option value={style.name} key={style.id}>
                    {style.name}
                  </option>
                ))}
              </select>
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default AddCollection;

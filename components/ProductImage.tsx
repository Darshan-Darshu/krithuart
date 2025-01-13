"use client";

import { useState } from "react";
import Image from "next/image";

export function ProductImages({ images }: { images: string[] }) {
  const [mainImage, setMainImage] = useState(images[0]);
  const length = images.length;
  console.log(length);

  return (
    <div>
      <div className="relative aspect-square mb-4">
        <Image
          src={mainImage}
          alt="Product image"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className={`grid grid-cols-8 gap-2`}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`relative aspect-square ${
              mainImage === image ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

import { db } from "@/lib/db";
import { Collection } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Collections({ collections }: { collections: Collection[] }) {
  //   const res = await db.collection.create({
  //     data: {
  //       name: "arts",
  //       image: "139TYDcwCHtp_xmLGuDZpPEo3cPAFJPYB",
  //     },
  //   });
  //   https://drive.google.com/file/d/139TYDcwCHtp_xmLGuDZpPEo3cPAFJPYB/view?usp=drive_link
  // const collections = await db.collection.findMany();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
      {collections.map((collection) => (
        <Link
          href={`/arts/${collection.style}/${collection.name}`}
          key={collection.id}
        >
          <Image
            src={`https://drive.google.com/thumbnail?id=${collection.image}`}
            alt={collection.name}
            width={800}
            height={800}
            className="w-full h-[250px] lg:h-[300px] object-cover hover:scale-105 transition-all ease-in-out duration-500"
          />
          <p className="text-gray-500 text-lg ">{collection.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Collections;

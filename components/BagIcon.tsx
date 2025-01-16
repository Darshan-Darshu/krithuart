import { db } from "@/lib/db";
import { getBagByEmail } from "@/utils/bagUtils";
import { auth, currentUser } from "@clerk/nextjs/server";
import { ShoppingBagIcon } from "lucide-react";
import { unstable_cache } from "next/cache";
import Link from "next/link";

async function BagIcon() {
  const { userId } = await auth();

  if (!userId) return;

  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;
  console.log(user);
  if (!email) return;

  const bags = await getBagByEmail(email);
  const products = bags[0]?.products?.length;
  return (
    <Link href="/bag" className="relative">
      <ShoppingBagIcon className="h-5 w-5 text-gray-800" />
      {products > 0 && (
        <p className="absolute -top-[6px] -right-[6px] bg-red-700 text-white text-[10px] rounded-full p-[1px] h-4 w-4 flex items-center justify-center animate-pulse">
          {products}
        </p>
      )}
    </Link>
  );
}

export default BagIcon;

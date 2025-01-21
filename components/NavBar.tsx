import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustifyIcon } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <AlignJustifyIcon className="h-5 w-5 text-gray-800" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>LOGO</SheetTitle>
            <SheetDescription>ARTS Quotations</SheetDescription>
          </SheetHeader>
          <ul className=" text-gray-600 font-thin text-[18px] space-y-2 mt-4">
            <li className="cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/arts">All Products</Link>
            </li>
            <li className="cursor-pointer">Arts</li>
            <li className="cursor-pointer">
              <Link href="/about">About Us</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}

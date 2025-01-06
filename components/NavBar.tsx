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
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">All Products</li>
            <li className="cursor-pointer">Arts</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}

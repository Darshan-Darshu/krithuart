import { SearchIcon, ShoppingBagIcon } from "lucide-react";
import { AddProducts } from "./AddProducts";
import { Navbar } from "./NavBar";
import BagIcon from "./BagIcon";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#21500c] text-white text-center py-2 text-sm font-semibold">
        COD AVAILABLE 🚚Whatsapp - 7619211187
      </div>
      <div className="bg-[#e8e5e5] py-4 border-b px-4 lg:px-0">
        <nav className="lg:max-w-[60vw] lg:mx-auto flex items-center justify-between">
          <Navbar />
          <Link href="/">LOGO</Link>
          <ul className="hidden flex-1 lg:flex items-center space-x-6 ml-16 text-gray-600 font-thin text-[15px]">
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
          <div className="flex items-center space-x-4">
            <AddProducts />
            {/* <SearchIcon className="h-5 w-5 text-gray-800" /> */}
            <BagIcon />
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

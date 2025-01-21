import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              About Us
            </h3>
            <p className="text-sm">
              We're dedicated to providing the best shopping experience for our
              customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm hover:text-gray-900">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm hover:text-gray-900">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/arts" className="text-sm hover:text-gray-900">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-gray-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-sm hover:text-gray-900"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-gray-900">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-sm hover:text-gray-900">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Your Krithu Resin Arts
              E-commerce Store. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 mr-4"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 mr-4"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 mr-4"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Check, Truck, Clock, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  features: string[];
  specs: {
    material: string;
    color: string;
    dimensions: string;
    weightCapacity: string;
  };
  availability: string;
  shippingInfo: {
    estimatedDelivery: string;
    freeShipping: boolean;
  };
  warranty: string;
}

export function ProductInfo({ product }: { product: Product }) {
  //   const [isLoading, setIsLoading] = useState(false);

  //   const addToCart = async () => {
  //     setIsLoading(true);
  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     setIsLoading(false);
  //     alert(`Product ${product.id} added to cart!`);
  //   };

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            ({product.reviewCount} reviews)
          </span>
        </div>
        <p className="text-3xl font-semibold mb-4">
          INR {product.price.toFixed(2)}
        </p>
      </div>

      <p className="text-gray-600">{product.description}</p>

      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Clock className="w-4 h-4" />
        <span>{product.availability}</span>
      </div>

      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Truck className="w-4 h-4" />
        <span>
          {product.shippingInfo.freeShipping
            ? "Free shipping"
            : "Shipping calculated at checkout"}{" "}
          | Estimated delivery: {product.shippingInfo.estimatedDelivery}
        </span>
      </div>

      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <ShieldCheck className="w-4 h-4" />
        <span>{product.warranty}</span>
      </div>

      <Tabs defaultValue="features" className="w-full">
        <TabsList>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="specs">Specifications</TabsTrigger>
        </TabsList>
        <TabsContent value="features">
          <ul className="list-none space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="specs">
          <dl className="space-y-2">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex">
                <dt className="w-1/3 font-semibold">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </dt>
                <dd className="w-2/3">{value}</dd>
              </div>
            ))}
          </dl>
        </TabsContent>
      </Tabs>

      <Button
        // onClick={addToCart}
        // disabled={isLoading}
        className="w-full md:w-auto"
      >
        {/* {isLoading ? 'Adding to Cart...' : 'Add to Cart'} */}
        Add To Cart
      </Button>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1">
          <AccordionTrigger>How long does shipping take?</AccordionTrigger>
          <AccordionContent>
            Shipping typically takes 3-5 business days for standard shipping,
            and 1-2 business days for express shipping.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>What's your return policy?</AccordionTrigger>
          <AccordionContent>
            We offer a 30-day return policy for all our products. Items must be
            in their original condition and packaging.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger>Is assembly required?</AccordionTrigger>
          <AccordionContent>
            Minimal assembly is required. The chair comes with clear
            instructions and all necessary tools for easy setup.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

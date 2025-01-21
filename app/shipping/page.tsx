import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shipping Information</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Shipping Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We strive to process and ship all orders within 1-3 business days.
            Please note that this timeframe does not include weekends or
            holidays. Once your order has been shipped, you will receive a
            confirmation email with tracking information.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Delivery Times</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Standard Shipping: 5-7 business days</li>
            <li>Express Shipping: 2-3 business days</li>
            <li>
              Overnight Shipping: Next business day (order must be placed before
              2 PM EST)
            </li>
          </ul>
          <p className="mt-4">
            Please note that these are estimated delivery times and may vary
            depending on your location and any unforeseen circumstances.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Shipping Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Shipping rates are calculated based on the weight of your order and
            your delivery address. You can view the exact shipping cost during
            checkout before completing your purchase.
          </p>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="international-shipping">
          <AccordionTrigger>International Shipping</AccordionTrigger>
          <AccordionContent>
            <p>
              We offer international shipping to select countries. Please note
              that international orders may be subject to import duties and
              taxes, which are the responsibility of the recipient. Delivery
              times for international orders typically range from 7-21 business
              days, depending on the destination and customs processing.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tracking">
          <AccordionTrigger>Order Tracking</AccordionTrigger>
          <AccordionContent>
            <p>
              Once your order has been shipped, you will receive a confirmation
              email with a tracking number. You can use this number to track
              your package on our website or the carrier's website. Please allow
              24-48 hours for tracking information to become available after
              receiving your shipping confirmation.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="returns">
          <AccordionTrigger>Returns and Exchanges</AccordionTrigger>
          <AccordionContent>
            <p>
              If you need to return or exchange an item, please refer to our
              Returns and Exchanges policy. In general, items must be returned
              within 30 days of receipt and be in their original, unused
              condition with all tags attached. The customer is responsible for
              return shipping costs unless the return is due to our error.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about our shipping policies or your specific
          order, please don't hesitate to contact our customer service team at{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-600 hover:underline"
          >
            krithuresinstudio@gmail.com
          </a>{" "}
          or call us at{" "}
          <a href="tel:+18001234567" className="text-blue-600 hover:underline">
            7619211187
          </a>
          .
        </p>
      </div>
    </div>
  );
}

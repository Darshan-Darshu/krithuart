import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Frequently Asked Questions - Terms and Conditions
      </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What are Terms and Conditions?</AccordionTrigger>
          <AccordionContent>
            Terms and Conditions are a set of rules and guidelines that govern
            the use of our e-commerce website. They outline the rights and
            responsibilities of both the users and our company, covering aspects
            such as purchasing, shipping, returns, and use of the website.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need to accept the Terms and Conditions?
          </AccordionTrigger>
          <AccordionContent>
            Yes, by using our website or making a purchase, you automatically
            agree to our Terms and Conditions. We recommend reading them
            carefully before using our services or making a purchase.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can the Terms and Conditions change?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we reserve the right to modify our Terms and Conditions at any
            time. Any changes will be effective immediately upon posting on the
            website. We will notify users of significant changes via email or a
            prominent notice on our site.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            Our return policy allows returns within 30 days of purchase for most
            items, provided they are in their original condition. Some products
            may have specific return conditions. Please refer to our detailed
            return policy in the Terms and Conditions for more information.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How do you handle my personal information?
          </AccordionTrigger>
          <AccordionContent>
            We take your privacy seriously. Our Terms and Conditions include our
            Privacy Policy, which details how we collect, use, and protect your
            personal information. We comply with all applicable data protection
            laws and regulations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            What happens if there&apos;s a pricing error?
          </AccordionTrigger>
          <AccordionContent>
            While we strive for accuracy, pricing errors may occur. We reserve
            the right to cancel orders arising from such errors. If this
            happens, we will notify you promptly and offer alternatives or a
            full refund.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            How do you handle intellectual property?
          </AccordionTrigger>
          <AccordionContent>
            All content on our website, including text, graphics, logos, and
            software, is protected by copyright and other intellectual property
            laws. Users are prohibited from using, copying, or distributing this
            content without our express permission.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            What if I have a dispute with your company?
          </AccordionTrigger>
          <AccordionContent>
            Our Terms and Conditions outline the process for dispute resolution.
            Generally, we encourage users to contact our customer service team
            first. If the issue cannot be resolved, the terms specify the
            jurisdiction and process for legal proceedings.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            Can I use your website for commercial purposes?
          </AccordionTrigger>
          <AccordionContent>
            Our website and its contents are intended for personal,
            non-commercial use only. Any commercial use, including reselling
            products purchased from our site, is prohibited unless explicitly
            authorized by us in writing.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>
            How can I contact you about the Terms and Conditions?
          </AccordionTrigger>
          <AccordionContent>
            If you have any questions or concerns about our Terms and
            Conditions, please contact our customer service team. You can reach
            us through the contact information provided on our website or in the
            Terms and Conditions document.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

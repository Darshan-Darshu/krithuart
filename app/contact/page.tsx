import BusinessInfo from "@/components/BusinessInfo";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import React from "react";

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ContactForm />
        </div>
        <div>
          <BusinessInfo />
          <Map />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

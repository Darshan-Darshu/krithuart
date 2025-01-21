import { Mail, Phone, MapPin } from "lucide-react";

export default function BusinessInfo() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Our Information</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <Mail className="mr-2" />
          <span>krithuresinstudio@gmail.com</span>
        </div>
        <div className="flex items-center">
          <Phone className="mr-2" />
          <span>+91 76192 11187</span>
        </div>
        <div className="flex items-center">
          <MapPin className="mr-2" />
          <span>
            Operational Address: #02, Ground Floor, Hallkurke Main Road,
            Basavaraju Complex, Honavalli, Tiptur, Tumakuru, Karnataka Tumakuru
            KARNATAKA 572201
          </span>
        </div>
      </div>
    </div>
  );
}

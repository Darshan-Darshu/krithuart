import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Our Company</h1>

      {/* Company History */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Founded in 2010, our company started as a small online store with
              a passion for delivering quality products to our customers. Over
              the years, we've grown into a leading ecommerce platform, serving
              millions of happy customers worldwide.
            </p>
            <p className="text-lg">
              Our journey has been marked by innovation, customer-centric
              approach, and a commitment to sustainability. We continue to
              evolve, always keeping our customers' needs at the heart of
              everything we do.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Company growth illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              To empower consumers by providing a seamless online shopping
              experience with a wide range of high-quality products, exceptional
              customer service, and a commitment to sustainable practices.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Team Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Jane Doe",
              role: "CEO",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              name: "John Smith",
              role: "CTO",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              name: "Emily Brown",
              role: "Head of Customer Experience",
              image: "/placeholder.svg?height=100&width=100",
            },
          ].map((member) => (
            <Card key={member.name}>
              <CardContent className="flex flex-col items-center p-6">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Our Core Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Customer First",
              description:
                "We prioritize our customers' needs and satisfaction above all else.",
            },
            {
              title: "Innovation",
              description:
                "We constantly seek new ways to improve our products and services.",
            },
            {
              title: "Integrity",
              description:
                "We conduct our business with honesty, transparency, and ethical practices.",
            },
            {
              title: "Sustainability",
              description:
                "We are committed to environmentally friendly practices and products.",
            },
          ].map((value) => (
            <Card key={value.title}>
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

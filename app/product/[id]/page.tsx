import { ProductImages } from "@/components/ProductImage";
import { ProductInfo } from "@/components/ProductInfo";
import { db } from "@/lib/db";
import Image from "next/image";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) return;
  const product = await db.product.findUnique({
    where: {
      id,
    },
  });
  if (!product) return;
  const products = [
    {
      id: "1",
      name: "Ergonomic Desk Chair",
      description:
        "Experience ultimate comfort with our ergonomic desk chair. Designed to support your body during long work hours, this chair features adjustable lumbar support, breathable mesh back, and customizable armrests.",
      price: 299.99,
      rating: 4.5,
      reviewCount: 128,
      features: [
        "Adjustable lumbar support for personalized comfort",
        "Breathable mesh back promotes air circulation",
        "Customizable armrests adapt to your preferred position",
        "360-degree swivel for easy mobility",
        "Pneumatic seat height adjustment for optimal ergonomics",
        "Durable construction supports up to 300 lbs",
        "Sleek design complements any office environment",
      ],
      specs: {
        material: "Mesh and high-grade plastic",
        color: "Black",
        dimensions: '26"W x 26"D x 38-42"H',
        weightCapacity: "300 lbs",
      },
      availability: "In stock - ships within 24 hours",
      shippingInfo: {
        estimatedDelivery: "3-5 business days",
        freeShipping: true,
      },
      warranty: "5-year limited warranty",
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/100/300",
        "https://picsum.photos/300/300",
        "https://picsum.photos/200/200",
        "https://picsum.photos/200/400",
      ],
    },
  ];
  return (
    <div className="xl:max-w-[60vw] mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <ProductImages images={products[0].images} />
        <ProductInfo product={products[0]} />
      </div>
    </div>
  );
}

export default ProductPage;

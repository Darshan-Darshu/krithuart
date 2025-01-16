import { getBagByEmail } from "@/utils/bagUtils";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import BagProduct from "@/components/BagProduct";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

async function BagPage() {
  // {cartItems.length === 0 ? (
  //     <p>Your cart is empty.</p>
  const { userId } = await auth();

  if (!userId) return;

  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;
  if (!email) return;
  const cartItems = await getBagByEmail(email);

  if (!cartItems.length)
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">Your cart is empty.</p>
        </CardContent>
      </Card>
    );

  if (!cartItems[0].products.length) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">Your cart is empty.</p>
        </CardContent>
      </Card>
    );
  }

  const tax = 100;
  const total = cartItems[0].totalPrice + tax;

  //   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Your Shopping Cart
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cartItems[0].products
            ?.sort((a: any, b: any) => {
              return (
                Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
              );
            })
            .map((item: any) => (
              <BagProduct key={item.productId} bagProduct={item} />
            ))}
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>INR {cartItems[0].totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>INR {tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>INR {total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BagPage;

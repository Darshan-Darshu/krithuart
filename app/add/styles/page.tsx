import { notFound } from "next/navigation";
import AddStyles from "@/components/AddStyles";
import { currentUser } from "@clerk/nextjs/server";

async function StylePage() {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;

  const admin = process.env.NEXT_PUBLIC_ADMIN;
  if (email !== admin) return notFound();

  return (
    <div className="">
      <AddStyles />
    </div>
  );
}

export default StylePage;

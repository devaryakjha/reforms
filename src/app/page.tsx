import { getIsSignedIn } from "@/utils/is_signed_in";
import { redirect } from "next/navigation";

export default async function Home() {
  const isSignedIn = await getIsSignedIn();
  if (isSignedIn) {
    redirect("/dashboard");
  } else {
    redirect("/about");
  }
}

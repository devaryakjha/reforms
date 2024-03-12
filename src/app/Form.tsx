"use client";

import registerEmailforNotifying from "./submit_form";
import { toast } from "sonner";

export default function Form({ children }: { children: React.ReactNode }) {
  return (
    <form
      action={async (data) => {
        const result = await registerEmailforNotifying(data);
        switch (result) {
          case "error":
            toast.error("An error occurred. Please try again later.");
            break;
          case "invalid_email":
            toast.error("Invalid email address.");
            break;
          case "success":
            toast.success(
              "Thanks for registering your email. We will notify you when the product is available.",
            );
            break;
        }
      }}
    >
      {children}
    </form>
  );
}

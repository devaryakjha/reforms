"use client";
import submitEmail from "@/actions/submit_email";
import styles from "./Footer.module.css";
import { toast } from "sonner";
import TextField from "@/ui/TextField";
import Button from "@/ui/Button";

interface EmailFormProps {
  children?: React.ReactNode;
}

export default function EmailForm(props: EmailFormProps) {
  return (
    <form
      className={styles.RHS}
      action={async (data) => {
        const result = await submitEmail(data);
        console.log({ result });
        switch (result) {
          case "error":
            toast.error("An error occurred. Please try again later.");
            break;
          case "already_registered":
            toast.error("You're already registered. Thanks!");
            break;
          case "invalid_email":
            toast.error("Invalid email address.");
            break;
          case "success":
            toast.success(
              "Thanks for registering your email. We'll keep you updated!",
            );
            break;
        }
      }}
    >
      {props.children}
      <TextField
        label="Updates right to your Inbox"
        placeholder="Email Address"
        name="email"
      />
      <Button variant="primary" size="xl" type="submit">
        Send
      </Button>
    </form>
  );
}

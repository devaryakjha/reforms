"use client";
import submitEmail from "@/app/actions/submit_email";
import styles from "./Footer.module.css";
import TextField from "@/ui/TextField";
import Button from "@/ui/Button";
import { useFormState, useFormStatus } from "react-dom";
import { SubmitEmailResponse } from "@/app/actions/type";
import { useEffect } from "react";
import { toast } from "sonner";

interface EmailFormProps {
  children?: React.ReactNode;
}

// const initialState
const initialFormState: SubmitEmailResponse = {
  response: "unknown_error",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="primary" size="xl" type="submit" aria-busy={pending}>
      Send
    </Button>
  );
}

export default function EmailForm(props: EmailFormProps) {
  const [state, formAction] = useFormState(submitEmail, initialFormState);
  useEffect(() => {
    switch (state?.response) {
      case "success":
        toast.success("Thank you for subscribing");
        break;
      case "already_registered":
        toast.info("You are already subscribed");
        break;
      case "invalid_email":
        toast.error("Invalid email address");
        break;
      case "error":
        toast.error("An error occurred, please try again");
        break;
      default:
        break;
    }
  }, [state]);
  return (
    <form className={styles.RHS} action={formAction}>
      {props.children}
      <TextField
        label="Updates right to your Inbox"
        placeholder="Email Address"
        name="email"
        key="email"
        type="email"
        required
      />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.response}
      </p>
      <SubmitButton key="email_submit_btn" />
    </form>
  );
}

"use client";
import submitEmail from "@/app/actions/submit_email";
import styles from "./Footer.module.css";
import TextField from "@/ui/TextField";
import Button from "@/ui/Button";
import { useFormState, useFormStatus } from "react-dom";
import { SubmitEmailResponse } from "@/app/actions/type";

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
  return (
    <form className={styles.RHS} action={formAction}>
      {props.children}
      <TextField
        label="Updates right to your Inbox"
        placeholder="Email Address"
        name="email"
        key="email"
      />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.response}
      </p>
      <SubmitButton key="email_submit_btn" />
    </form>
  );
}

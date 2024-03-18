"use server";

import { insertIntoOptedUsers } from "@/lib/db/tables/optedusers/actions";
import type { SubmitEmailResponse } from "./type";
import { z } from "zod";

const schema = z.object({ email: z.string().email() });

const createResponse = (
  response: SubmitEmailResponse["response"],
): SubmitEmailResponse => {
  return { response };
};

export default async function submitEmail(
  _?: SubmitEmailResponse,
  payload?: FormData,
): Promise<SubmitEmailResponse> {
  const validatedFields = schema.safeParse({
    email: payload?.get("email"),
  });

  if (!validatedFields.success) {
    return createResponse("invalid_email");
  }

  try {
    await insertIntoOptedUsers(validatedFields.data.email);
    return createResponse("success");
  } catch (error: unknown) {
    if ((error as any).code === "23505") {
      return createResponse("already_registered");
    }
    return createResponse("error");
  }
}

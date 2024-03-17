"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

import { SubmitEmailResponse } from "./type";

const createResponse = (
  response: SubmitEmailResponse["response"],
): SubmitEmailResponse => {
  return { response };
};

export default async function submitEmail(
  _?: SubmitEmailResponse,
  _payload?: FormData,
): Promise<SubmitEmailResponse> {
  const validatedFields = schema.safeParse({
    email: _payload?.get("email"),
  });

  if (!validatedFields.success) {
    return Promise.resolve(createResponse("invalid_email"));
  }

  console.log({ data: validatedFields.data });
  return createResponse("success");

  // console.log("submitEmail", { _ });
  // const email = formData.get("email");

  // if (
  //   typeof email !== "string" ||
  //   !email.includes("@") ||
  //   email.length < 3 ||
  //   email.length > 320 ||
  //   email.includes(" ")
  // ) {
  //   return createResponse("invalid_email");
  // }

  // try {
  //   await insertIntoOptedUsers(email);
  //   return createResponse("success");
  // } catch (error: unknown) {
  //   if ((error as any).code === "23505") {
  //     return createResponse("already_registered");
  //   }
  //   return createResponse("error");
  // }
}

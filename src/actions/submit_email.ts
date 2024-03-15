"use server";

import { sql } from "@vercel/postgres";
import { NeonDbError } from "@neondatabase/serverless";

export default async function submitEmail(formData: FormData) {
  const email = formData.get("email");

  if (
    typeof email !== "string" ||
    !email.includes("@") ||
    email.length < 3 ||
    email.length > 320 ||
    email.includes(" ")
  ) {
    return "invalid_email";
  }

  await sql`
    CREATE TABLE IF NOT EXISTS optedusers (
      id SERIAL PRIMARY KEY,
      email TEXT NOT NULL UNIQUE
    )
  `;

  try {
    await sql`
    INSERT INTO optedusers (email) VALUES (${email})
  `;
  } catch (error: unknown) {
    if (error instanceof NeonDbError && error.code === "23505") {
      return "already_registered";
    }
    return "error";
  }
  return "success";
}

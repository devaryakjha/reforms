"use client";

import { Toaster } from "sonner";

export default function Toast({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}

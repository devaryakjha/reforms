"use client";

import { Toaster } from "sonner";

/**
 * Universal toast component
 */
export default function Toast({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster theme="system" position="top-right" />
      {children}
    </>
  );
}

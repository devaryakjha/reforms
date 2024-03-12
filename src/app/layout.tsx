import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Toast from "@/components/Toaster";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reforms: Elevate Your Data Collection with Elegance and Efficiency",
  description:
    "Choose Reforms for a form-building experience that's as refined as it is powerful – because your data deserves more than just a form.",
  keywords:
    "data collection, forms, surveys, questionnaires, polls, quizzes, data analysis, data insights, data visualization, data reporting, data management, data security, data privacy, data compliance, data governance, data integration, data migration, data transformation, data enrichment, data validation, data cleaning, data deduplication, data normalization, data standardization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toast>{children}</Toast>
      </body>
    </html>
  );
}

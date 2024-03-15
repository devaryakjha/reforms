import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Toast from "@/components/Toaster";
import NavBar from "@/components/NavBar";
import ScrollWatcher from "@/components/NavBar/ScrollWatcher";
import { getSession } from "@auth0/nextjs-auth0";
import Footer from "@/components/Footer";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reforms: Elevate Your Data Collection with Elegance and Efficiency",
  description:
    "Choose Reforms for a form-building experience that's as refined as it is powerful – because your data deserves more than just a form.",
  keywords:
    "data collection, forms, surveys, questionnaires, polls, quizzes, data analysis, data insights, data visualization, data reporting, data management, data security, data privacy, data compliance, data governance, data integration, data migration, data transformation, data enrichment, data validation, data cleaning, data deduplication, data normalization, data standardization",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const isSignedIn = Boolean(session?.user);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toast key="GlobalToast">
          <ScrollWatcher />
          <NavBar
            isSignedIn={isSignedIn}
            key="GloablNavbar"
            claims={session?.user}
          />
          {children}
          <Footer />
        </Toast>
      </body>
    </html>
  );
}

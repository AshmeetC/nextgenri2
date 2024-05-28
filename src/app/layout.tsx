import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Page from "@/app/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextGen Research Institute", // Ashmeet Chhabra
  description: "A Research Institute for High Schoolers",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

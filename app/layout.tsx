import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/features/navigation-bar/navigation-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belle",
  description: "Beauty platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belle",
  description: "Beauty platform",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        inter.className,
        "flex justify-center h-[100vh] items-center"
      )} suppressHydrationWarning>
      {children}
      </body>
    </html>
  );
}

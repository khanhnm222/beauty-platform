import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/features/navigation-bar/navigation-bar";
import Footer from "@/components/features/footer/footer";
import { Suspense } from "react";
import Loading from "@/components/features/loading/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belle",
  description: "Beauty platform",
  keywords:
    'beauty, platform, model, skincare, fashion, makeup, doctor, seo',
  icons: {
    icon: '@/public/belle-icon.png'
  }
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
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}

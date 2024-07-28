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
  },
  openGraph: {
    title: "Belle",
    description: "Beauty platform",
    type: 'website',
    images: [
      {
        url: 'https://main--belle-beauty-platform.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbelle-logo.53201411.png&w=256&q=75',
        width: 256,
        height: 87,
      }
    ]
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

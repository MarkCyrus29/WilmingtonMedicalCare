import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import ParallaxProviderWrapper from "@/components/ParallaxProviderWrapper";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import Footer from "@/components/layout/Footer";
import { Poppins } from "next/font/google";
import GetInTouch from "@/components/ui/GetInTouch";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Wilmington",
  description: "Wilmington Mental Health & Medical Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased relative `}>
        <Header />
        <ParallaxProviderWrapper>{children}</ParallaxProviderWrapper>
        <ScrollToTopButton />
        <GetInTouch />
        <Footer />
      </body>
    </html>
  );
}

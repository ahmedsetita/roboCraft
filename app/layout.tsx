import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingInstagram";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RoboCraft Academy - Master Robotics & Embedded Systems",
  description:
    "Build real robots. Gain practical skills. Launch your engineering career. FREE foundation course + 16 intensive sessions with hands-on Tinkercad & Wokwi projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <FloatingSocial />
        <Footer />
      </body>
    </html>
  );
}


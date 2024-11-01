import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => <div>Loading...</div>,
});
const poppins = Poppins({
  weight: ["400", "600"],
  display: "auto",
  preload: true,
  subsets: ["latin"],
  variable: "--poppins",
});

export const metadata: Metadata = {
  title: "Al Khajista Shifting Movers UAE",
  description:
    "Providing expert moving and packing services across major areas in the UAE, including Dubai, Sharjah, Ajman, and beyond. Trust us for seamless, reliable moves across the Emirates.",
  robots: {
    index: true,
    "max-image-preview": "large",
    follow: true,
  },
  alternates: {
    canonical: process.env.PUBLIC_URL,
    languages: {
      en: process.env.PUBLIC_URL,
    },
  },
  keywords: [
    "Movers and packers",
    "movers in dubai",
    "moving company",
    "al khajista shifting movers",
    "house shifting",
  ],
  openGraph: {
    type: "website",
    countryName: "United Arab Emarites",
    description:
      "Providing expert moving and packing services across major areas in the UAE, including Dubai, Sharjah, Ajman, and beyond. Trust us for seamless, reliable moves across the Emirates.",
    faxNumbers: "+971568741003",
    phoneNumbers: "+971568741003",
    siteName: "Al Khajista Shifting Movers",
    images: `/images/Al-Khajista-Logo.png`,
    title: "Al Khajista Shifting Movers",
    url: process.env.PUBLIC_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container ${poppins.variable}  antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

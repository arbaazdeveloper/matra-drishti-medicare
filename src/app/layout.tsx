import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbaar/Navbaar";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsappButton/WhatsappButton";
import TopHeaderBar from "@/components/Topheader/TopHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matra drishti Medicare Hospital | Expert Doctors in Lucknow",
  metadataBase: new URL('https://matra-drishti-medicare.arbaazuniquegzp.workers.dev/'),
  description:
    "Matra drishti Medicare Hospital in Lucknow offers 24x7 emergency care, expert doctors, modern facilities, and hassle-free appointments.",
  keywords: [
    "Matra drishti Hospital",
    "multispeciality hospital Lucknow",
    "best hospital in Lucknow",
    "24x7 emergency care Lucknow",
    "24x7 emergency care Jankipuram Lucknow",
    "24x7 emergency care Jankipuram Extension Lucknow",
    "expert doctors",
    "healthcare services",
  ],
  openGraph: {
    title: "Matra drishti Medicare Hospital",
    description:
      "Trusted hospital in Lucknow with expert doctors, emergency services, and modern healthcare facilities.",
    url: "https://matra-drishti-medicare.arbaazuniquegzp.workers.dev/",
    siteName: "Matra drishti Hospital",
    images: [
      {
        url: "/og-image.jpeg", // Replace with actual homepage banner image
        width: 1200,
        height: 630,
        alt: "Matra drishti Medicare",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopHeaderBar />
        <Navbar />
        <div className="overflow-x-hidden">

          {children}
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
